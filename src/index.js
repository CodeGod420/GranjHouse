const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000); //guardar valor puerto de la nube o usar valor local

//Middlerwares
app.use(morgan('dev')); //para ver los requerimientos api en la consola
app.use(express.json());

//Routes
app.use('/api/tasks', require('./routes/task.routes'));

//Static Files
app.use(express.static(path.join(__dirname, 'public'))); //uno el path __dirname actual + public para poder usar el index.html cuando se llame a la dir /


//Start server
app.listen(app.get('port') , ()=>{
    console.log(`server en puerto ${app.get('port')}`);
});