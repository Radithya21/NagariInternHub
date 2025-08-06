const express = require('express');
const router = express.Router();
const { getInternsPerMonth } = require('./stats.controller');
const { isAdmin } = require('../../middleware/authMiddleware');

router.get('/interns-per-month', getInternsPerMonth);

module.exports = router;
