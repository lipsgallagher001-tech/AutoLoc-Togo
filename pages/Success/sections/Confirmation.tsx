
import React from 'react';
import { MOCK_VEHICLES } from '../../../constants';
import Button from '../../../components/UI/Button';

const Confirmation: React.FC = () => {
  const vehicle = MOCK_VEHICLES[2]; // Hilux as in screenshot

  return (
    <div className="max-w-4xl mx-auto py-20 px-4 animate-in zoom-in duration-500">
      <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-500/10 border border-gray-100 overflow-hidden text-center p-12 lg:p-20 space-y-12">
        <div className="relative">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-4xl shadow-lg shadow-green-500/20">
            ✓
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-green-50 animate-ping opacity-75"></div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl font-black text-gray-900">Réservation Réussie !</h1>
          <p className="text-gray-500 text-xl max-w-xl mx-auto leading-relaxed">
            Votre aventure au Togo commence ici. Nous avons bien reçu votre demande et préparons tout pour vous.
          </p>
          <div className="inline-block bg-gray-50 px-6 py-2 rounded-xl text-gray-400 font-bold text-sm">
            #REF-20250120-001
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left pt-12 border-t border-gray-50">
          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase tracking-widest text-gray-400">Résumé</h3>
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
              <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full aspect-video object-cover rounded-2xl mb-6" />
              <h4 className="text-xl font-bold">{vehicle.name}</h4>
              <p className="text-gray-500 text-sm mt-1">Retrait: 20 Jan. 2025</p>
              <p className="text-gray-500 text-sm">Retour: 25 Jan. 2025</p>
              <div className="pt-6 mt-6 border-t border-gray-200 flex justify-between items-center">
                <span className="text-xs font-bold text-gray-400">Total Payé</span>
                <span className="text-2xl font-black text-blue-600">250.000 CFA</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-lg font-black uppercase tracking-widest text-gray-400">Prochaines Étapes</h3>
            {[
              { num: '1', title: 'Contact d\'un agent', desc: 'Un agent local vous contactera via WhatsApp sous 15 minutes.' },
              { num: '2', title: 'Confirmation finale', desc: 'Signez numériquement votre contrat de location envoyé par l\'agent.' },
              { num: '3', title: 'Remise du véhicule', desc: 'Retrouvez votre chauffeur à Lomé ou à l\'Aéroport Gnassingbé Eyadéma.' }
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1D7AFC] flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-[#1D7AFC] group-hover:text-white transition-all">
                  {step.num}
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">{step.title}</h5>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-12">
          <Button variant="whatsapp" fullWidth className="!py-4 shadow-xl">
             Chat on WhatsApp
          </Button>
          <Button variant="secondary" fullWidth className="!py-4" onClick={() => window.location.hash = '#/'}>
             Retour Accueil
          </Button>
        </div>

        <div className="pt-8 flex flex-col items-center gap-4">
           <div className="flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-widest">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
             Garantie Transparence AutoLoc : Sans frais cachés
           </div>
           <p className="text-[10px] text-gray-400 font-medium">Besoin d'aide ? Appelez-nous au <span className="text-gray-900 font-bold">+228 90 00 00 00</span></p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
