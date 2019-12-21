const mongoose = require('mongoose');

const texts = mongoose.Schema({
    name : String
});

module.exports = mongoose.model('texts' , texts);