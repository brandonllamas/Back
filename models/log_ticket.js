'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Log_ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Log_ticket.init({
    Comentario: DataTypes.STRING,
    file: DataTypes.STRING,
    User_asing: DataTypes.INTEGER,
    User_to_asing: DataTypes.INTEGER,
    Ticket_id: DataTypes.INTEGER,
    state:{
      type:DataTypes.INTEGER,
      defaultValue:1,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Log_ticket',
  });
  return Log_ticket;
};