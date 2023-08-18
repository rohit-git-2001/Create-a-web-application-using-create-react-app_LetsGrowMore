import React, { useState } from 'react';

const UserDisplay = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  return (
    <div>
      <button onClick={fetchUsers}>Fetch Users</button>
      <div>
        {users.map(user => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDisplay;
