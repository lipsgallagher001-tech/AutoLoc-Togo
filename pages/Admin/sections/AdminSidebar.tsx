import React from 'react';

interface AdminSidebarProps {
  activeSection?: string;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeSection = 'dashboard' }) => {
  const menuItems = [
    { id: 'dashboard', icon: 'dashboard', label: 'Tableau de bord', hash: '#/admin' },
    { id: 'bookings', icon: 'calendar_today', label: 'Réservations', hash: '#/admin/bookings' },
    { id: 'fleet', icon: 'directions_car', label: 'Flotte', hash: '#/admin/fleet' },
    { id: 'drivers', icon: 'person', label: 'Chauffeurs', hash: '#/admin/drivers' },
  ];

  return (
    <aside className="w-72 bg-white dark:bg-[#1a2632] border-r border-[#dbe0e6] dark:border-[#2d3a4b] flex flex-col fixed h-full z-20">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary size-10 rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-2xl">car_rental</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">
              AutoLoc Admin
            </h1>
            <p className="text-[#617589] dark:text-gray-400 text-xs font-normal">
              Location de Véhicules Togo
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={item.hash}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${activeSection === item.id
              ? 'bg-primary/10 text-primary'
              : 'text-[#617589] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
          >
            <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
            <p className={`text-sm ${activeSection === item.id ? 'font-semibold' : 'font-medium'}`}>
              {item.label}
            </p>
          </a>
        ))}
      </nav>

      <div className="p-4 border-t border-[#dbe0e6] dark:border-[#2d3a4b]">
        <a
          href="#/admin/settings"
          className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-[#2d3a4b] hover:bg-slate-200 dark:hover:bg-[#343e4b] text-[#111418] dark:text-white rounded-lg h-11 px-4 text-sm font-bold transition-all"
        >
          <span className="material-symbols-outlined text-xl">settings</span>
          <span>Paramètres</span>
        </a>
      </div>
    </aside>
  );
};

export default AdminSidebar;
