const { Sequelize, DataTypes } = require('sequelize');
const Orders = require('./orders')

module.exports = (sequelize, Sequelize) => {

const PurchaseProducts = sequelize.define('PurchaseProducts', {
  // Model attributes are defined here
  Product_Id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  Quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Order_Id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{timestamps:false}, {
  // Other model options go here
})

PurchaseProducts.associate = (models)=>{
  PurchaseProducts.belongsTo(models.Orders,{
    as:'Ordenesporproducto'
  })
}

return PurchaseProducts
};