const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./src/routes');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const passport = require('passport');
require('./src/config/passport')(passport);
app.listen("8081");
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json({limit : '5mb'}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect('mongodb://localhost/testing');
app.use("/*" , function(req , res , next){
    req.daaaaaata = 'data from use /***';
    next();
})
// app.get("/*" , function(req , res){
//     if(req.daaaaaata){
//         //res.send() ...
//     } else {
//         res.redirect('/login')
//     }
// })
router(app);
