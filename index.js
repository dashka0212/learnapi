const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./src/routes');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
app.listen("8081");
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json({limit : '5mb'}));
app.use(cors());
mongoose.connect('mongodb://localhost/testing');
app.get("/" , function(req , res){
    return res.json({success : true});
})
router(app);
