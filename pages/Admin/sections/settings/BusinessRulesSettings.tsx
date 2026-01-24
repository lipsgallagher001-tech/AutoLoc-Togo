import React, { useState } from 'react';

const BusinessRulesSettings: React.FC = () => {
  const [businessData, setBusinessData] = useState({
    depositAmount: '150000',
    autoResponseMessage: `Bonjour ! Merci d'avoir choisi AutoLoc Togo. Votre demande de réservation pour le véhicule {vehicle_model} est bien reçue. Notre équipe vous contactera dans les plus brefs délais pour confirmation. L'équipe AutoLoc.`,
  });

  return (
    <section className="scroll-mt-32" id="rules">
      <h2 className="text-[#111418] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-6">
        Règles Commerciales
      </h2>
      <div className="bg-white dark:bg-slate-800/40 rounded-xl border border-[#dbe0e6] dark:border-slate-800 p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-300">
              Devise par Défaut
            </label>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">payments</span>
              <p className="text-lg font-bold text-[#111418] dark:text-white">FCFA (Franc CFA)</p>
              <span className="bg-primary/20 text-primary text-[10px] px-2 py-1 rounded font-black uppercase tracking-wider">
                Verrouillé
              </span>
            </div>
            <p className="text-xs text-[#617589]">
              La devise est verrouillée pour les opérations au Togo.
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-300">
              Montant de Dépôt par Défaut (FCFA)
            </label>
            <div className="relative">
              <input
                type="number"
                value={businessData.depositAmount}
                onChange={(e) =>
                  setBusinessData({ ...businessData, depositAmount: e.target.value })
                }
                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-[#dbe0e6] dark:border-slate-700 rounded-lg px-4 py-2.5 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none pl-12"
              />
              <span className="absolute left-4 top-2.5 text-[#617589]">₦</span>
            </div>
            <p className="text-xs text-[#617589] mt-1">
              Dépôt de sécurité requis pour la plupart des classes de véhicules.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#617589] dark:text-slate-300">
            Message de Réponse Automatique
          </label>
          <textarea
            value={businessData.autoResponseMessage}
            onChange={(e) =>
              setBusinessData({ ...businessData, autoResponseMessage: e.target.value })
            }
            rows={5}
            className="w-full bg-slate-50 dark:bg-slate-900/50 border border-[#dbe0e6] dark:border-slate-700 rounded-lg px-4 py-2.5 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            <span
              className="text-[10px] px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[#617589] rounded cursor-help"
              title="Nom du Client"
            >
              {'{customer_name}'}
            </span>
            <span
              className="text-[10px] px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[#617589] rounded cursor-help"
              title="Modèle du Véhicule"
            >
              {'{vehicle_model}'}
            </span>
            <span
              className="text-[10px] px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[#617589] rounded cursor-help"
              title="Date de Réservation"
            >
              {'{booking_date}'}
            </span>
          </div>
          <p className="text-xs text-[#617589]">
            Ce message est envoyé automatiquement via WhatsApp après une nouvelle réservation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessRulesSettings;
