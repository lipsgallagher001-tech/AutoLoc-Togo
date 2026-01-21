import React from 'react';
import ScrollAnimation from '../../../components/ScrollAnimation';

const Statistics: React.FC = () => {
  const stats = [
    {
      icon: 'groups',
      value: '2000+',
      label: 'Clients Satisfaits',
    },
    {
      icon: 'directions_car',
      value: '50+',
      label: 'Véhicules Disponibles',
    },
    {
      icon: 'star',
      value: '4.9/5',
      label: 'Note Moyenne',
    },
    {
      icon: 'support_agent',
      value: '24/7',
      label: 'Support Client',
    },
  ];

  return (
    <section className="px-6 lg:px-10 py-16 bg-primary/5 dark:bg-primary/10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">{stat.icon}</span>
                </div>
                <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-[#617589] dark:text-slate-400">{stat.label}</div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
