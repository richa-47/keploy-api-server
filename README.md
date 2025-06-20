# Custom API Server

## 📌 Features
- CRUD APIs for user management
- Connected with MongoDB using Mongoose
- Optional HTML frontend

## 🔗 API Endpoints

| Method | Endpoint          | Description         |
|--------|-------------------|---------------------|
| GET    | /api/users        | Get all users       |
| POST   | /api/users        | Add a new user      |
| PUT    | /api/users/:id    | Update user by ID   |
| DELETE | /api/users/:id    | Delete user by ID   |

## 🧩 Database
- MongoDB Atlas
- Collection: `users`

## ▶️ How to Run

1. Clone the repo
2. Install dependencies:
```bash
npm install
