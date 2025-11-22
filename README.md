# 🌻 Starry Night - Van Gogh Chronicle

![Banner](screenshots/home_hero_new.png)

<div align="center">

[![React](https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18.0-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**A modern, immersive web experience exploring the life, art, and legacy of Vincent van Gogh.**

[Features](#-features) • [Getting Started](#-getting-started) • [Screenshots](#-gallery-preview) • [Architecture](#-architecture)

</div>

---

## 🎨 The "Banana" Design System

Inspired by Van Gogh's vibrant palette, we've crafted a unique visual identity:

| Color | Hex | Usage |
|-------|-----|-------|
| 🍌 **Banana Yellow** | `#FFD700` | Primary accents, highlights, buttons |
| 🌌 **Starry Blue** | `#1E3A8A` | Secondary elements, deep contrast |
| 🌑 **Deep Night** | `#0F172A` | Backgrounds, immersive depth |

---

## ✨ Features

### 🏠 Immersive Home
A cinematic entry into Van Gogh's world with video backgrounds and smooth entry animations.

### 🖼️ The Collection (Gallery)
Explore over **2,100 artworks** in a stunning masonry grid.
- **Filter**: Sort by Paintings or Drawings.
- **Search**: Instantly find artworks by title.
- **Lightbox**: View masterpieces in high resolution.

### ⏳ Interactive Timeline
Walk through Vincent's life year by year.
- **Visuals**: Events are paired with relevant images.
- **Context**: Learn about his locations and milestones.

### 💌 The Letters
A digital archive of Vincent's correspondence.
- **Read**: Access his personal thoughts and sketches.
- **Visual**: Beautiful grid layout with letter previews.

### 🎓 History & Legacy
- **Biography**: A detailed chronicle of his life stages.
- **Impact**: How he influenced modern art.
- **For Kids**: A fun, interactive section for younger audiences.

---

## 📸 Gallery Preview

| **Home Page** | **Masterpieces** |
|:---:|:---:|
| ![Home](screenshots/home_page_final.png) | ![Masterpieces](screenshots/home_masterpieces.png) |

| **Art Gallery** | **Timeline** |
|:---:|:---:|
| ![Gallery](screenshots/gallery_new_ui.png) | ![Timeline](screenshots/timeline_with_images.png) |

| **Letters Archive** | **History Page** |
|:---:|:---:|
| ![Letters](screenshots/letters_page_final.png) | ![History](screenshots/history_polished.png) |

---

## 🚀 Getting Started

Follow these simple steps to run the project locally.

### Prerequisites
- **Node.js** (v14+)
- **npm** (comes with Node.js)

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/javawithaaryan/Van-Gogh-.git
    cd Van-Gogh-
    ```

2.  **Install Backend Dependencies**
    ```bash
    cd server
    npm install
    ```

3.  **Install Frontend Dependencies**
    ```bash
    cd ../client
    npm install
    ```

### Running the App

You need to run **two terminals** simultaneously.

**Terminal 1: Backend Server**
```bash
cd server
npm start
```
> Server runs at `http://localhost:3000`

**Terminal 2: Frontend Client**
```bash
cd client
npm run dev
```
> Client runs at `http://localhost:5173`

**Open your browser and visit:** `http://localhost:5173`

---

## 🏗️ Architecture

This project uses a modern **MERN-like** stack (without Mongo for simplicity, using JSON data):

- **Client**: React, Vite, Framer Motion (Animations), React Router (Navigation).
- **Server**: Express.js (API & Static Asset Serving).
- **Data**: JSON-based data storage for artworks, timeline, and letters.

## 👨‍💻 Developer

**Aryan Rathore**
- 🌟 [GitHub Profile](https://github.com/javawithaaryan)

---

<div align="center">
  <p>© 2025 Van Gogh Chronicle. All rights reserved.</p>
  <p><i>"I dream my painting and I paint my dream."</i></p>
</div>
