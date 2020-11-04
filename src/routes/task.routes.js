//Archivo para definir las operacionesa  a traves de la urls de nuestro servidor

const express = require('express');
const router = express.Router();
const Task = require('../models/task'); //modelo almacenado en constante Task


router.get('/', async (req,res) => { //ruta cuando llegue peticion a / responda algo
    const tasks = await Task.find();              //esta tarea toma tiempo, liego que termine almacenar en const tasks
    res.json(tasks);
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const task = new Task({                  //nuevo objeto
        title: title,
        description: description
    });
    await task.save(); //almacena en bd
    res.json({status: 'Tarea guardada'});
});

router.put('/:id', async (req ,res) => {
    const { title, description } = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Tarea actualizada'});

});

router.delete('/:id', async (req,res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Tarea eliminada'})
});
module.exports = router; 