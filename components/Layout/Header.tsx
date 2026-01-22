
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          {/* Navigation Desktop */}
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
        <div className="flex items-center gap-3">
          {/* Numéro de téléphone - Desktop */}
          <a
            href="tel:+22890000000"
            className="hidden lg:flex items-center gap-2 text-sm font-medium text-[#617589] dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-xl">call</span>
            <span>+228 90 00 00 00</span>
          </a>
          
          {/* Bouton WhatsApp - Tablette et Desktop */}
          <a
            href="https://wa.me/22890000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center rounded-lg h-10 px-4 bg-[#25D366] text-white text-sm font-bold transition-all hover:bg-[#20bd5a]"
          >
            <svg className="w-5 h-5 fill-current mr-2" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
            </svg>
            WhatsApp
          </a>
          
          {/* Bouton Réserver - Desktop */}
          <button 
            onClick={() => window.location.hash = '#/fleet'}
            className="hidden sm:flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold transition-all hover:bg-primary/90"
          >
            Réserver
          </button>

          {/* Bouton Menu Hamburger - Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#111418] dark:text-white hover:bg-[#f0f2f4] dark:hover:bg-slate-800 transition-colors"
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#f0f2f4] dark:border-slate-800 bg-white dark:bg-background-dark">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <a
              className="text-[#111418] dark:text-slate-300 text-base font-medium hover:text-primary transition-colors py-2"
              href="#/"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </a>
            <a
              className="text-[#111418] dark:text-slate-300 text-base font-medium hover:text-primary transition-colors py-2"
              href="#/fleet"
              onClick={() => setMobileMenuOpen(false)}
            >
              Notre Flotte
            </a>
            <a
              className="text-[#111418] dark:text-slate-300 text-base font-medium hover:text-primary transition-colors py-2"
              href="#/about"
              onClick={() => setMobileMenuOpen(false)}
            >
              À Propos
            </a>
            <a
              className="text-[#111418] dark:text-slate-300 text-base font-medium hover:text-primary transition-colors py-2"
              href="#/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            
            {/* Actions Mobile */}
            <div className="pt-3 border-t border-[#f0f2f4] dark:border-slate-800 space-y-3">
              <a
                href="tel:+22890000000"
                className="flex items-center gap-3 text-[#617589] dark:text-slate-400 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-xl">call</span>
                <span className="text-sm font-medium">+228 90 00 00 00</span>
              </a>
              
              <a
                href="https://wa.me/22890000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-lg h-12 bg-[#25D366] text-white text-sm font-bold transition-all hover:bg-[#20bd5a]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                </svg>
                WhatsApp
              </a>
              
              <button 
                onClick={() => {
                  window.location.hash = '#/fleet';
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center w-full rounded-lg h-12 bg-primary text-white text-sm font-bold transition-all hover:bg-primary/90"
              >
                Réserver maintenant
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
