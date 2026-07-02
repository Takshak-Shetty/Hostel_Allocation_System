<div align="center">

# 🏨 Smart Hostel Allocation System

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=28&pause=1000&color=6366F1&center=true&vCenter=true&width=600&lines=Smart+Hostel+Allocation+System;SLA-Based+Complaint+Management;Built+with+React+%2B+Node.js;Automated+Room+Allocation" alt="Typing SVG" />

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://prisma.io)
[![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://mysql.com)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

<br/>

[![Deployed on Vercel](https://img.shields.io/badge/Frontend-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://hostel-allocation-system-tau.vercel.app)
[![Backend on Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)](https://hostel-allocation-backend.onrender.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

<br/>

> **A full-stack web application for automated hostel room allocation and SLA-based complaint management — built for colleges and institutions.**

<br/>

[🚀 Live Demo](https://hostel-allocation-system-tau.vercel.app) · [📖 API Docs](https://hostel-allocation-backend.onrender.com/api-docs) · [🐛 Report Bug](https://github.com/Takshak-Shetty/Hostel_Allocation_System/issues)

</div>

---

## ✨ Features at a Glance

<table>
<tr>
<td width="50%">

### 🎓 Student Portal
- 🔐 Secure login & registration
- 🏠 View room allocation status
- 📝 Submit & track complaints
- 📊 Real-time complaint status updates

</td>
<td width="50%">

### 🛡️ Admin Dashboard
- 📈 Hostel occupancy statistics
- 🏨 Manage hostels, rooms & allocations
- ⚡ SLA-based complaint escalation
- 👥 Full student management

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|-------|-----------|
| **Frontend** | ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=flat-square) ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat-square) ![TailwindCSS](https://img.shields.io/badge/-Tailwind-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square) |
| **Backend** | ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs&logoColor=white&style=flat-square) ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=flat-square) |
| **Database** | ![MySQL](https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white&style=flat-square) ![Prisma](https://img.shields.io/badge/-Prisma-2D3748?logo=prisma&logoColor=white&style=flat-square) |
| **Auth** | ![JWT](https://img.shields.io/badge/-JWT-000000?logo=jsonwebtokens&logoColor=white&style=flat-square) ![bcrypt](https://img.shields.io/badge/-bcrypt-003A70?style=flat-square) |
| **Deploy** | ![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white&style=flat-square) ![Render](https://img.shields.io/badge/-Render-46E3B7?logo=render&logoColor=black&style=flat-square) |

</div>

---

## 🗂️ Project Structure

```
Hostel_Allocation_System/
├── 🎨 frontend/
│   └── src/
│       ├── components/     # Reusable UI components
│       ├── pages/          # Auth, Student, Admin pages
│       ├── context/        # Auth context
│       ├── services/       # API client & auth service
│       └── utils/          # Constants & session helpers
│
└── ⚙️ backend/
    ├── prisma/
    │   ├── schema.prisma   # DB schema
    │   └── seed.js         # Sample data
    └── src/
        ├── controllers/    # Route handlers
        ├── routes/         # API routes
        ├── middleware/     # Auth & error middleware
        └── services/       # Business logic
```

---

## 🚀 Getting Started

### Prerequisites

![Node](https://img.shields.io/badge/Node.js-v18+-339933?logo=nodedotjs&style=flat-square)
![MySQL](https://img.shields.io/badge/MySQL-8.0+-4479A1?logo=mysql&style=flat-square)

### 1️⃣ Clone the repo

```bash
git clone https://github.com/Takshak-Shetty/Hostel_Allocation_System.git
cd Hostel_Allocation_System
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create `.env`:
```env
DATABASE_URL="mysql://root:PASSWORD@localhost:3306/hostel_management"
JWT_SECRET="your_jwt_secret"
PORT=4000
```

```bash
npx prisma migrate dev
node prisma/seed.js     # seed sample data
npm run dev
```

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
```

Create `.env`:
```env
VITE_API_URL=http://localhost:4000/api
```

```bash
npm run dev
```

### 4️⃣ Open in browser

```
http://localhost:5173
```

---

## 🔑 Sample Credentials

<div align="center">

| Role | Email | Password |
|------|-------|----------|
| 🎓 Student | `john@student.com` | `Student@123` |
| 🎓 Student | `jane@student.com` | `Student@123` |
| 🛡️ Admin | `beta@hostel.com` | `Admin@123` |
| 🛡️ Admin | `alpha@hostel.com` | `Admin@123` |

</div>

---

## 📡 API Overview

```
POST   /api/auth/login          → Student login
POST   /api/auth/register       → Student register
POST   /api/admin/auth/login    → Admin login

GET    /api/student/dashboard   → Student dashboard
GET    /api/allocation          → Room allocations
POST   /api/complaints          → Submit complaint
GET    /api/complaints          → List complaints

GET    /api/hostels             → All hostels
GET    /api/rooms               → All rooms
GET    /api/health              → Health check
```

📖 Full Swagger docs at `/api-docs`

---

## 🗄️ Database Schema

```
Student ──── Allocation ──── Room ──── Hostel
   │                                     │
   └──────── Complaint ──────────────────┘
```

**Models:** `Student` · `Hostel` · `Room` · `Allocation` · `Complaint` · `Admin`

---

## 🌐 Deployment

| Service | Platform | URL |
|---------|----------|-----|
| Frontend | Vercel | [hostel-allocation-system-tau.vercel.app](https://hostel-allocation-system-tau.vercel.app) |
| Backend | Render | [hostel-allocation-backend.onrender.com](https://hostel-allocation-backend.onrender.com) |
| Database | Railway MySQL | Managed cloud DB |

---

<div align="center">

Made with ❤️ by [Takshak Shetty](https://github.com/Takshak-Shetty)

⭐ Star this repo if you found it useful!

</div>
