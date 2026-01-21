import React from 'react';

const ActionButtons: React.FC = () => {
  return (
    <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4 justify-center">
      <button className="flex min-w-[240px] cursor-pointer items-center justify-center gap-2 rounded-xl h-12 px-6 bg-[#25D366] text-white font-bold hover:bg-[#20bd5c] transition-all shadow-md">
        <span className="material-symbols-outlined !text-xl">chat</span>
        <span>Discuter sur WhatsApp</span>
      </button>
      <button
        onClick={() => (window.location.hash = '#/')}
        className="flex min-w-[200px] cursor-pointer items-center justify-center gap-2 rounded-xl h-12 px-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[#111418] dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
      >
        <span>Retour à l'Accueil</span>
      </button>
    </div>
  );
};

export default ActionButtons;
