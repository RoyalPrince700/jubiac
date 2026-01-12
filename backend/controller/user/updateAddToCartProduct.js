const addToCartModel = require("../../models/cartProduct");

const updateAddToCartProduct = async (req, res) => {
  try {
    const currentUserId = req.userId;  // User ID from token or session
    const addToCartProductId = req?.body?._id;  // Product in the cart to update
    const qty = req.body.quantity;  // New quantity

    // Check if all required fields are provided
    if (!addToCartProductId || !qty) {
      return res.json({
        message: "Product ID and quantity are required.",
        error: true,
        success: false,
      });
    }

    // Update the product's quantity based on both userId and productId
    const updateProduct = await addToCartModel.updateOne(
      {
        _id: addToCartProductId,
        userId: currentUserId,  // Ensures we only update the current user's cart
      },
      {
        $set: { quantity: qty },  // Update the quantity
      }
    );

    // Check if the update was successful
    if (updateProduct.nModified === 0) {
      return res.json({
        message: "No product was updated.",
        error: true,
        success: false,
      });
    }

    res.json({
      message: "Product quantity updated successfully.",
      data: updateProduct,
      error: false,
      success: true,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = updateAddToCartProduct;



/*const addToCartModel = require("../../models/cartProduct")

const updateAddToCartProduct = async(req,res)=>{
    try{
        const currentUserId = req.userId 
        const addToCartProductId = req.body._id

        const qty = req.body.quantity

        const updateProduct = await addToCartModel.updateOne(addToCartProductId,{
            ...(qty && {quantity : qty}) //if quantity is available enable this code
        })

        res.json({
            message : "Product Updated",
            data : updateProduct,
            error : false,
            success : true
        })


    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}



const updateAddToCartProduct = async(req, res) => {
    try {
        const currentUserId = req.userId;
        const addToCartProductId = req.body._id;  // Make sure the request includes this

        const qty = req.body.quantity;
        
        // Find and update the product based on the userId and product _id
        const updateProduct = await addToCartModel.updateOne({
            userId: currentUserId,
            _id: addToCartProductId  // Use _id to identify the correct product
        }, {
            $set: { quantity: qty }  // Update the quantity with $set
        });

        res.json({
            message: "Product Updated",
            data: updateProduct,
            error: false,
            success: true
        });
    } catch (err) {
        res.json({
            message: err?.message || err,
            error: true,
            success: false
        });
    }
};


module.exports = updateAddToCartProduct*/