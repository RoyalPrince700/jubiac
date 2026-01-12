import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import moment from 'moment'
import displayNARCurrency from '../helpers/displayCurrency'
import { useSocket } from '../context/SocketContext'
import { toast } from 'react-toastify'

const OrderPage = () => {
  const [data, setData] = useState([])
  const { socket } = useSocket()

  const fetchOrderDetails = async () => {
    try {
      const response = await fetch(SummaryApi.payondeliveryorder.url, {
        method: SummaryApi.payondeliveryorder.method,
        credentials: 'include'
      })

      const responseData = await response.json()
      if (responseData.success) {
        setData(responseData.data)
      } else {
        setData([])
      }
    } catch (err) {
      console.error('Failed to fetch user orders', err)
      setData([])
    }
  }

  useEffect(() => {
    fetchOrderDetails()
  }, [])

  // Listen for real-time order status updates
  useEffect(() => {
    if (!socket) return

    const handleOrderStatusChange = (updateData) => {
      console.log('Order status changed:', updateData)

      // Update the local orders state
      setData((prevOrders) =>
        prevOrders.map((order) =>
          order._id === updateData.orderId
            ? { ...order, status: updateData.newStatus }
            : order
        )
      )

      // Show a toast notification
      toast.info(`Order #${updateData.orderId.slice(-6)} status updated to ${updateData.newStatus}`, {
        position: "top-right",
        autoClose: 5000,
      })
    }

    socket.on('order-status-changed', handleOrderStatusChange)

    // Cleanup listener on unmount
    return () => {
      socket.off('order-status-changed', handleOrderStatusChange)
    }
  }, [socket])

  return (
    <div className="container mx-auto mt-12 px-4">
      <h1 className="text-2xl font-bold mb-5">My Orders</h1>
      {!data.length ? (
        <p className="text-center text-lg text-gray-500">No orders available.</p>
      ) : (
        <div className="space-y-6">
          {data.map((item) => (
            <div key={item._id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3">
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    <span className="font-medium text-gray-700">Order Id:</span> {item._id}
                  </p>
                  <p className="text-sm text-gray-500 mb-1">
                    <span className="font-medium text-gray-700">Order Placed:</span> {moment(item.createdAt).format('LL')}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className={`font-semibold ${item.status === 'Delivered' ? 'text-green-600' : 'text-yellow-600'}`}>{item.status}</span>
                  </p>
                </div>
                <p className="text-lg font-semibold text-gray-800">Total: {displayNARCurrency(item.totalPrice)}</p>
              </div>

              <div className="grid gap-4 mb-6">
                {item.cartItems.map((product) => (
                  <div key={product._id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                    <img 
                      src={product?.productId?.productImage?.[0] || 'https://via.placeholder.com/100'} 
                      alt={product?.productId?.productName || 'Product'} 
                      className="w-20 sm:w-20 sm:h-20 h-20 object-contain border rounded-lg" 
                    />
                    <div className="w-full">
                      <p className="text-sm lg:text-base font-medium text-gray-800 line-clamp-2">
                        {product?.productId?.productName || "Product details loading..."}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Quantity: {product?.quantity}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Price: {product?.productId?.sellingPrice ? displayNARCurrency(product.productId.sellingPrice) : "N/A"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-sm font-semibold mb-2 text-gray-700">Shipping Address</h3>
                <p className="text-sm text-gray-600">{item.address}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default OrderPage