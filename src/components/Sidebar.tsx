import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home,
  CloudSun,
  Sprout,
  Store,
  Calculator,
  Tractor,
  IndianRupee,
  Users,
  FileText,
  Languages,
  Phone,
  Shield,
  Handshake,
  Brain
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Store, label: 'Mandi Rates', path: '/mandi-rates' },
    { icon: CloudSun, label: 'Weather', path: '/weather' },
    { icon: Sprout, label: 'Crop Advisory', path: '/crop-advisory' },
    { icon: Calculator, label: 'Farm Management', path: '/farm-management' },
    { icon: Tractor, label: 'Equipment', path: '/equipment' },
    { icon: IndianRupee, label: 'Payments', path: '/payments' },
    { icon: Users, label: 'Community', path: '/community' },
    { icon: FileText, label: 'Government Updates', path: '/government-updates' },
    { icon: Languages, label: 'Language', path: '/language' },
    { icon: Phone, label: 'Kisan Call Center', path: '/kisan-call-center' },
    { icon: Shield, label: 'Crop Insurance', path: '/crop-insurance' },
    { icon: Handshake, label: 'Partnerships', path: '/partnerships' },
    { icon: Brain, label: 'AI Recommendations', path: '/ai-recommendations' }
  ];

  return (
    <aside className={`
      fixed left-0 top-16 h-[calc(100vh-4rem)] bg-theme-primary text-white
      transition-all duration-300 ease-in-out z-40 overflow-y-auto
      ${isOpen ? 'w-64' : 'w-20'}
    `}>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`
                  flex items-center space-x-3 p-3 rounded-lg
                  hover:bg-opacity-80 transition-colors
                  ${location.pathname === item.path ? 'bg-[rgb(255_255_255/_10%)]' : ''}
                `}
              >
                <item.icon size={20} />
                <span className={`${!isOpen && 'hidden'}`}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}