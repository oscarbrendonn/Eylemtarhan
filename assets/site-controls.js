(function () {
  "use strict";

  var LS_THEME = "et_theme";
  var LS_LANG = "et_lang";
  var DEFAULT_LANG = "tr";
  var LANGS = ["tr", "en", "ru"];

  // Translation dictionary. Keys = canonical English text (exact, trimmed).
  // Values: { tr, ru }. Missing keys fall back to English (the canonical source text in HTML).
  var DICT = {
    "HOME": { tr: "ANA SAYFA", sr: "POČETNA", ru: "ГЛАВНАЯ" },
    "Home": { tr: "Ana Sayfa", sr: "Početna", ru: "Главная" },
    "Services": { tr: "Hizmetler", sr: "Usluge", ru: "Услуги" },
    "Service": { tr: "Hizmet", sr: "Usluga", ru: "Услуга" },
    "Personal Training": { tr: "Kişisel Antrenman", sr: "Personalni Trening", ru: "Персональные тренировки" },
    "Personal training": { tr: "Kişisel antrenman", sr: "Personalni trening", ru: "Персональные тренировки" },
    "personal training": { tr: "kişisel antrenman", sr: "personalni trening", ru: "персональные тренировки" },
    "PERSONAL TRAINING": { tr: "KİŞİSEL ANTRENMAN", sr: "PERSONALNI TRENING", ru: "ПЕРСОНАЛЬНЫЕ ТРЕНИРОВКИ" },
    "Trainer": { tr: "Antrenör", sr: "Trener", ru: "Тренер" },
    "TRAINER": { tr: "ANTRENÖR", sr: "TRENER", ru: "ТРЕНЕР" },
    "Trainers": { tr: "Antrenörler", sr: "Treneri", ru: "Тренеры" },
    "TRAINERS": { tr: "ANTRENÖRLER", sr: "TRENERI", ru: "ТРЕНЕРЫ" },
    "MEET YOUR TRAINER": { tr: "ANTRENÖRÜNLE TANIŞ", sr: "UPOZNAJTE SVOG TRENERA", ru: "ПОЗНАКОМЬТЕСЬ С ТРЕНЕРОМ" },
    "Pricing": { tr: "Fiyatlar", sr: "Cene", ru: "Цены" },
    "Prices": { tr: "Fiyatlar", sr: "Cene", ru: "Цены" },
    "PRICING": { tr: "FİYATLAR", sr: "CENE", ru: "ЦЕНЫ" },
    "About": { tr: "Hakkında", sr: "O nama", ru: "О нас" },
    "ABOUT": { tr: "HAKKINDA", sr: "O NAMA", ru: "О НАС" },
    "About us": { tr: "Hakkımızda", sr: "O nama", ru: "О нас" },
    "Contact": { tr: "İletişim", sr: "Kontakt", ru: "Контакт" },
    "CONTACT": { tr: "İLETİŞİM", sr: "KONTAKT", ru: "КОНТАКТ" },
    "Blog": { tr: "Blog", sr: "Blog", ru: "Блог" },
    "BLOG": { tr: "BLOG", sr: "BLOG", ru: "БЛОГ" },
    "FAQ": { tr: "SSS", sr: "Česta pitanja", ru: "Вопросы и ответы" },
    "faq": { tr: "sss", sr: "česta pitanja", ru: "вопросы и ответы" },
    "Location": { tr: "Konum", sr: "Lokacija", ru: "Адрес" },
    "Our App": { tr: "Uygulamamız", sr: "Naša Aplikacija", ru: "Наше приложение" },
    "JOIN US": { tr: "BİZE KATIL", sr: "PRIDRUŽITE SE", ru: "ПРИСОЕДИНЯЙТЕСЬ" },
    "Register Now": { tr: "Hemen Kaydol", sr: "Registrujte se", ru: "Зарегистрироваться" },
    "Our Friends": { tr: "Arkadaşlarımız", sr: "Naši Prijatelji", ru: "Наши друзья" },
    "press": { tr: "basın", sr: "štampa", ru: "пресса" },
    "terms & conditions": { tr: "kullanım koşulları", sr: "uslovi korišćenja", ru: "условия использования" },
    "terms & conditions ": { tr: "kullanım koşulları ", sr: "uslovi korišćenja ", ru: "условия использования " },

    "Barre": { tr: "Barre", sr: "Barre", ru: "Барре" },
    "BARRE": { tr: "BARRE", sr: "BARRE", ru: "БАРРЕ" },
    "BRIDAL CUT": { tr: "GELİNLİK ANTRENMANI", sr: "BRIDAL CUT", ru: "BRIDAL CUT" },
    "CORRECTIVE EXERCISE": { tr: "KOREKTİF EGZERSİZ", sr: "KOREKTIVNE VEŽBE", ru: "КОРРЕКТИРУЮЩИЕ УПРАЖНЕНИЯ" },
    "HIIT": { tr: "HIIT", sr: "HIIT", ru: "HIIT" },
    "KETTLEBELL WORKOUT": { tr: "KETTLEBELL ANTRENMANI", sr: "KETTLEBELL TRENING", ru: "ТРЕНИРОВКА С ГИРЯМИ" },
    "STRENGTH TRAINING": { tr: "KUVVET ANTRENMANI", sr: "TRENING SNAGE", ru: "СИЛОВЫЕ ТРЕНИРОВКИ" },
    "Strength Training": { tr: "Kuvvet Antrenmanı", sr: "Trening snage", ru: "Силовые тренировки" },
    "BODY TRANSFORMATION": { tr: "VÜCUT DÖNÜŞÜMÜ", sr: "TRANSFORMACIJA TELA", ru: "ТРАНСФОРМАЦИЯ ТЕЛА" },
    "Body Transformation": { tr: "Vücut Dönüşümü", sr: "Transformacija tela", ru: "Трансформация тела" },
    "WEIGHT LOSS COACHING": { tr: "KİLO VERME KOÇLUĞU", sr: "KOUČING ZA MRŠAVLJENJE", ru: "КОУЧИНГ ПО СНИЖЕНИЮ ВЕСА" },
    "Weight Loss Coaching": { tr: "Kilo Verme Koçluğu", sr: "Koučing za mršavljenje", ru: "Коучинг по снижению веса" },
    "Marathon Preparation Training": { tr: "Maraton Hazırlık Antrenmanı", sr: "Priprema za Maraton", ru: "Подготовка к Марафону" },
    "marathon preparation training": { tr: "maraton hazırlık antrenmanı", sr: "priprema za maraton", ru: "подготовка к марафону" },
    "MARATHON PREPARATION TRAINING": { tr: "MARATON HAZIRLIK ANTRENMANI", sr: "PRIPREMA ZA MARATON", ru: "ПОДГОТОВКА К МАРАФОНУ" },
    "Massage Therapy": { tr: "Masaj Terapisi", sr: "Masažna Terapija", ru: "Массажная терапия" },
    "MASSAGE THERAPY": { tr: "MASAJ TERAPİSİ", sr: "MASAŽNA TERAPIJA", ru: "МАССАЖНАЯ ТЕРАПИЯ" },
    "Pre & Post Natal Fitness": { tr: "Hamilelik Öncesi ve Sonrası Fitness", sr: "Pre i Postnatalni Fitnes", ru: "Фитнес до и после родов" },
    "PRE AND POSTNATAL TRAINING": { tr: "HAMİLELİK ÖNCESİ VE SONRASI ANTRENMAN", sr: "PRE I POSTNATALNI TRENING", ru: "ТРЕНИРОВКИ ДО И ПОСЛЕ РОДОВ" },
    "Reformer Pilates Class": { tr: "Reformer Pilates Dersi", sr: "Reformer Pilates Čas", ru: "Пилатес на реформере" },
    "REFORMER PILATES": { tr: "REFORMER PİLATES", sr: "REFORMER PILATES", ru: "ПИЛАТЕС НА РЕФОРМЕРЕ" },
    "STRETCH THERAPY CLASS": { tr: "ESNEME TERAPİSİ DERSİ", sr: "ČAS STRETCHING TERAPIJE", ru: "КУРС СТРЕТЧИНГ ТЕРАПИИ" },

    "WELCOME": { tr: "HOŞ GELDİN", sr: "DOBRODOŠLI", ru: "ДОБРО ПОЖАЛОВАТЬ" },
    "CLASSES | SERVICES": { tr: "DERSLER | HİZMETLER", sr: "ČASOVI | USLUGE", ru: "ЗАНЯТИЯ | УСЛУГИ" },
    "5-STAR RATINGS": { tr: "5 YILDIZLI DEĞERLENDİRMELER", sr: "OCENE 5 ZVEZDICA", ru: "ОЦЕНКИ 5 ЗВЁЗД" },
    "AS FEATURED IN": { tr: "HAKKIMIZDA YAZANLAR", sr: "PISALI SU O NAMA", ru: "О НАС ПИСАЛИ" },
    "Offering now": { tr: "Şimdi sunuyoruz", sr: "Nudimo sada", ru: "Сейчас предлагаем" },
    "the team": { tr: "ekip", sr: "tim", ru: "команда" },
    "Articles & publications": { tr: "Makaleler ve yayınlar", sr: "Članci & publikacije", ru: "Статьи и публикации" },
    "BLOG | NEWS": { tr: "BLOG | HABERLER", sr: "BLOG | VESTI", ru: "БЛОГ | НОВОСТИ" },
    "Latest": { tr: "En Son", sr: "Najnovije", ru: "Последнее" },
    "Personal & Tailored": { tr: "Kişisel ve Özel", sr: "Lično i prilagođeno", ru: "Персонально и индивидуально" },
    "More Information": { tr: "Daha Fazla Bilgi", sr: "Više informacija", ru: "Больше информации" },
    "Class led by": { tr: "Dersi veren", sr: "Čas vodi", ru: "Занятие ведёт" },
    "new client promo": { tr: "yeni müşteri kampanyası", sr: "promocija za nove klijente", ru: "акция для новых клиентов" },
    "Book a class today with class pass": { tr: "Class pass ile bugün bir ders rezerve et", sr: "Rezervišite čas danas sa class pass", ru: "Запишитесь на занятие с class pass" },
    "No matter your goal, we'll get you there!": { tr: "Hedefin ne olursa olsun, seni oraya götüreceğiz!", sr: "Bez obzira na cilj, dovešćemo vas do njega!", ru: "Неважно, какая у вас цель — мы поможем её достичь!" },
    "Split your sessions with a partner to save & stay motivated!": { tr: "Tasarruf etmek ve motive kalmak için seanslarını bir partnerle paylaş!", sr: "Podelite sesije s partnerom da uštedite i ostanete motivisani!", ru: "Разделите занятия с партнёром, чтобы сэкономить и оставаться мотивированными!" },

    "CALL TO SCHEDULE": { tr: "RANDEVU İÇİN ARA", sr: "POZOVITE ZA TERMIN", ru: "ПОЗВОНИТЬ И ЗАПИСАТЬСЯ" },
    "Get in touch": { tr: "İletişime geç", sr: "Kontaktirajte nas", ru: "Связаться с нами" },
    "View All Services": { tr: "Tüm Hizmetleri Gör", sr: "Sve Usluge", ru: "Все услуги" },
    "read more": { tr: "devamını oku", sr: "pročitaj više", ru: "читать далее" },
    "Read More": { tr: "Devamını Oku", sr: "Pročitaj više", ru: "Читать далее" },
    "Submit": { tr: "Gönder", sr: "Pošalji", ru: "Отправить" },
    "Send": { tr: "Gönder", sr: "Pošalji", ru: "Отправить" },

    "1 Session": { tr: "1 Seans", sr: "1 Sesija", ru: "1 Занятие" },
    "12 Sessions": { tr: "12 Seans", sr: "12 Sesija", ru: "12 Занятий" },
    "25 Sessions": { tr: "25 Seans", sr: "25 Sesija", ru: "25 Занятий" },
    "40 Sessions": { tr: "40 Seans", sr: "40 Sesija", ru: "40 Занятий" },
    "duet 10": { tr: "düet 10", sr: "duet 10", ru: "дуэт 10" },
    "1 class": { tr: "1 ders", sr: "1 čas", ru: "1 занятие" },
    "5 classes": { tr: "5 ders", sr: "5 časova", ru: "5 занятий" },
    "10 classes": { tr: "10 ders", sr: "10 časova", ru: "10 занятий" },
    "2 class promo": { tr: "2 ders kampanyası", sr: "promocija 2 časa", ru: "акция на 2 занятия" },
    "5 class promo": { tr: "5 ders kampanyası", sr: "promocija 5 časova", ru: "акция на 5 занятий" },
    "30 min Massage": { tr: "30 dk Masaj", sr: "30 min Masaža", ru: "Массаж 30 мин" },
    "45 min Massage": { tr: "45 dk Masaj", sr: "45 min Masaža", ru: "Массаж 45 мин" },
    "60 min Massage": { tr: "60 dk Masaj", sr: "60 min Masaža", ru: "Массаж 60 мин" },
    "90 min Massage": { tr: "90 dk Masaj", sr: "90 min Masaža", ru: "Массаж 90 мин" },

    "Ankara": { tr: "Ankara", sr: "Ankara", ru: "Анкара" },
    "Eylem Tarhan": { tr: "Eylem Tarhan", sr: "Eylem Tarhan", ru: "Eylem Tarhan" },
    "Eylem Tarhan Ankara": { tr: "Eylem Tarhan Ankara", sr: "Eylem Tarhan Ankara", ru: "Eylem Tarhan Анкара" },
    "Skip to content": { tr: "İçeriğe atla", sr: "Preskoči na sadržaj", ru: "Перейти к содержимому" },

    // Welcome / homepage long copy
    "Located in Yıldız, Ankara, Eylem Tarhan maintains an educated, skilled and friendly health services team that is dedicated to providing the specialized attention, training and knowledge needed to help our clients attain their unique fitness objectives.  As ardent students of the latest developments in fitness, weight loss and strength training exercise programs, we maintain the highest standards for Your Trainer ensuring they regularly develop their skills through related courses throughout the year.": {
      tr: "Yıldız, Ankara'da bulunan Eylem Tarhan; eğitimli, deneyimli ve sıcak bir sağlık hizmetleri ekibiyle danışanlarının kişisel fitness hedeflerine ulaşmalarını sağlayan özel ilgi, antrenman ve bilgiyi sunmaya kendini adamıştır. Fitness, kilo verme ve kuvvet antrenmanı programlarındaki en son gelişmeleri yakından takip ederek, kendimizi geliştirerek antrenörünüz için en yüksek standartları koruyoruz.",
      sr: "Smešten u Yıldız, Ankara, Eylem Tarhan okuplja obrazovan, stručan i prijateljski tim zdravstvenih i trenažnih radnika posvećen pružanju specijalizovane pažnje, treninga i znanja koje je potrebno da naši klijenti ostvare svoje fitnes ciljeve. Kao posvećeni pratioci najnovijih dostignuća u fitnesu, mršavljenju i programima trening snage, održavamo najviše standarde za vašeg trenera.",
      ru: "Расположенный в районе Врачар, Анкара, Eylem Tarhan объединяет образованную, опытную и дружелюбную команду тренеров и специалистов по здоровью, готовых оказать индивидуальное внимание и поделиться знаниями, чтобы наши клиенты достигли своих фитнес-целей. Мы внимательно следим за последними достижениями в фитнесе, снижении веса и силовых тренировках, и поддерживаем высокие стандарты вашего тренера."
    },
    "Keep up with the latest news, trends and information regarding health, fitness, and nutrition.": {
      tr: "Sağlık, fitness ve beslenme alanındaki en son haberleri, trendleri ve bilgileri takip edin.",
      sr: "Budite u toku sa najnovijim vestima, trendovima i informacijama o zdravlju, fitnesu i ishrani.",
      ru: "Следите за последними новостями, трендами и информацией о здоровье, фитнесе и питании."
    },

    // Blog post titles (rebranded, NYCPT removed)
    "Why Barre Is the Ultimate Low-Impact Workout for Maximum Results": {
      tr: "Maksimum Sonuç İçin Barre Neden En İyi Düşük Etkili Antrenman?",
      sr: "Zašto je Barre najbolji trening niskog opterećenja za maksimalne rezultate",
      ru: "Почему Barre — лучшая тренировка с низкой нагрузкой для максимальных результатов"
    },
    "5 Common Barre Mistakes and How to Fix Them for Better Results": {
      tr: "Barre'da En Sık Yapılan 5 Hata ve Daha İyi Sonuç İçin Nasıl Düzeltilir",
      sr: "5 čestih grešaka u Barre treningu i kako ih ispraviti za bolje rezultate",
      ru: "5 распространённых ошибок в Barre-тренировках и как их исправить для лучших результатов"
    },
    "Eylem Tarhan Open House: Spring Edition": {
      tr: "Eylem Tarhan Açık Kapı Günü: Bahar Edisyonu",
      sr: "Eylem Tarhan Otvoreni dan: Prolećno izdanje",
      ru: "Eylem Tarhan День открытых дверей: Весеннее издание"
    },
    "Push / Pull / Legs: The Best Workout Split for Building Real Muscle": {
      tr: "Push / Pull / Legs: Gerçek Kas İçin En İyi Antrenman Bölümü",
      sr: "Push / Pull / Legs: najbolja podela treninga za pravi rast mišića",
      ru: "Push / Pull / Legs: лучший сплит для реального роста мышц"
    },
    "How Many Sets Per Muscle Per Week? The Science-Backed Answer": {
      tr: "Haftada Kas Başına Kaç Set? Bilimsel Cevap",
      sr: "Koliko serija po mišiću nedeljno? Odgovor potkrepljen naukom",
      ru: "Сколько подходов на мышцу в неделю? Ответ с научной базой"
    },
    "Protein, Carbs, Fats: The Simple Macro Split Eylem Uses With New Clients": {
      tr: "Protein, Karbonhidrat, Yağ: Eylem'in Yeni Danışanlarda Kullandığı Basit Makro Dağılımı",
      sr: "Proteini, ugljeni hidrati, masti: jednostavna makro podela koju Eylem koristi sa novim klijentima",
      ru: "Белки, углеводы, жиры: простой макро-сплит, который Eylem использует с новыми клиентами"
    },
    "Cutting vs. Bulking: How Eylem Structures Your Fitness Phases": {
      tr: "Cutting vs. Bulking: Eylem Fitness Aşamalarını Nasıl Planlıyor",
      sr: "Sušenje vs. masa: kako Eylem strukturira tvoje faze treninga",
      ru: "Сушка против массы: как Eylem выстраивает фазы тренировок"
    },
    "Strength Training After 40: Eylem's Framework for Longevity": {
      tr: "40 Yaş Sonrası Kuvvet Antrenmanı: Eylem'in Uzun Ömür Çerçevesi",
      sr: "Trening snage posle 40: Eylemov okvir za dugovečnost",
      ru: "Силовые тренировки после 40: система Eylem для долголетия"
    },
    "The 20-Minute Morning Routine Eylem Gives Every Online Client": {
      tr: "Eylem'in Her Online Danışanına Verdiği 20 Dakikalık Sabah Rutini",
      sr: "Jutarnja rutina od 20 minuta koju Eylem daje svakom online klijentu",
      ru: "20-минутная утренняя рутина, которую Eylem даёт каждому онлайн-клиенту"
    },
    "Training": { tr: "Antrenman", sr: "Trening", ru: "Тренировка" },
    "Nutrition": { tr: "Beslenme", sr: "Ishrana", ru: "Питание" },
    "Case Study": { tr: "Vaka Çalışması", sr: "Studija slučaja", ru: "Кейс" },
    "READ MORE": { tr: "DEVAMINI OKU", sr: "PROČITAJ VIŠE", ru: "ЧИТАТЬ ДАЛЕЕ" },
    "LATEST": { tr: "EN SON", sr: "NAJNOVIJE", ru: "ПОСЛЕДНЕЕ" },

    // Pricing page
    "1v1 In-Person Training": { tr: "1v1 Yüz Yüze Antrenman", sr: "1v1 trening uživo", ru: "1v1 тренировки очно" },
    "1v1 Online Coaching": { tr: "1v1 Online Koçluk", sr: "1v1 online treninzi", ru: "1v1 онлайн-тренировки" },
    "Single Session": { tr: "Tek Seans", sr: "Pojedinačni trening", ru: "Одно занятие" },
    "Session Package": { tr: "Seans Paketi", sr: "Paket treninga", ru: "Пакет занятий" },
    "Online Training": { tr: "Online Antrenman", sr: "Online trening", ru: "Онлайн-тренировка" },
    "Training + Diet": { tr: "Antrenman + Diyet", sr: "Trening + ishrana", ru: "Тренировка + питание" },
    "Per Session": { tr: "Seans Başına", sr: "Po treningu", ru: "За занятие" },
    "Per Month": { tr: "Aylık", sr: "Mesečno", ru: "В месяц" },
    "In-Person at Studio": { tr: "Stüdyoda Yüz Yüze", sr: "Uživo u studiju", ru: "Очно в студии" },
    "10 Sessions": { tr: "10 Seans", sr: "10 treninga", ru: "10 занятий" },
    "Save vs. single sessions": { tr: "Tek seanslara göre tasarruf", sr: "Povoljnije od pojedinačnih treninga", ru: "Выгоднее одиночных занятий" },
    "1v1 Monthly Program": { tr: "1v1 Aylık Program", sr: "1v1 mesečni program", ru: "1v1 месячная программа" },
    "Training + Nutrition Plan": { tr: "Antrenman + Beslenme Planı", sr: "Trening i plan ishrane", ru: "Тренировка и план питания" },
    "Get Started": { tr: "Başla", sr: "Počnite", ru: "Начать" },
    "Book anytime": { tr: "İstediğin zaman rezerve et", sr: "Zakažite kada želite", ru: "Запись в любое время" },
    "Cancel anytime": { tr: "İstediğin zaman iptal et", sr: "Otkažite kada želite", ru: "Отмена в любое время" },
    "Personalised workouts plus a full nutrition plan built around your goals.": { tr: "Hedeflerine göre hazırlanmış kişisel antrenmanlar ve kapsamlı bir beslenme planı.", sr: "Personalizovani treninzi i kompletan plan ishrane prilagođen vašim ciljevima.", ru: "Персональные тренировки и полный план питания под ваши цели." },
    "promotions": { tr: "kampanyalar", sr: "promocije", ru: "акции" },

    // Contact page + form
    "Regardless of your fitness background or the stage of life you find yourself in, I’m dedicated to providing a supportive and welcoming training environment. My goal is to guide and inspire you, whether you’re stepping into the world of fitness for the first time or maintaining elite athletic performance. Join me, and let’s embark on a wellness journey tailored to your unique goals, celebrating every achievement along the way. Experience top personal training today!": {
      tr: "Fitness geçmişin veya hayatının hangi döneminde olduğun fark etmeksizin, destekleyici ve sıcak bir antrenman ortamı sunmaya kendimi adadım. Hedefim, fitness dünyasına ilk adımını atıyor olsan da elit sporcu performansını koruyor olsan da seni yönlendirmek ve ilham vermek. Bana katıl ve sana özel hedeflere göre tasarlanmış bir sağlık yolculuğuna birlikte çıkalım — yol boyunca her başarıyı kutlayalım. Birinci sınıf personal training deneyimini bugün yaşa!",
      sr: "Bez obzira na tvoje fitnes iskustvo ili životnu fazu u kojoj se nalaziš, posvećen sam pružanju podržavajuće i prijateljske atmosfere za trening. Moj cilj je da te vodim i inspirišem, bilo da tek zakoračuješ u svet fitnesa ili održavaš elitne sportske rezultate. Pridruži mi se i zajedno krenimo na put do željenih ciljeva — slavimo svaki napredak na putu ka tvojoj najboljoj verziji. Doživi vrhunski personalni trening već danas!",
      ru: "Независимо от твоего опыта в фитнесе или этапа жизни, я посвящён созданию дружелюбной и поддерживающей среды для тренировок. Моя цель — направлять и вдохновлять тебя, будь то первые шаги или поддержание элитной спортивной формы. Присоединяйся — вместе построим путь к твоим целям и будем отмечать каждый шаг. Первоклассные персональные тренировки!"
    },
    "Fill in the form and I'll get back to you via WhatsApp or email.": {
      tr: "Formu doldur, sana WhatsApp veya e-posta ile dönerim.", sr: "Popuni formu i javiću ti se putem WhatsApp-a ili email-a.",
      ru: "Заполни форму — я свяжусь с тобой через WhatsApp или по email."
    },
    "Full name": { tr: "Ad Soyad", sr: "Ime i prezime", ru: "Имя и фамилия" },
    "Email": { tr: "E-posta", sr: "Email", ru: "Email" },
    "Phone": { tr: "Telefon", sr: "Telefon", ru: "Телефон" },
    "(optional)": { tr: "(isteğe bağlı)", sr: "(opciono)", ru: "(необязательно)" },
    "Goal": { tr: "Hedef", sr: "Cilj", ru: "Цель" },
    "Choose…": { tr: "Seç…", sr: "Izaberi…", ru: "Выберите…" },
    "Weight loss": { tr: "Kilo verme", sr: "Mršavljenje", ru: "Снижение веса" },
    "Muscle gain": { tr: "Kas kazanma", sr: "Povećanje mišićne mase", ru: "Набор мышечной массы" },
    "General fitness": { tr: "Genel fitness", sr: "Opšta kondicija", ru: "Общая физическая форма" },
    "Other": { tr: "Diğer", sr: "Drugo", ru: "Другое" },
    "Message": { tr: "Mesaj", sr: "Poruka", ru: "Сообщение" },
    "Tell me a bit about your goals…": {
      tr: "Hedeflerin hakkında biraz bilgi ver…", sr: "Reci mi nešto o svojim ciljevima…",
      ru: "Расскажи немного о своих целях…"
    },
    "Send via WhatsApp": { tr: "WhatsApp ile Gönder", sr: "Pošalji preko WhatsApp-a", ru: "Отправить через WhatsApp" },
    "Sending… you will get a confirmation email.": {
      tr: "Gönderiliyor… onay e-postası alacaksın.", sr: "Šaljemo… dobićete email potvrdu.",
      ru: "Отправка… вы получите письмо-подтверждение."
    },
    "Address": { tr: "Adres", sr: "Adresa", ru: "Адрес" },
    "Opening hours": { tr: "Açılış saatleri", sr: "Radno vreme", ru: "Часы работы" },
    "Every day: 9:00 - 21:00": { tr: "Her gün: 9:00 - 21:00", sr: "Svaki dan: 9:00 - 21:00", ru: "Ежедневно: 9:00 - 21:00" },

    // Shared footer / legal / a11y
    "Hamburger Toggle Menu": { tr: "Menüyü aç / kapat", sr: "Otvori / zatvori meni", ru: "Переключить меню" },
    "Ankara, Türkiye 06550": { tr: "Ankara, Türkiye 06550", sr: "Ankara, Türkiye 06550", ru: "Анкара, Турция 11000" },
    "© All Rights Reserved Eylem Tarhan Personal Training": {
      tr: "© Tüm Hakları Saklıdır — Eylem Tarhan Personal Training", sr: "© Sva prava zadržana — Eylem Tarhan Personal Training",
      ru: "© Все права защищены — Eylem Tarhan Personal Training"
    },
    "© All Rights Reserved Eylem Tarhan": {
      tr: "© Tüm Hakları Saklıdır — Eylem Tarhan", sr: "© Sva prava zadržana — Eylem Tarhan",
      ru: "© Все права защищены — Eylem Tarhan"
    },
    "Privacy Settings": { tr: "Gizlilik Ayarları", sr: "Podešavanja privatnosti", ru: "Настройки приватности" },
    "We use cookies to enhance your experience while using our website. If you are using our Services via a browser you can restrict, block or remove cookies through your web browser settings. We also use content and scripts from third parties that may use tracking technologies. You can selectively provide your consent below to allow such third party embeds. For complete information about the cookies we use, data we collect and how we process them, please check our": {
      tr: "Web sitemizi kullanırken deneyiminizi geliştirmek için çerezleri kullanıyoruz. Hizmetlerimizi tarayıcı üzerinden kullanıyorsanız tarayıcı ayarlarınızdan çerezleri kısıtlayabilir, engelleyebilir veya kaldırabilirsiniz. Ayrıca takip teknolojileri kullanabilen üçüncü taraf içerik ve scriptlerini de kullanıyoruz. Aşağıdan bu üçüncü taraf gömülerine izin vermek için onayınızı seçici şekilde verebilirsiniz. Kullandığımız çerezler, topladığımız veriler ve bunları nasıl işlediğimiz hakkında tam bilgi için lütfen göz atın:",
      sr: "Koristimo kolačiće kako bismo poboljšali vaše iskustvo prilikom korišćenja naše veb-stranice. Ako koristite naše usluge preko pregledača, možete ograničiti, blokirati ili ukloniti kolačiće preko podešavanja vašeg pregledača. Takođe koristimo sadržaj i skripte trećih strana koje mogu koristiti tehnologije praćenja. Ispod možete selektivno dati saglasnost za takve ugradnje trećih strana. Za potpune informacije o kolačićima koje koristimo, podacima koje prikupljamo i kako ih obrađujemo, pogledajte našu",
      ru: "Мы используем файлы cookie для улучшения работы с нашим сайтом. Если вы используете наши сервисы через браузер, вы можете ограничить, заблокировать или удалить cookie в настройках браузера. Мы также используем контент и скрипты сторонних сервисов, которые могут применять технологии отслеживания. Ниже вы можете выборочно дать согласие на такие сторонние встраивания. Полную информацию о cookie, данных, которые мы собираем и обрабатываем, смотрите в нашей"
    },
    "Privacy Policy": { tr: "Gizlilik Politikası", sr: "Politika privatnosti", ru: "Политика конфиденциальности" },

    // Homepage accordion / CTA tiles
    "Learn about our services": { tr: "Hizmetlerimiz hakkında bilgi al", sr: "Saznajte više o našim uslugama", ru: "Узнайте о наших услугах" },
    "Become a member now": { tr: "Hemen üye ol", sr: "Postanite član odmah", ru: "Станьте членом прямо сейчас" },
    "FIRST TIMER": { tr: "İLK KEZ Mİ?", sr: "PRVI PUT?", ru: "ПЕРВЫЙ РАЗ?" },
    "Memberships": { tr: "Üyelikler", sr: "Članstva", ru: "Членство" },
    "MEMBERSHIPS": { tr: "ÜYELİKLER", sr: "ČLANSTVA", ru: "ЧЛЕНСТВО" },
    "Valid for 12 months": { tr: "12 ay geçerli", sr: "Važi 12 meseci", ru: "Действует 12 месяцев" },

    // Client reviews — homepage (SR source → EN + RU)
    "Najbolja investicija u mene samu. Eylem je strpljiv, stručan i tačno zna kako da te motiviše i kad ti se uopšte ne dolazi. Za šest meseci dobila sam mišićnu masu koju godinama nisam mogla da izgradim sama u teretani. Držanje mi je bolje, leđa više ne bole. Hvala za sve!": {
      tr: "Şimdiye kadar kendime yaptığım en iyi yatırım. Eylem sabırlı, donanımlı ve antrenmana hiç gelmek istemediğin günlerde bile seni nasıl motive edeceğini biliyor. Altı ayda salonda yıllarca tek başıma kazanamadığım kas kütlesini kazandım. Postürüm düzeldi, sırt ağrılarım da geçti. Her şey için teşekkür ederim!",
      en: "The best investment I have ever made in myself. Eylem is patient, skilled, and knows exactly how to motivate you even on days you do not feel like training. In six months I built muscle I could never build on my own at the gym. My posture is better and my back no longer hurts. Thank you for everything!",
      ru: "Лучшая инвестиция в саму себя. Eylem терпеливый, опытный и точно знает, как мотивировать даже в те дни, когда совсем не хочется идти. За шесть месяцев я набрала мышечную массу, которую годами не могла построить сама в зале. Осанка стала лучше, спина больше не болит. Спасибо за всё!"
    },
    "Iskreno, nisam verovao da mogu za tri meseca da izgubim 12 kilograma i da mi se menja sastav tela. Eylem pravi individualne planove, prati ishranu i ne pušta te na pola puta. Ako ste ozbiljni u vezi promene, ovo je pravo mesto.": {
      tr: "Açıkçası üç ayda 12 kilo verip vücut kompozisyonumu değiştirebileceğime inanmamıştım. Eylem kişiye özel planlar yapıyor, beslenmeyi takip ediyor ve seni yarı yolda bırakmıyor. Değişim konusunda ciddiyseniz doğru yer burası.",
      en: "Honestly, I did not believe I could drop 12 kilos and change my body composition in three months. Eylem builds individual plans, tracks your nutrition, and never lets you stop halfway. If you are serious about change, this is the right place.",
      ru: "Честно, я не верил, что смогу за три месяца сбросить 12 кг и изменить состав тела. Eylem строит индивидуальные планы, следит за питанием и не даёт бросить на полпути. Если вы серьёзно настроены на перемены — это правильное место."
    },
    "Training with Eylem changed everything for me. Dropped 7kg, built real strength, and finally learned how to train properly. He pushes hard but always reads how your body responds and adjusts. Best trainer I've worked with in years. Fun, professional, and genuinely invested in your progress.": {
      tr: "Eylem ile çalışmak benim için her şeyi değiştirdi. 7 kilo verdim, gerçek kuvvet kazandım ve nihayet doğru antrenman yapmayı öğrendim. Sıkı zorluyor ama vücudunun verdiği tepkiyi her zaman okuyup programı ona göre ayarlıyor. Yıllardır birlikte çalıştığım en iyi antrenör. Eğlenceli, profesyonel ve gelişimine içtenlikle yatırım yapıyor.",
      sr: "Trening sa Petrom mi je sve promenio. Skinuo sam 7 kg, izgradio pravu snagu i konačno naučio kako se trenira kako treba. Gura te jako, ali uvek prati kako tvoje telo reaguje i prilagođava program. Najbolji trener sa kojim sam radio godinama. Zabavan, profesionalan i iskreno uključen u tvoj napredak.",
      ru: "Тренировки с Eylem полностью всё изменили. Сбросил 7 кг, набрал реальную силу и наконец понял, как правильно тренироваться. Нагружает жёстко, но всегда читает реакцию тела и корректирует программу. Лучший тренер за много лет. Весёлый, профессиональный и по-настоящему вовлечён в твой прогресс."
    },
    "Sjajan trener! Došao sam sa viškom kilograma i ukočenim leđima posle godina sedenja pred računarom. Posle četiri meseca rada sa Petrom skinuo sam 8 kilograma, leđa me više ne bole i osećam se 10 godina mlađe. Preporučujem svima koji žele stvarne rezultate.": {
      tr: "Harika bir antrenör! Yıllarca bilgisayar başında oturmaktan dolayı fazla kilo ve sertleşmiş bir sırtla geldim. Eylem ile dört ay çalıştıktan sonra 8 kilo verdim, sırtım artık ağrımıyor ve 10 yaş daha genç hissediyorum. Gerçek sonuç isteyen herkese tavsiye ederim.",
      en: "Great trainer! I came in overweight with a stiff back after years at a desk. After four months working with Eylem I dropped 8 kilos, my back no longer hurts, and I feel ten years younger. I recommend him to anyone who wants real results.",
      ru: "Отличный тренер! Пришёл с лишним весом и зажатой спиной после многих лет за компьютером. После четырёх месяцев работы с Eylem сбросил 8 кг, спина больше не болит и чувствую себя на 10 лет моложе. Рекомендую всем, кто хочет реальных результатов."
    },
    "Пётр настоящий профессионал. За полгода тренировок сбросила 9 кг, набрала тонус и впервые за долгое время полюбила своё отражение в зеркале. Внимательный тренер, который слушает и корректирует программу под тебя. Очень рекомендую!": {
      tr: "Eylem gerçek bir profesyonel. Altı aylık antrenmanlarla 9 kilo verdim, tonus kazandım ve uzun zamandır ilk kez aynadaki yansımamı sevdim. Dinleyen ve programı sana uyarlayan dikkatli bir antrenör. Yürekten tavsiye ederim!",
      sr: "Eylem je pravi profesionalac. Za šest meseci treninga skinula sam 9 kg, dobila tonus i po prvi put posle dužeg vremena zavolela svoj odraz u ogledalu. Pažljiv trener koji sluša i prilagođava program tebi. Preporučujem od srca!",
      en: "Eylem is a true professional. In six months of training I lost 9 kg, toned up, and for the first time in a long time fell in love with my reflection in the mirror. An attentive trainer who listens and adjusts the programme to suit you. Highly recommended!"
    },

        "EYLEM is an amazing trainer and coach. I was already active, but after two broken bones I needed to add muscle and bone strengthening. EYLEM personalizes every workout and the results are motivating and empowering. Plus Guy and the whole team are welcoming and the facilities are bright and clean.": {
      tr: "EYLEM harika bir antrenör ve koç. Zaten aktiftim ama iki kırık kemikten sonra kas ve kemik güçlendirmesi eklemem gerekti. EYLEM her antrenmanı kişiselleştiriyor, sonuçlar motive edici ve güç veriyor. Üstüne tüm ekip sıcakkanlı, tesisler de aydınlık ve tertemiz.",
      sr: "EYLEM je sjajan trener i kouč. Već sam bio aktivan, ali posle dva slomljena kosta trebalo mi je jačanje mišića i kostiju. EYLEM personalizuje svaki trening, a rezultati motivišu i daju snagu. Uz to, ceo tim je gostoljubiv, a prostor svetao i čist.",
      ru: "EYLEM — потрясающий тренер и коуч. Я уже была активной, но после двух переломов нужно было укреплять мышцы и кости. EYLEM подбирает каждую тренировку индивидуально, результаты мотивируют и придают сил. Вся команда приветливая, а зал светлый и чистый."
    },
    "Eylem is the real deal. Over six months of training I dropped 9 kg, got my tone back and — for the first time in years — actually liked what I saw in the mirror. A trainer who listens and tailors the programme around you. Highly recommend.": {
      tr: "Eylem işin gerçeği. Altı aylık antrenmandan sonra 9 kilo verdim, tonusumu yeniden kazandım ve yıllar sonra ilk kez aynadakini gerçekten beğendim. Dinleyen ve programı sana göre uyarlayan bir antrenör. Şiddetle tavsiye ederim.",
      sr: "Eylem je pravi pogodak. Tokom šest meseci treninga skinula sam 9 kg, vratila tonus i — po prvi put posle godina — zaista mi se svidelo ono što vidim u ogledalu. Trener koji sluša i prilagođava program tebi. Toplo preporučujem.",
      ru: "Eylem — настоящая находка. За полгода тренировок я сбросила 9 кг, вернула тонус и впервые за годы по-настоящему полюбила то, что вижу в зеркале. Тренер, который слушает и подстраивает программу под тебя. Очень рекомендую."
    },
    "I’ve been coming to this gym for 2+ years. Assumed it would only be a few months of personal training but never left! Great trainers and facilities and has helped me get so much stronger.": {
      tr: "Bu salona 2+ yıldır geliyorum. Sadece birkaç ay personal training olur sanmıştım, hiç ayrılmadım! Antrenörler ve tesisler harika; çok daha güçlü olmama yardımcı oldular.",
      sr: "U ovaj studio dolazim već 2+ godine. Mislio sam da će biti samo nekoliko meseci personalnog treninga, ali nisam otišao! Sjajni treneri i prostor — pomogli su mi da budem mnogo jači.",
      ru: "Хожу в этот зал уже больше двух лет. Думала, будет всего пара месяцев персональных тренировок — но так и не ушла! Отличные тренеры и зал, благодаря им я стала намного сильнее."
    },
    "I’ve had an amazing experience training with Guy at Ankara Personal Trainer. He completely changed the way I think about working out,I actually look forward to my sessions now. After just six sessions, I’m already seeing real results, which is incredibly motivating. His approach is both effective and sustainable, making it easier to stay consistent and reach my goals. Highly recommend!": {
      tr: "Eylem ile antrenman yapmak harika bir deneyim oldu. Spor yapmaya bakışımı tamamen değiştirdi; artık seanslarımı dört gözle bekliyorum. Sadece altı seansın ardından gerçek sonuçlar görmeye başladım, bu da inanılmaz motive edici. Yaklaşımı hem etkili hem sürdürülebilir, bu da düzenli kalıp hedeflerime ulaşmamı kolaylaştırıyor. Şiddetle tavsiye ederim!",
      sr: "Iskustvo treninga sa Eylem-om bilo je sjajno. Potpuno mi je promenio način na koji razmišljam o treningu — sada se radujem svakoj sesiji. Posle samo šest sesija već vidim prave rezultate, što je neverovatno motivišuće. Pristup mu je i efikasan i održiv, što olakšava doslednost i postizanje ciljeva. Toplo preporučujem!",
      ru: "Тренироваться с Eylem — потрясающий опыт. Он полностью изменил моё отношение к тренировкам, теперь я с нетерпением жду каждое занятие. Уже после шести сессий я вижу реальные результаты, это безумно мотивирует. Его подход и эффективен, и устойчив, что облегчает регулярность и достижение целей. Очень рекомендую!"
    },
    "I love Eylem Tarhan Personal Training and Guy, who puts me in the best mood! I feel so much stronger and Guy creates a great personalised program. 10/10 would recommend - and such fun vibes!": {
      tr: "Eylem Tarhan Personal Training'i ve insanı en iyi moda sokan Eylem'i çok seviyorum! Çok daha güçlü hissediyorum ve Eylem harika kişiye özel bir program hazırlıyor. 10/10 tavsiye ederim — atmosfer de bir o kadar eğlenceli!",
      sr: "Obožavam Eylem Tarhan Personal Training i Eylem-a, koji me uvek dovede u najbolje raspoloženje! Osećam se mnogo snažnije, a Eylem pravi sjajan personalizovan program. 10/10 preporuka — i tako zabavna atmosfera!",
      ru: "Обожаю Eylem Tarhan Personal Training и Eylem-а — после него настроение всегда на высоте! Чувствую себя гораздо сильнее, а Eylem составляет отличную персональную программу. 10/10 рекомендую — и такая классная атмосфера!"
    },

// Client reviews — interior pages (about.html, etc.)
    "Godinama sam pokušavala da izgradim tonus u teretani sama, bez uspeha. Sa Petrom sam za šest meseci dobila mišićnu masu koju nikad nisam imala i konačno volim svoj odraz u ogledalu. Strpljiv je i zna tačno kako da te motiviše.": {
      tr: "Yıllarca salonda tek başıma tonus kazanmaya çalıştım, başaramadım. Eylem ile altı ayda hiç sahip olmadığım kas kütlesine kavuştum ve nihayet aynadaki yansımamı seviyorum. Sabırlı biri ve seni nasıl motive edeceğini tam olarak biliyor.",
      en: "For years I tried to tone up at the gym on my own with no results. With Eylem I built muscle in six months that I had never had before, and I finally love my reflection in the mirror. He is patient and knows exactly how to motivate you.",
      ru: "Годами я пыталась привести мышцы в тонус в зале сама, без результата. С Eylem за шесть месяцев я набрала мышцы, которых никогда не было, и наконец люблю своё отражение в зеркале. Терпеливый и точно знает, как мотивировать."
    },
    "Sjajan trener i stručnjak. Pratimo ishranu, trening i oporavak, sve je isplanirano. Skinuo sam 10 kilograma za četiri meseca bez ekstremnih dijeta. Treninzi su zahtevni ali zanimljivi.": {
      tr: "Harika bir antrenör ve gerçek bir uzman. Beslenmeyi, antrenmanı ve toparlanmayı birlikte takip ediyoruz, her şey planlı. Hiçbir aşırı diyet yapmadan dört ayda 10 kilo verdim. Antrenmanlar zorlu ama bir o kadar da ilgi çekici.",
      en: "A great trainer and a real professional. We track nutrition, training, and recovery — everything is planned. I dropped 10 kilos in four months without any extreme diets. The sessions are demanding but always interesting.",
      ru: "Отличный тренер и профессионал. Мы отслеживаем питание, тренировки и восстановление — всё распланировано. Я сбросил 10 кг за четыре месяца без экстремальных диет. Тренировки сложные, но увлекательные."
    },
    "Rad sa Petrom je najbolja investicija koju sam napravila u svoje zdravlje. Bolela su me leđa godinama, sada se osećam kao nov čovek. Uvek je tu za savet, čak i van termina. Preporuka za svakoga.": {
      tr: "Eylem ile çalışmak sağlığıma yaptığım en iyi yatırım. Yıllarca sırt ağrım vardı, şimdi yepyeni biri gibi hissediyorum. Seans dışında bile her zaman tavsiye için ulaşılabilir. Herkese tavsiye ederim.",
      en: "Working with Eylem is the best investment I have ever made in my health. My back used to hurt for years, and now I feel like a new person. He is always there with advice, even outside sessions. A recommendation for everyone.",
      ru: "Работа с Eylem — лучшая инвестиция в моё здоровье. Спина болела годами, теперь чувствую себя новым человеком. Всегда на связи с советом, даже вне тренировки. Рекомендую каждому."
    },
    "Iskreno nisam verovao da mogu da se vratim u formu posle četrdesete. Eylem je pokazao suprotno. Za pet meseci sam osetio razliku u snazi, držanju i kondiciji. Studio u Yıldızu je miran, individualan pristup, bez gužve.": {
      tr: "Kırk yaşından sonra forma geri dönebileceğime açıkçası inanmıyordum. Eylem bunun aksini kanıtladı. Beş ayda kuvvette, postürde ve kondisyonda gerçek bir fark hissettim. Yıldız'daki stüdyo sakin, kişiye özel yaklaşım var, kalabalık yok.",
      en: "Honestly, I did not believe I could get back in shape after forty. Eylem proved the opposite. In five months I felt a real difference in strength, posture, and conditioning. The studio in Yıldız is calm, the approach is personal, and there is no crowd.",
      ru: "Честно, я не верил, что смогу вернуться в форму после сорока. Eylem доказал обратное. За пять месяцев я почувствовал разницу в силе, осанке и выносливости. Студия во Врачаре спокойная, подход индивидуальный, без толпы."
    },
    "Eylem je jedan od retkih trenera koji stvarno prilagodi program tvom telu i tempu. Došao sam kao potpuni početnik, za tri meseca sam skinuo 7 kilograma i dobio više energije u svakodnevnom životu. Preporučujem svima koji su ozbiljni u vezi sebe.": {
      tr: "Eylem, programı gerçekten senin vücuduna ve tempona uyarlayan ender antrenörlerden biri. Tam bir acemi olarak başladım, üç ayda 7 kilo verdim ve günlük hayatımda belirgin biçimde daha enerjik hissediyorum. Kendisi konusunda ciddi olan herkese tavsiye ederim.",
      en: "Eylem is one of the rare trainers who truly adapts the programme to your body and your pace. I came in as a complete beginner, and in three months I dropped 7 kilos and gained noticeably more energy in daily life. I recommend him to anyone who is serious about themselves.",
      ru: "Eylem — один из немногих тренеров, который действительно подстраивает программу под твоё тело и темп. Пришёл полным новичком, за три месяца сбросил 7 кг и получил заметно больше энергии в повседневной жизни. Рекомендую всем, кто серьёзно относится к себе."
    },

    // ============================================================
    // INTERIOR PAGES — shared English body copy (about.html / personal-training.html)
    // ============================================================
    "ABOUT US": { tr: "HAKKIMIZDA", sr: "O NAMA", ru: "О НАС" },
    "ABOUT ME": { tr: "HAKKIMDA", sr: "O MENI", ru: "ОБО МНЕ" },
    "Available at: Eylem Tarhan Personal Training": {
      tr: "Konum: Eylem Tarhan Personal Training", sr: "Dostupno u: Eylem Tarhan Personal Training",
      ru: "Доступно в: Eylem Tarhan Personal Training"
    },
    "At Eylem Tarhan we redefine your perception of Personal Training. We make it fun and exciting to work with a personal trainer, while always making sure you reach your personal goals the fastest, most effective way possible. No matter your goal, we will get you there!": {
      tr: "Eylem Tarhan'da personal training'e bakışını yeniden tanımlıyoruz. Bir personal trainer ile çalışmayı eğlenceli ve heyecan verici hale getirirken hedeflerine her zaman mümkün olan en hızlı ve en etkili yoldan ulaşmanı sağlıyoruz. Hedefin ne olursa olsun, seni oraya ulaştırırız!",
      sr: "U Eylem Tarhan-u redefinisaćemo tvoj pogled na personalni trening. Rad s personalnim trenerom pretvaramo u zabavno i uzbudljivo iskustvo, uz garanciju da ćeš svoje lične ciljeve dostići na najbrži i najefikasniji mogući način. Bez obzira na cilj, dovešćemo te tamo!",
      ru: "В Eylem Tarhan мы меняем представление о персональных тренировках. Работа с тренером становится увлекательной и мотивирующей, а ваши цели достигаются самым быстрым и эффективным способом. Какой бы ни была ваша цель — мы поможем её достичь!"
    },
    "At Eylem Tarhan I redefine your perception of personal training. I make it fun and exciting to work with a personal trainer, while always making sure you reach your goals the fastest, most effective way possible. No matter your goal, I will get you there.": {
      tr: "Eylem Tarhan'da personal training'e bakışını yeniden tanımlıyorum. Bir personal trainer ile çalışmayı eğlenceli ve heyecan verici hale getirirken hedeflerine her zaman mümkün olan en hızlı ve en etkili yoldan ulaşmanı sağlıyorum. Hedefin ne olursa olsun, seni oraya ulaştırırım.",
      sr: "U Eylem Tarhan-u redefinišem tvoj pogled na personalni trening. Rad s personalnim trenerom pretvaram u zabavno i uzbudljivo iskustvo, uz garanciju da ćeš svoje ciljeve dostići na najbrži i najefikasniji mogući način. Bez obzira na cilj, dovešću te tamo.",
      ru: "В Eylem Tarhan я меняю ваше представление о персональных тренировках. Работа с тренером становится увлекательной и мотивирующей, а ваши цели достигаются самым быстрым и эффективным способом. Какой бы ни была ваша цель — я помогу её достичь."
    },
    "At Eylem Tarhan I redefine your perception of personal training. I make it fun and exciting to work with a personal trainer, while always making sure you reach your goals the fastest, most effective way possible. No matter your goal, I will get you there!": {
      tr: "Eylem Tarhan'da personal training'e bakışını yeniden tanımlıyorum. Bir personal trainer ile çalışmayı eğlenceli ve heyecan verici hale getirirken hedeflerine her zaman mümkün olan en hızlı ve en etkili yoldan ulaşmanı sağlıyorum. Hedefin ne olursa olsun, seni oraya ulaştırırım!",
      sr: "U Eylem Tarhan-u redefinišem tvoj pogled na personalni trening. Rad s personalnim trenerom pretvaram u zabavno i uzbudljivo iskustvo, uz garanciju da ćeš svoje ciljeve dostići na najbrži i najefikasniji mogući način. Bez obzira na cilj, dovešću te tamo!",
      ru: "В Eylem Tarhan я меняю ваше представление о персональных тренировках. Работа с тренером становится увлекательной и мотивирующей, а ваши цели достигаются самым быстрым и эффективным способом. Какой бы ни была ваша цель — я помогу её достичь!"
    },
    "✓ Unique program based on your goals": {
      tr: "✓ Hedeflerine özel benzersiz program",
      sr: "✓ Jedinstven program prilagođen tvojim ciljevima",
      ru: "✓ Уникальная программа, построенная под ваши цели"
    },
    "✓ Dedicated 1-on-1 coaching by the best trainers": {
      tr: "✓ En iyi antrenörlerle birebir koçluk",
      sr: "✓ Posvećen rad 1-na-1 sa najboljim trenerima",
      ru: "✓ Индивидуальные тренировки 1-на-1 с лучшими тренерами"
    },
    "✓ Dedicated 1-on-1 coaching with me": {
      tr: "✓ Benimle birebir koçluk",
      sr: "✓ Posvećen rad 1-na-1 sa mnom",
      ru: "✓ Индивидуальные тренировки 1-на-1 со мной"
    },
    "✓ 360° approach (sleep, nutrition, stress & movement)": {
      tr: "✓ 360° yaklaşım (uyku, beslenme, stres ve hareket)",
      sr: "✓ 360° pristup (san, ishrana, stres i pokret)",
      ru: "✓ Подход 360° (сон, питание, стресс и движение)"
    },
    "✓ Premium fitness equipment": {
      tr: "✓ Üst seviye fitness ekipmanı",
      sr: "✓ Vrhunska oprema za trening",
      ru: "✓ Премиальное фитнес-оборудование"
    },
    "✓ Monthly Inbody Scan": {
      tr: "✓ Aylık Inbody analizi",
      sr: "✓ Mesečni Inbody skener",
      ru: "✓ Ежемесячный Inbody-анализ"
    },
    "✓ Monthly Inbody scan": {
      tr: "✓ Aylık Inbody analizi",
      sr: "✓ Mesečni Inbody skener",
      ru: "✓ Ежемесячный Inbody-анализ"
    },
    "✓ 200+ happy customers": {
      tr: "✓ 200+ memnun müşteri",
      sr: "✓ 200+ zadovoljnih klijenata",
      ru: "✓ 200+ довольных клиентов"
    },
    "✓ 200+ happy clients": {
      tr: "✓ 200+ memnun danışan",
      sr: "✓ 200+ zadovoljnih klijenata",
      ru: "✓ 200+ довольных клиентов"
    },
    "SCHEDULE NOW": { tr: "ŞİMDİ RANDEVU AL", sr: "REZERVIŠI TERMIN", ru: "ЗАПИСАТЬСЯ СЕЙЧАС" },
    "What drives me": { tr: "Beni ne motive ediyor", sr: "ŠTA ME POKREĆE", ru: "ЧТО ДВИЖЕТ МНОЙ" },
    "Stepping outside the comfort zone is what fuels me. It’s what drives me to help you reach new heights. I’ve always felt the need to change the status quo and redefine the standards. So I made it happen. I’ve built a next-level training experience that goes beyond the norm. Why? I believe health & fitness empower successful living, and exercise should be fun, exciting and engaging in an innovative way.": {
      tr: "Beni harekete geçiren şey konfor alanının dışına çıkmak. Yeni zirvelere ulaşman için seni yönlendirmeme yol açan da bu. Mevcut düzeni değiştirme ve standartları yeniden tanımlama ihtiyacını her zaman hissettim. Ben de yaptım: sıradanın ötesine geçen bir sonraki seviye antrenman deneyimini kurdum. Neden? Çünkü sağlık ve fitness'ın başarılı bir yaşamı desteklediğine inanıyorum; egzersiz de eğlenceli, heyecan verici ve yenilikçi bir şekilde sürükleyici olmalı.",
      sr: "Izlazak iz zone komfora je ono što me pokreće. To je ono što me tera da ti pomognem da dostigneš nove visine. Oduvek sam osećao potrebu da promenim pravila i redefinišem standarde. Tako sam i uradio. Stvorio sam trening iskustvo na višem nivou, koje izlazi iz okvira. Zašto? Verujem da zdravlje i fitnes pokreću uspešan život, a vežbanje treba da bude zabavno, uzbudljivo i inovativno.",
      ru: "Выход из зоны комфорта — моё топливо. Именно он толкает меня помогать тебе достигать новых высот. Я всегда чувствовал необходимость ломать статус-кво и переопределять стандарты. Поэтому я создал тренировочный опыт нового уровня — за рамками привычного. Почему? Я верю, что здоровье и фитнес дают силу для успешной жизни, а тренировка должна быть увлекательной, вдохновляющей и инновационной."
    },
    "I dare you to feel what it’s like. Discover my next-level training now.": {
      tr: "Sana bunu hissetmen için meydan okuyorum. Bir sonraki seviye antrenmanımı şimdi keşfet.",
      sr: "Izazivam te da osetiš kako je to. Otkrij moj trening na višem nivou već danas.",
      ru: "Бросаю тебе вызов — почувствуй это сам. Откройте для себя мою тренировку нового уровня прямо сейчас."
    },
    "I’M COMMITTED": { tr: "KARARLIYIM", sr: "POSVEĆEN SAM", ru: "Я ПРЕДАН ДЕЛУ" },
    "I make a commitment to you to be here, ready and focused on your next level. I’m fully dedicated to helping you reach your goals. You will train weekly to make this a lifestyle decision.": {
      tr: "Burada, hazır ve senin bir sonraki seviyene odaklanmış olacağıma sana söz veriyorum. Hedeflerine ulaşmana yardım etmeye tamamen kendimi adadım. Bunu bir yaşam tarzı kararı haline getirmek için her hafta antrenman yapacaksın.",
      sr: "Obećavam ti da ću biti tu — spreman i fokusiran na tvoj sledeći nivo. Potpuno sam posvećen tome da ti pomognem da dostigneš svoje ciljeve. Treniraćeš nedeljno kako bi ovo postalo životni stil.",
      ru: "Я обязуюсь быть рядом — готовым и сосредоточенным на твоём следующем уровне. Я полностью посвящён тому, чтобы помочь тебе достичь цели. Ты будешь тренироваться еженедельно, превращая это в стиль жизни."
    },
    "HABITS-BASED APPROACH": { tr: "ALIŞKANLIK TEMELLİ YAKLAŞIM", sr: "PRISTUP ZASNOVAN NA NAVIKAMA", ru: "ПОДХОД НА ОСНОВЕ ПРИВЫЧЕК" },
    "My habits-based approach focuses on the daily opportunities of the four pillars of health (sleep, stress, nutrition, movement), improving where we can to optimize your results.": {
      tr: "Alışkanlık temelli yaklaşımım sağlığın dört temel direği olan uyku, stres, beslenme ve harekete dair günlük fırsatlara odaklanıyor; sonuçlarını optimize etmek için elimizden geldiğince iyileştiriyoruz.",
      sr: "Moj pristup zasnovan na navikama fokusira se na svakodnevne prilike u okviru četiri stuba zdravlja (san, stres, ishrana, pokret), poboljšavajući ono što možemo da bismo optimizovali tvoje rezultate.",
      ru: "Мой подход на основе привычек фокусируется на ежедневных возможностях четырёх столпов здоровья (сон, стресс, питание, движение), улучшая то, что в наших силах, для твоих оптимальных результатов."
    },
    "MONTHLY CHECK-INS": { tr: "AYLIK KONTROLLER", sr: "MESEČNE PROVERE", ru: "ЕЖЕМЕСЯЧНЫЕ ПРОВЕРКИ" },
    "Using my Eylem Tarhan app I track biomarkers such as muscle mass, body fat, strength, endurance and other various metrics to assess your progress.": {
      tr: "Eylem Tarhan uygulamamı kullanarak kas kütlesi, vücut yağı, kuvvet, dayanıklılık ve diğer çeşitli metrikler gibi biyobelirteçleri izliyor, gelişimini değerlendiriyorum.",
      sr: "Kroz svoju Eylem Tarhan aplikaciju pratim biomarkere poput mišićne mase, procenta masti, snage, izdržljivosti i drugih metrika kako bih procenio tvoj napredak.",
      ru: "Через своё приложение Eylem Tarhan я отслеживаю биомаркеры — мышечную массу, процент жира, силу, выносливость и другие показатели — чтобы оценить твой прогресс."
    },
    "KNOWLEDGE IS POWER": { tr: "BİLGİ GÜÇTÜR", sr: "ZNANJE JE MOĆ", ru: "ЗНАНИЕ — СИЛА" },
    "While training with me, I believe in teaching you the how and why behind my programming, so that you have the tools to be successful in any environment.": {
      tr: "Benimle antrenman yaparken, programın arkasındaki nasıl ve neden sorularını sana öğretmeye inanıyorum; böylece her ortamda başarılı olman için gerekli araçlara sahip olursun.",
      sr: "Dok treniraš sa mnom, verujem da te treba naučiti kako i zašto iza mog programa, kako bi imao alate da budeš uspešan u bilo kom okruženju.",
      ru: "Тренируясь со мной, ты узнаёшь не только «как», но и «почему» за моей программой — чтобы у тебя были инструменты для успеха в любой обстановке."
    },
    "Your Personal Trainer": { tr: "Kişisel Antrenörün", sr: "Tvoj Personalni Trener", ru: "Ваш персональный тренер" },
    "Eylem does whatever it takes to help you cross the line. He has put in the hours and done the work. Now he is here to help you reach the next level. Meet the coach who is going to help you level up — the one in your corner, every session.": {
      tr: "Eylem, finiş çizgisini geçmen için ne gerekiyorsa yapıyor. Saatlerini ve emeğini bu işe verdi. Şimdi seni bir sonraki seviyeye çıkarmak için burada. Seni yukarı taşıyacak koçla tanış — her seansta yanında, senin köşende.",
      sr: "Eylem je spreman na sve da ti pomogne da pređeš cilj. Uložio je sate i prošao kroz rad. Sada je tu da ti pomogne da dostigneš sledeći nivo. Upoznaj trenera koji će te podići na viši nivo — onog ko stoji uz tebe, svaku sesiju.",
      ru: "Питер готов на всё, чтобы помочь тебе пересечь финишную черту. Он вложил часы и прошёл всю работу. Теперь он здесь, чтобы помочь тебе выйти на новый уровень. Познакомься с тренером, который поможет тебе расти — тем, кто в твоём углу, каждую сессию."
    },

    // ============================================================
    // personal-training.html — unique sections
    // ============================================================
    "WHAT’S IN IT FOR ME": { tr: "BENİM İÇİN NE VAR", sr: "ŠTA TI OVO DONOSI", ru: "ЧТО ПОЛУЧАЕТЕ ВЫ" },
    "Achieve amazing results by gradually discovering the transformation process. My commitment is coaching you both inside the gym through training and outside the gym with lifestyle habits (sleep, stress, nutrition) to accomplish your goals.": {
      tr: "Dönüşüm sürecini adım adım keşfederek harika sonuçlar elde et. Sözüm; hedeflerine ulaşman için hem salonda antrenman üzerinden hem de salon dışında yaşam alışkanlıklarınla (uyku, stres, beslenme) sana koçluk yapmak.",
      sr: "Postigni izuzetne rezultate postepeno otkrivajući proces transformacije. Moja posvećenost je rad s tobom unutar teretane kroz trening i van nje kroz životne navike (san, stres, ishrana) da dostigneš svoje ciljeve.",
      ru: "Добивайся впечатляющих результатов, постепенно проходя процесс трансформации. Моё обязательство — сопровождать тебя и в зале через тренировки, и вне его — через образ жизни (сон, стресс, питание), чтобы ты достиг своих целей."
    },
    "HOW DOES IT WORK?": { tr: "NASIL ÇALIŞIR?", sr: "KAKO FUNKCIONIŠE?", ru: "КАК ЭТО РАБОТАЕТ?" },
    "The first step of your next-level transformation begins with a 55-minute intake session. During this intake session, I will assess and coach you on your movement patterns, health status, and body measurements based on your goals. I will create a personalized, custom plan to achieve the results you want.": {
      tr: "Bir sonraki seviye dönüşümünün ilk adımı 55 dakikalık bir tanışma seansıyla başlıyor. Bu seansta hareket kalıplarını, sağlık durumunu ve vücut ölçülerini hedeflerine göre değerlendirip sana koçluk yapacağım. İstediğin sonuçları elde etmen için kişiye özel bir plan hazırlayacağım.",
      sr: "Prvi korak tvoje transformacije na sledeći nivo počinje 55-minutnom uvodnom sesijom. Tokom ove sesije, ja ću proceniti i savetovati te o obrascima pokreta, zdravstvenom statusu i telesnim merama u odnosu na tvoje ciljeve. Kreiraću personalizovan plan prilagođen rezultatima koje želiš.",
      ru: "Первый шаг твоей трансформации — 55-минутная вводная сессия. На ней я оценю паттерны движения, состояние здоровья и параметры тела с учётом твоих целей и составлю индивидуальный план для достижения желаемого результата."
    },
    "GOAL SETTING": { tr: "HEDEF BELİRLEME", sr: "POSTAVLJANJE CILJEVA", ru: "ПОСТАНОВКА ЦЕЛЕЙ" },
    "While focusing on your journey I take all details into account. Together we discuss your current training program, nutrition plan, sleep habits, physical and mental stressors and main fitness goals to understand where we are and where you want to go.": {
      tr: "Yolculuğuna odaklanırken tüm detayları dikkate alıyorum. Birlikte mevcut antrenman programını, beslenme planını, uyku alışkanlıklarını, fiziksel ve zihinsel stres faktörlerini ve ana fitness hedeflerini konuşuyoruz; böylece şu an nerede olduğumuzu ve nereye gitmek istediğini anlıyoruz.",
      sr: "Dok se fokusiram na tvoj put, uzimam u obzir sve detalje. Zajedno razgovaramo o tvom trenutnom programu treninga, planu ishrane, navikama spavanja, fizičkim i mentalnim stresorima i glavnim fitnes ciljevima, kako bismo razumeli gde smo i gde želiš da stigneš.",
      ru: "Работая над твоим маршрутом, я учитываю все детали. Вместе мы обсуждаем твою текущую программу тренировок, питание, сон, физические и ментальные стрессоры и основные фитнес-цели — чтобы понять, где мы сейчас и куда ты хочешь прийти."
    },
    "PERSONALIZED PLAN": { tr: "KİŞİSEL PLAN", sr: "PERSONALIZOVAN PLAN", ru: "ИНДИВИДУАЛЬНЫЙ ПЛАН" },
    "By measuring your progress, I use various biomarkers such as my Inbody 570 Body Composition Analyzer, movement patterns and energy systems metrics. I create a custom plan and timeline to achieve long-term sustainable results.": {
      tr: "Gelişimini ölçerken Inbody 570 vücut kompozisyonu analiz cihazım, hareket kalıpları ve enerji sistemleri metrikleri gibi çeşitli biyobelirteçleri kullanıyorum. Uzun vadeli, sürdürülebilir sonuçlar için kişiye özel bir plan ve zaman çizelgesi oluşturuyorum.",
      sr: "Merim tvoj napredak koristeći različite biomarkere poput svog Inbody 570 analizatora sastava tela, obrazaca pokreta i metrika energetskih sistema. Kreiram plan i vremenski okvir prilagođen dugoročnim, održivim rezultatima.",
      ru: "Измеряя твой прогресс, я использую различные биомаркеры — Inbody 570 анализатор состава тела, паттерны движения и метрики энергосистем. Я составляю индивидуальный план и график для долгосрочных устойчивых результатов."
    },

    // ============================================================
    // personal-training.html — How It Works, Training Features, Client Progress
    // ============================================================
    "How It Works": { tr: "Nasıl Çalışır", sr: "Kako funkcioniše", ru: "Как это работает" },
    "From first contact to real results in four steps.": {
      tr: "İlk temastan gerçek sonuçlara dört adımda.", sr: "Od prvog kontakta do stvarnih rezultata u četiri koraka.",
      ru: "От первого контакта до реальных результатов — в четыре шага."
    },
    "01 — Consultation": { tr: "01 — Danışma", sr: "01 — Konsultacija", ru: "01 — Консультация" },
    "02 — Assessment": { tr: "02 — Değerlendirme", sr: "02 — Procena", ru: "02 — Оценка" },
    "03 — Your Program": { tr: "03 — Programın", sr: "03 — Tvoj program", ru: "03 — Ваша программа" },
    "04 — Results": { tr: "04 — Sonuçlar", sr: "04 — Rezultati", ru: "04 — Результаты" },
    "Consultation": { tr: "Danışma", sr: "Konsultacija", ru: "Консультация" },
    "Assessment": { tr: "Değerlendirme", sr: "Procena", ru: "Оценка" },
    "Your Program": { tr: "Programın", sr: "Tvoj program", ru: "Ваша программа" },
    "Results": { tr: "Sonuçlar", sr: "Rezultati", ru: "Результаты" },
    "A free 20-minute conversation about your goals, training history and any injuries.": {
      tr: "Hedeflerin, antrenman geçmişin ve varsa yaralanmaların hakkında ücretsiz 20 dakikalık sohbet.", sr: "Besplatan razgovor od 20 minuta o tvojim ciljevima, istoriji treninga i eventualnim povredama.",
      ru: "Бесплатный 20-минутный разговор о ваших целях, истории тренировок и травмах, если они есть."
    },
    "Body measurements and movement analysis in the first session.": {
      tr: "İlk seansta vücut ölçümleri ve hareket analizi.", sr: "Merenja tela i analiza pokreta na prvoj sesiji.",
      ru: "Замеры тела и анализ движения на первой сессии."
    },
    "You receive a fully personalised training and nutrition plan built for you.": {
      tr: "Sana özel, tamamen kişiselleştirilmiş antrenman ve beslenme planı alırsın.", sr: "Dobijaš potpuno personalizovan plan treninga i ishrane napravljen za tebe.",
      ru: "Вы получаете полностью персонализированный план тренировок и питания под вас."
    },
    "We track progress every week, adjust the plan, and celebrate every win.": {
      tr: "Her hafta ilerlemeni takip ederiz, planı güncelleriz ve her kazanımı kutlarız.", sr: "Svake nedelje pratimo napredak, prilagođavamo plan i slavimo svaku pobedu.",
      ru: "Каждую неделю отслеживаем прогресс, корректируем план и празднуем каждую победу."
    },
    "Training Features": { tr: "Antrenman Özellikleri", sr: "Karakteristike treninga", ru: "Особенности тренировок" },
    "A session that is 100% yours. Eylem watches every rep, corrects every error and pushes you further than you would push yourself.": {
      tr: "%100 sana ait bir seans. Eylem her tekrarı izliyor, her hatayı düzeltiyor ve seni kendin zorlayacağından daha öteye taşıyor.",
      sr: "Sesija koja je 100% tvoja. Eylem prati svaku repeticiju, ispravlja svaku grešku i gura te dalje nego što bi ti sam sebe.",
      ru: "Сессия, которая на 100% ваша. Eylem следит за каждым повторением, исправляет каждую ошибку и подталкивает вас дальше, чем вы сами бы себя."
    },
    "Precise Technique": { tr: "Kesin Teknik", sr: "Precizna tehnika", ru: "Точная техника" },
    "Your trainer watches every movement, corrects errors in real time and makes sure you train safely and efficiently — every single rep.": {
      tr: "Antrenörün her hareketi izliyor, hataları gerçek zamanlı düzeltiyor ve her tekrarda güvenli ve verimli antrenman yapmanı sağlıyor.",
      sr: "Tvoj trener prati svaki pokret, ispravlja greške u realnom vremenu i brine da treniraš bezbedno i efikasno — svaku repeticiju.",
      ru: "Ваш тренер следит за каждым движением, исправляет ошибки в реальном времени и следит, чтобы вы тренировались безопасно и эффективно — в каждом повторении."
    },
    "Your trainer watches every movement, corrects errors in real time and makes sure you train safely and efficiently.": {
      tr: "Antrenörün her hareketi izliyor, hataları gerçek zamanlı düzeltiyor ve güvenli ve verimli antrenman yapmanı sağlıyor.",
      sr: "Tvoj trener prati svaki pokret, ispravlja greške u realnom vremenu i brine da treniraš bezbedno i efikasno.",
      ru: "Ваш тренер следит за каждым движением, исправляет ошибки в реальном времени и следит, чтобы вы тренировались безопасно и эффективно."
    },
    "Flexible Schedule": { tr: "Esnek Program", sr: "Fleksibilan raspored", ru: "Гибкий график" },
    "Morning, afternoon or evening — we fit training around your life, not the other way around.": {
      tr: "Sabah, öğleden sonra veya akşam — antrenmanı hayatına biz uyduruyoruz, tersi değil.", sr: "Jutro, popodne ili veče — trening prilagođavamo tvom životu, a ne obrnuto.",
      ru: "Утро, день или вечер — подстраиваем тренировки под вашу жизнь, а не наоборот."
    },
    "Intensity on Your Terms": { tr: "Senin Tempona Göre Yoğunluk", sr: "Intenzitet po tvojim uslovima", ru: "Интенсивность под вас" },
    "Beginner or advanced, the programme adapts to your current level and progressively challenges you as you grow stronger.": {
      tr: "Acemi ya da ileri seviye, program senin mevcut seviyene uyum sağlıyor ve güçlendikçe seni kademeli olarak zorluyor.",
      sr: "Bio početnik ili napredan, program se prilagođava tvom trenutnom nivou i progresivno te izaziva kako postaješ jači.",
      ru: "Новичок или опытный — программа подстраивается под ваш текущий уровень и постепенно усложняется по мере роста силы."
    },
    "Beginner or advanced — the programme adapts to your current level and progressively challenges you as you grow stronger.": {
      tr: "Acemi ya da ileri seviye — program senin mevcut seviyene uyum sağlıyor ve güçlendikçe seni kademeli olarak zorluyor.",
      sr: "Bio početnik ili napredan — program se prilagođava tvom trenutnom nivou i progresivno te izaziva kako postaješ jači.",
      ru: "Новичок или опытный — программа подстраивается под ваш текущий уровень и постепенно усложняется по мере роста силы."
    },
    "Measurable Progress": { tr: "Ölçülebilir İlerleme", sr: "Merljiv napredak", ru: "Измеримый прогресс" },
    "Every session is logged and every metric tracked. You always know exactly how far you have come and what is next on your journey.": {
      tr: "Her seans kaydediliyor, her metrik takip ediliyor. Ne kadar yol kat ettiğini ve yolculuğunda sıradakinin ne olduğunu her an net biliyorsun.",
      sr: "Svaka sesija je zabeležena i svaka metrika praćena. Uvek znaš tačno koliko si daleko stigao i šta je sledeće na tvom putu.",
      ru: "Каждая сессия записана и каждый показатель отслеживается. Вы всегда точно знаете, как далеко продвинулись и что следующее на пути."
    },
    "Every session is logged and every metric tracked. You always know exactly how far you have come.": {
      tr: "Her seans kaydediliyor, her metrik takip ediliyor. Ne kadar yol kat ettiğini her an net biliyorsun.",
      sr: "Svaka sesija je zabeležena i svaka metrika praćena. Uvek znaš tačno koliko si daleko stigao.",
      ru: "Каждая сессия записана и каждый показатель отслеживается. Вы всегда точно знаете, как далеко продвинулись."
    },
    "Client Progress": { tr: "Müşteri İlerlemesi", sr: "Napredak klijenata", ru: "Прогресс клиентов" },
    "Average results after 12 weeks of coaching.": {
      tr: "12 haftalık koçluk sonrası ortalama sonuçlar.", sr: "Prosečni rezultati posle 12 nedelja coaching-a.",
      ru: "Средние результаты через 12 недель коучинга."
    },
    "Strength (bench press)": { tr: "Güç (bench press)", sr: "Snaga (bench press)", ru: "Сила (жим лёжа)" },
    "Body fat reduction": { tr: "Vücut yağında azalma", sr: "Smanjenje masnog tkiva", ru: "Снижение жира" },
    "Lean muscle gained": { tr: "Kazanılan yağsız kas", sr: "Dobijena mišićna masa", ru: "Набор мышечной массы" },
    "Training consistency": { tr: "Antrenman tutarlılığı", sr: "Doslednost treninga", ru: "Постоянство тренировок" },
    "Strength": { tr: "Güç", sr: "Snaga", ru: "Сила" },
    "Bench press 1-rep max.": { tr: "Bench press 1 tekrar max.", sr: "Bench press 1RM.", ru: "Жим лёжа — максимум на 1 повторение." },
    "Body Fat": { tr: "Vücut Yağı", sr: "Masno tkivo", ru: "Жировая масса" },
    "Measured reduction across scans.": {
      tr: "Ölçümler boyunca azalma.", sr: "Mereno smanjenje kroz skenove.",
      ru: "Измеренное снижение по результатам сканов."
    },
    "Lean Muscle": { tr: "Yağsız kas kütlesi", sr: "Mišićna masa", ru: "Мышечная масса" },
    "Gained through structured training.": {
      tr: "Yapılandırılmış antrenmanla kazanıldı.",
      sr: "Stečena kroz strukturisan trening.",
      ru: "Набрана через структурированные тренировки."
    },
    "Consistency": { tr: "Süreklilik", sr: "Doslednost", ru: "Постоянство" },
    "Sessions attended as scheduled.": {
      tr: "Programa uygun katılınan seanslar.",
      sr: "Sesije održane po rasporedu.",
      ru: "Сессии, проведённые по расписанию."
    },

    // ============================================================
    // contact.html — unique body copy
    // ============================================================
    "Yıldız | Ankara": { tr: "Yıldız | Ankara", sr: "Yıldız | Ankara", ru: "Врачар | Анкара" },
    "Get in touch (contact page)": { tr: "Bana ulaş", sr: "Kontaktiraj me", ru: "Свяжись со мной" },
    "Online training": { tr: "Online antrenman", sr: "Online trening", ru: "Онлайн-тренировки" },
    "WhatsApp": { tr: "WhatsApp", sr: "WhatsApp", ru: "WhatsApp" },

    // ============================================================
    // pricing.html — packages + What's Included
    // ============================================================
    "What's Included in Every Program": {
      tr: "Her Programa Dahil Olanlar",
      sr: "Šta je uključeno u svaki program",
      ru: "Что входит в каждую программу"
    },
    "A complete coaching experience — from first assessment to steady weekly progress. Every package ships with all six below.": {
      tr: "Tam bir koçluk deneyimi — ilk değerlendirmeden istikrarlı haftalık ilerlemeye kadar. Her paket aşağıdaki altı maddenin hepsiyle birlikte gelir.",
      sr: "Kompletno coaching iskustvo — od prve procene do stabilnog nedeljnog napretka. Svaki paket uključuje svih šest stavki ispod.",
      ru: "Полный коучинговый опыт — от первичной оценки до стабильного еженедельного прогресса. В каждый пакет входят все шесть пунктов ниже."
    },
    "Initial Assessment": { tr: "İlk Değerlendirme", sr: "Inicijalna procena", ru: "Первичная оценка" },
    "Body, movement and health analysis before your first session.": {
      tr: "İlk seanstan önce vücut, hareket ve sağlık analizi.",
      sr: "Analiza tela, pokreta i zdravlja pre prve sesije.",
      ru: "Анализ тела, движения и здоровья перед первой сессией."
    },
    "Personalized Program": { tr: "Kişiye Özel Program", sr: "Personalizovan program", ru: "Персональная программа" },
    "A training plan built exclusively around your goals.": {
      tr: "Yalnızca senin hedeflerine göre kurulan bir antrenman planı.",
      sr: "Plan treninga napravljen isključivo oko tvojih ciljeva.",
      ru: "План тренировок, построенный исключительно под ваши цели."
    },
    "Nutrition Plan": { tr: "Beslenme Planı", sr: "Plan ishrane", ru: "План питания" },
    "Calories, macros and practical advice tailored to you.": {
      tr: "Sana uyarlanmış kalori, makro ve pratik öneriler.",
      sr: "Kalorije, makroi i praktični saveti prilagođeni tebi.",
      ru: "Калории, макронутриенты и практичные советы под вас."
    },
    "Weekly Check-ins": { tr: "Haftalık Kontroller", sr: "Nedeljne provere", ru: "Еженедельные проверки" },
    "Progress reviews every week with real-time program adjustments.": {
      tr: "Her hafta gelişim incelemeleri ve gerçek zamanlı program düzenlemeleri.",
      sr: "Nedeljni pregledi napretka uz izmene programa u realnom vremenu.",
      ru: "Еженедельный разбор прогресса с корректировкой программы в реальном времени."
    },
    "Direct Communication": { tr: "Doğrudan İletişim", sr: "Direktna komunikacija", ru: "Прямая связь" },
    "Your coach is available for questions and support throughout the day.": {
      tr: "Koçun gün boyu sorular ve destek için ulaşılabilir.",
      sr: "Tvoj trener ti je dostupan za pitanja i podršku tokom dana.",
      ru: "Тренер на связи для вопросов и поддержки в течение дня."
    },
    "Progress Tracking": { tr: "Gelişim Takibi", sr: "Praćenje napretka", ru: "Отслеживание прогресса" },
    "Measurements, photos and stats logged through your app.": {
      tr: "Ölçümler, fotoğraflar ve istatistikler uygulaman üzerinden kaydedilir.",
      sr: "Mere, fotografije i statistika beleže se kroz aplikaciju.",
      ru: "Замеры, фото и статистика фиксируются в приложении."
    },

    // ============================================================
    // faq.html — Q&As
    // ============================================================
    "Personal Training with Eylem": {
      tr: "Eylem ile Personal Training",
      sr: "Personalni trening sa Petrom",
      ru: "Персональные тренировки с Eylem"
    },
    "Training, Nutrition & Results": {
      tr: "Antrenman, Beslenme ve Sonuçlar",
      sr: "Trening, ishrana i rezultati",
      ru: "Тренировки, питание и результаты"
    },
    "Tracking, Pricing & Booking": {
      tr: "Takip, Fiyatlandırma ve Randevu",
      sr: "Praćenje, cene i zakazivanje",
      ru: "Трекинг, цены и запись"
    },
    "More questions?": { tr: "Başka soru var mı?", sr: "Još pitanja?", ru: "Остались вопросы?" },
    "Message Eylem directly and get an answer within a day.": {
      tr: "Eylem'e doğrudan mesaj at, bir gün içinde yanıt al.",
      sr: "Pošalji Petru poruku direktno i dobij odgovor u roku od jednog dana.",
      ru: "Напишите Eylem напрямую и получите ответ в течение дня."
    },
    "How does a 1-on-1 personal training session with Eylem work?": {
      tr: "Eylem ile birebir personal training seansı nasıl işliyor?",
      sr: "Kako izgleda 1-na-1 personalni trening sa Petrom?",
      ru: "Как проходит персональная тренировка 1-на-1 с Eylem?"
    },
    "Every Eylem Tarhan personal training session in Yıldız, Ankara starts with a movement assessment and a short health intake so Eylem can build a plan around your body and goals. A typical session runs 60 minutes and combines strength, mobility and conditioning, tailored to whether you are training for weight loss, muscle gain or general fitness. You leave each session with clear progress notes and the next workout scheduled.": {
      tr: "Yıldız, Ankara'daki her Eylem Tarhan personal training seansı, Eylem'in vücuduna ve hedeflerine göre bir plan kurabilmesi için bir hareket değerlendirmesi ve kısa bir sağlık görüşmesiyle başlar. Tipik bir seans 60 dakika sürer ve kilo verme, kas kazanımı veya genel fitness hangisi hedefin olursa olsun kuvvet, mobilite ve kondisyonu birleştirir. Her seanstan net gelişim notları ve bir sonraki antrenmanın takvime alınmış şekilde ayrılırsın.",
      sr: "Svaki Eylem Tarhan trening u Yıldız, Ankara počinje procenom pokreta i kratkim zdravstvenim intervjuom, kako bi Eylem mogao da napravi plan prilagođen tvom telu i ciljevima. Tipična sesija traje 60 minuta i kombinuje snagu, mobilnost i kondiciju — prilagođeno da li treniraš za mršavljenje, mišićnu masu ili opštu kondiciju. Sa svake sesije odlaziš sa jasnim beleškama o napretku i zakazanim sledećim treningom.",
      ru: "Каждая персональная тренировка Eylem Tarhan во Врачаре, Анкара начинается с оценки движения и короткого опроса о здоровье, чтобы Eylem построил план под ваше тело и цели. Обычная сессия длится 60 минут и совмещает силу, мобильность и кондиционинг — в зависимости от цели (похудение, набор массы или общая форма). После каждой сессии вы получаете заметки о прогрессе и следующую тренировку в расписании."
    },
    "Can I book a free consultation before committing?": {
      tr: "Karar vermeden önce ücretsiz bir görüşme alabilir miyim?",
      sr: "Mogu li da zakažem besplatnu konsultaciju pre nego što se odlučim?",
      ru: "Можно ли записаться на бесплатную консультацию перед оплатой?"
    },
    "Yes. Before you buy a session package, Eylem offers a free 20-minute consultation — in person at the Yıldız studio or online — where you walk through your goals, training history and schedule. You get an honest opinion on timelines and pricing, and only move forward if the programme fits. No pressure, no sales script.": {
      tr: "Evet. Bir seans paketi almadan önce Eylem, Yıldız'daki stüdyoda yüz yüze ya da online olarak ücretsiz 20 dakikalık bir görüşme sunar; bu görüşmede hedeflerini, antrenman geçmişini ve programını birlikte gözden geçirirsiniz. Süreler ve fiyatlandırma konusunda dürüst bir görüş alırsın ve yalnızca program sana uygunsa devam edersin. Baskı yok, satış senaryosu yok.",
      sr: "Da. Pre nego što kupiš paket sesija, Eylem nudi besplatnu konsultaciju od 20 minuta — uživo u studiju u Yıldızu ili onlajn — gde razgovarate o ciljevima, istoriji treninga i rasporedu. Dobijaš iskreno mišljenje o rokovima i ceni i nastavljaš samo ako ti program odgovara. Bez pritiska, bez prodajnih fora.",
      ru: "Да. Перед покупкой пакета сессий Eylem предлагает бесплатную 20-минутную консультацию — лично в студии во Врачаре или онлайн — чтобы обсудить ваши цели, историю тренировок и расписание. Вы получаете честное мнение о сроках и цене и двигаетесь дальше, только если программа подходит. Без давления и продающих сценариев."
    },
    "What if Eylem isn't the right fit after the first session?": {
      tr: "İlk seanstan sonra Eylem bana uygun gelmezse ne olur?",
      sr: "Šta ako se posle prve sesije ispostavi da Eylem nije pravi trener za mene?",
      ru: "Что если после первой сессии Eylem окажется не подходящим тренером?"
    },
    "Trainer-client chemistry matters. If the working style doesn't suit you after session one, just tell us — no awkwardness, no pressure. We either adjust the approach or point you toward a better fit elsewhere.": {
      tr: "Antrenör-danışan uyumu önemlidir. İlk seanstan sonra çalışma tarzı sana uymazsa, bize söylemen yeterli — gerginlik yok, baskı yok. Ya yaklaşımı düzenleriz ya da sana daha uygun bir yere yönlendiririz.",
      sr: "Hemija između trenera i klijenta je bitna. Ako ti stil rada ne odgovara posle prve sesije, samo nam kaži — bez nelagode, bez pritiska. Ili prilagodimo pristup, ili te uputimo nekome kome više odgovaraš.",
      ru: "Химия между тренером и клиентом важна. Если стиль работы не подошёл после первой сессии — просто скажите, без неловкости и давления. Мы либо подстроим подход, либо подскажем, к кому обратиться."
    },
    "How many sessions per week do I need?": {
      tr: "Haftada kaç seans gerekiyor?",
      sr: "Koliko sesija nedeljno mi je potrebno?",
      ru: "Сколько сессий в неделю мне нужно?"
    },
    "For fat loss or muscle building Eylem recommends 3–4 sessions per week. For general health and fitness, 2–3 sessions work well. We discuss the right cadence for your schedule and goals during the consultation.": {
      tr: "Yağ kaybı veya kas yapımı için Eylem haftada 3–4 seans öneriyor. Genel sağlık ve fitness için ise haftada 2–3 seans yeterli oluyor. Senin programına ve hedeflerine uygun doğru tempoyu görüşmede birlikte belirliyoruz.",
      sr: "Za gubitak masti ili izgradnju mišića Eylem preporučuje 3–4 sesije nedeljno. Za opšte zdravlje i kondiciju dovoljne su 2–3 sesije. Tačan ritam za tvoj raspored i ciljeve definišemo na konsultaciji.",
      ru: "Для снижения жира или набора мышц Eylem рекомендует 3–4 сессии в неделю. Для общего здоровья и формы хватает 2–3 сессий. Правильный ритм под ваше расписание и цели определяем на консультации."
    },
    "I have an injury — can I still train?": {
      tr: "Bir sakatlığım var — yine de antrenman yapabilir miyim?",
      sr: "Imam povredu — da li ipak mogu da treniram?",
      ru: "У меня травма — могу ли я тренироваться?"
    },
    "In most cases yes. Many clients train around chronic pain or are recovering from injuries. We design the programme to avoid loading the problematic area and often build exercises that actively support rehabilitation.": {
      tr: "Çoğu durumda evet. Birçok danışan kronik ağrıya rağmen antrenman yapıyor ya da sakatlıklardan toparlanıyor. Programı problemli bölgeyi yüklemekten kaçınacak şekilde tasarlıyoruz ve sıklıkla rehabilitasyonu aktif olarak destekleyen egzersizler ekliyoruz.",
      sr: "U većini slučajeva — da. Mnogi klijenti treniraju uz hroničan bol ili se oporavljaju od povreda. Dizajniramo program tako da izbegavamo opterećenje problematične oblasti, a često uključujemo vežbe koje aktivno podržavaju rehabilitaciju.",
      ru: "В большинстве случаев — да. Многие клиенты тренируются с хронической болью или восстанавливаются после травм. Мы составляем программу так, чтобы не нагружать проблемную зону, и часто добавляем упражнения, которые помогают реабилитации."
    },
    "How fast can I expect results with personal training?": {
      tr: "Personal training ile ne kadar hızlı sonuç alabilirim?",
      sr: "Koliko brzo mogu da očekujem rezultate uz personalni trening?",
      ru: "Как быстро можно ожидать результатов от персональных тренировок?"
    },
    "Most Eylem Tarhan clients see real changes — better body composition, more strength, visible fat loss — within 6 to 8 weeks of consistent 2-3 sessions per week. The rate depends on three things Eylem tracks every week: training intensity, recovery, and nutrition. If you follow the plan, measurable results in the first month are the norm rather than the exception.": {
      tr: "Çoğu Eylem Tarhan danışanı, haftada düzenli 2–3 seansla 6–8 hafta içinde gerçek değişimler görüyor: daha iyi vücut kompozisyonu, daha fazla kuvvet, gözle görülür yağ kaybı. Hız, Eylem'in her hafta takip ettiği üç şeye bağlı: antrenman yoğunluğu, toparlanma ve beslenme. Plana uyarsan, ilk ayda ölçülebilir sonuçlar istisna değil kural olur.",
      sr: "Većina Eylem Tarhan klijenata vidi stvarne promene — bolji sastav tela, veću snagu, vidljiv gubitak masti — u roku od 6 do 8 nedelja, uz dosledne 2–3 sesije nedeljno. Tempo zavisi od tri stvari koje Eylem prati nedeljno: intenzitet treninga, oporavak i ishrana. Ako pratiš plan, merljivi rezultati u prvom mesecu su pravilo, ne izuzetak.",
      ru: "Большинство клиентов Eylem Tarhan замечают реальные изменения — улучшение состава тела, рост силы, заметное снижение жира — за 6–8 недель при постоянных 2–3 сессиях в неделю. Скорость зависит от трёх вещей, которые Eylem отслеживает еженедельно: интенсивность тренировок, восстановление и питание. Если следовать плану, измеримые результаты в первый месяц — это правило, а не исключение."
    },
    "Do you offer online personal training programs?": {
      tr: "Online personal training programları sunuyor musun?",
      sr: "Da li nudite online personalne programe treninga?",
      ru: "Есть ли онлайн-программы персональных тренировок?"
    },
    "Yes. The €75 monthly online programme gives you a custom training plan delivered through an app, weekly check-ins with Eylem, and video form-checks on your lifts. The €125 plan adds a full nutrition plan built around your schedule and preferences. Both are 1-on-1 coaching — not generic templates — and you can start from anywhere in the world.": {
      tr: "Evet. Aylık €75'lik online program; bir uygulama üzerinden teslim edilen kişiye özel antrenman planını, Eylem ile haftalık görüşmeleri ve hareket tekniklerinin video üzerinden kontrolünü içeriyor. €125'lik plan ise programına ve tercihlerine göre kurulmuş tam bir beslenme planını da ekliyor. Her ikisi de birebir koçluk — genel şablonlar değil — ve dünyanın herhangi bir yerinden başlayabilirsin.",
      sr: "Da. Mesečni online program od €75 uključuje personalizovan plan treninga kroz aplikaciju, nedeljne provere s Petrom i video analize tehnike. Plan od €125 dodaje kompletan plan ishrane prilagođen tvom rasporedu i navikama. Oba su 1-na-1 coaching — ne generički šabloni — i možeš da počneš s bilo kog mesta u svetu.",
      ru: "Да. Месячная онлайн-программа за €75 включает индивидуальный план тренировок в приложении, еженедельные проверки с Eylem и видео-разбор техники. План за €125 добавляет полный план питания под ваше расписание и привычки. Оба — коучинг 1-на-1, а не шаблоны, и начать можно из любой точки мира."
    },
    "Is nutrition coaching included in the training plans?": {
      tr: "Beslenme koçluğu antrenman planlarına dahil mi?",
      sr: "Da li je savetovanje o ishrani uključeno u planove treninga?",
      ru: "Входит ли консультирование по питанию в планы тренировок?"
    },
    "Nutrition is included in the Training + Diet plan (€125 per month online, or added to in-person packages). You get a meal-structure that fits your routine, macronutrient targets based on your goal, grocery-list templates in English or Turkeyn, and weekly adjustments as your body responds. Eylem keeps the plan realistic — no extreme cuts, no complicated supplement stacks.": {
      tr: "Beslenme, Antrenman + Diyet planına dahildir (online aylık €125 veya yüz yüze paketlere eklenebilir). Rutinine uygun bir öğün yapısı, hedefine göre makronutrient hedefleri, İngilizce veya Türkçe market listesi şablonları ve vücudunun verdiği tepkiye göre haftalık düzenlemeler alırsın. Eylem planı gerçekçi tutar — aşırı kısıtlamalar yok, karmaşık takviye yığınları yok.",
      sr: "Ishrana je uključena u plan Trening + Ishrana (€125 mesečno online ili uz pakete uživo). Dobijaš strukturu obroka prilagođenu tvojoj rutini, makronutrijentske ciljeve prema tvom cilju, šablone lista za kupovinu na srpskom ili engleskom, i nedeljne korekcije kako tvoje telo reaguje. Eylem drži plan realnim — bez ekstremnih rezova, bez komplikovanih suplementacija.",
      ru: "Питание включено в план Тренировки + Питание (€125 в месяц онлайн или к очным пакетам). Вы получаете структуру приёмов пищи под ваш ритм, целевые макронутриенты под цель, шаблоны списков покупок на английском или сербском и еженедельные корректировки. Eylem делает план реалистичным — без экстремальных урезаний и сложных стеков добавок."
    },
    "Why choose a certified personal trainer in Yıldız, Ankara?": {
      tr: "Neden Yıldız, Ankara'da sertifikalı bir personal trainer seçmelisin?",
      sr: "Zašto izabrati sertifikovanog personalnog trenera u Yıldız, Ankara?",
      ru: "Почему стоит выбрать сертифицированного тренера во Врачаре, Анкара?"
    },
    "Training with Eylem at Eylem Tarhan in Yıldız gives you three things a regular gym cannot: a programme built for your body, a trainer who watches every rep, and a plan that evolves with your progress. Most clients come in with back pain, plateaued weight loss or stalled strength — and walk out in 3 months measurably stronger, leaner and confident in the gym. Ankara-central location, English and Turkeyn coaching, flexible schedule including online sessions.": {
      tr: "Yıldız'daki Eylem Tarhan'da Eylem ile antrenman yapmak, sıradan bir spor salonunun veremediği üç şeyi sana verir: vücudun için kurulmuş bir program, her tekrarı izleyen bir antrenör ve gelişiminle birlikte evrilen bir plan. Çoğu danışan sırt ağrısı, kilo verme platosu veya tıkanmış bir kuvvetle gelir — 3 ay sonra ölçülebilir biçimde daha güçlü, daha sıkı ve salonda kendine güvenen şekilde çıkar. Ankara'nın merkezinde konum, İngilizce ve Türkçe koçluk, online seanslar dahil esnek program.",
      sr: "Trening s Petrom u Eylem Tarhan-u u Yıldızu daje ti tri stvari koje obična teretana ne može: program napravljen za tvoje telo, trenera koji prati svaku repeticiju i plan koji se razvija sa tvojim napretkom. Većina klijenata dolazi s bolovima u leđima, zastojem u mršavljenju ili snagom koja stoji — a već za 3 meseca izlazi merljivo jači, lakši i siguran u teretani. Centralna lokacija u Ankarau, coaching na engleskom i srpskom, fleksibilan raspored uključujući online sesije.",
      ru: "Тренировки с Eylem в Eylem Tarhan во Врачаре дают три вещи, которых нет в обычном зале: программу под ваше тело, тренера, который следит за каждым повторением, и план, который развивается с вашим прогрессом. Большинство клиентов приходят с болями в спине, остановкой в похудении или застоем в силе — и через 3 месяца выходят заметно сильнее, стройнее и увереннее в зале. Центральная локация в Анкаре, коучинг на английском и сербском, гибкое расписание, включая онлайн-сессии."
    },
    "What does a typical week of online coaching look like?": {
      tr: "Tipik bir online koçluk haftası nasıl geçiyor?",
      sr: "Kako izgleda tipična nedelja online coaching-a?",
      ru: "Как выглядит типичная неделя онлайн-коучинга?"
    },
    "Each week you receive your training and meal plan. After every session you log weights, sets and reps in the app. At the end of the week you send photos and measurements; Eylem reviews the data and adjusts the following week accordingly.": {
      tr: "Her hafta antrenman ve beslenme planını alıyorsun. Her seanstan sonra ağırlıkları, setleri ve tekrarları uygulamaya kaydediyorsun. Hafta sonunda fotoğraf ve ölçü gönderiyorsun; Eylem verileri inceleyip bir sonraki haftayı buna göre düzenliyor.",
      sr: "Svake nedelje dobijaš plan treninga i ishrane. Posle svake sesije beležiš kilažu, serije i ponavljanja u aplikaciji. Na kraju nedelje šalješ fotografije i mere; Eylem pregleda podatke i prilagođava sledeću nedelju.",
      ru: "Каждую неделю вы получаете план тренировок и питания. После каждой сессии вносите веса, подходы и повторения в приложение. В конце недели отправляете фото и замеры; Eylem анализирует данные и корректирует следующую неделю."
    },
    "I'm not in Turkey — can I still use online coaching?": {
      tr: "Türkiye'de değilim — yine de online koçluğu kullanabilir miyim?",
      sr: "Nisam u Srbiji — mogu li da koristim online coaching?",
      ru: "Я не в Турции — можно ли заниматься онлайн?"
    },
    "Absolutely. Online coaching was built exactly for this. It works seamlessly across time zones — communication happens through the app or WhatsApp, fast, clear and consistent.": {
      tr: "Kesinlikle. Online koçluk tam olarak bunun için tasarlandı. Zaman dilimleri arasında sorunsuz işliyor — iletişim uygulama veya WhatsApp üzerinden hızlı, net ve istikrarlı şekilde yürüyor.",
      sr: "Apsolutno. Online coaching je upravo za to napravljen. Besprekorno radi kroz vremenske zone — komunikacija ide preko aplikacije ili WhatsApp-a, brzo, jasno i dosledno.",
      ru: "Конечно. Онлайн-коучинг для этого и создан. Он отлично работает в любых часовых поясах — общение идёт через приложение или WhatsApp: быстро, чётко и стабильно."
    },
    "Do I need a gym, or can I train at home?": {
      tr: "Salona ihtiyacım var mı, evde de antrenman yapabilir miyim?",
      sr: "Da li mi treba teretana ili mogu da treniram kod kuće?",
      ru: "Нужен ли зал, или можно тренироваться дома?"
    },
    "Either works. When you sign up, you tell us what equipment you have — dumbbells, resistance bands, bodyweight only, or a fully equipped gym — and Eylem builds the programme exclusively around that. A gym membership is never a requirement.": {
      tr: "İkisi de işe yarıyor. Kayıt olduğunda bize hangi ekipmanın olduğunu söylüyorsun — dambıl, direnç bandı, sadece vücut ağırlığı ya da tam donanımlı bir salon — ve Eylem programı yalnızca buna göre kuruyor. Salon üyeliği hiçbir zaman zorunlu değil.",
      sr: "Oboje funkcioniše. Kada se prijaviš, kažeš nam koju opremu imaš — bučice, gumene trake, samo sopstvenu težinu ili potpuno opremljenu teretanu — i Eylem gradi program isključivo oko toga. Članarina u teretani nikada nije uslov.",
      ru: "Оба варианта подходят. При записи вы указываете, какое оборудование у вас есть — гантели, резинки, только собственный вес или полностью оборудованный зал — и Eylem строит программу исключительно под это. Абонемент в зал не обязателен."
    },
    "How much time does tracking take each day?": {
      tr: "Günde takip ne kadar zaman alıyor?",
      sr: "Koliko vremena dnevno oduzima praćenje?",
      ru: "Сколько времени в день занимает трекинг?"
    },
    "About 5–10 minutes a day. Log what you ate and what you did in your session — that's all it takes. It feels like extra effort the first week, then it becomes part of the routine.": {
      tr: "Günde yaklaşık 5–10 dakika. Ne yediğini ve seansta ne yaptığını kaydetmen yeterli — hepsi bu. İlk hafta ek bir efor gibi geliyor, sonra rutinin parçası oluyor.",
      sr: "Oko 5–10 minuta dnevno. Upiši šta si jeo i šta si uradio na treningu — to je sve. Prve nedelje deluje kao dodatni trud, onda postane deo rutine.",
      ru: "Около 5–10 минут в день. Записывайте, что ели и что делали на тренировке — этого достаточно. В первую неделю кажется лишним усилием, потом становится частью рутины."
    },
    "Do I have to count every single calorie?": {
      tr: "Her bir kaloriyi saymam şart mı?",
      sr: "Da li moram da brojim svaku kaloriju?",
      ru: "Нужно ли считать каждую калорию?"
    },
    "Not necessarily. Some clients do precise macro tracking; others focus on healthy eating principles without obsessive counting. Eylem adapts the approach to your personality and goals.": {
      tr: "Şart değil. Bazı danışanlar hassas makro takibi yapıyor; bazıları ise takıntılı sayım yapmadan sağlıklı beslenme ilkelerine odaklanıyor. Eylem yaklaşımı senin kişiliğine ve hedeflerine göre uyarlıyor.",
      sr: "Ne obavezno. Neki klijenti precizno prate makroe; drugi se fokusiraju na principe zdrave ishrane bez opsesivnog brojanja. Eylem prilagođava pristup tvojoj ličnosti i ciljevima.",
      ru: "Необязательно. Кто-то точно считает макросы, кто-то придерживается принципов здорового питания без навязчивого подсчёта. Eylem подстраивает подход под вашу личность и цели."
    },
    "What if I miss a session or fall off the diet?": {
      tr: "Bir seansı kaçırırsam ya da diyetten saparsam ne olur?",
      sr: "Šta ako propustim sesiju ili odstupim od ishrane?",
      ru: "Что если я пропущу тренировку или сорвусь с плана питания?"
    },
    "No big deal — it's part of the process. We don't punish, we analyse. We look at why it happened and how to prevent it next time. Transparency is the key, not perfection.": {
      tr: "Sorun değil — bu da sürecin parçası. Cezalandırmayız, analiz ederiz. Neden olduğuna ve bir sonraki sefere nasıl önleneceğine bakarız. Anahtar mükemmellik değil, şeffaflıktır.",
      sr: "Nije veliki problem — to je deo procesa. Ne kažnjavamo, analiziramo. Gledamo zašto se desilo i kako da sledeći put sprečimo. Transparentnost je ključ, ne savršenstvo.",
      ru: "Ничего страшного — это часть процесса. Мы не наказываем, а анализируем. Смотрим, почему так вышло и как предотвратить это в следующий раз. Ключ — прозрачность, а не идеал."
    },
    "How does payment work?": {
      tr: "Ödeme nasıl işliyor?",
      sr: "Kako funkcioniše plaćanje?",
      ru: "Как работает оплата?"
    },
    "Monthly or by package. During the initial consultation we walk through all options and find the one that suits your needs. No long-term contracts from day one.": {
      tr: "Aylık ya da paket bazlı. İlk görüşmede tüm seçenekleri birlikte gözden geçirip ihtiyacına en uygununu buluyoruz. İlk günden uzun vadeli sözleşme yok.",
      sr: "Mesečno ili po paketu. Na inicijalnoj konsultaciji prolazimo kroz sve opcije i pronalazimo onu koja ti odgovara. Bez dugoročnih ugovora od prvog dana.",
      ru: "Ежемесячно или пакетом. На первой консультации мы проходим по всем вариантам и выбираем подходящий вам. Никаких долгосрочных контрактов с первого дня."
    },
    "What if I need to cancel a session?": {
      tr: "Bir seansı iptal etmem gerekirse ne olur?",
      sr: "Šta ako treba da otkažem sesiju?",
      ru: "Что если нужно отменить сессию?"
    },
    "We ask for at least 24 hours notice. Sessions cancelled on time can be rescheduled at no cost. Late cancellations (under 24h) follow the cancellation policy in your agreement.": {
      tr: "En az 24 saat önceden haber vermeni rica ediyoruz. Zamanında iptal edilen seanslar ücretsiz olarak yeniden planlanır. Geç iptaller (24 saatin altı) sözleşmendeki iptal politikasına tabidir.",
      sr: "Molimo te da nas obavestiš najmanje 24 sata unapred. Sesije otkazane na vreme zakazujemo bez dodatnih troškova. Kasna otkazivanja (manje od 24h) podležu pravilima otkazivanja iz tvog ugovora.",
      ru: "Просим уведомить минимум за 24 часа. Вовремя отменённые сессии переносим без доплат. Поздние отмены (менее 24 ч) — по условиям отмены из договора."
    },
    "Can I pause my program?": {
      tr: "Programımı duraklatabilir miyim?",
      sr: "Da li mogu da pauziram svoj program?",
      ru: "Можно ли поставить программу на паузу?"
    },
    "Yes. Life happens — illness, travel, work. If you request a pause in advance, we adjust your programme with no loss of paid sessions.": {
      tr: "Evet. Hayatta her şey olabilir — hastalık, seyahat, iş. Önceden duraklatma talep edersen ödenmiş seanslarını kaybetmeden programını düzenleriz.",
      sr: "Da. Život se dešava — bolest, putovanja, posao. Ako zatražiš pauzu unapred, prilagodićemo program bez gubitka plaćenih sesija.",
      ru: "Да. Бывают болезни, поездки, работа. Если запросите паузу заранее, мы скорректируем программу без потери оплаченных сессий."
    },

    // ============================================================
    // strength-training.html
    // ============================================================
    "What is Strength Training?": {
      tr: "Kuvvet Antrenmanı Nedir?",
      sr: "Šta je Trening Snage?",
      ru: "Что такое силовые тренировки?"
    },
    "Strength training is the foundation of every great physique and every lasting result. It's a smart, progressive way of loading your muscles with resistance — barbells, dumbbells, kettlebells, cables, machines, or your own bodyweight — so they adapt, grow, and get stronger. In my sessions we work compound lifts like squats, deadlifts, presses, and rows alongside focused accessory work, so you build muscle, burn fat, and move better in everyday life. Whether you're new to the gym or chasing serious gains, I'll program every rep around your body, your goals, and how you actually feel that day.": {
      tr: "Kuvvet antrenmanı, her güzel fiziğin ve her kalıcı sonucun temelidir. Kaslarına direnç yükleyerek — barbell, dambıl, kettlebell, kablo, makine veya kendi vücut ağırlığınla — onları adapte etmenin, büyütmenin ve güçlendirmenin akıllı, kademeli yoludur. Seanslarımda squat, deadlift, press ve row gibi bileşik hareketleri odaklı yardımcı çalışmalarla birlikte yapıyoruz; böylece kas yapıyor, yağ yakıyor ve günlük hayatta daha iyi hareket ediyorsun. İster salonda yenisin ister ciddi kazanımların peşindesin, her tekrarı vücuduna, hedeflerine ve o gün gerçekten nasıl hissettiğine göre programlıyorum.",
      sr: "Trening snage je temelj svakog dobrog tela i svakog trajnog rezultata. To je pametan, progresivan način opterećenja mišića otporom — šipkama, bučicama, kettlebellovima, kablovima, spravama ili sopstvenom težinom — kako bi se prilagodili, rasli i postali jači. Na mojim sesijama radimo kompleksne vežbe poput čučnja, mrtvog dizanja, potiska i veslanja, uz fokusiran dodatni rad, da izgradiš mišićnu masu, sagoriš masti i bolje se krećeš u svakodnevnom životu. Bio si nov u teretani ili juriš ozbiljne rezultate, svaku ponavljanje programiram prema tvom telu, ciljevima i tome kako se zaista osećaš tog dana.",
      ru: "Силовые тренировки — это фундамент каждого красивого тела и долговременного результата. Это умный, прогрессивный способ нагружать мышцы сопротивлением — штангой, гантелями, гирями, блоками, тренажёрами или собственным весом — чтобы они адаптировались, росли и становились сильнее. На моих занятиях мы делаем базовые упражнения — приседания, становую тягу, жимы, тяги — плюс целенаправленную вспомогательную работу, чтобы ты рос в мышцах, сжигал жир и двигался лучше в обычной жизни. Новичок ты или гонишься за серьёзным прогрессом, я программирую каждый повтор под твоё тело, твои цели и то, как ты реально чувствуешь себя в этот день."
    },
    "BUILD REAL, FUNCTIONAL STRENGTH:": {
      tr: "GERÇEK, FONKSİYONEL KUVVET KAZAN:",
      sr: "IZGRADI STVARNU, FUNKCIONALNU SNAGU:",
      ru: "НАСТОЯЩАЯ, ФУНКЦИОНАЛЬНАЯ СИЛА:"
    },
    "Strength training teaches your body to produce force safely and efficiently. You'll lift heavier week after week, move more powerfully, and handle everyday tasks — stairs, groceries, sport, kids — with zero effort and no aches afterward.": {
      tr: "Kuvvet antrenmanı vücuduna güvenli ve verimli biçimde kuvvet üretmeyi öğretir. Her hafta daha ağır kaldıracak, daha güçlü hareket edecek ve gündelik işleri — merdiven, alışveriş torbaları, spor, çocuklar — sıfır eforla ve sonrasında ağrısız halledeceksin.",
      sr: "Trening snage uči tvoje telo da proizvodi silu bezbedno i efikasno. Dizaćeš teže iz nedelje u nedelju, kretati se snažnije i obavljati svakodnevne zadatke — stepenice, kese, sport, decu — bez napora i bez bolova nakon.",
      ru: "Силовые тренировки учат тело производить силу безопасно и эффективно. Неделя за неделей ты поднимаешь больше, движешься мощнее и справляешься с повседневными задачами — лестница, сумки, спорт, дети — без усилий и без болей после."
    },
    "MORE MUSCLE, LESS FAT:": {
      tr: "DAHA ÇOK KAS, DAHA AZ YAĞ:",
      sr: "VIŠE MIŠIĆA, MANJE MASTI:",
      ru: "БОЛЬШЕ МЫШЦ, МЕНЬШЕ ЖИРА:"
    },
    "Lifting builds lean muscle, and more muscle means a higher metabolism around the clock. You keep burning calories long after you leave the gym, your body composition shifts fast, and the results actually stick — because muscle is what shapes you.": {
      tr: "Ağırlık çalışmak yağsız kas inşa eder ve daha fazla kas, gün boyu daha hızlı bir metabolizma demektir. Salondan çıktıktan çok sonra bile kalori yakmaya devam edersin, vücut kompozisyonun hızla değişir ve sonuçlar gerçekten kalıcı olur — çünkü seni şekillendiren şey kasın.",
      sr: "Dizanje gradi čistu mišićnu masu, a više mišića znači brži metabolizam 24/7. Kalorije sagorevaš još dugo nakon izlaska iz teretane, sastav tela se menja brzo, a rezultati zaista ostaju — jer te mišići oblikuju.",
      ru: "Тренировки строят сухую мышечную массу, а больше мышц — это ускоренный метаболизм круглые сутки. Ты сжигаешь калории ещё долго после зала, состав тела меняется быстро, а результаты реально держатся — ведь форму тебе придают именно мышцы."
    },
    "STRONGER BONES AND JOINTS:": {
      tr: "DAHA GÜÇLÜ KEMİKLER VE EKLEMLER:",
      sr: "JAČE KOSTI I ZGLOBOVI:",
      ru: "КРЕПКИЕ КОСТИ И СУСТАВЫ:"
    },
    "Progressive resistance stimulates bone density and reinforces the tendons and ligaments around every joint. It's your best insurance against injury, back pain, and the effects of age — so you keep training hard for decades, not months.": {
      tr: "Kademeli direnç kemik yoğunluğunu uyarır ve her eklemin etrafındaki tendon ve bağları güçlendirir. Sakatlanmaya, sırt ağrısına ve yaşlanmanın etkilerine karşı en iyi sigortandır — böylece aylar değil onlarca yıl sıkı antrenman yapmaya devam edersin.",
      sr: "Progresivan otpor stimuliše gustinu kostiju i jača tetive i ligamente oko svakog zgloba. To je najbolje osiguranje protiv povreda, bolova u leđima i efekata starenja — tako treniraš snažno decenijama, ne mesecima.",
      ru: "Прогрессивное сопротивление стимулирует плотность костей и укрепляет сухожилия и связки вокруг каждого сустава. Это твоя лучшая страховка от травм, боли в спине и возрастных изменений — так ты тренируешься всерьёз десятилетиями, а не месяцами."
    },
    "CONFIDENCE BEYOND THE GYM:": {
      tr: "SALONUN ÖTESİNDE ÖZGÜVEN:",
      sr: "SAMOPOUZDANJE VAN TERETANE:",
      ru: "УВЕРЕННОСТЬ ЗА ПРЕДЕЛАМИ ЗАЛА:"
    },
    "Adding weight to the bar week after week is proof you can do hard things. That confidence follows you out of the studio — into work, into sport, into how you carry yourself — and it's honestly the part my clients tell me they love the most.": {
      tr: "Bara her hafta ağırlık eklemek, zor şeyleri yapabildiğinin kanıtıdır. Bu özgüven seninle stüdyodan dışarı taşar — işine, sporuna, kendini taşıyışına — ve danışanlarımın bana en çok sevdikleri kısım olarak söyledikleri şey, dürüstçe budur.",
      sr: "Dodavanje težine na šipku iz nedelje u nedelju je dokaz da možeš da radiš teške stvari. To samopouzdanje te prati i van studija — na posao, u sport, u način na koji se držiš — i iskreno, to je deo koji mi klijenti kažu da vole najviše.",
      ru: "Каждую неделю добавляя вес на штангу, ты доказываешь, что способен на сложное. Эта уверенность выходит из зала вместе с тобой — на работу, в спорт, в то, как ты держишь себя — и честно, клиенты говорят, что именно это они любят больше всего."
    },

    // ============================================================
    // body-transformation.html
    // ============================================================
    "WHAT IS BODY TRANSFORMATION AND WHY IT MATTERS?": {
      tr: "VÜCUT DÖNÜŞÜMÜ NEDİR VE NEDEN ÖNEMLİDİR?",
      sr: "ŠTA JE TRANSFORMACIJA TELA I ZAŠTO JE VAŽNA?",
      ru: "ЧТО ТАКОЕ ТРАНСФОРМАЦИЯ ТЕЛА И ПОЧЕМУ ЭТО ВАЖНО?"
    },
    "A real body transformation isn't a 30-day challenge or a crash diet — it's a structured 1-on-1 program built around you. We combine progressive strength training, smart conditioning, and honest nutrition guidance so your body composition, energy, and confidence all change together. I track your progress session by session, adjust the plan as your body adapts, and hold you accountable when motivation dips. The result is a stronger, leaner version of you that actually stays that way.": {
      tr: "Gerçek bir vücut dönüşümü 30 günlük bir meydan okuma veya şok diyet değildir — sana göre kurulmuş yapılandırılmış birebir bir programdır. Kademeli kuvvet antrenmanını, akıllı kondisyonu ve dürüst beslenme rehberliğini birleştiriyoruz; böylece vücut kompozisyonun, enerjin ve özgüvenin birlikte değişiyor. Gelişimini seans seans takip ediyorum, vücudun adapte oldukça planı düzenliyorum ve motivasyonun düştüğünde seni sorumlu tutuyorum. Sonuç; gerçekten öyle kalan, daha güçlü ve daha sıkı bir sen.",
      sr: "Prava transformacija tela nije izazov od 30 dana ni brza dijeta — to je strukturiran 1-na-1 program napravljen za tebe. Kombinujemo progresivan trening snage, pametno kondicioniranje i iskrene savete o ishrani, tako da se sastav tela, energija i samopouzdanje menjaju zajedno. Pratim tvoj napredak sesiju po sesiju, prilagođavam plan dok se telo menja i držim te odgovornim kada motivacija oslabi. Rezultat je snažnija, čvršća verzija tebe — koja zaista ostaje takva.",
      ru: "Настоящая трансформация тела — это не челлендж на 30 дней и не жёсткая диета. Это структурная программа 1-на-1, построенная под тебя. Мы соединяем прогрессивные силовые тренировки, умное кондиционирование и честные рекомендации по питанию — чтобы менялись состав тела, энергия и уверенность одновременно. Я отслеживаю прогресс от сессии к сессии, корректирую план по мере того, как тело адаптируется, и держу тебя в тонусе, когда мотивация падает. Результат — более сильная, подтянутая версия тебя, которая действительно остаётся."
    },
    "WHO IS IT FOR?": {
      tr: "KİMLER İÇİN?",
      sr: "ZA KOGA JE?",
      ru: "ДЛЯ КОГО ЭТО?"
    },
    "Anyone who wants visible, lasting change — whether you're 10+ kg over where you want to be, starting fitness for the first time, rebuilding after a long break, or a busy professional who just needs structure and a plan that works. I adapt the program to your level, your schedule, and your life — not the other way around.": {
      tr: "Görünür ve kalıcı değişim isteyen herkes — hedef kilonun 10+ kg üzerinde olsan da, fitness'a ilk kez başlıyor olsan da, uzun bir aradan sonra yeniden inşa ediyor olsan da, sadece düzene ve işe yarayan bir plana ihtiyaç duyan yoğun bir profesyonel olsan da. Programı senin seviyene, programına ve hayatına uyarlıyorum — tersi değil.",
      sr: "Svako ko želi vidljivu, trajnu promenu — imao 10+ kg viška od cilja, krenuo sa fitnesom prvi put, vraćao se nakon duže pauze ili bio zauzet profesionalac kome treba struktura i plan koji radi. Program prilagođavam tvom nivou, rasporedu i životu — a ne obrnuto.",
      ru: "Любой, кому нужны заметные, устойчивые изменения — будь ты на 10+ кг выше цели, только начинаешь тренироваться, возвращаешься после долгого перерыва или ты занятой профессионал, которому нужны структура и работающий план. Я подстраиваю программу под твой уровень, график и жизнь — а не наоборот."
    },
    "HOW IT WORKS:": {
      tr: "NASIL ÇALIŞIYOR:",
      sr: "KAKO FUNKCIONIŠE:",
      ru: "КАК ЭТО РАБОТАЕТ:"
    },
    "Every transformation starts with an honest assessment — body composition, movement, lifestyle, nutrition habits. From there I build your training plan, give you simple nutrition targets you can actually live with, and we check in every week to review progress, adjust, and keep the momentum. Expect real conversations, clear feedback, and small wins that stack up fast.": {
      tr: "Her dönüşüm dürüst bir değerlendirmeyle başlar — vücut kompozisyonu, hareket, yaşam tarzı, beslenme alışkanlıkları. Oradan antrenman planını kuruyorum, gerçekten yaşayabileceğin basit beslenme hedefleri veriyorum ve her hafta gelişimi gözden geçirip plana ince ayar yaparak ivmeyi koruyoruz. Gerçek konuşmalar, net geri bildirim ve hızla üst üste binen küçük zaferler bekle.",
      sr: "Svaka transformacija počinje iskrenom procenom — sastav tela, pokret, stil života, navike u ishrani. Zatim pravim tvoj plan treninga, dajem ti jednostavne ciljeve ishrane sa kojima zaista možeš da živiš, i svake nedelje pratimo napredak, prilagođavamo i održavamo tempo. Očekuj iskrene razgovore, jasnu povratnu informaciju i male pobede koje se brzo nižu.",
      ru: "Каждая трансформация начинается с честной оценки — состав тела, движение, образ жизни, привычки в питании. Дальше я строю твой тренировочный план, даю простые цели по питанию, с которыми реально можно жить, и каждую неделю мы сверяемся, корректируем и поддерживаем темп. Жди честных разговоров, ясной обратной связи и маленьких побед, которые быстро складываются в большую."
    },
    "READY TO TRANSFORM?": {
      tr: "DÖNÜŞMEYE HAZIR MISIN?",
      sr: "SPREMAN ZA TRANSFORMACIJU?",
      ru: "ГОТОВ К ТРАНСФОРМАЦИИ?"
    },
    "If you've tried programs that didn't stick, let's do this differently. Personal coaching, clear steps, and someone in your corner every single week. Book a consultation and we'll map out your transformation together — from where you are today to the version of you that you actually want to be.": {
      tr: "Tutmayan programlar denediysen, hadi bunu farklı yapalım. Kişisel koçluk, net adımlar ve her hafta senin köşende biri. Bir görüşme rezervasyonu yap, dönüşümünü birlikte haritalayalım — bugün olduğun yerden gerçekten olmak istediğin sen versiyonuna kadar.",
      sr: "Ako si probao programe koji nisu izdržali, hajde da radimo drugačije. Lični koučing, jasni koraci i neko ko je uz tebe svake nedelje. Zakaži konsultaciju i zajedno mapiramo tvoju transformaciju — od tačke gde si danas do verzije sebe kakvu stvarno želiš.",
      ru: "Если ты пробовал программы, которые не приживались — давай сделаем иначе. Персональный коучинг, чёткие шаги и человек рядом с тобой каждую неделю. Запишись на консультацию — и мы вместе составим карту твоей трансформации: от того, где ты сегодня, к той версии себя, которой ты действительно хочешь быть."
    },
    "WHAT'S IN YOUR TRANSFORMATION PROGRAM:": {
      tr: "DÖNÜŞÜM PROGRAMINDA NELER VAR:",
      sr: "ŠTA JE U TVOM PROGRAMU TRANSFORMACIJE:",
      ru: "ЧТО ВХОДИТ В ТВОЮ ПРОГРАММУ ТРАНСФОРМАЦИИ:"
    },
    "Compound Lifts (Squat, Deadlift, Press, Row)": {
      tr: "Bileşik hareketler (Squat, Deadlift, Press, Row)",
      sr: "Kompleksne vežbe (Čučanj, Mrtvo dizanje, Potisak, Veslanje)",
      ru: "Базовые упражнения (присед, становая, жим, тяга)"
    },
    "Kettlebell Complexes": { tr: "Kettlebell kompleksleri", sr: "Kettlebell kompleksi", ru: "Комплексы с гирями" },
    "HIIT Conditioning": { tr: "HIIT kondisyon", sr: "HIIT kondicioniranje", ru: "HIIT-кондиция" },
    "Metabolic Finishers": { tr: "Metabolik finisher'lar", sr: "Metabolički finišeri", ru: "Метаболические финишеры" },
    "Cable & Machine Work": { tr: "Kablo ve makine çalışması", sr: "Rad na kablovima i spravama", ru: "Работа на блоках и тренажёрах" },
    "Core & Stability": { tr: "Core ve stabilite", sr: "Jezgro i stabilnost", ru: "Кор и стабилизация" },
    "Mobility & Warm-Up Drills": { tr: "Mobilite ve ısınma drilleri", sr: "Mobilnost i drilovi za zagrevanje", ru: "Мобилити и разминочные дриллы" },
    "Body Composition Assessment": { tr: "Vücut kompozisyonu değerlendirmesi", sr: "Procena sastava tela", ru: "Оценка состава тела" },
    "Nutrition Coaching": { tr: "Beslenme koçluğu", sr: "Koučing ishrane", ru: "Коучинг по питанию" },
    "Weekly Progress Tracking": { tr: "Haftalık gelişim takibi", sr: "Nedeljno praćenje napretka", ru: "Еженедельный трекинг прогресса" },
    "1-on-1 Check-Ins": { tr: "Birebir görüşmeler", sr: "1-na-1 nedeljne provere", ru: "Индивидуальные чек-ины 1-на-1" },
    "Accountability & Plan Adjustments": { tr: "Sorumluluk ve plan düzenlemeleri", sr: "Odgovornost i prilagođavanje plana", ru: "Подотчётность и корректировки плана" },
    "Recovery & Sleep Guidance": { tr: "Toparlanma ve uyku rehberliği", sr: "Saveti za oporavak i san", ru: "Рекомендации по восстановлению и сну" },
    "Realistic Meal Planning": { tr: "Gerçekçi öğün planlaması", sr: "Realno planiranje obroka", ru: "Реалистичное планирование приёмов пищи" },
    "Hydration & Supplement Advice": { tr: "Hidrasyon ve takviye önerileri", sr: "Saveti za hidrataciju i suplemente", ru: "Советы по гидратации и добавкам" },
    "Posture & Movement Coaching": { tr: "Postür ve hareket koçluğu", sr: "Koučing držanja i pokreta", ru: "Коучинг осанки и движения" },
    "Cardio Programming": { tr: "Kardiyo programlama", sr: "Programiranje kardija", ru: "Программирование кардио" },
    "Resistance Band Work": { tr: "Direnç bandı çalışması", sr: "Rad sa elastičnim trakama", ru: "Работа с резиновыми лентами" },
    "Bodyweight Progressions": { tr: "Vücut ağırlığı progresyonları", sr: "Progresije sa sopstvenom težinom", ru: "Прогрессии с собственным весом" },
    "Long-Term Lifestyle Strategy": { tr: "Uzun vadeli yaşam stratejisi", sr: "Dugoročna životna strategija", ru: "Долгосрочная стратегия образа жизни" },

    // ============================================================
    // weight-loss-coaching.html
    // ============================================================
    "What is Weight Loss Coaching?": {
      tr: "Kilo Verme Koçluğu Nedir?",
      sr: "Šta je Koučing za Mršavljenje?",
      ru: "Что такое коучинг по снижению веса?"
    },
    "Weight loss coaching is a guided, 1-on-1 program built to get you lean the right way — and keep you that way. I pair smart training with simple nutrition principles you can actually stick to, so fat loss becomes a result of your lifestyle, not a battle against it. I measure what matters — body composition, energy, habits — and adjust your plan every week based on how your body responds. No crash diets. No quick fixes. No starving yourself. Just a clear path, steady progress, and someone who holds you accountable until the weight is gone for good.": {
      tr: "Kilo verme koçluğu; seni doğru yoldan zayıflatmak ve öyle tutmak için kurulmuş yönlendirilmiş, birebir bir programdır. Akıllı antrenmanı gerçekten uyabileceğin basit beslenme ilkeleriyle eşleştiriyorum; böylece yağ kaybı yaşam tarzına karşı bir savaş değil, yaşam tarzının sonucu haline geliyor. Önemli olanı ölçüyorum — vücut kompozisyonu, enerji, alışkanlıklar — ve vücudunun verdiği tepkiye göre planı her hafta düzenliyorum. Şok diyet yok. Hızlı çözüm yok. Aç kalmak yok. Sadece net bir yol, istikrarlı ilerleme ve kilolar tamamen gidene kadar seni sorumlu tutan biri.",
      sr: "Koučing za mršavljenje je vođen 1-na-1 program napravljen da te dovede u formu na pravi način — i tamo te zadrži. Kombinujem pametan trening sa jednostavnim principima ishrane kojih zaista možeš da se držiš, tako da gubitak masti postaje rezultat tvog životnog stila, a ne bitka protiv njega. Merim ono što je važno — sastav tela, energiju, navike — i svake nedelje prilagođavam tvoj plan prema tome kako telo reaguje. Bez crash dijeta. Bez brzih rešenja. Bez gladovanja. Samo jasan put, stabilan napredak i neko ko te drži odgovornim dok kilogrami ne odu za stalno.",
      ru: "Коучинг по снижению веса — это ведомая программа 1-на-1, созданная, чтобы привести тебя в форму правильно — и удержать в ней. Я соединяю умные тренировки с простыми принципами питания, которых реально можно придерживаться, чтобы похудение стало результатом твоего образа жизни, а не борьбой с ним. Я измеряю то, что действительно важно — состав тела, энергию, привычки — и каждую неделю корректирую план по реакции твоего тела. Никаких жёстких диет. Никаких быстрых решений. Никакого голодания. Только ясный путь, стабильный прогресс и человек, который держит тебя в ответственности, пока вес не уйдёт навсегда."
    },
    "A PLAN BUILT FOR YOUR BODY:": {
      tr: "VÜCUDUN İÇİN KURULMUŞ BİR PLAN:",
      sr: "PLAN NAPRAVLJEN ZA TVOJE TELO:",
      ru: "ПЛАН ПОД ТВОЁ ТЕЛО:"
    },
    "Every body burns fat at a different rate. I assess your current baseline — weight, body composition, activity level, eating habits, sleep, stress — and build a training and nutrition plan around you, not a generic template. Everything is personal, adjustable, and designed to fit the life you actually live.": {
      tr: "Her vücut yağı farklı hızla yakar. Mevcut başlangıç noktanı — kilo, vücut kompozisyonu, aktivite düzeyi, beslenme alışkanlıkları, uyku, stres — değerlendiriyor ve antrenman ile beslenme planını sana göre kuruyorum, genel bir şablona göre değil. Her şey kişiseldir, ayarlanabilirdir ve gerçekten yaşadığın hayata uyacak şekilde tasarlanmıştır.",
      sr: "Svako telo sagoreva masti drugačijim tempom. Procenjujem tvoju trenutnu bazu — težinu, sastav tela, nivo aktivnosti, navike u ishrani, san, stres — i gradim plan treninga i ishrane oko tebe, ne po generičkom šablonu. Sve je lično, prilagodljivo i napravljeno da se uklopi u život koji zaista živiš.",
      ru: "Каждое тело сжигает жир со своей скоростью. Я оцениваю твою отправную точку — вес, состав тела, уровень активности, пищевые привычки, сон, стресс — и строю план тренировок и питания вокруг тебя, а не по шаблону. Всё индивидуально, адаптируемо и сделано под ту жизнь, которой ты реально живёшь."
    },
    "NUTRITION WITHOUT THE MYTHS:": {
      tr: "MİTLER OLMADAN BESLENME:",
      sr: "ISHRANA BEZ MITOVA:",
      ru: "ПИТАНИЕ БЕЗ МИФОВ:"
    },
    "Forget detoxes, zero-carb diets, and 800-calorie plans. You'll learn a simple, sustainable way to eat — balanced protein, smart carbs, real food — that fits your schedule and keeps the weight coming off week after week. No food is off-limits, and every meal still feels like yours.": {
      tr: "Detoksu, sıfır karbonhidrat diyetlerini ve 800 kalorilik planları unut. Programına uyan ve haftadan haftaya kilo vermeyi sürdüren basit, sürdürülebilir bir beslenme şeklini öğreneceksin — dengeli protein, akıllı karbonhidratlar, gerçek yiyecek. Hiçbir besin yasak değil ve her öğün hâlâ sana ait gibi hissettiriyor.",
      sr: "Zaboravi detoks, dijete bez ugljenih hidrata i planove od 800 kalorija. Naučićeš jednostavan, održiv način ishrane — uravnotežen protein, pametni ugljeni hidrati, prava hrana — koji se uklapa u tvoj raspored i nastavlja da ti skida kilograme iz nedelje u nedelju. Nijedna hrana nije zabranjena, a svaki obrok i dalje deluje kao tvoj.",
      ru: "Забудь про детоксы, безуглеводки и планы на 800 калорий. Ты научишься простому, устойчивому способу есть — сбалансированный белок, умные углеводы, настоящая еда — который вписывается в твой график и каждую неделю продолжает снимать вес. Никакая еда не под запретом, и каждый приём пищи по-прежнему твой."
    },
    "TRAINING THAT BURNS AND BUILDS:": {
      tr: "YAKAN VE İNŞA EDEN ANTRENMAN:",
      sr: "TRENING KOJI SAGOREVA I GRADI:",
      ru: "ТРЕНИРОВКА, КОТОРАЯ СЖИГАЕТ И СТРОИТ:"
    },
    "Cardio alone shrinks you. My combination of strength work, conditioning, and targeted fat-loss sessions reshapes you — you lose fat while keeping (and often building) muscle, so the body underneath looks as good as the number on the scale. You don't just get smaller; you get better.": {
      tr: "Tek başına kardiyo seni sadece küçültür. Kuvvet çalışması, kondisyon ve hedefli yağ kaybı seanslarından oluşan kombinasyonum seni yeniden şekillendirir — kasını koruyarak (çoğunlukla da inşa ederek) yağ kaybedersin, böylece kıyafetin altındaki vücut tartının üzerindeki rakam kadar iyi görünür. Sadece küçülmüyorsun; iyileşiyorsun.",
      sr: "Samo kardio te smanjuje. Moja kombinacija treninga snage, kondicioniranja i ciljanih sesija za gubitak masti te preoblikuje — gubiš masti uz zadržavanje (a često i rast) mišića, pa telo ispod izgleda isto tako dobro kao brojka na vagi. Ne postaješ samo manji; postaješ bolji.",
      ru: "Только кардио — ты просто становишься меньше. Моё сочетание силовой работы, кондиционирования и целевых жиросжигающих сессий пересобирает тебя — ты теряешь жир, сохраняя (а часто и набирая) мышцы, так что тело под одеждой выглядит не хуже цифры на весах. Ты не просто уменьшаешься — ты становишься лучше."
    },
    "ACCOUNTABILITY & WEEKLY CHECK-INS:": {
      tr: "SORUMLULUK VE HAFTALIK GÖRÜŞMELER:",
      sr: "ODGOVORNOST I NEDELJNI CHECK-INI:",
      ru: "ПОДОТЧЁТНОСТЬ И ЕЖЕНЕДЕЛЬНЫЕ ЧЕК-ИНЫ:"
    },
    "The biggest reason diets fail is nobody follows up. Every week we review your numbers, adjust the plan, and keep you on track. You're never guessing, never alone, and never stuck on a plateau — just steady, honest progress with someone in your corner until you hit your goal.": {
      tr: "Diyetlerin başarısız olmasının en büyük nedeni, kimsenin takibi sürdürmemesidir. Her hafta rakamlarını gözden geçiriyor, planı ayarlıyor ve seni yolda tutuyoruz. Asla tahmin etmiyorsun, asla yalnız değilsin ve asla bir platoda takılmıyorsun — sadece istikrarlı, dürüst bir ilerleme ve hedefe ulaşana kadar köşende biri.",
      sr: "Najveći razlog što dijete propadaju je što niko ne prati dalje. Svake nedelje pregledamo tvoje brojeve, prilagođavamo plan i držimo te u koloseku. Nikad ne nagađaš, nikad nisi sam i nikad ne zapneš na platou — samo stabilan, iskren napredak sa nekim uz tebe dok ne stigneš do cilja.",
      ru: "Главная причина, по которой диеты проваливаются — никто не даёт обратной связи. Каждую неделю мы пересматриваем твои цифры, корректируем план и держим тебя в ритме. Никаких догадок, никакого одиночества и никакого плато — только стабильный, честный прогресс, пока ты не достигнешь цели, с человеком рядом."
    },
    "EYLEM": { tr: "EYLEM", sr: "EYLEM", ru: "ПИТЕР" },
    "Every client who starts the €125 Training + Diet plan gets the same opening macro target: 1.8 g of protein per kilogram of bodyweight, carbs scaled to training days, fats filling the rest. No \"clean eating\" buzzwords, no cutting out food groups. This post breaks down the exact split Eylem uses, why it works for both cutting and bulking, and three grocery staples in Yıldız markets that make hitting it easy.": {
      tr: "Eylem’in €125 Antrenman + Diyet planına başlayan her danışan aynı açılış makro hedefini alır: kilogram başına 1.8 g protein, karbonhidrat antrenman günlerine göre ölçeklenir, yağlar gerisini doldurur. \"Clean eating\" türü moda kelimeler yok, gıda gruplarını kesmek yok. Bu yazıda Eylem’in kullandığı tam dağılımı, hem cutting hem bulking için neden işe yaradığını ve Yıldız marketlerinde bu makroyu tutturmayı kolaylaştıran üç temel ürünü anlatıyorum.",
      sr: "Svaki klijent koji počinje sa €125 Trening + Dijeta planom dobija isti početni makro cilj: 1.8 g proteina po kilogramu telesne težine, ugljeni hidrati skalirani prema danima treninga, masti popunjavaju ostalo. Bez \"clean eating\" buzzword-a, bez izbacivanja grupa namirnica. Ovaj post razlaže tačnu podelu koju Eylem koristi, zašto funkcioniše i za cutting i bulking, i tri prehrambena osnova sa pijaca u Yıldız-u koji olakšavaju da je pogodiš.",
      ru: "Каждый клиент, начинающий план «Тренировки + Питание» за €125, получает одинаковую стартовую макро-цель: 1.8 г белка на килограмм веса, углеводы масштабируются по тренировочным дням, жиры заполняют остальное. Без модных слов «clean eating» и без вычёркивания групп продуктов. В этом посте — точный сплит, который использует Eylem, почему он работает и для cut, и для bulk, и три базовых продукта с рынков Yıldız, которые помогают легко попадать в макро."
    },

    "Push / Pull / Legs: The Best Workout Split for Building Real Muscle Training": {
      tr: "Push / Pull / Legs: Gerçek Kas İçin En İyi Antrenman Bölümü Antrenman",
      sr: "Push / Pull / Legs: najbolja podela treninga za pravi rast mišića Trening",
      ru: "Push / Pull / Legs: лучший сплит для реального роста мышц Тренинг"
    },
    "How Many Sets Per Muscle Per Week? The Science-Backed Answer Training": {
      tr: "Haftada Kas Başına Kaç Set? Bilimsel Cevap Antrenman",
      sr: "Koliko serija po mišiću nedeljno? Odgovor potkrepljen naukom Trening",
      ru: "Сколько подходов на мышцу в неделю? Ответ с научной базой Тренинг"
    },
    "Protein, Carbs, Fats: The Simple Macro Split Eylem Uses With New Clients Nutrition": {
      tr: "Protein, Karbonhidrat, Yağ: Eylem'in Yeni Danışanlarda Kullandığı Basit Makro Dağılımı Beslenme",
      sr: "Proteini, ugljeni hidrati, masti: jednostavna makro podela koju Eylem koristi sa novim klijentima Ishrana",
      ru: "Белки, углеводы, жиры: простой макро-сплит, который Eylem использует с новыми клиентами Питание"
    },
    "Our licensed massage therapists in Ankara work alongside your personal training program to support:": {
      tr: "Ankara'daki lisanslı masaj terapistlerimiz personal training programınla birlikte çalışarak şunları destekler:",
      sr: "Naši licencirani masažni terapeuti u Ankari rade uporedo sa tvojim programom personalnog treninga kako bi podržali:",
      ru: "Наши лицензированные массажные терапевты в Анкаре работают вместе с твоей программой персональных тренировок, чтобы поддержать:"
    },
    "•Faster muscle recovery": {
      tr: "•Daha hızlı kas toparlanması",
      sr: "•Brži oporavak mišića",
      ru: "•Быстрое восстановление мышц"
    },
    "•Reduced inflammation and soreness": {
      tr: "•Azalan iltihap ve kas ağrısı",
      sr: "•Smanjena upala i bol u mišićima",
      ru: "•Снижение воспаления и боли в мышцах"
    },
    "•Increased mobility and flexibility": {
      tr: "•Artan mobilite ve esneklik",
      sr: "•Povećana mobilnost i fleksibilnost",
      ru: "•Улучшение мобильности и гибкости"
    },
    "•Improved circulation and range of motion": {
      tr: "•Gelişen dolaşım ve hareket açıklığı",
      sr: "•Bolja cirkulacija i raspon pokreta",
      ru: "•Улучшение кровообращения и амплитуды движения"
    },
    "•Relief from chronic tension and stress": {
      tr: "•Kronik gerginlik ve stresten rahatlama",
      sr: "•Olakšanje od hronične napetosti i stresa",
      ru: "•Снятие хронического напряжения и стресса"
    },
    "•Better sleep and nervous system recovery": {
      tr: "•Daha iyi uyku ve sinir sistemi toparlanması",
      sr: "•Bolji san i oporavak nervnog sistema",
      ru: "•Лучший сон и восстановление нервной системы"
    },
    "Each session is personalized to your goals,whether you need a targeted sports massage, full-body recovery, or gentle relaxation.": {
      tr: "Her seans hedeflerine göre kişiselleştirilir — hedefli bir spor masajına, tüm vücut toparlanmasına ya da yumuşak bir rahatlamaya ihtiyacın olsun.",
      sr: "Svaka sesija je personalizovana prema tvojim ciljevima — bilo da ti treba ciljana sportska masaža, oporavak celog tela ili nežno opuštanje.",
      ru: "Каждая сессия настроена под твои цели — нужен ли тебе целенаправленный спортивный массаж, восстановление всего тела или мягкое расслабление."
    },
    "Our massage therapy services in Manhattan are available by appointment only.": {
      tr: "Ankara'daki masaj terapi hizmetlerimiz yalnızca randevu ile mevcuttur.",
      sr: "Naše usluge masažne terapije u Ankari dostupne su samo uz zakazani termin.",
      ru: "Наши услуги массажной терапии в Анкаре доступны только по записи."
    },
    "Join our small group stretch class at Eylem Tarhan Personal Training for a rejuvenating and transformative experience. Led by me, this specialized class focuses on enhancing flexibility, relieving tension, and promoting overall well-being through targeted stretching techniques.": {
      tr: "Eylem Tarhan Personal Training'deki küçük grup stretch sınıfımıza katıl — yenileyici ve dönüştürücü bir deneyim için. Benim önderliğimde bu özel sınıf, hedefli esneme teknikleriyle esnekliği artırmaya, gerginliği gidermeye ve genel iyi oluşu desteklemeye odaklanır.",
      sr: "Pridruži se našem stretch času u maloj grupi u Eylem Tarhan Personal Training-u za podmlađujuće i transformativno iskustvo. Pod mojim vođstvom, ovaj specijalizovan čas se fokusira na poboljšanje fleksibilnosti, oslobađanje napetosti i unapređenje opšteg blagostanja kroz ciljane tehnike istezanja.",
      ru: "Присоединяйся к нашему stretch-классу в маленькой группе в Eylem Tarhan Personal Training — для омолаживающего и преобразующего опыта. Под моим руководством этот специализированный класс фокусируется на улучшении гибкости, снятии напряжения и поддержании общего самочувствия с помощью целенаправленных техник растяжки."
    },
    "01 — ConsultationA free 20-minute conversation about your goals, training history and any injuries.": {
      tr: "01 — GörüşmeHedeflerin, antrenman geçmişin ve sakatlıkların hakkında ücretsiz 20 dakikalık sohbet.",
      sr: "01 — KonsultacijaBesplatan 20-minutni razgovor o tvojim ciljevima, istoriji treninga i povredama.",
      ru: "01 — КонсультацияБесплатный 20-минутный разговор о твоих целях, истории тренировок и травмах."
    },
    "02 — AssessmentBody measurements and movement analysis in the first session.": {
      tr: "02 — Değerlendirmeİlk seansta vücut ölçümleri ve hareket analizi.",
      sr: "02 — ProcenaTelesne mere i analiza pokreta u prvoj sesiji.",
      ru: "02 — ОценкаЗамеры тела и анализ движения на первой сессии."
    },
    "03 — Your ProgramYou receive a fully personalised training and nutrition plan built for you.": {
      tr: "03 — ProgramınSenin için hazırlanmış tamamen kişiye özel antrenman ve beslenme planı alırsın.",
      sr: "03 — Tvoj ProgramDobijaš potpuno personalizovan plan treninga i ishrane napravljen za tebe.",
      ru: "03 — Твоя программаТы получаешь полностью персональный план тренировок и питания, созданный для тебя."
    },
    "04 — ResultsI track progress every week, adjust the plan, and celebrate every win.": {
      tr: "04 — SonuçlarGelişimini her hafta takip ediyor, planı düzenliyor ve her zaferi kutluyoruz.",
      sr: "04 — RezultatiNapredak pratim svake nedelje, prilagođavam plan i slavimo svaku pobedu.",
      ru: "04 — РезультатыЯ отслеживаю прогресс каждую неделю, корректирую план и празднуем каждую победу."
    },
    "Precise TechniqueYour trainer watches every movement, corrects errors in real time and makes sure you train safely and efficiently — every single rep.": {
      tr: "Hassas TeknikAntrenörün her hareketi izliyor, hataları gerçek zamanlı düzeltiyor ve her tekrarda güvenli ve verimli antrenman yapmanı sağlıyor.",
      sr: "Precizna tehnikaTvoj trener prati svaki pokret, ispravlja greške u realnom vremenu i brine da treniraš bezbedno i efikasno — svaku repeticiju.",
      ru: "Точная техникаТренер следит за каждым движением, исправляет ошибки в реальном времени и следит, чтобы ты тренировался безопасно и эффективно — в каждом повторении."
    },
    "Flexible ScheduleMorning, afternoon or evening — I fit training around your life, not the other way around.": {
      tr: "Esnek ProgramSabah, öğleden sonra ya da akşam — antrenmanı senin hayatına uydururum, tersi değil.",
      sr: "Fleksibilan rasporedJutro, popodne ili veče — trening prilagođavam tvom životu, a ne obrnuto.",
      ru: "Гибкое расписаниеУтро, день или вечер — я подстраиваю тренировку под твою жизнь, а не наоборот."
    },
    "Intensity on Your TermsBeginner or advanced, the programme adapts to your current level and progressively challenges you as you grow stronger.": {
      tr: "Sana Göre YoğunlukAcemi ya da ileri seviye, program senin mevcut seviyene uyum sağlıyor ve güçlendikçe seni kademeli olarak zorluyor.",
      sr: "Intenzitet po tvojim uslovimaPočetnik ili napredan, program se prilagođava tvom trenutnom nivou i progresivno te izaziva kako postaješ jači.",
      ru: "Интенсивность по твоим правиламНовичок или опытный — программа подстраивается под твой текущий уровень и постепенно усложняется по мере роста силы."
    },
    "Measurable ProgressEvery session is logged and every metric tracked. You always know exactly how far you have come and what is next on your journey.": {
      tr: "Ölçülebilir İlerlemeHer seans kaydediliyor, her metrik takip ediliyor. Ne kadar yol kat ettiğini ve yolculuğunda sıradakinin ne olduğunu her an net biliyorsun.",
      sr: "Merljivi napredakSvaka sesija je zabeležena i svaka metrika praćena. Uvek znaš tačno koliko si daleko stigao i šta je sledeće na tvom putu.",
      ru: "Измеримый прогрессКаждая сессия записана и каждый показатель отслеживается. Ты всегда точно знаешь, как далеко продвинулся и что следующее на пути."
    },
    "Strength (bench press) — +31%": {
      tr: "Kuvvet (bench press) — +%31",
      sr: "Snaga (bench press) — +31%",
      ru: "Сила (жим лёжа) — +31%"
    },
    "Body fat reduction — −5.2%": {
      tr: "Vücut yağı azalması — −%5.2",
      sr: "Smanjenje masti — −5.2%",
      ru: "Снижение жира — −5.2%"
    },
    "Lean muscle gained — +3.8 kg": {
      tr: "Kazanılan yağsız kas — +3.8 kg",
      sr: "Dobijena čista mišićna masa — +3.8 kg",
      ru: "Набрано сухой массы — +3.8 кг"
    },

    "Bio": { tr: "Biyografi", sr: "Biografija", ru: "Биография" },

    // Added for Eylem Tarhan rebrand — TR-first UI strings
    "Learn about my services": { tr: "Hizmetlerim hakkında bilgi al", ru: "Узнайте о моих услугах" },
    "About me": { tr: "Hakkımda", ru: "Обо мне" },
    "ABOUT ME": { tr: "HAKKIMDA", ru: "ОБО МНЕ" },
    "My App": { tr: "Uygulamam", ru: "Моё приложение" },
    "MY APP": { tr: "UYGULAMAM", ru: "МОЁ ПРИЛОЖЕНИЕ" },
    "JOIN ME": { tr: "BANA KATIL", ru: "ПРИСОЕДИНИСЬ" },
    "Join me": { tr: "Bana katıl", ru: "Присоединись" },
    "FIRST TIMER": { tr: "İLK KEZ Mİ?", ru: "ПЕРВЫЙ РАЗ?" },
    "Become a member now": { tr: "Şimdi üye ol", ru: "Стать членом сейчас" },
    "Memberships": { tr: "Üyelikler", ru: "Членство" },
    "WELCOME": { tr: "HOŞ GELDİN", ru: "ДОБРО ПОЖАЛОВАТЬ" },
    "Keep up with the latest news, trends and information regarding health, fitness, and nutrition.": { tr: "Sağlık, fitness ve beslenme ile ilgili en son haberleri, trendleri ve bilgileri takip et.", ru: "Следите за последними новостями, тенденциями и информацией о здоровье, фитнесе и питании." },
    "Push / Pull / Legs: The Best Workout Split for Building Real Muscle": { tr: "İtme / Çekme / Bacak: Gerçek Kas İnşası İçin En İyi Antrenman Bölümü", ru: "Push / Pull / Legs: Лучшее разделение тренировок для роста мышц" },
    "How Many Sets Per Muscle Per Week? The Science-Backed Answer": { tr: "Kas Başına Haftada Kaç Set? Bilimsel Yanıt", ru: "Сколько подходов на группу мышц в неделю? Научный ответ" },
    "Protein, Carbs, Fats: The Simple Macro Split Eylem Uses With New Clients": { tr: "Protein, Karbonhidrat, Yağ: Eylem'in Yeni Danışanlarıyla Kullandığı Basit Makro Dağılımı", ru: "Белки, Углеводы, Жиры: Простое распределение макросов, которое Эйлем использует с новыми клиентами" },
    "Located in Yıldız, Ankara, I am an educated, skilled and friendly personal trainer dedicated to providing the specialized attention, training and knowledge needed to help my clients attain their unique fitness objectives. As an ardent student of the latest developments in fitness, weight loss and strength training exercise programs, I maintain the highest standards for your training, continually sharpening my skills through related courses throughout the year.": { tr: "Yıldız, Ankara'da yer alıyorum. Danışanlarımın kendilerine özgü fitness hedeflerine ulaşmaları için ihtiyaç duydukları özel ilgiyi, antrenmanı ve bilgiyi sunmaya adanmış, eğitimli, yetenekli ve dost canlısı bir kişisel antrenörüm. Fitness, kilo verme ve kuvvet antrenmanı programlarındaki son gelişmeleri tutkuyla takip eder, kendimi geliştirerek antrenmanların için en yüksek standardı korurum.", ru: "Нахожусь в районе Йылдыз, Анкара. Я — образованный, опытный и дружелюбный персональный тренер, посвятивший себя оказанию индивидуального внимания, проведению тренировок и передаче знаний, необходимых моим клиентам для достижения их уникальных фитнес-целей. Будучи увлечённым студентом последних достижений в области фитнеса, снижения веса и силовых тренировок, я поддерживаю высочайшие стандарты ваших тренировок." },
    "GET IN TOUCH": { tr: "İLETİŞİME GEÇ", ru: "СВЯЖИСЬ СО МНОЙ" },
    "Ready to start?": { tr: "Başlamaya hazır mısın?", ru: "Готов начать?" },
    "READY TO START?": { tr: "BAŞLAMAYA HAZIR MISIN?", ru: "ГОТОВ НАЧАТЬ?" },
    "Book Personal Training Today": { tr: "Bugün Kişisel Antrenman Randevusu Al", ru: "Запиши персональную тренировку сегодня" },
    "Regardless of your fitness background or the stage of life you find yourself in, I'm dedicated to providing a supportive and welcoming training environment. My goal is to guide and inspire you, whether you're stepping into the world of fitness for the first time or maintaining elite athletic performance. Join me, and let's embark on a wellness journey tailored to your unique goals, celebrating every achievement along the way. Experience top personal training today!": { tr: "Fitness geçmişin ya da hayatın hangi döneminde olursan ol, destekleyici ve misafirperver bir antrenman ortamı sunmaya adanmışım. Fitness dünyasına ilk kez adım atıyor olsan da elit atletik performansını sürdürüyor olsan da seni yönlendirmek ve ilham vermek hedefim. Bana katıl; hedeflerine özel bir sağlık yolculuğuna çıkalım ve yol boyunca her başarını birlikte kutlayalım. Bugün zirve kişisel antrenman deneyimini yaşa!", ru: "Независимо от твоего фитнес-опыта или этапа жизни, я посвящаю себя созданию поддерживающей и гостеприимной тренировочной среды. Моя цель — направлять и вдохновлять тебя, делаешь ли ты первые шаги в фитнесе или поддерживаешь элитный уровень. Присоединяйся, и отправимся в оздоровительное путешествие, адаптированное под твои цели, празднуя каждое достижение. Испытай лучшие персональные тренировки уже сегодня!" },
    "terms of use": { tr: "kullanım koşulları", ru: "условия использования" },
    "Terms of Use": { tr: "Kullanım Koşulları", ru: "Условия использования" },
    "No matter your goal, I’ll get you there!": {
      tr: "Hedefin ne olursa olsun, seni oraya ulaştırırım!",
      sr: "Bez obzira na cilj, dovešću te tamo!",
      ru: "Какой бы ни была цель — я доведу тебя до неё!"
    },
    "EXPERIENCE THE DIFFERENCE": {
      tr: "FARKI HİSSET",
      sr: "OSETI RAZLIKU",
      ru: "ПОЧУВСТВУЙ РАЗНИЦУ"
    },
    "I track progress every week, adjust the plan, and celebrate every win.": {
      tr: "Gelişimini her hafta takip ediyorum, planı düzenliyorum ve her zaferi kutluyoruz.",
      sr: "Tvoj napredak pratim svake nedelje, prilagođavam plan i slavimo svaku pobedu.",
      ru: "Я отслеживаю прогресс каждую неделю, корректирую план и мы вместе празднуем каждую победу."
    },
    "Morning, afternoon or evening — I fit training around your life, not the other way around.": {
      tr: "Sabah, öğleden sonra ya da akşam — antrenmanı senin hayatına uydururum, tersi değil.",
      sr: "Jutro, popodne ili veče — trening prilagođavam tvom životu, a ne obrnuto.",
      ru: "Утро, день или вечер — я подстраиваю тренировку под твою жизнь, а не наоборот."
    },
    "25 Per Session": {
      tr: "Seans başına 25",
      sr: "25 po sesiji",
      ru: "25 за сессию"
    },
    "Training & Nutrition Blog": {
      tr: "Antrenman ve Beslenme Blogu",
      sr: "Blog o treningu i ishrani",
      ru: "Блог о тренировках и питании"
    },
    "Meet Your Trainer": {
      tr: "Antrenörünle Tanış",
      sr: "Upoznaj svog trenera",
      ru: "Познакомься со своим тренером"
    },
    "Six-day PPL (push / pull / legs) is still the split Eylem uses with most intermediate clients — and there is a good reason. It lets you hit every muscle group twice a week, keeps the sessions short enough (~60 min), and gives each muscle 72 hours to recover before the next hit. In this post: the exact lift order Eylem puts on the whiteboard, how to scale it to a 4-day PPL if you can't train six days, and the mistake most people make on pull days.": {
      tr: "Altı günlük PPL (push / pull / legs), Eylem'in orta seviye danışanlarının çoğunda kullandığı ayrımdır — ve haklı bir nedeni var. Her kas grubunu haftada iki kez vurmana, seansları yeterince kısa (~60 dk) tutmana ve bir sonraki vuruştan önce her kasa 72 saat toparlanma süresi vermesine izin veriyor. Bu yazıda: Eylem'in tahtaya yazdığı kesin hareket sırası, altı gün antrenman yapamıyorsan 4 günlük PPL'e nasıl ölçekleyeceğin ve çoğu insanın pull günlerinde yaptığı hata.",
      sr: "Šestodnevni PPL (push / pull / legs) i dalje je podela koju Eylem koristi sa većinom srednjeg nivoa klijenata — i postoji dobar razlog. Dozvoljava ti da pogodiš svaku mišićnu grupu dva puta nedeljno, drži sesije dovoljno kratke (~60 min) i daje svakom mišiću 72 sata da se oporavi pre sledećeg pogotka. U ovom postu: tačan redosled vežbi koji Eylem stavlja na tablu, kako to skalirati na 4-dnevni PPL ako ne možeš da treniraš šest dana, i greška koju većina pravi na pull danima.",
      ru: "Шестидневный PPL (push / pull / legs) — это сплит, который Eylem использует с большинством клиентов среднего уровня, и не зря. Он позволяет прорабатывать каждую группу мышц дважды в неделю, держит сессии достаточно короткими (~60 мин) и даёт каждой мышце 72 часа на восстановление до следующего удара. В этом посте: точный порядок упражнений, который Eylem пишет на доске, как масштабировать это в 4-дневный PPL, если шесть дней не получится, и ошибка, которую большинство делают в pull-дни."
    },
    "The old \"3 sets of 10\" rule is outdated. Current research lands on 10–20 hard sets per muscle per week for hypertrophy, with diminishing returns above 20. Eylem's 1-on-1 programmes sit at the lower end of that range for busy clients, and the upper end for anyone chasing serious size. This breakdown shows you how to count working sets, why 8-set chest days are a waste, and what \"hard set\" actually means.": {
      tr: "Eski \"10 tekrarlık 3 set\" kuralı modası geçti. Güncel araştırmalar hipertrofi için kas başına haftada 10–20 zorlu set diyor, 20'nin üstünde getiri azalıyor. Eylem'in birebir programları yoğun danışanlar için bu aralığın alt ucunda, ciddi hacim peşinde olanlar için ise üst ucunda. Bu yazıda: çalışan setleri nasıl sayacağın, 8 setli göğüs günlerinin neden israf olduğu ve \"zorlu set\"in gerçekten ne anlama geldiği.",
      sr: "Staro pravilo \"3 serije po 10\" je zastarelo. Aktuelna istraživanja kažu 10–20 teških serija po mišiću nedeljno za hipertrofiju, sa opadajućim prinosima iznad 20. Eylem-ovi 1-na-1 programi su u donjem delu tog opsega za zauzete klijente, a u gornjem za one koji jure ozbiljnu masu. Ovaj pregled ti pokazuje kako brojati radne serije, zašto su 8-serijski dani za grudi gubitak vremena i šta zaista znači \"teška serija\".",
      ru: "Старое правило «3 подхода по 10» устарело. Актуальные исследования сходятся на 10–20 тяжёлых подходах на мышцу в неделю для гипертрофии, с уменьшающейся отдачей выше 20. Программы Eylem 1-на-1 для занятых клиентов лежат в нижней части этого диапазона, а для тех, кто гонится за серьёзной массой — в верхней. Эта разборка показывает, как считать рабочие подходы, почему 8-подходные грудные дни — пустая трата времени и что на самом деле значит «тяжёлый подход»."
    },
    "Running a hard cut year-round stalls muscle growth. Endless bulking stacks on fat you will have to cut later. Eylem structures most clients into 8–12-week phases: a lean-bulk to build muscle, a short cut to reveal it, and a maintenance stretch in between so the changes stick. This post covers how to pick the right starting phase, the weekly calorie adjustments, and how to know when to switch.": {
      tr: "Yıl boyunca sıkı kesim yapmak kas büyümesini durdurur. Sonsuz bulk ise sonra kesmek zorunda kalacağın yağı biriktirir. Eylem çoğu danışanı 8–12 haftalık fazlara yapılandırır: kas yapmak için bir lean-bulk, onu ortaya çıkarmak için kısa bir kesim ve değişikliklerin kalıcı olması için arada bir koruma dönemi. Bu yazıda doğru başlangıç fazını nasıl seçeceğin, haftalık kalori düzenlemeleri ve ne zaman geçiş yapacağını anlatıyorum.",
      sr: "Stalni hard cut tokom cele godine zaustavlja rast mišića. Beskonačni bulking gomila masti koje ćeš kasnije morati da skineš. Eylem većinu klijenata strukturira u 8–12-nedeljne faze: lean-bulk za izgradnju mišića, kratak cut da bi se otkrili, i faza održavanja između da promene ostanu. Ovaj post pokriva kako odabrati pravu početnu fazu, nedeljna kalorijska podešavanja i kako da znaš kad da prebaciš.",
      ru: "Жёсткий cut круглый год останавливает рост мышц. Бесконечный bulk нагоняет жир, который потом всё равно придётся срезать. Eylem структурирует большинство клиентов в 8–12-недельные фазы: lean-bulk для набора мышц, короткий cut, чтобы их открыть, и поддерживающий промежуток между ними, чтобы изменения закрепились. В этом посте: как выбрать стартовую фазу, недельные корректировки калорий и когда пора переключаться."
    },
    "After forty, muscle mass and bone density start declining about 1% a year unless you actively train against it. Strength work — done right — is the single most effective intervention for long-term mobility, metabolism and independence. Eylem's framework leans on three compound lifts (hinge, push, pull), moderate volume and non-negotiable recovery days. Most over-40 clients are visibly stronger in 8 weeks and still pain-free 12 months in.": {
      tr: "Kırk yaşından sonra, aktif olarak buna karşı antrenman yapmazsan kas kütlesi ve kemik yoğunluğu yılda yaklaşık %1 azalmaya başlar. Doğru yapılan kuvvet çalışması; uzun vadeli mobilite, metabolizma ve bağımsızlık için tek başına en etkili müdahaledir. Eylem'in çerçevesi üç bileşik harekete (hinge, push, pull), orta hacme ve pazarlığa kapalı toparlanma günlerine dayanır. 40 yaş üstü danışanların çoğu 8 haftada gözle görülür biçimde güçlenir ve 12 ay sonra hâlâ ağrısızdır.",
      sr: "Posle četrdesete, mišićna masa i gustina kostiju počinju da opadaju oko 1% godišnje ako aktivno ne treniraš protiv toga. Trening snage — pravilno izveden — je sama po sebi najefikasnija intervencija za dugoročnu mobilnost, metabolizam i nezavisnost. Eylem-ova platforma se oslanja na tri bazične vežbe (hinge, push, pull), umeren volumen i obavezne dane za oporavak. Većina klijenata preko 40 je vidljivo jača za 8 nedelja i bez bolova i posle 12 meseci.",
      ru: "После сорока мышечная масса и плотность костей начинают снижаться примерно на 1% в год, если активно не тренироваться против этого. Силовая работа, выполненная правильно, — самое эффективное вмешательство для долгосрочной подвижности, метаболизма и независимости. Подход Eylem опирается на три базовых движения (hinge, push, pull), умеренный объём и обязательные дни восстановления. Большинство клиентов 40+ заметно сильнее за 8 недель и без боли спустя 12 месяцев."
    },
    "You don't need an hour to move the needle — 20 minutes of targeted mobility, activation and short intervals, done first thing, pays back all day. This is the exact routine that ships with the €75 online programme: five minutes of mobility, ten minutes of full-body circuits, and five minutes of breathwork. No equipment, anywhere in the world. Ideal if you travel, work long hours, or just want something you will actually stick to.": {
      tr: "İğneyi oynatmak için bir saate ihtiyacın yok — 20 dakikalık hedefli mobilite, aktivasyon ve kısa aralıklar, sabahın ilk işi olarak yapıldığında gün boyu geri ödemesini yapar. Bu, €75'lik online program ile birlikte gelen tam rutindir: beş dakika mobilite, on dakika tüm vücut döngüleri ve beş dakika nefes çalışması. Ekipman yok, dünyanın her yerinden. Seyahat ediyorsan, uzun saatler çalışıyorsan ya da gerçekten devam edebileceğin bir şey istiyorsan ideal.",
      sr: "Ne treba ti sat vremena da napraviš pomak — 20 minuta ciljane mobilnosti, aktivacije i kratkih intervala, urađeno prvo ujutru, vraća se kroz ceo dan. Ovo je tačno rutina koja dolazi uz €75 online program: pet minuta mobilnosti, deset minuta full-body krugova i pet minuta rada na disanju. Bez opreme, bilo gde u svetu. Idealno ako putuješ, radiš duge sate ili samo želiš nešto čega ćeš se zaista držati.",
      ru: "Чтобы сдвинуть стрелку, не нужен час — 20 минут целенаправленной мобильности, активации и коротких интервалов с самого утра окупаются весь день. Это та самая рутина, которая идёт с онлайн-программой за €75: пять минут мобильности, десять минут full-body кругов и пять минут дыхательной работы. Без оборудования, в любой точке мира. Идеально, если ты много путешествуешь, работаешь долгие часы или просто хочешь то, чего реально будешь придерживаться."
    },
    "CORRECTIVE EXERCISE: RESTORE BALANCE, IMPROVE FUNCTION, AND ENHANCE WELL-BEING": {
      tr: "DÜZELTİCİ EGZERSİZ: DENGEYİ YENİDEN KUR, FONKSİYONU GELİŞTİR VE İYİ OLUŞU ARTIR",
      sr: "KOREKTIVNA VEŽBA: VRATI BALANS, POBOLJŠAJ FUNKCIJU I UNAPREDI BLAGOSTANJE",
      ru: "КОРРЕКТИРУЮЩЕЕ УПРАЖНЕНИЕ: ВОССТАНОВИ БАЛАНС, УЛУЧШИ ФУНКЦИЮ И УКРЕПИ САМОЧУВСТВИЕ"
    },
    "WHAT IS CORRECTIVE EXERCISE?": {
      tr: "DÜZELTİCİ EGZERSİZ NEDİR?",
      sr: "ŠTA JE KOREKTIVNA VEŽBA?",
      ru: "ЧТО ТАКОЕ КОРРЕКТИРУЮЩЕЕ УПРАЖНЕНИЕ?"
    },
    "Corrective exercise is a specialized approach to fitness that focuses on identifying and addressing movement dysfunctions, imbalances, and compensations in the body. Through targeted exercises and techniques, corrective exercise aims to restore optimal movement patterns, improve posture, and alleviate pain or discomfort caused by muscular imbalances or improper movement mechanics.": {
      tr: "Düzeltici egzersiz, vücutta hareket bozukluklarını, dengesizlikleri ve telafileri tespit etmeye ve çözmeye odaklanan özel bir fitness yaklaşımıdır. Hedefli egzersizler ve tekniklerle düzeltici egzersiz; en uygun hareket kalıplarını yeniden kurmayı, postürü iyileştirmeyi ve kas dengesizlikleri ya da yanlış hareket mekaniğinden kaynaklanan ağrı ve rahatsızlığı hafifletmeyi amaçlar.",
      sr: "Korektivna vežba je specijalizovan pristup fitnesu koji se fokusira na prepoznavanje i rešavanje disfunkcija pokreta, neravnoteža i kompenzacija u telu. Ciljanim vežbama i tehnikama, korektivna vežba ima za cilj da povrati optimalne obrasce pokreta, poboljša postura i ublaži bol ili nelagodu uzrokovanu mišićnim neravnotežama ili nepravilnom mehanikom pokreta.",
      ru: "Корректирующее упражнение — это специализированный подход к фитнесу, сфокусированный на выявлении и устранении дисфункций движения, дисбалансов и компенсаций в теле. С помощью целенаправленных упражнений и техник корректирующее упражнение восстанавливает оптимальные паттерны движения, улучшает осанку и уменьшает боль или дискомфорт, вызванные мышечными дисбалансами или неправильной механикой движения."
    },
    "Our corrective exercise programs target a range of common issues, including:": {
      tr: "Düzeltici egzersiz programlarımız aşağıdakiler dahil pek çok yaygın soruna yöneliktir:",
      sr: "Naši programi korektivne vežbe pokrivaju niz uobičajenih problema, uključujući:",
      ru: "Наши корректирующие программы охватывают ряд распространённых проблем, включая:"
    },
    "Upper Cross Syndrome: Addressing imbalances between the muscles of the neck, shoulders, chest, and upper back to improve posture and reduce neck and shoulder pain.": {
      tr: "Üst Çapraz Sendromu: Postürü iyileştirmek ve boyun-omuz ağrılarını azaltmak için boyun, omuz, göğüs ve üst sırt kasları arasındaki dengesizliklerin ele alınması.",
      sr: "Gornji ukršteni sindrom: Rad na neravnotežama između mišića vrata, ramena, grudi i gornjeg dela leđa kako bi se poboljšao postura i smanjio bol u vratu i ramenima.",
      ru: "Синдром верхнего перекреста: работа с дисбалансом между мышцами шеи, плеч, груди и верха спины для улучшения осанки и снижения боли в шее и плечах."
    },
    "Optimal Posture: Promoting proper alignment and balance throughout the body to reduce strain on muscles and joints and improve overall function.": {
      tr: "Optimal Postür: Kaslar ve eklemler üzerindeki yükü azaltmak ve genel işlevi iyileştirmek için vücut boyunca doğru hizalama ve dengeyi destekleme.",
      sr: "Optimalna postura: Promovisanje pravilnog poravnanja i ravnoteže u celom telu kako bi se smanjilo opterećenje mišića i zglobova i poboljšala opšta funkcija.",
      ru: "Оптимальная осанка: содействие правильному выравниванию и балансу во всём теле для снижения нагрузки на мышцы и суставы и улучшения общей функции."
    },
    "Desk Work Ergonomics: Providing strategies and exercises to counteract the negative effects of prolonged sitting and desk work, such as muscle stiffness, poor posture, and back pain.": {
      tr: "Masa Başı Ergonomisi: Uzun süreli oturma ve masa başı çalışmanın olumsuz etkilerine — kas tutulması, kötü postür ve sırt ağrısı gibi — karşı koymak için stratejiler ve egzersizler sunma.",
      sr: "Ergonomija rada za stolom: Strategije i vežbe koje neutrališu negativne efekte dugog sedenja i rada za stolom, poput mišićne ukočenosti, loše posture i bola u leđima.",
      ru: "Эргономика работы за столом: стратегии и упражнения, которые компенсируют негативные эффекты длительного сидения и работы за столом — мышечную скованность, плохую осанку и боли в спине."
    },
    "Postural Benefits for Scoliosis: Utilizing corrective exercises to strengthen supporting muscles and improve alignment in individuals with scoliosis, reducing pain and discomfort associated with the condition.": {
      tr: "Skolyozda Postürel Faydalar: Skolyozlu bireylerde destek kaslarını güçlendirmek ve hizalanmayı iyileştirmek için düzeltici egzersizler kullanarak, durumla ilişkili ağrı ve rahatsızlığı azaltma.",
      sr: "Posturalne koristi za skoliozu: Korišćenje korektivnih vežbi za jačanje potpornih mišića i poboljšanje poravnanja kod osoba sa skoliozom, smanjujući bol i nelagodu povezanu sa stanjem.",
      ru: "Постуральные преимущества при сколиозе: использование корректирующих упражнений для укрепления поддерживающих мышц и улучшения выравнивания у людей со сколиозом, уменьшение боли и дискомфорта, связанных с этим состоянием."
    },
    "BENEFITS OF CORRECTIVE EXERCISE": {
      tr: "DÜZELTİCİ EGZERSİZİN FAYDALARI",
      sr: "PREDNOSTI KOREKTIVNE VEŽBE",
      ru: "ПРЕИМУЩЕСТВА КОРРЕКТИРУЮЩЕГО УПРАЖНЕНИЯ"
    },
    "Improved Posture: Corrective exercises target the muscles responsible for maintaining proper alignment, helping you stand taller, straighter, and with less effort.": {
      tr: "İyileştirilmiş Postür: Düzeltici egzersizler doğru hizalanmayı koruyan kasları hedef alır; daha dik, daha düz ve daha az çabayla durmana yardımcı olur.",
      sr: "Poboljšana postura: Korektivne vežbe ciljaju mišiće odgovorne za pravilno poravnanje, pomažući ti da stojiš više, pravije i sa manje napora.",
      ru: "Улучшенная осанка: корректирующие упражнения работают с мышцами, отвечающими за правильное выравнивание, помогая тебе стоять выше, прямее и с меньшим усилием."
    },
    "Reduced Pain and Discomfort: By addressing muscular imbalances and movement dysfunctions, corrective exercise can alleviate pain and discomfort caused by poor posture or improper movement patterns.": {
      tr: "Azalan Ağrı ve Rahatsızlık: Kas dengesizliklerine ve hareket bozukluklarına yönelerek düzeltici egzersiz, kötü postür veya yanlış hareket kalıplarından kaynaklanan ağrı ve rahatsızlığı hafifletebilir.",
      sr: "Smanjeni bol i nelagoda: Rešavanjem mišićnih neravnoteža i disfunkcija pokreta, korektivna vežba može ublažiti bol i nelagodu uzrokovane lošom posturom ili nepravilnim obrascima pokreta.",
      ru: "Уменьшение боли и дискомфорта: устраняя мышечные дисбалансы и дисфункции движения, корректирующее упражнение облегчает боль и дискомфорт, вызванные плохой осанкой или неправильными паттернами движения."
    },
    "Enhanced Functional Movement: Corrective exercise improves the efficiency and effectiveness of your movement patterns, allowing you to perform daily activities with greater ease and less risk of injury.": {
      tr: "Geliştirilmiş Fonksiyonel Hareket: Düzeltici egzersiz, hareket kalıplarının verimliliğini ve etkinliğini iyileştirir; günlük aktiviteleri daha kolay ve daha az sakatlanma riskiyle yapmana olanak tanır.",
      sr: "Unapređeno funkcionalno kretanje: Korektivna vežba poboljšava efikasnost i efektivnost obrazaca pokreta, omogućavajući ti da svakodnevne aktivnosti obavljaš lakše i sa manjim rizikom od povrede.",
      ru: "Улучшенное функциональное движение: корректирующее упражнение повышает эффективность и результативность твоих паттернов движения, позволяя выполнять повседневные дела с большей лёгкостью и меньшим риском травмы."
    },
    "Prevention of Future Injury: By addressing underlying imbalances and weaknesses, corrective exercise helps prevent future injuries and reduces the risk of chronic pain or dysfunction.": {
      tr: "Gelecekteki Sakatlıkların Önlenmesi: Altta yatan dengesizlik ve zayıflıklara yönelerek düzeltici egzersiz; gelecekteki sakatlıkları önlemeye yardımcı olur ve kronik ağrı ya da işlev bozukluğu riskini azaltır.",
      sr: "Prevencija budućih povreda: Rešavanjem osnovnih neravnoteža i slabosti, korektivna vežba pomaže u sprečavanju budućih povreda i smanjuje rizik od hroničnog bola ili disfunkcije.",
      ru: "Профилактика будущих травм: работая с базовыми дисбалансами и слабостями, корректирующее упражнение помогает предотвратить будущие травмы и снижает риск хронической боли или дисфункции."
    },
    "At Eylem Tarhan, I specialize in corrective exercise techniques that are tailored to your unique needs and goals. Whether you’re struggling with poor posture, dealing with the effects of desk work, or seeking relief from musculoskeletal issues, my personalized programs will help you move better, feel better, and live better.": {
      tr: "Eylem Tarhan'da, sana özgü ihtiyaçlara ve hedeflere göre uyarlanmış düzeltici egzersiz tekniklerinde uzmanım. İster kötü postürle mücadele ediyor ol, ister masa başı işin etkilerini yaşa, ister kas-iskelet sorunlarına çözüm ara — kişiye özel programlarım daha iyi hareket etmene, daha iyi hissetmene ve daha iyi yaşamana yardımcı olur.",
      sr: "U Eylem Tarhan-u sam specijalizovan za tehnike korektivne vežbe prilagođene tvojim jedinstvenim potrebama i ciljevima. Bilo da se boriš sa lošom posturom, suočavaš sa efektima rada za stolom ili tražiš olakšanje od mišićno-koštanih problema, moji personalizovani programi će ti pomoći da se bolje krećeš, bolje osećaš i bolje živiš.",
      ru: "В Eylem Tarhan я специализируюсь на корректирующих техниках, подобранных под твои уникальные потребности и цели. Сражаешься ли ты с плохой осанкой, ощущаешь ли последствия офисной работы или ищешь облегчения от опорно-двигательных проблем — мои персональные программы помогут тебе двигаться, чувствовать и жить лучше."
    },
    "TAKE THE FIRST STEP TOWARD BETTER MOVEMENT": {
      tr: "DAHA İYİ HAREKETE DOĞRU İLK ADIMI AT",
      sr: "NAPRAVI PRVI KORAK KA BOLJEM POKRETU",
      ru: "СДЕЛАЙ ПЕРВЫЙ ШАГ К ЛУЧШЕМУ ДВИЖЕНИЮ"
    },
    "Ready to experience the transformative power of corrective exercise? Schedule a consultation with me today and take the first step toward restoring balance, improving function, and enhancing your overall well-being.": {
      tr: "Düzeltici egzersizin dönüştürücü gücünü deneyimlemeye hazır mısın? Bugün benimle bir görüşme planla ve dengeyi yeniden kurmaya, fonksiyonu iyileştirmeye ve genel iyi oluşunu güçlendirmeye doğru ilk adımı at.",
      sr: "Spreman da iskusiš transformativnu moć korektivne vežbe? Zakaži konsultaciju sa mnom danas i napravi prvi korak ka vraćanju balansa, poboljšanju funkcije i unapređenju opšteg blagostanja.",
      ru: "Готов(а) ощутить преобразующую силу корректирующего упражнения? Запишись на консультацию со мной сегодня и сделай первый шаг к восстановлению баланса, улучшению функции и укреплению общего самочувствия."
    },
    "WHAT IS HIIT": {
      tr: "HIIT NEDİR",
      sr: "ŠTA JE HIIT",
      ru: "ЧТО ТАКОЕ HIIT"
    },
    "HIIT PERSONAL TRAINING PROGRAM IN MANHATTAN, EFFECTIVE WEIGHT LOSS STRATEGY PAIRED WITH PERSONALIZED PROGRAM AND EXPERTS": {
      tr: "ANKARA'DA HIIT PERSONAL TRAINING PROGRAMI — ETKİLİ KİLO VERME STRATEJİSİ, KİŞİYE ÖZEL PROGRAM VE UZMAN DESTEĞİYLE",
      sr: "HIIT PERSONALNI TRENING PROGRAM U ANKARI — EFIKASNA STRATEGIJA MRŠAVLJENJA UPARENA SA PERSONALIZOVANIM PROGRAMOM I STRUČNJACIMA",
      ru: "ПРОГРАММА HIIT ПЕРСОНАЛЬНЫХ ТРЕНИРОВОК В АНКАРЕ — ЭФФЕКТИВНАЯ СТРАТЕГИЯ СНИЖЕНИЯ ВЕСА С ПЕРСОНАЛЬНОЙ ПРОГРАММОЙ И ЭКСПЕРТАМИ"
    },
    "High-Intensity Interval Training (HIIT) is a dynamic and efficient workout method that alternates between short bursts of intense exercise and brief periods of rest or lower-intensity activity. This high-energy approach maximizes calorie burn, boosts metabolism, and elevates cardiovascular fitness in a fraction of the time compared to traditional workouts.": {
      tr: "Yüksek Yoğunluklu Aralıklı Antrenman (HIIT), kısa yoğun egzersiz patlamaları ile kısa dinlenme veya düşük yoğunluklu aktivite arasında geçiş yapan dinamik ve verimli bir antrenman yöntemidir. Bu yüksek enerjili yaklaşım; kalori yakımını maksimuma çıkarır, metabolizmayı hızlandırır ve geleneksel antrenmanlara kıyasla çok daha kısa sürede kardiyovasküler kondisyonu yükseltir.",
      sr: "Trening visokog intenziteta sa intervalima (HIIT) je dinamičan i efikasan metod treninga koji se naizmenično smenjuje između kratkih nahti intenzivne vežbe i kratkih perioda odmora ili aktivnosti niskog intenziteta. Ovaj visokoenergetski pristup maksimizuje sagorevanje kalorija, ubrzava metabolizam i podiže kardiovaskularnu kondiciju za delić vremena u odnosu na tradicionalne treninge.",
      ru: "Высокоинтенсивная интервальная тренировка (HIIT) — это динамичный и эффективный метод, чередующий короткие всплески интенсивной нагрузки с короткими периодами отдыха или активностью низкой интенсивности. Этот высокоэнергетичный подход максимизирует сжигание калорий, ускоряет метаболизм и повышает кардиовыносливость за долю времени по сравнению с традиционными тренировками."
    },
    "DISCOVER THE TRANSFORMATIVE POWER OF HIIT AT ELITE SHAPE.": {
      tr: "EYLEM TARHAN'DA HIIT'İN DÖNÜŞTÜRÜCÜ GÜCÜNÜ KEŞFET.",
      sr: "OTKRIJ TRANSFORMATIVNU MOĆ HIIT-A U EYLEM TARHAN.",
      ru: "ОТКРОЙ ПРЕОБРАЗУЮЩУЮ СИЛУ HIIT В EYLEM TARHAN."
    },
    "Led by me, my HIIT sessions are designed to challenge and inspire you, pushing your limits and unlocking your full potential. Each workout is carefully crafted to incorporate a variety of exercises, including cardio drills, bodyweight movements, and strength exercises, ensuring a comprehensive full-body workout experience.": {
      tr: "Benim önderliğimde HIIT seanslarım seni zorlamak ve ilham vermek için tasarlandı; sınırlarını zorlayıp tüm potansiyelini açığa çıkarıyor. Her antrenman; kardiyo drillleri, vücut ağırlığı hareketleri ve kuvvet egzersizleri dahil çeşitli egzersizleri içerecek şekilde özenle hazırlanır ve kapsamlı bir tüm vücut deneyimi sunar.",
      sr: "Pod mojim vođstvom, HIIT sesije su dizajnirane da te izazovu i inspirišu, gurajući granice i otključavajući tvoj puni potencijal. Svaki trening je pažljivo osmišljen da uključi različite vežbe — kardio drilove, pokrete sa sopstvenom težinom i vežbe snage — što garantuje kompletno full-body iskustvo.",
      ru: "Под моим руководством мои HIIT-сессии спроектированы, чтобы бросить тебе вызов и вдохновить, раздвигая границы и раскрывая весь потенциал. Каждая тренировка тщательно собрана из разных упражнений — кардио-дрилов, движений с собственным весом и силовых — что обеспечивает полноценный full-body опыт."
    },
    "The beauty of HIIT lies in its versatility and scalability, making it suitable for individuals of all fitness levels. Whether you’re a seasoned athlete looking to enhance performance, a fitness enthusiast seeking to break through plateaus, or a beginner embarking on your fitness journey, HIIT offers a time-efficient and effective way to achieve your goals.": {
      tr: "HIIT'in güzelliği çok yönlülüğünde ve ölçeklenebilirliğinde yatar; her fitness seviyesindeki bireye uygundur. İster performansını yükseltmek isteyen deneyimli bir sporcu ol, ister platodan çıkmaya çalışan bir fitness tutkunu, ister yeni başlayan biri — HIIT, hedeflerine ulaşmanın zaman tasarruflu ve etkili bir yolunu sunar.",
      sr: "Lepota HIIT-a je u njegovoj svestranosti i skalabilnosti, što ga čini pogodnim za sve fitnes nivoe. Bilo da si iskusan sportista koji želi da unapredi performans, fitnes entuzijasta koji probija plato ili početnik na svom putu, HIIT pruža vremenski efikasan i efektivan način da postigneš ciljeve.",
      ru: "Красота HIIT — в его универсальности и масштабируемости, он подходит людям любого уровня. Опытный спортсмен ищет рост результатов, любитель пробивает плато или новичок только начинает путь — HIIT даёт эффективный и экономящий время способ достичь целей."
    },
    "Experience the adrenaline rush and sense of accomplishment that comes with conquering a HIIT workout. Join me at Eylem Tarhan Personal Training and unleash your inner athlete as you sweat, burn calories, and push yourself to new heights. Let my expert guidance propel you toward your fitness aspirations, one high-intensity interval at a time.": {
      tr: "Bir HIIT antrenmanını fethetmenin getirdiği adrenalin patlamasını ve başarı duygusunu yaşa. Eylem Tarhan Personal Training'de bana katıl; ter dökerken, kalori yakarken ve kendini yeni zirvelere taşırken içindeki sporcuyu serbest bırak. Uzman rehberliğim seni fitness hedeflerine taşısın — yüksek yoğunluklu her aralıkla.",
      sr: "Doživi nalet adrenalina i osećaj postignuća koji dolazi sa savladavanjem HIIT treninga. Pridruži mi se u Eylem Tarhan Personal Training-u i pusti svog unutrašnjeg sportistu dok znojiš, sagorevaš kalorije i guraš sebe ka novim visinama. Neka te moje stručno vođstvo gura ka tvojim fitnes težnjama — jedan visoko-intenzivan interval po jedan.",
      ru: "Почувствуй адреналиновый прилив и ощущение победы после HIIT-тренировки. Присоединяйся ко мне в Eylem Tarhan Personal Training и раскрывай внутреннего атлета, потея, сжигая калории и поднимая планку. Пусть мой экспертный подход двигает тебя к фитнес-целям — один высокоинтенсивный интервал за раз."
    },
    "WHAT IS MARATHON PREPARATION?": {
      tr: "MARATON HAZIRLIĞI NEDİR?",
      sr: "ŠTA JE PRIPREMA ZA MARATON?",
      ru: "ЧТО ТАКОЕ ПОДГОТОВКА К МАРАФОНУ?"
    },
    "Marathon preparation is a specialized training program designed to help runners of all levels prepare for the physical and mental challenges of a marathon. Whether you’re a seasoned runner aiming for a personal best or a first-time marathoner with big goals, our comprehensive program will equip you with the tools, techniques, and support you need to succeed on race day.": {
      tr: "Maraton hazırlığı, her seviyedeki koşucuların maratonun fiziksel ve zihinsel zorluklarına hazırlanmasına yardımcı olmak için tasarlanmış özel bir antrenman programıdır. İster kişisel rekorunu hedefleyen deneyimli bir koşucu ol, ister büyük hedefleri olan ilk kez maratoncu — kapsamlı programımız yarış gününde başarılı olmak için ihtiyaç duyduğun araçları, teknikleri ve desteği sana sunar.",
      sr: "Priprema za maraton je specijalizovan trening program dizajniran da pomogne trkačima svih nivoa da se pripreme za fizičke i mentalne izazove maratona. Bilo da si iskusan trkač koji cilja lični rekord ili maratonac po prvi put sa velikim ciljevima, naš sveobuhvatan program će te opremiti alatima, tehnikama i podrškom potrebnim za uspeh na dan trke.",
      ru: "Подготовка к марафону — специализированная тренировочная программа, разработанная, чтобы помочь бегунам любого уровня подготовиться к физическим и ментальным вызовам марафона. Опытный бегун ты, нацеленный на личный рекорд, или впервые бежишь марафон с большими целями — наша комплексная программа даст тебе инструменты, техники и поддержку, нужные для успеха в день старта."
    },
    "ALTERG: DEFY GRAVITY, MAXIMIZE RECOVERY, AND ENHANCE PERFORMANCE": {
      tr: "ALTERG: YERÇEKİMİNE MEYDAN OKU, TOPARLANMAYI EN ÜST SEVİYEYE ÇIKAR VE PERFORMANSI ARTIR",
      sr: "ALTERG: PROBI GRAVITACIJU, MAKSIMIZUJ OPORAVAK I UNAPREDI PERFORMANS",
      ru: "ALTERG: БРОСЬ ВЫЗОВ ГРАВИТАЦИИ, ВЫЖМИ МАКСИМУМ ИЗ ВОССТАНОВЛЕНИЯ И УЛУЧШИ ПРОИЗВОДИТЕЛЬНОСТЬ"
    },
    "Train Smarter with the AlterG Anti-Gravity Treadmill at Eylem Tarhan": {
      tr: "Eylem Tarhan'da AlterG Anti-Gravity Koşu Bandı ile Daha Akıllı Antrenman",
      sr: "Treniraj pametnije sa AlterG Anti-Gravity trakom u Eylem Tarhan-u",
      ru: "Тренируйся умнее на AlterG Anti-Gravity-беговой дорожке в Eylem Tarhan"
    },
    "The AlterG Anti-Gravity Treadmill uses NASA-developed technology to reduce impact on your joints and muscles by supporting a customizable percentage of your body weight. This revolutionary treadmill creates a low-impact training environment ideal for rehabilitation, performance training, and pain-free movement.": {
      tr: "AlterG Anti-Gravity Koşu Bandı, NASA tarafından geliştirilen teknolojiyi kullanarak vücut ağırlığının özelleştirilebilir bir yüzdesini destekleyerek eklemler ve kaslar üzerindeki yükü azaltır. Bu devrim niteliğindeki koşu bandı; rehabilitasyon, performans antrenmanı ve ağrısız hareket için ideal düşük etkili bir antrenman ortamı yaratır.",
      sr: "AlterG Anti-Gravity traka koristi NASA tehnologiju kako bi smanjila opterećenje na zglobove i mišiće podržavajući prilagodljiv procenat tvoje telesne težine. Ova revolucionarna traka stvara trenažno okruženje sa niskim opterećenjem, idealno za rehabilitaciju, trening performansa i pokret bez bola.",
      ru: "Беговая дорожка AlterG Anti-Gravity использует разработанную NASA технологию, чтобы снизить нагрузку на суставы и мышцы за счёт поддержки настраиваемого процента твоего веса. Эта революционная дорожка создаёт тренировочную среду с низкой ударной нагрузкой — идеально для реабилитации, тренировки производительности и безболезненного движения."
    },
    "Athletes can push harder with less strain, runners can maintain speed and volume while reducing injury risk, and individuals recovering from surgery or managing chronic pain can move safely and comfortably. Whether you’re healing or reaching for peak performance, the AlterG helps you train with confidence.": {
      tr: "Sporcular daha az zorlanmayla daha sıkı çalışabilir, koşucular sakatlık riskini azaltırken hızı ve hacmi koruyabilir, ameliyattan toparlanan veya kronik ağrıyı yöneten bireyler güvenli ve rahat hareket edebilir. İster iyileşme sürecinde ol ister zirve performansa uzan — AlterG güvenle antrenman yapmana yardımcı olur.",
      sr: "Sportisti mogu da guraju jače uz manje napora, trkači mogu da održe brzinu i volumen uz manji rizik od povrede, a oni koji se oporavljaju od operacije ili upravljaju hroničnim bolom mogu da se kreću bezbedno i udobno. Bilo da se oporavljaš ili težiš vrhunskim performansama, AlterG ti pomaže da treniraš sa sigurnošću.",
      ru: "Спортсмены могут давать больше при меньшей нагрузке, бегуны — сохранять скорость и объём, снижая риск травм, а восстанавливающиеся после операции или живущие с хронической болью — двигаться безопасно и комфортно. Восстанавливаешься ты или идёшь к пиковой форме — AlterG помогает тренироваться уверенно."
    },
    "Experience next-level recovery and fitness with the AlterG treadmill at Eylem Tarhan,where reduced gravity lifts your goals within reach.": {
      tr: "Eylem Tarhan'daki AlterG koşu bandıyla bir sonraki seviye toparlanma ve fitnessı yaşa — azaltılmış yerçekimi hedeflerini erişimine taşır.",
      sr: "Doživi sledeći nivo oporavka i fitnesa sa AlterG trakom u Eylem Tarhan-u — gde smanjena gravitacija dovodi tvoje ciljeve nadohvat ruke.",
      ru: "Открой восстановление и форму нового уровня на дорожке AlterG в Eylem Tarhan — где сниженная гравитация делает цели достижимыми."
    },
    "My marathon preparation program covers a range of essential elements, including:": {
      tr: "Maraton hazırlık programım aşağıdakiler dahil bir dizi temel öğeyi kapsar:",
      sr: "Moj program pripreme za maraton pokriva niz ključnih elemenata, uključujući:",
      ru: "Моя программа подготовки к марафону охватывает ряд ключевых элементов, включая:"
    },
    "Training Plan Development: I will create a personalized training plan tailored to your fitness level, goals, and schedule, ensuring that you progress safely and effectively toward marathon day.": {
      tr: "Antrenman Planı Geliştirme: Fitness seviyene, hedeflerine ve programına göre uyarlanmış kişiye özel bir antrenman planı oluşturur, maraton gününe doğru güvenli ve etkili biçimde ilerlemeni sağlarım.",
      sr: "Razvoj plana treninga: Napraviću personalizovan plan treninga prilagođen tvom fitnes nivou, ciljevima i rasporedu, osiguravajući da bezbedno i efikasno napreduješ ka maratonskom danu.",
      ru: "Разработка плана тренировок: я создам персональный план под твой уровень формы, цели и график, чтобы ты безопасно и эффективно двигался(лась) к дню марафона."
    },
    "Endurance Training: Long runs, tempo runs, and interval training will build your aerobic capacity and improve your ability to sustain effort over the marathon distance.": {
      tr: "Dayanıklılık Antrenmanı: Uzun koşular, tempo koşuları ve interval antrenmanı; aerobik kapasiteni geliştirir ve maraton mesafesinde efor sürdürme yeteneğini artırır.",
      sr: "Trening izdržljivosti: Dugi treninzi, tempo trčanja i intervalni trening izgradiće tvoj aerobni kapacitet i poboljšati sposobnost da održiš napor na maratonskoj distanci.",
      ru: "Тренировка выносливости: длинные пробежки, темповые забеги и интервальная работа разовьют аэробную базу и помогут поддерживать усилие на марафонской дистанции."
    },
    "Strength and Conditioning: Specific exercises and drills will strengthen key muscles, improve running form, and reduce the risk of injury during training and on race day.": {
      tr: "Kuvvet ve Kondisyon: Belirli egzersizler ve drilller temel kasları güçlendirir, koşu formunu iyileştirir ve antrenman ile yarış gününde sakatlık riskini azaltır.",
      sr: "Snaga i kondicija: Specifične vežbe i drilovi ojačaće ključne mišiće, poboljšati trkačku formu i smanjiti rizik od povrede tokom treninga i na dan trke.",
      ru: "Сила и кондиции: специальные упражнения и дриллы укрепят ключевые мышцы, улучшат беговую технику и снизят риск травм во время тренировок и в день старта."
    },
    "Nutritional Guidance: Proper nutrition and hydration are essential for optimal performance and recovery. Our nutritionists will provide personalized guidance to fuel your training and support your overall health and well-being.": {
      tr: "Beslenme Rehberliği: Doğru beslenme ve hidrasyon, optimal performans ve toparlanma için temeldir. Beslenme uzmanlarımız antrenmanını besleyecek ve genel sağlığını destekleyecek kişiye özel rehberlik sağlar.",
      sr: "Nutricionistički saveti: Pravilna ishrana i hidracija su ključne za optimalan učinak i oporavak. Naši nutricionisti će ti pružiti personalizovanu vodilju za podršku treninga i opšteg zdravlja.",
      ru: "Рекомендации по питанию: правильное питание и гидратация — основа оптимальной производительности и восстановления. Наши нутрициологи дадут персональные рекомендации для поддержки тренировок и общего самочувствия."
    },
    "Mental Preparation: Mental toughness is crucial for success in the marathon. We’ll help you develop strategies to overcome mental barriers, stay focused, and maintain motivation throughout your training and on race day.": {
      tr: "Zihinsel Hazırlık: Maratonda başarı için zihinsel dayanıklılık şarttır. Antrenman boyunca ve yarış gününde zihinsel engelleri aşmak, odağı korumak ve motivasyonu sürdürmek için stratejiler geliştirmene yardımcı oluruz.",
      sr: "Mentalna priprema: Mentalna čvrstina je presudna za uspeh u maratonu. Pomoći ćemo ti da razviješ strategije za prevazilaženje mentalnih barijera, zadržiš fokus i održiš motivaciju tokom treninga i na dan trke.",
      ru: "Ментальная подготовка: ментальная стойкость критична для успеха в марафоне. Мы поможем выработать стратегии для преодоления ментальных барьеров, сохранения фокуса и мотивации во время тренировок и на старте."
    },
    "Improved Performance: Our comprehensive training program will help you build the endurance, strength, and mental resilience needed to conquer the marathon distance and achieve your personal best.": {
      tr: "Geliştirilmiş Performans: Kapsamlı antrenman programımız, maraton mesafesini fethetmek ve kişisel rekorunu kırmak için gereken dayanıklılığı, kuvveti ve zihinsel direnci kurmana yardımcı olur.",
      sr: "Bolji performans: Naš sveobuhvatan trening program pomoći će ti da izgradiš izdržljivost, snagu i mentalnu otpornost potrebne da osvojiš maratonsku distancu i postigneš lični rekord.",
      ru: "Улучшение результатов: наша комплексная программа поможет выстроить выносливость, силу и ментальную устойчивость, нужные для покорения марафона и личного рекорда."
    },
    "Reduced Risk of Injury: By following a structured training plan and incorporating strength and conditioning exercises, you’ll minimize the risk of overuse injuries and stay healthy throughout your training cycle.": {
      tr: "Azalan Sakatlık Riski: Yapılandırılmış bir antrenman planını izleyerek ve kuvvet ile kondisyon egzersizlerini dahil ederek aşırı kullanım sakatlıklarının riskini en aza indirir ve antrenman döngün boyunca sağlıklı kalırsın.",
      sr: "Smanjeni rizik od povrede: Praćenjem strukturisanog plana treninga i uključivanjem vežbi snage i kondicije, smanjićeš rizik od povreda usled prenaprezanja i ostati zdrav tokom celog ciklusa treninga.",
      ru: "Снижение риска травм: следуя структурированному плану и включая силу и кондиции, ты сводишь к минимуму риск перегрузочных травм и остаёшься здоровым весь тренировочный цикл."
    },
    "Confidence and Preparation: With expert coaching and support, you’ll approach race day feeling confident, prepared, and ready to tackle the challenges ahead.": {
      tr: "Güven ve Hazırlık: Uzman koçluk ve destekle yarış gününe kendine güvenen, hazırlıklı ve önündeki zorluklarla başa çıkmaya hazır şekilde yaklaşırsın.",
      sr: "Samopouzdanje i pripremljenost: Uz stručno vođstvo i podršku, dan trke ćeš dočekati sigurno, spremno i spreman da se uhvatiš u koštac sa izazovima koji slede.",
      ru: "Уверенность и готовность: с экспертной поддержкой ты подойдёшь к дню марафона уверенно, подготовленным(ой) и готовым(ой) к предстоящим вызовам."
    },
    "Personal Growth: Training for a marathon is a transformative journey that will push you beyond your limits, build resilience, and instill a sense of accomplishment that extends far beyond the finish line.": {
      tr: "Kişisel Gelişim: Maraton antrenmanı seni sınırlarının ötesine taşıyan, dayanıklılık inşa eden ve bitiş çizgisinin çok ötesine uzanan bir başarı duygusu kazandıran dönüştürücü bir yolculuktur.",
      sr: "Lični rast: Trening za maraton je transformativno putovanje koje će te pogurati izvan tvojih granica, izgraditi otpornost i usaditi osećaj postignuća koji ide daleko izvan ciljne linije.",
      ru: "Личный рост: подготовка к марафону — это преобразующее путешествие, которое толкает за пределы возможностей, выстраивает стойкость и даёт чувство достижения, идущее далеко за финишную черту."
    },
    "TAKE THE FIRST STEP TOWARD MARATHON SUCCESS": {
      tr: "MARATON BAŞARISINA DOĞRU İLK ADIMI AT",
      sr: "NAPRAVI PRVI KORAK KA USPEHU U MARATONU",
      ru: "СДЕЛАЙ ПЕРВЫЙ ШАГ К УСПЕХУ В МАРАФОНЕ"
    },
    "Ready to embark on your marathon journey? Schedule a consultation with me today and take the first step toward achieving your personal best.": {
      tr: "Maraton yolculuğuna çıkmaya hazır mısın? Bugün benimle bir görüşme planla ve kişisel rekoruna ulaşmaya doğru ilk adımı at.",
      sr: "Spreman da kreneš na svoje maratonsko putovanje? Zakaži konsultaciju sa mnom danas i napravi prvi korak ka ostvarenju ličnog rekorda.",
      ru: "Готов(а) выйти в марафонское путешествие? Запишись на консультацию со мной сегодня и сделай первый шаг к личному рекорду."
    },
    "At Eylem Tarhan, I’m dedicated to helping you reach your marathon goals. I will guide and support you every step of the way, providing the expertise, motivation, and accountability you need to succeed.": {
      tr: "Eylem Tarhan'da maraton hedeflerine ulaşmana yardım etmeye kendimi adadım. Yolun her adımında seni yönlendirip destekliyor; başarmak için ihtiyaç duyduğun uzmanlığı, motivasyonu ve sorumluluğu sağlıyorum.",
      sr: "U Eylem Tarhan-u sam posvećen tome da ti pomognem da dostigneš maratonske ciljeve. Vodiću te i podržavati u svakom koraku, pružajući ti stručnost, motivaciju i odgovornost potrebne za uspeh.",
      ru: "В Eylem Tarhan я посвящён тому, чтобы помочь тебе достичь марафонских целей. Я буду направлять и поддерживать на каждом шаге, давая экспертизу, мотивацию и ответственность, нужные для успеха."
    },
    "Wellness Massage Therapy in Ankara": {
      tr: "Ankara'da Wellness Masaj Terapisi",
      sr: "Wellness masažna terapija u Ankari",
      ru: "Wellness-массажная терапия в Анкаре"
    },
    "Recovery Massage for Fitness, Mobility, and Stress Relief": {
      tr: "Fitness, Mobilite ve Stres Azaltımı için Toparlanma Masajı",
      sr: "Masaža oporavka za fitnes, mobilnost i ublažavanje stresa",
      ru: "Восстановительный массаж для фитнеса, мобильности и снятия стресса"
    },
    "At Eylem Tarhan Personal Training (Eylem Tarhan), we know that recovery is just as important as training. That’s why we now offer professional wellness massage therapy in Ankara,a customized, results-driven experience designed to help you recover faster, move better, and feel stronger.": {
      tr: "Eylem Tarhan Personal Training'de toparlanmanın antrenman kadar önemli olduğunu biliyoruz. Bu yüzden artık Ankara'da profesyonel wellness masaj terapisi sunuyoruz — daha hızlı toparlanmana, daha iyi hareket etmene ve daha güçlü hissetmene yardımcı olmak için tasarlanmış kişiye özel, sonuç odaklı bir deneyim.",
      sr: "U Eylem Tarhan Personal Training-u znamo da je oporavak jednako bitan kao i trening. Zato sada nudimo profesionalnu wellness masažnu terapiju u Ankari — personalizovano, rezultat-orijentisano iskustvo dizajnirano da ti pomogne da se brže oporaviš, bolje krećeš i osećaš snažnije.",
      ru: "В Eylem Tarhan Personal Training мы знаем, что восстановление так же важно, как и тренировка. Поэтому мы теперь предлагаем профессиональную wellness-массажную терапию в Анкаре — персональный, ориентированный на результат опыт, разработанный, чтобы быстрее восстанавливаться, лучше двигаться и чувствовать себя сильнее."
    },
    "Whether you’re dealing with post-workout soreness, muscle tightness, stress, or a busy Ankara lifestyle, our massage therapy services are designed to complement your fitness routine and overall wellness.": {
      tr: "Antrenman sonrası ağrılarla, kas tutukluğuyla, stresle ya da Ankara'nın yoğun yaşam tempoyla mücadele ediyor olsan da masaj terapisi hizmetlerimiz fitness rutinini ve genel sağlığını tamamlamak için tasarlandı.",
      sr: "Bilo da se boriš sa upalom mišića posle treninga, ukočenjem mišića, stresom ili užurbanim Ankara životnim stilom, naše usluge masažne terapije osmišljene su da dopune tvoju fitnes rutinu i ukupno blagostanje.",
      ru: "Имеешь ли ты дело с посттренировочной болью, скованностью мышц, стрессом или динамичным ритмом Анкары — наши услуги массажной терапии созданы, чтобы дополнять твою фитнес-рутину и общее самочувствие."
    },
    "Book Your Massage in Ankara Today": {
      tr: "Bugün Ankara'da Masajını Rezerve Et",
      sr: "Rezerviši svoju masažu u Ankari danas",
      ru: "Запиши свой массаж в Анкаре сегодня"
    },
    "Ready to take your recovery seriously?": {
      tr: "Toparlanmanı ciddiye almaya hazır mısın?",
      sr: "Spreman da svoj oporavak shvatiš ozbiljno?",
      ru: "Готов(а) серьёзно отнестись к своему восстановлению?"
    },
    "Not sure where to start? I offer complimentary 15-minute consultations to help you choose the right type of massage for your goals.": {
      tr: "Nereden başlayacağından emin değil misin? Hedeflerine uygun doğru masaj türünü seçmen için ücretsiz 15 dakikalık görüşmeler sunuyorum.",
      sr: "Nisi siguran odakle da kreneš? Nudim besplatne 15-minutne konsultacije da ti pomognem da izabereš pravi tip masaže za tvoje ciljeve.",
      ru: "Не уверен(а), с чего начать? Я предлагаю бесплатные 15-минутные консультации, чтобы помочь подобрать правильный тип массажа под твои цели."
    },
    "Benefits of Wellness Massage at Eylem Tarhan Personal Training": {
      tr: "Eylem Tarhan Personal Training'de Wellness Masajının Faydaları",
      sr: "Prednosti wellness masaže u Eylem Tarhan Personal Training-u",
      ru: "Преимущества wellness-массажа в Eylem Tarhan Personal Training"
    },
    "licensed massage therapists in Ankara": {
      tr: "Ankara'da lisanslı masaj terapistleri",
      sr: "licencirani masažni terapeuti u Ankari",
      ru: "лицензированные массажные терапевты в Анкаре"
    },
    "work alongside your personal training program to support:": {
      tr: "personal training programınla birlikte çalışarak şunları destekler:",
      sr: "rade uporedo sa tvojim personalnim trening programom kako bi podržali:",
      ru: "работают вместе с твоей программой персональных тренировок, чтобы поддержать:"
    },
    "inflammation and soreness": {
      tr: "iltihap ve kas ağrısı",
      sr: "upala i bol u mišićima",
      ru: "воспаление и мышечная боль"
    },
    "mobility and flexibility": {
      tr: "mobilite ve esneklik",
      sr: "mobilnost i fleksibilnost",
      ru: "мобильность и гибкость"
    },
    "circulation and range of motion": {
      tr: "dolaşım ve hareket açıklığı",
      sr: "cirkulacija i raspon pokreta",
      ru: "кровообращение и амплитуда движения"
    },
    "chronic tension and stress": {
      tr: "kronik gerginlik ve stres",
      sr: "hronična napetost i stres",
      ru: "хроническое напряжение и стресс"
    },
    "and nervous system recovery": {
      tr: "ve sinir sistemi toparlanması",
      sr: "i oporavak nervnog sistema",
      ru: "и восстановление нервной системы"
    },
    "Each session is personalized to your goals,whether you need a targeted": {
      tr: "Her seans hedeflerine göre kişiselleştirilir — hedefli bir seansa mı ihtiyacın var",
      sr: "Svaka sesija je personalizovana prema tvojim ciljevima — bilo da ti treba ciljana",
      ru: "Каждая сессия настроена под твои цели — нужен ли тебе целенаправленный"
    },
    "sports massage": {
      tr: "spor masajı",
      sr: "sportska masaža",
      ru: "спортивный массаж"
    },
    "Massage Services We Offer": {
      tr: "Sunduğumuz Masaj Hizmetleri",
      sr: "Usluge masaže koje nudimo",
      ru: "Услуги массажа, которые мы предлагаем"
    },
    "Sports Massage Therapy": {
      tr: "Spor Masaj Terapisi",
      sr: "Sportska masažna terapija",
      ru: "Спортивная массажная терапия"
    },
    "Ideal for athletes and active clients. Helps release muscle tension, improve performance, and prevent injury.": {
      tr: "Sporcular ve aktif danışanlar için ideal. Kas gerginliğini gevşetmeye, performansı artırmaya ve sakatlığı önlemeye yardımcı olur.",
      sr: "Idealna za sportiste i aktivne klijente. Pomaže u oslobađanju mišićne napetosti, poboljšanju performansa i sprečavanju povreda.",
      ru: "Идеально для спортсменов и активных клиентов. Помогает снять мышечное напряжение, улучшить результаты и предотвратить травмы."
    },
    "Deep Tissue Massage": {
      tr: "Derin Doku Masajı",
      sr: "Masaža dubokog tkiva",
      ru: "Массаж глубоких тканей"
    },
    "Focuses on the deeper layers of muscle and connective tissue. Perfect for chronic tightness, knots, or postural imbalances.": {
      tr: "Kas ve bağ dokusunun daha derin katmanlarına odaklanır. Kronik gerginlik, düğümler veya postürel dengesizlikler için mükemmeldir.",
      sr: "Fokusira se na dublje slojeve mišića i vezivnog tkiva. Savršena za hroničnu ukočenost, čvorove ili posturalne neravnoteže.",
      ru: "Фокусируется на более глубоких слоях мышц и соединительной ткани. Идеально для хронической скованности, узлов или постуральных дисбалансов."
    },
    "Recovery & Relaxation Massage": {
      tr: "Toparlanma ve Rahatlama Masajı",
      sr: "Masaža oporavka i opuštanja",
      ru: "Восстановительный и релакс-массаж"
    },
    "Gentle and restorative. Helps reduce stress, calm the nervous system, and promote whole-body healing.": {
      tr: "Nazik ve onarıcı. Stresi azaltmaya, sinir sistemini sakinleştirmeye ve tüm vücudun iyileşmesini desteklemeye yardımcı olur.",
      sr: "Nežna i obnavljajuća. Pomaže u smanjenju stresa, smirivanju nervnog sistema i podršci celokupnom telesnom oporavku.",
      ru: "Мягкий и восстанавливающий. Помогает снизить стресс, успокоить нервную систему и поддержать восстановление всего тела."
    },
    "Pre/Post Workout Tune-Up": {
      tr: "Antrenman Öncesi/Sonrası Tune-Up",
      sr: "Tune-up pre / posle treninga",
      ru: "Тюнинг до / после тренировки"
    },
    "Quick 30-minute massage sessions to prime muscles before training or recover after a tough workout.": {
      tr: "Antrenman öncesi kasları hazırlamak veya zorlu bir antrenman sonrası toparlanmak için hızlı 30 dakikalık masaj seansları.",
      sr: "Brze 30-minutne masažne sesije za pripremu mišića pre treninga ili oporavak posle teškog treninga.",
      ru: "Быстрые 30-минутные сессии массажа, чтобы подготовить мышцы к тренировке или восстановиться после тяжёлой нагрузки."
    },
    "Why Choose Eylem Tarhan for Massage Therapy in Ankara?": {
      tr: "Ankara'da Masaj Terapisi için Neden Eylem Tarhan'ı Seçmelisin?",
      sr: "Zašto izabrati Eylem Tarhan za masažnu terapiju u Ankari?",
      ru: "Почему выбрать Eylem Tarhan для массажной терапии в Анкаре?"
    },
    "•Located in the heart of Manhattan": {
      tr: "•Ankara'nın kalbinde",
      sr: "•U srcu Ankare",
      ru: "•В сердце Анкары"
    },
    "•Integrated with your personal training program": {
      tr: "•Personal training programınla entegre",
      sr: "•Integrisano sa tvojim programom personalnog treninga",
      ru: "•Интегрировано с твоей программой персональных тренировок"
    },
    "•Sessions customized to your fitness, recovery, and wellness goals": {
      tr: "•Seanslar fitness, toparlanma ve wellness hedeflerine göre özelleştirilmiş",
      sr: "•Sesije prilagođene tvojim fitnes, oporavnim i wellness ciljevima",
      ru: "•Сессии настроены под твои фитнес-, восстановительные и wellness-цели"
    },
    "•Trusted by athletes, professionals, and everyday Ankaraers": {
      tr: "•Sporcuların, profesyonellerin ve günlük Ankaralıların güvencesi",
      sr: "•Verovan od strane sportista, profesionalaca i svakodnevnih Ankarljana",
      ru: "•Доверяют спортсмены, профессионалы и обычные жители Анкары"
    },
    "I understand movement, training, and recovery, so you get more than just relaxation; you get results.": {
      tr: "Hareketi, antrenmanı ve toparlanmayı anlıyorum; bu yüzden sadece rahatlama değil, sonuç elde edersin.",
      sr: "Razumem pokret, trening i oporavak — zato dobijaš više od opuštanja; dobijaš rezultate.",
      ru: "Я понимаю движение, тренировку и восстановление — поэтому ты получаешь не просто расслабление, а результат."
    },
    "Massage Pricing & Packages": {
      tr: "Masaj Fiyatları ve Paketleri",
      sr: "Cene i paketi masaže",
      ru: "Цены и пакеты массажа"
    },
    "massage therapy services in Manhattan": {
      tr: "Ankara'da masaj terapi hizmetleri",
      sr: "usluge masažne terapije u Ankari",
      ru: "услуги массажной терапии в Анкаре"
    },
    "Package discounts available for Eylem Tarhan training clients.": {
      tr: "Eylem Tarhan antrenman danışanları için paket indirimleri mevcuttur.",
      sr: "Popusti na pakete dostupni za Eylem Tarhan klijente treninga.",
      ru: "Скидки на пакеты доступны для клиентов тренировок Eylem Tarhan."
    },
    "PRE AND POSTNATAL TRAINING: EMPOWERING MOMS FOR EVERY STAGE OF MOTHERHOOD": {
      tr: "HAMİLELİK ÖNCESİ VE SONRASI ANTRENMAN: ANNELİĞİN HER AŞAMASINDA ANNELERİ GÜÇLENDİRMEK",
      sr: "PRE I POSTNATALNI TRENING: OSNAŽIVANJE MAMA U SVAKOJ FAZI MAJČINSTVA",
      ru: "ТРЕНИРОВКИ ДО И ПОСЛЕ РОДОВ: ПОДДЕРЖКА МАМ НА КАЖДОМ ЭТАПЕ МАТЕРИНСТВА"
    },
    "WHAT IS PRE AND POSTNATAL TRAINING?": {
      tr: "HAMİLELİK ÖNCESİ VE SONRASI ANTRENMAN NEDİR?",
      sr: "ŠTA JE PRE I POSTNATALNI TRENING?",
      ru: "ЧТО ТАКОЕ ТРЕНИРОВКА ДО И ПОСЛЕ РОДОВ?"
    },
    "Pre and postnatal training is a specialized fitness program designed to support women throughout pregnancy and beyond. I provide safe and effective exercises tailored to the unique needs of expectant and new mothers, helping them maintain strength, flexibility, and overall well-being during this transformative time.": {
      tr: "Hamilelik öncesi ve sonrası antrenman; kadınları hamilelik boyunca ve sonrasında desteklemek için tasarlanmış özel bir fitness programıdır. Müstakbel ve yeni annelerin benzersiz ihtiyaçlarına göre uyarlanmış güvenli ve etkili egzersizler sunarak bu dönüştürücü dönemde güç, esneklik ve genel iyi oluşlarını korumalarına yardımcı oluyorum.",
      sr: "Pre i postnatalni trening je specijalizovan fitnes program dizajniran da podrži žene tokom trudnoće i nakon nje. Pružam bezbedne i efektivne vežbe prilagođene jedinstvenim potrebama trudnica i mladih mama, pomažući im da održe snagu, fleksibilnost i opšte blagostanje u ovom transformativnom periodu.",
      ru: "Тренировки до и после родов — специализированная фитнес-программа, поддерживающая женщин во время беременности и после. Я предлагаю безопасные и эффективные упражнения, адаптированные под уникальные потребности будущих и недавно ставших мам, помогая сохранить силу, гибкость и общее самочувствие в этот трансформационный период."
    },
    "JOIN ME ON YOUR MOTHERHOOD JOURNEY": {
      tr: "ANNELİK YOLCULUĞUNDA BANA KATIL",
      sr: "PRIDRUŽI MI SE NA SVOM PUTU MAJČINSTVA",
      ru: "ПРИСОЕДИНЯЙСЯ КО МНЕ В ТВОЁМ ПУТИ МАТЕРИНСТВА"
    },
    "At Eylem Tarhan, I’m dedicated to supporting you every step of the way on your motherhood journey. I will guide and empower you to stay active, healthy, and strong, so you can embrace the joys of pregnancy and motherhood with confidence. Take the first step toward a happier, healthier you and join my pre and postnatal training program today.": {
      tr: "Eylem Tarhan'da annelik yolculuğunun her adımında seni desteklemeye kendimi adadım. Aktif, sağlıklı ve güçlü kalman için sana rehberlik eder ve seni güçlendiririm; böylece hamileliğin ve anneliğin getirdiği sevinçleri özgüvenle kucaklayabilirsin. Daha mutlu ve daha sağlıklı bir sen olmaya doğru ilk adımı at, hamilelik öncesi ve sonrası antrenman programıma bugün katıl.",
      sr: "U Eylem Tarhan-u, posvećen sam tome da te podržim u svakom koraku tvog puta majčinstva. Vodiću te i osnažiću te da ostaneš aktivna, zdrava i snažna, kako bi sa samopouzdanjem prihvatila radosti trudnoće i majčinstva. Napravi prvi korak ka srećnijoj, zdravijoj sebi i pridruži se mom pre i postnatalnom trening programu danas.",
      ru: "В Eylem Tarhan я посвящён тому, чтобы поддерживать тебя на каждом шаге пути материнства. Я буду направлять и придавать силы, чтобы ты оставалась активной, здоровой и сильной, и могла с уверенностью принять радости беременности и материнства. Сделай первый шаг к более счастливой и здоровой версии себя — присоединяйся к моей программе тренировок до и после родов сегодня."
    },
    "EXPERIENCE THE BENEFITS": {
      tr: "FAYDALARI DENEYİMLE",
      sr: "DOŽIVI PREDNOSTI",
      ru: "ПОЧУВСТВУЙ ПРЕИМУЩЕСТВА"
    },
    "Stay strong, flexible, and confident throughout every stage of motherhood. Our personalized workouts help you maintain strength and mobility during pregnancy, ease common discomforts like back pain and sciatica, and prepare your body for labor through pelvic floor and endurance training. After birth, we focus on rebuilding core strength, improving posture, and addressing issues like diastasis recti. With regular movement, you’ll boost energy, elevate your mood, and support a smoother recovery journey.": {
      tr: "Anneliğin her aşamasında güçlü, esnek ve özgüvenli kal. Kişiye özel antrenmanlarımız hamilelik boyunca gücü ve mobiliteyi korumana, sırt ağrısı ve siyatik gibi yaygın rahatsızlıkları hafifletmene yardımcı olur ve pelvik taban ile dayanıklılık çalışmaları üzerinden vücudunu doğuma hazırlar. Doğumdan sonra core gücünü yeniden inşa etmeye, postürü iyileştirmeye ve diastasis recti gibi konulara odaklanırız. Düzenli hareketle enerjini yükseltir, ruh halini iyileştirir ve daha pürüzsüz bir toparlanma yolculuğunu desteklersin.",
      sr: "Ostani snažna, fleksibilna i sigurna u sebe tokom svake faze majčinstva. Naši personalizovani treninzi pomažu ti da održiš snagu i mobilnost tokom trudnoće, ublažiš uobičajene tegobe poput bola u leđima i išijasa i pripremiš telo za porođaj kroz vežbe karličnog dna i izdržljivosti. Posle porođaja, fokusiramo se na ponovno izgradnju snage jezgra, poboljšanje posture i rešavanje problema poput dijastaze rektusa. Uz redovnu aktivnost, podižeš energiju, raspoloženje i podržavaš lakši put oporavka.",
      ru: "Оставайся сильной, гибкой и уверенной на каждом этапе материнства. Наши персональные тренировки помогают сохранить силу и мобильность во время беременности, ослабить распространённые неприятности — боли в спине и седалищный нерв — и подготовить тело к родам с помощью работы тазового дна и тренировок выносливости. После родов мы фокусируемся на восстановлении силы кора, улучшении осанки и работе с диастазом прямых мышц живота. Регулярное движение поднимает энергию, настроение и поддерживает плавное восстановление."
    },
    "THE IMPORTANCE OF MENTAL HEALTH": {
      tr: "RUH SAĞLIĞININ ÖNEMİ",
      sr: "VAŽNOST MENTALNOG ZDRAVLJA",
      ru: "ВАЖНОСТЬ МЕНТАЛЬНОГО ЗДОРОВЬЯ"
    },
    "Pregnancy and motherhood bring significant physical changes, but they also impact mental health. Our pre and postnatal training programs not only focus on strengthening the body but also prioritize mental well-being. Exercise has been shown to reduce stress, alleviate symptoms of anxiety and depression, and improve overall mood, providing much-needed support during this emotionally demanding time.": {
      tr: "Hamilelik ve annelik önemli fiziksel değişiklikler getirir, ancak ruh sağlığını da etkiler. Hamilelik öncesi ve sonrası antrenman programlarımız sadece vücudu güçlendirmeye odaklanmakla kalmaz, zihinsel iyi oluşa da öncelik verir. Egzersizin stresi azalttığı, anksiyete ve depresyon semptomlarını hafiflettiği ve genel ruh halini iyileştirdiği gösterilmiştir; duygusal olarak zorlu bu dönemde çok ihtiyaç duyulan desteği sağlar.",
      sr: "Trudnoća i majčinstvo donose značajne fizičke promene, ali utiču i na mentalno zdravlje. Naši pre i postnatalni trening programi ne fokusiraju se samo na jačanje tela, već i na mentalno blagostanje. Pokazano je da vežba smanjuje stres, ublažava simptome anksioznosti i depresije i poboljšava ukupno raspoloženje — pružajući prijeko potrebnu podršku u ovom emocionalno zahtevnom periodu.",
      ru: "Беременность и материнство приносят значительные физические изменения, но также влияют на ментальное здоровье. Наши программы тренировок до и после родов фокусируются не только на укреплении тела, но и на ментальном благополучии. Доказано, что упражнения снижают стресс, ослабляют симптомы тревоги и депрессии и улучшают общее настроение — предоставляя необходимую поддержку в этот эмоционально насыщенный период."
    },
    "WHEN TO START PRE AND POSTNATAL TRAINING?": {
      tr: "HAMİLELİK ÖNCESİ VE SONRASI ANTRENMANA NE ZAMAN BAŞLANMALI?",
      sr: "KADA POČETI SA PRE I POSTNATALNIM TRENINGOM?",
      ru: "КОГДА НАЧИНАТЬ ТРЕНИРОВКИ ДО И ПОСЛЕ РОДОВ?"
    },
    "Pre and postnatal training can be started at any stage of pregnancy and continued postpartum. My programs are adaptable to accommodate the changing needs of your body throughout each trimester and beyond. Whether you’re in the early stages of pregnancy or adjusting to life with a newborn, I will customize a program that’s right for you.": {
      tr: "Hamilelik öncesi ve sonrası antrenmana hamileliğin herhangi bir aşamasında başlanabilir ve doğum sonrası dönemde de devam ettirilebilir. Programlarım her trimesterde ve sonrasında vücudunun değişen ihtiyaçlarına uyum sağlayacak şekilde esnektir. İster hamileliğin erken evresinde ol, ister yeni bir bebekle hayata uyum sağlıyor — sana uygun bir programı kişiye özel hazırlarım.",
      sr: "Pre i postnatalni trening može se započeti u bilo kojoj fazi trudnoće i nastaviti posle porođaja. Moji programi su prilagodljivi promenljivim potrebama tela kroz svaki trimestar i dalje. Bilo da si u ranim fazama trudnoće ili se prilagođavaš životu sa bebom, kreiraću program koji ti odgovara.",
      ru: "Тренировки до и после родов можно начинать на любом этапе беременности и продолжать после. Мои программы адаптируются под меняющиеся потребности тела на каждом триместре и далее. Будь ты в ранней стадии беременности или привыкаешь к жизни с новорождённым, я подберу программу именно под тебя."
    },
    "What to Expect": {
      tr: "Neler Bekleyebilirsin",
      sr: "Šta da očekuješ",
      ru: "Чего ожидать"
    },
    "Join our": {
      tr: "Bizim",
      sr: "Pridruži se našem",
      ru: "Присоединяйся к нашему"
    },
    "stretch class at Eylem Tarhan Personal Training for a rejuvenating and transformative experience. Led by me, this specialized class focuses on enhancing flexibility, relieving tension, and promoting overall well-being through targeted stretching techniques.": {
      tr: "Eylem Tarhan Personal Training'deki stretch dersine katıl — yenileyici ve dönüştürücü bir deneyim için. Benim önderliğimde bu özel ders; hedefli esneme teknikleriyle esnekliği artırmaya, gerginliği gidermeye ve genel iyi oluşu desteklemeye odaklanır.",
      sr: "stretch času u Eylem Tarhan Personal Training-u za podmlađujuće i transformativno iskustvo. Pod mojim vođstvom, ovaj specijalizovan čas se fokusira na poboljšanje fleksibilnosti, oslobađanje napetosti i unapređenje opšteg blagostanja kroz ciljane tehnike istezanja.",
      ru: "stretch-классу в Eylem Tarhan Personal Training — для омолаживающего и преобразующего опыта. Под моим руководством этот специализированный класс фокусируется на улучшении гибкости, снятии напряжения и поддержании общего самочувствия с помощью целенаправленных техник растяжки."
    },
    "MyoFascial Stretching targets the fascia, the connective tissue that surrounds muscles, bones, and organs, to improve mobility and range of motion. In our intimate group setting, you’ll receive personalized attention and guidance as you explore a series of gentle yet effective stretches designed to release tightness and restore balance to your body.": {
      tr: "MiyoFasyal Esneme, kasları, kemikleri ve organları çevreleyen bağ dokusu olan fasyayı hedef alarak mobiliteyi ve hareket açıklığını iyileştirir. Samimi grup ortamımızda, vücudundaki sıkışıklığı serbest bırakmak ve dengeyi yeniden kurmak için tasarlanmış nazik ama etkili bir dizi esnemeyi keşfederken kişiye özel ilgi ve rehberlik alırsın.",
      sr: "MioFascijalno istezanje cilja fasciju — vezivno tkivo koje okružuje mišiće, kosti i organe — kako bi se poboljšala mobilnost i raspon pokreta. U našem intimnom grupnom okruženju dobijaš personalizovanu pažnju i smernice dok istražuješ niz nežnih ali efikasnih istezanja osmišljenih da oslobode ukočenost i vrate balans u telo.",
      ru: "Миофасциальная растяжка работает с фасцией — соединительной тканью вокруг мышц, костей и органов — чтобы улучшить мобильность и амплитуду движения. В нашей небольшой группе ты получишь индивидуальное внимание и руководство, исследуя ряд мягких, но эффективных растяжек, призванных снять зажимы и восстановить баланс тела."
    },
    "This class is the perfect accompaniment for runners, cyclists, and individuals who spend long hours at a desk, offering relief from the repetitive strain and tightness that often accompany these activities. Whether you’re looking to optimize athletic performance, alleviate discomfort from sedentary work habits, or simply enhance your overall well-being, our Stretch class offers something for everyone.": {
      tr: "Bu ders koşucular, bisikletçiler ve uzun saatler masa başında oturanlar için mükemmel bir tamamlayıcı; bu aktivitelere sıkça eşlik eden tekrarlayan zorlanma ve gerginlikten rahatlama sunar. İster atletik performansını optimize etmek iste, ister sedanter iş alışkanlıklarından gelen rahatsızlığı hafiflet ya da sadece genel iyi oluşunu güçlendir — Stretch dersimiz herkese bir şey sunar.",
      sr: "Ovaj čas je savršen pratilac za trkače, biciklište i one koji provode duge sate za stolom, nudeći olakšanje od ponavljanog opterećenja i ukočenosti koje često prate ove aktivnosti. Bilo da želiš da optimizuješ atletski učinak, ublažiš nelagodu od sedećih radnih navika ili jednostavno unapređuješ blagostanje, naš Stretch čas ima nešto za svakoga.",
      ru: "Этот класс — отличный спутник для бегунов, велосипедистов и тех, кто проводит долгие часы за столом: он снимает повторяющееся напряжение и зажимы, часто сопутствующие этим занятиям. Хочешь ли ты оптимизировать спортивные результаты, ослабить дискомфорт от сидячей работы или просто укрепить общее самочувствие — наш Stretch-класс предлагает что-то для каждого."
    },
    "Experience the benefits of improved posture, reduced pain, and enhanced athletic performance as you embark on a journey toward greater freedom of movement and a healthier, more vibrant life.": {
      tr: "Daha fazla hareket özgürlüğü ve daha sağlıklı, daha canlı bir hayata doğru bir yolculuğa çıkarken iyileşen postürün, azalan ağrının ve gelişen atletik performansın faydalarını yaşa.",
      sr: "Doživi prednosti bolje posture, smanjenog bola i unapređenog atletskog učinka dok krećeš na put ka većoj slobodi pokreta i zdravijem, življem životu.",
      ru: "Ощути плюсы улучшенной осанки, сниженной боли и повышенной спортивной формы, отправляясь к большей свободе движения и более здоровой, насыщенной жизни."
    },
    "Don’t miss out on this opportunity to prioritize self-care and unlock your body’s full potential. Reserve your spot in our semi-private stretch class today and take the first step toward a more flexible, resilient, and revitalized you.": {
      tr: "Öz bakıma öncelik verme ve vücudunun tam potansiyelini açığa çıkarma fırsatını kaçırma. Yarı-özel stretch dersimizdeki yerini bugün ayır ve daha esnek, dayanıklı ve canlanmış bir sen olmaya doğru ilk adımı at.",
      sr: "Ne propusti priliku da staviš samobrigu na prvo mesto i otključaš pun potencijal tela. Rezerviši svoje mesto u našem semi-privatnom stretch času danas i napravi prvi korak ka fleksibilnijoj, otpornijoj i osveženoj sebi.",
      ru: "Не упусти возможность поставить заботу о себе на первое место и раскрыть весь потенциал своего тела. Забронируй место в нашем полу-приватном stretch-классе сегодня и сделай первый шаг к более гибкой, выносливой и обновлённой версии себя."
    },

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
  var nodeToOriginal = typeof WeakMap === "function" ? new WeakMap() : null;

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
    // strings whose source text is NOT English (Turkeyn reviews, Eylem quotes)
    // can still be rendered in EN/RU via DICT entries keyed on the source.
    // If no DICT entry exists for the current lang, lookup() returns null and
    // the node falls back to its original source text (unchanged).
    for (var k = 0; k < textNodes.length; k++) translateNode(textNodes[k]);
    for (var l = 0; l < attrTargets.length; l++) translateAttr(attrTargets[l]);
    applyBlockTranslations();
  }

  // Block-level translation: paragraphs broken by inline tags
  // (<strong>, <em>, etc.) end up as multiple text nodes that don't match
  // single DICT keys individually. For each tracked block we cache the
  // original innerHTML so we can either replace it with a flat translated
  // string or restore the source markup on language switch.
  var blockTargets = []; // { el, originalHTML, key }

  function collectBlocks(root) {
    var blocks = root.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, blockquote");
    for (var i = 0; i < blocks.length; i++) {
      var el = blocks[i];
      if (shouldSkip(el)) continue;
      if (el.dataset.scBlockSeen) continue;
      if (!el.children || el.children.length === 0) continue; // pure text — handled by translateNode
      // Only do block-level translation when ALL inline children are
      // formatting-only tags (b/strong/em/i). Skip elements with links,
      // images, buttons, spans etc. — replacing their textContent would
      // destroy navigation/markup.
      var safeChildren = true;
      for (var c = 0; c < el.children.length; c++) {
        var tagName = el.children[c].tagName;
        if (tagName !== "B" && tagName !== "STRONG" && tagName !== "EM" && tagName !== "I" && tagName !== "BR") {
          safeChildren = false;
          break;
        }
      }
      if (!safeChildren) continue;
      // Reconstruct the *original* (untranslated) textContent by walking the
      // element's text nodes and pulling each one's stored original. This way
      // we can match the DICT key even after translateNode has already swapped
      // some of the child text nodes to the target language.
      var origText = "";
      var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
      var tn;
      while ((tn = w.nextNode())) {
        var orig = (nodeToOriginal && nodeToOriginal.get(tn)) || tn.nodeValue;
        origText += orig;
      }
      origText = origText.trim();
      if (!origText || origText.length < 6) continue;
      if (!DICT[origText]) continue;
      el.dataset.scBlockSeen = "1";
      blockTargets.push({ el: el, originalHTML: el.innerHTML, key: origText });
    }
  }

  function applyBlockTranslations() {
    for (var i = 0; i < blockTargets.length; i++) {
      var b = blockTargets[i];
      var entry = DICT[b.key];
      if (!entry) continue;
      var translated = entry[state.lang];
      if (translated) {
        b.el.textContent = translated;
      } else {
        // current lang has no translation (it IS the source language) → restore original markup
        b.el.innerHTML = b.originalHTML;
      }
    }
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
      if (nodeToOriginal) nodeToOriginal.set(n, n.nodeValue);
    }
  }

  function refreshTranslations() {
    collectTextNodes(document.body);
    collectAttrs(document.body);
    collectBlocks(document.body);
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
    // i.e. section intros like "WELCOME" / "Located in Yıldız…".  Skip
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
