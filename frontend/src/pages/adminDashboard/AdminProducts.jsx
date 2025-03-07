import React, { useState, useEffect } from "react";
import { useGetAllProductsQuery, useDeleteProductMutation } from "../../store/api/productApi";

import { TextField } from "@mui/material";
import AddProductModal from "../../components/modals/AddProductModal";

const AdminProducts = () => {
  const [search, setSearch] = useState("");
  const [filteredRows, setFilteredRows] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { data, isLoading, isError, error } = useGetAllProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const rows = data?.payload || [];

  const handleSearchChange = (event) => {
    setSearch(event.target.value); 
  };

  useEffect(() => {
    let updatedRows = rows;

    // Filter based on search input
    if (search) {
      updatedRows = rows.filter((row) =>
        row.productName.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredRows(updatedRows); 
  }, [rows, search]);

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId).unwrap();
    } catch (error) {
      console.error("Error deleting product", error);
      alert("Failed to delete product");
    }
  };

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return <div className="text-center">Loading products...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Error: {error?.data?.message || "Something went wrong"}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="text-2xl font-bold text-left mt-2">All Products</h1>
        <div className="flex justify-between relative w-full mb-4 mt-5">
          <TextField
            label="Search Products"
            variant="outlined"
            value={search}
            onChange={handleSearchChange}
            size="small"
            className="w-full max-w-sm border-prm focus:ring-prm focus:border-prm"
          />

          <button 
              className="bg-green-700 text-white font-semibold hover:bg-green-800 !rounded-sm px-3"
              onClick={() => handleAddProduct()}
            >
              Add Product
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto rounded-2xl">
        <table className="w-full bg-white border-collapse rounded-2xl">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Product Name</th>
              <th className="border px-4 py-2">Price ($)</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows?.map((product,index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{product.productName}</td>
                <td className="border px-4 py-2">{product.productPrice}</td>
                <td className="border px-4 py-2">{product.productCategory}</td>
                <td className="border px-4 py-2 flex justify-center gap-2">
                  <button 
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      onClick={() => handleEditProduct(product)}
                    >
                    Edit
                  </button>
                  <button 
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Add Product Modal */}
      <AddProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={selectedProduct}/>
    </div>
  );
};

export default AdminProducts;
