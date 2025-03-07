import React from "react";
import { useGetAllCategoryQuery } from "../store/api/categoryApi";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

const Home = () => {
  const { data, isLoading, isError, error } = useGetAllCategoryQuery();
  const navigate = useNavigate(); // Hook for navigation

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading categories...</div>;
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Error loading categories: {error?.data?.message || "Something went wrong"}</p>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("accessToken"); 
    navigate("/"); 
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex justify-end">
          <button 
            className="hover:text-red-700 cursor-pointer rounded"
            onClick={handleLogout} // Clear token on logout
          >
            <LogoutIcon/>
          </button>
        </div>
        <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">Categories</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:w-3/4 items-center justify-center mx-auto">
          {data?.payload?.map((category) => (
            <div
              key={category.id}
              className="p-4 bg-white rounded shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/products/${category.categoryName}`)} // Navigate on click
            >
              <img
                src={category.categoryImage}
                alt={category.categoryName}
                className="w-full h-80 object-cover rounded"
              />
              <h2 className="mt-4 text-lg font-semibold text-gray-800">{category.categoryName}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

