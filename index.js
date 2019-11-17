const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./src/routes');
app.listen("8080");
app.use(cors());
app.get("/" , function(req , res){
    return res.json({success : true});
})
router(app);
