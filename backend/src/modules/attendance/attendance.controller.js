const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { startOfDay, endOfDay } = require('date-fns');

const createAttendance = async (req, res) => {
  const userId = req.user.id;
  const { latitude, longitude, location_name } = req.body;

  try {
    const today = new Date();
    const existing = await prisma.attendance.findFirst({
      where: {
        user_id: userId,
        timestamp: {
          gte: startOfDay(today),
          lte: endOfDay(today),
        },
      },
    });

    if (existing) {
      return res.status(400).json({ message: 'Anda sudah absen hari ini.' });
    }

    const attendance = await prisma.attendance.create({
      data: {
        user_id: userId,
        latitude,
        longitude,
        location_name,
      },
    });

    res.json(attendance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal melakukan absensi.' });
  }
};

const getMyAttendance = async (req, res) => {
  const userId = req.user.id;

  try {
    const records = await prisma.attendance.findMany({
      where: { user_id: userId },
      orderBy: { timestamp: 'desc' },
    });

    res.json(records);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data absensi.' });
  }
};

const checkTodayAttendance = async (req, res) => {
  const userId = req.user.id;

  try {
    const today = new Date();
    const record = await prisma.attendance.findFirst({
      where: {
        user_id: userId,
        timestamp: {
          gte: startOfDay(today),
          lte: endOfDay(today),
        },
      },
    });

    res.json({ hasAttended: !!record });
  } catch (error) {
    res.status(500).json({ error: 'Gagal memeriksa status absensi.' });
  }
};

// (Opsional) Untuk admin
const getAllAttendance = async (req, res) => {
  try {
    const records = await prisma.attendance.findMany({
      include: {
        user: true,
      },
      orderBy: {
        timestamp: 'desc',
      },
    });

    res.json(records);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil semua absensi.' });
  }
};

module.exports = {
  createAttendance,
  getMyAttendance,
  checkTodayAttendance,
  getAllAttendance,
};
