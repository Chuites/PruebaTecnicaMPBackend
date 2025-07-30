const { poolPromise } = require("../db/connection");

async function insertarFiscalia(nombre) {
  const pool = await poolPromise;
  await pool.request().input("nombre", nombre).execute("sp_insertar_fiscalia");
}

async function listarFiscalias() {
  const pool = await poolPromise;
  const result = await pool.request().execute("sp_listar_fiscalias");
  return result.recordset;
}

module.exports = { insertarFiscalia, listarFiscalias };
