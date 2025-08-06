const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany({
      orderBy: { name: 'asc' },
    });

    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal mengambil data pegawai.' });
  }
};

module.exports = {
  getEmployees,
};
