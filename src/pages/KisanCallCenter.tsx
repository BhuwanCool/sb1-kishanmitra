import React from 'react';
import { 
  Phone, MessageSquare, Clock, User, HelpCircle, CheckCircle,
  Sprout, Wrench as Tool, BarChart2, FileText, AlertCircle
} from 'lucide-react';

const supportCategories = [
  {
    title: "Crop Advisory",
    icon: Sprout,
    description: "Get expert advice on crop management",
    available: true
  },
  {
    title: "Technical Support",
    icon: Tool,
    description: "Help with equipment and technology",
    available: true
  },
  {
    title: "Market Information",
    icon: BarChart2,
    description: "Price trends and market updates",
    available: true
  },
  {
    title: "Scheme Support",
    icon: FileText,
    description: "Guidance on government schemes",
    available: true
  }
];

const recentQueries = [
  {
    query: "Best pesticides for wheat crop",
    status: "Resolved",
    time: "2 hours ago",
    expert: "Dr. Sharma"
  },
  {
    query: "PM-KISAN application process",
    status: "In Progress",
    time: "5 hours ago",
    expert: "Amit Kumar"
  },
  {
    query: "Water management in rice cultivation",
    status: "Resolved",
    time: "1 day ago",
    expert: "Dr. Patel"
  }
];

export function KisanCallCenter() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-theme-secondary">Kisan Call Center</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-theme-primary text-white rounded-lg hover:opacity-90">
          <Phone size={20} />
          <span>Call Now</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Average Wait Time</p>
              <p className="text-2xl font-bold text-theme-secondary">2 mins</p>
            </div>
            <Clock size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Active Experts</p>
              <p className="text-2xl font-bold text-theme-secondary">15</p>
            </div>
            <User size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Queries Today</p>
              <p className="text-2xl font-bold text-theme-secondary">234</p>
            </div>
            <MessageSquare size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Resolution Rate</p>
              <p className="text-2xl font-bold text-theme-secondary">95%</p>
            </div>
            <CheckCircle size={24} className="text-theme-primary" />
          </div>
        </div>
      </div>

      {/* Support Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {supportCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-theme-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <category.icon size={32} className="text-theme-primary" />
              </div>
              <h3 className="font-medium text-theme-secondary mb-2">{category.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{category.description}</p>
              <span className={`px-3 py-1 rounded-full text-sm ${
                category.available 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {category.available ? 'Available' : 'Busy'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Contact Methods</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 border rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Phone className="text-green-600" />
              </div>
              <div>
                <h3 className="font-medium">Toll Free Number</h3>
                <p className="text-2xl font-bold text-theme-primary">1800-180-1551</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 border rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageSquare className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Chat Support</h3>
                <p className="text-sm text-gray-600">Available 24/7</p>
                <button className="mt-2 text-theme-primary hover:underline">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Recent Queries</h2>
          <div className="space-y-4">
            {recentQueries.map((query, index) => (
              <div key={index} className="flex items-start justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{query.query}</h3>
                  <p className="text-sm text-gray-600">
                    Expert: {query.expert} • {query.time}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  query.status === 'Resolved'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {query.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ and Operating Hours */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">FAQ</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium flex items-center">
                <HelpCircle size={16} className="mr-2 text-theme-primary" />
                What are the operating hours?
              </h3>
              <p className="mt-2 text-gray-600">
                Our call center operates from 6 AM to 10 PM, all days of the week.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium flex items-center">
                <HelpCircle size={16} className="mr-2 text-theme-primary" />
                Which languages are supported?
              </h3>
              <p className="mt-2 text-gray-600">
                We support Hindi, English, and 22 regional languages.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium flex items-center">
                <HelpCircle size={16} className="mr-2 text-theme-primary" />
                How to track my query?
              </h3>
              <p className="mt-2 text-gray-600">
                Use your query ID provided during the call to track status.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Operating Hours</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border-b">
              <span>Monday - Friday</span>
              <span className="font-medium">6:00 AM - 10:00 PM</span>
            </div>
            <div className="flex items-center justify-between p-3 border-b">
              <span>Saturday</span>
              <span className="font-medium">6:00 AM - 10:00 PM</span>
            </div>
            <div className="flex items-center justify-between p-3">
              <span>Sunday</span>
              <span className="font-medium">6:00 AM - 10:00 PM</span>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800">
                <AlertCircle size={16} className="inline mr-2" />
                Emergency support available 24/7 for urgent queries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}