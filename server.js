'user strict';

//Node Modules (dependencies)
require('dotenv').config();
const express = require('express');

//Application
const app = express(); //builds an http server for the entire application

//PORT - Integral to the application
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
app.get('/hello', (request, response) => {
response.status(200).send('hello');
})

app.use('*', (requestAnimationFrame, res) => {
  res.status(400).send ('sorry that broke');
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))



