import React, { useState, useRef, useEffect } from 'react';
import { Menu, Bell, Settings, User, LogOut, ChevronDown, Cog, Languages, Moon, Sun, HelpCircle, UserCog, Shield, FileText, AlertTriangle } from 'lucide-react';
import { ThemePicker } from './ThemePicker';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleSidebar: () => void;
}

// Sample notification data
const notificationData = [
  {
    id: 1,
    type: 'alert',
    message: 'Weather alert: Heavy rainfall expected tomorrow',
    time: '10 minutes ago',
    read: false
  },
  {
    id: 2,
    type: 'price',
    message: 'Wheat prices increased by 5% in Indore Mandi',
    time: '1 hour ago',
    read: false
  },
  {
    id: 3,
    type: 'system',
    message: 'System maintenance scheduled for tonight',
    time: '3 hours ago',
    read: true
  },
  {
    id: 4,
    type: 'advisory',
    message: 'New crop advisory available for wheat cultivation',
    time: '5 hours ago',
    read: true
  },
  {
    id: 5,
    type: 'government',
    message: 'New government scheme announced for organic farmers',
    time: '1 day ago',
    read: true
  }
];

export function Header({ toggleSidebar }: HeaderProps) {
  const { signOut } = useAuth();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [notifications, setNotifications] = useState(notificationData);
  const [unreadCount, setUnreadCount] = useState(0);
  
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Calculate unread notifications
  useEffect(() => {
    setUnreadCount(notifications.filter(n => !n.read).length);
  }, [notifications]);

  // Handle clicks outside dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setShowUserDropdown(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setShowSettings(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'alert':
        return <AlertTriangle size={18} className="text-red-500" />;
      case 'price':
        return <FileText size={18} className="text-green-500" />;
      case 'system':
        return <Cog size={18} className="text-blue-500" />;
      case 'advisory':
        return <HelpCircle size={18} className="text-purple-500" />;
      case 'government':
        return <Shield size={18} className="text-orange-500" />;
      default:
        return <Bell size={18} className="text-gray-500" />;
    }
  };

  return (
    <header className="bg-theme-primary text-white h-16 fixed w-full top-0 left-0 z-50 flex items-center px-4 shadow-lg">
      <button 
        onClick={toggleSidebar}
        className="p-2 hover:bg-opacity-80 rounded-lg transition-colors"
      >
        <Menu size={24} />
      </button>
      
      <div className="flex-1 px-4">
        <h1 className="text-xl font-semibold">Kisan Mitra</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <ThemePicker />
        
        {/* Notifications */}
        <div className="relative" ref={notificationsRef}>
          <button 
            onClick={() => {
              setShowNotifications(!showNotifications);
              if (showSettings) setShowSettings(false);
              if (showUserDropdown) setShowUserDropdown(false);
            }}
            className="p-2 hover:bg-opacity-80 rounded-lg transition-colors relative"
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 text-gray-700 max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center px-4 py-2 border-b">
                <h3 className="font-medium text-gray-800">Notifications</h3>
                {unreadCount > 0 && (
                  <button 
                    onClick={markAllAsRead}
                    className="text-sm text-theme-primary hover:underline"
                  >
                    Mark all as read
                  </button>
                )}
              </div>
              
              <div className="divide-y">
                {notifications.length > 0 ? (
                  notifications.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`px-4 py-3 hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex items-start">
                        <div className="mr-3 mt-1">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm ${!notification.read ? 'font-medium' : ''}`}>
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-6 text-center text-gray-500">
                    <p>No notifications</p>
                  </div>
                )}
              </div>
              
              <div className="border-t px-4 py-2 text-center">
                <button className="text-sm text-theme-primary hover:underline">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Settings */}
        <div className="relative" ref={settingsRef}>
          <button 
            onClick={() => {
              setShowSettings(!showSettings);
              if (showNotifications) setShowNotifications(false);
              if (showUserDropdown) setShowUserDropdown(false);
            }}
            className="p-2 hover:bg-opacity-80 rounded-lg transition-colors"
          >
            <Settings size={20} />
          </button>

          {showSettings && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 text-gray-700">
              <div className="px-4 py-2 border-b">
                <h3 className="font-medium text-gray-800">Settings</h3>
              </div>
              
              <div className="py-1">
                <Link to="/profile" className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <UserCog size={18} className="mr-3 text-theme-primary" />
                  <span>Account Settings</span>
                </Link>
                <Link to="/language" className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <Languages size={18} className="mr-3 text-theme-primary" />
                  <span>Language Preferences</span>
                </Link>
                <button className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100">
                  <Moon size={18} className="mr-3 text-theme-primary" />
                  <span>Dark Mode</span>
                </button>
                <Link to="/notifications" className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <Bell size={18} className="mr-3 text-theme-primary" />
                  <span>Notification Settings</span>
                </Link>
                <Link to="/help" className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <HelpCircle size={18} className="mr-3 text-theme-primary" />
                  <span>Help & Support</span>
                </Link>
              </div>
              
              <div className="border-t px-4 py-2">
                <Link to="/settings" className="text-sm text-theme-primary hover:underline block text-center">
                  Advanced Settings
                </Link>
              </div>
            </div>
          )}
        </div>
        
        {/* User Profile */}
        <div className="relative" ref={userDropdownRef}>
          <button
            onClick={() => {
              setShowUserDropdown(!showUserDropdown);
              if (showNotifications) setShowNotifications(false);
              if (showSettings) setShowSettings(false);
            }}
            className="flex items-center space-x-2 pl-4 border-l border-opacity-20 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-opacity-20 bg-white flex items-center justify-center">
              <User size={20} />
            </div>
            <span className="font-medium">Bhuwan Bhaskar</span>
            <ChevronDown size={16} />
          </button>

          {showUserDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 text-gray-700">
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100 flex items-center"
                onClick={() => setShowUserDropdown(false)}
              >
                <User size={16} className="mr-2" />
                Profile
              </Link>
              <button
                onClick={() => {
                  setShowUserDropdown(false);
                  signOut();
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center text-red-600"
              >
                <LogOut size={16} className="mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}