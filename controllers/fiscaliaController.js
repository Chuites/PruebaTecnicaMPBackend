const fiscaliaService = require("../services/fiscaliaService");

const crearFiscalia = async (req, res) => {
  try {
    const { nombre } = req.body;
    await fiscaliaService.insertarFiscalia(nombre);
    res.status(201).json({ mensaje: "Fiscalía creada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obtenerFiscalias = async (req, res) => {
  try {
    const data = await fiscaliaService.listarFiscalias();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { crearFiscalia, obtenerFiscalias };
