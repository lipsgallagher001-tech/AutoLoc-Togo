import React from 'react';

const FleetStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Véhicules */}
      <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
        <div className="flex justify-between items-start mb-2">
          <p className="text-[#617589] dark:text-gray-400 text-sm font-medium">
            Total Véhicules
          </p>
          <span className="bg-primary/10 text-primary p-1 rounded">
            <span className="material-symbols-outlined text-lg">directions_car</span>
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-[#111418] dark:text-white">124</h3>
          <span className="text-emerald-500 text-xs font-bold">+5%</span>
        </div>
      </div>

      {/* Actuellement Loués */}
      <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
        <div className="flex justify-between items-start mb-2">
          <p className="text-[#617589] dark:text-gray-400 text-sm font-medium">
            Actuellement Loués
          </p>
          <span className="bg-emerald-500/10 text-emerald-500 p-1 rounded">
            <span className="material-symbols-outlined text-lg">key</span>
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-[#111418] dark:text-white">82</h3>
          <span className="text-emerald-500 text-xs font-bold">+2.4%</span>
        </div>
      </div>

      {/* En Maintenance */}
      <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
        <div className="flex justify-between items-start mb-2">
          <p className="text-[#617589] dark:text-gray-400 text-sm font-medium">
            En Maintenance
          </p>
          <span className="bg-orange-500/10 text-orange-500 p-1 rounded">
            <span className="material-symbols-outlined text-lg">build</span>
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-[#111418] dark:text-white">12</h3>
          <span className="text-rose-500 text-xs font-bold">-1%</span>
        </div>
      </div>

      {/* Taux d'Utilisation */}
      <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
        <div className="flex justify-between items-start mb-2">
          <p className="text-[#617589] dark:text-gray-400 text-sm font-medium">
            Taux d'Utilisation
          </p>
          <span className="bg-purple-500/10 text-purple-500 p-1 rounded">
            <span className="material-symbols-outlined text-lg">analytics</span>
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-[#111418] dark:text-white">78.5%</h3>
          <span className="text-emerald-500 text-xs font-bold">+0.8%</span>
        </div>
      </div>
    </div>
  );
};

export default FleetStats;
