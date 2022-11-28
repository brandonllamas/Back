'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    num_ticket: DataTypes.STRING,
    trabajo_group: DataTypes.STRING,
    operator_group: DataTypes.STRING,
    detail_user: DataTypes.INTEGER,
    state:{
      type:DataTypes.INTEGER,
      defaultValue:1,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};