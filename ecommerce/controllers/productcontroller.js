let db = require("../database/models");
const { Op } = db.Sequelize;
const multer  = require('multer')
const fs = require('fs')
const path = require('path');
const sharp = require('sharp');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var cookieParser = require('cookie-parser')
const session = require('express-session');

module.exports = {
      home: async(req,res,next)=>{
        function formatNumber(num) {
          return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
        let products = await db.Products.findAll({where:{Offer:'true'}, order:[['Discount','DESC']],limit: 4,include:['Picturesperproduct']})
        res.render('index',{title:'express',user:req.user,products,formatNumber})
      },
    cartview:async(req,res,next)=>{
      res.render('cart',{title:'express',user:req.user})
    },
    proddetail:async (req,res,next)=>{
      function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
        let data = await db.Products.findByPk(req.params.productId,{include:['Picturesperproduct','CategoryperProduct']})
        let cat1 = await db.Categories.findByPk(data.CategoryperProduct.Subcategory)
        res.render('productdetail',{title:'express',user:req.user,prod:data,cat1,formatNumber:formatNumber})
    },
    searchbarcontent:async (req,res,next)=>{
      function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      } 
        let search = req.query.searchvalue
        let gencat = []
        let data = []
        let products = await db.Products.findAll({where:{Name:{[Op.like]: `%${req.query.searchvalue}%`}},include:['Picturesperproduct','CategoryperProduct']})
        let categories = await db.Categories.findAll()
        for(let product of products){
          let subcategory = await db.Categories.findOne({where:{id:product.CategoryperProduct.Subcategory}})
          let dato ={
            product,
            subcategory
          }
        if(gencat.length=0){
          gencat.push(subcategory)
        }else if(gencat.findIndex(item=>item.id==subcategory.id)<0){
          gencat.push(subcategory)
        }
          data.push(dato)
      }
        let max = products.reduce((acc,val)=>{
          return acc>val.Price?acc:acc=val.Price
        },0)
        console.log(max);
          res.render('searchbarcontent',{title:'express',user:req.user,data:data,formatNumber:formatNumber,gencat,search,max})
      },
    menusubcatcontent: async (req,res,next)=>{
      function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
      let categories = await db.Categories.findByPk(req.params.categoryId,{
                include:[{
                  model: db.Products,
                  as: 'Produtspercategory',
                  include:[{
                    model:db.Pictures,
                    as:'Picturesperproduct'
                  }]
                }]
              })
        let max = categories.Produtspercategory.reduce((acc,val)=>{
          return acc>val.Price?acc:acc=val.Price
        },0)
        let filter = await db.Categories.findByPk(categories.Subcategory)
        res.render('subcatcontent',{title:'express',user:req.user,data:categories,filter,formatNumber:formatNumber,max})
    },
    menugeneralcatcontent: async (req,res,next)=>{
      let max = ''
      function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
      let categories = await db.Categories.findAll({where:
        {Subcategory:req.params.generalcategoryId},
        include:[{
          model: db.Products,
          as: 'Produtspercategory',
          include:[{
            model:db.Pictures,
            as:'Picturesperproduct'
          }]
        }]
      })
    let filter = await db.Categories.findAll({where:{
        Subcategory:req.params.generalcategoryId
    }})
    for(let category of categories){
      let nmax = category.Produtspercategory.reduce((acc,val)=>{
        return acc>val.Price?acc:acc=val.Price
      },0)
      nmax>max?max=nmax:max=max
    }
    let cat = await db.Categories.findByPk(req.params.generalcategoryId)
    res.render('gencatcontent',{title:'express',user:req.user,data:categories,filter,formatNumber:formatNumber,cat:cat.Name,max})
  },
  cartlogin: (req,res,next)=>{
    if(req.user!==''){
      res.render('checkout',{title:'express',user:req.user,errors:'false',screen:'home',usererrors:'false',passerrors:'false',addresserror:'false',data:'false',imageerror:'false'})
  } else
      res.render('login', { title: 'Express',errors:'false',data:'',user:'',route:'cartcheckout'})
  },
  carcheckoutscreen: async (req,res,next) =>{
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        res.render('login',{title:'express',errors:errors.errors,data:req.body.Email})    
    } else {
    if(req.body.cookie){ 
        let user = await db.Users.findOne({where:{Email: req.body.Email},include:['direccionesusuario','imagenusuario']})
        user.Password=''
        res.cookie('Usercookie',user,{maxAge:1000*60*60*24*30})
        res.render('checkout',{title:'express',user:user,errors:'false',screen:'home',usererrors:'false',passerrors:'false',addresserror:'false',data:'false',imageerror:'false'})
    }else{
        let user = await db.Users.findOne({where:{Email: req.body.Email},include:['direccionesusuario','imagenusuario']})
        user.Password=''
        req.session.Userdata = user;
        res.render('checkout',{title:'express',user:user,errors:'false',screen:'home',usererrors:'false',passerrors:'false',addresserror:'false',data:'false',imageerror:'false'})
    }}
    },
    registercheckoutview :  (req,res,next) =>{
      res.render('register', { title: 'Express',errors:'false',data:'false',user:'',route:'cart',route:'cart'})
    },
    registercheckoutscreen : async (req,res,next) =>{
      let errors = validationResult(req)
      if(!errors.isEmpty()){
          res.render('register',{title:'express',errors:errors.errors,data:req.body,user:'',route:'cart'})        
      }else{
      req.body.Password=bcrypt.hashSync(req.body.Password,10)
      let nuser = await db.Users.create(req.body)
      let user = await db.Users.findByPk(nuser.id, {include:['direccionesusuario','imagenusuario']})
      req.session.Userdata = user
      res.render('checkout',{title:'express',user:user,errors:'false',screen:'home',usererrors:'false',passerrors:'false',addresserror:'false',data:'false',imageerror:'false'})
  }}
}
