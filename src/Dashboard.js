import React from "react";
import "./dashboard_data.js";
import Sidebar from "./Sidebar.js";
import MainComponent from "./MainComponent";
import Logout from "./Logout.js";

function Dashboard() {
  // const handleLogout = () => {
    
  //   window.location.assign(<Login />);
  // };
  return (
    <>
    {/* <div className="dashboard"> */}
      <Sidebar />
      <Logout />

      {/* <TimeInLog />
                        <TotalEmployee />
                        <RecentEmployee /> */}
    {/* </div> */}
      <MainComponent />
    </>
  );
}
export default Dashboard;
