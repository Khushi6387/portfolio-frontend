# Khushi Pal — Developer Portfolio

Personal portfolio website built with **React.js + Vite**.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/         # Images and icons
├── components/
│   ├── layout/     # Navbar, Footer, Layout
│   ├── sections/   # Hero, About, Skills, Projects, Experience, Contact
│   └── ui/         # Reusable UI components
├── data/           # All portfolio content (edit here to update portfolio)
├── hooks/          # Custom React hooks
├── styles/         # Global CSS, variables, animations
└── utils/          # Helper functions
```

## 🛠️ Tech Stack

- **React 18** + **Vite 5**
- **react-icons** for icons
- **EmailJS** for contact form
- Pure CSS (no CSS framework)

## 📬 Contact Form Setup (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create a service and email template
3. Add your credentials to `src/data/personalInfo.js`

## 🌐 Deployment

```bash
# Netlify
npm run build
# Upload `dist/` folder to Netlify

# Or Vercel — connect your GitHub repo and it auto-deploys
```
