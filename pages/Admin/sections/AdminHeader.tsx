import React from 'react';

interface AdminHeaderProps {
  activeSection?: string;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ activeSection = 'dashboard' }) => {
  const getSectionTitle = () => {
    switch (activeSection) {
      case 'bookings':
        return 'Gestion des Réservations';
      case 'fleet':
        return 'Gestion de la Flotte';
      case 'drivers':
        return 'Gestion des Chauffeurs';
      case 'stats':
        return 'Analyses & Statistiques';
      case 'dashboard':
      default:
        return 'Tableau de Bord Admin';
    }
  };

  const getSearchPlaceholder = () => {
    switch (activeSection) {
      case 'bookings':
        return 'Rechercher une réservation...';
      case 'fleet':
        return 'Rechercher un véhicule...';
      case 'drivers':
        return 'Rechercher un chauffeur...';
      case 'stats':
        return 'Rechercher un rapport...';
      case 'dashboard':
      default:
        return 'Rechercher...';
    }
  };

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-[#1a2632] border-b border-[#f0f2f4] dark:border-[#2d3a4b] px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <h2 className="text-[#111418] dark:text-white text-lg font-bold">
          {getSectionTitle()}
        </h2>
        <div className="relative w-64">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#617589] text-xl">
            search
          </span>
          <input
            className="w-full h-10 pl-10 pr-4 bg-background-light dark:bg-background-dark border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-[#617589]"
            placeholder={getSearchPlaceholder()}
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-[#617589] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          {/* Badge de notification avec nombre */}
          <span className="absolute top-1 right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-[#1a2632]">
            5
          </span>
        </button>
        <div className="h-8 w-[1px] bg-gray-200 dark:bg-gray-700 mx-1"></div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-[#111418] dark:text-white">
              Koffi Mensah
            </p>
            <p className="text-xs text-[#617589] dark:text-gray-400">
              Administrateur Principal
            </p>
          </div>
          <div
            className="size-10 rounded-full bg-cover bg-center border-2 border-primary/20"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6eTgzhLFkMRgIV0Q-DsV-3oXvJuIl-9Fj2r5brlvmZVTRyiVx4NYhRTjFvWmcdMv9CA44c2lfV4VC7rmHyQsSJxXJiHBuxZiTXScaa7KY39jCiGF_-RzSpZ92gvw6JPY-16NY3Ml8A5VkqzcoYL3q3JHxl93Oqv5ggXrzxqdxTwgqBrio9I7xrfwNcO9ElCwCs0R99eeUahKlrui9jQp00xoybiTT-DZvWVclBUura74WZXnqbV8RbeRBzikWMdZTIypXbytEg_GS')",
            }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
