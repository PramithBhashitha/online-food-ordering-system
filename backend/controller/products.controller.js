const productsService = require("../service/products.service");

//Function for add a product.
async function addProduct(req, res) {
    try {

        
        const products = req.body;

        const userRole_id = req.user.roleId;

        if (![1].includes(userRole_id)) {
            return res.status(403).json({ error: true, payload: "Unauthorized. Only Admins can add products." });
        }

        const result = await productsService.addProduct(products);

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

//Function for get all product list.
async function getAllProducts(req, res) {
    try {
        const userRole_id = req.user.roleId;

        if (![1, 2, 3].includes(userRole_id)) {
            return res.status(403).json({ error: true, payload: "Unauthorized. Only Admins, shop owner and user can view products." });
        }

        const { category } = req.query; // Get the category filter from query parameters
        const result = await productsService.getAllProducts(category);

        if (result.error) {
            return res.status(result.status).json({
                error: true,
                payload: result.payload,
            });
        } else {
            return res.status(200).json({
                error: false,
                payload: result.payload,
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: true,
            payload: error,
        });
    }
}


//Function for update product details.
async function updateProduct(req, res) {
    try{
        const userRole_id = req.user.roleId;
        const { id } = req.params;
        const updatedData = req.body;
        delete updatedData.id;
        if (![1].includes(userRole_id)) {
            return res.status(403).json({ error: true, payload: "Unauthorized. Only Admins can update products." });
        } 
        
        const result = await productsService.updateProduct(id, updatedData);

        if (result.error) {
            return res.status(result.status).json ({
                error: true,
                payload: result.payload
            })
        } else {
            return res.status(result.status).json ({
                error: false,
                payload: result.payload
        })}
        
    } catch (error) {
        return res.status(500).json ({
            error: true,
            payload: error
        })
    }

}

//Function for delete a product
async function deleteProduct(req, res) {
    try {
        const userRole_id = req.user.roleId;
        const productID = req.params.id

        if (![1].includes(userRole_id)) {
            return res.status(403).json({ error: true, payload: "Unauthorized. Only Admins can delete products." });
        }

        const result = await productsService.deleteProduct(productID);

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
        console.error(error)
        return res.status(500).json ({
            error: true,
            payload: error
        })
    }
}


module.exports = {
    addProduct,
    getAllProducts,
    updateProduct,
    deleteProduct


}
