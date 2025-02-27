import React, { useState } from 'react';
import { Tractor, PenTool as Tool, Calendar, Clock, MapPin, DollarSign, Star, Phone, AlertCircle } from 'lucide-react';

const equipment = [
  {
    name: 'Tractor',
    type: 'Heavy Machinery',
    status: 'Available',
    rate: '1000/hour',
    location: 'Indore',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1605338803155-8b46c8506ee3?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Harvester',
    type: 'Heavy Machinery',
    status: 'Booked',
    rate: '2000/hour',
    location: 'Bhopal',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1575379573110-bf10c704b3b4?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Rotavator',
    type: 'Attachment',
    status: 'Available',
    rate: '500/hour',
    location: 'Ujjain',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1592878840630-2f50ba3c6e9a?auto=format&fit=crop&w=300&q=80'
  }
];

const maintenanceSchedule = [
  {
    equipment: 'Tractor',
    date: '2024-03-25',
    type: 'Regular Service',
    status: 'Scheduled'
  },
  {
    equipment: 'Harvester',
    date: '2024-04-10',
    type: 'Oil Change',
    status: 'Pending'
  }
];

export function Equipment() {
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEquipment = equipment.filter(item =>
    (selectedType === 'All' || item.type === selectedType) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-theme-secondary">Farm Equipment</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search equipment..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary"
          >
            <option>All</option>
            <option>Heavy Machinery</option>
            <option>Attachment</option>
          </select>
        </div>
      </div>

      {/* Equipment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEquipment.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-theme-secondary">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.type}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  item.status === 'Available' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {item.status}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <DollarSign size={16} className="mr-2" />
                  <span>₹{item.rate}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-2" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Star size={16} className="mr-2 text-yellow-400" />
                  <span>{item.rating}/5.0</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-theme-primary text-white py-2 rounded-lg hover:opacity-90">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Maintenance Schedule */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Maintenance Schedule</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Equipment</th>
                <th className="text-left py-3">Date</th>
                <th className="text-left py-3">Type</th>
                <th className="text-left py-3">Status</th>
                <th className="text-left py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceSchedule.map((schedule, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-3">{schedule.equipment}</td>
                  <td className="py-3">{schedule.date}</td>
                  <td className="py-3">{schedule.type}</td>
                  <td className="py-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      schedule.status === 'Scheduled' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {schedule.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <button className="text-theme-primary hover:underline">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-theme-secondary mb-4">Equipment Support</h3>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-theme-primary" />
                <span>Contact Support</span>
              </div>
              <span className="text-theme-primary">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
              <div className="flex items-center">
                <Tool size={20} className="mr-3 text-theme-primary" />
                <span>Request Repair</span>
              </div>
              <span className="text-theme-primary">→</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-theme-secondary mb-4">Training Resources</h3>
          <div className="space-y-3">
            <a href="#" className="block text-theme-primary hover:underline">
              • Equipment Operation Guide
            </a>
            <a href="#" className="block text-theme-primary hover:underline">
              • Safety Guidelines
            </a>
            <a href="#" className="block text-theme-primary hover:underline">
              • Maintenance Tips
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-theme-secondary mb-4">Important Notices</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
              <AlertCircle className="text-yellow-600" />
              <p className="text-sm text-yellow-800">
                Regular maintenance check required for all equipment before monsoon season
              </p>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <AlertCircle className="text-blue-600" />
              <p className="text-sm text-blue-800">
                New equipment training session scheduled for next week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}