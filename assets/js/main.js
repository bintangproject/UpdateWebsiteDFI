document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. NAVBAR: shrink on scroll + mobile drawer ---------- */
  const navbar = document.getElementById('mainNavbar');
  const navToggle = document.getElementById('navToggle');
  const navLinksEl = document.getElementById('navLinks');
  const navBackdrop = document.getElementById('navBackdrop');

  const onScrollNav = () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScrollNav);
  onScrollNav();

  const closeDrawer = () => { navLinksEl.classList.remove('open'); navBackdrop.classList.remove('open'); };
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinksEl.classList.toggle('open');
      navBackdrop.classList.toggle('open');
    });
  }
  if (navBackdrop) navBackdrop.addEventListener('click', closeDrawer);
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', closeDrawer));

  /* ---------- 2. SMOOTH SCROLL untuk anchor link (#id) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---------- 3. SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- 4. ACTIVE NAV LINK ON SCROLL ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-links a');
  const setActiveLink = () => {
    let current = '';
    const pos = window.scrollY + 120;
    sections.forEach(sec => {
      if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) current = sec.id;
    });
    navLinkItems.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

  /* ---------- 5. LIGHTBOX GLOBAL (galeri & program) ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  if (lightbox) {
    document.querySelectorAll('[data-lightbox]').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const img = trigger.querySelector('img');
        if (!img) return;
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || '';
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.closest('.lightbox-close')) {
        lightbox.classList.remove('open');
      }
    });
  }

  /* ---------- 6. BACK TO TOP ---------- */
  const toTopBtn = document.getElementById('toTop');
  if (toTopBtn) {
    window.addEventListener('scroll', () => {
      toTopBtn.classList.toggle('show', window.scrollY > 500);
    });
    toTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- 7. RENDER PREVIEW BERITA DI BERANDA ---------- */
  const newsHeroSlot = document.getElementById('newsHeroSlot');
  const newsGridSlot = document.getElementById('newsGridSlot');
  if (newsHeroSlot && typeof newsData !== 'undefined') {
    const order = (typeof newsOrder !== 'undefined') ? newsOrder : Object.keys(newsData);
    const [firstId, ...restIds] = order;
    const first = newsData[firstId];
    if (first) {
      newsHeroSlot.innerHTML = `
        <a href="berita.html?id=${firstId}" class="card news-hero" style="display:block">
          <img src="${first.cover}" alt="${first.title}">
          <div class="news-hero-body">
            <span class="news-badge">${first.category}</span>
            <h4>${first.title}</h4>
            <p style="color:var(--ink-soft); font-size:.85rem;"><i class="bi bi-arrow-right me-1"></i> Baca selengkapnya</p>
          </div>
        </a>`;
    }
    if (newsGridSlot) {
      newsGridSlot.innerHTML = restIds.map(id => {
        const n = newsData[id];
        if (!n) return '';
        return `
          <a href="berita.html?id=${id}" class="news-list-item" style="text-decoration:none;">
            <img src="${n.cover}" alt="${n.title}">
            <div class="news-list-body">
              <h6>${n.title}</h6>
              <span class="date"><i class="bi bi-calendar3 me-1"></i>${n.date}</span>
            </div>
          </a>`;
      }).join('');
    }
  }

  /* ---------- 8. TESTIMONI (disimpan lokal di perangkat pengunjung) ---------- */
  const formTestimoni = document.getElementById('formTestimoni');
  const wadahTestimoni = document.getElementById('wadahTestimoni');
  const btnSubmit = document.getElementById('btnSubmitTestimoni');
  const STORAGE_KEY = 'dfi_testimoni_v1';

  function ambilTestimoniLokal() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch (e) { return []; }
  }
  function simpanTestimoniLokal(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
  function formatWaktu(d) {
    const hariArr = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    const bulanArr = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    const jam = ('0' + d.getHours()).slice(-2);
    const menit = ('0' + d.getMinutes()).slice(-2);
    return `${hariArr[d.getDay()]}, ${d.getDate()} ${bulanArr[d.getMonth()]} ${d.getFullYear()} - ${jam}:${menit} WIB`;
  }
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }
  function renderTestimoni(data) {
    if (!wadahTestimoni) return;
    if (!data || data.length === 0) {
      wadahTestimoni.innerHTML = `<div class="testi-empty"><i class="bi bi-chat-square-dots"></i>Belum ada komentar. Jadilah yang pertama memberikan kesan!</div>`;
      return;
    }
    wadahTestimoni.innerHTML = data.map(item => `
      <div class="testi-card">
        <div class="testi-name"><i class="bi bi-person-circle text-forest me-2"></i>${escapeHtml(item.nama)}</div>
        <span class="testi-time"><i class="bi bi-clock-history me-1"></i>${escapeHtml(item.waktu)}</span>
        <p class="testi-text">&ldquo;${escapeHtml(item.komentar)}&rdquo;</p>
      </div>
    `).join('') + `<p class="testi-note"><i class="bi bi-info-circle"></i> Komentar saat ini tersimpan di perangkat masing-masing pengunjung. Hubungi pengelola web untuk mengaktifkan buku tamu bersama (server).</p>`;
  }

  if (wadahTestimoni) renderTestimoni(ambilTestimoniLokal());

  if (formTestimoni) {
    formTestimoni.addEventListener('submit', function (e) {
      e.preventDefault();
      const nama = document.getElementById('namaTestimoni').value.trim();
      const isi = document.getElementById('isiTestimoni').value.trim();
      if (!nama || !isi) return;

      const btnOriginal = btnSubmit.innerHTML;
      btnSubmit.innerHTML = '<i class="bi bi-arrow-repeat me-2"></i>Mengirim...';
      btnSubmit.disabled = true;

      setTimeout(() => {
        const data = ambilTestimoniLokal();
        data.unshift({ nama, komentar: isi, waktu: formatWaktu(new Date()) });
        if (data.length > 50) data.pop();
        simpanTestimoniLokal(data);
        renderTestimoni(data);
        formTestimoni.reset();
        btnSubmit.innerHTML = 'Berhasil Terkirim! <i class="bi bi-check-circle-fill ms-1"></i>';
        setTimeout(() => {
          btnSubmit.innerHTML = btnOriginal;
          btnSubmit.disabled = false;
        }, 2200);
      }, 450);
    });
  }
});
