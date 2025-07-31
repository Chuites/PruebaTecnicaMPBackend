const { poolPromise } = require('../db/connection');

async function insertarFiscal(fiscal) {
    const pool = await poolPromise;
    await pool.request()
        .input('nombre', fiscal.nombre)
        .input('correo', fiscal.correo)
        .input('password_hash', fiscal.password_hash)
        .input('rol', fiscal.rol)
        .input('id_fiscalia', fiscal.id_fiscalia)
        .execute('sp_insertar_fiscal');
}

async function listarFiscalesPorFiscalia(id_fiscalia) {
    const pool = await poolPromise;
    const result = await pool.request()
        .input('id_fiscalia', id_fiscalia)
        .execute('sp_listar_fiscales_por_fiscalia');
    return result.recordset;
}

module.exports = { insertarFiscal, listarFiscalesPorFiscalia };
