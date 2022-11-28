'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Value_param extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Value_param.init({
    Valor: DataTypes.STRING,
    Descripcion: DataTypes.STRING,
    Valor_aux: DataTypes.STRING,
    param_father: DataTypes.INTEGER,
    Param_id: DataTypes.INTEGER,
    state:{
      type:DataTypes.INTEGER,
      defaultValue:1,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Value_param',
  });
  return Value_param;
};