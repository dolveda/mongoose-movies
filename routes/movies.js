const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/movies');

//GET /movies/new - new movie route
router.get('/new', moviesController.new);

//POST /movies - create route
router.post('/', moviesController.create);

//GET /movies - index route
router.get('/', moviesController.index);

//GET /movies/:id - show route - the show route must ALWAYS go last
router.get('/:id', moviesController.show);

module.exports = router;