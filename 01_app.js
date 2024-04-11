require('dotenv').config();

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello RestServer')
})

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto', process.env.PORT);
});