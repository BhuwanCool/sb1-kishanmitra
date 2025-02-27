import React from 'react';

export function Footer() {
  return (
    <footer className="bg-theme-primary text-white h-16 fixed bottom-0 left-0 w-full flex items-center justify-between px-6">
      <div>
        <p className="text-sm">&copy; 2024 Dashboard. All rights reserved.</p>
      </div>
      <div className="flex space-x-4 text-sm">
        <a href="#" className="hover:text-opacity-80">Privacy Policy</a>
        <a href="#" className="hover:text-opacity-80">Terms of Service</a>
        <a href="#" className="hover:text-opacity-80">Contact</a>
      </div>
    </footer>
  );
}