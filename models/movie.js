// require mongoose
const mongoose = require('mongoose');

//set up the schema for our model
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title:  {
        type: String,
        required: true
    },
    releaseYear:{
        type: Number,
        default: function() {
            return new Date().getFullYear();
        },
        min: 1927
    },
    mpaaRating: {
        type: String, 
        enum: ['G', 'PG', 'PG-13', 'R']
    },
    cast: [String],
    nowShowing: {type: Boolean, default: false},
}, { timestamps: true });

//set up the model for our collection in the database
module.exports = mongoose.model('Movie', movieSchema);
// the two arguments for mongoose.model
//1)the model name - also used to create the collection name
//2) a reference to the schema used to create the model