let db = require("../database/models");
const { Op } = db.Sequelize;
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');


module.exports = {
    // Get routes
    loginView :  (req,res,next) =>{
        res.render('login', { title: 'Express',errors:'false',data:''})
    },
    registerView :  (req,res,next) =>{
        res.render('register', { title: 'Express',errors:'false',data:'false'})
    },
    // POST routes
    createuser : async (req,res,next) =>{
        let data = {
            Name:req.body.Name,
            Surname: req.body.Surname,
            Email: req.body.Email
        }
        let errors = validationResult(req)
        if(!errors.isEmpty()){
            res.render('register',{title:'express',errors:errors.errors,data:data})        
        }else{
        let newuser = {
            Name: req.body.Name,
            Surname: req.body.Surname,
            Email: req.body.Email,
            Password: bcrypt.hashSync(req.body.Password,10),
            Admin: "False"
        }
        let user = await db.Users.create(newuser)

        res.render('user',{title:'express',user:user,errors:'false',screen:'home'})
    }},
    loginuser: async (req,res,next) =>{
        let errors = validationResult(req)
        if(!errors.isEmpty()){
            res.render('login',{title:'express',errors:errors.errors,data:req.body.Email})    
    }
    let userlog = await db.Users.findOne({where:{Email: req.body.Email}})
    let user = await db.Users.findByPk(userlog.id, {include:['direccionesusuario']})
    res.render('user',{title:'express',user:user,errors:'false',screen:'home',usererrors:'false',passerrors:'false'})
    },
    edituser: async (req,res,next) =>{
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        let user = await db.Users.findOne({where:{id: req.body.Id}})
        res.render('user',{title:'express',user:user,usererrors:errors.errors,screen:'editerror',passerrors:'false'})        
    }else{
    let update = await db.Users.update({
        Name: req.body.Name,
        Surname: req.body.Surname,
        Email: req.body.Email
    },{where:{id:req.body.Id}})
    let user = await db.Users.findOne({where:{id: req.body.Id}})
    res.render('user',{title:'express',user:user,screen:'editsuccess',usererrors:'false',passerrors:'false'})
    }},
    editpass: async (req,res,next) =>{
        let errors = validationResult(req)
        if(!errors.isEmpty()){
            let user = await db.Users.findOne({where:{id: req.body.Id}})
            res.render('user',{title:'express',user:user,passerrors:errors.errors,screen:'passerror',usererrors:'false'})        
        }else{
        let update = await db.Users.update({
            Password:bcrypt.hashSync(req.body.NPassword,10)
        },{where:{id:req.body.Id}})
        let user = await db.Users.findOne({where:{id: req.body.Id}})
        res.render('user',{title:'express',user:user,screen:'passsuccess',usererrors:'false',passerrors:'false'})
        }},
    createaddress: async (req,res,next)=>{
            let data = {
                Adress:req.body.Adress,
                City:req.body.City,
                Province:req.body.Province,
                Zip_Code:req.body.Zip_Code,
                User_Id:req.body.User_Id
            }
            let address = await db.Adresses.create(data)
            let user = await db.Users.findByPk(req.body.User_Id, {include:['direccionesusuario']})
            res.render('user',{title:'express',user:user,screen:'addsuccess',usererrors:'false',passerrors:'false'})
    },
    editaddress: async(req,res,next)=>{
        let Aid = req.body.Address_Id
        let update = await db.Adresses.update({
            Adress:req.body.Adress,
            City:req.body.City,
            Province:req.body.Province,
            Zip_Code:req.body.Zip_Code,
            User_Id:req.body.User_Id
        },{where:{id:Aid}})
        let user = await db.Users.findByPk(req.body.User_Id, {include:['direccionesusuario']})
        res.render('user',{title:'express',user:user,screen:'editaddresssucc',usererrors:'false',passerrors:'false'})
    },
    deleteaddress: async(req,res,next)=>{
        await db.Adresses.destroy({where: {id: req.body.deleteaId}})
        let user = await db.Users.findByPk(req.body.userid, {include:['direccionesusuario']})
        res.render('user',{title:'express',user:user,screen:'editaddresssucc',usererrors:'false',passerrors:'false'})
    }
}