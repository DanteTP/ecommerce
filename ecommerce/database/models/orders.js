const { Sequelize, DataTypes } = require('sequelize');
const Users = require('./users')
const PurchaseProducts = require('./purchaseproducts')

module.exports = (sequelize, Sequelize) => {

const Orders = sequelize.define('Orders', {
  // Model attributes are defined here
  Amount:{
      type:DataTypes.DECIMAL,
      allowNull:false
  },
  Date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  User_Id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Order_status:{
    type: DataTypes.STRING,
    allowNull: false
  }
},{timestamps:false}, {
  // Other model options go here
})


Orders.associate = function(models){
Orders.belongsTo(models.Users,{
    as:"Usuariopororden",
    foreignKey:'User_Id'
}),
Orders.hasMany(models.PurchaseProducts,{
  as:'productsperorder',
  foreignKey:'Order_Id'
})}

return Orders

};

