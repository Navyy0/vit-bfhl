# VIT-BFHL API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey?logo=express)
![Render](https://img.shields.io/badge/Deployed%20on-Render-blue?logo=render)
![License](https://img.shields.io/badge/License-ISC-orange)

This is a **Node.js + Express backend** for the **BFHL assignment**.  
It processes an input array and returns segregated results along with user details.  
The project is deployed on **Render**.

---

## 🚀 Live API
Base URL:  
https://vit-bfhl.onrender.com

yaml
Copy code

- **POST** `/bfhl` → Process input array  
- **GET** `/` → Health check (shows API is running)

---

## 📌 Example

### Request
```http
POST /bfhl
Content-Type: application/json
json
Copy code
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
Response
json
Copy code
{
  "is_success": true,
  "user_id": "arjun_sharma_15082001",
  "email": "arjun.sharma@vitstudent.ac.in",
  "roll_number": "21BCE1234",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
🛠 Run Locally
Clone the repository:

bash
Copy code
git clone https://github.com/<your-username>/vit-bfhl.git
cd vit-bfhl
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm start
Server runs on:

arduino
Copy code
http://localhost:3000
📂 Project Structure
bash
Copy code
vit-bfhl/
│── server.js        # Main server file
│── package.json     # Project config & dependencies
│── README.md        # Documentation
✅ Features
Segregates odd and even numbers

Extracts and uppercases alphabets

Identifies special characters

Computes sum of numbers

Generates reversed alternating-case string

Returns user details in every response
