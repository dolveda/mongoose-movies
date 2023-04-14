//require dependencies
const express = require('express');
const logger = require('morgan');
const indexRoutes = require('./routes/index');
// ^require index router module

// initialize express application
const app = express();

//configure application settings
app.set('view engine', 'ejs');
//^ this sets the default view engine to be ejs

//expose environment variables
require('dotenv').config();
//require and execute databasse config code
require('./config/database');

// console.log(process.env);//look at the enviroonment variabless

//mount middleware
app.use(logger('dev'));
//http logger middleware
app.use(express.static('public'));
//express static middleware - makes static assets available t the client

//mount routes
app.use('/', indexRoutes);

//tell the application to listen for requests
app.listen(3002, () => {
    console.log('express is listening on port 3002');
})