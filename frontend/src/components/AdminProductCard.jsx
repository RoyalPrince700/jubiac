import React, { useState } from 'react';
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import AdminEditProduct from './AdminEditProduct';
import AdminDeleteProduct from './AdminDeleteProduct'; // Import the AdminDeleteProduct component
import displayNGNCurrency from '../helpers/displayCurrency';

const AdminProductCard = ({ data, fetchdata }) => {
    const [editProduct, setEditProduct] = useState(false);
    const [deleteProduct, setDeleteProduct] = useState(false); // State for managing delete modal visibility

    return (
        <div className="bg-gray-900 p-4 rounded shadow-md w-48 hover:shadow-lg transition-shadow">
            {/* Product Image */}
            <div className="w-full h-32 flex justify-center items-center mb-2">
                <img
                    src={data?.productImage[0] || '/placeholder-image.png'} // Fallback image
                    className="object-cover w-full h-full rounded"
                    alt={data?.productName || "Product Image"}
                />
            </div>

            {/* Product Name */}
            <h1 className="text-gray-100 text-sm font-semibold mb-2 truncate">
                {data?.productName || "Unnamed Product"}
            </h1>

            {/* Product Price */}
            {data.sellingPrice > 0 && (
                <p className="text-white font-bold text-sm mb-2">
                    {displayNGNCurrency(data.sellingPrice)}
                </p>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end gap-2 mt-2">
    {/* Edit Button */}
    <button
        className="p-2 rounded-full bg-yellow-500 hover:bg-yellow-400 text-white transition-all"
        onClick={() => setEditProduct(true)}
        title="Edit Product"
    >
        <MdModeEditOutline className="text-xl" />
    </button>

    {/* Delete Button */}
    <button
        className="p-2 rounded-full bg-red-500 hover:bg-red-700 text-white transition-all"
        onClick={() => setDeleteProduct(true)}
        title="Delete Product"
    >
        <MdDelete className="text-xl" />
    </button>
</div>


            {/* Edit Product Modal */}
            {editProduct && (
                <AdminEditProduct
                    productData={data}
                    onClose={() => setEditProduct(false)} // Close the edit modal
                    fetchdata={fetchdata}
                />
            )}

            {/* Delete Product Modal */}
            {deleteProduct && (
                <AdminDeleteProduct
                    productId={data?._id} // Use `_id` from the product schema
                    onClose={() => setDeleteProduct(false)} // Close the delete modal
                    fetchData={fetchdata}
                />
            )}
        </div>
    );
};

export default AdminProductCard;
