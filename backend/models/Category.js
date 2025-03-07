

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
      categoryName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      categoryImage: {
        type: DataTypes.STRING,
        allowNull: true
      }
      
      
    },);

    return Category;

  };