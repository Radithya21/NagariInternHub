#  Nagari Intern Hub 
<p style="text-align: justify;font-size: 1.2em;">Proyek Magang Mandiri di Bank Nagari Kantor Pusat Divisi Teknologi dan Digitalisasi</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/18467f6d-0eb0-4122-ab23-a339c2b1b34c" alt="Logo Bank Nagari" style="width: 100%;">
  <p>PT. Bank Pembangunan Daerah Sumatera Barat</p>
</div>

---
## 👋 Selamat Datang
Selamat datang di repositori GitHub resmi untuk Magang Mandiri Bank Nagari Kantor Pusat 2025. Repositori ini menampung proyek-proyek yang dikembangkan selama menjalani **Magang Mandiri** di **Divisi Teknologi dan Digitalisasi Bank Nagari Kantor Pusat**.

---
## 👤 Tentang Saya
Saya adalah **Dimas Radithya Nuriizkitha**, seorang mahasiswa yang sedang menjalani Magang Mandiri di Bank Nagari Kantor Pusat. Magang ini berlangsung selama 30 hari kerja, di mana saya berkontribusi pada proyek-proyek untuk meningkatkan infrastruktur dan layanan digital Bank Nagari.

---
## 🗂️ Struktur Repositori
Repositori ini terdiri dari dua bagian utama yang saling terintegrasi:

- **Backend**: Direktori ini berisi kode untuk layanan API yang dibangun menggunakan Express.js. Backend mencakup berbagai modul seperti autentikasi, absensi, direktori pegawai, dan statistik. Semua layanan ini dirancang untuk mendukung kebutuhan sistem secara andal dan efisien.
- **Frontend**: Direktori ini berisi antarmuka pengguna yang dikembangkan menggunakan React dan Vite. Frontend menyediakan halaman interaktif untuk login, absensi, direktori pegawai, dan fitur lainnya dengan desain yang responsif dan ramah pengguna.

Kedua bagian ini bekerja sama untuk menciptakan sistem manajemen magang yang modern dan terintegrasi dengan teknologi berikut:
- **Frontend**: React dengan Vite untuk pengalaman pengguna yang cepat dan dinamis.
- **Backend**: Express.js untuk layanan API yang kuat dan fleksibel.
- **Basis Data**: MySQL dengan Prisma ORM untuk pengelolaan data yang terstruktur dan efisien.

---
## ⚡ Teknologi
[![My Skills](https://skillicons.dev/icons?i=js,react,express,nodejs,vite,mysql,tailwind,prisma,vercel,vscode,github,postman)](https://skillicons.dev)

---
## 📄 Dokumentasi
Repositori ini berisi dokumentasi rinci mengenai penggunaan, *endpoint* API, dan informasi relevan lainnya. Berikut adalah langkah-langkah untuk menjalankan proyek ini:

### 1.  Clone Repositori
Clone repositori ini ke komputer lokal Anda:
```bash
git clone https://github.com/username/nagariinternhub.git
cd nagariinternhub
```

Masuk ke direktori `backend` dan instal semua dependensi yang diperlukan:
```bash
cd backend
npm install
```

### 2.  Konfigurasi .env

Buat file `.env` di direktori `backend`, Kemudian isi nilai-nilai di file `.env` sesuai dengan konfigurasi lokal Anda (database, port, dan secret key).

### ⚙️`.env.example`
```env
# Contoh konfigurasi untuk development

DATABASE_URL="mysql://<user>:<password>@localhost:3306/<nama_database>"
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

### 3.  Migrasi Database
Pastikan Anda sudah membuat database sesuai dengan nama yang ada di file `.env` dan memastikan database tersebut sudah berjalan.

Jalankan migrasi database menggunakan Prisma:
```bash
npx prisma migrate dev
```

### 4.  Menjalankan Seeder
Setelah migrasi selesai, jalankan seeder untuk mengisi data awal:
```bash
npx prisma db seed
```

### 5.  Menjalankan Backend
Jalankan server backend menggunakan perintah berikut:
```bash
npm run dev
```
Backend akan berjalan di `http://localhost:5000` secara default.

### 6. Menjalankan Frontend
Buka terminal baru dengan menekan **Ctrl + Shift + `** di Visual Studio Code, lalu jalankan aplikasi frontend:
```bash
cd frontend
npm install
npm run dev
```
Frontend akan berjalan di `http://localhost:3000` secara default.

### 7.  Akses Aplikasi
- **Backend**: `http://localhost:5000`
- **Frontend**: `http://localhost:3000`
---
## 👤 Pengembang
### *Dimas Radithya Nurizkitha*
Fullstack Developer Intern | Bank Nagari

---
## 📞 Kontak & Dukungan
Untuk pertanyaan atau dukungan, silakan hubungi saya:

- **Email**:
  - [dimasdrn21@gmail.com](mailto:dimasdrn21@gmail.com)
- **Bank Nagari Kantor Pusat**:
  - 🌐 [banknagari.co.id](https://www.banknagari.co.id)
  - 📧 [callcenter@banknagari.co.id](mailto:callcenter@banknagari.co.id)
  - ☎️ [150234](tel:150234)
  - 📍 Alamat: 299V+2QV, Pagambiran Ampalu Nan XX, Lubuk Begalung, Kota Padang, Sumatera Barat

---
## 🙏 Ucapan Terima Kasih
Saya ingin mengucapkan terima kasih yang sebesar-besarnya kepada:

- Pimpinan dan staf Bank Nagari Kantor Pusat
- Tim Divisi Teknologi dan Digitalisasi
- Semua kontributor dan pihak yang terlibat dalam proyek ini

---
<div align="center">
<strong>© 2025 Bank Nagari. Semua Hak Dilindungi.</strong>
</div>