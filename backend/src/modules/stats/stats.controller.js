const { getInternsStats } = require('./stats.service');

const getInternsPerMonth = async (req, res) => {
  try {
    const data = await getInternsStats();

    // Konversi BigInt ke string
    const serializedData = JSON.parse(
      JSON.stringify(data, (key, value) => (typeof value === 'bigint' ? value.toString() : value))
    );

    res.json(serializedData);
  } catch (error) {
    console.error('Error getting intern stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getInternsPerMonth };
