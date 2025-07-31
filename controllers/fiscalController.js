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

module.exports = { crearFiscal, obtenerFiscalesPorFiscalia };
