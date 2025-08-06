const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getInternsStats = async () => {
  const result = await prisma.$queryRaw`
    SELECT 
      DATE_FORMAT(created_at, '%Y-%m') as month,
      COUNT(*) as total 
    FROM User 
    WHERE role = 'intern'
    GROUP BY month
    ORDER BY month ASC
  `;
  return result;
};

module.exports = { getInternsStats };
