import React from 'react';

const TrustFooter: React.FC = () => {
  return (
    <div className="mt-10 flex flex-col items-center gap-2">
      <div className="flex items-center gap-2 text-[#617589] dark:text-slate-400 text-xs">
        <span className="material-symbols-outlined !text-sm text-primary">verified_user</span>
        <span>Garantie de Transparence AutoLoc : Aucun frais caché, jamais.</span>
      </div>
      <p className="text-xs text-slate-400">
        Besoin d'aide ? Appelez-nous au{' '}
        <span className="font-medium text-slate-600 dark:text-slate-300">+228 90 00 00 00</span>
      </p>
    </div>
  );
};

export default TrustFooter;
