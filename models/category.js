'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING,
    parentId: DataTypes.INTEGER
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};