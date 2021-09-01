var express = require('express');
var router = express.Router();

router.get('/detail', function(req, res, next) {
  res.render('productdetail', { title: 'Express' });
})

router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'Express' });
})

module.exports = router;
