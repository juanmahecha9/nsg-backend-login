//requerir el servidor
const app = require("./server/server"); //Datos del servidor
require("./database/db"); //activar configuracion database

//starting the server
app.listen(app.get("port"), app.get("bind"), () => {
  console.log("Server on port ", app.get("port"));
  console.log("Bind", app.get("bind"));
  console.log("success...");
  console.log("autenticacion");
});
