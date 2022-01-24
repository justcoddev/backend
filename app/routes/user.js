const express = require("express");

const controller = require("../controllers/user");

const router = express.Router();

const path = "user";

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