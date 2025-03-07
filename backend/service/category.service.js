const { Category } = require("../models");
//add category.
async function addCategory(category) {

    try {
        
        const newCategory = await Category.create(category);

        

        return {
            error: false,
            status: 200,
            payload: "category Successfully added"
        }
        
        
    } catch (error) {
        console.error('Error Creating category Service : ',error);
        throw error;
        
    }
}

//All category list.
async function getAllCategory(){
    try {
        const listOfCategory = await Category.findAll({});

        if(!listOfCategory) {
            return {
                error: true,
                status: 404,
                payload: "No category data found."
            }
        }

        const allCategoryObj = listOfCategory.map((category, index) => {
            
           
            return {
                id: category.id,
                categoryName: category.categoryName,
                categoryImage: category.categoryImage
                
                }
        })
        return {
            error: false,
            status: 200,
            payload: allCategoryObj
        };
    } catch (error) {
        console.log(error)
        throw error;
    }
}

//Delete category
async function deleteCategory(categoryID) {
    try {

        const category = await Category.findByPk(categoryID);

        if(!category){
            return {
                error : true,
                status: 404,
                payload: "category not Found."
            }
        }
        await Category.destroy({
            where: {
                id: categoryID
            }
        })

        return {
            error: false,
            status: 200,
            payload: "category Successfully Deleted."
        }

    } catch (error) {
        throw error;
    }
}



module.exports = {
    addCategory,
    getAllCategory,
    deleteCategory,
    

    


    
}