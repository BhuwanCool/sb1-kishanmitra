import React, { useState } from 'react';
import { 
  IndianRupee, CreditCard, Wallet, ArrowUpRight, 
  ArrowDownRight, Filter, Download, Eye, MessageSquare, AlertCircle 
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer 
} from 'recharts';

const transactionHistory = [
  {
    id: 'TXN001',
    date: '2024-03-15',
    description: 'Equipment Rental',
    amount: -5000,
    status: 'completed',
    type: 'debit'
  },
  {
    id: 'TXN002',
    date: '2024-03-14',
    description: 'Crop Sale Payment',
    amount: 25000,
    status: 'completed',
    type: 'credit'
  },
  {
    id: 'TXN003',
    date: '2024-03-13',
    description: 'Fertilizer Purchase',
    amount: -3500,
    status: 'pending',
    type: 'debit'
  }
];

const cashFlowData = [
  { month: 'Jan', income: 45000, expenses: 30000 },
  { month: 'Feb', income: 52000, expenses: 35000 },
  { month: 'Mar', income: 48000, expenses: 32000 },
  { month: 'Apr', income: 51000, expenses: 28000 },
  { month: 'May', income: 55000, expenses: 34000 },
  { month: 'Jun', income: 49000, expenses: 31000 }
];

const loans = [
  {
    type: 'Crop Loan',
    amount: 200000,
    interest: '7%',
    tenure: '12 months',
    status: 'Active'
  },
  {
    type: 'Equipment Loan',
    amount: 500000,
    interest: '8.5%',
    tenure: '36 months',
    status: 'Active'
  }
];

export function Payments() {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredTransactions = transactionHistory.filter(transaction =>
    selectedStatus === 'All' || transaction.status === selectedStatus.toLowerCase()
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-theme-secondary">Payments & Finance</h1>
        <div className="flex space-x-4">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary"
          >
            <option>This Week</option>
            <option>This Month</option>
            <option>Last 3 Months</option>
            <option>This Year</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-theme-primary text-white rounded-lg hover:opacity-90">
            <Download size={20} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Balance</p>
              <p className="text-2xl font-bold text-theme-secondary">₹1,25,000</p>
            </div>
            <Wallet size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Monthly Income</p>
              <p className="text-2xl font-bold text-green-600">₹52,000</p>
            </div>
            <ArrowUpRight size={24} className="text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Monthly Expenses</p>
              <p className="text-2xl font-bold text-red-600">₹35,000</p>
            </div>
            <ArrowDownRight size={24} className="text-red-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Pending Payments</p>
              <p className="text-2xl font-bold text-yellow-600">₹15,000</p>
            </div>
            <CreditCard size={24} className="text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Cash Flow Chart */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Cash Flow Analysis</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={cashFlowData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="income" 
                stroke="var(--color-primary)" 
                strokeWidth={2}
                name="Income"
              />
              <Line 
                type="monotone" 
                dataKey="expenses" 
                stroke="var(--color-tertiary)" 
                strokeWidth={2}
                name="Expenses"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-theme-secondary">Transaction History</h2>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary"
          >
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Transaction ID</th>
                <th className="text-left py-3">Date</th>
                <th className="text-left py-3">Description</th>
                <th className="text-left py-3">Amount</th>
                <th className="text-left py-3">Status</th>
                <th className="text-left py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-3 text-theme-primary">{transaction.id}</td>
                  <td className="py-3">{transaction.date}</td>
                  <td className="py-3">{transaction.description}</td>
                  <td className={`py-3 font-medium ${
                    transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'credit' ? '+' : '-'}₹
                    {Math.abs(transaction.amount).toLocaleString()}
                  </td>
                  <td className="py-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      transaction.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <button className="text-theme-primary hover:underline flex items-center">
                      <Eye size={16} className="mr-1" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Loans and Credit */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Active Loans</h2>
          <div className="space-y-4">
            {loans.map((loan, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-theme-primary">{loan.type}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    loan.status === 'Active' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {loan.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Amount</p>
                    <p className="font-medium">₹{loan.amount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Interest Rate</p>
                    <p className="font-medium">{loan.interest}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Tenure</p>
                    <p className="font-medium">{loan.tenure}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Payment Methods</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">HDFC Bank</p>
                  <p className="text-sm text-gray-600">****1234</p>
                </div>
              </div>
              <span className="text-sm text-gray-600">Primary</span>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Wallet className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium">UPI</p>
                  <p className="text-sm text-gray-600">user@upi</p>
                </div>
              </div>
              <button className="text-theme-primary hover:underline">
                Manage
              </button>
            </div>
            <button className="w-full mt-2 text-theme-primary hover:underline">
              Add Payment Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}