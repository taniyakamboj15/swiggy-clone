import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { useDispatch } from "react-redux";
import { clearItem } from "../utils/cartslice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IMAGE_URL } from "../constants/imageAdd";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [cartTotal, setCartTotal] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(50);

  useEffect(() => {
    const total = cartItems.reduce((sum, c) => {
      const price =
        c.description.price / 100 || c.description.defaultPrice / 100;
      return sum + c.quantity * price;
    }, 0);
    setCartTotal(total);
  }, [cartItems]);

  return (
    <div className='p-6 lg:p-12 mt-16'>
      {cartItems.length === 0 ? (
        <div className='text-center py-20'>
          <h2 className='text-2xl font-bold text-gray-700'>
            Your cart is empty!
          </h2>
          <p className='text-gray-500 mt-2'>
            Start adding items to your cart to see them here.
          </p>
          <button className='mt-4 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600'>
            <Link to='/'> Start Buying </Link>
          </button>
        </div>
      ) : (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Cart Details */}
          <div className='lg:col-span-2 bg-white p-6 rounded-md shadow-md'>
            <h1 className='text-2xl font-semibold mb-4'>Shopping Cart</h1>
            {cartItems.map((c, index) => (
              <div
                key={index}
                className='flex items-center justify-between border-b pb-4 mb-4'
              >
                <div className='flex items-center'>
                  <img
                    src={IMAGE_URL + c.description.imageId}
                    alt={c.description.name}
                    className='w-20 h-20 object-cover rounded-md'
                  />
                  <div className='ml-4'>
                    <h3 className='text-lg font-semibold'>
                      {c.description.name}
                    </h3>
                    <p className='text-sm text-gray-500 mt-1'>
                      {c.description.description || "No description available."}
                    </p>
                    <button className='text-sm text-red-500 mt-2 hover:underline'>
                      Remove
                    </button>
                  </div>
                </div>
                <div className='text-center'>
                  <div className='flex items-center'>
                    <button className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300'>
                      -
                    </button>
                    <span className='mx-2 text-lg'>{c.quantity}</span>
                    <button className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300'>
                      +
                    </button>
                  </div>
                  <p className='text-sm text-gray-500 mt-2'>
                    ₹
                    {(c.description.price / 100 ||
                      c.description.defaultPrice / 100) * c.quantity}
                  </p>
                </div>
              </div>
            ))}
            <button className='text-purple-600 mt-4 hover:underline'>
              {" "}
              <Link to='/'> ← Continue Shopping</Link>
            </button>
          </div>

          {/* Order Summary */}
          <div className='bg-gray-100 p-6 rounded-md shadow-md'>
            <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
            <div className='flex justify-between items-center mb-4'>
              <span className='text-sm font-medium'>Items</span>
              <span className='text-sm font-medium'>{cartItems.length}</span>
            </div>
            <div className='flex justify-between items-center mb-4'>
              <span className='text-sm font-medium'>Shipping</span>
              <select
                name='promo'
                onChange={(e) => setDeliveryCharge(e.target.value)}
                className='border rounded-md px-2 py-1'
              >
                <option value='50'>Standard Delivery - ₹50</option>
                <option value='100'>Express Delivery - ₹100</option>
              </select>
            </div>
            <div className='mb-4'>
              <label
                htmlFor='promo-code'
                className='text-sm font-medium text-gray-600'
              >
                Promo Code
              </label>
              <div className='flex mt-2'>
                <input
                  id='promo-code'
                  type='text'
                  className='flex-1 border rounded-l-md px-2 py-1'
                  placeholder='Enter your code'
                />
                <button className='bg-red-500 text-white px-4 rounded-r-md hover:bg-red-600'>
                  Apply
                </button>
              </div>
            </div>
            <div className='flex justify-between items-center mb-4'>
              <span className='text-lg font-semibold'>Total Cost</span>
              <span className='text-lg font-semibold text-orange-500'>
                ₹{cartTotal + parseInt(deliveryCharge)}
              </span>
            </div>
            <button className='w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700'>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
