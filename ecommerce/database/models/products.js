const { Sequelize, DataTypes } = require('sequelize');
let Reviews=require('./reviews')
let PurchaseProducts=require('./purchaseproducts')
const Pictures = require('./pictures')

module.exports = (sequelize, Sequelize) => {

const Products = sequelize.define('Products', {
  // Model attributes are defined here
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Admin: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{timestamps:false}, {
  // Other model options go here
})

Products.associate = (models)=>{
  Products.hasMany(models.Reviews,{
    foreignKey:'Product_Id',
    as:"Reviewporproducto"
  }),
  Products.hasMany(models.PurchaseProducts,{
    as:"ProductsperPurchas",
    foreignKey:"Product_Id"
  }),
  Products.hasMany(models.Pictures,{
    as:'Picturesperproduct',
    foreignKey:'Product_Id'
  })
}
return Products
};
