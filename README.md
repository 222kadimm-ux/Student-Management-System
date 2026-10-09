# Student Management System

A beginner-friendly full-stack web application built for a college B.Tech CSE assignment. The project connects a React frontend with a Node.js/Express backend and a MongoDB Atlas cloud database.

---

## 📌 Project Scope & Features Implemented

> **Note:** Currently, **ONLY the "Add Student" feature is implemented**. 
> All other features (such as view student list, edit, delete, search, authentication, and pagination) will be added by team members through separate Git branches and Pull Requests.

### Current Features:
- **Server Health Check**: `GET /api/health` to confirm backend availability.
- **Add Student**: `POST /api/students` saves a new student record to MongoDB Atlas.
- **Duplicate Prevention**: Rejects duplicate student roll numbers with clear error messages.
- **Data Validation**: Validates all required student fields on both frontend and backend.
- **Interactive UI**:
  - Clean Navigation Bar between Dashboard and Add Student page.
  - Dashboard overview page.
  - Add Student form with controlled inputs (`useState`), clear button states, and live success/error alerts.

---

## 🛠️ Tech Stack

- **Frontend**:
  - React.js (built with Vite)
  - JavaScript (ES6+)
  - React Router DOM (`react-router-dom`)
  - Axios (reusable API client)
  - Vanilla CSS (clean, responsive, no bloated libraries)

- **Backend**:
  - Node.js & Express.js
  - MongoDB Atlas with Mongoose
  - dotenv (environment variables)
  - cors (Cross-Origin Resource Sharing)

---

## 📁 Folder Structure

```text
Student-Management-System/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx          # Top navigation bar
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx       # Welcome & overview page
│   │   │   └── Students.jsx        # Add Student form page
│   │   ├── services/
│   │   │   └── api.js              # Reusable Axios instance
│   │   ├── App.jsx                 # Routing configuration
│   │   ├── main.jsx                # Entry point
│   │   └── index.css               # Clean styling
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── .env.example
│   └── .env                        # Local environment file (gitignored)
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js               # MongoDB Mongoose connection
│   │   ├── controllers/
│   │   │   └── studentController.js # Add student business logic
│   │   ├── models/
│   │   │   └── Student.js          # Student Mongoose schema
│   │   ├── routes/
│   │   │   └── studentRoutes.js    # /api/students routes
│   │   ├── middleware/
│   │   │   └── errorHandler.js     # Centralized error handling
│   │   └── server.js               # Express application entry
│   ├── package.json
│   ├── .env.example
│   └── .env                        # Local environment file (gitignored)
├── .gitignore                      # Ignores node_modules, .env, and build files
└── README.md
```

---

## ⚙️ Environment Configuration

### 1. Backend (`backend/.env`)
Create a `.env` file in the `backend/` folder based on `backend/.env.example`:

```env
PORT=5001
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.2mzsngi.mongodb.net/student_db?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=college_project_jwt_secret_key_123
```

> **macOS Note**: On macOS Monterey, Ventura, Sonoma, and Sequoia, Apple's AirPlay Receiver listens on port 5000 by default. Therefore, port `5001` is recommended for the backend server when developing on a Mac.

### 2. Frontend (`frontend/.env`)
Create a `.env` file in the `frontend/` folder based on `frontend/.env.example`:

```env
VITE_API_URL=http://localhost:5001/api
```

---

## 🚀 Installation & Running

### Step 1: Install Dependencies

Open your terminal in the project root:

```bash
# 1. Install backend dependencies
cd backend
npm install

# 2. Install frontend dependencies
cd ../frontend
npm install
```

### Step 2: Start Backend Server

From the `backend/` folder:

```bash
# Run with nodemon (development):
npm run dev

# Or run with standard node:
npm start
```
You should see:
```text
Server is running on port 5001
MongoDB Connected: ac-xgledxv-shard-00-02.2mzsngi.mongodb.net
```

### Step 3: Start Frontend Server

Open a second terminal window, navigate to the `frontend/` folder, and run:

```bash
cd frontend
npm run dev
```

Visit the app in your browser at `http://localhost:3000`.

---

## 📡 API Endpoints

### 1. Health Check
- **Endpoint**: `GET /api/health`
- **Description**: Verifies if the backend server is running.
- **Response**:
  ```json
  {
    "status": "ok",
    "message": "Server is running"
  }
  ```

### 2. Add Student
- **Endpoint**: `POST /api/students`
- **Description**: Validates and saves a new student record to MongoDB.
- **Request Body (`application/json`)**:
  ```json
  {
    "name": "Aarav Sharma",
    "rollNo": "CS2026001",
    "email": "aarav@college.edu",
    "course": "B.Tech CSE",
    "semester": "6th",
    "phone": "9876543210"
  }
  ```
- **Success Response (`201 Created`)**:
  ```json
  {
    "success": true,
    "message": "Student added successfully",
    "data": {
      "_id": "6ac8e8a1baf0e0aeadc1a2ba",
      "name": "Aarav Sharma",
      "rollNo": "CS2026001",
      "email": "aarav@college.edu",
      "course": "B.Tech CSE",
      "semester": "6th",
      "phone": "9876543210",
      "createdAt": "2026-10-09T13:14:09.786Z",
      "updatedAt": "2026-10-09T13:14:09.786Z"
    }
  }
  ```
- **Error Response (Duplicate Roll Number, `400 Bad Request`)**:
  ```json
  {
    "success": false,
    "message": "Student with roll number \"CS2026001\" already exists"
  }
  ```
- **Error Response (Missing Fields, `400 Bad Request`)**:
  ```json
  {
    "success": false,
    "message": "All fields (name, rollNo, email, course, semester, phone) are required"
  }
  ```

---

## 🧪 Testing with cURL

You can test the backend directly using your terminal:

```bash
# 1. Test Health Endpoint
curl -X GET http://localhost:5001/api/health

# 2. Test Adding a Student
curl -X POST http://localhost:5001/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Rohan Verma",
    "rollNo": "CS2026005",
    "email": "rohan@college.edu",
    "course": "B.Tech CSE",
    "semester": "6th",
    "phone": "9876543211"
  }'

# 3. Test Duplicate Check (run the same command twice)
```
# Student-Management-System
