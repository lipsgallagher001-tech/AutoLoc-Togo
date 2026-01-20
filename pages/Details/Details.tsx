
import React, { useEffect } from 'react';
import { MOCK_VEHICLES } from '../../constants.ts';
import DetailsOverview from './sections/DetailsOverview.tsx';
import PricingOptions from './sections/PricingOptions.tsx';
import Sidebar from './sections/Sidebar.tsx';

const Details: React.FC = () => {
  const hashParts = window.location.hash.split('/');
  const id = hashParts[hashParts.length - 1] || '1';
  const vehicle = MOCK_VEHICLES.find(v => v.id === id) || MOCK_VEHICLES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <main className="min-h-screen bg-gray-50 pt-10 pb-24 animate-in fade-in duration-500">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
          <a href="#/" className="hover:text-blue-600">Accueil</a>
          <span>›</span>
          <a href="#/fleet" className="hover:text-blue-600">Véhicules</a>
          <span>›</span>
          <span className="text-gray-900">{vehicle.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            <DetailsOverview vehicle={vehicle} />
            <PricingOptions price={vehicle.pricePerDay} />
          </div>
          <div className="lg:col-span-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;
