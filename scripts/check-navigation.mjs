#!/usr/bin/env node
// Pemeriksaan yang tidak dilakukan `mint validate`: halaman di luar navigasi,
// entri navigasi ganda, frontmatter wajib, dan gambar lokal yang tidak ada.
// Jalankan dari root repo: node scripts/check-navigation.mjs

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const errors = [];

const config = JSON.parse(readFileSync(join(root, 'docs.json'), 'utf8'));

// Navigasi Mintlify bisa bersarang lewat groups, tabs, anchors, atau dropdowns; semua halaman ada di array `pages`.
function collectPages(node, out) {
	if (Array.isArray(node)) {
		for (const item of node) collectPages(item, out);
	} else if (node && typeof node === 'object') {
		for (const [key, value] of Object.entries(node)) {
			if (key === 'pages' && Array.isArray(value)) {
				for (const page of value) {
					if (typeof page === 'string') out.push(page);
					else collectPages(page, out);
				}
			} else {
				collectPages(value, out);
			}
		}
	}
	return out;
}

const navPages = collectPages(config.navigation, []);
const seen = new Set();
for (const page of navPages) {
	if (seen.has(page)) errors.push(`Halaman ${page} muncul lebih dari sekali di navigasi.`);
	seen.add(page);
	if (!existsSync(join(root, `${page}.mdx`)) && !existsSync(join(root, `${page}.md`))) {
		errors.push(`Navigasi merujuk ${page}, tetapi berkas ${page}.mdx tidak ada.`);
	}
}

const ignoredDirs = new Set(['node_modules', 'snippets', 'drafts', 'scripts']);
function walk(dir, out) {
	for (const name of readdirSync(dir)) {
		if (name.startsWith('.') || ignoredDirs.has(name)) continue;
		const path = join(dir, name);
		if (statSync(path).isDirectory()) walk(path, out);
		else if (name.endsWith('.mdx') && !name.endsWith('.draft.mdx')) out.push(path);
	}
	return out;
}

for (const file of walk(root, [])) {
	const page = relative(root, file).replace(/\.mdx$/, '');
	if (!seen.has(page)) {
		errors.push(`${page}.mdx tidak ada di navigasi docs.json. Tambahkan, atau hapus berkasnya.`);
	}
	const text = readFileSync(file, 'utf8');
	const frontmatter = text.match(/^---\n([\s\S]*?)\n---/);
	for (const key of ['title', 'description']) {
		if (!frontmatter || !new RegExp(`^${key}:\\s*\\S`, 'm').test(frontmatter[1])) {
			errors.push(`${page}.mdx tidak punya \`${key}\` di frontmatter.`);
		}
	}
	for (const match of text.matchAll(/(?:\]\(|src=["'])(\/images\/[^)"'\s]+)/g)) {
		if (!existsSync(join(root, match[1]))) {
			errors.push(`${page}.mdx merujuk gambar ${match[1]} yang tidak ada.`);
		}
	}
}

if (errors.length > 0) {
	for (const error of errors) console.error(`GALAT: ${error}`);
	console.error(`\n${errors.length} masalah navigasi atau halaman.`);
	process.exit(1);
}
console.log(`Navigasi lolos: ${navPages.length} halaman, semua berkas terdaftar.`);
