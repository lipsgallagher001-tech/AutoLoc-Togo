import React from 'react';

const SuccessStatus: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="size-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
        <span className="material-symbols-outlined !text-5xl">check_circle</span>
      </div>
      <h1 className="text-[#111418] dark:text-white tracking-tight text-3xl font-bold leading-tight text-center">
        Réservation Réussie !
      </h1>
      <p className="text-[#617589] dark:text-slate-400 text-base font-normal leading-normal mt-2 text-center max-w-md">
        Votre aventure au Togo commence ici. Nous avons bien reçu votre demande et préparons tout pour vous.
      </p>
      <div className="mt-4 px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-[#617589] dark:text-slate-400 text-sm font-mono font-medium">
        #REF-20250120-001
      </div>
    </div>
  );
};

export default SuccessStatus;
