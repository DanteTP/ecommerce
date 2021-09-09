var express = require('express');
var router = express.Router();

//GET

// Carga pantalla login
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' })
});

// Carga pantalla register
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' })
});

// Carga pantalla usuario via cookies
router.get('/user', function(req, res, next) {
  res.render('user', { title: 'Express' })
});


// POST
// Validación y carga pantalla usuario via login

// Validación y carga pantalla usuario via register

// Validación y carga carrito via login

// Registro y carga de carrito via register

module.exports = router;
