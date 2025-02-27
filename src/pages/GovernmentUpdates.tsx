import React from 'react';
import { FileText, Bell, Calendar, Download, ExternalLink, Users, IndianRupee } from 'lucide-react';

const updates = [
  {
    title: "New MSP Rates Announced for Rabi Crops",
    date: "March 15, 2024",
    category: "Policy Update",
    description: "The government has announced new Minimum Support Prices for Rabi crops...",
    link: "#"
  },
  {
    title: "PM-KISAN 14th Installment Release Date",
    date: "March 14, 2024",
    category: "Scheme Update",
    description: "The 14th installment of PM-KISAN will be released to eligible farmers...",
    link: "#"
  },
  {
    title: "E-NAM Platform Enhancement",
    date: "March 13, 2024",
    category: "Digital Initiative",
    description: "New features added to the e-NAM platform for better price discovery...",
    link: "#"
  }
];

const schemes = [
  {
    name: "PM-KISAN",
    beneficiaries: "12.5 Cr",
    disbursed: "₹2.5 Lakh Cr",
    status: "Active"
  },
  {
    name: "PM Fasal Bima Yojana",
    beneficiaries: "3.7 Cr",
    disbursed: "₹1.2 Lakh Cr",
    status: "Active"
  },
  {
    name: "Kisan Credit Card",
    beneficiaries: "2.5 Cr",
    disbursed: "₹3.1 Lakh Cr",
    status: "Active"
  }
];

const documents = [
  {
    title: "Agricultural Policy 2024",
    type: "PDF",
    size: "2.5 MB",
    date: "March 10, 2024"
  },
  {
    title: "MSP Rate Card 2024",
    type: "PDF",
    size: "1.8 MB",
    date: "March 12, 2024"
  },
  {
    title: "Subsidy Guidelines",
    type: "PDF",
    size: "3.2 MB",
    date: "March 14, 2024"
  }
];

export function GovernmentUpdates() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-theme-secondary">Government Updates</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-theme-primary text-white rounded-lg hover:opacity-90">
          <Bell size={20} />
          <span>Subscribe to Updates</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Active Schemes</p>
              <p className="text-2xl font-bold text-theme-secondary">15</p>
            </div>
            <FileText size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Beneficiaries</p>
              <p className="text-2xl font-bold text-theme-secondary">18.7 Cr</p>
            </div>
            <Users size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Funds Disbursed</p>
              <p className="text-2xl font-bold text-theme-secondary">₹6.8 Lakh Cr</p>
            </div>
            <IndianRupee size={24} className="text-theme-primary" />
          </div>
        </div>
      </div>

      {/* Latest Updates */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Latest Updates</h2>
        <div className="space-y-4">
          {updates.map((update, index) => (
            <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
              <div className="flex justify-between items-start">
                <div>
                  <span className="px-3 py-1 bg-theme-primary bg-opacity-10 text-theme-primary rounded-full text-sm">
                    {update.category}
                  </span>
                  <h3 className="font-medium text-theme-secondary mt-2">{update.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{update.description}</p>
                  <p className="text-sm text-gray-500 mt-2">Published on {update.date}</p>
                </div>
                <a 
                  href={update.link}
                  className="flex items-center text-theme-primary hover:underline"
                >
                  <span className="mr-1">Read More</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Schemes */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Active Schemes</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Scheme Name</th>
                <th className="text-left py-3">Beneficiaries</th>
                <th className="text-left py-3">Amount Disbursed</th>
                <th className="text-left py-3">Status</th>
                <th className="text-left py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {schemes.map((scheme, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-3 font-medium text-theme-primary">{scheme.name}</td>
                  <td className="py-3">{scheme.beneficiaries}</td>
                  <td className="py-3">{scheme.disbursed}</td>
                  <td className="py-3">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {scheme.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <button className="text-theme-primary hover:underline">
                      Apply Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Important Documents */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Important Documents</h2>
          <div className="space-y-4">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-theme-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <FileText className="text-theme-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">{doc.title}</p>
                    <p className="text-sm text-gray-600">
                      {doc.type} • {doc.size} • {doc.date}
                    </p>
                  </div>
                </div>
                <button className="text-theme-primary hover:underline flex items-center">
                  <Download size={16} className="mr-1" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Important Dates</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-4 border rounded-lg">
              <Calendar size={20} className="text-theme-primary" />
              <div>
                <p className="font-medium">PM-KISAN 14th Installment</p>
                <p className="text-sm text-gray-600">March 31, 2024</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 border rounded-lg">
              <Calendar size={20} className="text-theme-primary" />
              <div>
                <p className="font-medium">Crop Insurance Last Date</p>
                <p className="text-sm text-gray-600">April 15, 2024</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 border rounded-lg">
              <Calendar size={20} className="text-theme-primary" />
              <div>
                <p className="font-medium">Kisan Credit Card Renewal</p>
                <p className="text-sm text-gray-600">April 30, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}