// components/AttendanceChart.jsx
import React from 'react';

const AttendanceChart = () => {
  return (
    <div className="bg-white p-6 rounded-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">Attendance</h2>
        <div className="text-sm text-gray-500 flex items-center gap-1">
          This Week
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      <div className="flex gap-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
          <span className="text-sm text-gray-600">On Time</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-300"></div>
          <span className="text-sm text-gray-600">On Leave</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
          <span className="text-sm text-gray-600">Late Entry</span>
        </div>
      </div>
      
      <div className="flex justify-center items-center">
        <div className="w-48 h-48 relative">
          {/* This is a simplified donut chart representation */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#4573e3" strokeWidth="20" strokeDasharray="200 251.2" />
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ffcc80" strokeWidth="20" strokeDasharray="50 251.2" strokeDashoffset="-200" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AttendanceChart;