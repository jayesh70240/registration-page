import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function EditProfile(props) {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [editedUser, setEditedUser] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });
    //  it will save the updated data
  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setEditedUser(data);
      })

      // to handle errors
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  //  send a put request 
    try {
      const response = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedUser),
      });

      if (response.ok) {
        alert('Profile updated successfully');
      } else {
        alert('Failed to update the profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update the profile');
    }
  };
  //  basic form create
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="border bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              className="form-control"
              type="text"
              name="username"
              value={editedUser.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              className="form-control"
              type="text"
              name="phone"
              value={editedUser.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              className="form-control"
              type="text"
              name="address"
              value={editedUser.address}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
