//require dependencies
const express = require('express');
const logger = require('morgan');
const indexRoutes = require('./routes/index');
// ^require index router module
const movieRoutes = require('./routes/movies');

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
//^http logger middleware
app.use(express.static('public'));
//^express static middleware - makes static assets available t the client
app.use(express.urlencoded({ extended: false }));
//^this creates req.body from an HTML form submission


//mount routes
app.use('/', indexRoutes);
app.use('/movies', movieRoutes);

//tell the application to listen for requests
app.listen(3002, () => {
    console.log('express is listening on port 3002');
})


//Mongoose playground:

//create a document using the new model we defined(just for fun)
// const Movie = require('./models/movie');

// Movie.create({title: 'Star Wars', releaseYear: 1977})
// .then(function(newMovie) {
//     console.log(newMovie);
// })