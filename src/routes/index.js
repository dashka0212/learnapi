const newss = require('./news');
const users = require('./users');
const texts = require('./texts');
module.exports = function(app){
    app.use('/news' , newss);
    app.use('/users' , users);
    app.use('/texts' , texts);
}