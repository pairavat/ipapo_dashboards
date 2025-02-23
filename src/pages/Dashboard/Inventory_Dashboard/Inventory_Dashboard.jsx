// Dashboard.jsx - Main dashboard layout
import React from 'react';

import MetricsAttendanceRow from "../../../components/MetricsRow/MetricsAttendanceRow"
import AttendanceChart from '../../../components/AttendanceChart/AttendanceChart';
import LeaveRequestTable from '../../../components/LeaveRequestTable/LeaveRequestTable';
import LocationSection from '../../../components/LocationSection/LocationSection';
import ToursTaken from '../../../components/ToursTaken/ToursTaken';
import ActiveSites from '../../../components/ActiveSites/ActiveSites';
import IndiaMap from '../../../components/indianOfficeMap/IndiaMap'
const Inventory_Dashboard = () => {
  return (
    <div className="bg-[#E8E8E8] min-h-screen">
 
      {/* Main Content */}
      <main className="p-4">
        {/* Metrics Row */}
        <MetricsAttendanceRow />
        
        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <AttendanceChart />
          <LeaveRequestTable />
        </div>
        
        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {/* <LocationSection /> */}
          <IndiaMap/>
          <ToursTaken />
          {/* <DemographicCard /> */}
          <ActiveSites />
        </div>
      </main>
    </div>
  );
};

export default Inventory_Dashboard;