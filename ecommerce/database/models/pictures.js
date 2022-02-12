const { Sequelize, DataTypes } = require('sequelize');
const Products = require('./products')

module.exports = (sequelize, Sequelize) => {

const Pictures = sequelize.define('Pictures', {
  // Model attributes are defined here
  Name:{
      type:DataTypes.STRING,
      allowNull:false
  },
  Product_Id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{timestamps:false}, {
  // Other model options go here
})

Pictures.associate=(models)=>{
  Pictures.belongsTo(models.Products,{
    as:"productperpicture"
  })
}

return Pictures
};