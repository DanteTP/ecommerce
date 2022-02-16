let db = require("../database/models");
const { Op } = db.Sequelize;
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const multer  = require('multer')
const fs = require('fs')
const path = require('path');


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
        let nuser = await db.Users.create(newuser)
        let user = await db.Users.findByPk(userlog.id, {include:['direccionesusuario','imagenusuario']})
        res.render('user',{title:'express',user:user,errors:'false',screen:'home',usererrors:'false',passerrors:'false',addresserror:'false',data:'false',imageerror:'false'})
    }},
    loginuser: async (req,res,next) =>{
        let errors = validationResult(req)
        if(!errors.isEmpty()){
            res.render('login',{title:'express',errors:errors.errors,data:req.body.Email})    
    }
    let userlog = await db.Users.findOne({where:{Email: req.body.Email}})
    let user = await db.Users.findByPk(userlog.id, {include:['direccionesusuario','imagenusuario']})
    res.render('user',{title:'express',user:user,errors:'false',screen:'home',usererrors:'false',passerrors:'false',addresserror:'false',data:'false',imageerror:'false'})
    },
    edituser: async (req,res,next) =>{
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        let user = await db.Users.findByPk(req.body.Id, {include:['direccionesusuario','imagenusuario']})
        res.render('user',{title:'express',user:user,usererrors:errors.errors,screen:'editerror',passerrors:'false',addresserror:'false',data:'false',imageerror:'false'})        
    }else{
    let update = await db.Users.update({
        Name: req.body.Name,
        Surname: req.body.Surname,
        Email: req.body.Email
    },{where:{id:req.body.Id}})
    let user = await db.Users.findByPk(req.body.Id, {include:['direccionesusuario','imagenusuario']})
    res.render('user',{title:'express',user:user,screen:'editsuccess',usererrors:'false',passerrors:'false',addresserror:'false',data:'false',imageerror:'false'})
    }},
    editpass: async (req,res,next) =>{
        let errors = validationResult(req)
        if(!errors.isEmpty()){
            let user = await db.Users.findByPk(req.body.Id, {include:['direccionesusuario','imagenusuario']})
            res.render('user',{title:'express',user:user,passerrors:errors.errors,screen:'passerror',usererrors:'false',addresserror:'false',data:'false',imageerror:'false'})        
        }else{
        let update = await db.Users.update({
            Password:bcrypt.hashSync(req.body.NPassword,10)
        },{where:{id:req.body.Id}})
        let user = await db.Users.findByPk(req.body.Id, {include:['direccionesusuario','imagenusuario']})
        res.render('user',{title:'express',user:user,screen:'passsuccess',usererrors:'false',passerrors:'false',addresserror:'false',data:'false',imageerror:'false'})
        }},
    createaddress: async (req,res,next)=>{
        let data = {
            Adress:req.body.Adress,
            Province: req.body.Province,
            City: req.body.City,
            Zip_Code: req.body.Zip_Code,
        }
        let errors = validationResult(req)
        if(!errors.isEmpty()){ 
            let user = await db.Users.findByPk(req.body.User_Id, {include:['direccionesusuario','imagenusuario']})
            res.render('user',{title:'express',user:user,screen:'adderror',usererrors:'false',passerrors:'false',addresserror:errors.errors,data:data,imageerror:'false'})
        }else{
            let data = {
                Adress:req.body.Adress,
                City:req.body.City,
                Province:req.body.Province,
                Zip_Code:req.body.Zip_Code,
                User_Id:req.body.User_Id
            }
            let address = await db.Adresses.create(data)
            let user = await db.Users.findByPk(req.body.User_Id, {include:['direccionesusuario','imagenusuario']})
            res.render('user',{title:'express',user:user,screen:'addsuccess',usererrors:'false',passerrors:'false',addresserror:'false',data:'false',imageerror:'false'})
    }},
    editaddress: async(req,res,next)=>{
        let Aid = req.body.Address_Id
        let update = await db.Adresses.update({
            Adress:req.body.Adress,
            City:req.body.City,
            Province:req.body.Province,
            Zip_Code:req.body.Zip_Code,
            User_Id:req.body.User_Id
        },{where:{id:Aid}})
        let user = await db.Users.findByPk(req.body.User_Id, {include:['direccionesusuario','imagenusuario']})
        res.render('user',{title:'express',user:user,screen:'editaddresssucc',usererrors:'false',passerrors:'false',addresserror:'false',data:'false',imageerror:'false'})
    },
    deleteaddress: async(req,res,next)=>{
        await db.Adresses.destroy({where: {id: req.body.deleteaId}})
        let user = await db.Users.findByPk(req.body.userid, {include:['direccionesusuario','imagenusuario']})
        res.render('user',{title:'express',user:user,screen:'editaddresssucc',usererrors:'false',passerrors:'false',addresserror:'false',data:'false',imageerror:'false'})
    },
    addimage: async (req,res,next) =>{
        let errors = validationResult(req)
        if(!errors.isEmpty()){
        let user = await db.Users.findByPk(req.body.User_Id, {include:['direccionesusuario','imagenusuario']})
        res.render('user',{title:'express',user:user,errors:'false',screen:'home',usererrors:'false',passerrors:'false',addresserror:'false',data:'false',imageerror:errors.errors})    
    }else{
        let previmg = await db.Userimages.findOne({where:{User_Id:req.body.User_Id}})
        if (previmg){
                fs.rm(path.join(__dirname,'../public/images/',previmg.dataValues.Name),(err) => {
                    if(err){
                        // File deletion failed
                        console.error(err.message);
                        return;
                    }
                    console.log("File deleted successfully")})
            
            }            
            if (previmg){
                let image = await db.Userimages.update({
                Name:req.file.filename},{where:{id:previmg.dataValues.id}})
                let user = await db.Users.findByPk(req.body.User_Id, {include:['direccionesusuario','imagenusuario']})
                res.render('user',{title:'express',user:user,errors:'false',screen:'home',usererrors:'false',passerrors:'false',addresserror:'false',data:'false',imageerror:'false'})    
            }else{
            let data = {
                    Name:req.file.filename,
                    User_Id:req.body.User_Id
                }
            let image = await db.Userimages.create(data)
            let user = await db.Users.findByPk(req.body.User_Id, {include:['direccionesusuario','imagenusuario']})
            res.render('user',{title:'express',user:user,errors:'false',screen:'home',usererrors:'false',passerrors:'false',addresserror:'false',data:'false',imageerror:'false'})
            }
        }
    }
}