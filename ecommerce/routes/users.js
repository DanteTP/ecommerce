var express = require('express');
var router = express.Router();
let userscontroller = require('../controllers/usercontroller')
let uservalidator = require('../middlewares/Validators/usersvalidators')
//GET

// Carga pantalla login
router.get('/login', userscontroller.loginView );

router.get('/usertest',function(req,res,next){res.render('user',{tittle:'prueba',screen:'home'})})

// Carga pantalla register
router.get('/register', userscontroller.registerView);


// Carga pantalla usuario via cookies
// router.get('/user', function(req, res, next) {
//   res.render('user', { title: 'Express' })
// });


// POST
// Validación y carga pantalla usuario via login
router.post('/login/user', uservalidator.userlogin, userscontroller.loginuser);

// Validación y carga pantalla usuario via register
router.post('/register/add', uservalidator.usercreator, userscontroller.createuser);

// Edición datos usuario
router.post('/user/edit', uservalidator.useredit, userscontroller.edituser)
// Edición contraseña
router.post('/user/edit/password', uservalidator.passedit, userscontroller.editpass)

// Carga nueva dirección usuario
router.post('/user/address/add', userscontroller.createaddress)

// Modificación direcciones usuario
router.post('/user/address/edit', userscontroller.editaddress)

// Address delete
router.post('/user/address/delete', userscontroller.deleteaddress)


// Carga nueva imagen


// Modificación imagen


module.exports = router;
