const Movie = require('../models/movie');

function newMovie(req,res) {
    // render template here
    res.render('movies/new', {
        title: 'Enter a New Movie'
    });
};

async function create(req, res) {
    try{
        req.body.nowShowing = !!req.body.nowShowing;//type coercion - convert string type iinto a boolean
        //check req.body for missing fields
        for(let key in req.body) {
            // if a field is missing, we'll delete it from req.body
            if(req.body[key] === '') delete req.body[key];
        };
        
        //remove all space chars before or after commas
        // req.body.cast = req.body.replace(/\s*,\s*/, '');
        if(req.body.cast) {
            req.body.cast = req.body.cast.trim();// remove space chars at beginning or ending  of string
            req.body.cast = req.body.cast.split(/\s*,\s*/);//split comma separated names into array
        }

        await Movie.create(req.body);

        res.redirect('/movies');
    }  catch (error) {
        //during development mode; console.log the error
        console.log(error);
        res.render('error', {title: 'Something Went Wrong'});
    }
}

async function index(req, res) {

    try{
        const allMovies = await Movie.find({})
        
            res.render('movies/index', { 
                movies: allMovies, 
                title: 'All Movies' 
            });

    }  catch (error) {
        //during development mode; console.log the error
        console.log(error);
        res.render('error', {title: 'Something Went Wrong'});
    }
    
};


async function show(req, res) {
    // find one mvie in the database bases on it's ID
    try {
        const foundMovie = await Movie.findById(req.params.id)
        res.render('movies/show', { 
            movie: foundMovie,
            title: 'See Movie Details' 
        });
    }  catch (error) {
        //during development mode; console.log the error
        console.log(error);
        res.render('error', {title: 'Something Went Wrong'});
    }
 }

module.exports = {
    new: newMovie,
    create,
    index,
    show
};