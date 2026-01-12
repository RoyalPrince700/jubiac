import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import { Link } from 'react-router-dom';
import { BiCategoryAlt } from 'react-icons/bi';

const CategoryDropdown = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categoryLoading = new Array(13).fill(null); // Display a placeholder before categories load

  const fetchCategoryProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(SummaryApi.categoryProduct.url);
      const dataResponse = await response.json();
      setCategoryProduct(dataResponse.data || []); // Fallback to empty array if no data
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  return (
    <div className="relative">
      {/* Trigger for dropdown */}
      <div
        className="flex gap-2 items-center cursor-pointer hover:text-red-600"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <BiCategoryAlt className="text-xl text-white" />
        <p className="text-[14px] text-white font-semibold">All Categories</p>
      </div>

      {/* Dropdown content */}
      {isDropdownOpen && (
        <div
          className="absolute top-full left-0 w-64 bg-white shadow-lg p-4 rounded-md overflow-auto max-h-80"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <div className="flex flex-col gap-4">
            {loading
              ? categoryLoading.map((_, index) => (
                  <div
                    className="h-12 w-full rounded-md bg-slate-200 animate-pulse"
                    key={`categoryLoading-${index}`}
                  ></div>
                ))
              : categoryProduct.map((product, index) => (
                  <Link
                    to={`/product-category?category=${product?.category}`}
                    className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md"
                    key={product?.category || `product-${index}`} // Fallback key
                  >
                    <div className="w-10 h-10 rounded-md overflow-hidden bg-slate-200 flex items-center justify-center">
                      {product?.productImage?.[0] ? ( // Check if productImage exists and has at least one element
                        <img
                          src={product.productImage[0]}
                          alt={product.category || 'Category'}
                          className="h-full object-scale-down mix-blend-multiply"
                        />
                      ) : (
                        <span className="text-xs text-gray-500">No Image</span> // Placeholder for missing image
                      )}
                    </div>
                    <span className="capitalize">{product?.category || 'Unknown'}</span>
                  </Link>
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;






// import React, { useEffect, useState } from 'react'
// import SummaryApi from '../common'
// import { Link } from 'react-router-dom'

// const CategoryList = () => {
//         const [categoryProduct, setCategoryProduct] = useState([])
//         const [loading, setLoading] = useState(false)

//         const categoryLoading = new Array(13).fill(null)  //this line is to display an image before the category image load each time we refresh or login to home page
      
//   const fetchCategoryProduct = async()=>{
//         setLoading(true)
//         const response = await fetch(SummaryApi.categoryProduct.url)
//         const dataResponse = await response.json()
//         setLoading(false)
//         setCategoryProduct(dataResponse.data)

//         }

//         useEffect(()=>{
//             fetchCategoryProduct()
//         },[])
            
// return (
// <div className=' mx-auto px-4'>
//         <div className='flex items-center gap-4 justify-between 
//         overflow-scroll scrollbar-none'>
//         {

//         loading ? ( 
//             //this line is to display an image before the category image load each time we refresh or login to home page
//                 categoryLoading.map((el,index)=>{
//                     return(
//                         <div className='h-16 w-16 md:w-20 md:h-20 rounded-md overflow-hidden
//                         bg-slate-200 animate-pulse' key={"categoryLoading"+index}>
//                         </div>
//                     )
//                 })
//         ) : 
//         (
//             categoryProduct.map((product,index)=>{
//                 return(
//                     //+product?.category is to take the link to each category page
//                     //mix-blend-multiply css takes away the image background
//                     <Link to={"/product-category?category="+product?.category} 
//                     className='cursor-pointer' key={product?.category}>
//                         <div className='md:w-20 md:h-20 rounded-md
//                         w-16 h-16 
//                         overflow-hidden p-4 bg-slate-200 flex items-center 
//                         justify-center'>
//                             <img src={product?.productImage[0]} 
//                             alt={product?.category} 
//                             className='h-full object-scale-down mix-blend-multiply
//                             hover:scale-125 transition-all'/>
                            
//                         </div>
//                         <p className='text-center text-sm 
//                         md:text-base capitalize'>{product?.category}</p>
//                     </Link>
//                 )
//                 })
//         )
           
//         }
//         </div>
// </div>
// )
//     }

// export default CategoryList