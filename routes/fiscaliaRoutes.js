const express = require("express");
const router = express.Router();
const controller = require("../controllers/fiscaliaController");

router.post("/", controller.crearFiscalia);
router.get("/", controller.obtenerFiscalias);

module.exports = router;
