const { promiseImpl } = require('ejs')
const { check, body, validationResult } = require('express-validator')
let db = require("../../database/models");
const { Op } = db.Sequelize;
const bcrypt = require('bcrypt');


module.exports = {
    usercreator:[
        check('Name')
            .isLength({min:2}).withMessage('Por favor completa tu nombre'),
        check('Surname')
            .isLength({min:2}).withMessage('Por favor completa tu apellido'),
        check('Email')
            .isEmail().withMessage('Dirección de correo electrónico no es válida')
            .custom(async (value)=>{
                let mail = await db.Users.findOne({where:{Email: value}})
                if(mail){
                    throw new Error ('El correo electrónico se encuentra en uso')
                }return true
            }),
        check('Password')
            .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }).withMessage('La contraseña debe contener al menos 1 mayúscula + 1 minúscula + 1 número'),
        check('RPassword')
            .custom((value,{req}) => {
                if(value !== req.body.Password){
                    throw new Error('La contraseña no coincide')
                }
                return true
            })],
    userlogin:[
        check('Email')
            .custom(async (value)=>{
                let mail = await db.Users.findOne({where:{Email: value}})
                if(!mail){
                    throw new Error ('Por favor introduce una dirección de correo válida')
                }return true
            }),
        check('Password')
        .custom(async (value,{req})=>{
            let user = await db.Users.findOne({where:{Email: req.body.Email}})
            if(!bcrypt.compareSync(value,user.Password)){
                throw new Error ('Contraseña incorrecta')
            }return true
        })
    ],
    useredit:[
        check('Name')
            .isLength({min:2}).withMessage('Por favor completa tu nombre'),
        check('Surname')
            .isLength({min:2}).withMessage('Por favor completa tu apellido'),
        check('Email')
            .isEmail().withMessage('Dirección de correo electrónico no es válida')
    ],
    passedit:[
        check('Password')
        .custom(async (value,{req})=>{
            let user = await db.Users.findOne({where:{id: req.body.Id}})
            if(!bcrypt.compareSync(value,user.Password)){
                throw new Error ('Contraseña incorrecta')
            }return true
        }),
        check('NPassword')
            .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }).withMessage('La contraseña debe contener al menos 1 mayúscula + 1 minúscula + 1 número')
            .custom(async (value,{req})=>{
                if(value == req.body.Password){
                    throw new Error('La contraseña nueva no puede ser igual a la anterior')
                }
                return true
            }),
        check('RNPassword')
            .custom((value,{req}) => {
                if(value !== req.body.NPassword){
                    throw new Error('Las contraseñas no coinciden')
                }
                return true
            })
    ],
    address:[
        check('Adress')
            .isLength({min:2}).withMessage('Por favor Introduce tu dirección'),
        check('Province')
            .isLength({min:2}).withMessage('Por favor selecciona una provincia'),
        check('City')
            .isLength({min:2}).withMessage('Por favor selecciona una ciudad'),
        check('Zip_Code')
            .isInt().withMessage('Por favor introduce un código postal válido')
    ],
    image:[
        check('userimg').custom((value, { req }) => {
            if (req.fileValidationError) {
              throw new Error('La imagen debe ser de tipo JPG, JPEG, PNG, GIF');
            }
            return true;
        })
    ]
}