const mongoose = require("mongoose");
// const mongoosePaginate = require('mongoose-paginate-v2')
const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    avatar: {
      type: String,
      default: "http://image.com",
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
    },
  },
  {
    versionKey: false, //__v
    timestamps: true, //guardar fech creación y actualziación
  }
);
module.exports = mongoose.model("user", UserScheme);
