const express = require('express');
const router = express.Router();
const {
  createAttendance,
  getMyAttendance,
  checkTodayAttendance,
  getAllAttendance,
} = require('./attendance.controller');

const { authenticate, authorizeRoles } = require('../../middleware/authMiddleware');

router.use(authenticate);

// POST /api/attendance
router.post('/', authorizeRoles('intern'), createAttendance);

// GET /api/attendance/me
router.get('/me', authorizeRoles('intern'), getMyAttendance);

// GET /api/attendance/today
router.get('/today', authorizeRoles('intern'), checkTodayAttendance);

// (opsional) GET /api/attendance/users (admin only)
router.get('/users', authorizeRoles('admin'), getAllAttendance);

module.exports = router;
