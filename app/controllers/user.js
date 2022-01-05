// exports.getData = (req, res) =>{
//   res.send({data: 'Esto viene desde RUTA'})
// }
const model = require("../models/user");
/**
 * Obtener DATA de USUARIOS
 */
exports.getData = (req, res) => {
  model.find({}, (err, docs) => {
    res.send({
      docs,
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
      res.status(422).send({err });
    } else {
      res.send({ data: docs });
    }
  });
};
