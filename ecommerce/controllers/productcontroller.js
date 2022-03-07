let db = require("../database/models");
const { Op } = db.Sequelize;
const multer  = require('multer')
const fs = require('fs')
const path = require('path');
const sharp = require('sharp');


module.exports = {
    home:(req,res,next)=>{
        
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
          gencat.push(subcategory)
          data.push(dato)
      }
          res.render('searchbarcontent',{title:'express',user:req.user,data:data,formatNumber:formatNumber,gencat,search})
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
