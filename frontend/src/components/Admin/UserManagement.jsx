import React, { useState } from "react";

const UserManagement = () => {
  const users = [
    {
      name: "Medhat Nasra",
      email: "user1@gmail.com",
      role: "Admin",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });
  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 ">User Management</h2>
      {/* Add New User Form */}
      <div className="p-6 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-4">Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700"> Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded "
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700"> Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded "
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700"> Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded "
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700"> Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 py-2 px-4 rounded hover:bg-green-600 text-white"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserManagement;
