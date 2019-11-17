const newss = require('./news');
const users = require('./users');
module.exports = function(app){
    app.use('/news' , newss);
    app.use('/users' , users);
}