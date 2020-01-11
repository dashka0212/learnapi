const express = require('express');
var router = express.Router();
const Texts = require('../models/texts');
router.post('/add', function (req, res) {
    let texts = new Texts();
    texts.name = req.body.text;
    texts.save((err , newText)=>{
        if(err){return res.json({err})}
        return res.json({text: newText})
    })
})

module.exports = router;