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
        let data = await db.Products.findByPk(req.params.productId,{include:['Picturesperproduct','CategoryperProduct']})
        let cat1 = await db.Categories.findByPk(data.CategoryperProduct.Subcategory)
        res.render('productdetail',{title:'express',user:req.user,prod:data,cat1})
    },
    searchbarcontent:(req,res,next)=>{
        
    },
    menusubcatcontent: async (req,res,next)=>{
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
        let filter = await db.Categories.findAll({where:{
            Subcategory:categories.Subcategory
        }})
        res.render('subcatcontent',{title:'express',user:req.user,data:categories,filter})
    },
    menugeneralcatcontent: async (req,res,next)=>{
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
    // console.log(categories.length);
    // res.send(categories[0].Produtspercategory[0].Name)
    res.render('gencatcontent',{title:'express',user:req.user,data:categories,filter})
  }
}
