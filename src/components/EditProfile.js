import React, { useState, useEffect } from 'react';

const EditProfile = ({ user, onSave }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  // Use useEffect to update editedUser when the user prop changes
  useEffect(() => {
    setEditedUser({ ...user });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a PUT request to update the user's profile
    try {
      const response = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedUser),
      });

      if (response.ok) {
        onSave(editedUser);
        alert('Profile updated successfully');
      } else {
        alert('Failed to update the profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update the profile');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={editedUser.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={editedUser.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={editedUser.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditProfile;
