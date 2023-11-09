import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ViewProfile = () => {
  const [users, setUsers] = useState(null);
    // fetch api data
  useEffect(() => {
    console.log("Fetching data...");
    fetch('http://localhost:3000/users?random=' + Math.random())
      .then((resp) => resp.json())
      .then((result) => {
        console.log("Received data:", result);
        setUsers(result);
      })

      // to handle errors
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="profile container mt-5">
      <h2 className="text-center">User Profile</h2>
      {users ? (
        <table className="table table-bordered">
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
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.username}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.phone}</td>
                <td className="p-2">{user.address}</td>
                <td className="p-2">
                  <Link  className="btn btn-success"  to={{
          pathname: `/editprofile/${user.id}` ,
        }}> Edit Profile</Link>
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
