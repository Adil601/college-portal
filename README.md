# 🤖 Nexaris – AI Chatbot Platform

Nexaris is a cutting-edge AI chatbot application designed to transform simple user prompts into high-quality, context-aware text. Whether you're generating summaries, code snippets, emails, or articles, Nexaris delivers fast and reliable results through a sleek, intuitive interface.

Built using **Next.js**, **TypeScript**, and **Tailwind CSS**, and powered by **Google's Gemini API**, Nexaris combines performance with extensibility for developers and usability for end-users.

---

## 🚀 Features

- 💬 Real-time chat interface with Markdown support
- 🧠 Context memory stored per session
- ✍️ Preset templates for different content types
- 🎨 Customizable tone and writing style
- 📤 Export and copy generated content
- ⚡ Blazing fast with serverless backend architecture
- 🛠️ Developer-friendly modular structure

---

## 🛠 Tech Stack

| Category        | Technology           |
|----------------|----------------------|
| Framework      | [Next.js](https://nextjs.org) |
| Language       | TypeScript           |
| Styling        | Tailwind CSS         |
| State          | React Hooks          |
| AI Integration | Google Gemini API    |
| Deployment     | Vercel (recommended) |

---

## 📁 Project Structure Highlights

- `pages/api/generate.ts` – Serverless API route for interacting with Gemini
- `src/hooks/useChat.ts` – Custom React hook for chat state and logic
- `src/components/` – Modular, reusable UI components
- `tailwind.config.js` – Tailwind CSS configuration

---

## ⚙️ Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/nexaris.git
   cd nexaris

## Install Dependencies

```bash
npm install
# or
yarn install

```

## Set Up Environment Variables

Create a .env.local file and add your Gemini API key:
```bash
  GOOGLE_API_KEY=google_api_key_here

```

## Run the Development Server

```bash
npm run dev
# or
yarn dev

```



