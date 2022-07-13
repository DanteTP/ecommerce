let db = require("../../database/models");
const { Op } = db.Sequelize;
const { validationResult } = require('express-validator');
const multer  = require('multer')
const fs = require('fs')
const path = require('path');
var cookieParser = require('cookie-parser')
const session = require('express-session');
const sharp = require('sharp');
require('dotenv').config()
const paypal = require('../../middlewares/others/paypal')
const fetch = require('node-fetch')



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
  console.log('aca');
  let purchase = []
  for(let prod of req.body.order){
    let cartprod = await db.Products.findByPk(prod.id)
    cartprod = {cartprod,qty:prod.qty,subtotal:Number(cartprod.Price*prod.qty)}
    purchase.push(cartprod)
  }
  let total = purchase.reduce((acc,val)=>{return acc + val.subtotal},0)
  
  let paypalprod = purchase.map(item =>
    {
      return {
        name:item.cartprod.Name,
        unit_amount:{
          currency_code:'USD',
          value:item.cartprod.Price
        },
        quantity:item.qty
      }
    })

  
    let shipping = {
      address: {
      address_line_1: req.body.address.Adress,
      admin_area_2:req.body.address.City,
      admin_area_1: req.body.address.Province,
      postal_code: req.body.address.Zip_Code,
      country_code: "AR"
    }}

  const paypalorder = await paypal.createOrder(total,paypalprod,shipping)

  let orderdata = {
    Amount:total,
    Date:Date(),
    User_Id: req.body.id,
    Order_status:"Pago pendiente",
    Paypal_Id:paypalorder.id
  }

  let orderdb= await db.Orders.create(orderdata)
  
  for(let prod of purchase){
    let purchaseprods = {
      Product_Id:prod.cartprod.id,
      Name:prod.cartprod.Name,
      Price:prod.cartprod.Price,
      Quantity:prod.qty,
      Order_Id:orderdb.id
    }
  let orderproducts= await db.PurchaseProducts.create(purchaseprods)
  }
  let address = {
    Address:req.body.address.Adress,
    Zip_Code:req.body.address.Zip_Code,
    Province:req.body.address.Province,
    City:req.body.address.City,
    Order_Id:orderdb.id
  }

  let orderaddress= await db.PurchaseAddresses.create(address)

  
  



  res.json(paypalorder)

  },
  paypalcapture: async (req,res,next)=>{
    const orderID = req.params.OrderId
    const captureData = await paypal.capturePayment(orderID)
    console.log(captureData.status);
    if(captureData.status == "COMPLETED"){
      let updateorder = await db.Orders.update({
        Order_status:"Pago completado"
    },{where:{Paypal_Id:orderID}})
    }else if(captureData.status=="VOIDED"){
      let deleteorder = await db.Orders.destroy({where:{Paypal_Id:orderID}})
    }
    res.json(captureData);;
  }
}