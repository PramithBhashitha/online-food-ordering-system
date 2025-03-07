const express = require("express");
const orderController = require("../controller/order.controller")
const authMiddleware = require("../middleware/auth.middleware");

function getOrderRoutes(){
    const router = express.Router();

    router.use(express.json());
    router.use(authMiddleware);

    router.post("/addOrder", orderController.addOrder);

    router.get("/getAllOrder", orderController.getAllOrder);
    router.get("/getOrderById/:id", orderController.getOrderById);
    router.delete("/deleteOrderById/:id", orderController.deleteOrderById);
    

    return router;
}

module.exports =  getOrderRoutes(); 
 