#  Polling App (Full Stack)

A full-stack polling/voting application where users can create polls, vote, and view live results with charts and analytics.

---

##  Features

* Create polls with 2–4 options
* Vote by selecting an option (no extra button)
* Prevent duplicate voting (client-side tracking)
* Live result updates (percentages + counts)
* Progress bars + winner highlighting
* Analytics Dashboard (charts)
* Past polls table with delete option
* Dark / Light theme toggle

---

##  Tech Stack

### Frontend

* React + Vite
* Tailwind CSS
* Axios
* Chart.js

### Backend

* Node.js
* Express

---

##  Project Structure

Polling-App/
├── frontend/
└── backend/

---

##  Run Locally

### 1 Clone the repo

git clone https://github.com/ShanmukhaNaidu7/Polling-App

---

### 2 Start Backend

cd backend
npm install
node server.js

Backend runs on:
http://localhost:3000/polls

---

### 3 Start Frontend

cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5175

---

##  API Endpoints

GET /polls → Get all polls
POST /polls → Create poll
POST /polls/:id/vote → Vote
DELETE /polls/:id → Delete poll

---

##  Dashboard

* Total polls
* Total votes
* Votes per poll (Bar chart)
* Overall distribution (Doughnut chart)

---

##  Limitations

* Duplicate voting prevention is client-side (localStorage)
* No authentication system

---

##  Future Improvements

* User authentication (JWT)
* Database (MongoDB)
* Real-time updates (WebSockets)
* Shareable poll links

---

## 

B Shanmukha Sai Kumar

---
