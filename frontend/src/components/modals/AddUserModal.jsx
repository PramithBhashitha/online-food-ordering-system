import React, { useState, useEffect } from "react";
import { useAddUserMutation, useUpdateUserMutation } from "../../store/api/userApi";

const AddUserModal = ({isOpen, onClose, user}) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNo: "",
        username: "",
        password: "",
        address: "",
        roleId: 2, 
      });

    const [addUser, { isLoading: isAdding, isError, error }] = useAddUserMutation();
    const [updateUser, { isLoading: isUpdating}] = useUpdateUserMutation();

    const roles = [
        { id: 1, name: "ADMIN" },
        { id: 2, name: "USER" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await addUser(formData).unwrap();
            console.log("Registration successful:", result);
            formData = {
                firstName: "",
                lastName: "",
                email: "",
                contactNo: "",
                username: "",
                password: "",
                address: "",
                roleId: 2, 
            };
            onClose();
        } catch (err) {
            console.error("Registration failed:", err);
        }
    };

    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">{user ? "Edit User" : "Add New User"}</h2>
        {isError && <p className="text-red-500">{error?.data?.message || "Something went wrong"}</p>}
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                    </label>
                    <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                    </label>
                    <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div>
                    <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700">
                    Contact Number
                    </label>
                    <input
                    type="text"
                    id="contactNo"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                    </label>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                    </label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                    </label>
                    <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={isAdding}
                    className="w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 disabled:bg-indigo-300"
                >
                    {isAdding ? "Registering..." : "Register"}
                </button>
            </form>
        </div>

      
    </div>
  )
}

export default AddUserModal
