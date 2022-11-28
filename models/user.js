'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    Nombre: DataTypes.STRING,
    Apellido: DataTypes.STRING,
    Email: {
      type:DataTypes.STRING,
      unique: true,
      allowNull:false
    },
    Password:DataTypes.STRING,
    state:{
      type:DataTypes.INTEGER,
      defaultValue:1,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};