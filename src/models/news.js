const mongoose = require('mongoose');

const Hereglegch = mongoose.Schema({
    title : String,
    desc:String,
    body : String,
    created : {type : Date , default : new Date()}
});

module.exports = mongoose.model('News' , Hereglegch);