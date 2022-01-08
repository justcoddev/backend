const express = require("express");

const controller = require("../controllers/usuario");

const router = express.Router();

const path = "singup";
/**
 * Ruta: /user GET
 */

router.get(`/${path}/mostrar`, controller.getData);
/**
 * Ruta: /user GET
 */

router.post(`/${path}/crear`, controller.insertData);

/**
 * Ruta: /user PUT
 */

router.put(`/${path}/actualizar/:id`, controller.updateSingle);

/**
 * Ruta: /user PUT
 */

router.delete(`/${path}/eliminar/:id`, controller.deleteSingle);

module.exports = router;

module.exports = router;