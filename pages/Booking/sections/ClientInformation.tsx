import React from 'react';

const ClientInformation: React.FC = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm">
          1
        </span>
        <h2 className="text-[#111418] dark:text-white text-2xl font-bold">Informations Client</h2>
      </div>
      <div className="bg-white dark:bg-[#1a252f] p-6 rounded-xl shadow-sm border border-[#e5e7eb] dark:border-[#2a3038] grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#111418] dark:text-white">Nom Complet</label>
          <input
            className="w-full h-12 rounded-lg border-[#d1d5db] dark:border-[#3a4550] dark:bg-[#111418] focus:border-primary focus:ring-1 focus:ring-primary px-4"
            placeholder="Jean Dupont"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#111418] dark:text-white">
            Numéro WhatsApp
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-sm text-[#617589]">
              <span className="material-symbols-outlined text-green-500 text-lg">call</span> +228
            </span>
            <input
              className="w-full h-12 rounded-lg border-[#d1d5db] dark:border-[#3a4550] dark:bg-[#111418] focus:border-primary focus:ring-1 focus:ring-primary pl-20 pr-4"
              placeholder="90 00 00 00"
              type="tel"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-semibold text-[#111418] dark:text-white">
            Adresse Email
          </label>
          <input
            className="w-full h-12 rounded-lg border-[#d1d5db] dark:border-[#3a4550] dark:bg-[#111418] focus:border-primary focus:ring-1 focus:ring-primary px-4"
            placeholder="jean@example.com"
            type="email"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientInformation;
