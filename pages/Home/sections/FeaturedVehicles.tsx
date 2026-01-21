
import React from 'react';
import { MOCK_VEHICLES } from '../../../constants';
import ScrollAnimation from '../../../components/ScrollAnimation';

const FeaturedVehicles: React.FC = () => {
  return (
    <section className="px-6 lg:px-10 py-20 bg-background-light dark:bg-background-dark" id="fleet">
      <div className="max-w-[1280px] mx-auto">
        <ScrollAnimation animation="fade-in-up">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-[#111418] dark:text-white text-[28px] font-black leading-tight tracking-tight">Véhicules en vedette</h2>
              <p className="text-[#617589] dark:text-gray-400 mt-2">Prêts pour vos trajets en ville ou vers l'intérieur du pays.</p>
            </div>
            <a className="text-primary font-bold text-sm flex items-center gap-1 hover:underline" href="#/fleet">
              Voir tout le catalogue <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_VEHICLES.map((vehicle, index) => (
            <ScrollAnimation key={vehicle.id} animation="fade-in-up" delay={index * 100}>
              <div className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full ${vehicle.isPopular ? 'border-2 border-primary/20' : ''}`}>
                <div 
                  className="h-48 bg-cover bg-center cursor-pointer" 
                  style={{ backgroundImage: `url('${vehicle.imageUrl}')` }}
                  onClick={() => window.location.hash = `#/details/${vehicle.id}`}
                ></div>
                <div className="p-6 relative">
                  {vehicle.isPopular && (
                    <div className="absolute -top-4 right-6 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Populaire</div>
                  )}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold dark:text-white">{vehicle.name}</h3>
                      <p className="text-xs text-[#617589] dark:text-gray-400 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">location_on</span> Lomé, Togo
                      </p>
                    </div>
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">{vehicle.category}</span>
                  </div>
                  <div className="flex gap-4 mb-6 text-sm text-[#617589] dark:text-gray-400 border-y border-gray-100 dark:border-gray-800 py-3">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">settings</span> {vehicle.transmission}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">person</span> {vehicle.seats} Places</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-black text-primary">{vehicle.pricePerDay.toLocaleString()}</span>
                      <span className="text-sm font-medium text-[#617589] dark:text-gray-400"> FCFA/jour</span>
                    </div>
                    <button 
                      className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90"
                      onClick={() => window.location.hash = `#/details/${vehicle.id}`}
                    >
                      <span className="material-symbols-outlined">calendar_today</span>
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
