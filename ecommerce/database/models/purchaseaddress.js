const { Sequelize, DataTypes } = require('sequelize');
const Orders = require('./orders')

module.exports = (sequelize, Sequelize) => {

const PurchaseAddresses = sequelize.define('PurchaseAddresses', {
  // Model attributes are defined here
  Address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Zip_Code: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Province: {
    type: DataTypes.STRING,
    allowNull: false
  },
  City: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Order_Id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{timestamps:false}, {
  // Other model options go here
})

PurchaseAddresses.associate = (models)=>{
  PurchaseAddresses.belongsTo(models.Orders,{
    as:'Ordenesporaddress',
    foreignKey:"Order_Id"
  })
}

return PurchaseAddresses
};