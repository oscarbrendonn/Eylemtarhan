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
    "STRENGTH TRAINING": { sr: "TRENING SNAGE", ru: "СИЛОВЫЕ ТРЕНИРОВКИ" },
    "Strength Training": { sr: "Trening snage", ru: "Силовые тренировки" },
    "BODY TRANSFORMATION": { sr: "TRANSFORMACIJA TELA", ru: "ТРАНСФОРМАЦИЯ ТЕЛА" },
    "Body Transformation": { sr: "Transformacija tela", ru: "Трансформация тела" },
    "WEIGHT LOSS COACHING": { sr: "KOUČING ZA MRŠAVLJENJE", ru: "КОУЧИНГ ПО СНИЖЕНИЮ ВЕСА" },
    "Weight Loss Coaching": { sr: "Koučing za mršavljenje", ru: "Коучинг по снижению веса" },
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
    "Push / Pull / Legs: The Best Workout Split for Building Real Muscle": {
      sr: "Push / Pull / Legs: najbolja podela treninga za pravi rast mišića",
      ru: "Push / Pull / Legs: лучший сплит для реального роста мышц"
    },
    "How Many Sets Per Muscle Per Week? The Science-Backed Answer": {
      sr: "Koliko serija po mišiću nedeljno? Odgovor potkrepljen naukom",
      ru: "Сколько подходов на мышцу в неделю? Ответ с научной базой"
    },
    "Protein, Carbs, Fats: The Simple Macro Split Peter Uses With New Clients": {
      sr: "Proteini, ugljeni hidrati, masti: jednostavna makro podela koju Peter koristi sa novim klijentima",
      ru: "Белки, углеводы, жиры: простой макро-сплит, который Peter использует с новыми клиентами"
    },
    "Cutting vs. Bulking: How Peter Structures Your Fitness Phases": {
      sr: "Sušenje vs. masa: kako Peter strukturira tvoje faze treninga",
      ru: "Сушка против массы: как Peter выстраивает фазы тренировок"
    },
    "Strength Training After 40: Peter's Framework for Longevity": {
      sr: "Trening snage posle 40: Peterov okvir za dugovečnost",
      ru: "Силовые тренировки после 40: система Peter для долголетия"
    },
    "The 20-Minute Morning Routine Peter Gives Every Online Client": {
      sr: "Jutarnja rutina od 20 minuta koju Peter daje svakom online klijentu",
      ru: "20-минутная утренняя рутина, которую Peter даёт каждому онлайн-клиенту"
    },
    "Training": { sr: "Trening", ru: "Тренировка" },
    "Nutrition": { sr: "Ishrana", ru: "Питание" },
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
    "Regardless of your fitness background or the stage of life you find yourself in, I’m dedicated to providing a supportive and welcoming training environment. My goal is to guide and inspire you, whether you’re stepping into the world of fitness for the first time or maintaining elite athletic performance. Join me, and let’s embark on a wellness journey tailored to your unique goals, celebrating every achievement along the way. Experience top personal training today!": {
      sr: "Bez obzira na tvoje fitnes iskustvo ili životnu fazu u kojoj se nalaziš, posvećen sam pružanju podržavajuće i prijateljske atmosfere za trening. Moj cilj je da te vodim i inspirišem, bilo da tek zakoračuješ u svet fitnesa ili održavaš elitne sportske rezultate. Pridruži mi se i zajedno krenimo na put do željenih ciljeva — slavimo svaki napredak na putu ka tvojoj najboljoj verziji. Doživi vrhunski personalni trening već danas!",
      ru: "Независимо от твоего опыта в фитнесе или этапа жизни, я посвящён созданию дружелюбной и поддерживающей среды для тренировок. Моя цель — направлять и вдохновлять тебя, будь то первые шаги или поддержание элитной спортивной формы. Присоединяйся — вместе построим путь к твоим целям и будем отмечать каждый шаг. Первоклассные персональные тренировки!"
    },
    "Get in touch": { sr: "Kontaktirajte nas", ru: "Свяжитесь с нами" },
    "Fill in the form and I'll get back to you via WhatsApp or email.": {
      sr: "Popuni formu i javiću ti se putem WhatsApp-a ili email-a.",
      ru: "Заполни форму — я свяжусь с тобой через WhatsApp или по email."
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
    "Tell me a bit about your goals…": {
      sr: "Reci mi nešto o svojim ciljevima…",
      ru: "Расскажи немного о своих целях…"
    },
    "Send": { sr: "Pošalji", ru: "Отправить" },
    "Send via WhatsApp": { sr: "Pošalji preko WhatsApp-a", ru: "Отправить через WhatsApp" },
    "Sending… you will get a confirmation email.": {
      sr: "Šaljemo… dobićete email potvrdu.",
      ru: "Отправка… вы получите письмо-подтверждение."
    },
    "Address": { sr: "Adresa", ru: "Адрес" },
    "Opening hours": { sr: "Radno vreme", ru: "Часы работы" },
    "Every day: 9:00 - 21:00": { sr: "Svaki dan: 9:00 - 21:00", ru: "Ежедневно: 9:00 - 21:00" },

    // Shared footer / legal / a11y
    "Hamburger Toggle Menu": { sr: "Otvori / zatvori meni", ru: "Переключить меню" },
    "Belgrade, Serbia 11000": { sr: "Beograd, Srbija 11000", ru: "Белград, Сербия 11000" },
    "© All Rights Reserved Elite Shape Personal Training": {
      sr: "© Sva prava zadržana — Elite Shape Personal Training",
      ru: "© Все права защищены — Elite Shape Personal Training"
    },
    "© All Rights Reserved EliteShape RS": {
      sr: "© Sva prava zadržana — EliteShape RS",
      ru: "© Все права защищены — EliteShape RS"
    },
    "Privacy Settings": { sr: "Podešavanja privatnosti", ru: "Настройки приватности" },
    "We use cookies to enhance your experience while using our website. If you are using our Services via a browser you can restrict, block or remove cookies through your web browser settings. We also use content and scripts from third parties that may use tracking technologies. You can selectively provide your consent below to allow such third party embeds. For complete information about the cookies we use, data we collect and how we process them, please check our": {
      sr: "Koristimo kolačiće kako bismo poboljšali vaše iskustvo prilikom korišćenja naše veb-stranice. Ako koristite naše usluge preko pregledača, možete ograničiti, blokirati ili ukloniti kolačiće preko podešavanja vašeg pregledača. Takođe koristimo sadržaj i skripte trećih strana koje mogu koristiti tehnologije praćenja. Ispod možete selektivno dati saglasnost za takve ugradnje trećih strana. Za potpune informacije o kolačićima koje koristimo, podacima koje prikupljamo i kako ih obrađujemo, pogledajte našu",
      ru: "Мы используем файлы cookie для улучшения работы с нашим сайтом. Если вы используете наши сервисы через браузер, вы можете ограничить, заблокировать или удалить cookie в настройках браузера. Мы также используем контент и скрипты сторонних сервисов, которые могут применять технологии отслеживания. Ниже вы можете выборочно дать согласие на такие сторонние встраивания. Полную информацию о cookie, данных, которые мы собираем и обрабатываем, смотрите в нашей"
    },
    "Privacy Policy": { sr: "Politika privatnosti", ru: "Политика конфиденциальности" },

    // Homepage accordion / CTA tiles
    "Learn about our services": { sr: "Saznajte više o našim uslugama", ru: "Узнайте о наших услугах" },
    "Become a member now": { sr: "Postanite član odmah", ru: "Станьте членом прямо сейчас" },
    "FIRST TIMER": { sr: "PRVI PUT?", ru: "ПЕРВЫЙ РАЗ?" },
    "Memberships": { sr: "Članstva", ru: "Членство" },
    "MEMBERSHIPS": { sr: "ČLANSTVA", ru: "ЧЛЕНСТВО" },
    "Valid for 12 months": { sr: "Važi 12 meseci", ru: "Действует 12 месяцев" },
    "No matter your goal, we'll get you there!": {
      sr: "Bez obzira na tvoj cilj, dovešćemo te tamo!",
      ru: "Какой бы ни была твоя цель, мы поможем её достичь!"
    },

    // Client reviews — homepage (SR source → EN + RU)
    "Najbolja investicija u mene samu. Peter je strpljiv, stručan i tačno zna kako da te motiviše i kad ti se uopšte ne dolazi. Za šest meseci dobila sam mišićnu masu koju godinama nisam mogla da izgradim sama u teretani. Držanje mi je bolje, leđa više ne bole. Hvala za sve!": {
      en: "The best investment I have ever made in myself. Peter is patient, skilled, and knows exactly how to motivate you even on days you do not feel like training. In six months I built muscle I could never build on my own at the gym. My posture is better and my back no longer hurts. Thank you for everything!",
      ru: "Лучшая инвестиция в саму себя. Peter терпеливый, опытный и точно знает, как мотивировать даже в те дни, когда совсем не хочется идти. За шесть месяцев я набрала мышечную массу, которую годами не могла построить сама в зале. Осанка стала лучше, спина больше не болит. Спасибо за всё!"
    },
    "Iskreno, nisam verovao da mogu za tri meseca da izgubim 12 kilograma i da mi se menja sastav tela. Peter pravi individualne planove, prati ishranu i ne pušta te na pola puta. Ako ste ozbiljni u vezi promene, ovo je pravo mesto.": {
      en: "Honestly, I did not believe I could drop 12 kilos and change my body composition in three months. Peter builds individual plans, tracks your nutrition, and never lets you stop halfway. If you are serious about change, this is the right place.",
      ru: "Честно, я не верил, что смогу за три месяца сбросить 12 кг и изменить состав тела. Peter строит индивидуальные планы, следит за питанием и не даёт бросить на полпути. Если вы серьёзно настроены на перемены — это правильное место."
    },
    "Training with Peter changed everything for me. Dropped 7kg, built real strength, and finally learned how to train properly. He pushes hard but always reads how your body responds and adjusts. Best trainer I've worked with in years. Fun, professional, and genuinely invested in your progress.": {
      sr: "Trening sa Petrom mi je sve promenio. Skinuo sam 7 kg, izgradio pravu snagu i konačno naučio kako se trenira kako treba. Gura te jako, ali uvek prati kako tvoje telo reaguje i prilagođava program. Najbolji trener sa kojim sam radio godinama. Zabavan, profesionalan i iskreno uključen u tvoj napredak.",
      ru: "Тренировки с Peter полностью всё изменили. Сбросил 7 кг, набрал реальную силу и наконец понял, как правильно тренироваться. Нагружает жёстко, но всегда читает реакцию тела и корректирует программу. Лучший тренер за много лет. Весёлый, профессиональный и по-настоящему вовлечён в твой прогресс."
    },
    "Sjajan trener! Došao sam sa viškom kilograma i ukočenim leđima posle godina sedenja pred računarom. Posle četiri meseca rada sa Petrom skinuo sam 8 kilograma, leđa me više ne bole i osećam se 10 godina mlađe. Preporučujem svima koji žele stvarne rezultate.": {
      en: "Great trainer! I came in overweight with a stiff back after years at a desk. After four months working with Peter I dropped 8 kilos, my back no longer hurts, and I feel ten years younger. I recommend him to anyone who wants real results.",
      ru: "Отличный тренер! Пришёл с лишним весом и зажатой спиной после многих лет за компьютером. После четырёх месяцев работы с Peter сбросил 8 кг, спина больше не болит и чувствую себя на 10 лет моложе. Рекомендую всем, кто хочет реальных результатов."
    },
    "Пётр настоящий профессионал. За полгода тренировок сбросила 9 кг, набрала тонус и впервые за долгое время полюбила своё отражение в зеркале. Внимательный тренер, который слушает и корректирует программу под тебя. Очень рекомендую!": {
      sr: "Peter je pravi profesionalac. Za šest meseci treninga skinula sam 9 kg, dobila tonus i po prvi put posle dužeg vremena zavolela svoj odraz u ogledalu. Pažljiv trener koji sluša i prilagođava program tebi. Preporučujem od srca!",
      en: "Peter is a true professional. In six months of training I lost 9 kg, toned up, and for the first time in a long time fell in love with my reflection in the mirror. An attentive trainer who listens and adjusts the programme to suit you. Highly recommended!"
    },

    // Client reviews — interior pages (about.html, etc.)
    "Godinama sam pokušavala da izgradim tonus u teretani sama, bez uspeha. Sa Petrom sam za šest meseci dobila mišićnu masu koju nikad nisam imala i konačno volim svoj odraz u ogledalu. Strpljiv je i zna tačno kako da te motiviše.": {
      en: "For years I tried to tone up at the gym on my own with no results. With Peter I built muscle in six months that I had never had before, and I finally love my reflection in the mirror. He is patient and knows exactly how to motivate you.",
      ru: "Годами я пыталась привести мышцы в тонус в зале сама, без результата. С Peter за шесть месяцев я набрала мышцы, которых никогда не было, и наконец люблю своё отражение в зеркале. Терпеливый и точно знает, как мотивировать."
    },
    "Sjajan trener i stručnjak. Pratimo ishranu, trening i oporavak, sve je isplanirano. Skinuo sam 10 kilograma za četiri meseca bez ekstremnih dijeta. Treninzi su zahtevni ali zanimljivi.": {
      en: "A great trainer and a real professional. We track nutrition, training, and recovery — everything is planned. I dropped 10 kilos in four months without any extreme diets. The sessions are demanding but always interesting.",
      ru: "Отличный тренер и профессионал. Мы отслеживаем питание, тренировки и восстановление — всё распланировано. Я сбросил 10 кг за четыре месяца без экстремальных диет. Тренировки сложные, но увлекательные."
    },
    "Rad sa Petrom je najbolja investicija koju sam napravila u svoje zdravlje. Bolela su me leđa godinama, sada se osećam kao nov čovek. Uvek je tu za savet, čak i van termina. Preporuka za svakoga.": {
      en: "Working with Peter is the best investment I have ever made in my health. My back used to hurt for years, and now I feel like a new person. He is always there with advice, even outside sessions. A recommendation for everyone.",
      ru: "Работа с Peter — лучшая инвестиция в моё здоровье. Спина болела годами, теперь чувствую себя новым человеком. Всегда на связи с советом, даже вне тренировки. Рекомендую каждому."
    },
    "Iskreno nisam verovao da mogu da se vratim u formu posle četrdesete. Peter je pokazao suprotno. Za pet meseci sam osetio razliku u snazi, držanju i kondiciji. Studio u Vračaru je miran, individualan pristup, bez gužve.": {
      en: "Honestly, I did not believe I could get back in shape after forty. Peter proved the opposite. In five months I felt a real difference in strength, posture, and conditioning. The studio in Vračar is calm, the approach is personal, and there is no crowd.",
      ru: "Честно, я не верил, что смогу вернуться в форму после сорока. Peter доказал обратное. За пять месяцев я почувствовал разницу в силе, осанке и выносливости. Студия во Врачаре спокойная, подход индивидуальный, без толпы."
    },
    "Peter je jedan od retkih trenera koji stvarno prilagodi program tvom telu i tempu. Došao sam kao potpuni početnik, za tri meseca sam skinuo 7 kilograma i dobio više energije u svakodnevnom životu. Preporučujem svima koji su ozbiljni u vezi sebe.": {
      en: "Peter is one of the rare trainers who truly adapts the programme to your body and your pace. I came in as a complete beginner, and in three months I dropped 7 kilos and gained noticeably more energy in daily life. I recommend him to anyone who is serious about themselves.",
      ru: "Peter — один из немногих тренеров, который действительно подстраивает программу под твоё тело и темп. Пришёл полным новичком, за три месяца сбросил 7 кг и получил заметно больше энергии в повседневной жизни. Рекомендую всем, кто серьёзно относится к себе."
    },

    // ============================================================
    // INTERIOR PAGES — shared English body copy (about.html / personal-training.html)
    // ============================================================
    "ABOUT US": { sr: "O NAMA", ru: "О НАС" },
    "ABOUT ME": { sr: "O MENI", ru: "ОБО МНЕ" },
    "Available at: Elite Shape Personal Training": {
      sr: "Dostupno u: Elite Shape Personal Training",
      ru: "Доступно в: Elite Shape Personal Training"
    },
    "At EliteShape we redefine your perception of Personal Training. We make it fun and exciting to work with a personal trainer, while always making sure you reach your personal goals the fastest, most effective way possible. No matter your goal, we will get you there!": {
      sr: "U EliteShape-u redefinisaćemo tvoj pogled na personalni trening. Rad s personalnim trenerom pretvaramo u zabavno i uzbudljivo iskustvo, uz garanciju da ćeš svoje lične ciljeve dostići na najbrži i najefikasniji mogući način. Bez obzira na cilj, dovešćemo te tamo!",
      ru: "В EliteShape мы меняем представление о персональных тренировках. Работа с тренером становится увлекательной и мотивирующей, а ваши цели достигаются самым быстрым и эффективным способом. Какой бы ни была ваша цель — мы поможем её достичь!"
    },
    "At EliteShape I redefine your perception of personal training. I make it fun and exciting to work with a personal trainer, while always making sure you reach your goals the fastest, most effective way possible. No matter your goal, I will get you there.": {
      sr: "U EliteShape-u redefinišem tvoj pogled na personalni trening. Rad s personalnim trenerom pretvaram u zabavno i uzbudljivo iskustvo, uz garanciju da ćeš svoje ciljeve dostići na najbrži i najefikasniji mogući način. Bez obzira na cilj, dovešću te tamo.",
      ru: "В EliteShape я меняю ваше представление о персональных тренировках. Работа с тренером становится увлекательной и мотивирующей, а ваши цели достигаются самым быстрым и эффективным способом. Какой бы ни была ваша цель — я помогу её достичь."
    },
    "At EliteShape I redefine your perception of personal training. I make it fun and exciting to work with a personal trainer, while always making sure you reach your goals the fastest, most effective way possible. No matter your goal, I will get you there!": {
      sr: "U EliteShape-u redefinišem tvoj pogled na personalni trening. Rad s personalnim trenerom pretvaram u zabavno i uzbudljivo iskustvo, uz garanciju da ćeš svoje ciljeve dostići na najbrži i najefikasniji mogući način. Bez obzira na cilj, dovešću te tamo!",
      ru: "В EliteShape я меняю ваше представление о персональных тренировках. Работа с тренером становится увлекательной и мотивирующей, а ваши цели достигаются самым быстрым и эффективным способом. Какой бы ни была ваша цель — я помогу её достичь!"
    },
    "✓ Unique program based on your goals": {
      sr: "✓ Jedinstven program prilagođen tvojim ciljevima",
      ru: "✓ Уникальная программа, построенная под ваши цели"
    },
    "✓ Dedicated 1-on-1 coaching by the best trainers": {
      sr: "✓ Posvećen rad 1-na-1 sa najboljim trenerima",
      ru: "✓ Индивидуальные тренировки 1-на-1 с лучшими тренерами"
    },
    "✓ Dedicated 1-on-1 coaching with me": {
      sr: "✓ Posvećen rad 1-na-1 sa mnom",
      ru: "✓ Индивидуальные тренировки 1-на-1 со мной"
    },
    "✓ 360° approach (sleep, nutrition, stress & movement)": {
      sr: "✓ 360° pristup (san, ishrana, stres i pokret)",
      ru: "✓ Подход 360° (сон, питание, стресс и движение)"
    },
    "✓ Premium fitness equipment": {
      sr: "✓ Vrhunska oprema za trening",
      ru: "✓ Премиальное фитнес-оборудование"
    },
    "✓ Monthly Inbody Scan": {
      sr: "✓ Mesečni Inbody skener",
      ru: "✓ Ежемесячный Inbody-анализ"
    },
    "✓ Monthly Inbody scan": {
      sr: "✓ Mesečni Inbody skener",
      ru: "✓ Ежемесячный Inbody-анализ"
    },
    "✓ 200+ happy customers": {
      sr: "✓ 200+ zadovoljnih klijenata",
      ru: "✓ 200+ довольных клиентов"
    },
    "✓ 200+ happy clients": {
      sr: "✓ 200+ zadovoljnih klijenata",
      ru: "✓ 200+ довольных клиентов"
    },
    "SCHEDULE NOW": { sr: "REZERVIŠI TERMIN", ru: "ЗАПИСАТЬСЯ СЕЙЧАС" },
    "What drives me": { sr: "ŠTA ME POKREĆE", ru: "ЧТО ДВИЖЕТ МНОЙ" },
    "Stepping outside the comfort zone is what fuels me. It’s what drives me to help you reach new heights. I’ve always felt the need to change the status quo and redefine the standards. So I made it happen. I’ve built a next-level training experience that goes beyond the norm. Why? I believe health & fitness empower successful living, and exercise should be fun, exciting and engaging in an innovative way.": {
      sr: "Izlazak iz zone komfora je ono što me pokreće. To je ono što me tera da ti pomognem da dostigneš nove visine. Oduvek sam osećao potrebu da promenim pravila i redefinišem standarde. Tako sam i uradio. Stvorio sam trening iskustvo na višem nivou, koje izlazi iz okvira. Zašto? Verujem da zdravlje i fitnes pokreću uspešan život, a vežbanje treba da bude zabavno, uzbudljivo i inovativno.",
      ru: "Выход из зоны комфорта — моё топливо. Именно он толкает меня помогать тебе достигать новых высот. Я всегда чувствовал необходимость ломать статус-кво и переопределять стандарты. Поэтому я создал тренировочный опыт нового уровня — за рамками привычного. Почему? Я верю, что здоровье и фитнес дают силу для успешной жизни, а тренировка должна быть увлекательной, вдохновляющей и инновационной."
    },
    "I dare you to feel what it’s like. Discover my next-level training now.": {
      sr: "Izazivam te da osetiš kako je to. Otkrij moj trening na višem nivou već danas.",
      ru: "Бросаю тебе вызов — почувствуй это сам. Откройте для себя мою тренировку нового уровня прямо сейчас."
    },
    "I’M COMMITTED": { sr: "POSVEĆEN SAM", ru: "Я ПРЕДАН ДЕЛУ" },
    "I make a commitment to you to be here, ready and focused on your next level. I’m fully dedicated to helping you reach your goals. You will train weekly to make this a lifestyle decision.": {
      sr: "Obećavam ti da ću biti tu — spreman i fokusiran na tvoj sledeći nivo. Potpuno sam posvećen tome da ti pomognem da dostigneš svoje ciljeve. Treniraćeš nedeljno kako bi ovo postalo životni stil.",
      ru: "Я обязуюсь быть рядом — готовым и сосредоточенным на твоём следующем уровне. Я полностью посвящён тому, чтобы помочь тебе достичь цели. Ты будешь тренироваться еженедельно, превращая это в стиль жизни."
    },
    "HABITS-BASED APPROACH": { sr: "PRISTUP ZASNOVAN NA NAVIKAMA", ru: "ПОДХОД НА ОСНОВЕ ПРИВЫЧЕК" },
    "My habits-based approach focuses on the daily opportunities of the four pillars of health (sleep, stress, nutrition, movement), improving where we can to optimize your results.": {
      sr: "Moj pristup zasnovan na navikama fokusira se na svakodnevne prilike u okviru četiri stuba zdravlja (san, stres, ishrana, pokret), poboljšavajući ono što možemo da bismo optimizovali tvoje rezultate.",
      ru: "Мой подход на основе привычек фокусируется на ежедневных возможностях четырёх столпов здоровья (сон, стресс, питание, движение), улучшая то, что в наших силах, для твоих оптимальных результатов."
    },
    "MONTHLY CHECK-INS": { sr: "MESEČNE PROVERE", ru: "ЕЖЕМЕСЯЧНЫЕ ПРОВЕРКИ" },
    "Using my EliteShape app I track biomarkers such as muscle mass, body fat, strength, endurance and other various metrics to assess your progress.": {
      sr: "Kroz svoju EliteShape aplikaciju pratim biomarkere poput mišićne mase, procenta masti, snage, izdržljivosti i drugih metrika kako bih procenio tvoj napredak.",
      ru: "Через своё приложение EliteShape я отслеживаю биомаркеры — мышечную массу, процент жира, силу, выносливость и другие показатели — чтобы оценить твой прогресс."
    },
    "KNOWLEDGE IS POWER": { sr: "ZNANJE JE MOĆ", ru: "ЗНАНИЕ — СИЛА" },
    "While training with me, I believe in teaching you the how and why behind my programming, so that you have the tools to be successful in any environment.": {
      sr: "Dok treniraš sa mnom, verujem da te treba naučiti kako i zašto iza mog programa, kako bi imao alate da budeš uspešan u bilo kom okruženju.",
      ru: "Тренируясь со мной, ты узнаёшь не только «как», но и «почему» за моей программой — чтобы у тебя были инструменты для успеха в любой обстановке."
    },
    "Your Personal Trainer": { sr: "Tvoj Personalni Trener", ru: "Ваш персональный тренер" },
    "Peter does whatever it takes to help you cross the line. He has put in the hours and done the work. Now he is here to help you reach the next level. Meet the coach who is going to help you level up — the one in your corner, every session.": {
      sr: "Peter je spreman na sve da ti pomogne da pređeš cilj. Uložio je sate i prošao kroz rad. Sada je tu da ti pomogne da dostigneš sledeći nivo. Upoznaj trenera koji će te podići na viši nivo — onog ko stoji uz tebe, svaku sesiju.",
      ru: "Питер готов на всё, чтобы помочь тебе пересечь финишную черту. Он вложил часы и прошёл всю работу. Теперь он здесь, чтобы помочь тебе выйти на новый уровень. Познакомься с тренером, который поможет тебе расти — тем, кто в твоём углу, каждую сессию."
    },

    // ============================================================
    // personal-training.html — unique sections
    // ============================================================
    "WHAT’S IN IT FOR ME": { sr: "ŠTA TI OVO DONOSI", ru: "ЧТО ПОЛУЧАЕТЕ ВЫ" },
    "Achieve amazing results by gradually discovering the transformation process. My commitment is coaching you both inside the gym through training and outside the gym with lifestyle habits (sleep, stress, nutrition) to accomplish your goals.": {
      sr: "Postigni izuzetne rezultate postepeno otkrivajući proces transformacije. Moja posvećenost je rad s tobom unutar teretane kroz trening i van nje kroz životne navike (san, stres, ishrana) da dostigneš svoje ciljeve.",
      ru: "Добивайся впечатляющих результатов, постепенно проходя процесс трансформации. Моё обязательство — сопровождать тебя и в зале через тренировки, и вне его — через образ жизни (сон, стресс, питание), чтобы ты достиг своих целей."
    },
    "HOW DOES IT WORK?": { sr: "KAKO FUNKCIONIŠE?", ru: "КАК ЭТО РАБОТАЕТ?" },
    "The first step of your next-level transformation begins with a 55-minute intake session. During this intake session, I will assess and coach you on your movement patterns, health status, and body measurements based on your goals. I will create a personalized, custom plan to achieve the results you want.": {
      sr: "Prvi korak tvoje transformacije na sledeći nivo počinje 55-minutnom uvodnom sesijom. Tokom ove sesije, ja ću proceniti i savetovati te o obrascima pokreta, zdravstvenom statusu i telesnim merama u odnosu na tvoje ciljeve. Kreiraću personalizovan plan prilagođen rezultatima koje želiš.",
      ru: "Первый шаг твоей трансформации — 55-минутная вводная сессия. На ней я оценю паттерны движения, состояние здоровья и параметры тела с учётом твоих целей и составлю индивидуальный план для достижения желаемого результата."
    },
    "GOAL SETTING": { sr: "POSTAVLJANJE CILJEVA", ru: "ПОСТАНОВКА ЦЕЛЕЙ" },
    "While focusing on your journey I take all details into account. Together we discuss your current training program, nutrition plan, sleep habits, physical and mental stressors and main fitness goals to understand where we are and where you want to go.": {
      sr: "Dok se fokusiram na tvoj put, uzimam u obzir sve detalje. Zajedno razgovaramo o tvom trenutnom programu treninga, planu ishrane, navikama spavanja, fizičkim i mentalnim stresorima i glavnim fitnes ciljevima, kako bismo razumeli gde smo i gde želiš da stigneš.",
      ru: "Работая над твоим маршрутом, я учитываю все детали. Вместе мы обсуждаем твою текущую программу тренировок, питание, сон, физические и ментальные стрессоры и основные фитнес-цели — чтобы понять, где мы сейчас и куда ты хочешь прийти."
    },
    "PERSONALIZED PLAN": { sr: "PERSONALIZOVAN PLAN", ru: "ИНДИВИДУАЛЬНЫЙ ПЛАН" },
    "By measuring your progress, I use various biomarkers such as my Inbody 570 Body Composition Analyzer, movement patterns and energy systems metrics. I create a custom plan and timeline to achieve long-term sustainable results.": {
      sr: "Merim tvoj napredak koristeći različite biomarkere poput svog Inbody 570 analizatora sastava tela, obrazaca pokreta i metrika energetskih sistema. Kreiram plan i vremenski okvir prilagođen dugoročnim, održivim rezultatima.",
      ru: "Измеряя твой прогресс, я использую различные биомаркеры — Inbody 570 анализатор состава тела, паттерны движения и метрики энергосистем. Я составляю индивидуальный план и график для долгосрочных устойчивых результатов."
    },

    // ============================================================
    // personal-training.html — How It Works, Training Features, Client Progress
    // ============================================================
    "How It Works": { sr: "Kako funkcioniše", ru: "Как это работает" },
    "From first contact to real results in four steps.": {
      sr: "Od prvog kontakta do stvarnih rezultata u četiri koraka.",
      ru: "От первого контакта до реальных результатов — в четыре шага."
    },
    "01 — Consultation": { sr: "01 — Konsultacija", ru: "01 — Консультация" },
    "02 — Assessment": { sr: "02 — Procena", ru: "02 — Оценка" },
    "03 — Your Program": { sr: "03 — Tvoj program", ru: "03 — Ваша программа" },
    "04 — Results": { sr: "04 — Rezultati", ru: "04 — Результаты" },
    "Consultation": { sr: "Konsultacija", ru: "Консультация" },
    "Assessment": { sr: "Procena", ru: "Оценка" },
    "Your Program": { sr: "Tvoj program", ru: "Ваша программа" },
    "Results": { sr: "Rezultati", ru: "Результаты" },
    "A free 20-minute conversation about your goals, training history and any injuries.": {
      sr: "Besplatan razgovor od 20 minuta o tvojim ciljevima, istoriji treninga i eventualnim povredama.",
      ru: "Бесплатный 20-минутный разговор о ваших целях, истории тренировок и травмах, если они есть."
    },
    "Body measurements and movement analysis in the first session.": {
      sr: "Merenja tela i analiza pokreta na prvoj sesiji.",
      ru: "Замеры тела и анализ движения на первой сессии."
    },
    "You receive a fully personalised training and nutrition plan built for you.": {
      sr: "Dobijaš potpuno personalizovan plan treninga i ishrane napravljen za tebe.",
      ru: "Вы получаете полностью персонализированный план тренировок и питания под вас."
    },
    "We track progress every week, adjust the plan, and celebrate every win.": {
      sr: "Svake nedelje pratimo napredak, prilagođavamo plan i slavimo svaku pobedu.",
      ru: "Каждую неделю отслеживаем прогресс, корректируем план и празднуем каждую победу."
    },
    "Training Features": { sr: "Karakteristike treninga", ru: "Особенности тренировок" },
    "A session that is 100% yours. Peter watches every rep, corrects every error and pushes you further than you would push yourself.": {
      sr: "Sesija koja je 100% tvoja. Peter prati svaku repeticiju, ispravlja svaku grešku i gura te dalje nego što bi ti sam sebe.",
      ru: "Сессия, которая на 100% ваша. Peter следит за каждым повторением, исправляет каждую ошибку и подталкивает вас дальше, чем вы сами бы себя."
    },
    "Precise Technique": { sr: "Precizna tehnika", ru: "Точная техника" },
    "Your trainer watches every movement, corrects errors in real time and makes sure you train safely and efficiently — every single rep.": {
      sr: "Tvoj trener prati svaki pokret, ispravlja greške u realnom vremenu i brine da treniraš bezbedno i efikasno — svaku repeticiju.",
      ru: "Ваш тренер следит за каждым движением, исправляет ошибки в реальном времени и следит, чтобы вы тренировались безопасно и эффективно — в каждом повторении."
    },
    "Your trainer watches every movement, corrects errors in real time and makes sure you train safely and efficiently.": {
      sr: "Tvoj trener prati svaki pokret, ispravlja greške u realnom vremenu i brine da treniraš bezbedno i efikasno.",
      ru: "Ваш тренер следит за каждым движением, исправляет ошибки в реальном времени и следит, чтобы вы тренировались безопасно и эффективно."
    },
    "Flexible Schedule": { sr: "Fleksibilan raspored", ru: "Гибкий график" },
    "Morning, afternoon or evening — we fit training around your life, not the other way around.": {
      sr: "Jutro, popodne ili veče — trening prilagođavamo tvom životu, a ne obrnuto.",
      ru: "Утро, день или вечер — подстраиваем тренировки под вашу жизнь, а не наоборот."
    },
    "Intensity on Your Terms": { sr: "Intenzitet po tvojim uslovima", ru: "Интенсивность под вас" },
    "Beginner or advanced, the programme adapts to your current level and progressively challenges you as you grow stronger.": {
      sr: "Bio početnik ili napredan, program se prilagođava tvom trenutnom nivou i progresivno te izaziva kako postaješ jači.",
      ru: "Новичок или опытный — программа подстраивается под ваш текущий уровень и постепенно усложняется по мере роста силы."
    },
    "Beginner or advanced — the programme adapts to your current level and progressively challenges you as you grow stronger.": {
      sr: "Bio početnik ili napredan — program se prilagođava tvom trenutnom nivou i progresivno te izaziva kako postaješ jači.",
      ru: "Новичок или опытный — программа подстраивается под ваш текущий уровень и постепенно усложняется по мере роста силы."
    },
    "Measurable Progress": { sr: "Merljiv napredak", ru: "Измеримый прогресс" },
    "Every session is logged and every metric tracked. You always know exactly how far you have come and what is next on your journey.": {
      sr: "Svaka sesija je zabeležena i svaka metrika praćena. Uvek znaš tačno koliko si daleko stigao i šta je sledeće na tvom putu.",
      ru: "Каждая сессия записана и каждый показатель отслеживается. Вы всегда точно знаете, как далеко продвинулись и что следующее на пути."
    },
    "Every session is logged and every metric tracked. You always know exactly how far you have come.": {
      sr: "Svaka sesija je zabeležena i svaka metrika praćena. Uvek znaš tačno koliko si daleko stigao.",
      ru: "Каждая сессия записана и каждый показатель отслеживается. Вы всегда точно знаете, как далеко продвинулись."
    },
    "Client Progress": { sr: "Napredak klijenata", ru: "Прогресс клиентов" },
    "Average results after 12 weeks of coaching.": {
      sr: "Prosečni rezultati posle 12 nedelja coaching-a.",
      ru: "Средние результаты через 12 недель коучинга."
    },
    "Strength (bench press)": { sr: "Snaga (bench press)", ru: "Сила (жим лёжа)" },
    "Body fat reduction": { sr: "Smanjenje masnog tkiva", ru: "Снижение жира" },
    "Lean muscle gained": { sr: "Dobijena mišićna masa", ru: "Набор мышечной массы" },
    "Training consistency": { sr: "Doslednost treninga", ru: "Постоянство тренировок" },
    "Strength": { sr: "Snaga", ru: "Сила" },
    "Bench press 1-rep max.": { sr: "Bench press 1RM.", ru: "Жим лёжа — максимум на 1 повторение." },
    "Body Fat": { sr: "Masno tkivo", ru: "Жировая масса" },
    "Measured reduction across scans.": {
      sr: "Mereno smanjenje kroz skenove.",
      ru: "Измеренное снижение по результатам сканов."
    },
    "Lean Muscle": { sr: "Mišićna masa", ru: "Мышечная масса" },
    "Gained through structured training.": {
      sr: "Stečena kroz strukturisan trening.",
      ru: "Набрана через структурированные тренировки."
    },
    "Consistency": { sr: "Doslednost", ru: "Постоянство" },
    "Sessions attended as scheduled.": {
      sr: "Sesije održane po rasporedu.",
      ru: "Сессии, проведённые по расписанию."
    },

    // ============================================================
    // contact.html — unique body copy
    // ============================================================
    "Vračar | Belgrade": { sr: "Vračar | Beograd", ru: "Врачар | Белград" },
    "Get in touch (contact page)": { sr: "Kontaktiraj me", ru: "Свяжись со мной" },
    "Full name": { sr: "Ime i prezime", ru: "Имя и фамилия" },
    "Email": { sr: "E-mail", ru: "E-mail" },
    "Phone": { sr: "Telefon", ru: "Телефон" },
    "(optional)": { sr: "(opciono)", ru: "(необязательно)" },
    "Goal": { sr: "Cilj", ru: "Цель" },
    "Choose…": { sr: "Izaberi…", ru: "Выберите…" },
    "Online training": { sr: "Online trening", ru: "Онлайн-тренировки" },
    "Training + Diet": { sr: "Trening + Ishrana", ru: "Тренировки + Питание" },
    "WhatsApp": { sr: "WhatsApp", ru: "WhatsApp" },

    // ============================================================
    // pricing.html — packages + What's Included
    // ============================================================
    "1v1 In-Person Training": { sr: "1v1 Trening Uživo", ru: "Тренировки 1-на-1 лично" },
    "1v1 Online Coaching": { sr: "1v1 Online Coaching", ru: "Онлайн-коучинг 1-на-1" },
    "Single Session": { sr: "Pojedinačna Sesija", ru: "Одна сессия" },
    "Per Session": { sr: "Po sesiji", ru: "За сессию" },
    "In-Person at Studio": { sr: "Uživo u studiju", ru: "Лично в студии" },
    "Get Started": { sr: "Započni", ru: "Начать" },
    "Book anytime": { sr: "Rezerviši bilo kad", ru: "Запись в любое время" },
    "Session Package": { sr: "Paket Sesija", ru: "Пакет сессий" },
    "10 Sessions": { sr: "10 Sesija", ru: "10 сессий" },
    "Save vs. single sessions": { sr: "Ušteda u odnosu na pojedinačne sesije", ru: "Экономия по сравнению с одиночными" },
    "Online Training": { sr: "Online Trening", ru: "Онлайн-тренировки" },
    "Per Month": { sr: "Mesečno", ru: "В месяц" },
    "1v1 Monthly Program": { sr: "1v1 Mesečni Program", ru: "Ежемесячная программа 1-на-1" },
    "Cancel anytime": { sr: "Otkazivanje bilo kad", ru: "Отмена в любое время" },
    "Training + Nutrition Plan": { sr: "Plan treninga + ishrane", ru: "План тренировок + питание" },
    "Personalised workouts plus a full nutrition plan built around your goals.": {
      sr: "Personalizovani treninzi uz kompletan plan ishrane prilagođen tvojim ciljevima.",
      ru: "Персональные тренировки плюс полный план питания под ваши цели."
    },
    "What's Included in Every Program": {
      sr: "Šta je uključeno u svaki program",
      ru: "Что входит в каждую программу"
    },
    "A complete coaching experience — from first assessment to steady weekly progress. Every package ships with all six below.": {
      sr: "Kompletno coaching iskustvo — od prve procene do stabilnog nedeljnog napretka. Svaki paket uključuje svih šest stavki ispod.",
      ru: "Полный коучинговый опыт — от первичной оценки до стабильного еженедельного прогресса. В каждый пакет входят все шесть пунктов ниже."
    },
    "Initial Assessment": { sr: "Inicijalna procena", ru: "Первичная оценка" },
    "Body, movement and health analysis before your first session.": {
      sr: "Analiza tela, pokreta i zdravlja pre prve sesije.",
      ru: "Анализ тела, движения и здоровья перед первой сессией."
    },
    "Personalized Program": { sr: "Personalizovan program", ru: "Персональная программа" },
    "A training plan built exclusively around your goals.": {
      sr: "Plan treninga napravljen isključivo oko tvojih ciljeva.",
      ru: "План тренировок, построенный исключительно под ваши цели."
    },
    "Nutrition Plan": { sr: "Plan ishrane", ru: "План питания" },
    "Calories, macros and practical advice tailored to you.": {
      sr: "Kalorije, makroi i praktični saveti prilagođeni tebi.",
      ru: "Калории, макронутриенты и практичные советы под вас."
    },
    "Weekly Check-ins": { sr: "Nedeljne provere", ru: "Еженедельные проверки" },
    "Progress reviews every week with real-time program adjustments.": {
      sr: "Nedeljni pregledi napretka uz izmene programa u realnom vremenu.",
      ru: "Еженедельный разбор прогресса с корректировкой программы в реальном времени."
    },
    "Direct Communication": { sr: "Direktna komunikacija", ru: "Прямая связь" },
    "Your coach is available for questions and support throughout the day.": {
      sr: "Tvoj trener ti je dostupan za pitanja i podršku tokom dana.",
      ru: "Тренер на связи для вопросов и поддержки в течение дня."
    },
    "Progress Tracking": { sr: "Praćenje napretka", ru: "Отслеживание прогресса" },
    "Measurements, photos and stats logged through your app.": {
      sr: "Mere, fotografije i statistika beleže se kroz aplikaciju.",
      ru: "Замеры, фото и статистика фиксируются в приложении."
    },
    "Trainers": { sr: "Treneri", ru: "Тренеры" },

    // ============================================================
    // faq.html — Q&As
    // ============================================================
    "Personal Training with Peter": {
      sr: "Personalni trening sa Petrom",
      ru: "Персональные тренировки с Peter"
    },
    "Training, Nutrition & Results": {
      sr: "Trening, ishrana i rezultati",
      ru: "Тренировки, питание и результаты"
    },
    "Tracking, Pricing & Booking": {
      sr: "Praćenje, cene i zakazivanje",
      ru: "Трекинг, цены и запись"
    },
    "More questions?": { sr: "Još pitanja?", ru: "Остались вопросы?" },
    "Message Peter directly and get an answer within a day.": {
      sr: "Pošalji Petru poruku direktno i dobij odgovor u roku od jednog dana.",
      ru: "Напишите Peter напрямую и получите ответ в течение дня."
    },
    "How does a 1-on-1 personal training session with Peter work?": {
      sr: "Kako izgleda 1-na-1 personalni trening sa Petrom?",
      ru: "Как проходит персональная тренировка 1-на-1 с Peter?"
    },
    "Every EliteShape personal training session in Vračar, Belgrade starts with a movement assessment and a short health intake so Peter can build a plan around your body and goals. A typical session runs 60 minutes and combines strength, mobility and conditioning, tailored to whether you are training for weight loss, muscle gain or general fitness. You leave each session with clear progress notes and the next workout scheduled.": {
      sr: "Svaki EliteShape trening u Vračaru, Beograd počinje procenom pokreta i kratkim zdravstvenim intervjuom, kako bi Peter mogao da napravi plan prilagođen tvom telu i ciljevima. Tipična sesija traje 60 minuta i kombinuje snagu, mobilnost i kondiciju — prilagođeno da li treniraš za mršavljenje, mišićnu masu ili opštu kondiciju. Sa svake sesije odlaziš sa jasnim beleškama o napretku i zakazanim sledećim treningom.",
      ru: "Каждая персональная тренировка EliteShape во Врачаре, Белград начинается с оценки движения и короткого опроса о здоровье, чтобы Peter построил план под ваше тело и цели. Обычная сессия длится 60 минут и совмещает силу, мобильность и кондиционинг — в зависимости от цели (похудение, набор массы или общая форма). После каждой сессии вы получаете заметки о прогрессе и следующую тренировку в расписании."
    },
    "Can I book a free consultation before committing?": {
      sr: "Mogu li da zakažem besplatnu konsultaciju pre nego što se odlučim?",
      ru: "Можно ли записаться на бесплатную консультацию перед оплатой?"
    },
    "Yes. Before you buy a session package, Peter offers a free 20-minute consultation — in person at the Vračar studio or online — where you walk through your goals, training history and schedule. You get an honest opinion on timelines and pricing, and only move forward if the programme fits. No pressure, no sales script.": {
      sr: "Da. Pre nego što kupiš paket sesija, Peter nudi besplatnu konsultaciju od 20 minuta — uživo u studiju u Vračaru ili onlajn — gde razgovarate o ciljevima, istoriji treninga i rasporedu. Dobijaš iskreno mišljenje o rokovima i ceni i nastavljaš samo ako ti program odgovara. Bez pritiska, bez prodajnih fora.",
      ru: "Да. Перед покупкой пакета сессий Peter предлагает бесплатную 20-минутную консультацию — лично в студии во Врачаре или онлайн — чтобы обсудить ваши цели, историю тренировок и расписание. Вы получаете честное мнение о сроках и цене и двигаетесь дальше, только если программа подходит. Без давления и продающих сценариев."
    },
    "What if Peter isn't the right fit after the first session?": {
      sr: "Šta ako se posle prve sesije ispostavi da Peter nije pravi trener za mene?",
      ru: "Что если после первой сессии Peter окажется не подходящим тренером?"
    },
    "Trainer-client chemistry matters. If the working style doesn't suit you after session one, just tell us — no awkwardness, no pressure. We either adjust the approach or point you toward a better fit elsewhere.": {
      sr: "Hemija između trenera i klijenta je bitna. Ako ti stil rada ne odgovara posle prve sesije, samo nam kaži — bez nelagode, bez pritiska. Ili prilagodimo pristup, ili te uputimo nekome kome više odgovaraš.",
      ru: "Химия между тренером и клиентом важна. Если стиль работы не подошёл после первой сессии — просто скажите, без неловкости и давления. Мы либо подстроим подход, либо подскажем, к кому обратиться."
    },
    "How many sessions per week do I need?": {
      sr: "Koliko sesija nedeljno mi je potrebno?",
      ru: "Сколько сессий в неделю мне нужно?"
    },
    "For fat loss or muscle building Peter recommends 3–4 sessions per week. For general health and fitness, 2–3 sessions work well. We discuss the right cadence for your schedule and goals during the consultation.": {
      sr: "Za gubitak masti ili izgradnju mišića Peter preporučuje 3–4 sesije nedeljno. Za opšte zdravlje i kondiciju dovoljne su 2–3 sesije. Tačan ritam za tvoj raspored i ciljeve definišemo na konsultaciji.",
      ru: "Для снижения жира или набора мышц Peter рекомендует 3–4 сессии в неделю. Для общего здоровья и формы хватает 2–3 сессий. Правильный ритм под ваше расписание и цели определяем на консультации."
    },
    "I have an injury — can I still train?": {
      sr: "Imam povredu — da li ipak mogu da treniram?",
      ru: "У меня травма — могу ли я тренироваться?"
    },
    "In most cases yes. Many clients train around chronic pain or are recovering from injuries. We design the programme to avoid loading the problematic area and often build exercises that actively support rehabilitation.": {
      sr: "U većini slučajeva — da. Mnogi klijenti treniraju uz hroničan bol ili se oporavljaju od povreda. Dizajniramo program tako da izbegavamo opterećenje problematične oblasti, a često uključujemo vežbe koje aktivno podržavaju rehabilitaciju.",
      ru: "В большинстве случаев — да. Многие клиенты тренируются с хронической болью или восстанавливаются после травм. Мы составляем программу так, чтобы не нагружать проблемную зону, и часто добавляем упражнения, которые помогают реабилитации."
    },
    "How fast can I expect results with personal training?": {
      sr: "Koliko brzo mogu da očekujem rezultate uz personalni trening?",
      ru: "Как быстро можно ожидать результатов от персональных тренировок?"
    },
    "Most EliteShape clients see real changes — better body composition, more strength, visible fat loss — within 6 to 8 weeks of consistent 2-3 sessions per week. The rate depends on three things Peter tracks every week: training intensity, recovery, and nutrition. If you follow the plan, measurable results in the first month are the norm rather than the exception.": {
      sr: "Većina EliteShape klijenata vidi stvarne promene — bolji sastav tela, veću snagu, vidljiv gubitak masti — u roku od 6 do 8 nedelja, uz dosledne 2–3 sesije nedeljno. Tempo zavisi od tri stvari koje Peter prati nedeljno: intenzitet treninga, oporavak i ishrana. Ako pratiš plan, merljivi rezultati u prvom mesecu su pravilo, ne izuzetak.",
      ru: "Большинство клиентов EliteShape замечают реальные изменения — улучшение состава тела, рост силы, заметное снижение жира — за 6–8 недель при постоянных 2–3 сессиях в неделю. Скорость зависит от трёх вещей, которые Peter отслеживает еженедельно: интенсивность тренировок, восстановление и питание. Если следовать плану, измеримые результаты в первый месяц — это правило, а не исключение."
    },
    "Do you offer online personal training programs?": {
      sr: "Da li nudite online personalne programe treninga?",
      ru: "Есть ли онлайн-программы персональных тренировок?"
    },
    "Yes. The €75 monthly online programme gives you a custom training plan delivered through an app, weekly check-ins with Peter, and video form-checks on your lifts. The €125 plan adds a full nutrition plan built around your schedule and preferences. Both are 1-on-1 coaching — not generic templates — and you can start from anywhere in the world.": {
      sr: "Da. Mesečni online program od €75 uključuje personalizovan plan treninga kroz aplikaciju, nedeljne provere s Petrom i video analize tehnike. Plan od €125 dodaje kompletan plan ishrane prilagođen tvom rasporedu i navikama. Oba su 1-na-1 coaching — ne generički šabloni — i možeš da počneš s bilo kog mesta u svetu.",
      ru: "Да. Месячная онлайн-программа за €75 включает индивидуальный план тренировок в приложении, еженедельные проверки с Peter и видео-разбор техники. План за €125 добавляет полный план питания под ваше расписание и привычки. Оба — коучинг 1-на-1, а не шаблоны, и начать можно из любой точки мира."
    },
    "Is nutrition coaching included in the training plans?": {
      sr: "Da li je savetovanje o ishrani uključeno u planove treninga?",
      ru: "Входит ли консультирование по питанию в планы тренировок?"
    },
    "Nutrition is included in the Training + Diet plan (€125 per month online, or added to in-person packages). You get a meal-structure that fits your routine, macronutrient targets based on your goal, grocery-list templates in English or Serbian, and weekly adjustments as your body responds. Peter keeps the plan realistic — no extreme cuts, no complicated supplement stacks.": {
      sr: "Ishrana je uključena u plan Trening + Ishrana (€125 mesečno online ili uz pakete uživo). Dobijaš strukturu obroka prilagođenu tvojoj rutini, makronutrijentske ciljeve prema tvom cilju, šablone lista za kupovinu na srpskom ili engleskom, i nedeljne korekcije kako tvoje telo reaguje. Peter drži plan realnim — bez ekstremnih rezova, bez komplikovanih suplementacija.",
      ru: "Питание включено в план Тренировки + Питание (€125 в месяц онлайн или к очным пакетам). Вы получаете структуру приёмов пищи под ваш ритм, целевые макронутриенты под цель, шаблоны списков покупок на английском или сербском и еженедельные корректировки. Peter делает план реалистичным — без экстремальных урезаний и сложных стеков добавок."
    },
    "Why choose a certified personal trainer in Vračar, Belgrade?": {
      sr: "Zašto izabrati sertifikovanog personalnog trenera u Vračaru, Beograd?",
      ru: "Почему стоит выбрать сертифицированного тренера во Врачаре, Белград?"
    },
    "Training with Peter at EliteShape in Vračar gives you three things a regular gym cannot: a programme built for your body, a trainer who watches every rep, and a plan that evolves with your progress. Most clients come in with back pain, plateaued weight loss or stalled strength — and walk out in 3 months measurably stronger, leaner and confident in the gym. Belgrade-central location, English and Serbian coaching, flexible schedule including online sessions.": {
      sr: "Trening s Petrom u EliteShape-u u Vračaru daje ti tri stvari koje obična teretana ne može: program napravljen za tvoje telo, trenera koji prati svaku repeticiju i plan koji se razvija sa tvojim napretkom. Većina klijenata dolazi s bolovima u leđima, zastojem u mršavljenju ili snagom koja stoji — a već za 3 meseca izlazi merljivo jači, lakši i siguran u teretani. Centralna lokacija u Beogradu, coaching na engleskom i srpskom, fleksibilan raspored uključujući online sesije.",
      ru: "Тренировки с Peter в EliteShape во Врачаре дают три вещи, которых нет в обычном зале: программу под ваше тело, тренера, который следит за каждым повторением, и план, который развивается с вашим прогрессом. Большинство клиентов приходят с болями в спине, остановкой в похудении или застоем в силе — и через 3 месяца выходят заметно сильнее, стройнее и увереннее в зале. Центральная локация в Белграде, коучинг на английском и сербском, гибкое расписание, включая онлайн-сессии."
    },
    "What does a typical week of online coaching look like?": {
      sr: "Kako izgleda tipična nedelja online coaching-a?",
      ru: "Как выглядит типичная неделя онлайн-коучинга?"
    },
    "Each week you receive your training and meal plan. After every session you log weights, sets and reps in the app. At the end of the week you send photos and measurements; Peter reviews the data and adjusts the following week accordingly.": {
      sr: "Svake nedelje dobijaš plan treninga i ishrane. Posle svake sesije beležiš kilažu, serije i ponavljanja u aplikaciji. Na kraju nedelje šalješ fotografije i mere; Peter pregleda podatke i prilagođava sledeću nedelju.",
      ru: "Каждую неделю вы получаете план тренировок и питания. После каждой сессии вносите веса, подходы и повторения в приложение. В конце недели отправляете фото и замеры; Peter анализирует данные и корректирует следующую неделю."
    },
    "I'm not in Serbia — can I still use online coaching?": {
      sr: "Nisam u Srbiji — mogu li da koristim online coaching?",
      ru: "Я не в Сербии — можно ли заниматься онлайн?"
    },
    "Absolutely. Online coaching was built exactly for this. It works seamlessly across time zones — communication happens through the app or WhatsApp, fast, clear and consistent.": {
      sr: "Apsolutno. Online coaching je upravo za to napravljen. Besprekorno radi kroz vremenske zone — komunikacija ide preko aplikacije ili WhatsApp-a, brzo, jasno i dosledno.",
      ru: "Конечно. Онлайн-коучинг для этого и создан. Он отлично работает в любых часовых поясах — общение идёт через приложение или WhatsApp: быстро, чётко и стабильно."
    },
    "Do I need a gym, or can I train at home?": {
      sr: "Da li mi treba teretana ili mogu da treniram kod kuće?",
      ru: "Нужен ли зал, или можно тренироваться дома?"
    },
    "Either works. When you sign up, you tell us what equipment you have — dumbbells, resistance bands, bodyweight only, or a fully equipped gym — and Peter builds the programme exclusively around that. A gym membership is never a requirement.": {
      sr: "Oboje funkcioniše. Kada se prijaviš, kažeš nam koju opremu imaš — bučice, gumene trake, samo sopstvenu težinu ili potpuno opremljenu teretanu — i Peter gradi program isključivo oko toga. Članarina u teretani nikada nije uslov.",
      ru: "Оба варианта подходят. При записи вы указываете, какое оборудование у вас есть — гантели, резинки, только собственный вес или полностью оборудованный зал — и Peter строит программу исключительно под это. Абонемент в зал не обязателен."
    },
    "How much time does tracking take each day?": {
      sr: "Koliko vremena dnevno oduzima praćenje?",
      ru: "Сколько времени в день занимает трекинг?"
    },
    "About 5–10 minutes a day. Log what you ate and what you did in your session — that's all it takes. It feels like extra effort the first week, then it becomes part of the routine.": {
      sr: "Oko 5–10 minuta dnevno. Upiši šta si jeo i šta si uradio na treningu — to je sve. Prve nedelje deluje kao dodatni trud, onda postane deo rutine.",
      ru: "Около 5–10 минут в день. Записывайте, что ели и что делали на тренировке — этого достаточно. В первую неделю кажется лишним усилием, потом становится частью рутины."
    },
    "Do I have to count every single calorie?": {
      sr: "Da li moram da brojim svaku kaloriju?",
      ru: "Нужно ли считать каждую калорию?"
    },
    "Not necessarily. Some clients do precise macro tracking; others focus on healthy eating principles without obsessive counting. Peter adapts the approach to your personality and goals.": {
      sr: "Ne obavezno. Neki klijenti precizno prate makroe; drugi se fokusiraju na principe zdrave ishrane bez opsesivnog brojanja. Peter prilagođava pristup tvojoj ličnosti i ciljevima.",
      ru: "Необязательно. Кто-то точно считает макросы, кто-то придерживается принципов здорового питания без навязчивого подсчёта. Peter подстраивает подход под вашу личность и цели."
    },
    "What if I miss a session or fall off the diet?": {
      sr: "Šta ako propustim sesiju ili odstupim od ishrane?",
      ru: "Что если я пропущу тренировку или сорвусь с плана питания?"
    },
    "No big deal — it's part of the process. We don't punish, we analyse. We look at why it happened and how to prevent it next time. Transparency is the key, not perfection.": {
      sr: "Nije veliki problem — to je deo procesa. Ne kažnjavamo, analiziramo. Gledamo zašto se desilo i kako da sledeći put sprečimo. Transparentnost je ključ, ne savršenstvo.",
      ru: "Ничего страшного — это часть процесса. Мы не наказываем, а анализируем. Смотрим, почему так вышло и как предотвратить это в следующий раз. Ключ — прозрачность, а не идеал."
    },
    "How does payment work?": {
      sr: "Kako funkcioniše plaćanje?",
      ru: "Как работает оплата?"
    },
    "Monthly or by package. During the initial consultation we walk through all options and find the one that suits your needs. No long-term contracts from day one.": {
      sr: "Mesečno ili po paketu. Na inicijalnoj konsultaciji prolazimo kroz sve opcije i pronalazimo onu koja ti odgovara. Bez dugoročnih ugovora od prvog dana.",
      ru: "Ежемесячно или пакетом. На первой консультации мы проходим по всем вариантам и выбираем подходящий вам. Никаких долгосрочных контрактов с первого дня."
    },
    "What if I need to cancel a session?": {
      sr: "Šta ako treba da otkažem sesiju?",
      ru: "Что если нужно отменить сессию?"
    },
    "We ask for at least 24 hours notice. Sessions cancelled on time can be rescheduled at no cost. Late cancellations (under 24h) follow the cancellation policy in your agreement.": {
      sr: "Molimo te da nas obavestiš najmanje 24 sata unapred. Sesije otkazane na vreme zakazujemo bez dodatnih troškova. Kasna otkazivanja (manje od 24h) podležu pravilima otkazivanja iz tvog ugovora.",
      ru: "Просим уведомить минимум за 24 часа. Вовремя отменённые сессии переносим без доплат. Поздние отмены (менее 24 ч) — по условиям отмены из договора."
    },
    "Can I pause my program?": {
      sr: "Da li mogu da pauziram svoj program?",
      ru: "Можно ли поставить программу на паузу?"
    },
    "Yes. Life happens — illness, travel, work. If you request a pause in advance, we adjust your programme with no loss of paid sessions.": {
      sr: "Da. Život se dešava — bolest, putovanja, posao. Ako zatražiš pauzu unapred, prilagodićemo program bez gubitka plaćenih sesija.",
      ru: "Да. Бывают болезни, поездки, работа. Если запросите паузу заранее, мы скорректируем программу без потери оплаченных сессий."
    },

    // ============================================================
    // strength-training.html
    // ============================================================
    "What is Strength Training?": {
      sr: "Šta je Trening Snage?",
      ru: "Что такое силовые тренировки?"
    },
    "Strength training is the foundation of every great physique and every lasting result. It's a smart, progressive way of loading your muscles with resistance — barbells, dumbbells, kettlebells, cables, machines, or your own bodyweight — so they adapt, grow, and get stronger. In my sessions we work compound lifts like squats, deadlifts, presses, and rows alongside focused accessory work, so you build muscle, burn fat, and move better in everyday life. Whether you're new to the gym or chasing serious gains, I'll program every rep around your body, your goals, and how you actually feel that day.": {
      sr: "Trening snage je temelj svakog dobrog tela i svakog trajnog rezultata. To je pametan, progresivan način opterećenja mišića otporom — šipkama, bučicama, kettlebellovima, kablovima, spravama ili sopstvenom težinom — kako bi se prilagodili, rasli i postali jači. Na mojim sesijama radimo kompleksne vežbe poput čučnja, mrtvog dizanja, potiska i veslanja, uz fokusiran dodatni rad, da izgradiš mišićnu masu, sagoriš masti i bolje se krećeš u svakodnevnom životu. Bio si nov u teretani ili juriš ozbiljne rezultate, svaku ponavljanje programiram prema tvom telu, ciljevima i tome kako se zaista osećaš tog dana.",
      ru: "Силовые тренировки — это фундамент каждого красивого тела и долговременного результата. Это умный, прогрессивный способ нагружать мышцы сопротивлением — штангой, гантелями, гирями, блоками, тренажёрами или собственным весом — чтобы они адаптировались, росли и становились сильнее. На моих занятиях мы делаем базовые упражнения — приседания, становую тягу, жимы, тяги — плюс целенаправленную вспомогательную работу, чтобы ты рос в мышцах, сжигал жир и двигался лучше в обычной жизни. Новичок ты или гонишься за серьёзным прогрессом, я программирую каждый повтор под твоё тело, твои цели и то, как ты реально чувствуешь себя в этот день."
    },
    "BUILD REAL, FUNCTIONAL STRENGTH:": {
      sr: "IZGRADI STVARNU, FUNKCIONALNU SNAGU:",
      ru: "НАСТОЯЩАЯ, ФУНКЦИОНАЛЬНАЯ СИЛА:"
    },
    "Strength training teaches your body to produce force safely and efficiently. You'll lift heavier week after week, move more powerfully, and handle everyday tasks — stairs, groceries, sport, kids — with zero effort and no aches afterward.": {
      sr: "Trening snage uči tvoje telo da proizvodi silu bezbedno i efikasno. Dizaćeš teže iz nedelje u nedelju, kretati se snažnije i obavljati svakodnevne zadatke — stepenice, kese, sport, decu — bez napora i bez bolova nakon.",
      ru: "Силовые тренировки учат тело производить силу безопасно и эффективно. Неделя за неделей ты поднимаешь больше, движешься мощнее и справляешься с повседневными задачами — лестница, сумки, спорт, дети — без усилий и без болей после."
    },
    "MORE MUSCLE, LESS FAT:": {
      sr: "VIŠE MIŠIĆA, MANJE MASTI:",
      ru: "БОЛЬШЕ МЫШЦ, МЕНЬШЕ ЖИРА:"
    },
    "Lifting builds lean muscle, and more muscle means a higher metabolism around the clock. You keep burning calories long after you leave the gym, your body composition shifts fast, and the results actually stick — because muscle is what shapes you.": {
      sr: "Dizanje gradi čistu mišićnu masu, a više mišića znači brži metabolizam 24/7. Kalorije sagorevaš još dugo nakon izlaska iz teretane, sastav tela se menja brzo, a rezultati zaista ostaju — jer te mišići oblikuju.",
      ru: "Тренировки строят сухую мышечную массу, а больше мышц — это ускоренный метаболизм круглые сутки. Ты сжигаешь калории ещё долго после зала, состав тела меняется быстро, а результаты реально держатся — ведь форму тебе придают именно мышцы."
    },
    "STRONGER BONES AND JOINTS:": {
      sr: "JAČE KOSTI I ZGLOBOVI:",
      ru: "КРЕПКИЕ КОСТИ И СУСТАВЫ:"
    },
    "Progressive resistance stimulates bone density and reinforces the tendons and ligaments around every joint. It's your best insurance against injury, back pain, and the effects of age — so you keep training hard for decades, not months.": {
      sr: "Progresivan otpor stimuliše gustinu kostiju i jača tetive i ligamente oko svakog zgloba. To je najbolje osiguranje protiv povreda, bolova u leđima i efekata starenja — tako treniraš snažno decenijama, ne mesecima.",
      ru: "Прогрессивное сопротивление стимулирует плотность костей и укрепляет сухожилия и связки вокруг каждого сустава. Это твоя лучшая страховка от травм, боли в спине и возрастных изменений — так ты тренируешься всерьёз десятилетиями, а не месяцами."
    },
    "CONFIDENCE BEYOND THE GYM:": {
      sr: "SAMOPOUZDANJE VAN TERETANE:",
      ru: "УВЕРЕННОСТЬ ЗА ПРЕДЕЛАМИ ЗАЛА:"
    },
    "Adding weight to the bar week after week is proof you can do hard things. That confidence follows you out of the studio — into work, into sport, into how you carry yourself — and it's honestly the part my clients tell me they love the most.": {
      sr: "Dodavanje težine na šipku iz nedelje u nedelju je dokaz da možeš da radiš teške stvari. To samopouzdanje te prati i van studija — na posao, u sport, u način na koji se držiš — i iskreno, to je deo koji mi klijenti kažu da vole najviše.",
      ru: "Каждую неделю добавляя вес на штангу, ты доказываешь, что способен на сложное. Эта уверенность выходит из зала вместе с тобой — на работу, в спорт, в то, как ты держишь себя — и честно, клиенты говорят, что именно это они любят больше всего."
    },

    // ============================================================
    // body-transformation.html
    // ============================================================
    "WHAT IS BODY TRANSFORMATION AND WHY IT MATTERS?": {
      sr: "ŠTA JE TRANSFORMACIJA TELA I ZAŠTO JE VAŽNA?",
      ru: "ЧТО ТАКОЕ ТРАНСФОРМАЦИЯ ТЕЛА И ПОЧЕМУ ЭТО ВАЖНО?"
    },
    "A real body transformation isn't a 30-day challenge or a crash diet — it's a structured 1-on-1 program built around you. We combine progressive strength training, smart conditioning, and honest nutrition guidance so your body composition, energy, and confidence all change together. I track your progress session by session, adjust the plan as your body adapts, and hold you accountable when motivation dips. The result is a stronger, leaner version of you that actually stays that way.": {
      sr: "Prava transformacija tela nije izazov od 30 dana ni brza dijeta — to je strukturiran 1-na-1 program napravljen za tebe. Kombinujemo progresivan trening snage, pametno kondicioniranje i iskrene savete o ishrani, tako da se sastav tela, energija i samopouzdanje menjaju zajedno. Pratim tvoj napredak sesiju po sesiju, prilagođavam plan dok se telo menja i držim te odgovornim kada motivacija oslabi. Rezultat je snažnija, čvršća verzija tebe — koja zaista ostaje takva.",
      ru: "Настоящая трансформация тела — это не челлендж на 30 дней и не жёсткая диета. Это структурная программа 1-на-1, построенная под тебя. Мы соединяем прогрессивные силовые тренировки, умное кондиционирование и честные рекомендации по питанию — чтобы менялись состав тела, энергия и уверенность одновременно. Я отслеживаю прогресс от сессии к сессии, корректирую план по мере того, как тело адаптируется, и держу тебя в тонусе, когда мотивация падает. Результат — более сильная, подтянутая версия тебя, которая действительно остаётся."
    },
    "WHO IS IT FOR?": {
      sr: "ZA KOGA JE?",
      ru: "ДЛЯ КОГО ЭТО?"
    },
    "Anyone who wants visible, lasting change — whether you're 10+ kg over where you want to be, starting fitness for the first time, rebuilding after a long break, or a busy professional who just needs structure and a plan that works. I adapt the program to your level, your schedule, and your life — not the other way around.": {
      sr: "Svako ko želi vidljivu, trajnu promenu — imao 10+ kg viška od cilja, krenuo sa fitnesom prvi put, vraćao se nakon duže pauze ili bio zauzet profesionalac kome treba struktura i plan koji radi. Program prilagođavam tvom nivou, rasporedu i životu — a ne obrnuto.",
      ru: "Любой, кому нужны заметные, устойчивые изменения — будь ты на 10+ кг выше цели, только начинаешь тренироваться, возвращаешься после долгого перерыва или ты занятой профессионал, которому нужны структура и работающий план. Я подстраиваю программу под твой уровень, график и жизнь — а не наоборот."
    },
    "HOW IT WORKS:": {
      sr: "KAKO FUNKCIONIŠE:",
      ru: "КАК ЭТО РАБОТАЕТ:"
    },
    "Every transformation starts with an honest assessment — body composition, movement, lifestyle, nutrition habits. From there I build your training plan, give you simple nutrition targets you can actually live with, and we check in every week to review progress, adjust, and keep the momentum. Expect real conversations, clear feedback, and small wins that stack up fast.": {
      sr: "Svaka transformacija počinje iskrenom procenom — sastav tela, pokret, stil života, navike u ishrani. Zatim pravim tvoj plan treninga, dajem ti jednostavne ciljeve ishrane sa kojima zaista možeš da živiš, i svake nedelje pratimo napredak, prilagođavamo i održavamo tempo. Očekuj iskrene razgovore, jasnu povratnu informaciju i male pobede koje se brzo nižu.",
      ru: "Каждая трансформация начинается с честной оценки — состав тела, движение, образ жизни, привычки в питании. Дальше я строю твой тренировочный план, даю простые цели по питанию, с которыми реально можно жить, и каждую неделю мы сверяемся, корректируем и поддерживаем темп. Жди честных разговоров, ясной обратной связи и маленьких побед, которые быстро складываются в большую."
    },
    "READY TO TRANSFORM?": {
      sr: "SPREMAN ZA TRANSFORMACIJU?",
      ru: "ГОТОВ К ТРАНСФОРМАЦИИ?"
    },
    "If you've tried programs that didn't stick, let's do this differently. Personal coaching, clear steps, and someone in your corner every single week. Book a consultation and we'll map out your transformation together — from where you are today to the version of you that you actually want to be.": {
      sr: "Ako si probao programe koji nisu izdržali, hajde da radimo drugačije. Lični koučing, jasni koraci i neko ko je uz tebe svake nedelje. Zakaži konsultaciju i zajedno mapiramo tvoju transformaciju — od tačke gde si danas do verzije sebe kakvu stvarno želiš.",
      ru: "Если ты пробовал программы, которые не приживались — давай сделаем иначе. Персональный коучинг, чёткие шаги и человек рядом с тобой каждую неделю. Запишись на консультацию — и мы вместе составим карту твоей трансформации: от того, где ты сегодня, к той версии себя, которой ты действительно хочешь быть."
    },
    "WHAT'S IN YOUR TRANSFORMATION PROGRAM:": {
      sr: "ŠTA JE U TVOM PROGRAMU TRANSFORMACIJE:",
      ru: "ЧТО ВХОДИТ В ТВОЮ ПРОГРАММУ ТРАНСФОРМАЦИИ:"
    },
    "Compound Lifts (Squat, Deadlift, Press, Row)": {
      sr: "Kompleksne vežbe (Čučanj, Mrtvo dizanje, Potisak, Veslanje)",
      ru: "Базовые упражнения (присед, становая, жим, тяга)"
    },
    "Kettlebell Complexes": { sr: "Kettlebell kompleksi", ru: "Комплексы с гирями" },
    "HIIT Conditioning": { sr: "HIIT kondicioniranje", ru: "HIIT-кондиция" },
    "Metabolic Finishers": { sr: "Metabolički finišeri", ru: "Метаболические финишеры" },
    "Cable & Machine Work": { sr: "Rad na kablovima i spravama", ru: "Работа на блоках и тренажёрах" },
    "Core & Stability": { sr: "Jezgro i stabilnost", ru: "Кор и стабилизация" },
    "Mobility & Warm-Up Drills": { sr: "Mobilnost i drilovi za zagrevanje", ru: "Мобилити и разминочные дриллы" },
    "Body Composition Assessment": { sr: "Procena sastava tela", ru: "Оценка состава тела" },
    "Nutrition Coaching": { sr: "Koučing ishrane", ru: "Коучинг по питанию" },
    "Weekly Progress Tracking": { sr: "Nedeljno praćenje napretka", ru: "Еженедельный трекинг прогресса" },
    "1-on-1 Check-Ins": { sr: "1-na-1 nedeljne provere", ru: "Индивидуальные чек-ины 1-на-1" },
    "Accountability & Plan Adjustments": { sr: "Odgovornost i prilagođavanje plana", ru: "Подотчётность и корректировки плана" },
    "Recovery & Sleep Guidance": { sr: "Saveti za oporavak i san", ru: "Рекомендации по восстановлению и сну" },
    "Realistic Meal Planning": { sr: "Realno planiranje obroka", ru: "Реалистичное планирование приёмов пищи" },
    "Hydration & Supplement Advice": { sr: "Saveti za hidrataciju i suplemente", ru: "Советы по гидратации и добавкам" },
    "Posture & Movement Coaching": { sr: "Koučing držanja i pokreta", ru: "Коучинг осанки и движения" },
    "Cardio Programming": { sr: "Programiranje kardija", ru: "Программирование кардио" },
    "Resistance Band Work": { sr: "Rad sa elastičnim trakama", ru: "Работа с резиновыми лентами" },
    "Bodyweight Progressions": { sr: "Progresije sa sopstvenom težinom", ru: "Прогрессии с собственным весом" },
    "Long-Term Lifestyle Strategy": { sr: "Dugoročna životna strategija", ru: "Долгосрочная стратегия образа жизни" },

    // ============================================================
    // weight-loss-coaching.html
    // ============================================================
    "What is Weight Loss Coaching?": {
      sr: "Šta je Koučing za Mršavljenje?",
      ru: "Что такое коучинг по снижению веса?"
    },
    "Weight loss coaching is a guided, 1-on-1 program built to get you lean the right way — and keep you that way. I pair smart training with simple nutrition principles you can actually stick to, so fat loss becomes a result of your lifestyle, not a battle against it. I measure what matters — body composition, energy, habits — and adjust your plan every week based on how your body responds. No crash diets. No quick fixes. No starving yourself. Just a clear path, steady progress, and someone who holds you accountable until the weight is gone for good.": {
      sr: "Koučing za mršavljenje je vođen 1-na-1 program napravljen da te dovede u formu na pravi način — i tamo te zadrži. Kombinujem pametan trening sa jednostavnim principima ishrane kojih zaista možeš da se držiš, tako da gubitak masti postaje rezultat tvog životnog stila, a ne bitka protiv njega. Merim ono što je važno — sastav tela, energiju, navike — i svake nedelje prilagođavam tvoj plan prema tome kako telo reaguje. Bez crash dijeta. Bez brzih rešenja. Bez gladovanja. Samo jasan put, stabilan napredak i neko ko te drži odgovornim dok kilogrami ne odu za stalno.",
      ru: "Коучинг по снижению веса — это ведомая программа 1-на-1, созданная, чтобы привести тебя в форму правильно — и удержать в ней. Я соединяю умные тренировки с простыми принципами питания, которых реально можно придерживаться, чтобы похудение стало результатом твоего образа жизни, а не борьбой с ним. Я измеряю то, что действительно важно — состав тела, энергию, привычки — и каждую неделю корректирую план по реакции твоего тела. Никаких жёстких диет. Никаких быстрых решений. Никакого голодания. Только ясный путь, стабильный прогресс и человек, который держит тебя в ответственности, пока вес не уйдёт навсегда."
    },
    "A PLAN BUILT FOR YOUR BODY:": {
      sr: "PLAN NAPRAVLJEN ZA TVOJE TELO:",
      ru: "ПЛАН ПОД ТВОЁ ТЕЛО:"
    },
    "Every body burns fat at a different rate. I assess your current baseline — weight, body composition, activity level, eating habits, sleep, stress — and build a training and nutrition plan around you, not a generic template. Everything is personal, adjustable, and designed to fit the life you actually live.": {
      sr: "Svako telo sagoreva masti drugačijim tempom. Procenjujem tvoju trenutnu bazu — težinu, sastav tela, nivo aktivnosti, navike u ishrani, san, stres — i gradim plan treninga i ishrane oko tebe, ne po generičkom šablonu. Sve je lično, prilagodljivo i napravljeno da se uklopi u život koji zaista živiš.",
      ru: "Каждое тело сжигает жир со своей скоростью. Я оцениваю твою отправную точку — вес, состав тела, уровень активности, пищевые привычки, сон, стресс — и строю план тренировок и питания вокруг тебя, а не по шаблону. Всё индивидуально, адаптируемо и сделано под ту жизнь, которой ты реально живёшь."
    },
    "NUTRITION WITHOUT THE MYTHS:": {
      sr: "ISHRANA BEZ MITOVA:",
      ru: "ПИТАНИЕ БЕЗ МИФОВ:"
    },
    "Forget detoxes, zero-carb diets, and 800-calorie plans. You'll learn a simple, sustainable way to eat — balanced protein, smart carbs, real food — that fits your schedule and keeps the weight coming off week after week. No food is off-limits, and every meal still feels like yours.": {
      sr: "Zaboravi detoks, dijete bez ugljenih hidrata i planove od 800 kalorija. Naučićeš jednostavan, održiv način ishrane — uravnotežen protein, pametni ugljeni hidrati, prava hrana — koji se uklapa u tvoj raspored i nastavlja da ti skida kilograme iz nedelje u nedelju. Nijedna hrana nije zabranjena, a svaki obrok i dalje deluje kao tvoj.",
      ru: "Забудь про детоксы, безуглеводки и планы на 800 калорий. Ты научишься простому, устойчивому способу есть — сбалансированный белок, умные углеводы, настоящая еда — который вписывается в твой график и каждую неделю продолжает снимать вес. Никакая еда не под запретом, и каждый приём пищи по-прежнему твой."
    },
    "TRAINING THAT BURNS AND BUILDS:": {
      sr: "TRENING KOJI SAGOREVA I GRADI:",
      ru: "ТРЕНИРОВКА, КОТОРАЯ СЖИГАЕТ И СТРОИТ:"
    },
    "Cardio alone shrinks you. My combination of strength work, conditioning, and targeted fat-loss sessions reshapes you — you lose fat while keeping (and often building) muscle, so the body underneath looks as good as the number on the scale. You don't just get smaller; you get better.": {
      sr: "Samo kardio te smanjuje. Moja kombinacija treninga snage, kondicioniranja i ciljanih sesija za gubitak masti te preoblikuje — gubiš masti uz zadržavanje (a često i rast) mišića, pa telo ispod izgleda isto tako dobro kao brojka na vagi. Ne postaješ samo manji; postaješ bolji.",
      ru: "Только кардио — ты просто становишься меньше. Моё сочетание силовой работы, кондиционирования и целевых жиросжигающих сессий пересобирает тебя — ты теряешь жир, сохраняя (а часто и набирая) мышцы, так что тело под одеждой выглядит не хуже цифры на весах. Ты не просто уменьшаешься — ты становишься лучше."
    },
    "ACCOUNTABILITY & WEEKLY CHECK-INS:": {
      sr: "ODGOVORNOST I NEDELJNI CHECK-INI:",
      ru: "ПОДОТЧЁТНОСТЬ И ЕЖЕНЕДЕЛЬНЫЕ ЧЕК-ИНЫ:"
    },
    "The biggest reason diets fail is nobody follows up. Every week we review your numbers, adjust the plan, and keep you on track. You're never guessing, never alone, and never stuck on a plateau — just steady, honest progress with someone in your corner until you hit your goal.": {
      sr: "Najveći razlog što dijete propadaju je što niko ne prati dalje. Svake nedelje pregledamo tvoje brojeve, prilagođavamo plan i držimo te u koloseku. Nikad ne nagađaš, nikad nisi sam i nikad ne zapneš na platou — samo stabilan, iskren napredak sa nekim uz tebe dok ne stigneš do cilja.",
      ru: "Главная причина, по которой диеты проваливаются — никто не даёт обратной связи. Каждую неделю мы пересматриваем твои цифры, корректируем план и держим тебя в ритме. Никаких догадок, никакого одиночества и никакого плато — только стабильный, честный прогресс, пока ты не достигнешь цели, с человеком рядом."
    },
    "PETER": { sr: "PETER", ru: "ПИТЕР" },
    "Bio": { sr: "Biografija", ru: "Биография" }
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
    // Always run through translateNode / translateAttr — even for EN — so
    // strings whose source text is NOT English (Serbian reviews, Peter quotes)
    // can still be rendered in EN/RU via DICT entries keyed on the source.
    // If no DICT entry exists for the current lang, lookup() returns null and
    // the node falls back to its original source text (unchanged).
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

  // Track which nodes we've already seen so a later re-collect (to catch
  // dynamically-cloned content, e.g. Elementor / Swiper review sliders that
  // duplicate slides after page load) doesn't double-register.
  var seenNodes = typeof WeakSet === "function" ? new WeakSet() : null;

  function collectTextNodes(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (seenNodes && seenNodes.has(n)) return NodeFilter.FILTER_REJECT;
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
      if (seenNodes) seenNodes.add(n);
      textNodes.push({ node: n, original: n.nodeValue });
    }
  }

  function refreshTranslations() {
    collectTextNodes(document.body);
    collectAttrs(document.body);
    applyLanguage();
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
    // Catch dynamically-injected content (Swiper clones, Elementor lazy
    // widgets, offcanvas, review sliders) by re-scanning after a short delay
    // and again a bit later. Cheap — refreshTranslations is a walk + a loop.
    setTimeout(refreshTranslations, 600);
    setTimeout(refreshTranslations, 2000);
    setTimeout(refreshTranslations, 5000);
    // Debug hook — find body-copy text nodes missing from DICT so we can audit
    // untranslated strings across pages.
    window.__esAuditMissing = function (minLen) {
      minLen = minLen || 18;
      var out = [];
      for (var i = 0; i < textNodes.length; i++) {
        var orig = textNodes[i].original;
        var trimmed = orig.trim();
        if (trimmed.length < minLen) continue;
        if (!/[A-Za-z]{3,}/.test(trimmed)) continue;
        if (DICT[trimmed]) continue;
        out.push(trimmed.slice(0, 140));
      }
      return out;
    };
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

  // EA Google Reviews slider — the bundled init sometimes fixes slide widths
  // to ~21px when the slider container is narrow or laid out late, which
  // collapses every review to a vertical word-per-line column.  Rebuild it
  // with a sane 1-slide-per-view config so the reviews actually read.
  function initReviewsSlider() {
    if (typeof Swiper !== "function") return;
    var sliders = document.querySelectorAll(".eael-google-reviews-content");
    sliders.forEach(function (s) {
      var slides = s.querySelectorAll(".swiper-slide");
      if (!slides.length) return;
      // Only rebuild if slide width is suspiciously narrow (< 60px) OR no swiper
      // instance present — otherwise leave a working slider alone.
      var looksBroken = slides[0].offsetWidth < 60;
      if (!looksBroken && s.swiper) return;
      if (s.swiper) { try { s.swiper.destroy(true, true); } catch (e) {} }
      // Remove Swiper-injected duplicates and inline styles so we get clean slides.
      Array.prototype.forEach.call(s.querySelectorAll(".swiper-slide-duplicate"), function (d) { d.remove(); });
      Array.prototype.forEach.call(s.querySelectorAll(".swiper-slide"), function (sl) {
        sl.removeAttribute("style");
        sl.classList.remove("swiper-slide-duplicate", "swiper-slide-duplicate-prev",
                            "swiper-slide-duplicate-next", "swiper-slide-duplicate-active",
                            "swiper-slide-active", "swiper-slide-prev", "swiper-slide-next");
      });
      var container = s.parentElement;
      var next = container && container.querySelector(".swiper-button-next");
      var prev = container && container.querySelector(".swiper-button-prev");
      var pagination = container && container.querySelector(".swiper-pagination");
      try {
        // loop: false on purpose — Swiper's loop clones duplicate DOM nodes
        // outside the initial text-node walk, which breaks language switching
        // on cloned slides (they display stale-language text). Five reviews
        // is plenty without looping; arrows and autoplay still cycle through.
        new Swiper(s, {
          slidesPerView: 1,
          spaceBetween: 24,
          loop: false,
          rewind: true,
          speed: 500,
          autoplay: { delay: 7000, disableOnInteraction: true },
          navigation: next && prev ? { nextEl: next, prevEl: prev } : false,
          pagination: pagination ? { el: pagination, clickable: true } : false
        });
      } catch (e) { /* swallow */ }
    });
  }

  // Run after Elementor's own init has had its chance.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(initOrphanCarousels, 600);
      setTimeout(initReviewsSlider, 900);
      setTimeout(initReviewsSlider, 2500);
    }, { once: true });
  } else {
    setTimeout(initOrphanCarousels, 600);
    setTimeout(initReviewsSlider, 900);
    setTimeout(initReviewsSlider, 2500);
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
      // Capture a reference to the original text node BEFORE we destroy it
      // with innerHTML, so we can locate its textNodes[] entry after flatten.
      var originalTextNode = null;
      for (var ci = 0; ci < el.childNodes.length; ci++) {
        if (el.childNodes[ci].nodeType === 3) {
          originalTextNode = el.childNodes[ci];
          break;
        }
      }
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
        // Patch textNodes[] — the old text node we cached at init time is now
        // detached (destroyed by innerHTML). Point the entry at the freshly
        // re-created live text node and re-apply current language so future
        // SR/RU/EN toggles keep working on this paragraph.
        if (originalTextNode) {
          var newTextNode = null;
          for (var cj = 0; cj < el.childNodes.length; cj++) {
            if (el.childNodes[cj].nodeType === 3) { newTextNode = el.childNodes[cj]; break; }
          }
          if (newTextNode) {
            for (var k = 0; k < textNodes.length; k++) {
              if (textNodes[k].node === originalTextNode) {
                textNodes[k].node = newTextNode;
                translateNode(textNodes[k]);
                break;
              }
            }
          }
        }
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
