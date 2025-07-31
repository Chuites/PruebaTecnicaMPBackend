const service = require('../services/fiscalService');

const crearFiscal = async (req, res) => {
    try {
        await service.insertarFiscal(req.body);
        res.status(201).json({ mensaje: 'Fiscal creado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerFiscalesPorFiscalia = async (req, res) => {
    try {
        const fiscales = await service.listarFiscalesPorFiscalia(req.params.id);
        res.json(fiscales);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const loginFiscal = async (req, res) => {
    try {
        const { correo, password } = req.body;
        const fiscal = await service.autenticarFiscal(correo, password);

        if (!fiscal) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        res.json({ mensaje: 'Login exitoso', usuario: fiscal });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const listarLogs = async (req, res) => {
  try {
    const data = await logService.listarLogs();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = { crearFiscal, obtenerFiscalesPorFiscalia, loginFiscal, listarLogs };
