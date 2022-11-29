'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Param extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Param.hasMany(models.Value_param,{
        foreignKey:'Param_id'
      })
    }
  }
  Param.init({
    Name: DataTypes.STRING,
    Descripcion: DataTypes.STRING,
    State:{
      type:DataTypes.INTEGER,
      defaultValue:1,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Param',
  });
  return Param;
};