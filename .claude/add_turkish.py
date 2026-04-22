#!/usr/bin/env python3
"""
Add Turkish (tr) translations to site-controls.js DICT entries.
Merges `tr: "..."` into each existing `{ sr: ..., ru: ... }` object.
Only modifies entries where we have a Turkish translation.
Leaves untranslated entries as-is (they'll fall back to English at runtime).
"""
import re
import sys
from pathlib import Path

TR = {
    # Navigation
    "HOME": "ANA SAYFA",
    "Home": "Ana Sayfa",
    "Services": "Hizmetler",
    "Service": "Hizmet",
    "Personal Training": "Kişisel Antrenman",
    "Personal training": "Kişisel antrenman",
    "personal training": "kişisel antrenman",
    "PERSONAL TRAINING": "KİŞİSEL ANTRENMAN",
    "Trainer": "Antrenör",
    "TRAINER": "ANTRENÖR",
    "Trainers": "Antrenörler",
    "TRAINERS": "ANTRENÖRLER",
    "MEET YOUR TRAINER": "ANTRENÖRÜNLE TANIŞ",
    "Pricing": "Fiyatlar",
    "Prices": "Fiyatlar",
    "PRICING": "FİYATLAR",
    "About": "Hakkında",
    "ABOUT": "HAKKINDA",
    "About us": "Hakkımızda",
    "Contact": "İletişim",
    "CONTACT": "İLETİŞİM",
    "Blog": "Blog",
    "BLOG": "BLOG",
    "FAQ": "SSS",
    "faq": "sss",
    "Location": "Konum",
    "Our App": "Uygulamamız",
    "JOIN US": "BİZE KATIL",
    "Register Now": "Hemen Kaydol",
    "Our Friends": "Arkadaşlarımız",
    "press": "basın",
    "terms & conditions": "kullanım koşulları",
    "terms & conditions ": "kullanım koşulları ",

    # Service names
    "Barre": "Barre",
    "BARRE": "BARRE",
    "BRIDAL CUT": "GELİNLİK ANTRENMANI",
    "CORRECTIVE EXERCISE": "KOREKTİF EGZERSİZ",
    "HIIT": "HIIT",
    "KETTLEBELL WORKOUT": "KETTLEBELL ANTRENMANI",
    "STRENGTH TRAINING": "KUVVET ANTRENMANI",
    "Strength Training": "Kuvvet Antrenmanı",
    "BODY TRANSFORMATION": "VÜCUT DÖNÜŞÜMÜ",
    "Body Transformation": "Vücut Dönüşümü",
    "WEIGHT LOSS COACHING": "KİLO VERME KOÇLUĞU",
    "Weight Loss Coaching": "Kilo Verme Koçluğu",
    "Marathon Preparation Training": "Maraton Hazırlık Antrenmanı",
    "marathon preparation training": "maraton hazırlık antrenmanı",
    "MARATHON PREPARATION TRAINING": "MARATON HAZIRLIK ANTRENMANI",
    "Massage Therapy": "Masaj Terapisi",
    "MASSAGE THERAPY": "MASAJ TERAPİSİ",
    "Pre & Post Natal Fitness": "Hamilelik Öncesi ve Sonrası Fitness",
    "PRE AND POSTNATAL TRAINING": "HAMİLELİK ÖNCESİ VE SONRASI ANTRENMAN",
    "Reformer Pilates Class": "Reformer Pilates Dersi",
    "REFORMER PILATES": "REFORMER PİLATES",
    "STRETCH THERAPY CLASS": "ESNEME TERAPİSİ DERSİ",

    # Hero / welcome
    "WELCOME": "HOŞ GELDİN",
    "CLASSES | SERVICES": "DERSLER | HİZMETLER",
    "5-STAR RATINGS": "5 YILDIZLI DEĞERLENDİRMELER",
    "AS FEATURED IN": "HAKKIMIZDA YAZANLAR",
    "Offering now": "Şimdi sunuyoruz",
    "the team": "ekip",
    "Articles & publications": "Makaleler ve yayınlar",
    "BLOG | NEWS": "BLOG | HABERLER",
    "Latest": "En Son",
    "LATEST": "EN SON",
    "Personal & Tailored": "Kişisel ve Özel",
    "More Information": "Daha Fazla Bilgi",
    "Class led by": "Dersi veren",
    "new client promo": "yeni müşteri kampanyası",
    "Book a class today with class pass": "Class pass ile bugün bir ders rezerve et",
    "No matter your goal, we'll get you there!": "Hedefin ne olursa olsun, seni oraya götüreceğiz!",
    "Split your sessions with a partner to save & stay motivated!": "Tasarruf etmek ve motive kalmak için seanslarını bir partnerle paylaş!",

    # CTAs
    "CALL TO SCHEDULE": "RANDEVU İÇİN ARA",
    "Get in touch": "İletişime geç",
    "View All Services": "Tüm Hizmetleri Gör",
    "read more": "devamını oku",
    "Read More": "Devamını Oku",
    "READ MORE": "DEVAMINI OKU",
    "Submit": "Gönder",
    "Send": "Gönder",
    "SCHEDULE NOW": "ŞİMDİ RANDEVU AL",

    # Sessions / packages
    "1 Session": "1 Seans",
    "12 Sessions": "12 Seans",
    "25 Sessions": "25 Seans",
    "40 Sessions": "40 Seans",
    "10 Sessions": "10 Seans",
    "duet 10": "düet 10",
    "1 class": "1 ders",
    "5 classes": "5 ders",
    "10 classes": "10 ders",
    "2 class promo": "2 ders kampanyası",
    "5 class promo": "5 ders kampanyası",
    "30 min Massage": "30 dk Masaj",
    "45 min Massage": "45 dk Masaj",
    "60 min Massage": "60 dk Masaj",
    "90 min Massage": "90 dk Masaj",
    "Single Session": "Tek Seans",
    "Session Package": "Seans Paketi",
    "Online Training": "Online Antrenman",
    "Training + Diet": "Antrenman + Diyet",
    "Per Session": "Seans Başına",
    "Per Month": "Aylık",
    "In-Person at Studio": "Stüdyoda Yüz Yüze",
    "Save vs. single sessions": "Tek seanslara göre tasarruf",
    "1v1 Monthly Program": "1v1 Aylık Program",
    "Training + Nutrition Plan": "Antrenman + Beslenme Planı",
    "Get Started": "Başla",
    "Book anytime": "İstediğin zaman rezerve et",
    "Cancel anytime": "İstediğin zaman iptal et",
    "Personalised workouts plus a full nutrition plan built around your goals.": "Hedeflerine göre hazırlanmış kişisel antrenmanlar ve kapsamlı bir beslenme planı.",
    "promotions": "kampanyalar",
    "1v1 In-Person Training": "1v1 Yüz Yüze Antrenman",
    "1v1 Online Coaching": "1v1 Online Koçluk",

    # Contact / form
    "Fill in the form and I'll get back to you via WhatsApp or email.": "Formu doldur, sana WhatsApp veya e-posta ile dönerim.",
    "Full name": "Ad Soyad",
    "Email": "E-posta",
    "Phone": "Telefon",
    "(optional)": "(isteğe bağlı)",
    "Goal": "Hedef",
    "Choose…": "Seç…",
    "Weight loss": "Kilo verme",
    "Muscle gain": "Kas kazanma",
    "General fitness": "Genel fitness",
    "Other": "Diğer",
    "Message": "Mesaj",
    "Tell me a bit about your goals…": "Hedeflerin hakkında biraz bilgi ver…",
    "Send via WhatsApp": "WhatsApp ile Gönder",
    "Sending… you will get a confirmation email.": "Gönderiliyor… onay e-postası alacaksın.",
    "Address": "Adres",
    "Opening hours": "Açılış saatleri",
    "Every day: 9:00 - 21:00": "Her gün: 9:00 - 21:00",

    # Identity / legal
    "Belgrade": "Belgrad",
    "EliteShape": "EliteShape",
    "EliteShape Belgrade": "EliteShape Belgrad",
    "Skip to content": "İçeriğe atla",
    "Hamburger Toggle Menu": "Menüyü aç / kapat",
    "Belgrade, Serbia 11000": "Belgrad, Sırbistan 11000",
    "© All Rights Reserved Elite Shape Personal Training": "© Tüm Hakları Saklıdır — Elite Shape Personal Training",
    "© All Rights Reserved EliteShape RS": "© Tüm Hakları Saklıdır — EliteShape RS",
    "Privacy Settings": "Gizlilik Ayarları",
    "Privacy Policy": "Gizlilik Politikası",

    # Categories
    "Training": "Antrenman",
    "Nutrition": "Beslenme",
    "Case Study": "Vaka Çalışması",

    # About / PT pages
    "ABOUT US": "HAKKIMIZDA",
    "ABOUT ME": "HAKKIMDA",
    "What drives me": "Beni ne motive ediyor",
    "I\u2019M COMMITTED": "KARARLIYIM",
    "I'M COMMITTED": "KARARLIYIM",
    "HABITS-BASED APPROACH": "ALIŞKANLIK TEMELLİ YAKLAŞIM",
    "MONTHLY CHECK-INS": "AYLIK KONTROLLER",
    "KNOWLEDGE IS POWER": "BİLGİ GÜÇTÜR",
    "Your Personal Trainer": "Kişisel Antrenörün",
    "Your Personal Trainer — Peter": "Kişisel Antrenörün — Peter",
    "Available at: Elite Shape Personal Training": "Konum: Elite Shape Personal Training",
    "WHAT\u2019S IN IT FOR ME": "BENİM İÇİN NE VAR",
    "HOW DOES IT WORK?": "NASIL ÇALIŞIR?",
    "GOAL SETTING": "HEDEF BELİRLEME",
    "PERSONALIZED PLAN": "KİŞİSEL PLAN",

    # Four-step card section
    "How It Works": "Nasıl Çalışır",
    "From first contact to real results in four steps.": "İlk temastan gerçek sonuçlara dört adımda.",
    "01 — Consultation": "01 — Danışma",
    "02 — Assessment": "02 — Değerlendirme",
    "03 — Your Program": "03 — Programın",
    "04 — Results": "04 — Sonuçlar",
    "Consultation": "Danışma",
    "Assessment": "Değerlendirme",
    "Your Program": "Programın",
    "Results": "Sonuçlar",
    "A free 20-minute conversation about your goals, training history and any injuries.": "Hedeflerin, antrenman geçmişin ve varsa yaralanmaların hakkında ücretsiz 20 dakikalık sohbet.",
    "Body measurements and movement analysis in the first session.": "İlk seansta vücut ölçümleri ve hareket analizi.",
    "You receive a fully personalised training and nutrition plan built for you.": "Sana özel, tamamen kişiselleştirilmiş antrenman ve beslenme planı alırsın.",
    "We track progress every week, adjust the plan, and celebrate every win.": "Her hafta ilerlemeni takip ederiz, planı güncelleriz ve her kazanımı kutlarız.",
    "I track progress every week, adjust the plan, and celebrate every win.": "Her hafta ilerlemeni takip ederim, planı güncellerim ve her kazanımı kutlarız.",
    "Training Features": "Antrenman Özellikleri",
    "Precise Technique": "Kesin Teknik",
    "Flexible Schedule": "Esnek Program",
    "Morning, afternoon or evening — we fit training around your life, not the other way around.": "Sabah, öğleden sonra veya akşam — antrenmanı hayatına biz uyduruyoruz, tersi değil.",
    "Morning, afternoon or evening — I fit training around your life, not the other way around.": "Sabah, öğleden sonra veya akşam — antrenmanı hayatına ben uyduruyorum, tersi değil.",
    "Intensity on Your Terms": "Senin Tempona Göre Yoğunluk",
    "Measurable Progress": "Ölçülebilir İlerleme",
    "Client Progress": "Müşteri İlerlemesi",
    "Average results after 12 weeks of coaching.": "12 haftalık koçluk sonrası ortalama sonuçlar.",
    "Strength (bench press)": "Güç (bench press)",
    "Body fat reduction": "Vücut yağında azalma",
    "Lean muscle gained": "Kazanılan yağsız kas",
    "Training consistency": "Antrenman tutarlılığı",
    "Strength": "Güç",
    "Bench press 1-rep max.": "Bench press 1 tekrar max.",
    "Body Fat": "Vücut Yağı",
    "Measured reduction across scans.": "Ölçümler boyunca azalma.",

    # Homepage tiles
    "Learn about our services": "Hizmetlerimiz hakkında bilgi al",
    "Become a member now": "Hemen üye ol",
    "FIRST TIMER": "İLK KEZ Mİ?",
    "Memberships": "Üyelikler",
    "MEMBERSHIPS": "ÜYELİKLER",
    "Valid for 12 months": "12 ay geçerli",

    # Peter / bio / standalone
    "PETER": "PETER",
    "Bio": "Biyografi",
}


