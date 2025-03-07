const paymentService = require("../service/payment.service");
const orderService = require("../service/order.service");
const cartService = require("../service/cart.service");


//Function for add a payment.
async function addPayment(req, res) {
    try {
        const payment = req.body;
        const userId = req.user.id;

        const cart = await cartService.getCart(userId);

        if (cart.error) {
            return res.status(cart.status).json ({
                error: true,
                payload: cart.payload
            })
        }

        const paymentResult = await paymentService.addPayment(payment);

        const order = {
            userId: userId,
            productId: cart.payload.productId,
            productQuantity: cart.payload.productQuantity,
            address: payment.address,
            paymentId: paymentResult.payload.id,
            amount: payment.amount,
        }

        const deleteCart = await cartService.deleteCart(userId);

        const result = await orderService.addOrder(order);


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

//Function for get all payment list.
async function getAllPayment(req, res) {
    try {
        const userRole_id = req.user.roleId;

        if (![1].includes(userRole_id)) {
            return res.status(403).json({ error: true, payload: "Unauthorized. Only Admins can view payment list." });
        }

        const result = await paymentService.getAllPayment();

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

//Get payment By ID
async function getPaymentById(req, res) {
    try {
        const id = req.params.id;
        const result = await paymentService.getPaymentById(id);

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
        return res.status(500).json ({
            error: true,
            payload: error
        })
    }
}





module.exports = {
    addPayment,
    getAllPayment,
    getPaymentById



}
