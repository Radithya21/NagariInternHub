const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { startOfDay, endOfDay } = require('date-fns');

const createAttendance = async (req, res) => {
  const userId = req.user.id; // pastikan middleware authenticate sudah set req.user
  const { latitude, longitude, location_name } = req.body;
  const now = new Date();

  // Cek apakah sudah absen hari ini
  const awalHari = new Date(now);
  awalHari.setHours(0, 0, 0, 0);
  const akhirHari = new Date(now);
  akhirHari.setHours(23, 59, 59, 999);

  const sudahAbsen = await prisma.attendance.findFirst({
    where: {
      user_id: userId,
      timestamp: {
        gte: awalHari,
        lte: akhirHari,
      },
    },
  });

  if (sudahAbsen) {
    return res.status(400).json({ message: 'Kamu sudah absen hari ini' });
  }

  // Tentukan keterangan
  const batasTerlambat = new Date(now);
  batasTerlambat.setHours(7, 45, 0, 0);
  // Gunakan getTime() untuk perbandingan waktu
  const keterangan = now.getTime() > batasTerlambat.getTime() ? 'terlambat' : 'tepat_waktu';

  // Simpan attendance
  const absen = await prisma.attendance.create({
    data: {
      user_id: userId,
      latitude,
      longitude,
      location_name,
      timestamp: now,
      keterangan,
    },
  });

  let pesan = keterangan === 'terlambat'
    ? 'Absensi berhasil, tapi kamu terlambat!'
    : 'Absensi berhasil, kamu tepat waktu!';
  return res.json({ message: pesan, absen });
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
