import React from 'react';
import './styles/sidebar.css';
import { Link } from "react-router-dom";
import { AiOutlineNumber } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiClock } from "react-icons/hi";


const Sidebar = () => {
   return (
      <div className="sidebar">
         <ul className="sidebar-menu">
             <li  className="sidebar-item1">Admin</li>
             <li className="sidebar-item2">Menu</li> 

            <Link to="/TimeIn">   
                <li className="sidebar-menu-item">
                <button class="sidebar-button"><AiOutlineNumber />Number of Time In</button>
                </li>
               </Link> 

               <Link to="/Employee" > 
                <li className="sidebar-menu-item"> 
                <button class="sidebar-button"><IoIosPeople/>Number of Employee</button>
                </li>
                 </Link> 

                <Link to={"/NewEmployee"} >
                <li className="sidebar-menu-item"> 
                <button class="sidebar-button"><MdPeopleAlt/>Top 5 new Employee</button>
                </li>

                </Link> 

               <Link to={"/Verification"} >
                <li className="sidebar-menu-item"> 
                <button class="sidebar-button"><BsFillCheckCircleFill/>Account Verification </button>
                </li>
                </Link> 

                <Link to={"/TimeSheet"} >
                <li className="sidebar-menu-item"> 
                <button class="sidebar-button"><HiClock/>Employee TimeSheet</button>
                </li>
               </Link> 
         </ul>
              {/* <Sidebar />
             <MainCOmponent />  */}

            {/* <TimeInLog />
                        <TotalEmployee />
                        <RecentEmployee /> */}

            {/* <p className='admin1'>Admin</p>
            <p>Menu</p> */}
            
        </div>
    
   );
};

export default Sidebar;