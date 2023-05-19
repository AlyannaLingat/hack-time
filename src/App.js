import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./styles/app.css";
import Dashboard from './Dashboard';
import Login from './Login';  

// import TimeIn from './TimeIn';
// import Sidebar from './Sidebar';
// import DashboardData from './dashboard_data';
// import Sidebar from './Sidebar';


function App() {
  
  return (
   

      <Routes>
        <Route path='/*' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      
       </Routes>
    // </Sidebar>
    

  )
}

export default App;

