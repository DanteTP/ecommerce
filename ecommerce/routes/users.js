var express = require('express');
const path = require('path');
var router = express.Router();
let userscontroller = require('../controllers/usercontroller')
let uservalidator = require('../middlewares/Validators/usersvalidators')
const multer  = require('multer')
const { check, body, validationResult } = require('express-validator')
let auth = require('../middlewares/others/session/cookie')


//GET
// Carga pantalla login
router.get('/login', auth, userscontroller.loginView );

router.get('/usertest',function(req,res,next){res.render('user',{tittle:'prueba',screen:'home',imageerror:'false'})})

// Carga pantalla register
router.get('/register', userscontroller.registerView);

// POST
// Validación y carga pantalla usuario via login
router.post('/login/user', uservalidator.userlogin, userscontroller.loginuser);

// Validación y carga pantalla usuario via register
router.post('/register/add', uservalidator.usercreator, userscontroller.createuser);

// Edición datos usuario
router.post('/user/edit', uservalidator.useredit, auth, userscontroller.edituser)
// Edición contraseña
router.post('/user/edit/password', uservalidator.passedit,auth, userscontroller.editpass)

// Carga nueva dirección usuario
router.post('/user/address/add', uservalidator.address ,auth, userscontroller.createaddress)

// Modificación direcciones usuario
router.post('/user/address/edit',auth, userscontroller.editaddress)

// Address delete
router.post('/user/address/delete',auth, userscontroller.deleteaddress)



// Carga nueva imagen

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(__dirname, '../public/images'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

  const upload = multer({ storage: storage,
     fileFilter: function (req, file, cb){
        const fileTypes = /jpeg|jpg|png|gif/;
        if(!fileTypes.test(path.extname(file.originalname))){
            req.fileValidationError = 'type'
            cb(null,false,new Error('archivo incorrecto'))
        }else{
            cb(null,true)
        }
    }})



router.post('/user/image', upload.single('userimg'),uservalidator.image,auth, userscontroller.addimage)


module.exports = router;
