const { Sequelize, DataTypes } = require('sequelize');
let Users = require('./users')
let Products = require ('./products')
let ReviewPictures = require('./reviewpictures')

module.exports = (sequelize, Sequelize) => {

const Reviews = sequelize.define('Reviews', {
  // Model attributes are defined here
  Tittle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Stars: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  Product_Id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  User_Id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{timestamps:false}, {
  // Other model options go here
})

Reviews.associate= (models)=>{
  Reviews.belongsTo(models.Users ,{
    as:'Usuarioporreview'
  }),
  Reviews.belongsTo(models.Products ,{
    as:'Productosporreview'
  }),
  Reviews.hasMany(models.ReviewPictures,{
    as:'picturesforreview',
    foreignKey:'Review_Id'
  })
}

return Reviews
};