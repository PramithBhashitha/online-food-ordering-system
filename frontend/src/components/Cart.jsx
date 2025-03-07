import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useUpdateCartMutation, useDeleteCartMutation } from "../store/api/cartApi";

import PaymentModal from "./modals/PaymentModal";

const Cart = ({ cartItem }) => {
    const [updateCart] = useUpdateCartMutation();
    const [deleteCart] = useDeleteCartMutation();
    const [quantity, setQuantity] = useState(cartItem.productQuantity);
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

    const handleUpdateCart = async (newQuantity) => {
        if (newQuantity < 1) {
            return;
        }

        try {
            await updateCart({productQuantity: newQuantity}).unwrap();
            setQuantity(newQuantity);
        } catch (error) {
            console.error("Failed to update cart", error);
            alert("Failed to update product quantity");
        }
    }

    const handleDeleteCart = async () => {
        try {
            await deleteCart().unwrap();
            window.location.reload();
        } catch (error) {
            console.error("Failed to delete cart", error);
            alert("Failed to delete product from cart"); 
        }
    }

  return (
    <div className='bg-white w-full max-w-[350px] shadow-xl px-1 flex flex-col justify-between'>
      <div>
        <h4 className='w-100% text-center mt-8 mb-6 text-2xl font-bold '>Your Basket</h4>
        <hr className='text-gray-300 mb-4'/>
        <div className='flex justify-between px-4'>
            <p className='text-center text-lg font-semibold'>{cartItem.productName}</p>
            <div>
                <div className='flex items-center justify-between mb-2'>
                    <p className='text-lg mr-2.5 font-semibold'>${cartItem.productPrice}</p>
                    <button 
                        className='outline-none cursor-pointer'
                        onClick={handleDeleteCart}
                    >
                        <DeleteIcon className='text-gray-400'/>
                    </button>
                </div>
                <div className='flex justify-between'>
                    <button 
                        className='outline-none cursor-pointer'
                        onClick={() => handleUpdateCart(quantity - 1)}
                        disabled={quantity <= 1}
                    >
                        <RemoveCircleOutlineIcon className='text-red-600'/>
                    </button>
                    <p className='mx-2'>{cartItem.productQuantity}</p>
                    <button 
                        className='outline-none cursor-pointer'
                        onClick={() => handleUpdateCart(quantity + 1)}
                    >
                        <AddCircleOutlineIcon className='text-green-700'/>
                    </button>
                </div>
                
            </div>
        </div>
      </div>  
      <div className='flex flex-col mb-8'>
        <hr className='text-gray-300 mt-4'/>
        <p className='text-center text-lg font-bold mt-4 flex justify-between px-4'>
            <span className=''>Sub total</span>
            <span className=''>${cartItem.productPrice * cartItem.productQuantity}</span>
        </p>
        <button 
            className='bg-green-700 text-white rounded hover:bg-green-800 outline-none cursor-pointer py-2 mt-4 mx-4'
            onClick={() => setPaymentModalOpen(true)}
        >
            Checkout
        </button>
      </div>
      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        subtotal={cartItem.productPrice * cartItem.productQuantity}
      />

    </div>
  )
}

export default Cart;
