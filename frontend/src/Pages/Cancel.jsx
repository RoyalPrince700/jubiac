import React from 'react'
import CANCELIMAGE from '../assets/cancelnew.jpg'
import { Link } from 'react-router-dom'

const Cancel = () => {
    return (
        <div  className=' w-full m-2 max-w-md mx-auto flex justify-center flex-col items-center'>
                <img src={CANCELIMAGE}
                
                width={250} height={150}
               className='mix-blend-multiply' />
               
                  <p className='text-red-600 font-bold text-xl'
                  >Payment Cancel</p>
                <Link to={"/cart"} className='p-2 px-3 font-semibold
                 text-red-600 rounded border-2 border-red-600 mt-3
                 hover:bg-red-600 hover:text-white '>Go To Cart</Link>
    
               </div>
      )
}

export default Cancel