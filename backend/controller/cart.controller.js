const cartService = require("../service/cart.service");

//Function for add to cart.
async function addCart(req, res) {
    try {
        const userId = req.user.id
        const cart = req.body;
        cart.userId = userId;

        const result = await cartService.addCart(cart);

        if (result.error) {
            return res.status(result.status).json ({
                error: true,
                payload: result.payload
            })
        } else {
            return res.status(200).json ({
                error: false,
                payload: result.payload
        })}

    } catch (error) {
        return res.status(500).json({
            error: true,
            payload: error.message
        })
    }
}

//Function for get all cart list.
async function getAllCart(req, res) {
    try {
        const userRole_id = req.user.roleId;

        if (![1].includes(userRole_id)) {
            return res.status(403).json({ error: true, payload: "Unauthorized. Only Admins  can view cart" });
        }

        const result = await cartService.getAllCart();

        if (result.error) {
            return res.status(result.status).json ({
                error: true,
                payload: result.payload
            })
        } else {
            return res.status(200).json ({
                error: false,
                payload: result.payload
        })}

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: true,
            payload: error
        })
    }
}

//Get cart By ID
async function getCart(req, res) {
    try {
        const id = req.params.id;
        const userId = req.user.id;
        const result = await cartService.getCart(userId);

        if(result.error) {
            return res.status(result.status).json ({
                error: true,
                payload: result.payload
            })
        } else {
            return res.status(result.status).json ({
                error: false,
                payload: result.payload
            })
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json ({
            error: true,
            payload: error
        })
    }
}

//Update cart
async function updateCart(req, res) {
    try {
        const userId = req.user.id;
        const cart = req.body;
        const result = await cartService.updateCart(userId, cart);

        if(result.error) {
            return res.status(result.status).json ({
                error: true,
                payload: result.payload
            })
        } else {
            return res.status(result.status).json ({
                error: false,
                payload: result.payload
            })
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json ({
            error: true,
            payload: error
        })
    }
}

//Delete Cart
async function deleteCart(req, res) {
    try {
        const userId = req.user.id;
        const result = await cartService.deleteCart(userId);

        if(result.error) {
            return res.status(result.status).json ({
                error: true,
                payload: result.payload
            })
        } else {
            return res.status(result.status).json ({
                error: false,
                payload: result.payload
            })
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json ({
            error: true,
            payload: error
        })
    }
}


module.exports = {
    addCart,
    getAllCart,
    getCart,
    updateCart,
    deleteCart
}