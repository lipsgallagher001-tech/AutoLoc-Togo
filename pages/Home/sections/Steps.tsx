
import React from 'react';
import ScrollAnimation from '../../../components/ScrollAnimation';

const steps = [
  {
    number: '1',
    title: 'Choisissez votre véhicule',
    description: 'Explorez notre catalogue varié en ligne. De la citadine économique au 4x4 robuste pour vos excursions, nous avons ce qu\'il vous faut.'
  },
  {
    number: '2',
    title: 'Réservez en ligne ou par téléphone',
    description: 'Confirmation ultra-rapide par WhatsApp ou appel. Nous discutons de vos besoins spécifiques pour un service sur mesure.'
  },
  {
    number: '3',
    title: 'Prenez la route',
    description: 'Récupérez les clés à notre agence à Lomé ou demandez une livraison à votre hôtel/aéroport. Profitez de votre séjour en toute liberté.'
  }
];

const Steps: React.FC = () => {
  return (
    <section className="px-6 lg:px-10 py-20 bg-white dark:bg-background-dark/80" id="steps">
      <div className="max-w-[800px] mx-auto">
        <ScrollAnimation animation="fade-in-up">
          <h2 className="text-[#111418] dark:text-white text-3xl font-black leading-tight tracking-tight mb-12 text-center">Comment ça marche ?</h2>
        </ScrollAnimation>
        <div className="grid grid-cols-[48px_1fr] gap-x-6">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <ScrollAnimation animation="fade-in" delay={idx * 100}>
                <div className="flex flex-col items-center">
                  <div className="bg-primary text-white size-12 rounded-full flex items-center justify-center font-bold text-xl">{step.number}</div>
                  {idx < steps.length - 1 && (
                    <div className="w-[2px] bg-[#dbe0e6] dark:bg-gray-800 h-24 grow"></div>
                  )}
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-in-right" delay={idx * 100}>
                <div className={`flex flex-col ${idx < steps.length - 1 ? 'pb-12' : ''}`}>
                  <h3 className="text-[#111418] dark:text-white text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-[#617589] dark:text-gray-400 text-lg leading-relaxed">{step.description}</p>
                </div>
              </ScrollAnimation>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
