const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

const getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      include: {
        internProfile: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User tidak ditemukan' });
    }

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      internProfile: user.internProfile,
    });
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
};

const getAllInterns = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      where: { role: 'intern' },
      include: { internProfile: true },
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data user' });
  }
};


exports.createIntern = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Cek email sudah terdaftar
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ message: 'Email sudah terdaftar.' });
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
        role: 'intern',
        name: email.split('@')[0], // default name dari email
      },
    });
    res.json({ message: 'User magang berhasil dibuat.', user });
  } catch (err) {
    res.status(500).json({ message: 'Gagal membuat user magang.' });
  }
};

// Update data internProfile
exports.updateProfile = async (req, res) => {
  const userId = req.user.id;
  const { institution_name, program } = req.body;
  try {
    // Upsert internProfile
    const profile = await prisma.internProfile.upsert({
      where: { user_id: userId },
      update: { institution_name, program },
      create: { user_id: userId, institution_name, program },
    });
    res.json({ message: 'Profil berhasil diperbarui', profile });
  } catch (err) {
    res.status(500).json({ message: 'Gagal update profil.' });
  }
};

// Update password user
exports.updatePassword = async (req, res) => {
  const userId = req.user.id;
  const { newPassword } = req.body;
  try {
    const hashed = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({ where: { id: userId }, data: { password: hashed } });
    res.json({ message: 'Password berhasil diubah.' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal update password.' });
  }
};

module.exports = {
  getMe,
  getAllInterns,
  createIntern: exports.createIntern,
  updateProfile: exports.updateProfile,
  updatePassword: exports.updatePassword,
};
