# 🌍 Universal Translator (React + Vite + Tailwind)

A simple, beginner‑friendly translator web app. Type English text, choose a target language, and get an instant translation using the free MyMemory Translation API. Built with React (Vite) and Tailwind CSS for a clean, responsive UI.

## ✨ Features
- Translate text to multiple languages (es, fr, de, hi, ar, ja)
- Clean, responsive Tailwind UI
- Loading and basic error states
- No API key required (MyMemory)

## 🧰 Tech Stack
- React + Vite
- Tailwind CSS (CDN or v4 import)
- MyMemory Translation API

## 🚀 Getting Started
```bash
# install deps
npm install

# start dev server (http://localhost:5173)
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

## 📁 Project Structure
```
translatorapp/
  ├─ src/
  │  ├─ App.jsx        # main UI + translate logic
  │  ├─ main.jsx       # React entry
  │  └─ index.css      # Tailwind import
  ├─ index.html        # Vite HTML entry
  ├─ vite.config.js    # Vite config (with Tailwind plugin if used)
  └─ .gitignore
```

## 🔧 Tailwind Options
- CDN (simple): add `<script src="https://cdn.tailwindcss.com"></script>` to `index.html` and keep `index.css` minimal.
- v4 import: `src/index.css` contains `@import "tailwindcss";` and Vite handles it.

## 📝 Notes
- API: `https://api.mymemory.translated.net/get?q=TEXT&langpair=en|TARGET`
- For better sentence support or quotas, swap to a RapidAPI provider later.

## 📜 License
MIT
