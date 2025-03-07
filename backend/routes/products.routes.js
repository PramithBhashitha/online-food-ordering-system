const express = require("express");
const productController = require("../controller/products.controller")
const authMiddleware = require("../middleware/auth.middleware");

function getProductRoutes(){
    const router = express.Router();

    router.use(express.json());
    router.use(authMiddleware);

    router.post("/addProduct", productController.addProduct);
    router.get("/getAllProducts", productController.getAllProducts);
    router.put("/updateProduct/:id", productController.updateProduct);
    router.delete("/deleteProduct/:id",productController.deleteProduct);

    return router;
}

module.exports =  getProductRoutes(); 
 