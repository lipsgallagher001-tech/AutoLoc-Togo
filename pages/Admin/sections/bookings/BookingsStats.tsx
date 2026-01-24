import React from 'react';

const BookingsStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Total Réservations */}
      <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
        <p className="text-[#617589] dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
          Total Réservations
        </p>
        <div className="flex items-baseline gap-2">
          <p className="text-[#111418] dark:text-white tracking-light text-3xl font-bold">
            1,284
          </p>
          <p className="text-[#078838] text-sm font-semibold">+12%</p>
        </div>
      </div>

      {/* Approbations en Attente */}
      <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
        <p className="text-[#617589] dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
          Approbations en Attente
        </p>
        <div className="flex items-baseline gap-2">
          <p className="text-[#111418] dark:text-white tracking-light text-3xl font-bold">
            24
          </p>
          <p className="text-orange-500 text-sm font-semibold">+5%</p>
        </div>
      </div>

      {/* Revenu Aujourd'hui */}
      <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
        <p className="text-[#617589] dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
          Revenu Aujourd'hui
        </p>
        <div className="flex items-baseline gap-2">
          <p className="text-[#111418] dark:text-white tracking-light text-3xl font-bold">
            450,000 FCFA
          </p>
          <p className="text-[#078838] text-sm font-semibold">+8%</p>
        </div>
      </div>
    </div>
  );
};

export default BookingsStats;
