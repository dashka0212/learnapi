const express = require('express');
let router = express.Router();
const News = require('../models/news');

/*
  CreateReadUpdateDelete
  CRUD
*/
router.get('/single/:id' , function(req , res){
  News.find({_id : req.params.id}).exec((err , news) => {
    return res.json({medee : news});
  });
});
router.get('/all' , function(req , res){
  News.find({}).sort({created: -1}).exec((err , news) => {
    return res.json({medee : news});
  });
})

router.post('/new', function (req, res) {
    let news = new News();
        news.title = req.body.title;
        news.desc = req.body.desc;
        news.body = req.body.body;
        news.save((err , nNews)=>{
          if(err){return res.json({success: false , err})}
          return res.json({success: true , news: nNews});
        })
})

router.get('/update/:id', function (req, res) {
    res.json({success : "news -> " + req.params});
})






module.exports = router;