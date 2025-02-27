import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { Dashboard } from './pages/Dashboard';
import { MandiRates } from './pages/MandiRates';
import { Weather } from './pages/Weather';
import { CropAdvisory } from './pages/CropAdvisory';
import { FarmManagement } from './pages/FarmManagement';
import { Equipment } from './pages/Equipment';
import { Payments } from './pages/Payments';
import { Community } from './pages/Community';
import { GovernmentUpdates } from './pages/GovernmentUpdates';
import { Language } from './pages/Language';
import { KisanCallCenter } from './pages/KisanCallCenter';
import { CropInsurance } from './pages/CropInsurance';
import { Partnerships } from './pages/Partnerships';
import { AIRecommendations } from './pages/AIRecommendations';
import { Profile } from './pages/Profile';
import { NotificationSettings } from './pages/NotificationSettings';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      
      <div className={`
        pt-16 pb-16 transition-all duration-300
        ${isSidebarOpen ? 'ml-64' : 'ml-20'}
      `}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/mandi-rates" element={<MandiRates />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/crop-advisory" element={<CropAdvisory />} />
          <Route path="/farm-management" element={<FarmManagement />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/community" element={<Community />} />
          <Route path="/government-updates" element={<GovernmentUpdates />} />
          <Route path="/language" element={<Language />} />
          <Route path="/kisan-call-center" element={<KisanCallCenter />} />
          <Route path="/crop-insurance" element={<CropInsurance />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/ai-recommendations" element={<AIRecommendations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<NotificationSettings />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;