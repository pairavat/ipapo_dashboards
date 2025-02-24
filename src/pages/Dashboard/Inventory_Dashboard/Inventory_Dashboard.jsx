import React from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { Package, Boxes, AlertTriangle, TrendingUp, ShoppingCart, Archive } from 'lucide-react';

// Sample data
const inventoryData = {
  monthlyStats: [
    { month: 'Jan', inStock: 2500, consumed: 1800, ordered: 2000 },
    { month: 'Feb', inStock: 2700, consumed: 1900, ordered: 1800 },
    { month: 'Mar', inStock: 2300, consumed: 2100, ordered: 2200 },
    { month: 'Apr', inStock: 2600, consumed: 1700, ordered: 1900 },
    { month: 'May', inStock: 2800, consumed: 1600, ordered: 1700 },
  ],
  assetDistribution: [
    { name: 'IT Equipment', value: 35 },
    { name: 'Office Supplies', value: 25 },
    { name: 'Hardware', value: 20 },
    { name: 'Software Licenses', value: 20 },
  ],
  inventoryItems: [
    { id: 'INV001', name: 'Laptops', quantity: 150, status: 'In Stock', category: 'IT Equipment', lastUpdated: '2h ago' },
    { id: 'INV002', name: 'Monitors', quantity: 200, status: 'Low Stock', category: 'IT Equipment', lastUpdated: '1h ago' },
    { id: 'INV003', name: 'Keyboards', quantity: 300, status: 'In Stock', category: 'IT Equipment', lastUpdated: '3h ago' },
    { id: 'INV004', name: 'Office Chairs', quantity: 50, status: 'Critical Stock', category: 'Furniture', lastUpdated: '4h ago' },
    { id: 'INV005', name: 'Printers', quantity: 25, status: 'In Stock', category: 'IT Equipment', lastUpdated: '5h ago' }
  ]
};

const COLORS = ['#456fff', '#10B981', '#F59E0B', '#EF4444'];

const StatCard = ({ icon: Icon, title, value, change, color }) => (
  <div className="bg-white rounded-lg p-6 shadow-md">
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

const Inventory_Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard
          icon={Package}
          title="Total Inventory Items"
          value="4,328"
          change={12}
          color="text-[#456fff]"
        />
        <StatCard
          icon={AlertTriangle}
          title="Low Stock Items"
          value="23"
          change={-8}
          color="text-yellow-500"
        />
        <StatCard
          icon={TrendingUp}
          title="Inventory Value"
          value="$253,890"
          change={15}
          color="text-green-500"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      

        {/* Asset Distribution Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-2 text flex  align-center justify-center flex-col" >
          <h3 className="text-lg font-semibold mb-4 text-center">Asset Distribution</h3>
          <PieChart width={500} height={350}>
            <Pie
              data={inventoryData.assetDistribution}
              cx={250}
              cy={150}
              innerRadius={60}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label
            >
              {inventoryData.assetDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>


   {/* Inventory Status */}
   <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Inventory Status</h3>
            <Boxes className="text-[#456fff]" />
          </div>
          <div className="space-y-4">
            {inventoryData.inventoryItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    item.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                    item.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {item.status}
                  </span>
                  <p className="text-sm text-gray-600 mt-1">{item.quantity} units</p>
                </div>
              </div>
            ))}
          </div>
        </div>



      </div>

      {/* Additional Components */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">




  {/* Inventory Trends Chart */}
  <div className="bg-white p-6 rounded-lg shadow-md col-span-2 flex  align-center justify-center flex-col">
          <h3 className="text-lg font-semibold mb-4 text-center">Inventory Trends</h3>
          <LineChart width={500} height={300} data={inventoryData.monthlyStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="inStock" stroke="#456fff" name="In Stock" />
            <Line type="monotone" dataKey="consumed" stroke="#10B981" name="Consumed" />
            <Line type="monotone" dataKey="ordered" stroke="#F59E0B" name="Ordered" />
          </LineChart>
        </div>




        {/* Low Stock Alerts */}
        {/* <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Low Stock Alerts</h3>
            <AlertTriangle className="text-yellow-500" />
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">Office Chairs</span>
                <span className="text-red-500">5 left</span>
              </div>
              <div className="mt-2 text-sm text-gray-600">Reorder point: 10</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">Monitors</span>
                <span className="text-yellow-500">15 left</span>
              </div>
              <div className="mt-2 text-sm text-gray-600">Reorder point: 20</div>
            </div>
          </div>
        </div> */}



        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Activities</h3>
            <Archive className="text-[#456fff]" />
          </div>
          <div className="space-y-4">
            {[
              { action: 'New Stock Added', item: 'Laptops', quantity: '+50', time: '2h ago' },
              { action: 'Stock Removed', item: 'Monitors', quantity: '-10', time: '3h ago' },
              { action: 'Inventory Count', item: 'All Items', quantity: 'Complete', time: '5h ago' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.item}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{activity.quantity}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>



     
      
      
      </div>
    </div>
  );
};

export default Inventory_Dashboard;