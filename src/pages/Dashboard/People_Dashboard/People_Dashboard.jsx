// Dashboard.jsx - Main dashboard layout
import React from 'react';

import MetricsRow from '../../../components/MetricsRow/MetricsRow';
import AttendanceChart from '../../../components/AttendanceChart/AttendanceChart';
import LeaveRequestTable from '../../../components/LeaveRequestTable/LeaveRequestTable';
import LocationSection from '../../../components/LocationSection/LocationSection';
import ToursTaken from '../../../components/ToursTaken/ToursTaken';
import ActiveSites from '../../../components/ActiveSites/ActiveSites';
import IndiaMap from '../../../components/indianOfficeMap/IndiaMap';

import { 
  Users, Star, Award, Calendar, 
  Briefcase, GraduationCap, Clock,
  CheckCircle, AlertCircle, UserPlus
} from 'lucide-react';

const People_Dashboard = () => {
  return (
    <div className="bg-[#E8E8E8] min-h-screen">
 
      {/* Main Content */}
      <main className="p-4">
        {/* Metrics Row */}
        <MetricsRow />
        
        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <AttendanceChart />
          <LeaveRequestTable />
        </div>
        
        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 ">
     
      {/* Component 3: Team Engagement & Wellbeing */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Team Engagement & Wellbeing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium text-gray-700">Recent Achievements</h3>
            <div className="space-y-3">
              {[
                { title: 'Project Milestones', completed: 12, total: 15 },
                { title: 'Learning Goals', completed: 8, total: 10 },
                { title: 'Team Collaborations', completed: 5, total: 6 }
              ].map((achievement) => (
                <div key={achievement.title} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{achievement.title}</span>
                    <span className="text-sm text-gray-600">
                      {achievement.completed}/{achievement.total}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 rounded-full bg-blue-500"
                      style={{ 
                        width: `${(achievement.completed / achievement.total) * 100}%`,
                        backgroundColor: '#456fff'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-4">Upcoming Activities</h3>
            <div className="space-y-4">
              {[
                { title: 'Team Building Workshop', date: 'Mar 15', participants: 18 },
                { title: 'Leadership Training', date: 'Mar 18', participants: 12 },
                { title: 'Wellness Session', date: 'Mar 20', participants: 25 },
                { title: 'Skill Development', date: 'Mar 22', participants: 15 }
              ].map((activity) => (
                <div key={activity.title} className="flex items-center p-3 bg-white rounded-lg">
                  <div className="p-2 rounded-full bg-blue-100 mr-3">
                    <Calendar className="h-5 w-5" style={{ color: '#456fff' }} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.title}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <span>{activity.date}</span>
                      <span className="mx-2">•</span>
                      <span>{activity.participants} participants</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Component 4: Career Development Tracking */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Career Development Tracking</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Active Mentorships',
              count: 28,
              items: ['12 Senior Mentors', '16 Junior Mentees', '8 Success Stories'],
              icon: Users,
              color: '#456fff'
            },
            {
              title: 'Learning Paths',
              count: 15,
              items: ['6 Technical Tracks', '5 Leadership Tracks', '4 Specialty Tracks'],
              icon: GraduationCap,
              color: '#22c55e'
            },
            {
              title: 'Certifications',
              count: 42,
              items: ['24 Completed', '18 In Progress', '12 Planned'],
              icon: Award,
              color: '#eab308'
            }
          ].map((track) => (
            <div key={track.title} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-4">
                <track.icon className="h-6 w-6 mr-2" style={{ color: track.color }} />
                <h3 className="font-semibold">{track.title}</h3>
              </div>
              <p className="text-3xl font-bold mb-4" style={{ color: track.color }}>{track.count}</p>
              <div className="space-y-2">
                {track.items.map((item) => (
                  <div key={item} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: track.color }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      </main>
    </div>
  );
};

export default People_Dashboard;