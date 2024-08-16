
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccountSettings = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from the backend
    axios.get('/api/user/details')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching user details!", error);
      });
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('/api/user/update', user)
      .then(response => {
        alert('Details updated successfully');
      })
      .catch(error => {
        console.error("There was an error updating user details!", error);
      });
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobileNo"
            value={user.mobileNo}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default AccountSettings;
