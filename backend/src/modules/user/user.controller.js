const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

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

module.exports = {
  getMe,
  getAllInterns,
};
