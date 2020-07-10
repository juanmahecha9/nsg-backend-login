const express = require("express");
//Funciones de las  del controlador
const control = require("../controller/index.controller");

const router = express.Router(); //configurar las rutas que se van a usar

//Prueba del servicio y las rutas
router.get("/pruebaS", control.prueba);

//Datos usuario
//Crear la ruta para el control Crear datos y llamar la funcion en especifico de ese documento
router.post("/new", control.createData);
//obtner o mostrar los datos de la BD
router.get("/new", control.showData);
//actualizar datos de la BD
router.put("/actualizar/:id", control.upgradeData);
//eliminar datos de la Db
router.delete("/borrar/:id", control.delateData);
//Login en la app
router.post("/login", control.login);

//borramos todo
router.delete("/borrado", control.dropAll);

//Rutas privadas
router.get("/private", control.verifyToken, control.private);

module.exports = router;
//exportar las rutas
