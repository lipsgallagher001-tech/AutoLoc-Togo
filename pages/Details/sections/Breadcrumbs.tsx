import React from 'react';

interface BreadcrumbsProps {
  vehicleName: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ vehicleName }) => {
  return (
    <nav className="flex items-center gap-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
      <a className="hover:text-primary" href="#/">
        Accueil
      </a>
      <span className="material-symbols-outlined text-xs">chevron_right</span>
      <a className="hover:text-primary" href="#/fleet">
        Véhicules
      </a>
      <span className="material-symbols-outlined text-xs">chevron_right</span>
      <span className="text-[#111418] dark:text-white font-medium">{vehicleName}</span>
    </nav>
  );
};

export default Breadcrumbs;
