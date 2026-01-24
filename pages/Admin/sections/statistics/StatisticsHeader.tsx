import React from 'react';

const StatisticsHeader: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-black text-[#111418] dark:text-white tracking-tight">
          Statistiques Générales
        </h1>
        <p className="text-[#617589] dark:text-gray-400 mt-1">
          Vue d'ensemble des performances de votre entreprise.
        </p>
      </div>
      <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20">
        <span className="material-symbols-outlined">download</span>
        <span>Exporter le Rapport</span>
      </button>
    </div>
  );
};

export default StatisticsHeader;
