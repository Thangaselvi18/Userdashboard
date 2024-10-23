import React, { useState, useEffect } from "react";

const UserForm = ({ saveUser, user }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: true,
  });

  useEffect(() => {
    if (user) {
      setFormData(user); // Pre-fill the form if editing
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (!formData.name || !formData.email) {
      alert("Name and email are required.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // Save the user (either add or update)
    saveUser(formData);
    // Clear the form
    setFormData({ name: "", email: "", phone: "", status: true });
  };

  return (
    <div>
      <h3>{user ? "Edit User" : "Add User"}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
          </select>
        </div>
        <button type="submit">{user ? "Update" : "Add"} User</button>
      </form>
    </div>
  );
};

export default UserForm;
