// Logout.js
import React from 'react';
import Login from './Login';

function Logout() {
  const handleLogout = () => {
    window.location.assign(<Login />);

    // onLogout();
  };

  return (
    <div>
      <button onClick={handleLogout} className='logout'>Logout</button>
    </div>
  );
}

export default Logout;
