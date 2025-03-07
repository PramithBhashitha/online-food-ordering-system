

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
     
      productQuantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
      
    },);

    return Order;

  };