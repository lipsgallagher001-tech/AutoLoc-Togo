import React from 'react';
import ScrollAnimation from '../../../components/ScrollAnimation';

const AboutHeader: React.FC = () => {
  return (
    <section className="px-6 lg:px-10 py-20 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10">
      <div className="max-w-[1280px] mx-auto text-center">
        <ScrollAnimation animation="fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
            <span className="material-symbols-outlined text-lg">info</span>
            À Propos de Nous
          </div>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-in-up" delay={100}>
          <h1 className="text-[#111418] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6">
            Votre Partenaire de Confiance pour la Location de Véhicules au Togo
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-in-up" delay={200}>
          <p className="text-[#617589] dark:text-slate-400 text-lg md:text-xl max-w-[800px] mx-auto leading-relaxed">
            Depuis notre création, AutoLoc s'engage à offrir un service de location de véhicules transparent, fiable et adapté aux besoins des voyageurs et résidents à Lomé.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutHeader;
