import SummaryApi from "../common";
import { toast } from 'react-toastify';

const addToCart = async (e, id) => {
  e?.stopPropagation();
  e?.preventDefault();

  try {
    const response = await fetch(SummaryApi.addToCartProduct.url, {
      method: SummaryApi.addToCartProduct.method,
      credentials: 'include',
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify({
        productId: id
      })
    });

    const responseData = await response.json();

    // If response is not okay, show error and stop further execution
    if (!response.ok) {
      toast.error(responseData.message || 'Something went wrong!');
      return;
    }

    // Handle success and error responses based on response data
    if (responseData.success) {
      toast.success(responseData.message);
    } else if (responseData.error) {
      toast.error(responseData.message);
    }
    return  responseData


  } catch (err) {
    // Catch any fetch-related errors
    toast.error('An error occurred. Please try again later.');
    console.error('Error:', err);
  }

    
};

export default addToCart;


/*import SummaryApi from "../common";
import { toast } from 'react-toastify';

const addToCart = async (e, id) => {
  e?.stopPropagation();
  e?.preventDefault();

  try {
    const response = await fetch(SummaryApi.addToCartProduct.url, {
      method: SummaryApi.addToCartProduct.method,
      credentials: 'include',
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify({
        productId: id
      })
    });

    const responseData = await response.json();
    // Check if the response status is OK (200 range)
    if (!response.ok) {
      const errorData = await response.json();
      toast.error(errorData.message || 'Something went wrong!');
      return;
    }

   

    // Handle success and error responses
    if (responseData.success) {
      toast.success(responseData.message);
    } else if (responseData.error) {
      toast.error(responseData.message);
    }
  } catch (err) {
    // Handle any fetch errors
    toast.error('An error occurred. Please try again later.');
    console.error('Error:', err);
  }
};

export default addToCart;*/


/*import SummaryApi from "../common"
import {toast} from 'react-toastify'

const addToCart = async(e,id) =>{
    e?.stopPropagation()
    e?.preventDefault()

    const response = await fetch(SummaryApi.addToCartProduct.url,{
        method : SummaryApi.addToCartProduct.method,
        credentials : 'include',
        headers : {
            "content-type" : 'application/json'
        },
        body : JSON.stringify({
            productId : id
        })
        
    })

    const responseData = await response.json()
    if(responseData.success){
        toast.success(responseData.message)
    }

    if(responseData.error){
        toast.error(responseData.message)
    }

}

export default addToCart*/