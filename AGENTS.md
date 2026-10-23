> For Mintlify product knowledge (components, configuration, writing standards),
> install the Mintlify skill: `npx skills add https://mintlify.com/docs`

# Documentation project instructions

## About this project

- This is the user documentation for JagaInd, built on [Mintlify](https://mintlify.com)
- The application lives in a separate repository (`jagaind/core`). Every statement here must be verifiable in that repository or in the running app
- Pages are MDX files with YAML frontmatter. Configuration lives in `docs.json`
- Product context for writers lives in `.mintlify/product-brief.md`
- Use the Mintlify MCP server, `https://mcp.mintlify.com`, to edit content and settings via MCP
- Use the Mintlify docs MCP server, `https://www.mintlify.com/docs/mcp`, to query information about using Mintlify via MCP

## Language

- Write in Indonesian. Address the reader as "Anda"
- Quote UI labels exactly as the dashboard shows them, in bold: pilih **Tambah kamera**
- Quote server messages exactly, including the few that are still in English (for example `too many login attempts, try again later`)

## Terminology

Follow the app's domain language:

- **Tripwire** for the drawn line. Avoid "garis batas"
- Tripwire directions are **masuk** and **keluar**
- **Ignore Zone** for areas a module ignores. Avoid "mask" or "zona mati"
- **Aturan alarm** for event rules. The UI page is **Aturan Alarm**; the form section is **Aturan insiden**
- **Insiden** for actionable events; **kejadian** or **observasi** for raw module output
- Severity labels: **Info**, **Peringatan**, **Kritis**
- **Akui** (not "acknowledge") for marking an incident as handled
- **Orang Terdaftar**, **Wajah Tak Dikenal**, **Galeri Wajah** for face recognition
- **Pengguna** and **Peran**; built-in roles are **Admin**, **Operator**, **Viewer**
- Product name in prose: **JagaInd**. The app UI writes "Jagaind"; keep that spelling when quoting UI text

## Style preferences

- Use active voice and second person ("Anda")
- Keep sentences concise, one idea per sentence
- Use sentence case for headings
- Prefer task-oriented titles: "Cara menambah kamera"
- Bold for UI elements: pilih **Pengaturan**
- Code formatting for file names, commands, paths, environment variables, and values to type
- Each task page covers: what and who, prerequisites (including the required permission), steps, result, limitations, common errors, related links

## Content boundaries

- Document only verified behaviour. Mark anything unverified as such, or leave it out
- Do not document internal architecture (IPC, shared memory, model internals) unless an admin needs it to operate the server
- Never include real credentials, tokens, phone numbers, chat IDs, personal data, or screenshots of real people or real camera feeds
- Screenshots must come from sanitized demo data (for example a **Kamera uji** named "Gerbang Depan")
