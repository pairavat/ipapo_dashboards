import React from 'react';
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  XCircle,
  ArrowUp,
  ArrowDown,
  Filter,
  ChevronRight,
  TouchpadOff
} from 'lucide-react';

// Types
interface MaintenanceTask {
  id: number;
  assetName: string;
  assetId: string;
  taskType: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Overdue';
  dueDate: string;
  assignedTo: string;
  description: string;
}

interface MaintenanceHistory {
  id: number;
  assetName: string;
  taskType: string;
  completionDate: string;
  technician: string;
  notes: string;
  cost: number;
}

// Sample Data
const maintenanceTasks: MaintenanceTask[] = [
  {
    id: 1,
    assetName: "MacBook Pro 13",
    assetId: "MAC-2023-001",
    taskType: "Hardware Check",
    priority: "High",
    status: "Scheduled",
    dueDate: "2025-03-01",
    assignedTo: "John Smith",
    description: "Annual hardware inspection and cleaning"
  },
  {
    id: 2,
    assetName: "iPad Pro 3rd Gen",
    assetId: "IPD-2023-045",
    taskType: "Software Update",
    priority: "Medium",
    status: "In Progress",
    dueDate: "2025-02-25",
    assignedTo: "Alice Johnson",
    description: "OS update and security patches"
  },
  {
    id: 3,
    assetName: "iPhone 15 Pro Max",
    assetId: "IPH-2024-089",
    taskType: "Battery Check",
    priority: "Low",
    status: "Completed",
    dueDate: "2025-02-20",
    assignedTo: "Mike Brown",
    description: "Battery health assessment"
  },
  {
    id: 4,
    assetName: "Apple Watch Ultra",
    assetId: "AWU-2023-034",
    taskType: "Screen Repair",
    priority: "High",
    status: "Overdue",
    dueDate: "2025-02-15",
    assignedTo: "Sarah Wilson",
    description: "Replace cracked screen"
  }
];

const maintenanceHistory: MaintenanceHistory[] = [
  {
    id: 1,
    assetName: "MacBook Pro 13",
    taskType: "Battery Replacement",
    completionDate: "2025-02-01",
    technician: "John Smith",
    notes: "Replaced with new genuine battery",
    cost: 199.99
  },
  {
    id: 2,
    assetName: "iPad Pro 3rd Gen",
    taskType: "Screen Repair",
    completionDate: "2025-01-28",
    technician: "Alice Johnson",
    notes: "Replaced cracked screen, added screen protector",
    cost: 299.99
  },
  {
    id: 3,
    assetName: "iPhone 15 Pro Max",
    taskType: "Software Update",
    completionDate: "2025-01-25",
    technician: "Mike Brown",
    notes: "Updated to latest OS version",
    cost: 0.00
  }
];

// Status Badge Component
const StatusBadge = ({ status }: { status: MaintenanceTask['status'] }) => {
  const styles = {
    'Scheduled': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'In Progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'Completed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Overdue': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  );
};

// Priority Badge Component
const PriorityBadge = ({ priority }: { priority: MaintenanceTask['priority'] }) => {
  const styles = {
    'High': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    'Medium': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'Low': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[priority]}`}>
      {priority}
    </span>
  );
};

// Stats Card Component
const StatsCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend 
}: { 
  title: string; 
  value: number; 
  icon: any;
  trend?: { 
    value: number; 
    direction: 'up' | 'down' 
  }; 
}) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-white/[0.03]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <div className="mt-2 flex items-baseline">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h4>
            {trend && (
              <span className={`ml-2 text-sm ${trend.direction === 'up' ? 'text-green-600' : 'text-red-600'} flex items-center`}>
                {trend.direction === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                {trend.value}%
              </span>
            )}
          </div>
        </div>
        <Icon className="h-8 w-8 text-[#465fff]" />
      </div>
    </div>
  );
};

export default function AssetMaintenance() {
  return (
    <div className="space-y-6">
      {/* Stats Section */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Total Tasks" 
          value={maintenanceTasks.length} 
          icon={  TouchpadOff          }
          trend={{ value: 12, direction: 'up' }}
        />
        <StatsCard 
          title="Scheduled" 
          value={maintenanceTasks.filter(t => t.status === 'Scheduled').length} 
          icon={Calendar} 
        />
        <StatsCard 
          title="In Progress" 
          value={maintenanceTasks.filter(t => t.status === 'In Progress').length} 
          icon={Clock}
        />
        <StatsCard 
          title="Overdue" 
          value={maintenanceTasks.filter(t => t.status === 'Overdue').length} 
          icon={AlertTriangle}
          trend={{ value: 8, direction: 'down' }}
        />
      </div>

      {/* Maintenance Tasks Section */}
      <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Maintenance Tasks</h2>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]">
            <Filter size={16} />
            Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Asset</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Task Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Assigned To</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {maintenanceTasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50 dark:hover:bg-white/[0.02]">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{task.assetName}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{task.assetId}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{task.taskType}</td>
                  <td className="px-6 py-4"><PriorityBadge priority={task.priority} /></td>
                  <td className="px-6 py-4"><StatusBadge status={task.status} /></td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{task.dueDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{task.assignedTo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Maintenance History Section */}
      <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Maintenance History</h2>
          <button className="text-sm text-[#465fff] hover:text-[#3449db] dark:text-[#6b7fff] dark:hover:text-[#8b97ff]">
            View All
          </button>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {maintenanceHistory.map((history) => (
            <div key={history.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-white/[0.02]">
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{history.assetName}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{history.taskType}</div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 dark:text-gray-400">Completed by {history.technician}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{history.completionDate}</div>
              </div>
              <div className="flex-1 text-right">
                <div className="font-medium text-gray-900 dark:text-white">${history.cost.toFixed(2)}</div>
                <button className="text-sm text-[#465fff] hover:text-[#3449db] dark:text-[#6b7fff] dark:hover:text-[#8b97ff] inline-flex items-center">
                  View Details
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}