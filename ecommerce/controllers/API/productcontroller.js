let db = require("../../database/models");
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
menucatcontent: async (req,res,next)=>{
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
  res.json({
            meta:{
                status: 200,
                totalItems: categories.length,
                link: '/api/product/search/:categoryId'
            },
            data: categories
        })
      
},
menugeneralcatcontent: async (req,res,next)=>{
  let dataf = []
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

for(let category of categories){
  for(let product of category.Produtspercategory){
    dataf.push(product)
  }
}
res.json({
  meta:{
      status: 200,
      totalItems: categories.length,
      link: 'api/product/gencatsearch/:generalcategoryId'
  },
  data: dataf
})

}


}