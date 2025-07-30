const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Ejemplo de ruta temporal
app.get("/", (req, res) => {
  res.send("API del Ministerio Público en funcionamiento");
});

const fiscaliaRoutes = require("./routes/fiscaliaRoutes");
app.use("/api/fiscalias", fiscaliaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
