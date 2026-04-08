# 🏠 Sky House — Landing Page Komunitas Discord

> Landing page modern untuk komunitas Discord Indonesia — aktif, seru, dan penuh cerita.

## Tentang

Sky House adalah komunitas Discord Indonesia dengan **800+ member** yang fokus pada hiburan, event seru, dan interaksi sosial. Website ini dibuat sebagai pintu masuk bagi calon member baru — menampilkan info komunitas, daftar event, nilai-nilai komunitas, dan ajakan bergabung secara visual dan engaging.

Didirikan sejak **18 Desember 2021**, Sky House telah menyelenggarakan berbagai event mulai dari talkshow, storytelling horror, hingga eksplorasi budaya lokal.

## ✨ Fitur

- **Hero Section** — Animasi scroll, gradient text, dan CTA yang eye-catching
- **Stats Showcase** — Menampilkan 800+ Members, 15+ Events, 20+ Partnerships
- **Event Gallery** — Poster event dengan kategori (Talkshow, Horror, Storytelling, Culture)
- **Core Values** — Event Seru, Komunitas Aktif, Konten Unik, Lingkungan Suportif
- **Smooth Scroll & Progress Bar** — Pengalaman browsing yang halus
- **SEO Ready** — Open Graph tags, Twitter Cards, Sitemap, robots.txt
- **Fully Responsive** — Optimal di desktop, tablet, dan mobile
- **Dark Theme** — Nuansa gelap dengan aksen purple yang modern

## 🛠️ Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | React 19 |
| Language | TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion (Motion React) |
| Icons | Lucide React |
| UI Patterns | shadcn-inspired (CVA, clsx, tailwind-merge) |

## 🖼️ Preview

![Sky House Preview](https://github.com/ngetikin/skyhouse/blob/main/preview-skyhouse.jpeg?raw=true)

## 🚀 Installation

**Prerequisites:** Node.js (LTS recommended)

```bash
# Clone repository
git clone https://github.com/ngetikin/skyhouse.git
cd skyhouse

# Install dependencies
npm install

# Jalankan development server (localhost:3000)
npm run dev

# Build untuk production
npm run build

# Preview hasil build
npm run preview

# Type-check
npm run lint
```

### Environment Variables

Buat file `.env.local` berdasarkan `.env.example`:

```env
GEMINI_API_KEY=your_gemini_api_key_here
APP_URL=https://skyhouseoffcl.vercel.app
```

## 📁 Folder Structure

```
skyhouse/
├── public/
│   ├── logo+favicon-skyhouse.png
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx          # Reusable Button component
│   │   ├── About.tsx               # Tentang komunitas
│   │   ├── CTA.tsx                 # Call-to-action section
│   │   ├── Events.tsx              # Gallery event
│   │   ├── Experience.tsx          # Testimonial section
│   │   ├── Footer.tsx              # Footer + social links
│   │   ├── Hero.tsx                # Hero/landing section
│   │   ├── Navbar.tsx              # Navigation bar
│   │   ├── Stats.tsx               # Stats showcase
│   │   └── Values.tsx              # Core values
│   ├── lib/
│   │   └── utils.ts                # Utility functions (cn helper)
│   ├── App.tsx                     # Main app layout
│   ├── constants.ts                # Data komunitas & assets
│   ├── index.css                   # Global styles + Tailwind theme
│   └── main.tsx                    # Entry point
├── index.html                      # HTML entry + SEO meta tags
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json
```

## 🗺️ Roadmap

- [ ] Integrasi Google Analytics / Plausible
- [ ] Halaman detail event individual
- [ ] Newsletter / email subscription
- [ ] Testimonial slider dengan data dinamis
- [ ] Multi-language support (EN/ID)
- [ ] Performance optimization (image lazy loading, webp conversion)

## 👥 Tim

Project ini dikembangkan dan dikelola oleh komunitas **Sky House**.

## 📬 Contact & Links

- **Discord:** [dsc.gg/skyhouse](https://dsc.gg/skyhouse)
- **Instagram:** [@skyhouse.offcl](https://www.instagram.com/skyhouse.offcl)
- **Live Demo:** [skyhouseoffcl.vercel.app](https://skyhouseoffcl.vercel.app/)
- **GitHub:** [github.com/ngetikin/skyhouse](https://github.com/ngetikin/skyhouse)

## 🤝 Contributing

Kontribusi sangat terbuka! Jika kamu punya ide fitur baru, perbaikan bug, atau perbaikan UI/UX:

1. **Fork** repository ini
2. Buat **branch** fitur baru (`git checkout -b feature/nam-fitur`)
3. **Commit** perubahan (`git commit -m "feat: deskripsi perubahan"`)
4. **Push** ke branch (`git push origin feature/nam-fitur`)
5. Buka **Pull Request**

Pastikan code passing type-check (`npm run lint`) dan build (`npm run build`) sebelum submit PR.

---

> Made with 💜 for the Sky House community · Since 2021
