const mongoose = require('mongoose');

const Hereglegch = mongoose.Schema({
    username : String,
    password : String,
    email : String
});

module.exports = mongoose.model('Users' , Hereglegch);