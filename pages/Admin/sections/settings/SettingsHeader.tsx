import React from 'react';

const SettingsHeader: React.FC = () => {
  return (
    <div className="mb-8">
      <h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
        Paramètres
      </h1>
      <p className="text-[#617589] dark:text-[#9dabb9] text-base font-normal leading-normal mt-2">
        Gérez la configuration de votre agence au Togo, les alertes et les paramètres commerciaux.
      </p>
    </div>
  );
};

export default SettingsHeader;
