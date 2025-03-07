const express = require("express");
const paymentController = require("../controller/payment.controller")
const authMiddleware = require("../middleware/auth.middleware");

function getPaymentRoutes(){
    const router = express.Router();

    router.use(express.json());
    router.use(authMiddleware);

    router.post("/addPayment", paymentController.addPayment);
    router.get("/getAllPayment", paymentController.getAllPayment);
    router.get("/getPaymentById/:id", paymentController.getPaymentById);

    return router;
}

module.exports =  getPaymentRoutes(); 
 