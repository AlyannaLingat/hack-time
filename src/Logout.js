// Logout.js

import React from 'react';

function Logout({ onLogout }) {
  const handleLogout = () => {
    // Perform logout logic here
    // Example: Clear authentication tokens or session

    onLogout();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
