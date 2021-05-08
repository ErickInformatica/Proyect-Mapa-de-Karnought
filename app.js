'use strict'

//VARIABLES GLOBALES
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")

// IMPORTACION RUTAS
const usuario_ruta = require("./src/routes/test.route");

// MIDDLEWARES
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

// CABECERAS
app.use(cors());

// CARGA DE RUTAS localhost:3000/api/obtenerUsuarios
app.use('/api', usuario_ruta);

//EXPORTAR
module.exports = app;