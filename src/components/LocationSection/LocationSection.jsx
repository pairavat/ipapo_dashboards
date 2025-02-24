// components/LocationSection.jsx
import React from 'react';

const LocationSection = () => {
  return (
    <div className="bg-white p-6 rounded-md">
      <div className="flex gap-2 mb-6">
        <h2 className="text-lg font-medium">Live Location</h2>
        <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm">
          Office Address
        </div>
        <div className="flex items-center text-sm text-gray-500">
          Last 7 Days
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      <div className="flex justify-center items-center h-48 font-bold text-3xl text-center">
        MAP<br/>SHOWING LIVE<br/>LOCATION
      </div>
    </div>
  );
};

export default LocationSection;