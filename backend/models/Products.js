

module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products", {
      productName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      productPrice: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      productQuantity: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      productImageURL: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
      
    },);

    return Products;

  };