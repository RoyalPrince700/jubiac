import React, { useState } from 'react';
import { MdClose } from 'react-icons/md'; // Use a close icon
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const AdminDeleteProduct = ({ onClose, productId, fetchData }) => {
    const [loading, setLoading] = useState(false);

    const deleteUploadedProduct = async (id) => {
        console.log("Deleting Product ID:", id); // Log the ID being sent
        setLoading(true);
        try {
            const response = await fetch(SummaryApi.deleteUploadedProduct.url, {
                method: SummaryApi.deleteUploadedProduct.method,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: id }), // Ensure `_id` matches the backend expectation
            });

            const responseData = await response.json();
            console.log("Delete Response Data:", responseData);

            if (responseData.success) {
                toast.success(responseData.message);
                fetchData();
                onClose();
            } else {
                toast.error(responseData.message);
            }
        } catch (error) {
            console.error("Error during product deletion:", error);
            toast.error('Failed to delete product');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bg-opacity-35 flex justify-center items-center bg-slate-200 w-full h-full bottom-0 top-0 left-0 right-0">
            {/* Modal content */}
            <div className="bg-gray-800 rounded p-4 w-full max-w-2xl h-full max-h-[80%] overflow-hidden">
                <div className="flex justify-between items-center pb-3">
                    <h2 className="font-bold text-lg">Delete Product</h2>
                    <div className="w-fit cursor-pointer ml-auto text-2xl hover:text-red-600" onClick={onClose}>
                        <MdClose />
                    </div>
                </div>

                <div className="p-4">
                    <p>Are you sure you want to delete this product? This action cannot be undone.</p>
                    <button
                        className={`px-3 py-2 mt-5 ${loading ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'} text-white rounded`}
                        onClick={() => deleteUploadedProduct(productId)}
                        disabled={loading}
                    >
                        {loading ? 'Deleting...' : 'Delete Product'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminDeleteProduct;
