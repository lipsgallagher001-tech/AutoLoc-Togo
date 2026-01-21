import React from 'react';
import ScrollAnimation from '../../../components/ScrollAnimation';

const OurTeam: React.FC = () => {
  const team = [
    {
      name: 'Kofi Mensah',
      role: 'Directeur Général',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      description: 'Passionné par l\'automobile et le service client depuis plus de 10 ans.',
    },
    {
      name: 'Amina Diallo',
      role: 'Responsable Flotte',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      description: 'Experte en maintenance automobile et gestion de parc de véhicules.',
    },
    {
      name: 'Kwame Addo',
      role: 'Chef Service Client',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      description: 'Dévoué à offrir la meilleure expérience client possible, 24/7.',
    },
    {
      name: 'Emilie Koffi',
      role: 'Conseillère Client',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      description: 'Toujours disponible pour répondre à vos questions via WhatsApp.',
    },
  ];

  return (
    <section className="px-6 lg:px-10 py-20 bg-background-light dark:bg-slate-900">
      <div className="max-w-[1280px] mx-auto">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-black mb-4">
              Notre Équipe
            </h2>
            <p className="text-[#617589] dark:text-slate-400 text-lg max-w-[700px] mx-auto">
              Des professionnels passionnés et dévoués à votre service.
            </p>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
              <div className="bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-full">
                <div className="aspect-square overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[#111418] dark:text-white text-xl font-bold mb-1">{member.name}</h3>
                  <div className="text-primary text-sm font-bold mb-3">{member.role}</div>
                  <p className="text-[#617589] dark:text-slate-400 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
