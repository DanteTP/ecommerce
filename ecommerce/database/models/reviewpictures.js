const { Sequelize, DataTypes } = require('sequelize');
let Reviews = require('./reviews')


module.exports = (sequelize, Sequelize) => {

const ReviewPictures = sequelize.define('ReviewPictures', {
  // Model attributes are defined here
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Review_Id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{timestamps:false}, {
  // Other model options go here
})

ReviewPictures.associate = (models)=>{
  ReviewPictures.belongsTo(models.Reviews,{
    as:'reviewporfoto'
  })
}
return ReviewPictures
};