// =========================================================
// DATA BERITA — tambahkan objek baru dengan key angka berikutnya
// untuk menambah berita baru. Dipakai oleh index.html (preview)
// dan berita.html (detail).
// =========================================================
const newsData = {
  1: {
    title: "Event Perdana BESTie 2026 Tingkat SD/MI Se-Kecamatan Besuk Berlangsung Sukses, MI Raudlatussalam Raih Juara Umum",
    date: "05 Februari 2026",
    category: "Event Tahunan",
    cover: "https://i.ibb.co.com/KcH2vNGF/BESTIE-Fotbar.jpg",
    content:
      "<p>Alhamdulillah, pada Sabtu, 31 Januari 2026, Pondok Pesantren Darul Fawaid Ilmiyah sukses menyelenggarakan ajang BESTie (Besuk Best Talent) 2026 tingkat SD/MI se-Kecamatan Besuk. Kegiatan ini menjadi wadah bagi para peserta didik untuk mengembangkan potensi, kreativitas, dan semangat berkompetisi melalui berbagai cabang lomba akademik maupun nonakademik. Acara berlangsung meriah dengan diikuti peserta dari berbagai sekolah dasar dan madrasah ibtidaiyah di wilayah Kecamatan Besuk.</p>" +
      "<p>Beragam perlombaan yang dipertandingkan meliputi bidang akademik seperti Olimpiade Mapel Umum (Matematika, IPA, IPS, Bahasa Indonesia), Mapel Agama, Mapel Bahasa (Bahasa Arab dan Bahasa Inggris), hingga Ranking 1. Selain itu, peserta juga menunjukkan bakat terbaiknya pada cabang nonakademik, di antaranya Senam Kreasi, Musabaqah Tartilil Qur'an (MTQ), Islamic Fashion Show, dan Menyanyi Lagu Religi. Seluruh rangkaian kegiatan berlangsung dengan penuh sportivitas, antusiasme, serta mendapat apresiasi dari para guru, orang tua, dan tamu undangan.</p>" +
      "<p>Berdasarkan hasil penilaian dewan juri, MI Raudlatussalam Besuk Agung berhasil meraih predikat Juara Umum BESTie 2026 berkat prestasi gemilang yang ditorehkan para peserta didiknya di berbagai cabang lomba. Pondok Pesantren Darul Fawaid Ilmiyah mengucapkan selamat kepada seluruh pemenang serta menyampaikan terima kasih kepada semua peserta, pendamping, panitia, sponsor, dan pihak yang telah mendukung terselenggaranya kegiatan ini. Semoga ajang BESTie dapat terus menjadi sarana melahirkan generasi yang berprestasi, berakhlak mulia, dan siap bersaing di masa depan. See you all! Sampai jumpa di BESTie Event 2027!</p>",
    photos: [
      { url: "https://i.ibb.co.com/KjZMhwSb/BESTIE-Saman.jpg", caption: "Penampilan Tari Saman oleh Santri Putri" },
      { url: "https://i.ibb.co.com/BHgg5NVq/BESTIE-Juara-Umum.jpg", caption: "Penganugrahan Juara Umum BESTie 2026" },
      { url: "https://i.ibb.co.com/DPpTm3qr/BESTIE-Penonton.jpg", caption: "Antusias Peserta Dalam Mengikuti Pembukaan" }
    ]
  },
  2: {
    title: "SMP Darul Fawaid Ilmiyah Gelar Workshop Aplikasi Input Data Rapor bagi Waka Kurikulum dan Wali Kelas",
    date: "14 Mei 2026",
    category: "Pelatihan",
    cover: "https://i.ibb.co.com/vCcGgpgd/B-Cover-2.jpg",
    content:
      "<p>SMP Darul Fawaid Ilmiyah menyelenggarakan Workshop dan Bimbingan Teknis (Bimtek) Aplikasi Input Data Rapor pada 14 Mei 2026. Kegiatan ini menghadirkan Ust. Lukmanul Hakim, M.Pd.I sebagai pemateri yang memberikan pendampingan teknis kepada Wakil Kepala Sekolah Bidang Kurikulum dan para wali kelas dalam penggunaan aplikasi pengolahan nilai serta penyusunan rapor peserta didik.</p>" +
      "<p>Workshop ini dilaksanakan sebagai bentuk persiapan administrasi akademik mengingat pada saat itu SMP Darul Fawaid Ilmiyah masih menginduk kepada SMP Darul Lughah Wal Karomah. Melalui kegiatan ini, peserta memperoleh pemahaman mengenai sistem input nilai, pengelolaan data hasil belajar, hingga proses penyusunan rapor agar mekanisme yang diterapkan selaras dengan sistem yang digunakan oleh sekolah induk. Dengan demikian, proses administrasi penilaian dapat berjalan secara seragam, tertib, dan sesuai ketentuan.</p>" +
      "<p>Melalui bimtek ini, diharapkan Wakil Kepala Sekolah Bidang Kurikulum dan seluruh wali kelas mampu mengoperasikan aplikasi dengan baik sehingga pelaksanaan penilaian dan penyusunan rapor dapat dilakukan secara lebih efektif, akurat, dan profesional. Kegiatan ini menjadi bagian dari komitmen SMP Darul Fawaid Ilmiyah dalam meningkatkan kualitas tata kelola akademik serta memberikan layanan pendidikan yang semakin baik.</p>",
    photos: [
      { url: "https://i.ibb.co.com/fdDZ61L4/B-1.jpg", caption: "Kepala SMP DFI bersama Pemateri" },
      { url: "https://i.ibb.co.com/vCLVjKYJ/B-Ust.jpg", caption: "Pemateri Bimtek: Ust. Lukmanul Hakim, M.Pd.I" },
      { url: "https://i.ibb.co.com/bjSKPbWD/B-3.jpg", caption: "WaKa Kurikulum bersama Wali Kelas SMP DFI" }
    ]
  },
  3: {
    title: "Yudisium Kelulusan Angkatan Pertama SMP Darul Fawaid Ilmiyah Berlangsung Dengan Khidmat",
    date: "24 Mei 2026",
    category: "Yudisium Kelulusan SMP",
    cover: "https://i.ibb.co.com/9kTcQCTH/Y-Wisudawan.webp",
    content:
      "<p>SMP Darul Fawaid Ilmiyah menyelenggarakan Yudisium Kelulusan Angkatan Pertama pada 24 Mei 2026 sebagai bentuk rasa syukur atas keberhasilan peserta didik menyelesaikan pendidikan jenjang sekolah menengah pertama. Kegiatan yang dikemas dalam suasana khidmat dan penuh haru ini dihadiri oleh jajaran pengasuh pondok, dewan guru, wali santri, serta seluruh peserta yudisium yang mengikuti rangkaian acara dengan penuh kebanggaan.</p>" +
      "<p>Dalam prosesi yudisium, para peserta menerima pengumuman kelulusan sekaligus apresiasi atas dedikasi dan perjuangan mereka selama menempuh pendidikan di SMP Darul Fawaid Ilmiyah. Pada kesempatan tersebut juga diumumkan para lulusan terbaik sebagai bentuk penghargaan atas prestasi akademik yang telah diraih. Adapun predikat Terbaik I diraih oleh M. Fayyadl Albar, Terbaik II oleh Mahmud Hasby, dan Terbaik III oleh Meika Zakia Holis.</p>" +
      "<p>Melalui momentum yudisium ini, keluarga besar Pondok Pesantren Darul Fawaid Ilmiyah mengucapkan selamat kepada seluruh peserta didik yang telah dinyatakan lulus. Semoga ilmu yang telah diperoleh menjadi bekal untuk melanjutkan pendidikan ke jenjang yang lebih tinggi, terus berprestasi, menjaga akhlakul karimah, serta menjadi generasi yang bermanfaat bagi agama, bangsa, dan masyarakat. Barakallahu fiikum, semoga Allah SWT senantiasa memberikan keberkahan dan kemudahan dalam setiap langkah kehidupan.</p>",
    photos: [
      { url: "https://i.ibb.co.com/4gVKRtxM/Y-Mau-idzoh.webp", caption: "Mau'idzoh Hasanah oleh Pengasuh" },
      { url: "https://i.ibb.co.com/1GTdhc2w/Y-Best.webp", caption: "Lulusan Terbaik Yudisium Angkatan Pertama" },
      { url: "https://i.ibb.co.com/KdT1hCC/Y-Kepsek.webp", caption: "Kepala SMP Membacakan SK Kelulusan" }
    ]
  },
  4: {
    title: "ORSABA 2026 Bekali Santri Baru dengan Nilai-Nilai Kepesantrenan dan Kebersamaan",
    date: "17 Juli 2026",
    category: "Pra Kegiatan Santri Baru",
    cover: "https://i.ibb.co.com/m5HVpf0p/O-Cover.jpg",
    content:
      "<p>Pondok Pesantren Darul Fawaid Ilmiyah menyelenggarakan Orientasi Santri Baru (ORSABA) Tahun 2026 pada 13–16 Juli 2026 sebagai rangkaian penyambutan dan pembinaan awal bagi santri baru. Kegiatan ini bertujuan memperkenalkan lingkungan pesantren, sejarah berdirinya pondok, visi dan misi lembaga, serta nilai-nilai dasar yang menjadi pedoman dalam kehidupan santri. Selama pelaksanaan ORSABA, para peserta mengikuti berbagai sesi pembinaan yang dipandu oleh pengasuh, dewan struktural, dan para asatidz dalam suasana yang edukatif, interaktif, dan penuh kekeluargaan.</p>" +
      "<p>Beragam materi diberikan untuk membentuk karakter santri sejak awal, di antaranya Sejarah, Visi, dan Misi Pondok, Trilogi Santri, Urgensi Akhlak dan Adab Santri, Urgensi Furudhul Ainiyah, Panca Jiwa Santri, serta urgensi penguasaan bahasa Arab dan bahasa Inggris dalam pendidikan pesantren. Melalui materi-materi tersebut, para santri dibekali pemahaman mengenai pentingnya keikhlasan, kesederhanaan, kemandirian, kedisiplinan, ukhuwah Islamiyah, serta semangat menuntut ilmu sebagai bekal menjalani kehidupan di pesantren.</p>" +
      "<p>Sebagai penutup rangkaian ORSABA, seluruh santri baru mengikuti kegiatan outbound di Bermi Eco Park, Krucil. Berbagai permainan edukatif dan aktivitas kelompok dirancang untuk mempererat ukhuwah, melatih kerja sama, membangun jiwa kepemimpinan, serta menumbuhkan rasa percaya diri. Diharapkan melalui ORSABA 2026, seluruh santri baru dapat beradaptasi dengan baik, mengenal budaya pesantren, serta siap menjalani proses pendidikan dengan semangat, disiplin, dan akhlakul karimah.</p>",
    photos: [
      { url: "https://i.ibb.co.com/20Cqg3cB/O-1.jpg", caption: "Pembacaan Mahallul Qiyam Pada Acara Penutupan Orsaba" },
      { url: "https://i.ibb.co.com/jZsmT4dM/O-2.jpg", caption: "Pengasuh Menyampaikan Materi Tentang Kepesantrenan" },
      { url: "https://i.ibb.co.com/fVTqwX5L/O-3.jpg", caption: "Penyampaian Materi Pentingnya Bahasa Asing oleh Pemateri" }
    ]
  },
  5: {
    title: "Pondok Pesantren dan SMP Darul Fawaid Ilmiyah Gelar Rapat Kerja Awal Tahun Pelajaran 2026/2027",
    date: "18 Juli 2026",
    category: "Raker Tahun Ajaran Baru",
    cover: "https://i.ibb.co.com/S4WW7v33/R-Cover.jpg",
    content:
      "<p>Pondok Pesantren Darul Fawaid Ilmiyah bersama SMP Darul Fawaid Ilmiyah menyelenggarakan Rapat Kerja (Raker) Tahun Pelajaran 2026/2027 pada 18 Juli 2026. Kegiatan ini diikuti oleh seluruh dewan guru serta pengurus pesantren sebagai momentum untuk menyamakan visi, menyusun program kerja, dan memperkuat sinergi dalam menyongsong tahun ajaran baru. Raker berlangsung dalam suasana penuh semangat, kebersamaan, dan komitmen untuk terus meningkatkan kualitas pendidikan serta pelayanan kepada santri.</p>" +
      "<p>Acara dipimpin oleh Pengasuh Pondok Pesantren Darul Fawaid Ilmiyah, KH. Zaky Alyamany, M.Pd., bersama Kepala SMP Darul Fawaid Ilmiyah, Ust. Maulana Agung Humaidy, S.Th.I. Dalam arahannya, keduanya menekankan pentingnya membangun kerja sama yang solid, meningkatkan kedisiplinan, profesionalisme, serta menjaga nilai-nilai kepesantrenan sebagai landasan utama dalam menjalankan tugas dan tanggung jawab di lingkungan lembaga.</p>" +
      "<p>Melalui rapat kerja ini, diharapkan seluruh program yang telah direncanakan dapat terlaksana secara optimal dan menjadi pedoman dalam menjalankan proses pendidikan selama satu tahun pelajaran ke depan. Dengan semangat kebersamaan dan ikhtiar yang terus diperkuat, Pondok Pesantren dan SMP Darul Fawaid Ilmiyah berkomitmen untuk terus menghadirkan layanan pendidikan yang unggul, berkarakter, serta mampu mencetak generasi yang berilmu, berakhlakul karimah, dan siap menghadapi tantangan zaman.</p>",
    photos: [
      { url: "https://i.ibb.co.com/6RxQGQch/R-1.jpg", caption: "Ustadzat Tenaga Pengajar SMP" },
      { url: "https://i.ibb.co.com/Xfh1vJfQ/R-2.jpg", caption: "Kepala SMP & Pengasuh" },
      { url: "https://i.ibb.co.com/ds0Pzg1z/R-3.jpg", caption: "Asatidz Pengajar Pesantren & Madin" }
    ]
  }
};

// Urutan tampil di beranda: terbaru dulu
const newsOrder = [1, 2, 3, 4, 5];
