const { Sequelize, DataTypes } = require('sequelize');
const Products = require('./products')

module.exports = (sequelize, Sequelize) => {

const Categories = sequelize.define('Categories', {
  // Model attributes are defined here
  Name:{
      type:DataTypes.STRING,
      allowNull:false
  },
  Subcategory:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{timestamps:false}, {
  // Other model options go here
})

Categories.associate = (models)=>{
  Categories.hasMany(models.Products,{
    as:"Produtspercategory",
    foreignKey:'Category_Id'
  })
}


return Categories
};