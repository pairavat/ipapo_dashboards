import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';
import { AlertTriangle, CheckCircle, Clock, Server, Users, Activity, Shield } from 'lucide-react';

// Extended sample data
const incidentData = {
  monthlyStats: [
    { month: 'Jan', incidents: 65, resolved: 55, pending: 10 },
    { month: 'Feb', incidents: 48, resolved: 42, pending: 6 },
    { month: 'Mar', incidents: 72, resolved: 65, pending: 7 },
    { month: 'Apr', incidents: 55, resolved: 48, pending: 7 },
    { month: 'May', incidents: 42, resolved: 38, pending: 4 },
  ],
  currentStats: {
    totalIncidents: 282,
    resolvedIncidents: 248,
    avgResolutionTime: '2.5 hours',
    criticalIncidents: 5,
    teamPerformance: 94
  },
  recentIncidents: [
    { id: 'INC001', title: 'Server Downtime', priority: 'High', status: 'Resolved', time: '2h ago', system: 'Production Server' },
    { id: 'INC002', title: 'Network Latency', priority: 'Medium', status: 'In Progress', time: '3h ago', system: 'Network' },
    { id: 'INC003', title: 'Database Connection Error', priority: 'High', status: 'Pending', time: '4h ago', system: 'Database' },
    { id: 'INC004', title: 'API Performance Issues', priority: 'Medium', status: 'Resolved', time: '5h ago', system: 'API Gateway' },
    { id: 'INC005', title: 'Security Alert', priority: 'High', status: 'In Progress', time: '6h ago', system: 'Security' },
    { id: 'INC006', title: 'Storage Space Warning', priority: 'Low', status: 'Resolved', time: '7h ago', system: 'Storage' },
    { id: 'INC007', title: 'Authentication Service Down', priority: 'High', status: 'Resolved', time: '8h ago', system: 'Auth Service' },
    { id: 'INC008', title: 'Cache System Failure', priority: 'Medium', status: 'Pending', time: '9h ago', system: 'Cache' },
    { id: 'INC009', title: 'Load Balancer Issues', priority: 'Medium', status: 'Resolved', time: '10h ago', system: 'Load Balancer' },
    { id: 'INC010', title: 'SSL Certificate Expiry', priority: 'Low', status: 'In Progress', time: '11h ago', system: 'Security' }
  ]
};

const StatCard = ({ icon: Icon, title, value, change, color }) => (
  <div className="bg-white rounded-lg p-4 shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
      <Icon size={24} className={`${color} opacity-80`} />
    </div>
    <div className="mt-2">
      <span className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
      </span>
      <span className="text-gray-500 text-sm ml-1">vs last month</span>
    </div>
  </div>
);

const IcidenceManagement = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          icon={AlertTriangle}
          title="Total Incidents"
          value={incidentData.currentStats.totalIncidents}
          change={-12}
          color="text-[#456fff]"
        />
        <StatCard
          icon={CheckCircle}
          title="Resolved Incidents"
          value={incidentData.currentStats.resolvedIncidents}
          change={8}
          color="text-green-500"
        />
        <StatCard
          icon={Clock}
          title="Avg Resolution Time"
          value={incidentData.currentStats.avgResolutionTime}
          change={-15}
          color="text-[#456fff]"
        />
        <StatCard
          icon={AlertTriangle}
          title="Critical Incidents"
          value={incidentData.currentStats.criticalIncidents}
          change={-20}
          color="text-red-500"
        />
      </div>

      {/* Main Components Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Component 1: Incident Trend */}
        <div className="bg-white p-4 rounded-lg shadow-md overflow-scroll">
          <h3 className="text-lg font-semibold mb-4">Incident Trends</h3>
          <LineChart width={500} height={300} data={incidentData.monthlyStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="incidents" stroke="#456fff" />
            <Line type="monotone" dataKey="resolved" stroke="#10B981" />
          </LineChart>
        </div>

        {/* Component 2: Resolution Time Analysis */}
        <div className="bg-white p-4 rounded-lg shadow-md overflow-scroll">
          <h3 className="text-lg font-semibold mb-4">Resolution Time Analysis</h3>
          <AreaChart width={500} height={300} data={incidentData.monthlyStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pending" fill="#456fff" stroke="#456fff" />
          </AreaChart>
        </div>

        {/* Component 3: System Health Overview */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">System Health Overview</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div className="flex items-center">
                <Server className="text-[#456fff] mr-2" />
                <span>Production Servers</span>
              </div>
              <span className="px-2 py-1 rounded bg-green-100 text-green-800">Healthy</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div className="flex items-center">
                <Activity className="text-[#456fff] mr-2" />
                <span>API Services</span>
              </div>
              <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-800">Degraded</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div className="flex items-center">
                <Shield className="text-[#456fff] mr-2" />
                <span>Security Systems</span>
              </div>
              <span className="px-2 py-1 rounded bg-green-100 text-green-800">Healthy</span>
            </div>
          </div>
        </div>

        {/* Component 4: Incident Response Metrics */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Incident Response Metrics</h3>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <p className="text-gray-600">Mean Time to Respond</p>
              <div className="flex items-center mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#456fff] h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <span className="ml-2 text-sm font-semibold">15 min</span>
              </div>
            </div>
            <div className="border-b pb-4">
              <p className="text-gray-600">Mean Time to Resolve</p>
              <div className="flex items-center mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#456fff] h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <span className="ml-2 text-sm font-semibold">2.5 hrs</span>
              </div>
            </div>
            <div>
              <p className="text-gray-600">First Response SLA</p>
              <div className="flex items-center mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <span className="ml-2 text-sm font-semibold">90%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Component 5: Recent Incidents */}
        <div className="bg-white p-4 rounded-lg shadow-md lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Recent Incidents</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">System</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {incidentData.recentIncidents.map((incident) => (
                  <tr key={incident.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{incident.id}</td>
                    <td className="px-6 py-4">{incident.title}</td>
                    <td className="px-6 py-4">{incident.system}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        incident.priority === 'High' ? 'bg-red-100 text-red-800' :
                        incident.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {incident.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        incident.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                        incident.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {incident.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{incident.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IcidenceManagement;