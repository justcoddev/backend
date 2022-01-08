const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
  {
    email: String,
    password: String
  },
  {
    versionKey: false, //__v
    timestamps: true, //guardar fech creación y actualziación
  }
);
module.exports = mongoose.model("usuario", UserScheme);
