
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-[#f0f2f4] dark:border-slate-800 py-12 px-4 sm:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="flex items-center gap-3">
            <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-base">directions_car</span>
            </div>
            <h2 className="text-lg font-bold">AutoLoc Togo</h2>
          </div>
          <p className="text-[#617589] text-sm">© 2024 AutoLoc. Tous droits réservés.</p>
        </div>
        <div className="flex gap-8 text-sm font-medium text-[#617589]">
          <a className="hover:text-primary transition-colors" href="#">
            Mentions Légales
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Politique de Confidentialité
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            CGV
          </a>
          <a 
            className="hover:text-primary transition-colors cursor-pointer" 
            href="#/admin"
          >
            Admin
          </a>
        </div>
        <div className="flex gap-4">
          <div className="size-10 rounded-full bg-[#f0f2f4] dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 cursor-pointer hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined">social_leaderboard</span>
          </div>
          <div className="size-10 rounded-full bg-[#f0f2f4] dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 cursor-pointer hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined">alternate_email</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
