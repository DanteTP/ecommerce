const { Sequelize, DataTypes } = require('sequelize');
const Users = require('./users')

module.exports = (sequelize, DataTypes) => {

const Adresses = sequelize.define('Adresses', {
  // Model attributes are defined here
  Adress: {
    type: DataTypes.STRING,
    allowNull: false
  },
  City: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Province: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Zip_Code: {
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

Adresses.associate = function(models){
Adresses.belongsTo(models.Users,{
    as:"usuariopordireccion",
    foreignKey:"User_Id"
})}

return Adresses
};

