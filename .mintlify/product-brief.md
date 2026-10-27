# JagaInd product brief

## Product

JagaInd is a local-first (on-premise) AI video analytics platform for existing CCTV cameras. It runs on an edge server at the customer site (schools, offices, factories, warehouses) without needing internet. Analytics modules observe video, alarm rules decide which observations become incidents, and operators acknowledge incidents with photo evidence.

Source of truth: the application repository `jagaind/core` (README.md, PRODUCT.md, CONTEXT.md, apps/web, apps/core).

## Audiences

- **Operator / petugas jaga**: watches the Pantau screen and acknowledges incidents. Not technical. Does not change configuration.
- **Admin / teknisi**: installs the server, adds cameras, installs modules, draws Tripwires and zones, writes alarm rules, manages users and notifications.
- Developer-level content is limited to what an admin needs to install and operate the server.

## Language

Indonesian, addressing the reader as "Anda". UI language is Indonesian.

## Verified feature set (application version 1.0.0 at time of writing)

- Login with username/password, sessions (7 days max, 12 hours idle), change own password
- Live video, debug, and identity-label streams close when the session is revoked (logout, disabled account, password reset); debug and identity-label streams also close when the permission required by the stream is removed
- Users and roles: built-in Admin/Operator/Viewer, custom roles from 17 permissions
- Cameras: RTSP (main + sub-stream) and test camera, analysis FPS 1–30, analysis resolution Standar/Tinggi
- Pantau screen with live WebRTC video, geometry overlay, incident queue, acknowledge, acknowledge all, critical alarm sound
- Incident history with filters and detail panel; evidence is a JPEG snapshot plus a short MP4 clip when the camera stream supports it
- Modules: Lintas Garis, Berdiam Terlalu Lama, Larangan Parkir, Penyusupan Zona, Kepadatan Berlebih, Penghitung Pengunjung (statistics), Perundungan Fisik, Deteksi Jatuh, Pengenalan Wajah
- Ignore Zones, debug mode
- Alarm rules: observation types, severity, cooldown per area, min confidence, active days and hours
- Notifications: Telegram (bot token set from Settings, stored in the database) and WhatsApp (unofficial WhatsApp Web protocol, QR or pairing code)
- Settings: health, notifications, sound, account; System page with CPU/RAM/GPU/disk
- Operational settings from the dashboard without a Core restart: evidence storage thresholds and retention, unknown-face retention, module limit per camera, notification queue max age, and WhatsApp rate limit/device name; deployment-bound values are shown read-only
- Install via Docker Compose (cpu or gpu profile)

## Known gaps (do not document as working)

- No per-severity or per-camera notification routing
- No audit log viewer in the dashboard
- No self-service password reset
- No release notes or changelog published yet
- Fall detection thresholds are not calibrated for every camera type and location yet; prolonged sitting can be read as a fall, and ceiling-mounted (top-down) cameras are not supported
