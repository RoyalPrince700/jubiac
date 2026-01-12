const userModel = require("../../models/userModel")

async function allUsers(req,res){
    try{
        console.log("userId all user", req.userId)

        const allUsers = await userModel.find() //this line will return arrays of all the users

        res.json({
            message : "All User",
            //send the user array to frontend side
            data : allUsers,
            success : true,
            error : false

        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
    
}

module.exports = allUsers
