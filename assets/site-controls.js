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
    "promotions": { sr: "promocije", ru: "акции" }
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
})();
