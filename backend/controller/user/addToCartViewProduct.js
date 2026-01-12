const addToCartModel = require("../../models/cartProduct");

const addToCartViewProduct = async (req, res) => {
  try {
    const currentUser = req.userId;

    // Check if user ID exists
    if (!currentUser) {
      return res.status(401).json({
        message: "Unauthorized: No user ID provided.",
        error: true,
        success: false,
      });
    }

    // Fetch all products added to the cart by the current user
    const allProducts = await addToCartModel.find({
      userId: currentUser,
    }).populate("productId");

    // Respond with the list of products
    res.status(200).json({
      data: allProducts,
      success: true,
      error: false,
    });

  } catch (err) {
    // Handle errors
    res.status(500).json({
      message: err.message || "An error occurred while fetching cart products.",
      error: true,
      success: false,
    });
  }
};

module.exports = addToCartViewProduct;





// const addToCartModel = require("../../models/cartProduct")

// const addToCartViewProduct = async(req,res)=>{
//     try{
//         const currentUser = req.userId

//         const allProduct = await addToCartModel.find({
//             userId : currentUser
//         }).populate("productId")

//         res.json({
//             data : allProduct,
//             success : true,
//             error : false
//         })

//     }catch(err){
//         res.json({
//             message : err.message || err,
//             error : true,
//             success : false
//         })
//     }
// }

// module.exports = addToCartViewProduct