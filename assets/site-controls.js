(function () {
  "use strict";

  var LS_THEME = "es_theme";
  var LS_LANG = "es_lang";
  var DEFAULT_LANG = "sr";
  var LANGS = ["sr", "en", "ru"];

  // Translation dictionary. Keys = canonical English text (exact, trimmed).
  // Values: { sr, ru }. Missing keys fall back to English.
  var DICT = {
    "HOME": { sr: "POČETNA", ru: "ГЛАВНАЯ" },
    "Home": { sr: "Početna", ru: "Главная" },
    "Services": { sr: "Usluge", ru: "Услуги" },
    "Service": { sr: "Usluga", ru: "Услуга" },
    "Personal Training": { sr: "Personalni Trening", ru: "Персональные тренировки" },
    "Personal training": { sr: "Personalni trening", ru: "Персональные тренировки" },
    "personal training": { sr: "personalni trening", ru: "персональные тренировки" },
    "PERSONAL TRAINING": { sr: "PERSONALNI TRENING", ru: "ПЕРСОНАЛЬНЫЕ ТРЕНИРОВКИ" },
    "Trainer": { sr: "Trener", ru: "Тренер" },
    "TRAINER": { sr: "TRENER", ru: "ТРЕНЕР" },
    "Trainers": { sr: "Treneri", ru: "Тренеры" },
    "TRAINERS": { sr: "TRENERI", ru: "ТРЕНЕРЫ" },
    "MEET YOUR TRAINER": { sr: "UPOZNAJTE SVOG TRENERA", ru: "ПОЗНАКОМЬТЕСЬ С ТРЕНЕРОМ" },
    "Pricing": { sr: "Cene", ru: "Цены" },
    "Prices": { sr: "Cene", ru: "Цены" },
    "PRICING": { sr: "CENE", ru: "ЦЕНЫ" },
    "About": { sr: "O nama", ru: "О нас" },
    "ABOUT": { sr: "O NAMA", ru: "О НАС" },
    "About us": { sr: "O nama", ru: "О нас" },
    "Contact": { sr: "Kontakt", ru: "Контакт" },
    "CONTACT": { sr: "KONTAKT", ru: "КОНТАКТ" },
    "Blog": { sr: "Blog", ru: "Блог" },
    "BLOG": { sr: "BLOG", ru: "БЛОГ" },
    "FAQ": { sr: "Česta pitanja", ru: "Вопросы и ответы" },
    "faq": { sr: "česta pitanja", ru: "вопросы и ответы" },
    "Location": { sr: "Lokacija", ru: "Адрес" },
    "Our App": { sr: "Naša Aplikacija", ru: "Наше приложение" },
    "JOIN US": { sr: "PRIDRUŽITE SE", ru: "ПРИСОЕДИНЯЙТЕСЬ" },
    "Register Now": { sr: "Registrujte se", ru: "Зарегистрироваться" },
    "Our Friends": { sr: "Naši Prijatelji", ru: "Наши друзья" },
    "press": { sr: "štampa", ru: "пресса" },
    "terms & conditions": { sr: "uslovi korišćenja", ru: "условия использования" },
    "terms & conditions ": { sr: "uslovi korišćenja ", ru: "условия использования " },

    "Barre": { sr: "Barre", ru: "Барре" },
    "BARRE": { sr: "BARRE", ru: "БАРРЕ" },
    "BRIDAL CUT": { sr: "BRIDAL CUT", ru: "BRIDAL CUT" },
    "CORRECTIVE EXERCISE": { sr: "KOREKTIVNE VEŽBE", ru: "КОРРЕКТИРУЮЩИЕ УПРАЖНЕНИЯ" },
    "HIIT": { sr: "HIIT", ru: "HIIT" },
    "KETTLEBELL WORKOUT": { sr: "KETTLEBELL TRENING", ru: "ТРЕНИРОВКА С ГИРЯМИ" },
    "Marathon Preparation Training": { sr: "Priprema za Maraton", ru: "Подготовка к Марафону" },
    "marathon preparation training": { sr: "priprema za maraton", ru: "подготовка к марафону" },
    "MARATHON PREPARATION TRAINING": { sr: "PRIPREMA ZA MARATON", ru: "ПОДГОТОВКА К МАРАФОНУ" },
    "Massage Therapy": { sr: "Masažna Terapija", ru: "Массажная терапия" },
    "MASSAGE THERAPY": { sr: "MASAŽNA TERAPIJA", ru: "МАССАЖНАЯ ТЕРАПИЯ" },
    "Pre & Post Natal Fitness": { sr: "Pre i Postnatalni Fitnes", ru: "Фитнес до и после родов" },
    "PRE AND POSTNATAL TRAINING": { sr: "PRE I POSTNATALNI TRENING", ru: "ТРЕНИРОВКИ ДО И ПОСЛЕ РОДОВ" },
    "Reformer Pilates Class": { sr: "Reformer Pilates Čas", ru: "Пилатес на реформере" },
    "REFORMER PILATES": { sr: "REFORMER PILATES", ru: "ПИЛАТЕС НА РЕФОРМЕРЕ" },
    "STRETCH THERAPY CLASS": { sr: "ČAS STRETCHING TERAPIJE", ru: "КУРС СТРЕТЧИНГ ТЕРАПИИ" },

    "WELCOME": { sr: "DOBRODOŠLI", ru: "ДОБРО ПОЖАЛОВАТЬ" },
    "CLASSES | SERVICES": { sr: "ČASOVI | USLUGE", ru: "ЗАНЯТИЯ | УСЛУГИ" },
    "5-STAR RATINGS": { sr: "OCENE 5 ZVEZDICA", ru: "ОЦЕНКИ 5 ЗВЁЗД" },
    "AS FEATURED IN": { sr: "PISALI SU O NAMA", ru: "О НАС ПИСАЛИ" },
    "Offering now": { sr: "Nudimo sada", ru: "Сейчас предлагаем" },
    "the team": { sr: "tim", ru: "команда" },
    "Articles & publications": { sr: "Članci & publikacije", ru: "Статьи и публикации" },
    "BLOG | NEWS": { sr: "BLOG | VESTI", ru: "БЛОГ | НОВОСТИ" },
    "Latest": { sr: "Najnovije", ru: "Последнее" },
    "Personal & Tailored": { sr: "Lično i prilagođeno", ru: "Персонально и индивидуально" },
    "More Information": { sr: "Više informacija", ru: "Больше информации" },
    "Class led by": { sr: "Čas vodi", ru: "Занятие ведёт" },
    "new client promo": { sr: "promocija za nove klijente", ru: "акция для новых клиентов" },
    "Book a class today with class pass": { sr: "Rezervišite čas danas sa class pass", ru: "Запишитесь на занятие с class pass" },
    "No matter your goal, we'll get you there!": { sr: "Bez obzira na cilj, dovešćemo vas do njega!", ru: "Неважно, какая у вас цель — мы поможем её достичь!" },
    "Split your sessions with a partner to save & stay motivated!": { sr: "Podelite sesije s partnerom da uštedite i ostanete motivisani!", ru: "Разделите занятия с партнёром, чтобы сэкономить и оставаться мотивированными!" },

    "CALL TO SCHEDULE": { sr: "POZOVITE ZA TERMIN", ru: "ПОЗВОНИТЬ И ЗАПИСАТЬСЯ" },
    "Get in touch": { sr: "Kontaktirajte nas", ru: "Связаться с нами" },
    "View All Services": { sr: "Sve Usluge", ru: "Все услуги" },
    "read more": { sr: "pročitaj više", ru: "читать далее" },
    "Read More": { sr: "Pročitaj više", ru: "Читать далее" },
    "Submit": { sr: "Pošalji", ru: "Отправить" },
    "Send": { sr: "Pošalji", ru: "Отправить" },

    "1 Session": { sr: "1 Sesija", ru: "1 Занятие" },
    "12 Sessions": { sr: "12 Sesija", ru: "12 Занятий" },
    "25 Sessions": { sr: "25 Sesija", ru: "25 Занятий" },
    "40 Sessions": { sr: "40 Sesija", ru: "40 Занятий" },
    "duet 10": { sr: "duet 10", ru: "дуэт 10" },
    "1 class": { sr: "1 čas", ru: "1 занятие" },
    "5 classes": { sr: "5 časova", ru: "5 занятий" },
    "10 classes": { sr: "10 časova", ru: "10 занятий" },
    "2 class promo": { sr: "promocija 2 časa", ru: "акция на 2 занятия" },
    "5 class promo": { sr: "promocija 5 časova", ru: "акция на 5 занятий" },
    "30 min Massage": { sr: "30 min Masaža", ru: "Массаж 30 мин" },
    "45 min Massage": { sr: "45 min Masaža", ru: "Массаж 45 мин" },
    "60 min Massage": { sr: "60 min Masaža", ru: "Массаж 60 мин" },
    "90 min Massage": { sr: "90 min Masaža", ru: "Массаж 90 мин" },

    "Belgrade": { sr: "Beograd", ru: "Белград" },
    "EliteShape": { sr: "EliteShape", ru: "EliteShape" },
    "EliteShape Belgrade": { sr: "EliteShape Beograd", ru: "EliteShape Белград" },
    "Skip to content": { sr: "Preskoči na sadržaj", ru: "Перейти к содержимому" },

    // Welcome / homepage long copy
    "Located in Vračar, Belgrade, EliteShape maintains an educated, skilled and friendly health services team that is dedicated to providing the specialized attention, training and knowledge needed to help our clients attain their unique fitness objectives.  As ardent students of the latest developments in fitness, weight loss and strength training exercise programs, we maintain the highest standards for Your Trainer ensuring they regularly develop their skills through related courses throughout the year.": {
      sr: "Smešten u Vračaru, Beograd, EliteShape okuplja obrazovan, stručan i prijateljski tim zdravstvenih i trenažnih radnika posvećen pružanju specijalizovane pažnje, treninga i znanja koje je potrebno da naši klijenti ostvare svoje fitnes ciljeve. Kao posvećeni pratioci najnovijih dostignuća u fitnesu, mršavljenju i programima trening snage, održavamo najviše standarde za vašeg trenera, kroz redovno usavršavanje i pohađanje stručnih kurseva tokom cele godine.",
      ru: "Расположенный в районе Врачар, Белград, EliteShape объединяет образованную, опытную и дружелюбную команду тренеров и специалистов по здоровью, готовых оказать индивидуальное внимание и поделиться знаниями, чтобы наши клиенты достигли своих фитнес-целей. Мы внимательно следим за последними достижениями в фитнесе, снижении веса и силовых тренировках, и поддерживаем высокие стандарты вашего тренера через постоянное обучение в течение года."
    },
    "Keep up with the latest news, trends and information regarding health, fitness, and nutrition.": {
      sr: "Budite u toku sa najnovijim vestima, trendovima i informacijama o zdravlju, fitnesu i ishrani.",
      ru: "Следите за последними новостями, трендами и информацией о здоровье, фитнесе и питании."
    },

    // Blog post titles (rebranded, NYCPT removed)
    "Why Barre Is the Ultimate Low-Impact Workout for Maximum Results": {
      sr: "Zašto je Barre najbolji trening niskog opterećenja za maksimalne rezultate",
      ru: "Почему Barre — лучшая тренировка с низкой нагрузкой для максимальных результатов"
    },
    "5 Common Barre Mistakes and How to Fix Them for Better Results": {
      sr: "5 čestih grešaka u Barre treningu i kako ih ispraviti za bolje rezultate",
      ru: "5 распространённых ошибок в Barre-тренировках и как их исправить для лучших результатов"
    },
    "EliteShape Open House: Spring Edition": {
      sr: "EliteShape Otvoreni dan: Prolećno izdanje",
      ru: "EliteShape День открытых дверей: Весеннее издание"
    },
    "Case Study": { sr: "Studija slučaja", ru: "Кейс" },
    "read more": { sr: "pročitaj više", ru: "читать далее" },
    "READ MORE": { sr: "PROČITAJ VIŠE", ru: "ЧИТАТЬ ДАЛЕЕ" },
    "Read More": { sr: "Pročitaj više", ru: "Читать далее" },
    "Latest": { sr: "Najnovije", ru: "Последнее" },
    "LATEST": { sr: "NAJNOVIJE", ru: "ПОСЛЕДНЕЕ" },

    // Pricing page
    "1v1 In-Person Training": { sr: "1v1 trening uživo", ru: "1v1 тренировки очно" },
    "1v1 Online Coaching": { sr: "1v1 online treninzi", ru: "1v1 онлайн-тренировки" },
    "Single Session": { sr: "Pojedinačni trening", ru: "Одно занятие" },
    "Session Package": { sr: "Paket treninga", ru: "Пакет занятий" },
    "Online Training": { sr: "Online trening", ru: "Онлайн-тренировка" },
    "Training + Diet": { sr: "Trening + ishrana", ru: "Тренировка + питание" },
    "Per Session": { sr: "Po treningu", ru: "За занятие" },
    "Per Month": { sr: "Mesečno", ru: "В месяц" },
    "In-Person at Studio": { sr: "Uživo u studiju", ru: "Очно в студии" },
    "10 Sessions": { sr: "10 treninga", ru: "10 занятий" },
    "Save vs. single sessions": { sr: "Povoljnije od pojedinačnih treninga", ru: "Выгоднее одиночных занятий" },
    "1v1 Monthly Program": { sr: "1v1 mesečni program", ru: "1v1 месячная программа" },
    "Training + Nutrition Plan": { sr: "Trening i plan ishrane", ru: "Тренировка и план питания" },
    "Get Started": { sr: "Počnite", ru: "Начать" },
    "Book anytime": { sr: "Zakažite kada želite", ru: "Запись в любое время" },
    "Cancel anytime": { sr: "Otkažite kada želite", ru: "Отмена в любое время" },
    "Personalised workouts plus a full nutrition plan built around your goals.": { sr: "Personalizovani treninzi i kompletan plan ishrane prilagođen vašim ciljevima.", ru: "Персональные тренировки и полный план питания под ваши цели." },
    "promotions": { sr: "promocije", ru: "акции" },

    // Contact page + form
    "Regardless of your fitness background or the stage of life you find yourself in, Elite Shape Personal Training is dedicated to providing a supportive and inclusive environment. Our goal is to guide and inspire you, whether you’re stepping into the world of fitness for the first time or maintaining an elite athletic performance. Join us, and let’s embark on a wellness journey tailored to your unique goals, celebrating every achievement along the way. Experience top personal training today!": {
      sr: "Bez obzira na vaše fitnes iskustvo ili životnu fazu u kojoj se nalazite, Elite Shape Personal Training je posvećen pružanju podržavajuće i prijateljske atmosfere. Naš cilj je da vas vodimo i inspirišemo, bilo da tek zakoračujete u svet fitnesa ili održavate elitne sportske rezultate. Pridružite nam se i zajedno krenite na put do željenih ciljeva — slavimo svaki napredak na putu ka vama najboljima. Pružamo vrhunski personalni trening!",
      ru: "Независимо от вашего опыта в фитнесе или этапа жизни, Elite Shape Personal Training создаёт дружелюбную и поддерживающую среду. Наша цель — направить и вдохновить вас, будь то первые шаги или поддержание элитной спортивной формы. Присоединяйтесь — мы построим путь к вашим целям и будем отмечать каждый шаг. Первоклассные персональные тренировки!"
    },
    "Get in touch": { sr: "Kontaktirajte nas", ru: "Свяжитесь с нами" },
    "Fill in the form and we'll get back to you via WhatsApp or email.": {
      sr: "Popunite formu i javićemo vam se putem WhatsApp-a ili email-a.",
      ru: "Заполните форму — мы свяжемся с вами через WhatsApp или по email."
    },
    "Full name": { sr: "Ime i prezime", ru: "Имя и фамилия" },
    "Email": { sr: "Email", ru: "Email" },
    "Phone": { sr: "Telefon", ru: "Телефон" },
    "(optional)": { sr: "(opciono)", ru: "(необязательно)" },
    "Goal": { sr: "Cilj", ru: "Цель" },
    "Choose…": { sr: "Izaberi…", ru: "Выберите…" },
    "Weight loss": { sr: "Mršavljenje", ru: "Снижение веса" },
    "Muscle gain": { sr: "Povećanje mišićne mase", ru: "Набор мышечной массы" },
    "General fitness": { sr: "Opšta kondicija", ru: "Общая физическая форма" },
    "Other": { sr: "Drugo", ru: "Другое" },
    "Message": { sr: "Poruka", ru: "Сообщение" },
    "Tell us a bit about your goals…": {
      sr: "Recite nam nešto o svojim ciljevima…",
      ru: "Расскажите немного о своих целях…"
    },
    "Send": { sr: "Pošalji", ru: "Отправить" },
    "Send via WhatsApp": { sr: "Pošalji preko WhatsApp-a", ru: "Отправить через WhatsApp" },
    "Sending… you will get a confirmation email.": {
      sr: "Šaljemo… dobićete email potvrdu.",
      ru: "Отправка… вы получите письмо-подтверждение."
    },
    "Address": { sr: "Adresa", ru: "Адрес" },
    "Opening hours": { sr: "Radno vreme", ru: "Часы работы" },
    "Every day: 9:00 - 21:00": { sr: "Svaki dan: 9:00 - 21:00", ru: "Ежедневно: 9:00 - 21:00" }
  };

  // -- State --
  var state = {
    theme: localStorage.getItem(LS_THEME) || "light",
    lang: localStorage.getItem(LS_LANG) || DEFAULT_LANG
  };

  // Cache originals so we can always translate from the English baseline.
  var textNodes = [];    // { node, original }
  var attrTargets = [];  // { el, attr, original }
  var ATTRS = ["placeholder", "title", "alt", "value", "aria-label"];

  function lookup(text) {
    if (!text) return null;
    var key = text.trim();
    if (!key) return null;
    var entry = DICT[key];
    if (!entry) return null;
    var translated = entry[state.lang];
    if (!translated) return null;
    // Preserve leading/trailing whitespace of original.
    var lead = text.match(/^\s*/)[0];
    var trail = text.match(/\s*$/)[0];
    return lead + translated + trail;
  }

  function translateNode(tn) {
    var out = lookup(tn.original);
    tn.node.nodeValue = out != null ? out : tn.original;
  }

  function translateAttr(at) {
    var out = lookup(at.original);
    if (out != null) at.el.setAttribute(at.attr, out);
    else at.el.setAttribute(at.attr, at.original);
  }

  function applyLanguage() {
    document.documentElement.setAttribute("lang", state.lang);
    if (state.lang === "en") {
      for (var i = 0; i < textNodes.length; i++) textNodes[i].node.nodeValue = textNodes[i].original;
      for (var j = 0; j < attrTargets.length; j++) attrTargets[j].el.setAttribute(attrTargets[j].attr, attrTargets[j].original);
      return;
    }
    for (var k = 0; k < textNodes.length; k++) translateNode(textNodes[k]);
    for (var l = 0; l < attrTargets.length; l++) translateAttr(attrTargets[l]);
  }

  function shouldSkip(el) {
    if (!el) return true;
    var tag = el.nodeName;
    if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT" || tag === "CODE" || tag === "PRE") return true;
    if (el.id === "site-controls" || (el.closest && el.closest("#site-controls"))) return true;
    if (el.hasAttribute && el.hasAttribute("data-sc-skip")) return true;
    return false;
  }

  function collectTextNodes(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = n.parentNode;
        while (p && p !== root && p.nodeType === 1) {
          if (shouldSkip(p)) return NodeFilter.FILTER_REJECT;
          p = p.parentNode;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = walker.nextNode())) {
      textNodes.push({ node: n, original: n.nodeValue });
    }
  }

  function collectAttrs(root) {
    for (var i = 0; i < ATTRS.length; i++) {
      var attr = ATTRS[i];
      var els = root.querySelectorAll("[" + attr + "]");
      for (var j = 0; j < els.length; j++) {
        var el = els[j];
        if (shouldSkip(el) || (el.closest && el.closest("#site-controls"))) continue;
        var val = el.getAttribute(attr);
        if (!val || !val.trim()) continue;
        attrTargets.push({ el: el, attr: attr, original: val });
      }
    }
  }

  // -- Theme --
  function applyTheme() {
    if (state.theme === "dark") document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
    var btn = document.getElementById("sc-theme-btn");
    if (btn) {
      // Clean inline SVG (sun / crescent moon) — renders identically on every font
      btn.innerHTML = state.theme === "dark"
        ? '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>'
        : '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      btn.setAttribute("aria-label", state.theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem(LS_THEME, state.theme);
    applyTheme();
  }

  // -- Controls UI --
  function buildControls() {
    var panel = document.createElement("div");
    panel.id = "site-controls";
    panel.setAttribute("data-sc-skip", "");
    panel.setAttribute("role", "group");
    panel.setAttribute("aria-label", "Site controls");

    var themeBtn = document.createElement("button");
    themeBtn.id = "sc-theme-btn";
    themeBtn.type = "button";
    themeBtn.addEventListener("click", toggleTheme);
    panel.appendChild(themeBtn);

    var langWrap = document.createElement("div");
    langWrap.className = "sc-lang";
    langWrap.setAttribute("role", "tablist");
    LANGS.forEach(function (code) {
      var s = document.createElement("span");
      s.setAttribute("role", "tab");
      s.setAttribute("tabindex", "0");
      s.dataset.lang = code;
      s.textContent = code.toUpperCase();
      s.addEventListener("click", function () { setLang(code); });
      s.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setLang(code); }
      });
      langWrap.appendChild(s);
    });
    panel.appendChild(langWrap);

    // Append to <html> (outside <body>) so the dark-mode filter on body doesn't invert our UI.
    document.documentElement.appendChild(panel);
    updateLangUI();
  }

  function updateLangUI() {
    var spans = document.querySelectorAll("#site-controls .sc-lang span");
    spans.forEach(function (s) {
      if (s.dataset.lang === state.lang) s.classList.add("active");
      else s.classList.remove("active");
    });
  }

  function setLang(code) {
    if (LANGS.indexOf(code) === -1) return;
    state.lang = code;
    localStorage.setItem(LS_LANG, code);
    applyLanguage();
    updateLangUI();
  }

  function init() {
    collectTextNodes(document.body);
    collectAttrs(document.body);
    buildControls();
    applyTheme();
    applyLanguage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  // Fallback init for Elementor image carousels whose frontend handler failed
  // to wire up Swiper. Without this the prev/next chevrons and pagination
  // dots are present in the DOM but inert on this static-export site.
  function initOrphanCarousels() {
    if (typeof Swiper !== "function") return;
    var widgets = document.querySelectorAll(".elementor-widget-image-carousel");
    widgets.forEach(function (w) {
      var wrapper = w.querySelector(".elementor-image-carousel-wrapper.swiper");
      if (!wrapper || wrapper.swiper) return;
      var settings = {};
      try { settings = JSON.parse(w.dataset.settings || "{}"); } catch (e) {}
      var slidesDesktop = parseInt(settings.slides_to_show, 10) || 3;
      var slidesTablet  = parseInt(settings.slides_to_show_tablet, 10)
                        || Math.max(2, Math.min(slidesDesktop, 3));
      var slidesMobile  = parseInt(settings.slides_to_show_mobile, 10) || 2;
      var next = w.querySelector(".elementor-swiper-button-next");
      var prev = w.querySelector(".elementor-swiper-button-prev");
      var pagination = w.querySelector(".swiper-pagination");
      try {
        new Swiper(wrapper, {
          slidesPerView: slidesMobile,
          spaceBetween: 12,
          loop: settings.infinite === "yes",
          speed: parseInt(settings.speed, 10) || 500,
          autoplay: settings.autoplay === "yes" ? {
            delay: parseInt(settings.autoplay_speed, 10) || 4000,
            disableOnInteraction: settings.pause_on_interaction === "yes"
          } : false,
          navigation: next && prev ? { nextEl: next, prevEl: prev } : false,
          pagination: pagination ? { el: pagination, clickable: true } : false,
          breakpoints: {
            768:  { slidesPerView: slidesTablet,  spaceBetween: 16 },
            1024: { slidesPerView: slidesDesktop, spaceBetween: 20 }
          }
        });
      } catch (e) { /* swallow — Swiper will tell us in console */ }
    });
  }

  // Run after Elementor's own init has had its chance.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { setTimeout(initOrphanCarousels, 600); }, { once: true });
  } else {
    setTimeout(initOrphanCarousels, 600);
  }

  /* ------------------------------------------------------------
     Scroll reveal — fade + slide-up as text enters the viewport
     ------------------------------------------------------------ */
  function initScrollReveal() {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var skipSelectors = [
      "#site-controls",
      "#nypt-controls",
      ".ekit-sidebar-group",
      ".ekit-template-content-header",
      ".ekit-template-content-footer",
      "header",
      "footer"
    ].join(",");

    // Animate heading + following paragraph pairs in text-editor widgets —
    // i.e. section intros like "WELCOME" / "Located in Vračar…".  Skip
    // pricing labels, card titles, nav items, button text.
    var candidates = [];
    var seen = new Set();

    // Pair 1: long paragraphs in text-editor widgets (body copy / intros)
    Array.prototype.forEach.call(
      document.querySelectorAll(
        "main .Text-sc-w62x9v-0, " +
        "main .elementor-widget-text-editor p"
      ),
      function (el) {
        if (!el || !el.textContent) return;
        var txt = el.textContent.trim();
        if (txt.length < 90) return;
        if (el.querySelector("p, h1, h2, h3, h4, h5, ul, ol, table, img")) return;
        if (seen.has(el)) return;
        seen.add(el);
        candidates.push(el);
      }
    );

    // Pair 2: headings that sit immediately above those intros.  We grab
    // any h2/h3 whose parent widget is siblinged to one of the paragraphs
    // we already queued — this picks up "WELCOME", "DOBRODOŠLI" etc.
    Array.prototype.forEach.call(
      document.querySelectorAll("main .elementor-widget-heading h1, main .elementor-widget-heading h2, main .elementor-widget-heading h3"),
      function (h) {
        var widget = h.closest(".elementor-widget-heading");
        if (!widget) return;
        var parent = widget.parentElement;
        if (!parent) return;
        var hasLongSibling = false;
        for (var i = 0; i < parent.children.length; i++) {
          var sib = parent.children[i];
          if (sib === widget) continue;
          var t = (sib.textContent || "").trim();
          if (t.length >= 90 && /elementor-widget-text-editor/.test(sib.className||"")) {
            hasLongSibling = true;
            break;
          }
        }
        if (!hasLongSibling) return;
        if (seen.has(h)) return;
        seen.add(h);
        candidates.push(h);
      }
    );

    candidates.forEach(function (el) {
      if (!el || el.closest(skipSelectors)) return;
      if (el.classList.contains("es-reveal")) return;
      el.classList.add("es-reveal");
    });

    // Split paragraph text into word-span wrappers when the element enters
    // the viewport, fire the staggered animation, and flatten back to a
    // plain text node once done so the language-switcher's text-node walker
    // keeps working for future SR/RU/EN toggles.
    function splitAndAnimate(el) {
      if (el._esAnimated) return;
      el._esAnimated = true;
      var text = el.textContent;
      var tokens = text.split(/(\s+)/);
      var html = "";
      var wordIdx = 0;
      tokens.forEach(function (tok) {
        if (/^\s+$/.test(tok) || tok === "") { html += tok; return; }
        var delay = Math.min(wordIdx * 45, 1400);
        html += '<span class="es-word" style="--es-word-delay:' + delay + 'ms">' + tok + "</span>";
        wordIdx++;
      });
      el.innerHTML = html;
      // Force a paint, then toggle .es-visible so transitions fire.
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { el.classList.add("es-visible"); });
      });
      // Flatten back to plain text after all words finish animating so the
      // translation walker can still find a single text node to swap later.
      var totalMs = wordIdx * 45 + 600;
      setTimeout(function () {
        el.textContent = text;
        el.classList.remove("es-visible");
      }, totalMs + 200);
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          splitAndAnimate(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

    document.querySelectorAll(".es-reveal").forEach(function (el) { io.observe(el); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { setTimeout(initScrollReveal, 200); }, { once: true });
  } else {
    setTimeout(initScrollReveal, 200);
  }
})();
