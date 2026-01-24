import React from 'react';
import StatsGrid from './StatsGrid';
import StatisticsGrid from './statistics/StatisticsGrid';
import RecentBookings from './RecentBookings';
import QuickActions from './QuickActions';
import RevenueChart from '../../../components/charts/RevenueChart';
import VehicleCategoryChart from '../../../components/charts/VehicleCategoryChart';

const DashboardContent: React.FC = () => {
  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8">
      {/* Page Heading */}
      <div className="flex flex-col gap-1">
        <h1 className="text-[#111418] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
          Vue d'Ensemble du Tableau de Bord
        </h1>
        <p className="text-[#617589] dark:text-gray-400 text-base font-normal">
          Bienvenue, admin. Voici les dernières informations des flottes de Lomé et Kara.
        </p>
      </div>

      {/* Statistics Grid - Detailed Stats */}
      <div>
        <h2 className="text-[#111418] dark:text-white text-xl font-bold mb-4">
          Statistiques Détaillées
        </h2>
        <StatisticsGrid />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <VehicleCategoryChart />
      </div>

      {/* Stats Grid - Quick Overview */}
      <div>
        <h2 className="text-[#111418] dark:text-white text-xl font-bold mb-4">
          Aperçu Rapide
        </h2>
        <StatsGrid />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Recent Bookings Table */}
        <RecentBookings />

        {/* Quick Actions */}
        <div className="space-y-6">
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
