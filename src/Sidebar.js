import React from 'react';
import './styles/sidebar.css';

const Sidebar = () => {
   return (
      <div className="sidebar">
         <ul className="sidebar-menu">
            <li className="sidebar-item">Admin</li>
            <li className="sidebar-item">Menu</li>
         </ul>
      </div>
   );
};

export default Sidebar;