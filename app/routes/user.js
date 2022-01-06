const express = require("express");

const controller = require("../controllers/user");

const router = express.Router();

const path = "user";

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
