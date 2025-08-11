const express = require('express');
const router = express.Router();
const { getEmployees } = require('./employee.controller');
const { authenticate } = require('../../middleware/authMiddleware');
const upload = require('../../middleware/upload');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


router.get('/', getEmployees);

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

// PUT /employees/:id - Edit Pegawai
router.put('/:id', upload.single('photo'), async (req, res) => {
  try {
    const { name, position, division, linkedin_url } = req.body;
    const { id } = req.params;
    let updateData = { name, position, division, linkedin_url };
    if (req.file) {
      updateData.photo_url = req.file.path;
    }
    const updated = await prisma.employee.update({
      where: { id: Number(id) },
      data: updateData,
    });
    res.json({ message: 'Employee updated', data: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal update pegawai' });
  }
});

// DELETE /employees/:id - Hapus Pegawai
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.employee.delete({ where: { id: Number(id) } });
    res.json({ message: 'Employee deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal hapus pegawai' });
  }
});

module.exports = router;
