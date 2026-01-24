import React from 'react';
import AdminSidebar from './sections/AdminSidebar';
import AdminHeader from './sections/AdminHeader';
import DashboardContent from './sections/DashboardContent';
import BookingsContent from './sections/BookingsContent';
import FleetContent from './sections/FleetContent';
import DriversContent from './sections/DriversContent';
import StatsContent from './sections/StatsContent';
import StatisticsContent from './sections/StatisticsContent';
import SettingsContent from './sections/SettingsContent';

interface AdminProps {
  section?: string;
}

const Admin: React.FC<AdminProps> = ({ section = 'dashboard' }) => {
  console.log('Admin section:', section); // Debug

  const renderContent = () => {
    switch (section) {
      case 'bookings':
        console.log('Rendering BookingsContent'); // Debug
        return <BookingsContent />;
      case 'fleet':
        console.log('Rendering FleetContent'); // Debug
        return <FleetContent />;
      case 'drivers':
        console.log('Rendering DriversContent'); // Debug
        return <DriversContent />;
      case 'stats':
        console.log('Rendering StatsContent'); // Debug
        return <StatsContent />;
      case 'statistics':
        console.log('Rendering StatisticsContent'); // Debug
        return <StatisticsContent />;
      case 'settings':
        console.log('Rendering SettingsContent'); // Debug
        return <SettingsContent />;
      case 'dashboard':
      default:
        console.log('Rendering DashboardContent'); // Debug
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      {/* Sidebar Navigation */}
      <AdminSidebar activeSection={section} />

      {/* Main Content */}
      <main className="flex-1 ml-72">
        {/* Top Navbar */}
        <AdminHeader activeSection={section} />

        {/* Dynamic Content */}
        {renderContent()}
      </main>
    </div>
  );
};

export default Admin;
