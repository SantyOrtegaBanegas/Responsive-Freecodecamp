//Como es un modulo ajeno a nodejs se instala npm install express y 
// se crea la carpeta "node_modules" porque es ajena.
const express = require('express');
//La constante app es el objeto de express con todos los metodos listo  para crear servidores.
const app = express();
//El modulo 'Path'en Nodejs sirve para trabajar con directorios,concatenar y unificar las barras "/" tanto en windows-unix y 
//evitar dolores de cabeza.
const path = require('path');

//Settings

//Seteo puerto,se cambia con el numero que quiera.
app.set('port',9000);
//Seteo la direccion de mis vistas.
app.set('views', path.join(__dirname + '/views'));
//ESTA LINEA DE CODIGO : Hace que podamos usar las extensiones html para que todo nos sea mas familiar, en lugar del motor de 
//plantillas 'ejs'.Express los sigue renderizando en formato 'ejs' pero pero todo es html 100% nativo.
app.engine('html',require('ejs').renderFile);
//uso el motor de plantillas de express ejs por eso no hace falta que lo importe.
app.set('view engine' , 'ejs');


//Rutas (se fueron al archivo routes)
app.use(require('./routes/routes.js'));



//Listening the server
app.listen(app.get('port'),  function() {
   console.log('Ejecutando un server local con express en puerto:',app.get('port'));
});

//Static files: css,js, ,fotos,documentos
app.use(express.static( path.join( __dirname, 'public')));



//Middlewares