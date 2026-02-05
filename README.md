<div align="center">

# 📸 PICT.ID

**Platform Jual Beli Fotografi Digital — UI Prototype**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

*Dibuat untuk mata kuliah Workshop UI/UX — Designed & Developed by Dani Ruliansyah*

[Demo](#-preview) • [Fitur](#-fitur-utama) • [Instalasi](#-instalasi)

</div>

---

## 🎯 Tentang Proyek

**PICT.ID** adalah prototype UI/UX untuk platform jual beli karya fotografi digital. Proyek ini fokus pada implementasi **antarmuka front-end** menggunakan HTML, CSS, dan JavaScript murni tanpa framework. Desain mengusung tema **dark/minimalis** dengan tipografi **Frank Ruhl Libre** untuk estetika yang clean dan modern.

> ⚠️ **Catatan:** Ini adalah proyek UI prototype (tampilan saja), belum terintegrasi dengan backend/database.

---

## ✨ Fitur Utama

### 👤 Area Pengguna
- **Dashboard & Landing** — Hero section + navigasi utama
- **Gallery/Explore** — Grid galeri dengan efek hover zoom
- **Detail Katalog** — Tampilan detail foto (informasi, tags, CTA beli)
- **Sistem Pembelian** — Flow checkout + konfirmasi pembayaran
- **Manajemen Profil** — Upload karya, edit/delete foto, riwayat pembelian
- **Autentikasi** — Login & register dengan slideshow animasi

### 👨‍💼 Area Admin
- **Dashboard Admin** — Tema light/putih dengan statistik
- **Permission Request** — Review & approval konten user
- **Manajemen Artikel** — CRUD artikel/tutorial fotografi

### 🎨 Sistem UI
- **Responsive Design** — Optimasi untuk desktop (1440px) & mobile (≤414px)
- **Custom Styling** — Component library custom di CSS (buttons, cards, forms)
- **Animasi Interaktif** — Hover effects, slideshow, transitions

---

## 🛠️ Teknologi

| Teknologi | Penggunaan |
|-----------|------------|
| **HTML5** | Struktur markup multi-page |
| **CSS3** | Styling, layout, responsif (1 file terpusat) |
| **JavaScript** | Interaksi DOM (slideshow, toggle) |
| **Google Fonts** | Frank Ruhl Libre, Crimson Pro |

---

## 📦 Instalasi

### Prasyarat
- Browser modern (Chrome, Firefox, Edge)
- *(Opsional)* Local server untuk development (Live Server, XAMPP, dll)

### Clone Repository
```bash
git clone https://github.com/username/workshop_ui_dani.git
cd workshop_ui_dani
Menjalankan Proyek
Opsi 1: Buka langsung di browser Karena ini adalah static site, Anda cukup membuka file HTML utama:

Plaintext
Double-click file "homepage.html" atau "loginpage.html"
📁 Struktur Proyek
Plaintext
workshop_ui_dani/
│
├── 📄 homepage.html              # Landing page
├── 📄 dashboard.html             # Dashboard user
├── 📄 gallerypage.html           # Grid galeri
├── 📄 detailkatalog.html         # Detail karya
├── 📄 pembelian.html             # Checkout
├── 📄 payment-successful.html    # Konfirmasi bayar
├── 📄 loginpage.html             # Autentikasi
├── 📄 registerpage.html
├── 📄 myprofilepage.html         # Profil & manajemen
├── 📄 addpicturepage.html        # Upload karya
├── 📄 purchasedpict.html         # Riwayat pembelian
│
├── 🎨 style.css                  # Styling global
├── ⚙️ script.js                  # Interaksi JS
│
├── 👨‍💼 dashboard-admin.html       # Admin dashboard
├── 📋 permission.html            # Permission request
├── 📝 add-article.html           # Tambah artikel
├── 📝 manage-article.html        # Kelola artikel
├── 📰 articlespage.html          # Daftar artikel
│
└── 📂 images/                    # Aset gambar
    ├── icon_png/
    ├── gallery/
    ├── camera logo/
    ├── footer/
    └── ...
📸 Preview
🏠 Homepage
Landing page dengan hero image & navigasi utama.

🎨 Gallery
Grid galeri dengan efek hover zoom untuk melihat preview karya.

🛒 Detail & Checkout
Halaman detail karya lengkap dengan informasi lisensi, serta flow pembayaran.

🔐 Login
Form autentikasi modern dengan slideshow animasi di sisi samping.

👨‍💼 Admin Dashboard
Dashboard khusus admin dengan tema light/putih yang kontras dengan area user.

🎨 Highlight Desain
Tipografi: Frank Ruhl Libre (elegant serif) + utility classes custom.

Color Palette:

User area: #000000 (background), #FFFFFF (text)

Admin area: #FFFFFF (background), #000000 (text)

Accent: rgba(64, 98, 92, 1) (green)

Layout: Centered fixed-width (1440px desktop) + responsive mobile.

Components: Custom CSS library (no framework).
