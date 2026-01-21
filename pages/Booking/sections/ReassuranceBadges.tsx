import React from 'react';

const ReassuranceBadges: React.FC = () => {
  const badges = [
    {
      icon: 'verified_user',
      title: 'Données Sécurisées',
      description: 'Vos informations sont cryptées et privées',
    },
    {
      icon: 'schedule',
      title: 'Réponse Rapide',
      description: 'Confirmé via WhatsApp en 2h',
    },
    {
      icon: 'support_agent',
      title: 'Support 24/7',
      description: 'Assistance humaine à chaque étape',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
      {badges.map((badge, index) => (
        <div key={index} className="flex flex-col items-center text-center p-4">
          <span className="material-symbols-outlined text-primary mb-2 text-3xl">{badge.icon}</span>
          <h4 className="text-sm font-bold">{badge.title}</h4>
          <p className="text-xs text-[#617589]">{badge.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ReassuranceBadges;
