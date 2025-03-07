const express = require("express");
const cartController = require("../controller/cart.controller")
const authMiddleware = require("../middleware/auth.middleware");

function getCartRoutes(){
    const router = express.Router();

    router.use(express.json());
    router.use(authMiddleware);

    router.post("/addCart", cartController.addCart);
    
    router.get("/getAllCart", cartController.getAllCart);
    router.get("/getCart", cartController.getCart);

    router.patch("/updateCart", cartController.updateCart);

    router.delete("/deleteCart", cartController.deleteCart);


    

    return router;
}

module.exports =  getCartRoutes(); 