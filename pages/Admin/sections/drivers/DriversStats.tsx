import React from 'react';

const DriversStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Chauffeurs */}
      <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
        <div className="flex justify-between items-start mb-2">
          <p className="text-[#617589] dark:text-gray-400 text-sm font-medium">
            Total Chauffeurs
          </p>
          <span className="bg-primary/10 text-primary p-1 rounded">
            <span className="material-symbols-outlined text-lg">badge</span>
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-[#111418] dark:text-white">45</h3>
          <span className="text-emerald-500 text-xs font-bold">+2 ce mois</span>
        </div>
      </div>

      {/* En Mission */}
      <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
        <div className="flex justify-between items-start mb-2">
          <p className="text-[#617589] dark:text-gray-400 text-sm font-medium">
            En Mission
          </p>
          <span className="bg-emerald-500/10 text-emerald-500 p-1 rounded">
            <span className="material-symbols-outlined text-lg">commute</span>
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-[#111418] dark:text-white">28</h3>
          <span className="text-[#617589] dark:text-gray-400 text-xs text-emerald-500">62% d'activité</span>
        </div>
      </div>

      {/* Disponibles */}
      <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
        <div className="flex justify-between items-start mb-2">
          <p className="text-[#617589] dark:text-gray-400 text-sm font-medium">
            Disponibles
          </p>
          <span className="bg-blue-500/10 text-blue-500 p-1 rounded">
            <span className="material-symbols-outlined text-lg">person_check</span>
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-[#111418] dark:text-white">12</h3>
          <span className="text-blue-500 text-xs font-bold">Prêts</span>
        </div>
      </div>

      {/* Note Moyenne */}
      <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
        <div className="flex justify-between items-start mb-2">
          <p className="text-[#617589] dark:text-gray-400 text-sm font-medium">
            Note Moyenne
          </p>
          <span className="bg-orange-500/10 text-orange-500 p-1 rounded">
            <span className="material-symbols-outlined text-lg">star</span>
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-[#111418] dark:text-white">4.8</h3>
          <span className="text-orange-500 text-xs font-bold">/ 5.0</span>
        </div>
      </div>
    </div>
  );
};

export default DriversStats;
