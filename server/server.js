//configuracion del servidor
const express = require("express"),
  mongoose = require("mongoose"),
  morgan = require("morgan"),
  cors = require("cors");
//archivo configuracion puerto y bind
const config = require("../config/config.json");
//archivo configuracion rutas
const router = require("../routes/index.routes");

const app = express();

//cofiguracion del puerto
app.set(
  "port",
  process.env.PORT ? process.env.PORT : config.app.port ? config.app.port : 3000
);
app.set(
  "bind",
  process.env.BIND
    ? process.env.BIND
    : config.app.bind
    ? config.app.bind
    : "127.0.0.1"
);
// bind restriccion ip
/* La IP 127.0.0.1 hace referencia al localhost, un host es cualquier equipo o servidor, así que el host local es cualquiera que estés usando. */

//uso de cookies
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  /* Voy a tener acceso, control, seguimiento y origen de todos los datos que van a ingresar a la API */

  res.header("Access-Control-Allow-Headers", config.access.cookies);
  /* Acceso a todos los metadatos- cookies */

  res.header("Access-Control-Allow-Methods", config.access.method);
  /* Acceso a todos los metodos http- metodos de peticio */

  res.header("Allow", config.access.method);
  /* Confirmacion estricta de los metodos a utilizar */

  next();
});

//middlewares

//intercambio de informacion entre la api y la peticion http
app.use(express.json());
//me devuelve eñ estado de la solicitud http
app.use(morgan("dev"));
app.use(cors());
//rutas
app.use(router);

module.exports = app;
