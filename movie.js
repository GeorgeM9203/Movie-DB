c//onst { MongoClient, ServerApiVersion} = require("mongodb");
const mongoose = require('mongoose');

var movieSchema = new mogoose.Schema({
    _id: Object,
    title: String,
    releaseDate: Date,
    genre: String,
    averageRating: Number,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;