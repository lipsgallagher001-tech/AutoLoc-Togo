
import React from 'react';
import { Vehicle } from '../../types';
import Button from './Button';

interface CardProps {
  vehicle: Vehicle;
  onViewDetails?: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ vehicle, onViewDetails }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={vehicle.imageUrl} 
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {vehicle.withDriver && (
          <div className="absolute top-4 left-4 bg-[#1D7AFC] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/></svg>
            AVEC CHAUFFEUR
          </div>
        )}
        {vehicle.isPopular && (
          <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            POPULAIRE
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
          <div className="flex items-center gap-1 text-orange-500 font-bold">
            <span className="text-sm">★</span>
            <span className="text-sm">{vehicle.rating}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-1">
            <span className="text-gray-400">🚙</span>
            {vehicle.category}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-400">👥</span>
            {vehicle.seats} Places
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Tarif journalier</p>
            <p className="text-xl font-black text-gray-900">
              {vehicle.pricePerDay.toLocaleString()} <span className="text-sm font-medium">FCFA</span>
            </p>
          </div>
          <Button 
            variant="secondary" 
            className="!px-4 !py-2 text-sm"
            onClick={() => onViewDetails?.(vehicle.id)}
          >
            Voir détails
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
