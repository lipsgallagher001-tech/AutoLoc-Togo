
import React, { useState } from 'react';

interface PricingOptionsProps {
  basePrice: number;
}

const PricingOptions: React.FC<PricingOptionsProps> = ({ basePrice }) => {
  const [driverOption, setDriverOption] = useState<'with' | 'without'>('with');

  const pricingPlans = [
    {
      duration: '1 Jour',
      total: basePrice,
      perDay: basePrice,
      isPopular: true,
    },
    {
      duration: '3 Jours',
      total: basePrice * 3 * 0.89, // 11% discount
      perDay: basePrice * 0.89,
      isPopular: false,
    },
    {
      duration: '1 Semaine',
      total: basePrice * 7 * 0.78, // 22% discount
      perDay: basePrice * 0.78,
      isPopular: false,
    },
    {
      duration: '1 Mois',
      total: basePrice * 30 * 0.67, // 33% discount
      perDay: basePrice * 0.67,
      isPopular: false,
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h3 className="text-xl font-bold">Options de Location</h3>
        {/* Toggle Switch */}
        <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg w-fit">
          <button
            onClick={() => setDriverOption('with')}
            className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${
              driverOption === 'with'
                ? 'bg-white dark:bg-gray-900 shadow-sm text-primary'
                : 'text-gray-500 hover:text-primary'
            }`}
          >
            Avec Chauffeur
          </button>
          <button
            onClick={() => setDriverOption('without')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              driverOption === 'without'
                ? 'bg-white dark:bg-gray-900 shadow-sm text-primary'
                : 'text-gray-500 hover:text-primary'
            }`}
          >
            Sans Chauffeur
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-gray-900 p-5 rounded-xl text-center shadow-lg relative overflow-hidden cursor-pointer transition-all hover:scale-105 ${
              plan.isPopular
                ? 'border-2 border-primary'
                : 'border border-gray-100 dark:border-gray-800 hover:border-primary'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                POPULAIRE
              </div>
            )}
            <p className="text-sm text-gray-500 mb-1">{plan.duration}</p>
            <p className={`text-2xl font-bold ${plan.isPopular ? 'text-primary' : ''}`}>
              {Math.round(plan.total).toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">
              {index === 0
                ? 'CFA / jour'
                : `CFA total (${Math.round(plan.perDay / 1000)}k/j)`}
            </p>
          </div>
        ))}
      </div>
      <div className="pt-4">
        <button
          onClick={() => (window.location.hash = '#/booking')}
          className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">event_available</span>
          Réserver ce véhicule
        </button>
        <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
          <span className="material-symbols-outlined text-[14px]">verified_user</span>
          Assurance tous risques et assistance 24/7 incluses
        </p>
      </div>
    </section>
  );
};

export default PricingOptions;
