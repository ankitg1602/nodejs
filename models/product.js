const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Claim = sequelize.define('claim', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  expense_details: Sequelize.STRING,
  bill_available: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

module.exports = Claim