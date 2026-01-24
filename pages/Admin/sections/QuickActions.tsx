import React from 'react';

const QuickActions: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
      <h2 className="text-[#111418] dark:text-white text-lg font-bold mb-4">
        Actions Rapides
      </h2>
      <div className="space-y-3">
        <button className="w-full flex items-center justify-between p-3 border border-[#dbe0e6] dark:border-[#2d3a4b] hover:border-primary dark:hover:border-primary rounded-lg group transition-all">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">directions_car</span>
            </div>
            <span className="text-sm font-bold text-[#111418] dark:text-white">
              État de la Flotte
            </span>
          </div>
          <span className="material-symbols-outlined text-[#617589] group-hover:text-primary transition-colors">
            chevron_right
          </span>
        </button>

        <button className="w-full flex items-center justify-between p-3 border border-[#dbe0e6] dark:border-[#2d3a4b] hover:border-primary dark:hover:border-primary rounded-lg group transition-all">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <span className="text-sm font-bold text-[#111418] dark:text-white">
              Contact Rapide
            </span>
          </div>
          <span className="material-symbols-outlined text-[#617589] group-hover:text-primary transition-colors">
            chevron_right
          </span>
        </button>

        <button className="w-full flex items-center justify-between p-3 border border-[#dbe0e6] dark:border-[#2d3a4b] hover:border-primary dark:hover:border-primary rounded-lg group transition-all">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">description</span>
            </div>
            <span className="text-sm font-bold text-[#111418] dark:text-white">
              Rapports
            </span>
          </div>
          <span className="material-symbols-outlined text-[#617589] group-hover:text-primary transition-colors">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
