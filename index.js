const express = require("express");
const app = express();
const routes = require("./src/routes");
const port = 3000;

const { init } = require("./src/services/servicesLocator/composer");

init();
routes(app);

app.listen(port, () => {
  console.log(`Ejemplo listo en el puerto: ${port}`);
});
