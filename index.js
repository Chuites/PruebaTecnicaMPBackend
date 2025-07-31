const express = require("express");
const cors = require("cors");
const fiscaliaRoutes = require("./routes/fiscaliaRoutes");
const fiscalRoutes = require('./routes/fiscalRoutes');
const casoRoutes = require('./routes/casoRoutes');
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API del Ministerio Público en funcionamiento");
});

app.use("/api/fiscalias", fiscaliaRoutes);

app.use('/api/fiscales', fiscalRoutes);

app.use('/api/casos', casoRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
