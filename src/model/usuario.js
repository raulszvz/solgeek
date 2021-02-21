const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = Schema({
  nombre: String,
  apellido: String,
  correo: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('usuarios', UsuarioSchema);
