const express = require("express");
const userController = require("../controller/user.controller");
const authMiddlewear = require("../middleware/auth.middleware.js");


function getUserRoutes(){
    const router = express.Router();
    router.use(express.json());
    
    router.post("/registerUser", userController.registerUser);
    router.post("/loginUser", userController.loginUser);
    router.use(authMiddlewear);
    router.get("/getAllUsers", userController.getAllUsers);
    router.get("/getUserById/:id", userController.getUserById);
    router.put("/editUser/:id", userController.editUser);
    router.delete("/deleteUser/:id", userController.deleteUser);


    
    

    return router;
}

module.exports = getUserRoutes();