const { poolPromise } = require('../db/connection');

async function registrarLogIntento(log) {
    const pool = await poolPromise;
    await pool.request()
        .input('id_caso', log.id_caso)
        .input('id_fiscal_origen', log.id_fiscal_origen)
        .input('id_fiscal_destino', log.id_fiscal_destino)
        .input('motivo', log.motivo)
        .execute('sp_insertar_log_intento');
}

module.exports = { registrarLogIntento };
