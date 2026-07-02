<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=800&size=32&pause=1000&color=6366F1&center=true&vCenter=true&width=700&lines=%F0%9F%8F%A8+Smart+Hostel+Allocation;Automated+Room+Assignment;SLA-Based+Complaint+System;Built+with+React+%2B+Node.js" alt="Smart Hostel Allocation System" />

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://prisma.io)
[![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://mysql.com)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

<br/>

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Now-6366F1?style=for-the-badge)](https://hostel-allocation-system-tau.vercel.app)
[![API Docs](https://img.shields.io/badge/📖_API_Docs-Swagger-85EA2D?style=for-the-badge)](https://hostel-allocation-backend.onrender.com/api-docs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

<br/>

> **A production-ready full-stack web app for automated hostel room allocation and SLA-based complaint management — built for colleges and institutions.**

</div>

---

## ⚡ What Makes This Special

<table>
<tr>
<td width="50%">

### 🎓 Student Portal
- 🔐 JWT-secured login & registration
- 🏠 Real-time room allocation status
- 📝 Submit complaints with severity levels
- 📊 Track complaint lifecycle — `PENDING` → `IN_PROGRESS` → `RESOLVED`
- 👤 Profile & account management

</td>
<td width="50%">

### 🛡️ Admin Dashboard
- 📈 Live hostel occupancy stats
- 🏨 Full CRUD — hostels, rooms, allocations
- ⚡ SLA-based auto complaint escalation
- 👥 Student management & room assignment
- 🔍 Filter complaints by status & severity

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|-------|-----------|
| **Frontend** | ![React](https://img.shields.io/badge/-React_19-61DAFB?logo=react&logoColor=black&style=flat-square) ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat-square) ![TailwindCSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square) ![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=reactrouter&logoColor=white&style=flat-square) |
| **Backend** | ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs&logoColor=white&style=flat-square) ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=flat-square) ![Swagger](https://img.shields.io/badge/-Swagger-85EA2D?logo=swagger&logoColor=black&style=flat-square) |
| **Database** | ![MySQL](https://img.shields.io/badge/-MySQL_8-4479A1?logo=mysql&logoColor=white&style=flat-square) ![Prisma](https://img.shields.io/badge/-Prisma_ORM-2D3748?logo=prisma&logoColor=white&style=flat-square) |
| **Auth** | ![JWT](https://img.shields.io/badge/-JWT-000000?logo=jsonwebtokens&logoColor=white&style=flat-square) ![bcrypt](https://img.shields.io/badge/-bcryptjs-003A70?style=flat-square) |
| **Deploy** | ![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white&style=flat-square) ![Render](https://img.shields.io/badge/-Render-46E3B7?logo=render&logoColor=black&style=flat-square) ![Railway](https://img.shields.io/badge/-Railway_DB-0B0D0E?logo=railway&logoColor=white&style=flat-square) |

</div>

---

## 🗄️ Database Schema

```
Student ──── Allocation ──── Room ──── Hostel
   │                                     │
   └──────── Complaint ──────────────────┘
```

<div align="center">

| Model | Key Fields |
|-------|-----------|
| `Student` | name, email, branch, year, gender, disciplineScore |
| `Hostel` | name, genderAllowed, capacity, distance |
| `Room` | roomNumber, capacity, currentOccupancy |
| `Allocation` | studentId, roomId, allocatedAt, active |
| `Complaint` | issueType, severity, status, category |
| `Admin` | name, email, role (SUPERADMIN / WARDEN / MAINTENANCE) |

</div>

---

## 📡 API Reference

<details>
<summary><b>🔐 Auth Routes</b></summary>

```
POST  /api/auth/login           → Student login
POST  /api/auth/register        → Student register
POST  /api/admin/auth/login     → Admin login
```
</details>

<details>
<summary><b>🎓 Student Routes</b></summary>

```
GET   /api/student/dashboard    → Dashboard data
GET   /api/allocation           → My room allocation
POST  /api/complaints           → Submit a complaint
GET   /api/complaints           → My complaints
```
</details>

<details>
<summary><b>🛡️ Admin Routes</b></summary>

```
GET   /api/hostels              → All hostels
GET   /api/rooms                → All rooms
GET   /api/admin/students       → All students
POST  /api/allocation           → Assign room
PUT   /api/complaints/:id       → Update complaint status
GET   /api/health               → Health check
```
</details>

📖 Full interactive docs at [`/api-docs`](https://hostel-allocation-backend.onrender.com/api-docs)

---

## 🗂️ Project Structure

```
Hostel_Allocation_System/
├── 🎨 frontend/
│   └── src/
│       ├── components/     # Reusable UI — Cards, Modals, Tables, Badges
│       ├── pages/          # Auth · Student · Admin pages
│       ├── context/        # Global auth state (JWT)
│       ├── services/       # API client & auth service
│       └── utils/          # Constants & session helpers
│
└── ⚙️ backend/
    ├── prisma/
    │   ├── schema.prisma   # Full DB schema
    │   └── seed.js         # Sample hostels, rooms, students
    └── src/
        ├── controllers/    # Route handlers
        ├── routes/         # Modular API routes
        ├── middleware/     # JWT auth & error handling
        └── services/       # Business logic & SLA engine
```

---

## 🚀 Getting Started

### Prerequisites

![Node](https://img.shields.io/badge/Node.js-v18+-339933?logo=nodedotjs&style=flat-square)
![MySQL](https://img.shields.io/badge/MySQL-8.0+-4479A1?logo=mysql&style=flat-square)

```bash
git clone https://github.com/Takshak-Shetty/Hostel_Allocation_System.git
cd Hostel_Allocation_System
```

**Backend:**
```bash
cd backend && npm install
npx prisma migrate dev
node prisma/seed.js   # loads sample data
npm run dev           # runs on :4000
```

**Frontend:**
```bash
cd frontend && npm install
npm run dev           # runs on :5173
```

---

## 🌐 Deployment

| Service | Platform | URL |
|---------|----------|-----|
| Frontend | Vercel | [hostel-allocation-system-tau.vercel.app](https://hostel-allocation-system-tau.vercel.app) |
| Backend | Render | [hostel-allocation-backend.onrender.com](https://hostel-allocation-backend.onrender.com) |
| Database | Railway | Managed MySQL cloud DB |

---

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&pause=1000&color=6366F1&center=true&vCenter=true&width=500&lines=Thanks+for+checking+this+out!;%E2%AD%90+Star+the+repo+if+you+found+it+useful!" alt="footer" />

<br/>

Made with ❤️ by [Takshak Shetty](https://github.com/Takshak-Shetty)

[![GitHub followers](https://img.shields.io/github/followers/Takshak-Shetty?style=social)](https://github.com/Takshak-Shetty)
[![GitHub stars](https://img.shields.io/github/stars/Takshak-Shetty/Hostel_Allocation_System?style=social)](https://github.com/Takshak-Shetty/Hostel_Allocation_System)

</div>
