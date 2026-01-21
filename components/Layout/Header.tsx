
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-background-dark border-b border-solid border-[#f0f2f4] dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-2xl">directions_car</span>
            </div>
            <h1 className="text-[#111418] dark:text-white text-xl font-bold leading-tight tracking-tight">
              AutoLoc
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              className="text-[#111418] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
              href="#/"
            >
              Accueil
            </a>
            <a
              className="text-[#111418] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
              href="#/fleet"
            >
              Notre Flotte
            </a>
            <a
              className="text-[#111418] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
              href="#/about"
            >
              À Propos
            </a>
            <a
              className="text-[#111418] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
              href="#/contact"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#617589] text-xl">
                search
              </span>
              <input
                className="w-64 h-10 pl-10 pr-4 rounded-lg border-none bg-[#f0f2f4] dark:bg-slate-800 text-sm focus:ring-2 focus:ring-primary/50"
                placeholder="Rechercher un modèle..."
                type="text"
              />
            </div>
          </div>
          <button className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold transition-all hover:bg-primary/90">
            Se connecter
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
