import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../store/api/productApi";
import { useAddProductToCartMutation, useGetCartQuery } from "../store/api/cartApi";
import Cart from "../components/Cart";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom"; // Import useNavigate hook


const defaultImage = "https://adminsc.pizzahut.lk//images/mainmenu/f0ea5de8-e41b-4699-81e8-c60c42f8aef0.jpg"; // Default product image

const Products = () => {
  const { category } = useParams(); // Get category name from the URL
  const { data, isLoading, isError, error } = useGetAllProductsQuery(category);
  const { data: cartData, refetch } = useGetCartQuery();
  const [addProductToCart] = useAddProductToCartMutation();

  const navigate = useNavigate();

  const handleAddToCart = async (productId) => {
    try {
      await addProductToCart({ 
        productId,
        productQuantity: 1, 
      }).unwrap();
      
    } catch (error) {
      console.error("Error adding product to cart", error);
      alert("Failed to add product to cart");
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("accessToken"); 
    navigate("/"); 
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading products...</div>;
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Error loading products: {error?.data?.message || "Something went wrong"}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="container px-4 py-8 mx-auto">
      <div className="flex justify-end">
          <button 
            className="hover:text-red-700 cursor-pointer rounded"
            onClick={handleLogout} // Clear token on logout
          >
            <LogoutIcon/>
          </button>
        </div>
        <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">
          {category}
        </h1>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.payload?.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              <img 
                src={product?.productImageURL || defaultImage} 
                alt={product.productName} 
                className="object-cover mb-4"
              />
              <h2 className="text-lg font-semibold text-center">{product.productName}</h2>
              <p className="text-gray-700 font-medium mt-1 mb-2">$ {product.productPrice}</p>
              <button 
                className="bg-green-700 px-4 py-1.5 rounded text-white font-semibold hover:bg-green-800 outline-none w-full"
                onClick={() => handleAddToCart(product.id)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        
      </div>
      {/* Render Cart only if there are items in the cart */}
      {Object.keys(cartData?.payload || {}).length > 0 && <Cart cartItem={cartData.payload} refetchData={refetch}/>}
    </div>
  );
};

export default Products;