def main():
    path = Path("/Users/oscarbrendon/.openclaw/workspace/Eylemtarhan/assets/site-controls.js")
    text = path.read_text(encoding="utf-8")

    # 1. Update default lang + langs list
    text = text.replace(
        'var DEFAULT_LANG = "sr";',
        'var DEFAULT_LANG = "tr";'
    )
    text = text.replace(
        'var LANGS = ["sr", "en", "ru"];',
        'var LANGS = ["tr", "sr", "en", "ru"];'
    )
    text = text.replace(
        "  // Values: { sr, ru }. Missing keys fall back to English.",
        "  // Values: { tr, sr, ru }. Missing keys fall back to English (the canonical source text in HTML)."
    )

    # 2. For every entry key we have a TR translation for, insert `tr: "..."` as the first field.
    added = 0
    skipped = 0

    def escape_tr(val: str) -> str:
        """Escape a Turkish string for embedding in a JS double-quoted string literal."""
        return val.replace("\\", "\\\\").replace('"', '\\"')

    for key, tr_value in TR.items():
        # Build a regex that finds: "key": {   (allow whitespace, line break)
        # We need to escape the key for regex AND for the actual JSON key string as stored in the file.
        # The file stores the key with actual Unicode characters (e.g., smart quotes) and certain escapes.
        # We'll match the key literally.
        key_escaped_for_regex = re.escape(key)
        # Pattern: "KEY": {(optional space/newline)(sr OR en OR ru): ...
        # We want to insert `tr: "value", ` right after the opening brace.
        pattern = re.compile(
            r'("' + key_escaped_for_regex + r'"\s*:\s*\{)(\s*)(?=(?:sr|en|ru)\s*:)',
            re.MULTILINE
        )

        tr_escaped = escape_tr(tr_value)

        # Check if there's already a tr: field — if so, skip.
        has_tr_pattern = re.compile(
            r'"' + key_escaped_for_regex + r'"\s*:\s*\{[^}]*\btr\s*:',
            re.MULTILINE | re.DOTALL
        )
        if has_tr_pattern.search(text):
            skipped += 1
            continue

        # Count how many matches before replacement.
        matches = pattern.findall(text)
        if not matches:
            skipped += 1
            sys.stderr.write(f"  ! NO MATCH for key: {key[:60]}\n")
            continue

        def replacement(m):
            return f'{m.group(1)}{m.group(2)}tr: "{tr_escaped}", '

        new_text, n = pattern.subn(replacement, text, count=1)
        if n == 1:
            text = new_text
            added += 1

    path.write_text(text, encoding="utf-8")
    print(f"OK — added TR translations for {added} keys, skipped {skipped}.")


if __name__ == "__main__":
    main()
