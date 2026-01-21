import React from 'react';

const BookingBreadcrumbs: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <a className="text-[#617589] text-sm font-medium hover:text-primary" href="#/">
        Accueil
      </a>
      <span className="text-[#617589] text-sm">
        <span className="material-symbols-outlined text-xs">chevron_right</span>
      </span>
      <a className="text-[#617589] text-sm font-medium hover:text-primary" href="#/fleet">
        Sélection de Véhicule
      </a>
      <span className="text-[#617589] text-sm">
        <span className="material-symbols-outlined text-xs">chevron_right</span>
      </span>
      <span className="text-primary text-sm font-bold">Formulaire de Réservation</span>
    </div>
  );
};

export default BookingBreadcrumbs;
