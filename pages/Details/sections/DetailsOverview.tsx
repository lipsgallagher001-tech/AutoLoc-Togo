
import React from 'react';
import { Vehicle } from '../../../types';

interface Props {
  vehicle: Vehicle;
}

const DetailsOverview: React.FC<Props> = ({ vehicle }) => {
  return (
    <div className="space-y-10">
      <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm p-2">
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
          <img 
            src={vehicle.imageUrl} 
            alt={vehicle.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
             <div className="w-2 h-2 rounded-full bg-white shadow-lg"></div>
             <div className="w-2 h-2 rounded-full bg-white/40 shadow-lg"></div>
             <div className="w-2 h-2 rounded-full bg-white/40 shadow-lg"></div>
             <div className="w-2 h-2 rounded-full bg-white/40 shadow-lg"></div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 px-2 pb-2">
          {[1, 2, 3, 4].map(i => (
             <img key={i} src={`https://picsum.photos/seed/detail-${i}/400/300`} className={`rounded-xl aspect-video object-cover cursor-pointer hover:opacity-80 transition-opacity ${i === 1 ? 'border-4 border-blue-100' : ''}`} />
          ))}
        </div>
      </div>

      <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-6">{vehicle.name}</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            {vehicle.description || "Un véhicule d'exception pour vos déplacements professionnels ou personnels à travers Lomé et le Togo."}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'TYPE', value: vehicle.category, icon: '🚙' },
            { label: 'PLACES', value: `${vehicle.seats} Personnes`, icon: '👥' },
            { label: 'TRANSMISSION', value: vehicle.transmission, icon: '⚙️' },
            { label: 'CLIM', value: 'Bi-Zone', icon: '❄️' },
          ].map((spec, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
              <span className="text-2xl mb-2 block">{spec.icon}</span>
              <p className="text-[10px] text-gray-400 font-black tracking-widest mb-1">{spec.label}</p>
              <p className="text-sm font-bold text-gray-900">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsOverview;
