const orderService = require("../service/order.service");

//Function for add a order.
async function addOrder(req, res) {
    try {

        
        const order = req.body;

        // const userRole_id = req.user.roleId;

        // if (![3].includes(userRole_id)) {
        //     return res.status(403).json({ error: true, payload: "Unauthorized. Only users can add order." });
        // }

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

//Function for get all order list.
async function getAllOrder(req, res) {
    try {
        const userRole_id = req.user.roleId;

        if (![1].includes(userRole_id)) {
            return res.status(403).json({ error: true, payload: "Unauthorized. Only Admins and shop owners can view order" });
        }

        const result = await orderService.getAllOrder();

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

//Get order By ID
async function getOrderById(req, res) {
    try {
        const id = req.params.id;
        const result = await orderService.getOrderById(id);

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

async function deleteOrderById(req, res) {
    try {
        const id = req.params.id;
        const result = await orderService.deleteOrderById(id);

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
    addOrder,
    getAllOrder,
    getOrderById,
    deleteOrderById
}