# 🚀 Intern Portal Dashboard

A simple full-stack intern dashboard built using **React + Vite** on the frontend and a dummy backend to serve static data.

This project was created as part of **Round 1 Task – Build a Basic Full Stack Intern Portal** for a Full Stack Development Internship.

---

## 🧩 Features

* 🔐 Dummy Login/Signup UI (no real authentication)
* 📊 Dashboard showing:

  * Intern Name
  * Referral Code (e.g., `vamsi2025`)
  * Total Donations Raised (from backend)
  * Static Rewards/Unlockables section
* 🏆 Optional Leaderboard page

---

## ⚙️ Tech Stack

* **Frontend**: React + Vite + Tailwind CSS
* **Backend**: Static JSON / Express.js / Firebase Functions
* **Hosting**:

  * Frontend: Vercel / Netlify
  * Backend: Render / Firebase / Cyclic *(optional)*

---

## 📁 Project Structure

```
intern-portal/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── .eslintrc.cjs
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🛠️ Getting Started

### 📦 Prerequisites

* Node.js (v18 or higher recommended)
* npm or yarn package manager

### 📥 1. Clone the repository

```bash
git clone https://github.com/your-username/intern-portal.git
cd intern-portal
```

### 📦 2. Install dependencies

```bash
npm install
# or
yarn install
```

### ▶️ 3. Run the app locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

## 🚀 Deployment to Vercel

### 1. Push your code to GitHub

Make sure your project is pushed to a public GitHub repository.

### 2. Go to [https://vercel.com](https://vercel.com) and sign in

You can log in with GitHub.

### 3. Click on **“Add New Project”**

* Import your GitHub repository.
* Vercel will auto-detect Vite and set the default build command:

  ```bash
  npm run build
  ```

  and output directory:

  ```bash
  dist
  ```

### 4. Click **Deploy**

* Vercel will build and deploy your site.
* After a few seconds, your site will be live at a generated Vercel URL.

### 5. (Optional) Set Custom Domain

You can add a custom domain from the Vercel dashboard.

---

## 🧪 Dummy Backend API Setup (Optional)

You can serve static JSON from:

* Express.js (Node)
* Firebase Cloud Function
* Or use mock data locally

Example response:

```json
{
  "name": "Vamsi",
  "referralCode": "vamsi2025",
  "donations": 1500
}
```

---

## 🌐 Live Demo

🔗 [Live Site](https://your-live-site-url.vercel.app)



