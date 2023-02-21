const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hola mi server en express.');
});

app.get('/nueva-ruta',(req, res) => {
    res.send('Hola soy una nueva ruta');
});

app.get('/products',(req, res) => {
    res.json({
        price: 10000,
        name: 'Name 1'
    });
});

app.listen(port, () => {
   console.log('Mi port : ' + port); 
});