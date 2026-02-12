# 💖 Valentine's Day Website 💖

A beautiful, romantic Valentine's Day website built with React, featuring smooth animations, floating hearts, and an emotional journey.

## 🚀 Getting Started

The website is already running at: **http://localhost:5173/**

Simply open this URL in your browser to experience the magic!

## ✨ Features

### 🏠 Home Page

- Beautiful romantic title: "Will you be my Valentine?"
- Two buttons: **YES** ❤️ and **NO** 💔
- Floating heart animations in the background
- Smooth gradient background with pink and red tones

### ✅ If You Click YES

You'll see three gift options:

1. **💌 Love Letter** - A heartfelt message with line-by-line animated text
2. **🎶 Song List** - "Our Love Playlist" with 10 romantic songs
3. **📸 Our Memories** - Photo gallery with 15 beautiful memories

### ❌ If You Click NO

You'll see two gifts (swapped order):

1. **🎶 Song List** - Same romantic playlist
2. **💔 Angry Love Letter** - A dramatic message with a "Change to YES" button

## 🎁 Gift Details

### Love Letter (YES Path)

- Elegant cursive font (Dancing Script & Great Vibes)
- Text appears line by line with smooth animation
- Beautiful signature at the end
- Romantic cream-colored background with gold border

### Angry Letter (NO Path)

- Bold typography with shaking animation
- Dramatic message to convince you to choose YES
- Big "Change to YES" button that redirects to YES gifts

### Song List

- 10 romantic Tamil songs
- Interactive cards with hover effects
- Heart icons and play buttons
- Clean, modern design

### Photo Gallery

- 15 photos with emotional captions
- Grid layout with hover zoom effect
- Click any photo to open in full-screen modal
- Heart confetti animation when viewing photos
- Beautiful captions with emojis

## 📸 Your Photos

All your photos are located in `/public/photos/`:

- first_birthday.jpg
- official_home.jpg
- saree.jpg
- lust.jpg
- property.jpg
- sacrifices.jpg
- viral_fever.jpg
- love.jpg
- jasmine.jpg
- my_king.jpg
- your_queen.jpg
- success.jpg
- tonsil.jpg
- appa.jpg
- forever.jpg

## 🎨 Design Features

- **Color Palette**: Romantic pinks, reds, whites, and gold
- **Fonts**:
  - Great Vibes (cursive titles)
  - Dancing Script (love letters)
  - Poppins (body text)
- **Animations**:
  - Floating hearts background
  - Pulse effect on title
  - Card hover effects with glow
  - Line-by-line text reveal
  - Shake animation for angry letter
  - Confetti on photo clicks
  - Smooth page transitions

## 📱 Responsive Design

The website is fully responsive and works beautifully on:

- Desktop computers
- Tablets
- Mobile phones

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **React Router 6** - Navigation
- **Vite** - Build tool
- **CSS3** - Styling with animations
- **Google Fonts** - Beautiful typography

## 📂 Project Structure

```
Velentines/
├── public/
│   └── photos/          # All your memory photos
├── src/
│   ├── components/
│   │   └── HeartsBackground.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── YesGiftsPage.jsx
│   │   ├── NoGiftsPage.jsx
│   │   ├── LoveLetterPage.jsx
│   │   ├── AngryLetterPage.jsx
│   │   ├── SongListPage.jsx
│   │   └── PhotoGalleryPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Navigation Flow

```
Home Page
    ├── Click YES → Yes Gifts Page
    │                 ├── Love Letter
    │                 ├── Song List
    │                 └── Photo Gallery
    │
    └── Click NO → No Gifts Page
                      ├── Song List
                      └── Angry Letter → "Change to YES" → Yes Gifts Page
```

## 💝 Special Features

1. **Floating Hearts**: Continuously animated hearts floating up the screen
2. **Interactive Cards**: Hover effects with glow and elevation
3. **Modal Gallery**: Click photos to view in full screen with confetti
4. **Smooth Transitions**: All page changes are smooth and elegant
5. **Romantic Typography**: Beautiful cursive fonts for emotional impact
6. **Color Harmony**: Carefully selected romantic color palette

## 🎵 Song List

1. Enna Sona
2. Unakena Naan
3. Kanave Kanave
4. Vaseegara
5. Kaadhal Oru Aagayam
6. Nenjukkule
7. Nee Kavithaigala
8. Usure Pogudhey
9. Vizhi Moodi
10. Maari 2 – Rowdy Baby

## 💌 Love Letter Content

The love letter includes:

- "My Love,"
- Heartfelt message about how life changed
- Acknowledgment of challenges overcome together
- Declaration of eternal love
- Signature: "Yours always, Your Queen 👑"

## 🔥 Angry Letter Content

The angry letter includes:

- Dramatic opening: "So you said NO? 😡"
- Passionate declaration of not letting go
- Reminder of sacrifices and love
- Big "Change to YES" button

## 🎨 Color Variables

- Primary Pink: #ff69b4
- Deep Pink: #ff1493
- Soft Pink: #ffb6c1
- Light Pink: #ffe4e1
- Romantic Red: #dc143c
- Soft Red: #ff6b6b
- Gold: #ffd700

## 📝 Commands

- `npm run dev` - Start development server (already running!)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## ❤️ Made with Love

This website was crafted with love and attention to detail to create a memorable Valentine's Day experience. Every animation, color, and word was chosen to express deep emotions and create a beautiful journey.

---

**Enjoy your romantic Valentine's website! 💖**
