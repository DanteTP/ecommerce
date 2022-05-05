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
            include:[
              {
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
})},
searchbar:async(req,res,next) =>{
  let data = []
  let products = await db.Products.findAll({where:{Name:{[Op.like]: `%${req.params.searchvalue}%`}},include:['Picturesperproduct','CategoryperProduct']})
  let categories = await db.Categories.findAll()
res.json({
  meta:{
      status: 200,
      totalItems: categories.length,
      link: 'api/product/gencatsearch/:generalcategoryId'
  },
  data: {products,
  categories: categories}})
},
cartadd:async(req,res,next)=>{
  let prod = await db.Products.findByPk(req.params.ProdId,{include:['Picturesperproduct','CategoryperProduct']})
  console.log(prod);
  let datap = {
    id:prod.id,
    Name: prod.Name,
    Price: prod.Price,
    Stock: prod.Stock,
    Category: prod.CategoryperProduct.id,
    Img: prod.Picturesperproduct
  }
  res.json({
    meta:{
        status: 200,
        link: 'api/product/gencatsearch/:generalcategoryId'
    },
    data: datap
  })
},
cartproductreview: async(req,res,next)=>{

  let purchase = []
  for(let prod of req.body.order){
    let cartprod = await db.Products.findByPk(prod.id)
    cartprod = {cartprod,qty:prod.qty,subtotal:Number(cartprod.Price*prod.qty)}
    purchase.push(cartprod)
  }

  let total = purchase.reduce((acc,val)=>{return acc + val.subtotal},0)
  // let order = await db.Orders.create(data)
  let dato = {
    Amount:total,
    Date:Date(),
    User_Id: req.body.id,
    Order_status:"Pago pendiente"
  }

  let order= await db.Orders.create(dato)
  for(let prod of purchase){
    let dato = {
      Product_Id:prod.cartprod.id,
      Quantity:prod.qty,
      Order_Id:order.id
    }
  let orderproducts= await db.PurchaseProducts.create(dato)
  }

  res.json(order.id)
}
}