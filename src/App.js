import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./styles/app.css";
import Dashboard from './Dashboard';
import Login from './Login';  
import TimeIn from './TimeIn';
import Employee from './Employee';
import NewEmployee from './NewEmployee';
import Verification from './Verification';
import TimeSheet from './TimeSheet';
// import Sidebar from './Sidebar';
// import DashboardData from './dashboard_data';
// import Sidebar from './Sidebar';


function App() {
  
  return (
   

      <Routes>
        {/* <div> 
        <Sidebar/> 
          <div className='content'> */}
        <Route path='/*' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/timein' element={<TimeIn />} /> 
        <Route path='/employee' element={<Employee />} /> 
        <Route path='/newemployee' element={<NewEmployee />} /> 
        <Route path='/Verification' element={<Verification />} /> 
        <Route path='/TimeSheet' element={<TimeSheet />} /> 
        {/* </div>
        </div> */}
       </Routes>
    //  {/* </Sidebar> */}
    

  )
}

export default App;

