// components/AttendanceChart.jsx
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const AttendanceChart = () => {
  // Attendance data
  const attendanceData = [
    { name: 'On Time', value: 65, color: '#3b82f6' },
    { name: 'On Leave', value: 20, color: '#bfdbfe' },
    { name: 'Late Entry', value: 15, color: '#fde047' }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 shadow-md rounded border border-gray-100 text-sm">
          <p className="font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Attendance</h2>
        <div className="text-xs text-gray-500 flex items-center">
          This Week
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      <div className="flex flex-wrap flex-col items-center">
        <div className=" flex gap-4 mb-8 flex-1">
          {attendanceData.map((entry, index) => (
            <div key={index} className="flex items-center mb-2">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-sm text-gray-700">{entry.name}</span>
            </div>
          ))}
        </div>
        
        <div className="flex-shrink-0 w-44 h-44">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={attendanceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {attendanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AttendanceChart;