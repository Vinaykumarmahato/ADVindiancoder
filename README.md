# ADV Indian Coder - Full Stack Learning Platform

Welcome to the **ADV Indian Coder** full stack application repository! This platform is a comprehensive learning and practice hub designed for students, developers, and aspiring engineers. It features interactive courses, an online IDE for practicing code in multiple languages, job listings, success stories, and a dynamic community.

## 🌟 Key Features

- **Interactive Practice Hub (ADV Lab):** Online code compiler and executor for Java, Python, C, C++, and JavaScript.
- **Course Library:** Access to over 40+ programming episodes, tutorials, and deep-dive masterclasses.
- **AI-Powered Code Assistance:** Integrated with Groq's LLM to provide smart, context-aware coding help for students.
- **User Authentication:** Secure email/password login and OTP verification via Email and Twilio SMS.
- **Dynamic Content:** Real-time job board, dynamic resource library, and detailed success stories.
- **Performance Optimized:** Fast, responsive frontend powered by React and Vite, supported by a scalable Spring Boot backend.

## 🏗️ Architecture & Tech Stack

This project is structured as a **Monorepo** containing both the frontend and backend applications.

### 🌐 Frontend (`/frontend`)
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS & Framer Motion for beautiful micro-animations
- **Routing:** React Router v6
- **Code Editor:** Monaco Editor (for the online IDE)

### ⚙️ Backend (`/backend`)
- **Framework:** Spring Boot 3 (Java 17+)
- **Database:** MySQL (Hosted on Aiven Cloud)
- **ORM:** Spring Data JPA / Hibernate
- **Security:** Spring Security with JWT Authentication
- **Integrations:** 
  - Groq API (for AI features)
  - Twilio API (for SMS OTPs)
  - Spring Mail (for Email OTPs)

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js (v18 or higher)
- Java Development Kit (JDK 17 or higher)
- Maven
- MySQL (or use the provided Aiven cloud database)

### 1. Setup the Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create your environment variables. Ensure the following environment variables are set in your IDE or environment (do NOT hardcode them in `application.properties`):
   - `DB_URL` (JDBC Connection String)
   - `DB_USERNAME`
   - `DB_PASSWORD`
   - `JWT_SECRET`
   - `GROQ_API_KEY`
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
   - `SPRING_MAIL_PASSWORD`
3. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```
   *The backend will start on `http://localhost:8080`.*

### 2. Setup the Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up your `.env` file for the frontend (use `.env.example` as a reference):
   ```env
   VITE_API_URL=http://localhost:8080/api
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   *The frontend will start on `http://localhost:5173`.*

## 🔒 Security Notice

**Never commit API keys or passwords.** This repository uses `.gitignore` and GitHub push protection to ensure that no sensitive credentials like Twilio SIDs or Groq API keys are accidentally leaked. Always inject them via environment variables in your deployment environments (e.g., Render, Vercel).

## 🌍 Deployment

- **Frontend:** Deployed on **Vercel**. Set the "Root Directory" to `frontend` in your Vercel project settings.
- **Backend:** Deployed on **Render**. Set the "Root Directory" to `backend` in your Render project settings, and populate the Environment Variables dashboard with your production keys.

---
*Built with ❤️ for the ADV Indian Coder community.*
