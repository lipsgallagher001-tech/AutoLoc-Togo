
import React from 'react';
import { MOCK_VEHICLES } from '../../../constants';

const BookingSummary: React.FC = () => {
  const vehicle = MOCK_VEHICLES[0]; // Simplified for demo

  return (
    <div className="space-y-6 sticky top-24">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full aspect-video object-cover" />
        <div className="p-8 space-y-8">
           <div>
             <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] text-gray-400 font-black tracking-widest uppercase">Résumé du véhicule</span>
                <span className="bg-green-100 text-green-700 text-[9px] font-black px-2 py-0.5 rounded uppercase">Disponible</span>
             </div>
             <h3 className="text-xl font-bold">{vehicle.name}</h3>
             <div className="flex gap-4 mt-2 text-xs text-gray-500 font-medium">
               <span>⚙️ {vehicle.transmission}</span>
               <span>❄️ Climatisé</span>
               <span>👥 {vehicle.seats} Places</span>
             </div>
           </div>

           <div className="space-y-4 pt-8 border-t border-gray-100">
             <div className="flex justify-between text-sm text-gray-500">
                <span>Tarif journalier</span>
                <span className="font-bold text-gray-900">{vehicle.pricePerDay.toLocaleString()} CFA</span>
             </div>
             <div className="flex justify-between text-sm text-gray-500">
                <span>Durée (estimation)</span>
                <span className="font-bold text-gray-900">3 Jours</span>
             </div>
             <div className="flex justify-between text-sm text-gray-500">
                <span>Frais de service</span>
                <span className="font-bold text-gray-900">0 CFA</span>
             </div>
           </div>

           <div className="pt-8 border-t border-gray-100 flex justify-between items-end">
             <div>
                <p className="text-xs font-black text-[#1D7AFC] uppercase mb-1">Estimation Totale</p>
                <p className="text-3xl font-black text-gray-900">105.000 <span className="text-sm">CFA</span></p>
             </div>
             <p className="text-[9px] text-gray-400 font-bold">TVA INCLUSE</p>
           </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-center gap-4">
         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">❓</div>
         <div>
            <p className="text-xs font-bold text-gray-900">Besoin d'aide ?</p>
            <a href="#" className="text-[#1D7AFC] font-black text-sm hover:underline">Chat WhatsApp immédiat</a>
         </div>
      </div>
    </div>
  );
};

export default BookingSummary;
