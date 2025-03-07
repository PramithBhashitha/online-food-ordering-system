

module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define("Payment", {
      paymentMode: {
        type: DataTypes.STRING,
        allowNull: true
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      
    },);

    return Payment;

  };