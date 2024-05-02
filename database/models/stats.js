'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stats extends Model {
    static associate(models) {
      Stats.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }

  Stats.init({
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Stats',
  });

  return Stats;
};
