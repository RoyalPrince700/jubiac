
const productModel = require("../../models/productModel")


const getHotDealProduct = async(req,res) =>{
    try{
            const productHotDeal = await productModel.distinct("hotDeal") //get the category from product models inside the model file
               
            console.log("hotDeal", productHotDeal)

            //array to store one product from each hotDeal
            const productByhotDeal = []

            for(const hotDeal of productHotDeal){
                //find product from data base
                const product = await productModel.findOne({hotDeal})

                if(product){
                    productByhotDeal.push(product)
                }
            }

            res.json({
                message : "hotDeal product",
                data : productByhotDeal,
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

module.exports = getHotDealProduct


