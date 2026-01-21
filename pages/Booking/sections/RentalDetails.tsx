import React from 'react';

const RentalDetails: React.FC = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm">
          2
        </span>
        <h2 className="text-[#111418] dark:text-white text-2xl font-bold">Détails de Location</h2>
      </div>
      <div className="bg-white dark:bg-[#1a252f] p-6 rounded-xl shadow-sm border border-[#e5e7eb] dark:border-[#2a3038] grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#111418] dark:text-white">Date de Retrait</label>
          <input
            className="w-full h-12 rounded-lg border-[#d1d5db] dark:border-[#3a4550] dark:bg-[#111418] focus:border-primary focus:ring-1 focus:ring-primary px-4"
            type="date"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#111418] dark:text-white">Date de Retour</label>
          <input
            className="w-full h-12 rounded-lg border-[#d1d5db] dark:border-[#3a4550] dark:bg-[#111418] focus:border-primary focus:ring-1 focus:ring-primary px-4"
            type="date"
          />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-semibold text-[#111418] dark:text-white">
            Options Additionnelles
          </label>
          <select className="w-full h-12 rounded-lg border-[#d1d5db] dark:border-[#3a4550] dark:bg-[#111418] focus:border-primary focus:ring-1 focus:ring-primary px-4">
            <option>Sans Chauffeur (Standard)</option>
            <option>Avec Chauffeur Professionnel (+10.000 FCFA/jour)</option>
            <option>Accueil à l'Aéroport</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default RentalDetails;
