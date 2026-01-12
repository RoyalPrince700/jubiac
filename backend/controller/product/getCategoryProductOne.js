const productModel = require("../../models/productModel");

const getCategoryProduct = async (req, res) => {
  try {
    const productCategories = await productModel.distinct("category");
    const productByCategory = [];

    for (const category of productCategories) {
      const totalSold = await productModel.countDocuments({ category }); // Count products
      productByCategory.push({ category, value: totalSold });
    }

    res.json({
      message: "Category product distribution",
      data: productByCategory,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = getCategoryProduct;




// const productModel = require("../../models/productModel")


// const getCategoryProduct = async(req,res) =>{
//     try{
//             const productCategory = await productModel.distinct("category") //get the category from product models inside the model file
               
//             console.log("category", productCategory)

//             //array to store one product from each category
//             const productByCategory = []

//             for(const category of productCategory){
//                 //find product from data base
//                 const product = await productModel.findOne({category})

//                 if(product){
//                     productByCategory.push(product)
//                 }
//             }

//             res.json({
//                 message : "category product",
//                 data : productByCategory,
//                 success : true,
//                 error : false
//             })



//     }catch(err){
//         res.status(400).json({
//             message : err.message || err,
//             error : true,
//             success : false
//         })
//     }
// }

// module.exports = getCategoryProduct


