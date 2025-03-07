const express = require('express');
const app = express();
const cors = require("cors");
const dotEnv = require("dotenv")

dotEnv.config()

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || " 44.208.32.102"
app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const routes = require("./routes/index.routes");
app.use("/", routes);


try {
    db.Users.belongsTo(db.UserRoles, { as: "roles", foreignKey: "roleId"});
    db.UserRoles.hasMany(db.Users, {as: "users", foreignKey: "roleId"});
    db.Cart.belongsTo(db.Users, {as:"cart", foreignKey:"userId"});
    db.Users.hasMany(db.Cart, {as:"cart", foreignKey:"userId"});
    db.Cart.belongsTo(db.Products, {as:"product", foreignKey:"productId"});
    db.Products.hasMany(db.Cart, {as:"carts", foreignKey:"productId"});

    db.Order.belongsTo(db.Users, {as:"user", foreignKey:"userId", onDelete: 'CASCADE'});
    db.Users.hasMany(db.Order, { as:"orders", foreignKey:"userId", onDelete: 'CASCADE'});
    db.Order.belongsTo(db.Payment, {as:"payment", foreignKey:"paymentId"});
    db.Payment.hasOne(db.Order,{as:"order", foreignKey:"paymentId"});
    db.Order.belongsTo(db.Products, {as:"product", foreignKey:"productId"});
    db.Products.hasMany(db.Order, { as:"orders", foreignKey:"productId"});

    db.Products.belongsTo(db.Category, {as:"category", foreignKey:"categoryId"});
    db.Category.hasMany(db.Products, {as:"products", foreignKey:"categoryId"});
    


    
} catch (error) {
    console.log(error);
    
}

db.sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => {
        console.log("SERVER RUNNING ON PORT 4000");
    });

    
})