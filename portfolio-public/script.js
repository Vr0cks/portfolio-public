document.addEventListener('DOMContentLoaded', () => {
  // === Değişkenler ve Elemanlar ===
  const btnTR = document.getElementById('btn-tr');
  const btnEN = document.getElementById('btn-en');
  const themeToggle = document.getElementById('theme-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger');

  // === Dil Çeviri İçin Metinler ===
  const translations = {
    tr: {
  nav_about: 'Hakkımda',
  nav_projects: 'Projeler',
  nav_contact: 'İletişim',
  nav_hire: 'İş Birliği',
  about_title: 'Hakkımda',
  about_text: `Merhaba! Ben Ahmet Yiğit, 20 yaşındayım ve Türk Hava Kurumu Üniversitesi'nde Yönetim Bilişim Sistemleri bölümü öğrencisiyim.
    5 yıldır yazılım sektöründeyim, son 3 yıldır ise frontend geliştirici olarak web tasarımı ile ilgileniyorum.
    14 yıldır profesyonel bir derneğe bağlı olarak izcilik yapıyorum ve 2 yıl önce lider lisansımı aldım.
    Ayrıca aktif olarak okulumun Amerikan futbolu takımında oynuyorum.
    Kodlamanın dışında fotoğrafçılık ve doğa yürüyüşleriyle ilgileniyorum. Sürekli öğrenmeye ve kendimi geliştirmeye inanıyorum.`,
  projects_title: 'Projeler',
  projects_text: 'İşte son çalışmalarım.',
  contact_title: 'İletişim',
  contact_text: 'Benimle iletişime geçmekten çekinmeyin!',
  btn_hire: 'İş Birliği',
  btn_cv: 'CV’yi İndir',
  btn_send: 'Gönder',
  btn_view: 'Projeyi Görüntüle',
  label_name: 'Adınız:',
  label_email: 'E-posta adresiniz:',
  label_message: 'Mesajınız:',
  hero_title: 'Merhaba, ben Ahmet Yiğit',
  hero_subtitle: 'Kusursuz kullanıcı deneyimleri oluşturan tutkulu bir Ön Yüz geliştirici.',
  skills_title: 'Yetenekler & Odak Alanlarım',
  soft_title: 'Kişisel Beceriler',
  tag_responsive: 'Mobil Uyumlu Tasarım',
  tag_uiux: 'UI/UX Tasarımı',
  tag_performance: 'Web Performansı',
  tag_problem: 'Problem Çözme',
  tag_team: 'Takım Çalışması',
  tag_comm: 'İletişim',
  tag_time: 'Zaman Yönetimi',
  tag_critical: 'Eleştirel Düşünme',
  timeline_2005: "Merakla doğdum. Çocukken ekranlar ve teknoloji her zaman ilgimi çekti.",
  timeline_2013_2021: "Ailemin iş yeri sayesinde bilgisayarlarla erken tanıştım. Kendi başıma programlama öğrenmeye çalıştım.",
  timeline_2022: "İlk kişisel bilgisayarımı aldım ve yazılım dünyasına daldım. Gerçek yolculuğum böyle başladı.",
  timeline_2023_freelance: "Serbest Ön Yüz Geliştirici – Gerçek projelerde çalışıyor ve sürekli kendimi geliştiriyorum.",
  timeline_2023_mis: "YBS Öğrencisi @ THK Üniversitesi",
  todo_title: "Yapılacaklar Uygulaması",
  todo_desc: "localStorage destekli, sade arayüze sahip minimal bir yapılacaklar uygulaması.",
  portfolio_title: "Portfolyo Sitesi",
  portfolio_desc: "Projelerimi ve özgeçmişimi sergilemek için oluşturulmuş kişisel portfolyo sitesi.",
  blog_title: "Blog Şablonu",
  blog_desc: "Entegre edilmeye hazır, duyarlı ve SEO dostu bir blog sayfa tasarımı.",
  btn_github_more: "Daha fazlası için GitHub’a bakabilirsiniz",
  weather_title: "Hava Durumu Uygulaması",
  weather_desc: "HTML, CSS ve JS ile yapılmış basit bir hava durumu uygulaması. Gerçek zamanlı hava verisi gösterir."
},
    en: {
      nav_about: 'About Me',
      nav_projects: 'Projects',
      nav_contact: 'Contact Me',
      nav_hire: 'Hire Me',
      about_title: 'About Me',
      about_text: `Hi! I'm Ahmet Yiğit, 20 years old and a Management Information Systems student at Turkish Aeronautical Association University.
    I have been in the software industry for 5 years, and for the last 3 years, I have been focusing on web design as a frontend developer.
    I have been a scout for 14 years in a professional association and got my leader license 2 years ago.
    I also actively play in my university's American football team.
    Outside of coding, I enjoy photography and hiking. I believe in lifelong learning and always strive to improve myself.`,
      projects_title: 'Projects',
      projects_text: 'Here are some of my recent works.',
      contact_title: 'Contact Me',
      contact_text: 'Feel free to get in touch!',
      btn_hire: 'Hire Me',
      btn_cv: 'Download CV',
      btn_send: 'Send',
      btn_view: 'View Project',
      label_name: 'Your name:',
      label_email: 'Your email:',
      label_message: 'Your message:',
      hero_title: "Hi, I'm Ahmet Yiğit",
      hero_subtitle: "A passionate frontend developer crafting elegant user experiences.",
      skills_title: "Skills & Focus",
      soft_title: "Soft Skills",
      tag_responsive: "Responsive Design",
      tag_uiux: "UI/UX",
      tag_performance: "Web Performance",
      tag_problem: "Problem Solving",
      tag_team: "Teamwork",
      tag_comm: "Communication",
      tag_time: "Time Management",
      tag_critical: "Critical Thinking",
      timeline_2005: "Born with curiosity. Screens and technology always caught my attention as a kid.",
      timeline_2013_2021: "Got early exposure to computers thanks to my family's workplace. I started exploring and trying to learn programming on my own.",
      timeline_2022: "Got my first personal computer and dove deep into the world of software. This was the true beginning of my journey.",
      timeline_2023_freelance: "Freelance Frontend Developer – Working on real-world projects and constantly leveling up.",
      timeline_2023_mis: "MIS Student @ UTAA University",
      todo_title: "Todo App",
      todo_desc: "A minimalistic todo app with localStorage support and a clean UI.",
      portfolio_title: "Portfolio Site",
      portfolio_desc: "A personal portfolio website built for showcasing projects and resume.",
      blog_title: "Blog Template",
      blog_desc: "A responsive and SEO-friendly blog page layout ready for integration.",
      btn_github_more: "See more on GitHub",
      weather_title: "Weather App",
      weather_desc: "A simple weather app using HTML, CSS, and JS. Shows real-time weather data."
    }
  };

  // === Sayfadaki metinleri seçilen dile göre değiştirir ===
  function translate(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (translations[lang][key]) {
        // Label ise innerText, input ise placeholder/textContent
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });
    // Aktif buton vurgusu
    if (lang === 'tr') {
      btnTR.classList.add('active');
      btnEN.classList.remove('active');
    } else {
      btnEN.classList.add('active');
      btnTR.classList.remove('active');
    }
  }

  // === Menüde aktif linki otomatik olarak işaretler ===
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // === Fade-in animasyonu için Intersection Observer ===
  const faders = document.querySelectorAll('.fade-in');
  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  faders.forEach(el => appearOnScroll.observe(el));

  // === Dil değiştirme butonları ===
  if (btnTR && btnEN) {
    btnTR.addEventListener('click', () => {
      btnTR.classList.add('active');
      btnEN.classList.remove('active');
      translate('tr');
    });
    btnEN.addEventListener('click', () => {
      btnEN.classList.add('active');
      btnTR.classList.remove('active');
      translate('en');
    });
  }

  // === Tema değiştirme butonu ===
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light');
      document.body.classList.toggle('dark');
      themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
    });
  }

  // === Mobil menü aç/kapa ===
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // === Varsayılan: karanlık tema + İngilizce dil ===
  document.body.classList.add('dark');
  translate('en');

  // === Otomatik dil seçimi: Tarayıcı dili ile ===
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang && browserLang.toLowerCase().startsWith('tr')) {
    translate('tr');
  } else {
    translate('en');
  }

  // === ALTERNATİF: IP tabanlı ülke kontrolü (aktif değil, istersem açabilirim) ===
  /*
  fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(data => {
      if (data && data.country_code === 'TR') {
        translate('tr');
      } else {
        translate('en');
      }
    })
    .catch(() => {
      translate('en');
    });
  */
});