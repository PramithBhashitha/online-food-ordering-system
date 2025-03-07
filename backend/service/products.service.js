const { Model } = require("sequelize");
const { Products,Category } = require("../models");
//add products.
async function addProduct(product) {

    try {
        const productnameExist = await Products.findOne({
            where: {
                productName: product.productName
            }})
        
        if(!productnameExist == null) {
            return {
                error: true,
                status: 503,
                payload: "Sorry, the product already exist"
            }
        } else {
            const newProduct = await Products.create(product);

        

        return {
            error: false,
            status: 200,
            payload: "product Successfully added"
        };
        }
        
        
    } catch (error) {
        console.error('Error Creating product Service : ',error);
        throw error;
        
    }
}

//All products list.
async function getAllProducts(category) {
    try {
        const queryOptions = {
            include: [{
                model: Category,
                as: "category",
                attributes: ["id","categoryName"],
            }],
        };

        // If category is provided, add a where clause to filter by category name
        if (category) {
            queryOptions.where = {
                '$category.categoryName$': category,
            };
        }

        const listOfProducts = await Products.findAll(queryOptions);

        if (!listOfProducts || listOfProducts.length === 0) {
            return {
                error: true,
                status: 404,
                payload: "No product data found.",
            };
        }

        const allProductsObj = listOfProducts.map((product) => ({
            id: product.id,
            productName: product.productName,
            productPrice: product.productPrice,
            productQuantity: product.productQuantity,
            productCategory: product.category?.categoryName,
            categoryId: product.category?.id,
            productImageURL: product?.productImageURL,
        }));

        return {
            error: false,
            status: 200,
            payload: allProductsObj,
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
}


//Update patient details.
async function updateProduct(id, updatedData) {
    try {
        const product = await Products.findByPk(id);

        if(!product) {
            return { 
                error: true,
                status: 404,
                payload: "product not found."
            };
        }
        await product.update(updatedData);


    return {
        error: false,
        status: 200,
        payload: "Product updated successfully. "
    };

    } catch (error) {
        console.log(error)
        throw error;
    }

}

//Delete Product
async function deleteProduct(productID) {
    try {
        const product = await Products.findByPk(productID);

        if(!product){
            return {
                error : true,
                status: 404,
                payload: "Product not Found."
            }
        }

       
        await Products.destroy({
            where: {
                id: productID
            }
        })

        return {
            error: false,
            status: 200,
            payload: "Product Successfully Deleted."
        }

    } catch (error) {
        console.log(error)
        throw error;
    }
}



module.exports = {
    addProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
}