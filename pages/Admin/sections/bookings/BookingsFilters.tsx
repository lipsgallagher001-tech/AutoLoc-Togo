import React from 'react';

const BookingsFilters: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#1a2632] rounded-xl p-4 border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm flex flex-col md:flex-row gap-4">
      {/* Search Bar */}
      <div className="flex-1">
        <label className="flex flex-col w-full h-11">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-[#617589] flex bg-[#f0f2f4] dark:bg-background-dark items-center justify-center pl-4 rounded-l-lg">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="form-input flex w-full border-none bg-[#f0f2f4] dark:bg-background-dark focus:ring-2 focus:ring-primary/20 rounded-r-lg text-[#111418] dark:text-white placeholder:text-[#617589] px-4 text-sm font-normal"
              placeholder="Rechercher par Réf ID ou nom du client..."
              type="text"
            />
          </div>
        </label>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 flex-wrap">
        <button className="flex h-11 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f4] dark:bg-background-dark px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <span className="text-[#111418] dark:text-white text-sm font-medium">
            Statut: Tous
          </span>
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </button>

        <button className="flex h-11 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f4] dark:bg-background-dark px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <span className="material-symbols-outlined text-sm">calendar_today</span>
          <span className="text-[#111418] dark:text-white text-sm font-medium">
            Plage de Dates
          </span>
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </button>

        <button className="flex h-11 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f4] dark:bg-background-dark px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <span className="material-symbols-outlined text-sm">filter_list</span>
          <span className="text-[#111418] dark:text-white text-sm font-medium">
            Plus de Filtres
          </span>
        </button>
      </div>
    </div>
  );
};

export default BookingsFilters;
