import React, { useState, useEffect } from 'react';
import './App.css';

function Loginout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // Check if the user is already logged in (simulated with localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setUsername(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const user = e.target.username.value;
    if (user) {
      setUsername(user);
      setIsLoggedIn(true);
      localStorage.setItem('username', user); // Store username in localStorage
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('username'); // Remove username from localStorage
  };

  return (
    <div className="App">
      <h1>React Login / Logout Example</h1>

      {isLoggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <form onSubmit={handleLogin}>
            <label>
              Username:
              <input type="text" name="username" required />
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Loginout;
