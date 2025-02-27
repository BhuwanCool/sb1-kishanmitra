import React from 'react';
import { 
  Users,
  ShoppingCart,
  DollarSign,
  TrendingUp
} from 'lucide-react';

export function DashboardContent() {
  const stats = [
    { icon: Users, label: 'Total Users', value: '12,361', change: '+14%' },
    { icon: ShoppingCart, label: 'Total Orders', value: '8,742', change: '+23%' },
    { icon: DollarSign, label: 'Revenue', value: '$534,232', change: '+38%' },
    { icon: TrendingUp, label: 'Growth', value: '42%', change: '+12%' },
  ];

  return (
    <main className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-theme-secondary">{stat.label}</p>
                <p className="text-2xl font-semibold mt-1 text-theme-secondary">{stat.value}</p>
              </div>
              <div className="bg-theme-primary bg-opacity-10 p-3 rounded-lg">
                <stat.icon size={24} className="text-theme-primary" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-green-500 text-sm font-medium">
                {stat.change}
              </span>
              <span className="text-theme-secondary text-sm ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Color Test Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Color Theme Test</h2>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <div className="p-4 bg-theme-primary text-white rounded-lg">Primary Color</div>
            <div className="p-4 bg-theme-secondary text-white rounded-lg">Secondary Color</div>
            <div className="p-4 bg-theme-tertiary text-white rounded-lg">Tertiary Color</div>
          </div>
          <div className="space-y-2">
            <p className="text-theme-primary">Text in Primary Color</p>
            <p className="text-theme-secondary">Text in Secondary Color</p>
            <p className="text-theme-tertiary">Text in Tertiary Color</p>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-theme-primary text-white rounded-lg hover:opacity-90">
              Primary Button
            </button>
            <button className="px-4 py-2 bg-theme-secondary text-white rounded-lg hover:opacity-90">
              Secondary Button
            </button>
            <button className="px-4 py-2 bg-theme-tertiary text-white rounded-lg hover:opacity-90">
              Tertiary Button
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-theme-tertiary bg-opacity-10 flex items-center justify-center">
                  <Users size={20} className="text-theme-tertiary" />
                </div>
                <div>
                  <p className="font-medium text-theme-secondary">New user registered</p>
                  <p className="text-sm text-theme-secondary opacity-70">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {['Add User', 'New Order', 'Create Report', 'Settings'].map((action, index) => (
              <button
                key={index}
                className="p-4 bg-theme-tertiary text-white rounded-lg font-medium hover:opacity-90 transition-colors"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}