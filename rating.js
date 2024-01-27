//const { MongoClient, ServerApiVersion} = require("mongodb");
const mongoose = require('mongoose');

var ratingSchema = new mongoose.Schema({
    _id: Object,
    userId: Object,
    movieId: Object,
    rating: Number,
    createdAt: Date
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;