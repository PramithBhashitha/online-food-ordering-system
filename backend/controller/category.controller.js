const categoryService = require("../service/category.service");

//Function for add a category.
async function addCategory(req, res) {
    try {

        
        const category = req.body;

        

        const result = await categoryService.addCategory(category);

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

//Function for get all categories.
async function getAllCategory(req, res) {
    try {
        // const userRole_id = req.user.roleId;

        // if (![3].includes(userRole_id)) {
        //     return res.status(403).json({ error: true, payload: "Unauthorized. Only users  can view category" });
        // }

        const result = await categoryService.getAllCategory();

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

//Delete category
async function deleteCategory(req, res) {
    try {
        const categoryID = req.params.id
        const userRole_id = req.user.roleId;

        if (![1].includes(userRole_id)) {
            return res.status(403).json({ error: true, payload: "Unauthorized. Only Admins can delete category." });
        }

        const result = await categoryService.deleteCategory(categoryID);

        if(result.error) {
            return res.status(result.status).json ({
                error: true,
                payload: result.payload
            });
        } else {
            return res.status(result.status).json ({
                error: false,
                payload: result.payload
            });
        }

    } catch (error) {
        return res.status(500).json ({
            error: true,
            payload: error
        })
    }
} 





module.exports = {
    addCategory,
    getAllCategory,
    deleteCategory,
    
    
    



}