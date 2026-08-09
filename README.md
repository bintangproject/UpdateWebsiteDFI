# Website Pondok Pesantren Darul Fawaid Ilmiyah

Versi statis (HTML/CSS/JS murni) hasil migrasi dari Google Apps Script, siap di-deploy ke **GitHub Pages**. Desain sudah dirombak agar lebih modern, elegan, dan nyaman dibuka dari HP.

## Struktur folder

```
pesantren-dfi/
├── index.html              → Halaman utama
├── berita.html              → Halaman detail berita (dibuka via ?id=1, ?id=2, dst)
├── assets/
│   ├── css/style.css        → Semua styling (1 file, mobile-first)
│   └── js/
│       ├── main.js          → Interaksi (navbar, animasi, lightbox, testimoni)
│       └── berita-data.js   → Data semua artikel berita (edit di sini untuk tambah berita)
└── README.md
```

## Cara deploy ke GitHub Pages

1. Buat repository baru di GitHub, misalnya `web-dfi`.
2. Upload seluruh isi folder `pesantren-dfi/` (bukan foldernya, tapi isinya) ke root repository tersebut — bisa lewat web GitHub ("Add file → Upload files") atau `git push`.
3. Buka **Settings → Pages** pada repository.
4. Pada **Source**, pilih branch `main` dan folder `/ (root)`, lalu **Save**.
5. Tunggu 1–2 menit, website akan aktif di `https://<username-github>.github.io/<nama-repo>/`.
6. (Opsional) Tambahkan **custom domain** di menu yang sama jika sudah punya domain sendiri.

Tidak perlu build tool apa pun — murni HTML/CSS/JS sehingga tinggal upload dan aktif.

## Menambah / mengedit berita

Semua data berita ada di `assets/js/berita-data.js`. Tambahkan blok baru dengan angka key berikutnya (mis. `6: {...}`), lalu tambahkan angkanya ke array `newsOrder` di bagian bawah file. Berita otomatis muncul di beranda dan bisa dibuka di `berita.html?id=6`.

## Catatan penting soal fitur Testimoni

Di versi Apps Script sebelumnya, komentar testimoni disimpan di server Google (`PropertiesService`) sehingga **semua pengunjung melihat komentar yang sama**.

GitHub Pages hanya bisa menyajikan file statis — tidak ada server untuk menyimpan data. Karena itu, di versi ini testimoni disimpan dengan `localStorage`, artinya:

- Komentar tersimpan **hanya di perangkat/browser pengunjung itu sendiri**.
- Pengunjung lain tidak akan melihat komentar tersebut.

Ini sudah diberi keterangan kecil di bawah kolom testimoni pada website agar pengunjung memahami batasannya.

**Jika ingin buku tamu yang benar-benar tersimpan bersama** (semua pengunjung melihat komentar yang sama), ada beberapa opsi yang bisa disiapkan menyusul:
1. Tetap pakai Google Apps Script *hanya* sebagai backend API (dipanggil dari `main.js` via `fetch`), sementara tampilan tetap di GitHub Pages.
2. Pakai layanan gratis seperti **Firebase Firestore** atau **Supabase** sebagai database komentar.
3. Pakai Google Sheets sebagai database sederhana lewat Apps Script Web App (dengan skema JSONP agar bisa diakses dari domain GitHub Pages).

Beri tahu saya jika ingin salah satu opsi ini disiapkan.

## Yang dirombak dari desain lama

- Palet warna hijau pesantren & emas dipertegas, latar diganti ivory hangat (bukan putih polos) agar lebih premium.
- Tipografi baru: **Fraunces** (judul, berkarakter & elegan) dipadukan dengan **Inter** (isi, mudah dibaca) dan **Amiri** untuk aksen Arab.
- Navbar mobile jadi panel geser (drawer) dari kanan, lebih mudah disentuh.
- Ditambahkan **bilah aksi cepat** di bawah layar HP (tombol WhatsApp & Daftar selalu terlihat).
- Galeri di HP jadi *scroll horizontal* dengan snap, tidak perlu scroll panjang ke bawah.
- Tombol kembali ke atas, animasi scroll-reveal yang lebih halus, dan kartu berita/prestasi dirancang ulang agar lebih enak dibaca satu tangan di HP.
