//Archivo para definir las operacionesa  a traves de la urls de nuestro servidor

const express = require('express');
const router = express.Router();

router.get('/', (req,res) => { //ruta cuando llegue peticion a / responda algo
    res.send('HOLA MUNDO');
});

module.exports = router; 