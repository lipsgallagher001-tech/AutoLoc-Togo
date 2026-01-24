import React, { useState } from 'react';

const DriversFilters: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#617589]">
              search
            </span>
            <input
              type="text"
              placeholder="Rechercher un chauffeur..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#f6f7f8] dark:bg-[#0f1a24] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg text-[#111418] dark:text-white placeholder-[#617589] focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Status Filters */}
          <div className="flex items-center gap-2 bg-[#f6f7f8] dark:bg-[#0f1a24] p-1 rounded-lg">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeFilter === 'all'
                  ? 'bg-white dark:bg-[#1a2632] text-primary shadow-sm'
                  : 'text-[#617589] hover:text-[#111418] dark:hover:text-white'
              }`}
            >
              Tous les Chauffeurs
            </button>
            <button
              onClick={() => setActiveFilter('available')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeFilter === 'available'
                  ? 'bg-white dark:bg-[#1a2632] text-primary shadow-sm'
                  : 'text-[#617589] hover:text-[#111418] dark:hover:text-white'
              }`}
            >
              Disponibles
            </button>
            <button
              onClick={() => setActiveFilter('on-mission')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeFilter === 'on-mission'
                  ? 'bg-white dark:bg-[#1a2632] text-primary shadow-sm'
                  : 'text-[#617589] hover:text-[#111418] dark:hover:text-white'
              }`}
            >
              En Mission
            </button>
            <button
              onClick={() => setActiveFilter('off-duty')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeFilter === 'off-duty'
                  ? 'bg-white dark:bg-[#1a2632] text-primary shadow-sm'
                  : 'text-[#617589] hover:text-[#111418] dark:hover:text-white'
              }`}
            >
              Hors Service
            </button>
          </div>

          {/* Action Buttons */}
          <button className="p-2.5 bg-[#f6f7f8] dark:bg-[#0f1a24] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg hover:bg-[#e8eaed] dark:hover:bg-[#1a2632] transition-colors">
            <span className="material-symbols-outlined text-[#617589]">filter_list</span>
          </button>
          <button className="p-2.5 bg-[#f6f7f8] dark:bg-[#0f1a24] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg hover:bg-[#e8eaed] dark:hover:bg-[#1a2632] transition-colors">
            <span className="material-symbols-outlined text-[#617589]">download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DriversFilters;
