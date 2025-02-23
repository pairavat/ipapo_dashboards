import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SalesOverview = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const salesData = [
    { month: 'Jan', sales: 4000, orders: 240, customers: 150 },
    { month: 'Feb', sales: 3000, orders: 198, customers: 120 },
    { month: 'Mar', sales: 5000, orders: 300, customers: 180 },
    { month: 'Apr', sales: 4500, orders: 270, customers: 165 },
    { month: 'May', sales: 6000, orders: 360, customers: 220 },
    { month: 'Jun', sales: 5500, orders: 330, customers: 200 },
    { month: 'Jul', sales: 7000, orders: 420, customers: 255 },
    { month: 'Aug', sales: 6500, orders: 390, customers: 235 },
    { month: 'Sep', sales: 8000, orders: 480, customers: 290 },
    { month: 'Oct', sales: 7500, orders: 450, customers: 270 },
    { month: 'Nov', sales: 9000, orders: 540, customers: 325 },
    { month: 'Dec', sales: 8500, orders: 510, customers: 310 }
  ];

  const StatCard = ({ title, value, trend, delay }) => (
    <div 
      className={`stat-card bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 hover:text-gray-700 transition-colors duration-300">{title}</p>
          <h3 className="text-xl font-bold animate-value">{value}</h3>
        </div>
        <div className={`text-sm ${trend >= 0 ? 'text-green-500' : 'text-red-500'} trend-indicator`}>
          {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </div>
      </div>
    </div>
  );

  // Custom tooltip for the bar chart
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border">
          <p className="text-sm font-medium">{label}</p>
          <p className="text-sm text-blue-600">
            Sales: ${payload[0].value.toLocaleString()}
          </p>
          <p className="text-sm text-purple-600">
            Orders: {payload[1].value}
          </p>
        </div>
      );
    }
    return null;
  };

  const lineChartOptions = {
    chart: {
      id: 'sales-overview-chart',
      toolbar: {
        show: false
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800
      }
    },
    xaxis: {
      categories: salesData.map(data => data.month)
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    colors: ['#4F46E5'],
    grid: {
      borderColor: '#f3f4f6',
      strokeDashArray: 4
    }
  };

  return (
    <div className="dashboard-container p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-title">Sales Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Revenue" value="$28,450" trend={12.5} delay={100} />
        <StatCard title="Total Orders" value="1,698" trend={8.2} delay={200} />
        <StatCard title="Total Customers" value="1,035" trend={-3.1} delay={300} />
        <StatCard title="Growth Rate" value="15.3%" trend={4.6} delay={400} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Line Chart */}
        <div className={`bg-white rounded-lg shadow p-4 transform transition-all duration-500
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-xl font-bold mb-4">Sales Trend</h2>
          <Chart
            options={lineChartOptions}
            series={[{
              name: 'Sales',
              data: salesData.map(data => data.sales)
            }]}
            type="line"
            height="350"
          />
        </div>

        {/* Bar Chart */}
        <div className={`bg-white rounded-lg shadow p-4 transform transition-all duration-500 delay-200
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-xl font-bold mb-4">Sales & Orders Comparison</h2>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={salesData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: '#6B7280' }}
                  tickLine={false}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <YAxis
                  yAxisId="left"
                  tick={{ fill: '#6B7280' }}
                  tickLine={false}
                  axisLine={{ stroke: '#E5E7EB' }}
                  tickFormatter={(value) => `$${value}`}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  tick={{ fill: '#6B7280' }}
                  tickLine={false}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  yAxisId="left"
                  dataKey="sales"
                  fill="url(#colorGradient1)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40}
                />
                <Bar
                  yAxisId="right"
                  dataKey="orders"
                  fill="url(#colorGradient2)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40}
                />
                <defs>
                  <linearGradient id="colorGradient1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity={0.4} />
                  </linearGradient>
                  <linearGradient id="colorGradient2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0.4} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className={`data-table bg-white rounded-lg shadow p-4 transform transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="text-xl font-bold mb-4">Sales Data</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Month</th>
                <th className="text-left p-2">Sales</th>
                <th className="text-left p-2">Orders</th>
                <th className="text-left p-2">Customers</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((data, index) => (
                <tr key={index} className="table-row-animate border-b hover:bg-gray-50 transition-colors duration-200">
                  <td className="p-2">{data.month}</td>
                  <td className="p-2">${data.sales}</td>
                  <td className="p-2">{data.orders}</td>
                  <td className="p-2">{data.customers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .dashboard-container {
          animation: fadeIn 0.5s ease-in-out;
        }

        .text-title {
          background: linear-gradient(120deg, #4F46E5, #10B981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 8s ease infinite;
        }

        .stat-card {
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .stat-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .stat-card:hover::after {
          transform: translateX(100%);
        }

        .trend-indicator {
          animation: pulse 2s infinite;
        }

        .table-row-animate {
          animation: slideIn 0.5s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-value {
          animation: countUp 1s ease-out forwards;
          opacity: 0;
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .data-table {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .data-table:hover {
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 640px) {
          .stat-card {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SalesOverview;