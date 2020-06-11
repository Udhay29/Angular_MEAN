const express = require('express');
const bodyparser = require('body-parser'); 
const cors = require('cors');


const { mongoose } = require('./db.js');
const empController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyparser.json());
app.use(cors({origin: 'http://localhost:4200'})); 

app.listen(3000, () => console.log('server s running at port 3000'));

app.use('/employees', empController);