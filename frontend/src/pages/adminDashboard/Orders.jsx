import React, { useState, useEffect } from "react";
import { useGetAllOrdersQuery, useDeleteOrderMutation } from "../../store/api/orderApi";
import { TextField } from "@mui/material";

const Orders = () => {
  const [search, setSearch] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  
  const { data, isLoading, isError, error } = useGetAllOrdersQuery();
  const [deleteOrder] = useDeleteOrderMutation();

  const orders = data?.payload || [];

  // Handle search filter
  useEffect(() => {
    if (!orders) return; // Avoid unnecessary state updates

    const updatedOrders = search
      ? orders.filter((order) =>
          order.user.toLowerCase().includes(search.toLowerCase())
        )
      : orders;

    setFilteredOrders(updatedOrders);
  }, [search, orders]); // ✅ Only re-run when `search` or `orders` changes

  const handleDelete = async (orderId) => {
    try {
      await deleteOrder(orderId).unwrap();
    } catch (error) {
      console.error("Error deleting order", error);
      alert("Failed to delete order");
    }
  };

  if (isLoading) {
    return <div className="text-center">Loading orders...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Error: {error?.data?.message || "Something went wrong"}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-left mt-2">All Orders</h1>

      <div className="flex justify-between relative w-full mb-4 mt-5">
        <TextField
          label="Search Orders by User"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          className="w-full max-w-sm"
        />
      </div>

      <div className="overflow-x-auto rounded-2xl">
        <table className="w-full bg-white border-collapse rounded-2xl">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">User</th>
              <th className="border px-4 py-2">Delivery Address</th>
              <th className="border px-4 py-2">Product</th>
              <th className="border px-4 py-2">Price ($)</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Amount ($)</th>
              <th className="border px-4 py-2">Payment Mode</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="text-center">
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{order.user}</td>
                <td className="border px-4 py-2">{order.address}</td>
                <td className="border px-4 py-2">{order.product || "N/A"}</td>
                <td className="border px-4 py-2">{order.productPrice || "N/A"}</td>
                <td className="border px-4 py-2">{order.productQuantity || "N/A"}</td>
                <td className="border px-4 py-2">$ {order.Amount}</td>
                <td className="border px-4 py-2">{order.paymentMode}</td>
                <td className="border px-4 py-2">{new Date(order.createdAt).toLocaleString().split(",")[0]}</td>
                <td className="border px-4 py-2">
                  <button 
                    className="bg-red-600 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(order.id)}
                  >
                      Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
