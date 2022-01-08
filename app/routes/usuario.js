const express = require("express");

const controller = require("../controllers/usuario");

const router = express.Router();

const path = "usuario";
/**
 * Ruta: /user GET
 */

router.get(`/${path}`, controller.getData);
/**
 * Ruta: /user GET
 */

router.post(`/${path}`, controller.insertData);

/**
 * Ruta: /user PUT
 */

router.put(`/${path}/:id`, controller.updateSingle);

/**
 * Ruta: /user PUT
 */

router.delete(`/${path}/:id`, controller.deleteSingle);

module.exports = router;

module.exports = router;