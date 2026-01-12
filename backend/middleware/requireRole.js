const userModel = require('../models/userModel')

function requireRole(...allowedRoles) {
    return async function (req, res, next) {
        try {
            const userId = req.userId
            if (!userId) {
                return res.status(401).json({ success: false, message: 'Unauthorized' })
            }

            const user = await userModel.findById(userId).select('role')
            if (!user) {
                return res.status(401).json({ success: false, message: 'Unauthorized' })
            }

            if (!allowedRoles.includes(user.role)) {
                return res.status(403).json({ success: false, message: 'Forbidden' })
            }

            next()
        } catch (err) {
            res.status(500).json({ success: false, message: err.message })
        }
    }
}

module.exports = requireRole


