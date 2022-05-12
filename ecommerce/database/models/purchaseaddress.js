const { Sequelize, DataTypes } = require('sequelize');
const Orders = require('./orders')
const Products = require('./products')

module.exports = (sequelize, Sequelize) => {

const PurchaseAddress = sequelize.define('PurchaseAddress', {
  // Model attributes are defined here
  Address: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Zip_Code: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Province: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  City: {
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

PurchaseAddress.associate = (models)=>{
  PurchaseProducts.belongsTo(models.Orders,{
    as:'Ordenesporaddress',
    foreignKey:"Order_Id"
  })
}

return PurchaseProducts
};