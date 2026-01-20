
import React from 'react';
import Button from '../../../components/UI/Button';

interface Props {
  price: number;
}

const PricingOptions: React.FC<Props> = ({ price }) => {
  const options = [
    { duration: '1 Jour', total: price, label: 'POPULAIRE' },
    { duration: '3 Jours', total: price * 3 - 15000, sub: `CFA total (${Math.floor((price * 3 - 15000)/3/1000)}k/j)` },
    { duration: '1 Semaine', total: price * 7 - 70000, sub: `CFA total (${Math.floor((price * 7 - 70000)/7/1000)}k/j)` },
    { duration: '1 Mois', total: price * 30 - 450000, sub: `CFA total (${Math.floor((price * 30 - 450000)/30/1000)}k/j)` }
  ];

  return (
    <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm space-y-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black">Options de Location</h2>
        <div className="flex p-1 bg-gray-100 rounded-xl text-xs">
          <button className="bg-white px-4 py-2 rounded-lg shadow-sm font-bold text-[#1D7AFC]">Avec Chauffeur</button>
          <button className="px-4 py-2 rounded-lg font-bold text-gray-400">Sans Chauffeur</button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {options.map((opt, i) => (
          <div key={i} className={`relative p-6 rounded-2xl border-2 transition-all cursor-pointer ${i === 0 ? 'border-blue-500 bg-blue-50/30' : 'border-gray-100 hover:border-blue-200'}`}>
            {opt.label && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full">
                {opt.label}
              </div>
            )}
            <p className="text-center text-gray-500 text-sm mb-2">{opt.duration}</p>
            <p className="text-center text-2xl font-black text-gray-900">{opt.total.toLocaleString()}</p>
            <p className="text-center text-[10px] text-gray-400 font-bold">{opt.sub || 'CFA / jour'}</p>
          </div>
        ))}
      </div>

      <Button 
        fullWidth 
        className="!py-6 !rounded-2xl text-lg flex items-center justify-center gap-3"
        onClick={() => window.location.hash = '#/booking'}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        Réserver ce véhicule
      </Button>

      <div className="flex justify-center items-center gap-2 text-gray-400 text-xs font-bold">
         <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
         Assurance tous risques et assistance 24/7 incluses
      </div>
    </div>
  );
};

export default PricingOptions;
