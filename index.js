const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./src/routes");
const port = 3005;

// Configurar CORS para permitir cualquier origen
app.use(cors());
routes(app);

app.listen(port, () => {
  console.log(`Ejemplo listo en el puerto: ${port}`);
});
