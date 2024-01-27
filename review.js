const { MongoClient, ServerApiVersion} = require("mongodb");
const mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    _id: Object,
    userId: Object,
    movieId: Object,
    text: String,
    createdAt: Date,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;