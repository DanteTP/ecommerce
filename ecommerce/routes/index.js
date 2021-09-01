var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.get('/detail', function(req, res, next) {
  res.render('productdetail', { title: 'Express' });
})

router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'Express' });
})

module.exports = router;
