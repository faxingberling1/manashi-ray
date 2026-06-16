# Manashi Ray , Personal Portfolio

A professional, academic portfolio website designed and built for Dr. Manashi Ray , Professor of Sociology at West Virginia State University, author, and public intellectual.

## Design & Architecture
* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript
* **Styling:** Vanilla CSS Modules (no Tailwind)
* **Aesthetic:** Minimalist Academic , Ivory, Deep Navy, Warm Gold palette
* **Typography:** Cormorant Garamond (Display) & Inter (Body)

## Pages

| Route | Description |
|---|---|
| `/` | Home , hero, real biography intro, three CTAs |
| `/about` | Full biography, career stats, teaching positions, CV download |
| `/publications` | Research areas, peer-reviewed articles, book chapters, other writings |
| `/lectures` | Invited talks (7) and conference presentations (17 papers across 9 years) |
| `/book` | Interactive 3D book showcase , *Charting My Own Course* |
| `/speaking` | Speaking topics + full Awards & Honors (14 entries, grouped by category) |
| `/contact` | Contact form + social links |

## Key Features
- **Multi-page** Next.js App Router architecture (mirrors reference sites)
- **Scroll reveal animations** via custom `useScrollAnimation` hook (IntersectionObserver)
- **3D interactive book cover** with mouse-parallax tilt
- **CV download** linked to `/public/CV-Manashi-Ray.pdf`
- **Color-coded publication type badges** (Journal Article, Book Chapter, etc.)
- **Career timeline** with visual nodes in Teaching section
- **Grouped Awards** with dark navy headers and numbered gold cards
- Fully **responsive** (mobile-first layouts)

## Assets in `/public`
| File | Description |
|---|---|
| `manashi_portrait.png` | Portrait photograph |
| `book_cover.png` | Book cover , *Charting My Own Course* |
| `CV-Manashi-Ray.pdf` | Downloadable curriculum vitae |

## Setup and Development

### Installation
```bash
cd manashi-ray
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to preview.

### Production Build
```bash
npm run build
npm run start
```
