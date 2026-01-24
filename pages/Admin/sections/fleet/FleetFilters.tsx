import React from 'react';

const FleetFilters: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      {/* Status Tabs */}
      <div className="flex gap-2 bg-[#f0f2f4] dark:bg-background-dark p-1 rounded-lg">
        <button className="px-4 py-1.5 rounded-md text-sm font-bold bg-white dark:bg-[#1a2632] text-[#111418] dark:text-white shadow-sm transition-all">
          Tous les Véhicules
        </button>
        <button className="px-4 py-1.5 rounded-md text-sm font-medium text-[#617589] dark:text-gray-400 hover:text-[#111418] dark:hover:text-white transition-all">
          Disponibles
        </button>
        <button className="px-4 py-1.5 rounded-md text-sm font-medium text-[#617589] dark:text-gray-400 hover:text-[#111418] dark:hover:text-white transition-all">
          Loués
        </button>
        <button className="px-4 py-1.5 rounded-md text-sm font-medium text-[#617589] dark:text-gray-400 hover:text-[#111418] dark:hover:text-white transition-all">
          Maintenance
        </button>
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-3">
        <select className="bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg text-sm px-4 py-2 outline-none focus:ring-2 focus:ring-primary">
          <option>Trier par: Plus Récent</option>
          <option>Trier par: Prix Élevé-Bas</option>
          <option>Trier par: Prix Bas-Élevé</option>
        </select>
      </div>
    </div>
  );
};

export default FleetFilters;
