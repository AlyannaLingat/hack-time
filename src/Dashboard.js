import React from "react";
import "./dashboard_data.js";
import Sidebar from "./Sidebar.js";
import MainComponent from "./MainComponent";

function Dashboard() {
  return (
    <>
    {/* <div className="dashboard"> */}
      <Sidebar />

      {/* <TimeInLog />
                        <TotalEmployee />
                        <RecentEmployee /> */}
    {/* </div> */}
      <MainComponent />
    </>
  );
}
export default Dashboard;
