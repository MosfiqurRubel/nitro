# 🚀 Nitro Energy Drink Landing Page

A modern, interactive, and animated landing page built with **React**, **TypeScript**, **Tailwind CSS**, and **GSAP**.

This project recreates a premium product showcase experience with smooth scroll-based animations inspired by modern product websites.

---

## 📸 Features

### ✨ Animations

* Hero section centered floating Nitro can
* Smooth scroll-based transitions
* Production section reveal animation
* Production section pinning
* Cinematic can movement between sections
* Slow 3D can flip animation
* Floating can → Real product can transition
* Navbar entrance animation

---

## 🛠 Tech Stack

* React
* TypeScript
* Tailwind CSS
* GSAP
* ScrollTrigger
* Lucide React
* Vite

---

## 📂 Project Structure

```text
src/

├── assets/
│   └── images/

├── components/
│
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
│
├── sections/
│   ├── Hero.tsx
│   ├── ProductionSection.tsx
│   └── FlavorSection.tsx
│
├── svgIcon/
│   ├── icons.tsx
│   ├── SvgIcon.tsx
│   └── index.tsx
│
├── ui/
│   ├── Button.tsx
│   └── Heading.tsx
│
├── FloatingNitroCan.tsx
├── NitroJourney.tsx
│
├── App.tsx
└── main.tsx
```

---

# 🎯 Animation Flow

### Hero Section

* Floating Nitro can starts at the center.
* The can stays static while scrolling.

### Production Section

* Production title fades in.
* The can moves smoothly to the Production target.
* The can scales from `1 → 1.5`.
* The Production section is pinned.

### Flavor Section

* The can slowly travels toward the Flavor target.
* A cinematic flip animation occurs.
* The can scales down.
* Floating can fades out.
* Real green Nitro can fades in.

---

## 📦 Installation

Clone the repository.

```bash
git clone git@github.com:MosfiqurRubel/nitro.git
```

Move into the project directory.

```bash
cd nitro
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

---

## 📥 Available Scripts

Start development server:

```bash
npm run dev
```

Build production version:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Lint project:

```bash
npm run lint
```

---

## 📚 Dependencies

```json
{
  "react": "^19",
  "typescript": "^5",
  "tailwindcss": "^4",
  "gsap": "^3",
  "lucide-react": "^0.x"
}
```

---

## ⚙️ GSAP Plugins Used

```ts
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

---

## 🎨 Design Goals

This project focuses on:

* Premium product presentation
* Cinematic scroll experience
* Smooth animations
* Reusable React components
* Clean architecture
* Responsive layouts
* Modern UI interactions

---

## 🔮 Future Improvements

* Mobile-specific animations
* Performance optimization
* Accessibility improvements
* Product slider interactions
* Sound effects

---

## 👨‍💻 Author

**Mosfiq Rubel**

Frontend Developer

Technologies:

* React
* TypeScript
* JavaScript
* Tailwind CSS
* GSAP

---

## 📄 License

This project is available for educational and portfolio purposes.
