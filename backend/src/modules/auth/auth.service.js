const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const register = async ({ name, email, password, role }) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new Error('Email sudah terdaftar');

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: role || 'intern',
    },
  });

  return { message: 'Registrasi berhasil', user: { id: user.id, email: user.email, role: user.role } };
};

const login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('Email tidak ditemukan');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Password salah');

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET || 'defaultsecret',
    { expiresIn: '1d' }
  );

  return { message: 'Login berhasil', token };
};

module.exports = {
  register,
  login,
};
