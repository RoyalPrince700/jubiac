const userModel = require("../../models/userModel")

async function updateUser(req,res) {
    try{
            const sessionUser = req.userId
            const {userId, email, name, role  } = req.body

            const payload = {
                ...( email && {email : email}),
                ...( name && {name : name})
            }

            const user = await userModel.findById(sessionUser)
            if (!user) {
                return res.status(401).json({ success: false, error: true, message: 'Unauthorized' })
            }
            if (role) {
                if (user.role !== 'ADMIN') {
                    return res.status(403).json({ success: false, error: true, message: 'Only ADMIN can change roles' })
                }
                payload.role = role
            }

            const updatedUser = await userModel.findByIdAndUpdate(userId, payload, { new: true, runValidators: true })
                
            res.json({
                data : updatedUser,
                message : "User Updated",
                success : true,
                error : false
            })


    }catch(err){
        res.status(400)({
            message : err.message || err,
            error : true,
            success : false
        })
    }
    
}
module.exports = updateUser