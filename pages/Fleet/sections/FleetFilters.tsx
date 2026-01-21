import React, { useState } from 'react';

const FleetFilters: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [driverOption, setDriverOption] = useState('Avec Chauffeur');

  const categories = [
    { name: 'Tous', icon: '' },
    { name: 'Berline', icon: 'directions_car' },
    { name: 'SUV', icon: 'electric_car' },
    { name: '4x4', icon: 'minor_crash' },
    { name: 'Minibus', icon: 'airport_shuttle' }
  ];

  return (
    <div className="px-4 sm:px-10 mb-8 flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Chips (Vehicle Types) */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex h-10 items-center justify-center gap-x-2 rounded-lg px-5 transition-colors ${
                selectedCategory === category.name
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'bg-white dark:bg-slate-800 border border-[#f0f2f4] dark:border-slate-700 hover:border-primary'
              }`}
            >
              <span className={`text-sm font-${selectedCategory === category.name ? 'semibold' : 'medium'} ${
                selectedCategory === category.name ? '' : 'text-[#111418] dark:text-slate-200'
              }`}>
                {category.name}
              </span>
              {category.icon && (
                <span className="material-symbols-outlined text-sm">{category.icon}</span>
              )}
            </button>
          ))}
        </div>

        {/* SegmentedButtons (Chauffeur Option) */}
        <div className="flex min-w-[300px] h-11 items-center justify-center rounded-xl bg-[#e5e7eb] dark:bg-slate-800 p-1">
          <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 transition-all ${
            driverOption === 'Avec Chauffeur'
              ? 'bg-white dark:bg-slate-700 shadow-sm text-primary'
              : 'text-[#617589] dark:text-slate-400'
          } text-sm font-bold`}>
            <span className="truncate">Avec Chauffeur</span>
            <input
              checked={driverOption === 'Avec Chauffeur'}
              onChange={() => setDriverOption('Avec Chauffeur')}
              className="hidden"
              name="chauffeur-type"
              type="radio"
              value="Avec Chauffeur"
            />
          </label>
          <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 transition-all ${
            driverOption === 'Sans Chauffeur'
              ? 'bg-white dark:bg-slate-700 shadow-sm text-primary'
              : 'text-[#617589] dark:text-slate-400'
          } text-sm font-bold`}>
            <span className="truncate">Sans Chauffeur</span>
            <input
              checked={driverOption === 'Sans Chauffeur'}
              onChange={() => setDriverOption('Sans Chauffeur')}
              className="hidden"
              name="chauffeur-type"
              type="radio"
              value="Sans Chauffeur"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default FleetFilters;
