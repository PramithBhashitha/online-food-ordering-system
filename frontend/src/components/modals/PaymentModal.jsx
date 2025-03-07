import React, { useState } from "react";
import { useMakePaymentMutation } from "../../store/api/paymentApi";

const PaymentModal = ({ isOpen, onClose, subtotal }) => {
  const [address, setAddress] = useState("");
  const [paymentMode, setPaymentMode] = useState("Cash on Delivery");
  const [makePayment, { isLoading }] = useMakePaymentMutation();

  const handlePayment = async () => {
    if (!address.trim()) {
      alert("Please enter a delivery address.");
      return;
    }

    try {
      await makePayment({ address, amount: subtotal, paymentMode }).unwrap();
      alert("Payment successful!");
      onClose(); // Close the modal after payment
      window.location.reload(); // Reload the page to reset the cart
    } catch (error) {
      console.error("Payment failed", error);
      alert("Payment failed. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 ">
        <h2 className="text-xl font-semibold mb-4">Complete Your Payment</h2>

        {/* Payment Mode Selection */}
        <div className="mb-4">
          <p className="font-medium mb-2">Select Payment Mode:</p>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              value="Cash on Delivery"
              checked={paymentMode === "Cash on Delivery"}
              onChange={(e) => setPaymentMode(e.target.value)}
              className="mr-2"
            />
            Cash on Delivery
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="Card"
              checked={paymentMode === "Card"}
              onChange={(e) => setPaymentMode(e.target.value)}
              className="mr-2"
            />
            Card
          </label>
        </div>

        {/* Address Input */}
        <div className="mb-4">
          <label className="font-medium block mb-1">Delivery Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your address"
          />
        </div>

        {/* Subtotal */}
        <p className="text-lg font-semibold mb-4">Subtotal: ${subtotal}</p>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 outline-none"
          >
            Cancel
          </button>
          <button
            onClick={handlePayment}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 outline-none"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Make Payment"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;

