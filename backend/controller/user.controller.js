const bcrypt = require("bcrypt");
const userService = require("../service/user.service");
const { sign } = require("jsonwebtoken");

//Register User 
async function registerUser(req, res) {
    try {
        // const userRole_id = req.user.roleId;
        const {firstName, lastName, email, contactNo, username, password, roleId, address } = req.body;

        // console.log(userRole_id)

        // if (![1].includes(userRole_id)) {
        //     return res.status(403).json({ error: true, payload: "Unauthorized. Only Admins can create users." });
        // }

        const hashPassword = await bcrypt.hash(password, 10);
        const result = await userService.createUser(firstName, lastName, email, contactNo, username, hashPassword, roleId, address);
        
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
        return res.status(500).json({
            error: true,
            payload: error
        })
    }
}

//Login User
async function loginUser(req, res) {
    try {
        const { username, password } = req.body;

        const user = await userService.loginUser(username);

        if (!user) {
            return res.json({ 
                error: true,
                payload: "User Doesn't Exist"
             });
            
          }
        else {
            bcrypt.compare(password, user.password).then(async (match) => {
                if (!match) {res.status(400).json({ 
                    error: true,
                    payload: "Wrong Username And Password Combination" 
                });
            }
                else{
                  const accessToken = sign(
                    { username: user.username, id: user.id, role: user.roles.role, roleId: user.roleId },
                    "importantsecret"
                  );
                  res.status(200).json({
                    error: false,
                    payload: accessToken
                  });
                }  
              });
        }     
    } catch (error) {
        return res.status(500).json({
            error: true,
            payload: error
        })
    }
}

//Get All Users
async function getAllUsers(req, res) {
    try {
        const userRole_id = req.user.roleId;

        if (![1].includes(userRole_id)) {
            return res.status(403).json({ error: true, payload: "Unauthorized. Only Admins can view users." });
        }

        const listOfUsers = await userService.getAllUsers();

        return res.status(200).json({
            error: false,
            payload: listOfUsers
        });
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: true,
            payload: error
        })
    }
}

//Edit User

async function editUser(req, res) {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const result = await userService.editUser(id, updatedData)

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

//Delete User
async function deleteUser(req, res) {
    try {
        const userID = req.params.id
        const userRole_id = req.user.roleId;

        if (![1].includes(userRole_id)) {
            return res.status(403).json({ error: true, payload: "Unauthorized. Only Admins can delete users." });
        }

        const result = await userService.deleteUser(userID);

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

//Get User By ID
async function getUserById(req, res) {
    try {
        const id = req.params.id;
        const result = await userService.getUserById(id);

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
    registerUser,
    loginUser,
    getAllUsers,
    editUser,
    deleteUser,
    getUserById 
}