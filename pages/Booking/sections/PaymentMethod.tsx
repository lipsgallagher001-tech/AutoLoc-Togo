import React, { useState } from 'react';

const PaymentMethod: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState<'delivery' | 'online'>('delivery');

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm">
          3
        </span>
        <h2 className="text-[#111418] dark:text-white text-2xl font-bold">Choix du Paiement</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label
          className={`relative flex flex-col p-5 border-2 rounded-xl cursor-pointer bg-white dark:bg-[#1a252f] transition-all ${
            selectedPayment === 'delivery'
              ? 'border-primary ring-2 ring-primary ring-opacity-10'
              : 'border-transparent hover:border-gray-200'
          }`}
        >
          <input
            checked={selectedPayment === 'delivery'}
            onChange={() => setSelectedPayment('delivery')}
            className="sr-only"
            name="payment"
            type="radio"
          />
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-primary">handshake</span>
            <span className="font-bold text-[#111418] dark:text-white">Paiement à la Livraison</span>
          </div>
          <p className="text-sm text-[#617589] leading-tight">
            Payez en espèces, T-Money ou Moov Money lors de la remise des clés.
          </p>
        </label>
        <label
          className={`relative flex flex-col p-5 border-2 rounded-xl cursor-pointer bg-white dark:bg-[#1a252f] transition-all ${
            selectedPayment === 'online'
              ? 'border-primary ring-2 ring-primary ring-opacity-10'
              : 'border-transparent hover:border-gray-200'
          }`}
        >
          <input
            checked={selectedPayment === 'online'}
            onChange={() => setSelectedPayment('online')}
            className="sr-only"
            name="payment"
            type="radio"
          />
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-[#617589]">lock</span>
            <span className="font-bold text-[#111418] dark:text-white">Paiement en Ligne</span>
          </div>
          <p className="text-sm text-[#617589] leading-tight">
            Payez maintenant de manière sécurisée par Carte Bancaire ou Mobile Money pour garantir la disponibilité.
          </p>
        </label>
      </div>
    </section>
  );
};

export default PaymentMethod;
