const express = require('express');
let router = express.Router();
let passport = require('passport');
const News = require('../models/news');

router.post('/login' , function(req , res){
    // res.json({data: req.body});
    passport.authenticate('local' , {session: false} , function(err , user , done){
        if(req.daaaaaata){
            return res.json({data: req.daaaaaata});
        }
        return res.json({err , user});
    })(req , res)
    
    
})


module.exports = router;