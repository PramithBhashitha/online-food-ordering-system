module.exports = (Sequelize,DataTypes) => {
    const UserRoles = Sequelize.define("UserRoles",{
        role: {
            type: DataTypes.STRING,
            allowNull:false,
    
        }
    },{
        timestamps:false 
    });
return UserRoles;
};