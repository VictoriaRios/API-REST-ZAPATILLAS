const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/zapatillas');

const db = mongoose.connection;

db.on('error',() =>{
    console.error('Erorr de la conexcion con la base de datos');
})

db.once('open',()=>{
    console.info('Conexion con la base de datos OK');
})

module.exports = db;