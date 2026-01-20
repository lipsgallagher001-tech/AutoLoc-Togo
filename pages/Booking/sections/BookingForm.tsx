
import React from 'react';
import Button from '../../../components/UI/Button';

const BookingForm: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#1D7AFC] text-white flex items-center justify-center font-black">1</div>
          <h2 className="text-2xl font-black">Informations Client</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Nom Complet</label>
            <input type="text" placeholder="John Doe" className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Numéro WhatsApp</label>
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">🇹🇬 +228</span>
              <input type="text" placeholder="00 00 00 00" className="w-full pl-24 pr-5 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            </div>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-bold text-gray-700">Email</label>
            <input type="email" placeholder="john@example.com" className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#1D7AFC] text-white flex items-center justify-center font-black">2</div>
          <h2 className="text-2xl font-black">Détails de Location</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Date de retrait</label>
            <input type="date" className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Date de retour</label>
            <input type="date" className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-bold text-gray-700">Options Additionnelles</label>
            <select className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer">
              <option>Sans Chauffeur (Standard)</option>
              <option>Avec Chauffeur (+5 000 CFA/jour)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#1D7AFC] text-white flex items-center justify-center font-black">3</div>
          <h2 className="text-2xl font-black">Choix du Paiement</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="border-2 border-blue-500 bg-blue-50 p-6 rounded-2xl cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                 <div className="bg-blue-600 p-2 rounded-lg"><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg></div>
                 <div className="w-5 h-5 rounded-full border-4 border-blue-600 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div></div>
              </div>
              <h4 className="font-bold mb-1">Paiement à la livraison</h4>
              <p className="text-xs text-gray-500">Payez en espèces, T-Money ou Moov Money lors de la remise des clés.</p>
           </div>
           <div className="border border-gray-200 p-6 rounded-2xl hover:border-blue-200 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                 <div className="bg-gray-100 p-2 rounded-lg text-gray-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg></div>
                 <div className="w-5 h-5 rounded-full border-2 border-gray-100"></div>
              </div>
              <h4 className="font-bold mb-1">Paiement en ligne</h4>
              <p className="text-xs text-gray-500">Payez dès maintenant par Carte Bancaire ou Flooz pour garantir la disponibilité.</p>
           </div>
        </div>
      </div>

      <div className="pt-8 space-y-6">
        <div className="flex items-start gap-3">
          <input type="checkbox" id="terms" className="mt-1 w-5 h-5 rounded accent-blue-600" />
          <label htmlFor="terms" className="text-sm text-gray-500 leading-relaxed">
            J'accepte les <a href="#" className="text-blue-600 font-bold hover:underline">conditions générales</a> d'AutoLoc. Je comprends que la réservation n'est définitive qu'après confirmation par un agent.
          </label>
        </div>
        <Button 
          fullWidth 
          className="!py-5 !rounded-2xl text-lg font-black"
          onClick={() => window.location.hash = '#/success'}
        >
          Confirmer la demande de réservation
        </Button>
      </div>
    </div>
  );
};

export default BookingForm;
