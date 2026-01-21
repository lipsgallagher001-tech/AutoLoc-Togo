
import React from 'react';
import ScrollAnimation from '../../../components/ScrollAnimation';

const features = [
  {
    icon: 'directions_car',
    title: 'Flotte Professionnelle',
    description: 'Des véhicules récents, climatisés et rigoureusement entretenus pour votre confort.'
  },
  {
    icon: 'location_on',
    title: 'Basé à Lomé',
    description: 'Une agence locale qui connaît parfaitement le terrain et les besoins des voyageurs au Togo.'
  },
  {
    icon: 'headset_mic',
    title: 'Support 24/7',
    description: 'Une assistance disponible à tout moment. En cas de pépin, nous intervenons rapidement.'
  },
  {
    icon: 'payments',
    title: 'Prix Transparents',
    description: 'Aucun frais caché. Nos tarifs sont clairs et affichés en FCFA dès la réservation initiale.'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="px-6 lg:px-10 py-16 bg-white dark:bg-background-dark/50">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-12 @container">
          <ScrollAnimation animation="fade-in-up">
            <div className="flex flex-col gap-4 text-center items-center">
              <h2 className="text-[#111418] dark:text-white tracking-tight text-3xl font-black md:text-4xl max-w-[720px]">
                Pourquoi nous choisir ?
              </h2>
              <p className="text-[#617589] dark:text-gray-400 text-lg font-normal max-w-[720px]">
                AutoLoc s'engage à vous fournir un service de qualité supérieure avec une approche locale unique, adaptée aux routes du Togo.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <ScrollAnimation key={idx} animation="fade-in-up" delay={idx * 100}>
                <div className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:shadow-xl hover:-translate-y-1 transition-all h-full">
                  <div className="text-primary bg-primary/10 size-12 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-[32px]">{feature.icon}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight">{feature.title}</h3>
                    <p className="text-[#617589] dark:text-gray-400 text-sm font-normal leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
