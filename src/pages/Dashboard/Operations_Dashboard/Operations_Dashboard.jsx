import React from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { Users, TrendingUp, Calendar, Star, Clock, Building2, Activity } from 'lucide-react';

// Sample data
const operationsData = {
  clientVisits: [
    { month: 'Jan', newClients: 45, recurringClients: 120, satisfaction: 4.5 },
    { month: 'Feb', newClients: 52, recurringClients: 125, satisfaction: 4.6 },
    { month: 'Mar', newClients: 58, recurringClients: 130, satisfaction: 4.8 },
    { month: 'Apr', newClients: 48, recurringClients: 135, satisfaction: 4.7 },
    { month: 'May', newClients: 60, recurringClients: 140, satisfaction: 4.9 }
  ],
  staffPerformance: [
    { time: '9:00', productivity: 85, engagement: 90 },
    { time: '11:00', productivity: 92, engagement: 88 },
    { time: '13:00', productivity: 78, engagement: 85 },
    { time: '15:00', productivity: 95, engagement: 92 },
    { time: '17:00', productivity: 88, engagement: 87 }
  ],
  upcomingMeetings: [
    { id: 'M001', client: 'Tech Solutions Inc.', type: 'Product Demo', time: '2:00 PM', attendees: 5 },
    { id: 'M002', client: 'Global Innovations', type: 'Contract Review', time: '3:30 PM', attendees: 3 },
    { id: 'M003', client: 'Creative Studios', type: 'Initial Consultation', time: '4:45 PM', attendees: 4 }
  ]
};

const AnimatedStatCard = ({ icon: Icon, title, value, subValue, change, color }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-[#456fff]">
    <div className="flex items-center justify-between">
      <div className={`p-3 rounded-lg ${color} bg-opacity-20`}>
        <Icon size={24} className={`${color}`} />
      </div>
      <div className={`px-3 py-1 rounded-full ${change >= 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'} text-sm font-medium`}>
        {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
      </div>
    </div>
    <div className="mt-4">
      <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
      <div className="flex items-baseline">
        <p className="text-2xl font-bold mt-2 text-gray-800">{value}</p>
        <p className="ml-2 text-sm text-gray-500">{subValue}</p>
      </div>
    </div>
  </div>
);

const Operations_Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <AnimatedStatCard
          icon={Users}
          title="Total Clients"
          value="1,284"
          subValue="active accounts"
          change={15}
          color="text-[#456fff]"
        />
        <AnimatedStatCard
          icon={Star}
          title="Client Satisfaction"
          value="4.8"
          subValue="out of 5"
          change={8}
          color="text-yellow-500"
        />
        <AnimatedStatCard
          icon={Calendar}
          title="Meetings Today"
          value="24"
          subValue="3 high priority"
          change={-5}
          color="text-green-500"
        />
        <AnimatedStatCard
          icon={Activity}
          title="Team Productivity"
          value="92%"
          subValue="vs 87% target"
          change={12}
          color="text-purple-500"
        />
      </div>

      {/* Main Components Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        {/* Component 1: Client Visit Trends */}
        <div className="bg-white p-6 rounded-xl shadow-md overflow-scroll">
          <h3 className="text-lg font-semibold mb-4">Client Visit Trends</h3>
          <LineChart width={500} height={300} data={operationsData.clientVisits}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="newClients" stroke="#456fff" name="New Clients" />
            <Line type="monotone" dataKey="recurringClients" stroke="#10B981" name="Recurring Clients" />
          </LineChart>
        </div>

        {/* Component 2: Staff Performance */}
        <div className="bg-white p-6 rounded-xl shadow-md overflow-scroll">
          <h3 className="text-lg font-semibold mb-4">Staff Performance</h3>
          <AreaChart width={500} height={300} data={operationsData.staffPerformance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="productivity" stroke="#456fff" fill="#456fff" fillOpacity={0.3} name="Productivity" />
            <Area type="monotone" dataKey="engagement" stroke="#10B981" fill="#10B981" fillOpacity={0.3} name="Engagement" />
          </AreaChart>
        </div>

        {/* Component 3: Upcoming Client Meetings */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Upcoming Client Meetings</h3>
            <Calendar className="text-[#456fff]" />
          </div>
          <div className="space-y-4">
            {operationsData.upcomingMeetings.map((meeting) => (
              <div key={meeting.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-gray-800">{meeting.client}</h4>
                    <p className="text-sm text-gray-600">{meeting.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-[#456fff]">{meeting.time}</p>
                    <p className="text-sm text-gray-600">{meeting.attendees} attendees</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Component 4: Client Satisfaction */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Client Satisfaction Metrics</h3>
          <div className="space-y-6">
            {[
              { metric: 'Overall Satisfaction', value: 92, color: 'bg-green-500' },
              { metric: 'Response Time', value: 88, color: 'bg-blue-500' },
              { metric: 'Service Quality', value: 95, color: 'bg-purple-500' },
              { metric: 'Problem Resolution', value: 90, color: 'bg-yellow-500' }
            ].map((metric) => (
              <div key={metric.metric} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{metric.metric}</span>
                  <span className="font-medium">{metric.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`${metric.color} h-2 rounded-full transition-all duration-500`} style={{ width: `${metric.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Component 5: Team Availability */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Team Availability</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { status: 'Available', count: 18, color: 'bg-green-100 text-green-800' },
              { status: 'In Meetings', count: 12, color: 'bg-yellow-100 text-yellow-800' },
              { status: 'On Leave', count: 3, color: 'bg-red-100 text-red-800' },
              { status: 'Remote', count: 8, color: 'bg-blue-100 text-blue-800' }
            ].map((team) => (
              <div key={team.status} className={`p-4 rounded-lg ${team.color}`}>
                <h4 className="font-medium">{team.status}</h4>
                <p className="text-2xl font-bold mt-2">{team.count}</p>
                <p className="text-sm mt-1">team members</p>
              </div>
            ))}
          </div>
        </div>

        {/* Component 6: Project Overview */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Active Projects Overview</h3>
            <Building2 className="text-[#456fff]" />
          </div>
          <div className="space-y-4">
            {[
              { name: 'Client Onboarding', progress: 75, clients: 12, status: 'On Track' },
              { name: 'Service Upgrade', progress: 45, clients: 8, status: 'In Review' },
              { name: 'Account Management', progress: 90, clients: 15, status: 'Near Complete' }
            ].map((project, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{project.name}</h4>
                  <span className="text-sm text-[#456fff]">{project.clients} clients</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-[#456fff] h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{project.progress}% complete</span>
                  <span className="text-green-600">{project.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operations_Dashboard;