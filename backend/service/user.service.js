const { Users, UserRoles } = require("../models");
//Register User
async function createUser(firstName, lastName, email, contactNo, username, hashPassword, roleId, address ) {
    try { 
        const usernameExist = await Users.findOne({
            where: {
                username: username
            }
        })

        const emailExist = await Users.findOne({
            where: {
                email: email
            }
        })

        if(usernameExist) {
            return {
                error: true,
                status: 409,
                payload: "Sorry, that username already exists!"
            }
        }

        if(emailExist) {
            return {
                error: true,
                status: 409,
                payload: "Sorry, a user already exists with that email address!"
            }
        }
        const role = await UserRoles.findByPk(roleId);

        if(!role){
            return {
                error : true,
                status: 400,
                payload: "Wrong Role Id."
            }
        }
        const newUser = await Users.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            contactNo: contactNo,
            username: username,
            password: hashPassword,
            roleId: roleId,
            address: address
           
          });

          return {            
            error: false,
            status: 200,
                payload: "User Successfully Created"
        }

    } catch (error) {
        console.error('Error Creating User Service : ',error);
        throw error;
    }
}

//Login User
async function loginUser(username) {
    try {
        const user = await Users.findOne({ 
            where: { 
                username: username 
            },
            include: {
                model: UserRoles,
                as: 'roles',
                attributes: ['role']
            }
        }
        
        );
        return user;
    } catch (error) {
        console.error('Error Login In User Service : ',error);
        throw error;
    }
}

//Get All Users
async function getAllUsers(){
    try {
        const listOfUsers = await Users.findAll({
            attributes: {exclude: ["password"]},
            include: [{
                model: UserRoles,
                as: 'roles',
                attributes: ['role']
            }]
        }
        );

        const userResponse = listOfUsers.map((user, index) => {
            return {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                contactNo: user.contactNo,
                username: user.username,
                createdAt: user.createdAt,
                role: user.roles.role,
                address: user.address
            }
        })
        return userResponse;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

//Update User Details
async function editUser(id, updatedData) {
    try {
        const user = await Users.findByPk(id);

        if(!user){
            return {
                error : true,
                status: 404,
                payload: "User not Found."
            }
        }

        const usernameExist = await Users.findOne({
            where: {
                username: updatedData.username
            }
        })
        const emailExist = await Users.findOne({
            where: {
                email: updatedData.email
            }
        })

        console.log(user.username)

        if(usernameExist && usernameExist.username != user.username) {
            return {
                error: true,
                status: 409,
                payload: "Sorry, that username already exists!"
            }
        }

        if(emailExist && emailExist.email != user.email) {
            return {
                error: true,
                status: 409,
                payload: "Sorry, a user already exists with that email address!"
            }
        }
        
        await user.update(updatedData);


        return {
            error: false,
            status: 200,
            payload: "User Successfully Updated."
        }

    } catch (error) {
        console.log(error)
        throw error;
    }
}

//Delete User 
async function deleteUser(userID) {
    try {

        const user = await Users.findByPk(userID);

        if(!user){
            return {
                error : true,
                status: 404,
                payload: "User not Found."
            }
        }
        await Users.destroy({
            where: {
                id: userID
            }
        })

        return {
            error: false,
            status: 200,
            payload: "User Successfully Deleted."
        }

    } catch (error) {
        throw error;
    }
}

//Get User By ID
async function getUserById(id) {
    try {
        const user = await Users.findByPk(id, {
            attributes: {exclude: ["password"]},
            include: [{
                model: UserRoles,
                as: 'roles'
            }]
        });

        if(!user){
            return {
                error : true,
                status: 404,
                payload: "User not Found."
            }
        }

        const response = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            contactNo: user.contactNo,
            username: user.username,
            createdOn: user.createdAt.toISOString().split('T')[0],
            role: user.roles.role,
            roleId: user.roles.id
        }

        return {
            error: false,
            status: 200,
            payload: response
        };

    } catch (error) {
        throw error;
    }
}



module.exports = {
    createUser,
    loginUser,
    getAllUsers,
    editUser,
    deleteUser,
    getUserById
}

