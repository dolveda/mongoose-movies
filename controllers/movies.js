const Movie = require('../models/movie');

function newMovie(req,res) {
    // render template here
    res.render('movies/new', {
        title: 'Enter a New Movie'
    });
};

function create(req, res) {
    req.body.nowShowing = !!req.body.nowShowing;//type coercion - convert string type iinto a boolean
    //remove all space chars before or after commas
    // req.body.cast = req.body.replace(/\s*,\s*/, '');
    req.body.cast = req.body.cast.trim();// remove space chars at beginning or ending  of string
    req.body.cast = req.body.cast.split(/\s*,\s*/);//split comma separated names into array

    Movie.create(req.body).then(function(newMovie) {
        console.log(newMovie);
        res.send(newMovie);
    }).catch(function(err) {
        console.log(err);
        res.send('error');
    })
}

function index(req, res) {
    Movie.find({}).then(function(allMovies) {
        res.render('movies/index', { 
            movies: allMovies, 
            title: 'All Movies' 
        });
    });
}

function show(req, res) {
    // find one mvie in the database bases on it's ID
    Movie.findById(req.params.id).then(function(foundMovie) {
        // render a template with that movie object
        res.render('movies/show', { 
            movie: foundMovie,
            title: 'See Movie Details' 
        });
    });
}

module.exports = {
    new: newMovie,
    create,
    index,
    show
};