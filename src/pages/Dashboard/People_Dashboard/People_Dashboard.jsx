// Dashboard.jsx - Main dashboard layout
import React from 'react';

import MetricsRow from '../../../components/MetricsRow/MetricsRow';
import AttendanceChart from '../../../components/AttendanceChart/AttendanceChart';
import LeaveRequestTable from '../../../components/LeaveRequestTable/LeaveRequestTable';
import LocationSection from '../../../components/LocationSection/LocationSection';
import ToursTaken from '../../../components/ToursTaken/ToursTaken';
import ActiveSites from '../../../components/ActiveSites/ActiveSites';

const People_Dashboard = () => {
  return (
    <div className="bg-[#E8E8E8] min-h-screen">
      {/* Navigation */}
      <nav className="p-4 flex gap-4">
        <a href="#" className="text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </a>
        <a href="#" className="text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </a>
        <a href="#" className="text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </a>
      </nav>

      {/* Main Content */}
      <main className="p-4">
        {/* Metrics Row */}
        <MetricsRow />
        
        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <AttendanceChart />
          <LeaveRequestTable />
        </div>
        
        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <LocationSection />
          <ToursTaken />
          <ActiveSites />
        </div>
      </main>
    </div>
  );
};

export default People_Dashboard;