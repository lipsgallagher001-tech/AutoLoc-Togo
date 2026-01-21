
import React from 'react';
import ScrollAnimation from '../../../components/ScrollAnimation';

const FleetHeader: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between items-end gap-6 p-4 sm:px-10 py-10">
      <ScrollAnimation animation="slide-in-left">
        <div className="max-w-2xl flex flex-col gap-3">
          <p className="text-[#111418] dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-tight">
            Notre Flotte à Lomé
          </p>
          <p className="text-[#617589] dark:text-slate-400 text-lg font-normal leading-relaxed">
            Transparence, simplicité et contact humain pour votre location de véhicule au Togo. Choisissez parmi notre sélection rigoureusement entretenue.
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animation="fade-in" delay={200}>
        <button className="flex items-center gap-2 rounded-lg h-12 px-6 bg-white dark:bg-slate-800 border border-[#f0f2f4] dark:border-slate-700 text-[#111418] dark:text-white text-sm font-bold shadow-sm hover:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined text-primary">support_agent</span>
          Besoin d'aide ?
        </button>
      </ScrollAnimation>
    </div>
  );
};

export default FleetHeader;
