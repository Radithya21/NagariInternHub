const express = require('express');
const router = express.Router();
const { getInternsPerMonth, getTotalInterns } = require('./stats.controller');
const { isAdmin } = require('../../middleware/authMiddleware');

router.get('/interns', getInternsPerMonth);
router.get('/interns/total', getTotalInterns);

module.exports = router;
