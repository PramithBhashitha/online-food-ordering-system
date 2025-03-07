const express = require("express");
const categoryController = require("../controller/category.controller")
const authMiddleware = require("../middleware/auth.middleware");

function getCategoryRoutes(){
    const router = express.Router();

    router.use(express.json());
    router.use(authMiddleware);

    router.post("/addCategory", categoryController.addCategory);

    router.get("/getAllCategory", categoryController.getAllCategory);

    router.delete("/deleteCategory/:id", categoryController.deleteCategory);
    

    return router;
}

module.exports =  getCategoryRoutes(); 