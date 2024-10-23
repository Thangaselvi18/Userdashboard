import React, { useState } from "react";
import UserForm from "./UserForm";

const UserList = () => {
  // Hardcoded initial list of users
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890", status: true },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "0987654321", status: false },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", phone: "1112223333", status: true },
    { id: 4, name: "Bob Brown", email: "bob@example.com", phone: "4445556666", status: false },
  ]);

  const [selectedUser, setSelectedUser] = useState(null); // For editing
  const [isEditing, setIsEditing] = useState(false); // Track if editing

  // Add a new user
  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  // Update an existing user
  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setIsEditing(false);
    setSelectedUser(null);
  };

  // Delete a user
  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  // Edit a user
  const editUser = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
  };

  return (
    <div>
      <h2>User List</h2>

      {isEditing ? (
        <UserForm user={selectedUser} saveUser={updateUser} />
      ) : (
        <UserForm saveUser={addUser} />
      )}

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.status ? "Active" : "Inactive"}</td>
              <td>
                <button onClick={() => editUser(user)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
