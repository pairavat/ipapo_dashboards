import React from 'react';

const LeaveRequestTable = () => {
  const requests = [
    { id: 1, name: 'John Doe', leaveType: 'Sick Leave', dateApplied: '12 Feb 2025 - 12:25 am', status: 'Approved' },
    { id: 2, name: 'Jane Smith', leaveType: 'Casual Leave', dateApplied: '13 Feb 2025 - 10:30 am', status: 'Pending' },
    { id: 3, name: 'Alice Johnson', leaveType: 'Annual Leave', dateApplied: '14 Feb 2025 - 09:15 am', status: 'Rejected' },
    { id: 4, name: 'Bob Brown', leaveType: 'Maternity Leave', dateApplied: '15 Feb 2025 - 11:00 am', status: 'Pending' },
    { id: 5, name: 'Charlie Davis', leaveType: 'Paternity Leave', dateApplied: '16 Feb 2025 - 08:45 am', status: 'Approved' },
  ];

  const getStatusClasses = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-50 text-green-600';
      case 'Pending':
        return 'bg-yellow-50 text-yellow-600';
      case 'Rejected':
        return 'bg-red-50 text-red-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-medium mb-4">Leave Requests</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="pb-3 text-left font-medium text-gray-600">
                <div className="flex items-center gap-1">
                  Name
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </th>
              <th className="pb-3 text-left font-medium text-gray-600">
                <div className="flex items-center gap-1">
                  Leave Type
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </th>
              <th className="pb-3 text-left font-medium text-gray-600">
                <div className="flex items-center gap-1">
                  Date Applied
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </th>
              <th className="pb-3 text-left font-medium text-gray-600">
                <div className="flex items-center gap-1">
                  Status
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {requests.map(request => (
              <tr key={request.id} className="border-t border-gray-100">
                <td className="py-3 text-gray-800">{request.name}</td>
                <td className="py-3 text-gray-800">{request.leaveType}</td>
                <td className="py-3 text-gray-800">{request.dateApplied}</td>
                <td className="py-3">
                  <span className={`${getStatusClasses(request.status)} px-3 py-1 rounded-full text-xs font-medium`}>
                    {request.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveRequestTable;
