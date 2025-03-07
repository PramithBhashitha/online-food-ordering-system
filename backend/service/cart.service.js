const { where } = require("sequelize");
const { Cart, Products } = require("../models");
//add to cart.
async function addCart(cart) {

    try {
        const existingCart = await Cart.findOne({where: {userId:cart.userId}})

        if(existingCart) {
            const delCart = await deleteCart(cart.userId)
        }
        
        const newCart = await Cart.create(cart);


        

        return {
            error: false,
            status: 200,
            payload: "cart Successfully added"
        }
        
        
    } catch (error) {
        console.error('Error Creating cart Service : ',error);
        throw error;
        
    }
}


//All cart list.
async function getAllCart(){
    try {
        const listOfCart = await Cart.findAll({});

        if(!listOfCart) {
            return {
                error: true,
                status: 404,
                payload: "No order data found."
            }
        }

        const allCartObj = listOfCart.map((cart, index) => {
            
           
            return {
                id: cart.id,
                productId: cart.productId,
                userId: cart.userId,
                productQuantity: cart.productQuantity,
                
                }
        })
        return {
            error: false,
            status: 200,
            payload: allCartObj
        };
    } catch (error) {
        console.log(error)
        throw error;
    }
}

//Get cart By ID
async function getCart(userId) {
    try {
        const cart = await Cart.findOne({
            where: {
                userId: userId
            }, 
            include: [{
                model: Products,
                as: "product"
            }]
        },);

        if(!cart){
            return {
                error: true,
                status: 404,
                payload: "cart not Found."
            }
        }

        const response = {
                id: cart?.id,
                productId: cart?.productId,
                productName: cart?.product.productName,
                productPrice: cart?.product.productPrice,
                userId: cart?.userId,
                productQuantity: cart?.productQuantity,
                
            
        }

        return {
            error: false,
            status: 200,
            payload: response
        };

    } catch (error) {
        console.log("Error Getting cart Service : ", error);
        throw error;
    }
}

//Delete cart 
async function deleteCart(userId) {
    try {

        const cart = await Cart.findOne({where: {userId: userId}});

        if(!cart){
            return {
                error : true,
                status: 404,
                payload: "cart not Found."
            }
        }
        await Cart.destroy({
            where: {
                userId: userId
            }
        })

        return {
            error: false,
            status: 200,
            payload: "cart Successfully Deleted."
        }

    } catch (error) {
        console.log("Error Deleting cart Service : ", error);
        throw error;
    }
}

//Update cart
async function updateCart(userId, cart) {
    try {
        const existingCart = await Cart.findOne({
            where: {
                userId: userId
            }
        });

        if(!existingCart){
            return {
                error: true,
                status: 404,
                payload: "Cart not Found."
            }
        }

        await Cart.update(cart, {
            where: {
                userId: userId
            }
        })

        return {
            error: false,
            status: 200,
            payload: "Cart Successfully Updated."
        }

    } catch (error) {
        throw error;
    }
}




module.exports = {
    addCart,
    getAllCart,
    getCart,
    deleteCart,
    updateCart
}