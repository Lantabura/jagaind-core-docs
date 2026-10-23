# Dokumentasi JagaInd

Repositori ini berisi dokumentasi pengguna dan admin JagaInd, dibangun dengan [Mintlify](https://mintlify.com). Kode aplikasi ada di repositori terpisah (`jagaind/core`).

## Struktur

| Folder | Isi |
| --- | --- |
| `index.mdx` | Beranda dokumentasi |
| `mulai/` | Konsep dasar dan panduan cepat admin dan operator |
| `akun/` | Masuk, kata sandi, pengguna, peran dan izin |
| `pemantauan/` | Layar Pantau, menanggapi insiden, riwayat, bunyi alarm |
| `kamera/` | Menambah, mengubah, Ignore Zone, mode debug |
| `modul/` | Katalog modul, pemasangan, dan panduan per modul |
| `aturan/` | Aturan alarm |
| `notifikasi/` | Telegram dan WhatsApp |
| `admin/` | Instalasi, konfigurasi, kesehatan server, retensi data |
| `bantuan/` | Pemecahan masalah dan FAQ |
| `images/` | Screenshot dari data demo yang sudah disanitasi |
| `docs.json` | Konfigurasi situs dan navigasi |

Panduan gaya dan istilah ada di `AGENTS.md`. Ringkasan produk untuk penulis ada di `.mintlify/product-brief.md`.

## Menjalankan secara lokal

Butuh Node.js 20.17 atau lebih baru.

```bash
npm i -g mint
mint dev
```

Buka `http://localhost:3000`.

## Memeriksa sebelum push

```bash
mint validate
mint broken-links
```

## Menerbitkan

Situs diterbitkan otomatis oleh Mintlify setelah perubahan di-push ke branch utama, selama aplikasi GitHub Mintlify sudah terpasang untuk repositori ini di [dashboard Mintlify](https://dashboard.mintlify.com).

## Menambah halaman

1. Buat berkas `.mdx` di folder yang sesuai dengan `title` dan `description` di frontmatter.
2. Tambahkan path halaman ke `navigation` di `docs.json`.
3. Jalankan `mint validate` dan `mint broken-links`.

Tulis hanya perilaku yang sudah diverifikasi di aplikasi. Jangan memakai data asli di screenshot.
