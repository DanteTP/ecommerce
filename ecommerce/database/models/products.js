const { Sequelize, DataTypes } = require('sequelize');
let Reviews=require('./reviews')
let PurchaseProducts=require('./purchaseproducts')
const Pictures = require('./pictures')
const Categories = require('./categories')

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
  Price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  Discount: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  Offer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Category_Id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Stock: {
    type: DataTypes.INTEGER,
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
  Products.hasMany(models.Pictures,{
    as:'Picturesperproduct',
    foreignKey:'Product_Id'
  }),
  Products.belongsTo(models.Categories,{
    as:"CategoryperProduct",
    foreignKey:'Category_Id'
  })
}
return Products
};
