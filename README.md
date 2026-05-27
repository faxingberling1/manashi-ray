# Manashi Ray — Personal Portfolio Website

> A modern, responsive personal portfolio website showcasing projects, skills, and professional experience.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blueviolet?style=for-the-badge)](https://github.com/faxingberling1/manashi-ray)
[![GitHub](https://img.shields.io/badge/GitHub-faxingberling1-181717?style=for-the-badge&logo=github)](https://github.com/faxingberling1)

---

## ✨ Overview

**Manashi Ray** is a fully responsive personal portfolio website designed to present professional work, technical skills, and contact information in a clean, elegant interface. Built with modern web technologies and optimized for performance across all devices.

---

## 🚀 Features

- ⚡ **Fast & Responsive** — Optimized for desktop, tablet, and mobile screens
- 🎨 **Modern Design** — Sleek UI with smooth animations and transitions
- 📂 **Projects Showcase** — Highlighted personal and professional projects
- 🛠️ **Skills Section** — Visual representation of technical expertise
- 📬 **Contact Form** — Integrated contact form with validation
- 🌙 **Dark / Light Mode** — Theme toggle for user preference
- 🔒 **Security** — CAPTCHA-protected form submissions (Cloudflare Turnstile)
- 📈 **SEO Optimized** — Proper meta tags, Open Graph, and structured data

---

## 🛠️ Tech Stack

| Category       | Technology                     |
|----------------|-------------------------------|
| Framework      | Next.js (App Router)          |
| Styling        | CSS / Tailwind CSS            |
| Language       | TypeScript / JavaScript       |
| Deployment     | Vercel                        |
| Form Security  | Cloudflare Turnstile          |
| Version Control| Git & GitHub                  |

---

## 📁 Project Structure

```
manashi-ray/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Home / landing page
│   └── api/              # API routes (contact form, etc.)
├── components/           # Reusable React components
│   ├── Hero/             # Hero / banner section
│   ├── About/            # About me section
│   ├── Projects/         # Projects showcase
│   ├── Skills/           # Skills & technologies
│   └── Contact/          # Contact form
├── public/               # Static assets (images, icons)
├── styles/               # Global CSS styles
├── .env.local            # Environment variables (not committed)
└── README.md             # Project documentation
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/faxingberling1/manashi-ray.git

# 2. Navigate into the project directory
cd manashi-ray

# 3. Install dependencies
npm install

# 4. Create environment variables file
cp .env.example .env.local
# Fill in your API keys and configuration values

# 5. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Cloudflare Turnstile (CAPTCHA)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key_here
TURNSTILE_SECRET_KEY=your_secret_key_here

# Email / Contact Form (if applicable)
CONTACT_EMAIL=your@email.com
```

> ⚠️ Never commit your `.env.local` file — it is listed in `.gitignore`.

---

## 📦 Available Scripts

| Command         | Description                              |
|-----------------|------------------------------------------|
| `npm run dev`   | Start development server (localhost:3000)|
| `npm run build` | Build for production                     |
| `npm run start` | Start production server                  |
| `npm run lint`  | Run ESLint code linting                  |

---

## 🌐 Deployment

This project is deployed on **[Vercel](https://vercel.com/)**.

To deploy your own instance:

1. Fork this repository
2. Connect it to your Vercel account
3. Add your environment variables in the Vercel dashboard
4. Deploy with one click!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/faxingberling1/manashi-ray)

---

## 📸 Screenshots

*Screenshots will be added once the site is live.*

---

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are always welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/suggestion`)
3. Commit your changes (`git commit -m 'Add suggestion'`)
4. Push to the branch (`git push origin feature/suggestion`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

**Manashi Ray**

- 🌐 Website: [github.com/faxingberling1/manashi-ray](https://github.com/faxingberling1/manashi-ray)
- 🐙 GitHub: [@faxingberling1](https://github.com/faxingberling1)

---

<p align="center">Made with ❤️ by Manashi Ray</p>
