const { Sequelize, DataTypes } = require('sequelize');
const Adresses = require('./adresses')
let Reviews = require('./reviews')

module.exports = (sequelize, DataTypes) => {

const Users = sequelize.define('Users', {
  // Model attributes are defined here
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Surname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Admin: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{timestamps:false}, {
  // Other model options go here
})

Users.associate = function(models){
Users.hasMany(models.Adresses,{
  as:"direccionesusuario",
  foreignKey:"User_Id"
}),

Users.hasMany(models.Orders,{
  as:"ordenesporusuario",
  foreignKey:"User_Id"
}),
Users.hasMany(models.Reviews,{
  as:"reviewsporusuario",
  foreignKey:"User_Id"
}),
Users.hasOne(models.Userimages,{
  as:"imagenusuario",
  foreignKey:"User_Id"
})
}

return Users
};


