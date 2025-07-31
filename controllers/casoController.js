const casoService = require('../services/casoService');
const logService = require('../services/logService');
const { poolPromise } = require('../db/connection');

const listarCasos = async (req, res) => {
    try {
        const casos = await casoService.listarCasos();
        res.json(casos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const crearCaso = async (req, res) => {
    try {
        await casoService.insertarCaso(req.body);
        res.status(201).json({ mensaje: 'Caso creado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const cambiarEstado = async (req, res) => {
    try {
        await casoService.actualizarEstadoCaso(req.params.id, req.body.estado);
        res.json({ mensaje: 'Estado actualizado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const reasignar = async (req, res) => {
    const { id_caso, id_fiscal_destino } = req.body;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`SELECT estado, id_fiscal_actual, id_fiscalia FROM Casos WHERE id = ${id_caso}`);

        const caso = result.recordset[0];

        if (!caso) return res.status(404).json({ error: 'Caso no encontrado' });

        // Verifica condiciones de reasignación
        const fiscalNuevo = await pool.request()
            .query(`SELECT id_fiscalia FROM Fiscales WHERE id = ${id_fiscal_destino}`);

        if (caso.estado !== 'pendiente' || !fiscalNuevo.recordset.length || fiscalNuevo.recordset[0].id_fiscalia !== caso.id_fiscalia) {
            await logService.registrarLogIntento({
                id_caso,
                id_fiscal_origen: caso.id_fiscal_actual,
                id_fiscal_destino,
                motivo: 'Intento fallido de reasignación'
            });
            return res.status(400).json({ error: 'Reasignación no permitida, se registró el intento' });
        }

        await casoService.reasignarFiscal(id_caso, id_fiscal_destino);
        res.json({ mensaje: 'Caso reasignado exitosamente' });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { crearCaso, cambiarEstado, reasignar, listarCasos };
