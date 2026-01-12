

const productModel = require("../../models/productModel")


const getSubCategoryProduct = async(req,res) =>{
    try{
            const productSubCategory = await productModel.distinct("subCategory") //get the category from product models inside the model file
               
            console.log("subCategory", productSubCategory)

            //array to store one product from each subcategory
            const productBySubCategory = []

            for(const subCategory of productSubCategory){
                //find product from data base
                const product = await productModel.findOne({subCategory})

                if(product){
                    productBySubCategory.push(product)
                }
            }

            res.json({
                message : "subcategory product",
                data : productBySubCategory,
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

module.exports = getSubCategoryProduct


