

module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
      
      productQuantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }
      
      
    },);

    return Cart;

  };