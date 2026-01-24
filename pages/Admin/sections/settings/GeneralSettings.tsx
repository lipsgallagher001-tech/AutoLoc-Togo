import React, { useState } from 'react';

const GeneralSettings: React.FC = () => {
  const [formData, setFormData] = useState({
    agencyName: 'AutoLoc Togo',
    contactEmail: 'contact@autoloc.tg',
    whatsappNumber: '90 00 00 00',
  });

  return (
    <section className="scroll-mt-32" id="general">
      <h2 className="text-[#111418] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-6 flex items-center">
        Paramètres Généraux
      </h2>
      <div className="bg-white dark:bg-slate-800/40 rounded-xl border border-[#dbe0e6] dark:border-slate-800 p-6 space-y-8">
        {/* Logo Card */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-32 h-32 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden border-2 border-dashed border-[#dbe0e6] dark:border-slate-700">
            <div
              className="bg-center bg-no-repeat bg-contain w-full h-full"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBHeYJ98aOXdMH1WMHEsVL_qkQrdNQSwfeow3QD6CKAuXQ28riq_VulkzNfCg_qO8zCu1axAyckSLRCta7dovM7e_yglOzV6ToGgF7rEGZMk4aKgVwWE2oRB4R1RxvghzL552p4Vmb4je4elW8qNZrMIr2RjBsXYTnvsIX6V-twd-Nm--5oJ0R2Brx5AJgSgOHGNSAmbRUSF2SNSNOTo9R6gD_-DQfCgf1zaCbpqabGG3-Nf0Ekir8olaBuVYBmeMnN0_AHWTWj5W_I")',
              }}
            ></div>
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-[#111418] dark:text-white text-lg font-bold">Logo de l'Agence</h3>
            <p className="text-[#617589] dark:text-[#9dabb9] text-sm">
              Téléchargez le logo de votre agence pour les factures et communications. Taille
              recommandée 400x400px.
            </p>
            <div className="flex gap-3 pt-2">
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Télécharger un Nouveau Logo
              </button>
              <button className="text-[#617589] dark:text-slate-400 border border-[#dbe0e6] dark:border-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800">
                Supprimer
              </button>
            </div>
          </div>
        </div>

        {/* Input Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-300">
              Nom de l'Agence
            </label>
            <input
              type="text"
              value={formData.agencyName}
              onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-900/50 border border-[#dbe0e6] dark:border-slate-700 rounded-lg px-4 py-2.5 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-300">
              Email de Contact
            </label>
            <input
              type="email"
              value={formData.contactEmail}
              onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-900/50 border border-[#dbe0e6] dark:border-slate-700 rounded-lg px-4 py-2.5 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-300">
              Numéro WhatsApp (Réservations)
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-4 bg-slate-200 dark:bg-slate-800 border border-r-0 border-[#dbe0e6] dark:border-slate-700 rounded-l-lg text-[#617589] dark:text-slate-400 text-sm">
                +228
              </span>
              <input
                type="tel"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-[#dbe0e6] dark:border-slate-700 rounded-r-lg px-4 py-2.5 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <p className="text-xs text-[#617589] mt-1">
              Canal direct pour les alertes de réservation automatisées.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralSettings;
