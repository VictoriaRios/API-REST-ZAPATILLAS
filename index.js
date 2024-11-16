const express = require('express');
const db = require('./config/db.js');
const app = express();
app.use(express.json());
app.use( express.static('public'));

const Zapatilla = require('./models/zapatillasModel.js');

//Trae toda al info
app.get('/api/zapatillas', async (req,res)=>{
    const zapatillas = await Zapatilla.find();
    res.json(zapatillas);
})

//Trae la info segun ID
app.get('/api/zapatillas/:id', async (req,res)=>{
    const id = req.params.id;
    const zapatilla = await Zapatilla.findById(id);
    console.log(zapatilla);
    res.json(zapatilla);
})

//Agregamos un producto nuevo
app.post('/api/zapatillas', async (req, res) => {
    const zapatilla = req.body;
    const nombre = zapatilla.nombre; 
    const marca = zapatilla.marca;
    const precio = zapatilla.precio;
    const cantidad = zapatilla.cantidad;

    const newZapatilla = new Zapatilla({
        nombre: nombre,
        precio: precio,
        marca: marca,
        cantidad: cantidad
    });
    // Guarda el nuevo objeto 'Zapatilla' en la base de datos
    await newZapatilla.save();
    res.json(newZapatilla);
});

//Borra un producto pasandole el ID
app.delete('/api/zapatillas/:id', async (req,res)=>{
    const id = req.params.id;
    const zapatilla = await Zapatilla.findByIdAndDelete(id);
    res.json(zapatilla);
})

//Edita un producto pasandole el ID
app.put('/api/zapatillas/:id', async (req,res)=>{
    const id = req.params.id;
    const zapatilla = req.body;
    const nombre = zapatilla.nombre;
    const precio = zapatilla.precio;
    const marca = zapatilla.marca;
    const cantidad = zapatilla.cantidad;

    const newZapatilla = await Zapatilla.findByIdAndUpdate(id,{nombre,precio,marca,cantidad});
    res.json(newZapatilla);
})

//Puerto 
const port = 3000;
app.listen( port, () => {
    console.log(`Servidor Web Esuchando en el puerto ${port}`);
})