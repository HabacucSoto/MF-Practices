const express = require('express')
const path = require('path')
const app = express()
const port = process.env.port || 3000

const adminRouter = express.Router();

//página principal del admin, panel de administración/dashboard (http://localhost:1337/admin)
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/personalizado', function (req, res) {
    res.sendFile(__dirname + '/public/personalizado.html');
});

app.get('/administrador', function(req, res) { 
    res.sendFile(__dirname + '/public/admin.html');
});

app.listen(port, () => {
    console.log('server: ' + port)
})