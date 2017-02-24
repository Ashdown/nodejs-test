//import express
const express = require('express');

//create an express application
const app = express();

//routes httpd get requests to the specified path "/" with the specified callback function
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000);