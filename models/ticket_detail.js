'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket_detail.init({
    Asunto: DataTypes.STRING,
    Resumen: DataTypes.STRING,
    Organizacion_id: DataTypes.INTEGER,
    Div_Admin: DataTypes.INTEGER,
    Area_Trabajo: DataTypes.INTEGER,
    Categoria: DataTypes.INTEGER,
    SubCategoria: DataTypes.INTEGER,
    Detalle: DataTypes.INTEGER,
    Prioridad: DataTypes.INTEGER,
    state:{
      type:DataTypes.INTEGER,
      defaultValue:1,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Ticket_detail',
  });
  return Ticket_detail;
};