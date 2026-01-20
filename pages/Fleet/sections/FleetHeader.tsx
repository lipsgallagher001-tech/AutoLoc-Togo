
import React from 'react';

const categories = ['Tous', 'Berline 🚗', 'SUV 🚙', '4x4 🛻', 'Minibus 🚌'];

const FleetHeader: React.FC = () => {
  return (
    <section className="pt-20 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-5xl font-black text-gray-900 tracking-tight">Notre Flotte à Lomé</h1>
            <p className="text-gray-500 text-xl leading-relaxed">
              Transparence, simplicité et contact humain pour votre location de véhicule au Togo. Choisissez parmi notre sélection rigoureusement entretenue.
            </p>
          </div>
          
          <button className="flex items-center gap-2 bg-blue-50 text-[#1D7AFC] px-6 py-4 rounded-2xl font-bold shadow-sm hover:shadow-md transition-all">
            <span className="text-xl">🎧</span>
            Besoin d'aide ?
          </button>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-gray-100 pb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all border-2 
                  ${i === 0 ? 'bg-[#1D7AFC] border-[#1D7AFC] text-white shadow-lg shadow-blue-500/20' : 'bg-white border-gray-100 text-gray-600 hover:border-gray-300'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex p-1 bg-gray-100 rounded-xl">
            <button className="bg-white px-6 py-2.5 rounded-lg shadow-sm text-sm font-bold text-gray-900">Avec Chauffeur</button>
            <button className="px-6 py-2.5 rounded-lg text-sm font-bold text-gray-500 hover:text-gray-700">Sans Chauffeur</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetHeader;
