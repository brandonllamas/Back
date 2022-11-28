'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Detail_User.init({
    Direccion: DataTypes.STRING,
    Telefono: DataTypes.STRING,
    Celular: DataTypes.STRING,
    Id_Area: DataTypes.INTEGER,
    User_Id: DataTypes.INTEGER,
    state:{
      type:DataTypes.INTEGER,
      defaultValue:1,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Detail_User',
  });
  return Detail_User;
};