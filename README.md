<p align="center">
  <img src="https://em-content.zobj.net/source/apple/391/eye_1f441-fe0f.png" width="120" alt="EvilEmoji Logo" />
</p>

<h1 align="center">👁️ EvilEmoji</h1>

<p align="center">
  <strong>Zero-Width Steganography Terminal</strong>
</p>

<p align="center">
  <em>Hide secret messages inside innocent-looking emojis using invisible Unicode characters</em>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-how-it-works">How It Works</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-security">Security</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔒 **Encode** | Hide any text message inside an emoji using zero-width Unicode characters |
| 🔓 **Decode** | Extract hidden messages from suspicious text or emojis |
| 📋 **Clipboard** | One-click copy with visual feedback |
| 🔍 **Auto-Detect** | Automatically detects hidden data when you paste |
| 📊 **Stats** | View payload size, hidden character count, and compression ratio |
| 🔢 **Hex View** | Inspect the raw hexadecimal representation of hidden data |
| ⌨️ **Shortcuts** | Keyboard navigation for power users |
| 🌙 **Dark Mode** | Sleek, terminal-inspired hacker aesthetic |
| 📱 **Responsive** | Works beautifully on desktop and mobile |
| ✅ **Checksums** | Built-in integrity verification for decoded messages |

---

## 🧠 How It Works

EvilEmoji uses **zero-width Unicode characters** — invisible characters that exist in digital text but are not rendered on screen. By mapping binary data to these invisible characters, we can hide entire messages that travel alongside visible content undetected.

### The Magic Behind It

```
┌─────────────────────────────────────────────────────────────┐
│  SECRET MESSAGE: "Hi"                                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Step 1: Convert to Binary (UTF-8)                          │
│     'H' = 72  → 01001000                                    │
│     'i' = 105 → 01101001                                    │
│     Full binary: "0100100001101001"                         │
│                                                             │
│  Step 2: Map to Zero-Width Characters                       │
│     0 → U+200C (Zero-Width Non-Joiner)  [invisible]         │
│     1 → U+200B (Zero-Width Space)       [invisible]         │
│                                                             │
│  Step 3: Wrap with Cover Emoji                              │
│     Output: 😈 + ZWJ + [payload] + ZWJ                      │
│                                                             │
│  ✨ RESULT: Looks like "😈" but secretly contains "Hi"!     │
└─────────────────────────────────────────────────────────────┘
```

### Zero-Width Character Reference

| Character | Unicode | Escape | Purpose |
|-----------|---------|--------|---------|
| Zero-Width Space | `U+200B` | `\u200B` | Binary `1` |
| Zero-Width Non-Joiner | `U+200C` | `\u200C` | Binary `0` |
| Zero-Width Joiner | `U+200D` | `\u200D` | Delimiter/wrapper |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/EvilEmoji.git
cd EvilEmoji

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/EvilEmoji)

---

## 📖 Usage

### 🔒 Encoding a Message

1. Navigate to the **ENCODER** tab
2. Type your secret message in the text area
3. Select a cover emoji from the quick-select grid (or use the default 👁️)
4. Click **🔐 ENCRYPT & BIND**
5. Copy the output — it looks like a simple emoji but contains your hidden message!

### 🔓 Decoding a Message

1. Navigate to the **DECODER** tab
2. Paste the suspicious emoji or text into the input
3. Click **🔍 DECRYPT** (or enable **Auto-detect on paste**)
4. View the revealed hidden message with confidence level
5. Toggle **Hex View** to inspect the raw binary data

### ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/⌘ + E` | Switch to Encoder tab |
| `Ctrl/⌘ + D` | Switch to Decoder tab |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.6 | React framework with App Router |
| **React** | 19.x | UI library |
| **TypeScript** | 5.x | Type-safe development |
| **Tailwind CSS** | 4.x | Utility-first styling |
| **Lucide React** | Latest | Beautiful icon library |
| **Sonner** | Latest | Toast notifications |
