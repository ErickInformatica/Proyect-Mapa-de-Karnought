'use strict'

// IMPORTACIONES
const express = require("express");
const testController = require("../controllers/test.controller")

// RUTAS
var api = express.Router();
api.post('/test', testController.ejemplo);

module.exports = api;