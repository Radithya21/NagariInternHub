# Nagari Intern Hub
<p style="text-align: justify;font-size: 1.2em;">Independent Internship Project at Bank Nagari Headquarters, Technology and Digitalization Division</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/18467f6d-0eb0-4122-ab23-a339c2b1b34c" alt="Bank Nagari Logo" style="width: 100%;">
  <p>PT. Bank Pembangunan Daerah Sumatera Barat</p>
</div>

---
## 👋 Welcome
Welcome to the official GitHub repository for the Independent Internship Program at Bank Nagari Headquarters 2025. This repository hosts projects developed during the **Independent Internship** in the **Technology and Digitalization Division of Bank Nagari Headquarters**.

---
## 👤 About Me
I am **Dimas Radithya Nuriizkitha**, a student currently undertaking an Independent Internship at Bank Nagari Headquarters. This internship lasts for 30 working days, during which I contribute to projects aimed at improving Bank Nagari's digital infrastructure and services.

---
## 🗂️ Repository Structure
This repository consists of two main integrated parts:

- **Backend**: This directory contains the code for API services built using Express.js. The backend includes various modules such as authentication, attendance, employee directory, and statistics. All services are designed to support the system's needs reliably and efficiently.
- **Frontend**: This directory contains the user interface developed using React and Vite. The frontend provides interactive pages for login, attendance, employee directory, and other features with a responsive and user-friendly design.

Both parts work together to create a modern and integrated internship management system with the following technologies:
- **Frontend**: React with Vite for a fast and dynamic user experience.
- **Backend**: Express.js for robust and flexible API services.
- **Database**: MySQL with Prisma ORM for structured and efficient data management.

---
## ⚡ Technologies
[![My Skills](https://skillicons.dev/icons?i=js,react,express,nodejs,vite,mysql,tailwind,prisma,vercel,vscode,github,postman)](https://skillicons.dev)

---
## 📄 Documentation
This repository contains detailed documentation on usage, API endpoints, and other relevant information. Below are the steps to run this project:

### 1. Clone Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/username/nagariinternhub.git
cd nagariinternhub
npm install
```

Enter the `backend` directory and install all necessary dependencies:
```bash
cd backend
npm install
```

### 2. Configure .env

Create a `.env` file in the `backend` directory, then fill in the values in the `.env` file according to your local configuration (database, port, and secret key).

### ⚙️`.env.example`
```env
# Example configuration for development

DATABASE_URL="mysql://<user>:<password>@localhost:3306/<database_name>"
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

### 3. Database Migration
Make sure you have created a database with the name as in the `.env` file and that the database is running.

Run the database migration using Prisma:
```bash
npx prisma migrate dev
```

### 4. Run Seeder
After the migration is complete, run the seeder to populate initial data:
```bash
npx prisma db seed
```

### 5. Run Backend
Start the backend server with the following command:
```bash
npm run dev
```
The backend will run at `http://localhost:5000` by default.

### 6. Run Frontend
Open a new terminal by pressing **Ctrl + Shift + `** in Visual Studio Code, then run the frontend application:
```bash
cd frontend
npm install
npm run dev
```
The frontend will run at `http://localhost:3000` by default.

### 7. Access Application
- **Backend**: `http://localhost:5000`
- **Frontend**: `http://localhost:3000`
---
## 👤 Developer
### *Dimas Radithya Nurizkitha*
Fullstack Developer Intern | Bank Nagari

---
## 📞 Contact & Support
For inquiries or support, please contact me:

- **Email**:
  - [dimasdrn21@gmail.com](mailto:dimasdrn21@gmail.com)
- **Bank Nagari Headquarters**:
  - 🌐 [banknagari.co.id](https://www.banknagari.co.id)
  - 📧 [callcenter@banknagari.co.id](mailto:callcenter@banknagari.co.id)
  - ☎️ [150234](tel:150234)
  - 📍 Address: 299V+2QV, Pagambiran Ampalu Nan XX, Lubuk Begalung, Kota Padang, Sumatera Barat

---
## 🙏 Acknowledgments
I would like to express my deepest gratitude to:

- The leadership and staff of Bank Nagari Headquarters
- The Technology and Digitalization Division Team
- All contributors and parties involved in this project

---
<div align="center">
<strong>© 2025 Bank Nagari. All Rights Reserved.</strong>
</div>