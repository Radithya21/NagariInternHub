const express = require('express');
const router = express.Router();
const { authenticate, authorizeRoles } = require('../../middleware/authMiddleware');
const userController = require('./user.controller');

// GET /api/users/me
router.get('/me', authenticate, userController.getMe);

// GET /api/users (hanya admin)
router.get('/', authenticate, authorizeRoles('admin'), userController.getAllInterns);

module.exports = router;
