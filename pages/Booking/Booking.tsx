
import React, { useEffect } from 'react';
import BookingForm from './sections/BookingForm';
import BookingSummary from './sections/BookingSummary';

const Booking: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 pt-10 pb-24 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
          <a href="#/" className="hover:text-blue-600">Accueil</a>
          <span>›</span>
          <a href="#/fleet" className="hover:text-blue-600">Véhicules</a>
          <span>›</span>
          <span className="text-gray-900">Finaliser la réservation</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4 mb-12">
              <h1 className="text-4xl font-black text-gray-900">Finalisez Votre Réservation</h1>
              <p className="text-gray-500 text-lg flex items-center gap-2 font-medium">
                 <span className="text-blue-500 text-2xl">💬</span>
                 Remplissez le formulaire. Un agent vous contactera sous 2 heures par WhatsApp.
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-xl p-2 rounded-3xl">
               <BookingForm />
            </div>
          </div>
          <div className="lg:col-span-4">
            <BookingSummary />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Booking;
