import React from 'react';

const NextSteps: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Contact Agent',
      description: 'Un agent local vous contactera via WhatsApp dans les 15 minutes.',
      isActive: true,
    },
    {
      number: '2',
      title: 'Confirmation Finale',
      description: 'Examinez et signez numériquement votre contrat de location envoyé par l\'agent.',
      isActive: false,
    },
    {
      number: '3',
      title: 'Livraison du Véhicule',
      description:
        'Rencontrez votre chauffeur au lieu choisi à Lomé ou à l\'Aéroport International Gnassingbé Eyadéma.',
      isActive: false,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[#111418] dark:text-white text-lg font-bold">Prochaines Étapes</h3>
      <div className="flex flex-col gap-6 relative">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step */}
            <div className="flex gap-4 items-start relative z-10">
              <div
                className={`size-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm ${
                  step.isActive
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                }`}
              >
                {step.number}
              </div>
              <div>
                <h4 className="text-[#111418] dark:text-white font-semibold text-sm">{step.title}</h4>
                <p className="text-[#617589] dark:text-slate-400 text-sm mt-1">{step.description}</p>
              </div>
            </div>
            {/* Line connector (except after last step) */}
            {index < steps.length - 1 && (
              <div
                className="absolute w-0.5 h-10 bg-slate-200 dark:bg-slate-800 -z-0"
                style={{
                  left: '15px',
                  top: `${32 + index * 64}px`,
                }}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NextSteps;
