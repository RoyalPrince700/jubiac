const productModel = require("../../models/productModel")

const filterProductController = async(req,res)=>{
    try{
        const categoryList = req?.body?.category || []

        const product = await productModel.find({
          category : {
            "$in" : categoryList
          }
        })

        res.json({
            data : product,
        mesage : "Category List",
        error : false,
        sucess : true
        })

    }catch(err){
        res.json({
            message : err.message || err,
            success : false,
            error : true,
        })
    }
}

module.exports = filterProductController