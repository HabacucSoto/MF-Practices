var express = require('express');
var path = require('path');

// Crea una Express app.
var app = express();

// Puerto
const PORT = process.env.PORT || 8080

// obtiene la ruta del directorio publico donde se encuentran los elementos estaticos (css, js).
var publicPath = path.resolve(__dirname, 'public'); //path.join(__dirname, 'public'); también puede ser una opción

// Para que los archivos estaticos queden disponibles.
app.use(express.static(publicPath));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/public/index.html');
});

app.get('/personalizado', function(req, res){
    res.sendFile(__dirname + '/public/personalizado.html');
});

app.get('/administrador', function(req, res){ 
    res.sendFile(__dirname + '/public/admin.html');
});

app.listen(PORT)