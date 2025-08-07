const express = require('express');
const router = express.Router();
const { getInternsPerMonth } = require('./stats.controller');
const { isAdmin } = require('../../middleware/authMiddleware');

router.get('/interns' ,getInternsPerMonth);

module.exports = router;
