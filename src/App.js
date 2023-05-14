import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./styles/app.css";

import Dashboard from './Dashboard';
import Login from './Login';
import DashboardData from './dashboard_data';


function App() {
  return (
    <Routes>
      <Route path='/*' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      {/* <DashboardData /> */}

    </Routes>

  )
}

export default App;

