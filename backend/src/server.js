// src/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./modules/auth/auth.route');
const userRoutes = require('./modules/user/user.route');
const attendanceRoutes = require('./modules/attendance/attendance.route');
const employeeRoutes = require('./modules/directory/employee.route');
const statsRoutes = require('./modules/stats/stats.route');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/employees', employeeRoutes); 
app.use('/api/stats', statsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
