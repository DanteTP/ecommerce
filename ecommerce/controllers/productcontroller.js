let db = require("../database/models");
const { Op } = db.Sequelize;
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const multer  = require('multer')
const fs = require('fs')
const path = require('path');
var cookieParser = require('cookie-parser')
const session = require('express-session');
const sharp = require('sharp');


module.exports = {
    home:(req,res,next)=>{
        
    },
    proddetail:async (req,res,next)=>{
      function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
        let data = await db.Products.findByPk(req.params.productId,{include:['Picturesperproduct','CategoryperProduct']})
        let cat1 = await db.Categories.findByPk(data.CategoryperProduct.Subcategory)
        res.render('productdetail',{title:'express',user:req.user,prod:data,cat1,formatNumber:formatNumber})
    },
    searchbarcontent:(req,res,next)=>{
        
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
        console.log(categories)
        let filter = await db.Categories.findByPk(categories.Subcategory)
        console.log(filter);
        res.render('subcatcontent',{title:'express',user:req.user,data:categories,filter,formatNumber:formatNumber})
    },
    menugeneralcatcontent: async (req,res,next)=>{
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
    let cat = await db.Categories.findByPk(req.params.generalcategoryId)
    res.render('gencatcontent',{title:'express',user:req.user,data:categories,filter,formatNumber:formatNumber,cat:cat.Name})
  }
}
