
const express = require('express')
const morgan = require("morgan");
const cors = require('cors')

const tasksRouts = require('./routes/tasks');
 
 const app = express();
//jjjj
 app.use(cors());
 app.use(morgan('dev'));
 app.use(express.json());
 app.use(tasksRouts)
 app.listen(4000)
 console.log('server on port 4000')
 