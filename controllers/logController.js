const service = require('../services/logService');

const listarLogs = async (req, res) => {
  try {
    const data = await logService.listarLogs();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = { listarLogs };
