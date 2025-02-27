import React, { useState } from 'react';
import { Shield, AlertCircle, FileText, Check, Calendar, Clock, IndianRupee, MessageSquare, Search } from 'lucide-react';

const insuranceSchemes = [
  {
    name: "PM Fasal Bima Yojana",
    coverage: "All Food Crops",
    premium: "1.5% - 5%",
    maxCover: "₹50,000 per hectare",
    provider: "Agriculture Insurance Company"
  },
  {
    name: "Weather Based Crop Insurance",
    coverage: "Weather Related Risks",
    premium: "2% - 6%",
    maxCover: "₹40,000 per hectare",
    provider: "HDFC ERGO"
  },
  {
    name: "Unified Package Insurance",
    coverage: "Multiple Risk Coverage",
    premium: "3% - 7%",
    maxCover: "₹45,000 per hectare",
    provider: "New India Assurance"
  }
];

const claimSteps = [
  {
    title: "Report Damage",
    description: "Inform insurance provider within 48 hours of damage",
    icon: AlertCircle
  },
  {
    title: "Submit Documents",
    description: "Provide necessary documentation and evidence",
    icon: FileText
  },
  {
    title: "Assessment",
    description: "Field survey and damage assessment by experts",
    icon: Search
  },
  {
    title: "Claim Settlement",
    description: "Receive compensation based on assessment",
    icon: Check
  }
];

const activePolicies = [
  {
    crop: "Wheat",
    area: "5 hectares",
    sumInsured: "₹2,50,000",
    startDate: "2024-01-15",
    endDate: "2024-06-15",
    status: "Active"
  },
  {
    crop: "Rice",
    area: "3 hectares",
    sumInsured: "₹1,50,000",
    startDate: "2024-02-01",
    endDate: "2024-07-01",
    status: "Active"
  }
];

export function CropInsurance() {
  const [selectedScheme, setSelectedScheme] = useState(null);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-theme-secondary">Crop Insurance</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-theme-primary text-white rounded-lg hover:opacity-90">
          <Shield size={20} />
          <span>Apply for Insurance</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Coverage</p>
              <p className="text-2xl font-bold text-theme-secondary">8 Hectares</p>
            </div>
            <Shield size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Active Policies</p>
              <p className="text-2xl font-bold text-theme-secondary">2</p>
            </div>
            <FileText size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Premium</p>
              <p className="text-2xl font-bold text-theme-secondary">₹15,000</p>
            </div>
            <IndianRupee size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Claims Processed</p>
              <p className="text-2xl font-bold text-theme-secondary">1</p>
            </div>
            <Check size={24} className="text-theme-primary" />
          </div>
        </div>
      </div>

      {/* Insurance Schemes */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Available Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insuranceSchemes.map((scheme, index) => (
            <div 
              key={index}
              className={`border rounded-lg p-6 cursor-pointer transition-all ${
                selectedScheme === index 
                  ? 'border-theme-primary bg-theme-primary bg-opacity-5'
                  : 'hover:border-theme-primary'
              }`}
              onClick={() => setSelectedScheme(index)}
            >
              <h3 className="font-medium text-theme-primary mb-3">{scheme.name}</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-gray-600">Coverage:</span> {scheme.coverage}</p>
                <p><span className="text-gray-600">Premium:</span> {scheme.premium}</p>
                <p><span className="text-gray-600">Max Cover:</span> {scheme.maxCover}</p>
                <p><span className="text-gray-600">Provider:</span> {scheme.provider}</p>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-theme-primary text-white rounded-lg hover:opacity-90">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Active Policies */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Active Policies</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Crop</th>
                <th className="text-left py-3">Area</th>
                <th className="text-left py-3">Sum Insured</th>
                <th className="text-left py-3">Start Date</th>
                <th className="text-left py-3">End Date</th>
                <th className="text-left py-3">Status</th>
                <th className="text-left py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {activePolicies.map((policy, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-3">{policy.crop}</td>
                  <td className="py-3">{policy.area}</td>
                  <td className="py-3">{policy.sumInsured}</td>
                  <td className="py-3">{policy.startDate}</td>
                  <td className="py-3">{policy.endDate}</td>
                  <td className="py-3">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {policy.status}
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

      {/* Claim Process */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Claim Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {claimSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-theme-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon size={32} className="text-theme-primary" />
              </div>
              <h3 className="font-medium text-theme-secondary mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Important Dates */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Important Dates</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-4 border rounded-lg">
              <Calendar size={20} className="text-theme-primary" />
              <div>
                <p className="font-medium">Premium Payment Due</p>
                <p className="text-sm text-gray-600">March 31, 2024</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 border rounded-lg">
              <Calendar size={20} className="text-theme-primary" />
              <div>
                <p className="font-medium">Policy Renewal</p>
                <p className="text-sm text-gray-600">June 15, 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Support</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-4 border rounded-lg">
              <Clock size={20} className="text-theme-primary" />
              <div>
                <p className="font-medium">24/7 Claim Support</p>
                <p className="text-sm text-gray-600">Call: 1800-XXX-XXXX</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 border rounded-lg">
              <MessageSquare size={20} className="text-theme-primary" />
              <div>
                <p className="font-medium">Chat Support</p>
                <button className="text-theme-primary hover:underline text-sm">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}