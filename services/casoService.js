const { poolPromise } = require('../db/connection');

async function insertarCaso(caso) {
    const pool = await poolPromise;
    await pool.request()
        .input('numero_caso', caso.numero_caso)
        .input('descripcion', caso.descripcion)
        .input('estado', caso.estado)
        .input('id_fiscal_actual', caso.id_fiscal_actual)
        .input('id_fiscalia', caso.id_fiscalia)
        .execute('sp_insertar_caso');
}

async function actualizarEstadoCaso(id, nuevo_estado) {
    const pool = await poolPromise;
    await pool.request()
        .input('id', id)
        .input('nuevo_estado', nuevo_estado)
        .execute('sp_actualizar_estado_caso');
}

async function reasignarFiscal(id_caso, nuevo_fiscal) {
    const pool = await poolPromise;
    await pool.request()
        .input('id', id_caso)
        .input('nuevo_fiscal', nuevo_fiscal)
        .execute('sp_reasignar_fiscal');
}

async function listarCasos() {
    const pool = await poolPromise;
    const result = await pool.request().execute('sp_listar_casos');
    return result.recordset;
}


module.exports = {
    insertarCaso,
    actualizarEstadoCaso,
    reasignarFiscal,
    listarCasos
};
