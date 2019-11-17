const express = require('express');
var router = express.Router();

router.get('/new', function (req, res) {
  res.json({success : 'user -> new'});
})
router.get('/update/:id', function (req, res) {
    res.json({success : "user -> " + req.params});
})

module.exports = router;