const addToCartModel = require("../../models/cartProduct");
const productModel = require("../../models/productModel"); // Assuming a product model exists

const addToCartController = async (req, res) => {
  try {
    const { productId } = req.body; // Get productId from the request body
    const currentUser = req.userId; // Get userId from the request (set by authToken middleware)

    // If user is not authenticated, send login prompt
    if (!currentUser) {
      return res.status(401).json({
        message: "Please login to add items to your cart.",
        success: false,
        error: true,
      });
    }

    // Fetch product details from the database
    const product = await productModel.findById(productId);

    // Check if the product exists
    if (!product) {
      return res.status(404).json({
        message: "Product not found.",
        success: false,
        error: true,
      });
    }

    // Check if the product is available
    if (product.productStatus !== "Available") {
      return res.status(400).json({
        message: "This product is currently unavailable.",
        success: false,
        error: true,
      });
    }

    // Check if the selling price is valid (greater than 0)
    if (!product.sellingPrice || product.sellingPrice <= 0) {
      return res.status(400).json({
        message: "Add product from the Extra section.",
        success: false,
        error: true,
      });
    }

    // Check if the product is already in the user's cart
    const isProductAvailable = await addToCartModel.findOne({
      productId,
      userId: currentUser,
    });

    if (isProductAvailable) {
      return res.status(400).json({
        message: "Already added to cart.",
        success: false,
        error: true,
      });
    }

    // Create a payload to add the product to the cart
    const payload = {
      productId,
      quantity: 1,
      userId: currentUser,
    };

    // Add the product to the cart
    const newAddToCart = new addToCartModel(payload);
    const saveProduct = await newAddToCart.save();

    // Respond with success
    res.status(201).json({
      data: saveProduct,
      message: "Product added to cart.",
      success: true,
      error: false,
    });
  } catch (err) {
    // Catch and handle any errors
    res.status(500).json({
      message: err?.message || "An error occurred.",
      error: true,
      success: false,
    });
  }
};

module.exports = addToCartController;
