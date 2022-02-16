const { Sequelize, DataTypes } = require('sequelize');
const Users = require('./users')

module.exports = (sequelize, DataTypes) => {

const Userimages = sequelize.define('Userimages', {
  // Model attributes are defined here
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  User_Id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{timestamps:false}, {
  // Other model options go here
})

Userimages.associate = function(models){
Userimages.belongsTo(models.Users,{
    as:"imagenesporusuario",
    foreignKey:"User_Id"
})}

return Userimages
};
