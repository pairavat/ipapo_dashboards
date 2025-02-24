import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock, CheckCircle, AlertCircle, TrendingUp, User, Calendar, ArrowRight } from 'lucide-react';

const ProjectManagement = () => {
  // Sample data for the cards
  const summaryData = {
    completedProjects: 45,
    inProgressProjects: 12,
    upcomingDeadlines: 8,
    projectEfficiency: "87%"
  };

  // Sample data for the chart
  const projectData = [
    { month: 'Jan', completed: 8, inProgress: 5 },
    { month: 'Feb', completed: 12, inProgress: 6 },
    { month: 'Mar', completed: 15, inProgress: 8 },
    { month: 'Apr', completed: 10, inProgress: 7 },
    { month: 'May', completed: 14, inProgress: 4 },
    { month: 'Jun', completed: 18, inProgress: 6 },
  ];

  // Sample data for timeline
  const timelineData = [
    { id: 1, project: 'Website Redesign', deadline: '2025-03-15', status: 'In Progress', completion: 75 },
    { id: 2, project: 'Mobile App Development', deadline: '2025-04-01', status: 'In Progress', completion: 45 },
    { id: 3, project: 'Database Migration', deadline: '2025-03-10', status: 'Critical', completion: 30 },
    { id: 4, project: 'Security Audit', deadline: '2025-03-20', status: 'On Track', completion: 60 }
  ];

  // Sample data for recent activities
  const recentActivities = [
    { id: 1, user: 'Sarah Johnson', action: 'Completed task', project: 'Website Redesign', time: '2 hours ago' },
    { id: 2, user: 'Mike Chen', action: 'Updated milestone', project: 'Mobile App', time: '3 hours ago' },
    { id: 3, user: 'Emily Davis', action: 'Added comment', project: 'Database Migration', time: '5 hours ago' },
    { id: 4, user: 'Alex Kim', action: 'Created new task', project: 'Security Audit', time: '6 hours ago' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Critical': return 'text-red-600';
      case 'In Progress': return 'text-yellow-600';
      case 'On Track': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Project Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Completed Projects Card */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <CheckCircle className="h-6 w-6" style={{ color: '#456fff' }} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Completed Projects</p>
              <p className="text-2xl font-bold" style={{ color: '#456fff' }}>{summaryData.completedProjects}</p>
            </div>
          </div>
        </div>

        {/* In Progress Card */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 mr-4">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-yellow-600">{summaryData.inProgressProjects}</p>
            </div>
          </div>
        </div>

        {/* Upcoming Deadlines Card */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 mr-4">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Upcoming Deadlines</p>
              <p className="text-2xl font-bold text-red-600">{summaryData.upcomingDeadlines}</p>
            </div>
          </div>
        </div>

        {/* Project Efficiency Card */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 mr-4">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Project Efficiency</p>
              <p className="text-2xl font-bold text-green-600">{summaryData.projectEfficiency}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Chart Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Project Progress Overview</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="completed" name="Completed" fill="#456fff" />
                <Bar dataKey="inProgress" name="In Progress" fill="#ffc107" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Project Timeline */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Project Timeline</h2>
          <div className="space-y-4">
            {timelineData.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{item.project}</h3>
                  <div className="flex items-center mt-1">
                    <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-500">Due: {item.deadline}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-32 h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 rounded-full"
                        style={{ 
                          width: `${item.completion}%`,
                          backgroundColor: '#456fff'
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-500">{item.completion}%</span>
                  </div>
                  <span className={`text-sm font-medium ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-150">
              <div className="p-2 rounded-full bg-blue-100 mr-3">
                <User className="h-5 w-5" style={{ color: '#456fff' }} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{activity.user}</p>
                <p className="text-sm text-gray-600">
                  {activity.action} on <span className="font-medium">{activity.project}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;