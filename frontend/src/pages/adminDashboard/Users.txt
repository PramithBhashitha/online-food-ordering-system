import React, { useState, useEffect } from "react";
import { useGetAllUsersQuery, useDeleteUserMutation } from "../../store/api/userApi";
import { TextField } from "@mui/material";
import AddUserModal from "../../components/modals/AddUserModal";
import { use } from "react";

const Users = () => {
  const [search, setSearch] = useState("");
  const [filteredRows, setFilteredRows] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isError, error} = useGetAllUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const rows = data?.payload || [];

  const handleSearchChange = (event) => {
    setSearch(event.target.value); 
  };

  useEffect(() => {
    let updatedRows = rows;

    // Filter based on search input
    if (search) {
      updatedRows = rows.filter((row) =>
        row.firstName.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredRows(updatedRows); 
  }, [rows, search]);

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId).unwrap();
    } catch (error) {
      console.error("Error deleting user", error);
      alert("Failed to delete user");
    }
  };

  const handleAddUser = () => {
    setIsModalOpen(true);
  }

  return (
    <div className="container mx-auto p-4">
      <>
        <h1 className=''>Users</h1>
        <div className="flex justify-between relative w-full mb-4 mt-5">
          <TextField
                label="Search Users"
                variant="outlined"
                value={search}
                onChange={handleSearchChange}
                size="small"
                className="w-full max-w-sm border-prm focus:ring-prm focus:border-prm"
          />

          <button 
              className="bg-green-700 text-white font-semibold hover:bg-green-800 !rounded-sm px-3"
              onClick={() => handleAddUser()}
            >
              Add User
          </button>
        </div>
      </>

      <div className="overflow-x-auto rounded-2xl">
        <table className="w-full bg-white border-collapse rounded-2xl">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Username</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2 text-center">Address</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows?.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border px-4 py-2">{user?.id}</td>
                <td className="border px-4 py-2">{user?.firstName +" " + user?.lastName}</td>
                <td className="border px-4 py-2">{user?.username}</td>
                <td className="border px-4 py-2">{user?.email}</td>
                <td className="border px-4 py-2">{user?.contactNo}</td>
                <td className="border px-4 py-2 text-left">{user?.address}</td>
                <td className="border px-4 py-2">
                  <div className="flex justify-center gap-2">
                    <button 
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        onClick={() => handleEditProduct(user)}
                      >
                      Edit
                    </button>
                    <button 
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Add User Modal */}
      <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
      
    </div>
  )
}

export default Users
