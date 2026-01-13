import React, { useEffect, useState } from 'react'
import SUCCESSIMAGE from '../assets/success.gif'
import { Link, useLocation } from 'react-router-dom'
import SummaryApi from '../common'
import { toast } from 'react-toastify'


const Success = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyPayment = async () => {
      const searchParams = new URLSearchParams(location.search);
      const transaction_id = searchParams.get('transaction_id');
      const status = searchParams.get('status');

      console.log('[SUCCESS PAGE] 🎯 Page loaded with params:', { transaction_id, status });

      if (status === 'successful' && transaction_id) {
        console.log('[SUCCESS PAGE] ✅ Payment successful, calling verifyPayment API for transaction:', transaction_id);
        try {
          const response = await fetch(SummaryApi.verifyPayment.url, {
            method: SummaryApi.verifyPayment.method,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ transaction_id }),
            credentials: 'include'
          });

          const data = await response.json();
          console.log('[SUCCESS PAGE] 📡 API Response:', data);

          if (data.success) {
            console.log('[SUCCESS PAGE] 🎉 Order confirmed successfully - emails should be sent!');
            toast.success("Order confirmed!");
          } else {
            console.log('[SUCCESS PAGE] ❌ Order confirmation failed:', data.message);
            toast.error(data.message || "Failed to confirm order");
          }
        } catch (error) {
          console.error("[SUCCESS PAGE] ❌ Verification API error:", error);
          toast.error("Error confirming order");
        }
      } else {
        console.log('[SUCCESS PAGE] ⚠️ Payment not successful or missing transaction_id:', { status, transaction_id });
      }
      setLoading(false);
    };

    verifyPayment();
  }, [location]);

  return (
    <div className=' w-full m-2 max-w-md mx-auto flex justify-center flex-col items-center'>
      <img src={SUCCESSIMAGE}

        width={250} height={150}
        className='mix-blend-multiply' alt="success" />

      <p className='text-green-600 font-bold text-xl'>
        {loading ? "Verifying Payment..." : "Payment Successful"}
      </p>
      
      {!loading && (
        <Link to={"/order"} className='p-2 px-3 font-semibold
             text-green-600 rounded border-2 border-green-600 mt-3
             hover:bg-green-600 hover:text-white '>See Order</Link>
      )}

    </div>
  )
}

export default Success