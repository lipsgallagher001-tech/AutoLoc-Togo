import React from 'react';
import ScrollAnimation from '../../../components/ScrollAnimation';

const OurValues: React.FC = () => {
  const values = [
    {
      icon: 'verified',
      title: 'Transparence',
      description: 'Pas de frais cachés, pas de surprises. Nos tarifs sont clairs et affichés dès le départ.',
    },
    {
      icon: 'handshake',
      title: 'Confiance',
      description: 'Nous construisons des relations durables avec nos clients basées sur la fiabilité et l\'honnêteté.',
    },
    {
      icon: 'favorite',
      title: 'Service Client',
      description: 'Votre satisfaction est notre priorité. Notre équipe est disponible pour vous accompagner à chaque étape.',
    },
    {
      icon: 'eco',
      title: 'Responsabilité',
      description: 'Nous entretenons rigoureusement nos véhicules pour votre sécurité et le respect de l\'environnement.',
    },
    {
      icon: 'location_on',
      title: 'Expertise Locale',
      description: 'Basés à Lomé, nous connaissons parfaitement le terrain et les besoins de nos clients.',
    },
    {
      icon: 'speed',
      title: 'Réactivité',
      description: 'Réponse rapide, confirmation immédiate et assistance disponible 24/7 pour tous vos besoins.',
    },
  ];

  return (
    <section className="px-6 lg:px-10 py-20 bg-white dark:bg-background-dark">
      <div className="max-w-[1280px] mx-auto">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-black mb-4">
              Nos Valeurs
            </h2>
            <p className="text-[#617589] dark:text-slate-400 text-lg max-w-[700px] mx-auto">
              Les principes qui guident notre travail quotidien et notre engagement envers vous.
            </p>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
              <div className="bg-background-light dark:bg-slate-900 p-8 rounded-xl border border-[#e5e7eb] dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-[#111418] dark:text-white text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-[#617589] dark:text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
