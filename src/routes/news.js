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
  News.find({}).exec((err , news) => {
    return res.json({medee : news});
  });
})

router.get('/new', function (req, res) {
  // let news = new News();
  //     news.title = 'First';
  //     news.desc = 'FIrst Desc';
  //     news.created = new Date();
  //     news.save((err , nNew)=>{
  //       if(err){return res.json({err})}
  //       return res.json({success : nNew});
  //     })
    // News.insertOne()
    // News.insert()
   
    // {
    //   title : 'sssss',
    //   body : 'sssss',
    //   desc : 'sssss',
    // }
    // req.body.title
    News.insertMany([{title:'oBJECT TITLE' , desc : 'Desc Obj'}] , (err , nNew)=>{
        if(err){return res.json({err})}
        return res.json({success : nNew});
    })
})

router.get('/update/:id', function (req, res) {
    res.json({success : "news -> " + req.params});
})






module.exports = router;