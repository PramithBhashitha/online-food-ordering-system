const express = require("express");

const userRoutes = require("./user.routes");

const productsRoutes = require("./products.routes");
const paymentRoutes = require("./payment.routes");
const orderRoutes = require("./order.routes");
const cartRoutes = require("./cart.routes");
const categoryRoutes = require("./category.routes");


function routes() {

    const router = express.Router();
    
    router.use("/user", userRoutes);
    router.use("/products",productsRoutes);
    router.use("/payment",paymentRoutes);
    router.use("/order",orderRoutes);
    router.use("/cart",cartRoutes);
    router.use("/category",categoryRoutes);

    

    return router;
}

module.exports = routes();