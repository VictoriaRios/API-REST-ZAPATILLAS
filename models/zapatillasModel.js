const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const zapatillaSchema = new Schema({
    nombre: String,
    precio: Number,
    marca: String,
})

const Zapatilla = mongoose.model('Zapatilla', zapatillaSchema);
module.exports = Zapatilla;