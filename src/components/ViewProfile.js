import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ViewProfile = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    console.log("Fetching data...");
    fetch('http://localhost:3000/users?random=' + Math.random())
      .then((resp) => resp.json())
      .then((result) => {
        console.log("Received data:", result);
        setUsers(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className='profile container text-align-center m-5 col-6 border border-3'>
      <h2>User Profile</h2>
      {users ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>
                  <Link to={`/editprofile/${user.id}`}>Edit Profile</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading user profiles...</p>
      )}
    </div>
  );
};

export default ViewProfile;
