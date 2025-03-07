import React, { useState, useEffect } from "react";
import { useAddProductMutation, useUpdateProductMutation } from "../../store/api/productApi";

const AddProductModal = ({ isOpen, onClose, product }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productImageURL, setProductImageURL] = useState("");

  const [addProduct, { isLoading: isAdding, isError, error }] = useAddProductMutation();
  const [updateProduct, { isLoading: isUpdating}] = useUpdateProductMutation();

  const categories = [
    { id: 1, name: "Pizza" },
    { id: 2, name: "Rice" },
    { id: 3, name: "Dessert" },
    { id: 4, name: "Ice Cream" },
    { id: 5, name: "Beverages" },
    { id: 6, name: "Indian" },
  ];

  useEffect(() => {
    if (isOpen) {
        if(product) {
            setProductName(product.productName);
            setProductPrice(product.productPrice);
            setCategoryId(product.categoryId);
            setProductImageURL(product.productImageURL); 
        } else {
            setProductName("");
            setProductPrice("");
            setCategoryId("");
        }
    }
  }, [isOpen, product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        if(product) {
            await updateProduct({ id: product.id, productName, productPrice: Number(productPrice), categoryId: Number(categoryId), productImageURL }).unwrap();
            alert("Product updated successfully!");
        } else {
            await addProduct({ productName, productPrice: Number(productPrice), categoryId: Number(categoryId), productImageURL }).unwrap();
            alert("Product added successfully!");
        }
        onClose(); // Close modal on success
    } catch (err) {
        console.error("Failed to save product", err);
        alert("Error saving product");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-bold mb-4">{product ? "Edit Product" : "Add New Product"}</h2>
        {isError && <p className="text-red-500">{error?.data?.message || "Something went wrong"}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full border p-2 rounded mb-2 outline-none"
            required
          />
          <input
            type="text"
            placeholder="Product Image URL"
            value={productImageURL}
            onChange={(e) => setProductImageURL(e.target.value)}
            className="w-full border p-2 rounded mb-2 outline-none"
            required
          />
          <input
            type="number"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="w-full border p-2 rounded mb-2 outline-none"
            required
          />
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="w-full border p-2 rounded mb-2 outline-none"
            required
          >
            <option value="" disabled>Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded mx-2">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded" disabled={isAdding || isUpdating}>
            {isAdding || isUpdating ? "Saving..." : product ? "Update Product" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
