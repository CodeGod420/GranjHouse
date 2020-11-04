// Para diseñar el esquema de los datos , como se van a ver las tasks

const mongoose = require('mongoose');
const { Schema } = mongoose; //permite definir el esquema de los datos , propiedades de las tares (datos)

const TaskSchema = new Schema({
    title : { type: String, required: true},
    description : { type: String, required: true}
});

module.exports = mongoose.model('Task', TaskSchema); //aqui como se podra reutilizar el esquema