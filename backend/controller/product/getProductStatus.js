



const productModel = require("../../models/productModel")


const getProductStatus = async(req,res) =>{
    try{
            const productProductStatus = await productModel.distinct("productStatus") //get the category from product models inside the model file
               
            console.log("productStatus", productProductStatus)

            //array to store one product from each subcategory
            const productByStatus = []

            for(const productStatus of productProductStatus){
                //find product from data base
                const product = await productModel.findOne({productStatus})

                if(product){
                    productByStatus.push(product)
                }
            }

            res.json({
                message : "product Status product",
                data : productByStatus,
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

module.exports = getProductStatus


