# 📊 Slides — Taqdimotlar

Turli fanlarga oid ta'limiy taqdimotlar to'plami. Har bir taqdimot — bu to'liq interaktiv veb-taqdimot bo'lib, animatsiyalar, vizualizatsiyalar va professional dizayn bilan jihozlangan.

## 🌐 Ko'rish

Taqdimotlarni ko'rish uchun: [https://qurbonsaid.github.io/slides/](https://qurbonsaid.github.io/slides/)

## 📚 Mavjud Taqdimotlar

### Fizika
- **Turli Muhitlarda Elektr Toki** — Elektr tokining metallar, elektrolitlar, gazlar, vakuum va yarim o'tkazgichlarda o'tish mexanizmlari haqida keng qamrovli taqdimot (15 slayd)

## ✨ Xususiyatlar

- 🎨 **Zamonaviy dizayn** — qorong'i rang sxemasi, gradient sarlavhalar, silliq animatsiyalar
- 🖱️ **Interaktiv navigatsiya** — bosish, klaviatura va touch swipe qo'llab-quvvatlanadi
- 📱 **Responsive** — mobil, planshet va desktop qurilmalarda mukammal ishlaydi
- 🎬 **Animatsiyalar** — fizik jarayonlarni vizualizatsiya qiluvchi CSS animatsiyalari
- 📊 **Matematik formulalar** — barcha formulalar chiroyli formatda
- 🔍 **To'liq ekran rejimi** — maksimal konsentratsiya uchun
- 📈 **Progress tracking** — joriy pozitsiyani ko'rsatuvchi progress bar va hisoblagich

## 🛠️ Texnologiyalar

- **Pure HTML/CSS/JS** — hech qanday freymvork yoki kutubxona ishlatilmagan
- **GitHub Pages** — statik fayl hosting
- **Google Fonts** — Inter va JetBrains Mono shriftlari
- **Slide Engine** — qayta ishlatilishi mumkin bo'lgan navigatsiya tizimi

## 📁 Struktura

```
slides/
├── index.html                              # Asosiy sahifa
├── fizika/
│   └── turli-muhitlarda-elektr-toki.html   # Fizika taqdimoti
├── css/
│   └── shared.css                          # Umumiy stillar
├── js/
│   └── slide-engine.js                     # Navigatsiya tizimi
└── README.md                               # Ushbu fayl
```

## 🚀 Yangi Taqdimot Qo'shish

1. Yangi fan uchun papka yarating (masalan, `matematika/`)
2. Taqdimot HTML faylini yarating
3. Slide Engine'dan foydalaning yoki mustaqil taqdimot yarating
4. `index.html` ga yangi kartochka qo'shing
5. Git orqali commit va push qiling

### Slide Engine'dan Foydalanish

```html
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Yangi Taqdimot</title>
  <!-- Stillaringiz -->
</head>
<body>
  <!-- Progress bar -->
  <div class="progress-container">
    <div class="progress-bar"></div>
  </div>
  
  <!-- Slide counter -->
  <div class="slide-counter">1 / 10</div>
  
  <!-- Click hint -->
  <div class="click-hint">Davom etish uchun bosing →</div>
  
  <!-- Fullscreen button -->
  <button class="fullscreen-btn" title="To'liq ekran">
    <!-- SVG icon -->
  </button>
  
  <!-- Slaydlaringiz -->
  <section class="slide">
    <!-- 1-slayd matni -->
  </section>
  
  <section class="slide">
    <!-- 2-slayd matni -->
  </section>
  
  <!-- Slide Engine'ni ulash -->
  <script src="../js/slide-engine.js"></script>
</body>
</html>
```

## 📝 Litsenziya

MIT License — batafsil ma'lumot uchun [LICENSE](LICENSE) faylini ko'ring.

## 👨‍💻 Muallif

**Qurbonsaid** — [GitHub](https://github.com/Qurbonsaid)

---

**Eslatma:** Barcha taqdimotlar ta'lim maqsadida yaratilgan va ochiq manba hisoblanadi.
