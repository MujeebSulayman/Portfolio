# My Portfolio

My personal portfolio (TheHemjay) built with Next.js 14 and Tailwind CSS. Showcases my Web2, Web3, and AI projects, skills, and a contact form with a responsive layout and smooth animations.

## Features

- **Project showcase** – My Web2, Web3, and AI projects with filter toggles
- **Shareable project routes** – `/web3`, `/web2`, `/ai` so I can share filtered project links
- **Contact form** – Reach me via email (Resend API)
- **Responsive layout** – Mobile-first with Tailwind CSS
- **Animations** – Framer Motion and type animation

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Heroicons
- **Animation:** Framer Motion, react-type-animation
- **Email:** Resend

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MujeebSulayman/New-Portfolio.git
   cd New-Portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. (Optional) Add `.env.local` for the contact form:
   ```
   RESEND_API_KEY=your_resend_api_key
   ```

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start dev server (localhost:3000) |
| `npm run build` | Production build                  |
| `npm run start` | Start production server           |
| `npm run lint`  | Run ESLint                        |

## Deploy

I deploy to [Vercel](https://vercel.com). Connect the repo and set `RESEND_API_KEY` in the environment for the contact form.
