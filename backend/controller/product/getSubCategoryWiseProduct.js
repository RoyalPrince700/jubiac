const productModel = require("../../models/productModel")

const getSubCategoryWiseProduct = async (req,res) => {
    try{
            const {subCategory} = req?.body || req?.query
            const product = await productModel.find({subCategory})

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

module.exports = getSubCategoryWiseProduct