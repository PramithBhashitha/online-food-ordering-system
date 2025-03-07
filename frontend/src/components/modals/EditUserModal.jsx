import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { useUpdateUserMutation } from "../../store/api/userApi";
const EditUserModal = ({ isOpen, onClose, user }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    contactNo: "",
    address: "",
  });

  const [updateUser] = useUpdateUserMutation();

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        username: user.username || "",
        email: user.email || "",
        contactNo: user.contactNo || "",
        address: user.address || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      formData.id = user.id;
      console.log("Submitting update:", { id: user.id, ...formData }); // Debugging
      const response = await updateUser(formData).unwrap();
      console.log("Update Response:", response); // Debugging
      alert("User updated successfully!");
      onClose();
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user: " + (error?.data?.message || "Unknown error"));
    }
  };
  

  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="edit-user-modal">
      <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-lg font-bold mb-4">Edit User</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} fullWidth />
          <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} fullWidth />
          <TextField label="Username" name="username" value={formData.username} onChange={handleChange} fullWidth />
          <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth />
          <TextField label="Contact No" name="contactNo" value={formData.contactNo} onChange={handleChange} fullWidth />
          <TextField label="Address" name="address" value={formData.address} onChange={handleChange} fullWidth />
          <div className="flex justify-end gap-2 mt-4">
            <Button onClick={onClose} variant="outlined" color="secondary">Cancel</Button>
            <Button type="submit" variant="contained" color="primary">Save</Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
