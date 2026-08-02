# ADV Indian Coder - Full Stack Application

This is a full-stack application built with **React (Vite + Tailwind CSS)** for the frontend and **Spring Boot (Java + MySQL)** for the backend.

## Prerequisites
- Node.js & npm
- Java 21 (JDK)
- Maven
- MySQL Server

## 🚀 How to Run

### 1. Start the Backend (Spring Boot)
The backend runs on port `8080`.

```bash
cd backend
mvn spring-boot:run
```

### 2. Start the Frontend (React)
The frontend runs on port `5173` (default Vite port).

```bash
# Open a new terminal
npm install  # (Only need to run this once)
npm run dev
```

## 📂 Project Structure
- **frontend/** (Root): React application.
- **backend/**: Spring Boot application.

## 🔐 Credentials
- **Database:** Update `backend/src/main/resources/application.properties` with your MySQL password.
- **Default User:** You can create a new user via the Sign Up page.

## ✅ Features
- **Authentication:** Login/Signup with JWT.
- **Responsive Design:** Fully responsive UI with Dark Mode.
- **Animations:** Powered by Framer Motion.
