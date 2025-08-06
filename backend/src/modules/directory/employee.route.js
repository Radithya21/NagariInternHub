const express = require('express');
const router = express.Router();
const { getEmployees } = require('./employee.controller');
const { authenticate } = require('../../middleware/authMiddleware');
const upload = require('../../middleware/upload');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


router.get('/', authenticate, getEmployees);

// POST /employees - Tambah Pegawai Baru
router.post('/', upload.single('photo'), async (req, res) => {
  try {
    const { name, position, division, linkedin_url } = req.body;
    const photo_url = req.file ? req.file.path : null;

    const newEmployee = await prisma.employee.create({
      data: {
        name,
        position,
        division,
        linkedin_url,
        photo_url,
      },
    });

    res.status(201).json({ message: 'Employee created', data: newEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
