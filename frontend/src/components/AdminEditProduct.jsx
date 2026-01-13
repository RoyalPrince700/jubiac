import React, { useState } from 'react'
import { CgClose } from "react-icons/cg";  // Importing the close icon
import productCategory from '../helpers/productCategory'  // Importing the product categories list from a helper file
import productSubCategory from '../helpers/productSubCategory'  // Importing the product categories list from a helper file
import { FaCloudUploadAlt } from "react-icons/fa";  // Importing the upload icon
import uploadImage from '../helpers/uploadImages';  // Importing the image upload helper function
import DisplayImage from './DisplayImage';  // Importing the component to display images in fullscreen
import { MdDelete } from 'react-icons/md'  // Importing the delete icon
import SummaryApi from '../common';
import {toast} from 'react-toastify'
import productDeal from '../helpers/productDeal'
import productStatus from '../helpers/productStatus'  // Importing the product categories list from a helper file


const AdminEditProduct = ({
    onClose, // onClose prop for closing the upload modal
    productData,
    fetchdata
}) => {

    // State to manage form input data
  const [data, setData] = useState({
    ...productData,
    productName: productData?.productName,
    brandName: productData?.brandName,
    category: productData?.category,
    subCategory: productData?.subCategory,
    hotDeal: productData?.hotDeal,
    productImage: productData?.productImage || [],
    description: productData?.description,
    price: productData?.price,
    item: productData?.item,
    sellingPrice: productData?.sellingPrice,
     productStatus: productData?.productStatus,
     sellerName: productData?.sellerName, 
    sellerBrandName: productData?.sellerBrandName,
    sellerPhoneNumber : productData?.sellerPhoneNumber,
  })

  // State to manage whether fullscreen image display is open
  const [openFullScreenImage, setOpenFullScreenImage] = useState(false)

  // State to store the image URL for fullscreen display
  const [fullScreenImage, setFullScreenImage] = useState("")

  // Function to handle input change for text fields
  const handleOnChange = (e) => {
    const { name, value } = e.target

    // Updating form data state
    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  // Function to handle image file upload
  const handleUploadProduct = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    try {
      const uploadImageCloudinary = await uploadImage(file)
      const imageUrl = uploadImageCloudinary.url
      if (!imageUrl) {
        throw new Error('No image URL returned from upload')
      }
      setData((preve) => {
        return {
          ...preve,
          productImage: [...preve.productImage, imageUrl]
        }
      })
      toast.success('Image uploaded')
    } catch (err) {
      const message = err?.message || 'Failed to upload image'
      toast.error(message)
    }
  }

  // Function to handle deleting an uploaded image
  const handleDeleteProductImage = async (index) => {
    console.log("image index", index)

    // Creating a new array by removing the selected image
    const newProductImage = [...data.productImage]
    newProductImage.splice(index, 1)

    // Updating the productImage state
    setData((preve) => {
      return {
        ...preve,
        productImage: [...newProductImage]
      }
    })
  }

  // Function to handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault()  // Preventing the default form submission
  
    const response = await fetch(SummaryApi.updateProduct.url, {
      method : SummaryApi.updateProduct.method,
      credentials : 'include',
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(data)
    })
      const responseData = await response.json()
      
      if(responseData.success){
        toast.success(responseData?.message)
        onClose()
        fetchdata()
      }

      if(responseData.error){
        toast.error(responseData?.message)
      }



  }
  return (
    <div className='fixed bg-slate-900 bg-opacity-50 flex justify-center mt-10 items-center 
     w-full h-full bottom-0 top-0 left-0 right-0 z-[100]'>
        <div className='bg-white rounded-2xl p-6 w-full max-w-2xl h-full max-h-[85%]
        overflow-hidden shadow-2xl border border-gray-100'>
            {/* Modal header with close button */}
            <div className='flex justify-between items-center pb-4 border-b border-gray-100'>
                <h2 className='font-bold text-xl text-gray-800'>Edit Product</h2> 
                <div className='w-fit cursor-pointer ml-auto 
                text-2xl text-gray-400 hover:text-red-600 transition-colors' onClick={onClose}>
                    <CgClose/>  {/* Close modal icon */}
                </div>
            </div>

            {/* Form for editing product */}
            <form className='grid p-2 gap-4 overflow-y-scroll h-full pb-10 custom-scrollbar' onSubmit={handleSubmit}>
              {/* Input field for product name */}
              <div className='flex flex-col gap-1'>
                <label htmlFor='productName' className='text-sm font-semibold text-gray-700'>Product Name</label>
                <input 
                  type='text' 
                  id='productName' 
                  placeholder='Enter Product name' 
                  name='productName'
                  value={data.productName}
                  onChange={handleOnChange}
                  className='p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-all'
                  required
                />
              </div>

              {/* Input field for brand name */}
              <div className='flex flex-col gap-1 mt-1'>
                <label htmlFor='brandName' className='text-sm font-semibold text-gray-700'>Brand Name</label>
                <input 
                  type='text' 
                  id='brandName' 
                  placeholder='Enter Brand Name' 
                  value={data.brandName}
                  name='brandName'
                  onChange={handleOnChange}
                  className='p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-all'
                  required
                />
              </div>

              {/* Dropdown for selecting product category */}
              <div className='flex flex-col gap-1 mt-1'>
                <label htmlFor='category' className='text-sm font-semibold text-gray-700'>Category</label>
                <select value={data.category} name='category' onChange={handleOnChange} className='p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-all'>
                  <option value={""}>Select Category</option>
                  {
                    productCategory.map((el, index) => {
                      return (
                        <option value={el.value} key={el.value + index}>{el.value}</option>
                      )
                    })
                  }
                </select>
              </div>

                {/* Dropdown for selecting product SUB category */}
              <div className='flex flex-col gap-1 mt-1'>
                <label htmlFor='subCategory' className='text-sm font-semibold text-gray-700'>Sub Category</label>
                <select value={data.subCategory} name='subCategory' onChange={handleOnChange} 
                className='p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-all'>
                  <option value={""}>Select Sub Category</option>
                  {
                    productSubCategory.map((el, index) => {
                      return (
                        <option value={el.value} key={el.value + index}>{el.value}</option>
                      )
                    })
                  }
                </select>
              </div>

                {/* Dropdown for selecting product deal */}
              <div className='flex flex-col gap-1 mt-1'>
                <label htmlFor='hotDeal' className='text-sm font-semibold text-gray-700'>Hot Deal</label>
                <select value={data.hotDeal} name='hotDeal' onChange={handleOnChange} 
                className='p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-all'>
                  <option value={""}>Select Deal</option>
                  {
                    productDeal.map((el, index) => {
                      return (
                        <option value={el.value} key={el.value + index}>{el.value}</option>
                      )
                    })
                  }
                </select>
              </div>

              {/* File upload section for product image */}
              <div className='flex flex-col gap-1 mt-1'>
                <label htmlFor='productImage' className='text-sm font-semibold text-gray-700'>Product Image</label>
                <label htmlFor='uploadImageInput'>
                  <div className='p-4 cursor-pointer bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl h-32 w-full flex justify-center items-center hover:bg-gray-100 transition-all'>
                    <div className='text-gray-400 flex justify-center items-center flex-col gap-2'>
                      <span className='text-4xl'> <FaCloudUploadAlt /></span>  {/* Cloud upload icon */}
                      <p className='text-sm font-medium'>Upload Product Image</p>
                      <input type='file' id='uploadImageInput' className='hidden'
                        onChange={handleUploadProduct}/>  {/* Hidden file input */}
                    </div>
                  </div>
                </label>
              </div>

              {/* Display uploaded images */}
              <div className='mt-2'>
                {
                  data?.productImage[0] ? (
                    <div className='flex items-center gap-3 flex-wrap'>
                      {
                        data.productImage.map((el, index) => {
                          return (
                            <div className='relative group' key={index}>
                              <img src={el} 
                                alt={el}
                                width={80} 
                                height={80} 
                                className='bg-gray-50 border border-gray-100 rounded-lg cursor-pointer hover:scale-105 transition-transform' 
                                onClick={() => {
                                  setOpenFullScreenImage(true)
                                  setFullScreenImage(el)
                                }}/>
                              <div className='absolute bg-red-500 rounded-full
                               -top-2 -right-2 p-1.5 text-white shadow-md hover:bg-red-600 transition-colors cursor-pointer'
                               onClick={() => handleDeleteProductImage(index)}>
                                <MdDelete className='text-xs'/>  {/* Delete icon */}
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  ) : (
                    <p className='text-red-500 text-xs font-medium'>*Please Upload Product Image</p>
                  )
                }
              </div>

              {/* Input fields for price and selling price */}
              <div className='flex flex-col gap-1 mt-1'>
                <label htmlFor='price' className='text-sm font-semibold text-gray-700'>Price :</label>
                <input 
                  type='number' 
                  id='price' 
                  placeholder='Enter Price' 
                  value={data.price}
                  name='price'
                  onChange={handleOnChange}
                  className='p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-all'
                />
              </div>

              <div className='flex flex-col gap-1 mt-1'>
                <label htmlFor='sellingPrice' className='text-sm font-semibold text-gray-700'>Selling Price :</label>
                <input 
                  type='number' 
                  id='sellingPrice' 
                  placeholder='Enter Selling Price' 
                  value={data.sellingPrice}
                  name='sellingPrice'
                  onChange={handleOnChange}
                  className='p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-all'
                />
              </div>

               {/* Input fields for item left  */}
              <div className='flex flex-col gap-1 mt-1'>
                <label htmlFor='item' className='text-sm font-semibold text-gray-700'>Item :</label>
                <input 
                  type='number' 
                  id='item' 
                  placeholder='Enter Item Left' 
                  value={data.item}
                  name='item'
                  onChange={handleOnChange}
                  className='p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-all'
                />
              </div>

              {/* Text area for product description */}
              <div className='flex flex-col gap-1 mt-1'>
                <label htmlFor='description' className='text-sm font-semibold text-gray-700'>Description :</label>
                <textarea className='h-28 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-all resize-none p-3' 
                  placeholder='Enter Product Description' rows={3}
                  onChange={handleOnChange} name='description'
                  value={data.description}>
                </textarea>
              </div>

                {/* Dropdown for selecting product status */}
              <div className='flex flex-col gap-1 mt-1'>
                <label htmlFor='productStatus' className='text-sm font-semibold text-gray-700'>Product Status</label>
                <select value={data.productStatus} name='productStatus' onChange={handleOnChange} 
                className='p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-all'>
                  <option value={""}>Select Product Status</option>
                  {
                    productStatus.map((el, index) => {
                      return (
                        <option value={el.value} key={el.value + index}>{el.value}</option>
                      )
                    })
                  }
                </select>
              </div>

               {/* Input field for seller details */}
              <div className='flex flex-col gap-1 mt-1'>
                <label htmlFor='sellerName' className='text-sm font-semibold text-gray-700'>Seller Name</label>
                <input 
                  type='text' 
                  id='sellerName' 
                  placeholder='Enter Seller Name' 
                  value={data.sellerName}
                  name='sellerName'
                  onChange={handleOnChange}
                  className='p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-all'
                  required
                />
              </div>

              <div className='flex flex-col gap-1 mt-1'>
                <label htmlFor='sellerBrandName' className='text-sm font-semibold text-gray-700'>Seller Brand Name</label>
                <input 
                  type='text' 
                  id='sellerBrandName' 
                  placeholder='Enter Seller Brand Name' 
                  value={data.sellerBrandName}
                  name='sellerBrandName'
                  onChange={handleOnChange}
                  className='p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-all'
                  required
                />
              </div>

              <div className='flex flex-col gap-1 mt-1'>
                <label htmlFor='sellerPhoneNumber' className='text-sm font-semibold text-gray-700'>Seller Phone Number</label>
                <input 
                  type='text' 
                  id='sellerPhoneNumber' 
                  placeholder='Enter Seller Phone Number' 
                  value={data.sellerPhoneNumber}
                  name='sellerPhoneNumber'
                  onChange={handleOnChange}
                  className='p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-all'
                  required
                />
              </div>

              {/* Submit button */}
              <button className='px-6 py-3 rounded-full font-bold text-white mb-10 bg-red-600 hover:bg-red-700 transition-all shadow-md hover:shadow-lg active:scale-95 mt-4'>
                Update Product
              </button>
            </form>

        </div>
      
      {/* Display fullscreen image */}
      {
        openFullScreenImage && (
          <DisplayImage onClose={() => setOpenFullScreenImage(false)} 
            imgUrl={fullScreenImage}/>
        )
      }
    </div>
)

}

export default AdminEditProduct