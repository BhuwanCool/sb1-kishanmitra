import React from 'react';
import { Users, MessageSquare, Share2, Award, Heart } from 'lucide-react';

const discussions = [
  {
    title: "Best practices for organic farming",
    author: "Rajesh Kumar",
    replies: 23,
    likes: 45,
    tags: ["Organic", "Best Practices"],
    timeAgo: "2 hours ago"
  },
  {
    title: "Water conservation techniques during summer",
    author: "Amit Singh",
    replies: 15,
    likes: 32,
    tags: ["Water Conservation", "Summer"],
    timeAgo: "5 hours ago"
  },
  {
    title: "New pest control methods for rice crops",
    author: "Priya Patel",
    replies: 18,
    likes: 27,
    tags: ["Pest Control", "Rice"],
    timeAgo: "1 day ago"
  }
];

const successStories = [
  {
    farmer: "Ramesh Yadav",
    location: "Madhya Pradesh",
    achievement: "Increased yield by 40% using organic methods",
    image: "https://images.unsplash.com/photo-1595413895318-c862d980d49d?auto=format&fit=crop&w=300&q=80"
  },
  {
    farmer: "Lakshmi Devi",
    location: "Karnataka",
    achievement: "Successfully implemented drip irrigation",
    image: "https://images.unsplash.com/photo-1595413894716-e9b50e6b7c56?auto=format&fit=crop&w=300&q=80"
  }
];

export function Community() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-theme-secondary">Farmer Community</h1>
        <button className="px-4 py-2 bg-theme-primary text-white rounded-lg hover:opacity-90">
          Start New Discussion
        </button>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Members</p>
              <p className="text-2xl font-bold text-theme-secondary">5,234</p>
            </div>
            <Users size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Active Discussions</p>
              <p className="text-2xl font-bold text-theme-secondary">142</p>
            </div>
            <MessageSquare size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Knowledge Shared</p>
              <p className="text-2xl font-bold text-theme-secondary">1,256</p>
            </div>
            <Share2 size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Success Stories</p>
              <p className="text-2xl font-bold text-theme-secondary">89</p>
            </div>
            <Award size={24} className="text-theme-primary" />
          </div>
        </div>
      </div>

      {/* Recent Discussions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Recent Discussions</h2>
        <div className="space-y-4">
          {discussions.map((discussion, index) => (
            <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-theme-primary hover:underline cursor-pointer">
                    {discussion.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Posted by {discussion.author} • {discussion.timeAgo}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {discussion.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <MessageSquare size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">{discussion.replies}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">{discussion.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 text-theme-primary hover:underline">
          View All Discussions
        </button>
      </div>

      {/* Success Stories */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {successStories.map((story, index) => (
            <div key={index} className="flex space-x-4">
              <img 
                src={story.image} 
                alt={story.farmer} 
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-medium text-theme-primary">{story.farmer}</h3>
                <p className="text-sm text-gray-600">{story.location}</p>
                <p className="mt-2 text-gray-700">{story.achievement}</p>
                <button className="text-theme-primary hover:underline mt-2 text-sm">
                  Read Full Story
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-theme-secondary mb-4">Popular Topics</h3>
          <div className="space-y-2">
            <a href="#" className="block text-theme-primary hover:underline">
              • Organic Farming Techniques
            </a>
            <a href="#" className="block text-theme-primary hover:underline">
              • Water Conservation
            </a>
            <a href="#" className="block text-theme-primary hover:underline">
              • Pest Management
            </a>
            <a href="#" className="block text-theme-primary hover:underline">
              • Crop Rotation
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-theme-secondary mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            <div className="border-b pb-2">
              <p className="font-medium">Farmer's Meet 2024</p>
              <p className="text-sm text-gray-600">March 25, 2024 • Virtual</p>
            </div>
            <div className="border-b pb-2">
              <p className="font-medium">Organic Farming Workshop</p>
              <p className="text-sm text-gray-600">April 2, 2024 • Delhi</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-theme-secondary mb-4">Community Guidelines</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Be respectful to fellow farmers</p>
            <p>• Share authentic information</p>
            <p>• Keep discussions relevant</p>
            <p>• Report inappropriate content</p>
          </div>
        </div>
      </div>
    </div>
  );
}