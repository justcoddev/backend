// exports.getData = (req, res) =>{
//   res.send({data: 'Esto viene desde RUTA usuario'})
// }

const mongoose = require("mongoose");
const model = require("../models/usuario");

//función para el updateSingle
const parseId = (id) => {
  return mongoose.Types.ObjectId(id);
};

/**
 * Obtener DATA de USUARIOS
 */
exports.getData = (req, res) => {
  model.find({}, (err, docs) => {
    res.send({
      items: docs,
    });
  });
};
/**
 * Insertar DATA de USUARIOS
 */
exports.insertData = (req, res) => {
  const data = req.body;
  model.create(data, (err, docs) => {
    if (err) {
      res.status(422).send({ err });
    } else {
      res.send({ data: docs });
    }
  });
};

/**
 * Modificar DATA de USUARIOS
 */
exports.updateSingle = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  model.updateOne({ _id: parseId(id) }, body, (err, docs) => {
    res.send({
      items: docs,
    });
  });
};

/**
 * Eliminar DATA de USUARIOS
 */
exports.deleteSingle = (req, res) => {
  const { id } = req.params;
  model.deleteOne({ _id: parseId(id) }, (err, docs) => {
    res.send({
      items: docs,
    });
  });
};