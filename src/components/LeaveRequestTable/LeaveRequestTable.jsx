// components/LeaveRequestTable.jsx
import React from 'react';

const LeaveRequestTable = () => {
  const orders = [
    { id: 1, orders: 10, total: '₹250,000.00', date: '12 Aug 2022 - 12:25 am', status: 'Active' },
    { id: 2, orders: 10, total: '₹250,000.00', date: '12 Aug 2022 - 12:25 am', status: 'Active' },
    { id: 3, orders: 10, total: '₹250,000.00', date: '12 Aug 2022 - 12:25 am', status: 'Active' },
    { id: 4, orders: 10, total: '₹250,000.00', date: '12 Aug 2022 - 12:25 am', status: 'Active' },
    { id: 5, orders: 10, total: '₹250,000.00', date: '12 Aug 2022 - 12:25 am', status: 'Active' },
  ];

  return (
    <div className="bg-white p-6 rounded-md">
      <h2 className="text-lg font-medium mb-6">Leave Request</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left pb-3 font-medium text-gray-500 flex items-center gap-1">
                Orders
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </th>
              <th className="text-left pb-3 font-medium text-gray-500 flex items-center gap-1">
                Order Total
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </th>
              <th className="text-left pb-3 font-medium text-gray-500 flex items-center gap-1">
                Customer Since
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </th>
              <th className="text-left pb-3 font-medium text-gray-500 flex items-center gap-1">
                Status
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-b">
                <td className="py-4">{order.orders}</td>
                <td className="py-4">{order.total}</td>
                <td className="py-4">{order.date}</td>
                <td className="py-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                    {order.status}
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
