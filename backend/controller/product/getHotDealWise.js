const productModel = require("../../models/productModel")

const getHotDealWiseProduct = async (req,res) => {
    try{
            const {hotDeal} = req?.body || req?.query
            const product = await productModel.find({hotDeal})

                res.json({
                    data : product,
                    message : "Product",
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

module.exports = getHotDealWiseProduct