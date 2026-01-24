import React from 'react';

const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* Total Réservations */}
      <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
            <span className="material-symbols-outlined">book_online</span>
          </div>
          <span className="text-[#078838] text-xs font-bold px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded-full">
            +12.5%
          </span>
        </div>
        <p className="text-[#617589] dark:text-gray-400 text-sm font-medium mb-1">
          Total Réservations
        </p>
        <p className="text-[#111418] dark:text-white text-2xl font-bold">1,284</p>
      </div>

      {/* Locations Actives */}
      <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600">
            <span className="material-symbols-outlined">car_rental</span>
          </div>
          <span className="text-[#078838] text-xs font-bold px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded-full">
            +5.2%
          </span>
        </div>
        <p className="text-[#617589] dark:text-gray-400 text-sm font-medium mb-1">
          Locations Actives
        </p>
        <p className="text-[#111418] dark:text-white text-2xl font-bold">42</p>
      </div>

      {/* Demandes en Attente */}
      <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-orange-600">
            <span className="material-symbols-outlined">pending_actions</span>
          </div>
          <span className="text-[#e73908] text-xs font-bold px-2 py-1 bg-orange-50 dark:bg-orange-900/20 rounded-full">
            -2.1%
          </span>
        </div>
        <p className="text-[#617589] dark:text-gray-400 text-sm font-medium mb-1">
          Demandes en Attente
        </p>
        <p className="text-[#111418] dark:text-white text-2xl font-bold">15</p>
      </div>

      {/* Revenu Mensuel */}
      <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600">
            <span className="material-symbols-outlined">payments</span>
          </div>
          <span className="text-[#078838] text-xs font-bold px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded-full">
            +18.3%
          </span>
        </div>
        <p className="text-[#617589] dark:text-gray-400 text-sm font-medium mb-1">
          Revenu Mensuel
        </p>
        <p className="text-[#111418] dark:text-white text-2xl font-bold">
          2,450,000 FCFA
        </p>
      </div>
    </div>
  );
};

export default StatsGrid;
