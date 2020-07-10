/* conexion a la base de datos,en esta se usara mongo */
/* Conecion de mongoose */
const mongoose = require("mongoose");
const config = require("../private/config.db.json");
//Para variables de la db

//Variables de entorno, que vienen desde en dotenv, para tener un desarrollo mas fluido y generico
const dbLocal = config.database.url;
const web = config.database.web;
const dbWeb = `mongodb+srv://${web}@cluster0-x3ldm.mongodb.net/<dbname>?retryWrites=true&w=majority`;

const url = dbWeb;

mongoose
  .connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("Success, conncection mongoDB"))
  .catch((err) => console.log(err));
