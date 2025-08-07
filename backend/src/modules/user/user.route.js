const express = require('express');
const router = express.Router();
const { authenticate, authorizeRoles } = require('../../middleware/authMiddleware');
const userController = require('./user.controller');

// GET /api/users/me
router.get('/me', authenticate, userController.getMe);

// GET /api/users (hanya admin)
router.get('/', authenticate, authorizeRoles('admin'), userController.getAllInterns);

// POST /api/users (admin membuat akun magang)
router.post('/', authenticate, authorizeRoles('admin'), userController.createIntern);

// PUT /api/users/me/profile (update data internProfile)
router.put('/me/profile', authenticate, userController.updateProfile);

// PUT /api/users/me/password (reset password)
router.put('/me/password', authenticate, userController.updatePassword);

module.exports = router;
