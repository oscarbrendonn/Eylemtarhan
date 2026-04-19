/* ============================================================
   NYPT Site Controls — Dark Mode + EN/SR/RU Language Switcher
   ============================================================ */
(function () {
  'use strict';

  /* ---- Translation Dictionary ---- */
  const T = {
    sr: {
      /* Navigation */
      'Services': 'Usluge',
      'Barre': 'Barre',
      'BRIDAL CUT': 'SVADBENI PROGRAM',
      'CORRECTIVE EXERCISE': 'KOREKTIVNE VEŽBE',
      'HIIT': 'HIIT',
      'KETTLEBELL WORKOUT': 'TRENING SA GIRJAMA',
      'Marathon Preparation Training': 'Priprema za maraton',
      'Massage Therapy': 'Masažna terapija',
      'Pre & Post Natal Fitness': 'Pre i post-natalni fitnes',
      'Reformer Pilates Class': 'Reformer pilates čas',
      'STRETCH THERAPY CLASS': 'ČAS STRETCH TERAPIJE',
      'Personal Training': 'Personalni trening',
      'TRAINERS': 'TRENERI',
      'Pricing': 'Cenovnik',
      'About': 'O nama',
      'Contact': 'Kontakt',
      'HOME': 'POČETNA',
      'CALL TO SCHEDULE': 'POZOVITE ZA ZAKAZIVANJE',
      'Get in touch': 'Kontaktirajte nas',
      'SCHEDULE NOW': 'ZAKAŽI ODMAH',
      'Skip to content': 'Preskoči na sadržaj',
      'Hamburger Toggle Menu': 'Otvori meni',
      /* Footer */
      'About us': 'O nama',
      'Trainers': 'Treneri',
      'Personal training': 'Personalni trening',
      'Prices': 'Cene',
      'Our App': 'Naša aplikacija',
      'Our Friends': 'Naši prijatelji',
      'faq': 'ČPP',
      'press': 'štampa',
      'terms & conditions': 'uslovi korišćenja',
      'Register Now': 'Registruj se',
      '© All Rights Reserved New York City Personal Training': '© Sva prava zadržana New York City Personal Training',
      'Privacy Settings': 'Podešavanja privatnosti',
      'Privacy Policy': 'Politika privatnosti',
      'Save': 'Sačuvaj',
      /* Index */
      'New York': 'Njujork',
      'FIRST TIMER': 'PRVI PUT',
      'Learn about our services': 'Saznajte o našim uslugama',
      'Memberships': 'Članarine',
      'Become a member now': 'Postanite član odmah',
      'WELCOME': 'DOBRODOŠLI',
      'CLASSES | SERVICES': 'KURSEVI | USLUGE',
      'Offering now': 'Nudimo sada',
      'View All Services': 'Sve usluge',
      'OUR TRAINERS': 'NAŠI TRENERI',
      'the team': 'tim',
      'AS FEATURED IN': 'OBJAVLJENO U',
      'Articles & publications': 'Članci i publikacije',
      '5-STAR RATINGS': '5-ZVEZDANE OCENE',
      '49 Google Reviews': '49 Google recenzija',
      'BLOG | NEWS': 'BLOG | VESTI',
      'Latest': 'Najnovije',
      'Keep up with the latest news, trends and information regarding health, fitness, and nutrition.': 'Pratite najnovije vesti, trendove i informacije o zdravlju, fitnesu i ishrani.',
      'read more': 'pročitaj više',
      /* About */
      'ABOUT': 'O NAMA',
      'Personal & Tailored': 'Personalizovano i prilagođeno',
      'Available at: New York City Personal Training': 'Dostupno u: New York City Personal Training',
      '✓ Unique program based on your goals': '✓ Jedinstven program zasnovan na vašim ciljevima',
      '✓ Dedicated 1-on-1 coaching by the best trainers': '✓ Posvećen 1-na-1 kućing sa najboljim trenerima',
      '✓ 360° approach (sleep, nutrition, stress & movement)': '✓ 360° pristup (san, ishrana, stres i pokret)',
      '✓ Premium fitness equipment': '✓ Premium fitnes oprema',
      '✓ Monthly Inbody Scan': '✓ Mesečno InBody skeniranje',
      '✓ 200+ happy customers': '✓ 200+ zadovoljnih klijenata',
      'WHAT drives us': 'ŠTA NAS POKREĆE',
      'We dare you to feel what\'s it like. Discover our Next Level Gym now.': 'Pozivamo vas da osetite kako je. Otkrijte naš Next Level Gym sada.',
      'WE\'RE COMMITTED': 'POSVEĆENI SMO',
      'HABITS-BASED APPROACH': 'PRISTUP ZASNOVAN NA NAVIKAMA',
      'MONTHLY CHECK-INS': 'MESEČNE PROVERE',
      'KNOWLEDGE IS POWER': 'ZNANJE JE MOĆ',
      'Our Personal Trainers': 'Naši personalni treneri',
      'CLASSES | SERVICES': 'KURSEVI | USLUGE',
      'Offering now': 'Nudimo sada',
      'Our Personal Trainers': 'Naši personalni treneri',
      'SCHEDULE NOW': 'ZAKAŽI ODMAH',
      /* Contact */
      'Flatiron | NYC': 'Flatiron | Njujork',
      'Address': 'Adresa',
      '138 5th Ave 2ND Floor': '138 5th Ave, 2. sprat',
      'New York NY 10011': 'Njujork, NY 10011',
      'Opening hours': 'Radno vreme',
      'Mon-Fri: 6am – 10pm': 'Pon–Pet: 6:00 – 22:00',
      'Sat-Sun: 7am – 8pm': 'Sub–Ned: 7:00 – 20:00',
      /* Trainers */
      'MEET THE TRAINERS': 'UPOZNAJTE TRENERE',
      'MEET OUR TRAINERS': 'NAŠI TRENERI',
      /* Pricing */
      'promotions': 'promocije',
      'new client promo': 'promo za nove klijente',
      'Per Session': 'Po sesiji',
      'BUY Now': 'Kupi odmah',
      'Valid for 12 months': 'Važi 12 meseci',
      'personal training': 'personalni trening',
      'Split your sessions with a partner to save & stay motivated!': 'Podelite sesije sa partnerom i uštedite!',
      '1 Session': '1 sesija',
      '12 Sessions': '12 sesija',
      '25 Sessions': '25 sesija',
      '40 Sessions': '40 sesija',
      'No matter your goal, we\'ll get you there!': 'Bez obzira na vaš cilj, dovešćemo vas do njega!',
      /* Barre */
      'What is Barre?': 'Šta je Barre?',
      'TOTAL BODY STRENGTH AND FLEXIBILITY:': 'UKUPNA SNAGA I FLEKSIBILNOST TELA:',
      'RHYTHM AND SELF-EXPRESSION:': 'RITAM I SAMOISKAZIVANJE:',
      'IMPROVED POSTURE AND STABILITY:': 'POBOLJŠANO DRŽANJE I STABILNOST:',
      'COORDINATION AND BALANCE:': 'KOORDINACIJA I RAVNOTEŽA:',
      'What to Expect': 'Šta da očekujete',
      '1 class': '1 čas',
      '10 classes': '10 časova',
      'Class led by': 'Čas vodi',
      'Bio': 'Biografija',
      /* Corrective */
      'CORRECTIVE EXERCISE: RESTORE BALANCE, IMPROVE FUNCTION, AND ENHANCE WELL-BEING': 'KOREKTIVNE VEŽBE: POVRATITE RAVNOTEŽU, POBOLJŠAJTE FUNKCIJU I OPŠTE ZDRAVLJE',
      'WHAT IS CORRECTIVE EXERCISE?': 'ŠTA SU KOREKTIVNE VEŽBE?',
      'KEY FOCUS AREAS': 'KLJUČNE OBLASTI',
      'BENEFITS OF CORRECTIVE EXERCISE': 'PREDNOSTI KOREKTIVNIH VEŽBI',
      'EXPERIENCE THE DIFFERENCE': 'OSETITE RAZLIKU',
      'TAKE THE FIRST STEP TOWARD BETTER MOVEMENT': 'NAPRAVITE PRVI KORAK KA BOLJEM POKRETU',
      /* FAQ */
      'CAN I TRY A PT SESSION?': 'MOGU LI ISPROBATI PT SESIJU?',
      'WILL I GET MY OWN PT?': 'DA LI ĆU IMATI SVOG LIČNOG TRENERA?',
      'More Information': 'Više informacija',
      'HOUSE RULES': 'KUĆNI PROPISI',
      'CAN PERSONAL TRAINING BE COVERED BY INSURANCE?': 'MOŽE LI PERSONALNI TRENING BITI POKRIVEN OSIGURANJEM?',
      'BENEFITS OF HAVING A PERSONAL TRAINER': 'PREDNOSTI LIČNOG TRENERA',
      'More questions?': 'Još pitanja?',
      'Email us here and we will respond.': 'Pišite nam i odgovorićemo.',
      'EMAIL': 'IMEJL',
      /* HIIT */
      'WHAT IS HIIT': 'ŠTA JE HIIT',
      'SCHEDULE NOW': 'ZAKAŽI ODMAH',
      /* Kettlebell */
      'WHAT IS KETTLEBELL WORKOUT AND WHY IT\'S IMPORTANT?': 'ŠTA JE TRENING SA GIRJAMA I ZAŠTO JE VAŽAN?',
      'WHO ARE KETTLEBELL WORKOUTS GOOD FOR?': 'KOME SU NAMENJENI TRENINZI SA GIRJAMA?',
      'EXPERIENCE THE POWER OF KETTLEBELL TRAINING': 'OSETITE MOĆ TRENINGA SA GIRJAMA',
      'READY TO TAKE YOUR FITNESS TO THE NEXT LEVEL?': 'SPREMNI ZA SLEDEĆI NIVO FITNESA?',
      'POPULAR KETTLEBELL WORKOUTS:': 'POPULARNI TRENINZI SA GIRJAMA:',
      /* Blog */
      'Archives': 'Arhiva',
      /* Pricing */
      '1v1 In-Person Training': '1v1 trening uživo',
      '1v1 Online Coaching': '1v1 online treninzi',
      'Single Session': 'Pojedinačni trening',
      'Session Package': 'Paket treninga',
      'Online Training': 'Online trening',
      'Training + Diet': 'Trening + ishrana',
      'Per Session': 'Po treningu',
      'Per Month': 'Mesečno',
      'In-Person at Studio': 'Uživo u studiju',
      '10 Sessions': '10 treninga',
      'Save vs. single sessions': 'Povoljnije od pojedinačnih treninga',
      '1v1 Monthly Program': '1v1 mesečni program',
      'Training + Nutrition Plan': 'Trening i plan ishrane',
      'Get Started': 'Počnite',
      'Book anytime': 'Zakažite kada želite',
      'Cancel anytime': 'Otkažite kada želite',
      'Personalised workouts plus a full nutrition plan built around your goals.': 'Personalizovani treninzi i kompletan plan ishrane prilagođen vašim ciljevima.',
      'promotions': 'promocije',
      /* Reviews */
      '4.9': '4,9',
      'Add Arrows': '',
      'Add Pagination': '',
    },

    ru: {
      /* Navigation */
      'Services': 'Услуги',
      'Barre': 'Барр',
      'BRIDAL CUT': 'СВАДЕБНАЯ ПРОГРАММА',
      'CORRECTIVE EXERCISE': 'КОРРЕКТИРУЮЩИЕ УПРАЖНЕНИЯ',
      'HIIT': 'ВИИТ',
      'KETTLEBELL WORKOUT': 'ТРЕНИРОВКА С ГИРЯМИ',
      'Marathon Preparation Training': 'Подготовка к марафону',
      'Massage Therapy': 'Массажная терапия',
      'Pre & Post Natal Fitness': 'Фитнес до и после родов',
      'Reformer Pilates Class': 'Занятие Reformer Pilates',
      'STRETCH THERAPY CLASS': 'СТРЕЙЧ-ТЕРАПИЯ',
      'Personal Training': 'Персональный тренинг',
      'TRAINERS': 'ТРЕНЕРЫ',
      'Pricing': 'Цены',
      'About': 'О нас',
      'Contact': 'Контакт',
      'HOME': 'ГЛАВНАЯ',
      'CALL TO SCHEDULE': 'ПОЗВОНИТЕ ДЛЯ ЗАПИСИ',
      'Get in touch': 'Связаться с нами',
      'SCHEDULE NOW': 'ЗАПИСАТЬСЯ СЕЙЧАС',
      'Skip to content': 'Перейти к содержимому',
      'Hamburger Toggle Menu': 'Открыть меню',
      /* Footer */
      'About us': 'О нас',
      'Trainers': 'Тренеры',
      'Personal training': 'Персональный тренинг',
      'Prices': 'Цены',
      'Our App': 'Наше приложение',
      'Our Friends': 'Наши партнёры',
      'faq': 'ЧаВо',
      'press': 'пресса',
      'terms & conditions': 'условия использования',
      'Register Now': 'Зарегистрироваться',
      '© All Rights Reserved New York City Personal Training': '© Все права защищены New York City Personal Training',
      'Privacy Settings': 'Настройки конфиденциальности',
      'Privacy Policy': 'Политика конфиденциальности',
      'Save': 'Сохранить',
      /* Index */
      'New York': 'Нью-Йорк',
      'FIRST TIMER': 'НОВИЧКАМ',
      'Learn about our services': 'Узнайте о наших услугах',
      'Memberships': 'Абонементы',
      'Become a member now': 'Стать участником сейчас',
      'WELCOME': 'ДОБРО ПОЖАЛОВАТЬ',
      'CLASSES | SERVICES': 'ЗАНЯТИЯ | УСЛУГИ',
      'Offering now': 'Предлагаем сейчас',
      'View All Services': 'Все услуги',
      'OUR TRAINERS': 'НАШИ ТРЕНЕРЫ',
      'the team': 'команда',
      'AS FEATURED IN': 'КАК УПОМИНАЛОСЬ В',
      'Articles & publications': 'Статьи и публикации',
      '5-STAR RATINGS': '5-ЗВЁЗДОЧНЫЕ ОЦЕНКИ',
      '49 Google Reviews': '49 отзывов Google',
      'BLOG | NEWS': 'БЛОГ | НОВОСТИ',
      'Latest': 'Последнее',
      'Keep up with the latest news, trends and information regarding health, fitness, and nutrition.': 'Следите за последними новостями, тенденциями и информацией о здоровье, фитнесе и питании.',
      'read more': 'читать далее',
      /* About */
      'ABOUT': 'О НАС',
      'Personal & Tailored': 'Персонально и индивидуально',
      'Available at: New York City Personal Training': 'Доступно в: New York City Personal Training',
      '✓ Unique program based on your goals': '✓ Уникальная программа на основе ваших целей',
      '✓ Dedicated 1-on-1 coaching by the best trainers': '✓ Персональный коучинг 1-на-1 с лучшими тренерами',
      '✓ 360° approach (sleep, nutrition, stress & movement)': '✓ 360° подход (сон, питание, стресс и движение)',
      '✓ Premium fitness equipment': '✓ Премиум фитнес-оборудование',
      '✓ Monthly Inbody Scan': '✓ Ежемесячное InBody-сканирование',
      '✓ 200+ happy customers': '✓ 200+ довольных клиентов',
      'WHAT drives us': 'ЧТО НАС ДВИЖЕТ',
      'We dare you to feel what\'s it like. Discover our Next Level Gym now.': 'Попробуйте ощутить это сами. Откройте для себя наш Next Level Gym прямо сейчас.',
      'WE\'RE COMMITTED': 'МЫ ПРЕДАНЫ ДЕЛУ',
      'HABITS-BASED APPROACH': 'ПОДХОД НА ОСНОВЕ ПРИВЫЧЕК',
      'MONTHLY CHECK-INS': 'ЕЖЕМЕСЯЧНЫЕ ПРОВЕРКИ',
      'KNOWLEDGE IS POWER': 'ЗНАНИЕ — СИЛА',
      'Our Personal Trainers': 'Наши персональные тренеры',
      /* Contact */
      'Flatiron | NYC': 'Флэтайрон | Нью-Йорк',
      'Address': 'Адрес',
      '138 5th Ave 2ND Floor': '138 5th Ave, 2-й этаж',
      'New York NY 10011': 'Нью-Йорк, NY 10011',
      'Opening hours': 'Часы работы',
      'Mon-Fri: 6am – 10pm': 'Пн–Пт: 6:00 – 22:00',
      'Sat-Sun: 7am – 8pm': 'Сб–Вс: 7:00 – 20:00',
      /* Trainers */
      'MEET THE TRAINERS': 'ПОЗНАКОМЬТЕСЬ С ТРЕНЕРАМИ',
      'MEET OUR TRAINERS': 'НАШИ ТРЕНЕРЫ',
      /* Pricing */
      'promotions': 'акции',
      'new client promo': 'промо для новых клиентов',
      'Per Session': 'За занятие',
      'BUY Now': 'Купить',
      'Valid for 12 months': 'Действует 12 месяцев',
      'personal training': 'персональный тренинг',
      'Split your sessions with a partner to save & stay motivated!': 'Делите занятия с партнёром, чтобы сэкономить!',
      '1 Session': '1 занятие',
      '12 Sessions': '12 занятий',
      '25 Sessions': '25 занятий',
      '40 Sessions': '40 занятий',
      'No matter your goal, we\'ll get you there!': 'Каким бы ни была ваша цель, мы вам поможем!',
      /* Barre */
      'What is Barre?': 'Что такое Barre?',
      'TOTAL BODY STRENGTH AND FLEXIBILITY:': 'СИЛА И ГИБКОСТЬ ВСЕГО ТЕЛА:',
      'RHYTHM AND SELF-EXPRESSION:': 'РИТМ И САМОВЫРАЖЕНИЕ:',
      'IMPROVED POSTURE AND STABILITY:': 'УЛУЧШЕННАЯ ОСАНКА И СТАБИЛЬНОСТЬ:',
      'COORDINATION AND BALANCE:': 'КООРДИНАЦИЯ И БАЛАНС:',
      'What to Expect': 'Чего ожидать',
      '1 class': '1 занятие',
      '10 classes': '10 занятий',
      'Class led by': 'Занятие ведёт',
      'Bio': 'Биография',
      /* Corrective */
      'CORRECTIVE EXERCISE: RESTORE BALANCE, IMPROVE FUNCTION, AND ENHANCE WELL-BEING': 'КОРРЕКТИРУЮЩИЕ УПРАЖНЕНИЯ: ВОССТАНОВИТЕ БАЛАНС, УЛУЧШИТЕ ФУНКЦИИ И САМОЧУВСТВИЕ',
      'WHAT IS CORRECTIVE EXERCISE?': 'ЧТО ТАКОЕ КОРРЕКТИРУЮЩИЕ УПРАЖНЕНИЯ?',
      'KEY FOCUS AREAS': 'КЛЮЧЕВЫЕ НАПРАВЛЕНИЯ',
      'BENEFITS OF CORRECTIVE EXERCISE': 'ПРЕИМУЩЕСТВА КОРРЕКТИРУЮЩИХ УПРАЖНЕНИЙ',
      'EXPERIENCE THE DIFFERENCE': 'ПОЧУВСТВУЙТЕ РАЗНИЦУ',
      'TAKE THE FIRST STEP TOWARD BETTER MOVEMENT': 'СДЕЛАЙТЕ ПЕРВЫЙ ШАГ К ЛУЧШЕМУ ДВИЖЕНИЮ',
      /* FAQ */
      'CAN I TRY A PT SESSION?': 'МОГУ ЛИ Я ПОПРОБОВАТЬ ЗАНЯТИЕ С ТРЕНЕРОМ?',
      'WILL I GET MY OWN PT?': 'БУДЕТ ЛИ У МЕНЯ СВОЙ ПЕРСОНАЛЬНЫЙ ТРЕНЕР?',
      'More Information': 'Подробнее',
      'HOUSE RULES': 'ПРАВИЛА ЗАЛА',
      'CAN PERSONAL TRAINING BE COVERED BY INSURANCE?': 'МОЖНО ЛИ ОПЛАТИТЬ ТРЕНИНГ СТРАХОВКОЙ?',
      'BENEFITS OF HAVING A PERSONAL TRAINER': 'ПРЕИМУЩЕСТВА ПЕРСОНАЛЬНОГО ТРЕНЕРА',
      'More questions?': 'Ещё вопросы?',
      'Email us here and we will respond.': 'Напишите нам — мы ответим.',
      'EMAIL': 'ЭМЕЙЛ',
      /* HIIT */
      'WHAT IS HIIT': 'ЧТО ТАКОЕ ВИИТ',
      /* Kettlebell */
      'WHAT IS KETTLEBELL WORKOUT AND WHY IT\'S IMPORTANT?': 'ЧТО ТАКОЕ ТРЕНИРОВКА С ГИРЯМИ И ПОЧЕМУ ЭТО ВАЖНО?',
      'WHO ARE KETTLEBELL WORKOUTS GOOD FOR?': 'КОМУ ПОДХОДЯТ ТРЕНИРОВКИ С ГИРЯМИ?',
      'EXPERIENCE THE POWER OF KETTLEBELL TRAINING': 'ОЩУТИТЕ СИЛУ ТРЕНИРОВОК С ГИРЯМИ',
      'READY TO TAKE YOUR FITNESS TO THE NEXT LEVEL?': 'ГОТОВЫ ВЫВЕСТИ ФИТНЕС НА НОВЫЙ УРОВЕНЬ?',
      'POPULAR KETTLEBELL WORKOUTS:': 'ПОПУЛЯРНЫЕ УПРАЖНЕНИЯ С ГИРЯМИ:',
      /* Blog */
      'Archives': 'Архив',
      /* Pricing */
      '1v1 In-Person Training': '1v1 тренировки очно',
      '1v1 Online Coaching': '1v1 онлайн-тренировки',
      'Single Session': 'Одно занятие',
      'Session Package': 'Пакет занятий',
      'Online Training': 'Онлайн-тренировка',
      'Training + Diet': 'Тренировка + питание',
      'Per Session': 'За занятие',
      'Per Month': 'В месяц',
      'In-Person at Studio': 'Очно в студии',
      '10 Sessions': '10 занятий',
      'Save vs. single sessions': 'Выгоднее одиночных занятий',
      '1v1 Monthly Program': '1v1 месячная программа',
      'Training + Nutrition Plan': 'Тренировка и план питания',
      'Get Started': 'Начать',
      'Book anytime': 'Запись в любое время',
      'Cancel anytime': 'Отмена в любое время',
      'Personalised workouts plus a full nutrition plan built around your goals.': 'Персональные тренировки и полный план питания под ваши цели.',
      'promotions': 'акции',
      /* Misc */
      '4.9': '4,9',
      'Add Arrows': '',
      'Add Pagination': '',
    }
  };

  /* ---- State ---- */
  const LANG_KEY = 'nypt_lang';
  const DARK_KEY = 'nypt_dark';
  let currentLang = localStorage.getItem(LANG_KEY) || 'en';
  let isDark = localStorage.getItem(DARK_KEY) === '1';

  /* ---- Text Node Cache ---- */
  let nodeCache = null; // [{node, original}]

  function buildNodeCache() {
    nodeCache = [];
    const skip = new Set(['SCRIPT','STYLE','NOSCRIPT','IFRAME','SVG','PATH','CODE','PRE']);
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const tag = node.parentElement && node.parentElement.tagName;
          if (skip.has(tag)) return NodeFilter.FILTER_REJECT;
          const t = node.textContent.trim();
          if (t.length < 2) return NodeFilter.FILTER_SKIP;
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );
    let node;
    while ((node = walker.nextNode())) {
      nodeCache.push({ node, original: node.textContent });
    }
  }

  function applyLang(lang) {
    // Cache is built once with the pristine English DOM text; never rebuild
    // after a translation has been applied, or the "original" would drift
    // into whatever language was last shown (breaking SR→RU or RU→EN).
    if (!nodeCache) buildNodeCache();
    const dict = T[lang] || {};
    for (const { node, original } of nodeCache) {
      const trimmed = original.trim();
      const translated = dict[trimmed];
      if (translated !== undefined) {
        const leading  = original.match(/^\s*/)[0];
        const trailing = original.match(/\s*$/)[0];
        node.textContent = translated === '' ? '' : (leading + translated + trailing);
      } else {
        node.textContent = original;
      }
    }
    document.documentElement.lang = lang === 'sr' ? 'sr' : lang === 'ru' ? 'ru' : 'en';
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    applyLang(lang);
    updateLangButtons();
  }

  function updateLangButtons() {
    document.querySelectorAll('.nypt-lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
  }

  /* ---- Dark Mode ---- */
  function applyDark(dark) {
    document.body.classList.toggle('nypt-dark', dark);
    const btn = document.getElementById('nypt-dark-toggle');
    if (btn) btn.textContent = dark ? '☀️' : '🌙';
  }

  function toggleDark() {
    isDark = !isDark;
    localStorage.setItem(DARK_KEY, isDark ? '1' : '0');
    applyDark(isDark);
  }

  /* ---- UI Injection ---- */
  function injectControls() {
    if (document.getElementById('nypt-controls')) return;

    const bar = document.createElement('div');
    bar.id = 'nypt-controls';
    bar.setAttribute('aria-label', 'Site controls');

    // Dark mode toggle
    const darkBtn = document.createElement('button');
    darkBtn.id = 'nypt-dark-toggle';
    darkBtn.title = 'Toggle dark mode';
    darkBtn.setAttribute('aria-label', 'Toggle dark mode');
    darkBtn.textContent = isDark ? '☀️' : '🌙';
    darkBtn.addEventListener('click', toggleDark);
    bar.appendChild(darkBtn);

    // Separator
    const sep = document.createElement('span');
    sep.className = 'nypt-sep';
    bar.appendChild(sep);

    // Language buttons
    const langs = [
      { code: 'en', label: 'EN' },
      { code: 'sr', label: 'SR' },
      { code: 'ru', label: 'RU' },
    ];
    langs.forEach(({ code, label }) => {
      const btn = document.createElement('button');
      btn.className = 'nypt-lang-btn';
      btn.dataset.lang = code;
      btn.textContent = label;
      btn.title = code === 'en' ? 'English' : code === 'sr' ? 'Srpski' : 'Русский';
      btn.setAttribute('aria-label', btn.title);
      btn.addEventListener('click', () => setLang(code));
      bar.appendChild(btn);
    });

    document.body.appendChild(bar);
    updateLangButtons();
  }

  /* ---- Init ---- */
  function init() {
    // Apply dark mode immediately (before paint) to avoid flash
    if (isDark) document.body.classList.add('nypt-dark');

    // Inject controls
    injectControls();

    // Apply saved language (only non-English needs DOM walk)
    if (currentLang !== 'en') {
      // Small delay to let Elementor JS finish rendering
      setTimeout(() => applyLang(currentLang), 300);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
