//para conectarse a la base de datos
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern';

mongoose.connect(URI)
    .then(db => console.log('DB esta conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;