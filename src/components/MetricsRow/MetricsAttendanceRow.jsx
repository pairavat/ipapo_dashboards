import React from 'react';

const MetricCard = ({ title, value, change, isPositive, suffix }) => {
  return (
    <div className="flex-1 min-w-0">
      <div className="text-gray-600 text-sm mb-1">{title}</div>
      <div className="flex items-center gap-2">
        <div className="text-2xl font-semibold">{value}</div>
        {change && (
          <div className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? '+' : ''}{change}{suffix}
          </div>
        )}
      </div>
    </div>
  );
};

const MetricsContainer = () => {
  // Icons
  const userIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
  );
  
  const chartIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
    </svg>
  );
  
  const boxIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className="flex  gap-4">
      {/* First row - Two containers */}
      <div className="flex w-full gap-4">
        {/* First container - Check-ins and No Shows */}
        <div className="flex-[1.5] bg-white rounded-md shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-blue-100 p-2 rounded-md">
                {userIcon}
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                This Week 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="flex gap-4 md:gap-8">
              <MetricCard 
                title="Present" 
                value="1890" 
                change="19.80" 
                isPositive={true} 
                suffix="%" 
              />
              <MetricCard 
                title="Absent" 
                value="20" 
                change="85" 
                isPositive={false} 
                suffix="%" 
              />
            </div>
          </div>
        </div>
        
        {/* Second container - Ongoing Projects and Sales Visit */}
        <div className= " flex-[1.5] bg-white rounded-md shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-blue-100 p-2 rounded-md">
                {chartIcon}
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                This Week
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="flex gap-4 md:gap-8">
              <MetricCard 
                title="Late Arrivals" 
                value="4,006" 
              />
              <MetricCard 
                title="On - Time Rate" 
                value="45" 
                change="20.00" 
                isPositive={true} 
                suffix="%" 
              />
            </div>
          </div>
        </div>


     {/* Third Container - Inventory container */}
     <div className="flex-[2] bg-white rounded-md shadow-sm overflow-hidden">
        <div className="p-4">
          <div className="flex justify-between items-start mb-6">
            <div className="bg-blue-100 p-2 rounded-md">
              {boxIcon}
            </div>
            <div className="text-sm text-gray-500 flex items-center gap-1">
              This Week
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="flex  md:flex-nowrap gap-4">
            <MetricCard 
              title="Total Working Days" 
              value="300"
            />
            <MetricCard 
              title="Days Present" 
              value="30"
            />
            <MetricCard 
              title="Days Absent" 
              value="11"
            />
          </div>
        </div>
      </div>
      </div>
      
 
    </div>
  );
};

export default MetricsContainer;