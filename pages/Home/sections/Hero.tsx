
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[560px] overflow-hidden">
      {/* Image de fond avec overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAowR_02aIh-yOOUmy-3AUecSY64tOKEfpyUTP1QiVfRjAW-sG1x8IoX5PlLpZdH2BfQXAuKJBe2dReXq73_A2kht-1gdAs4qFrS3BmbpzCIzQafudUXIDt2hIRGelTMMpPpkqjV6hdDi8AEX1feEVIhepTTIVOBlsW0iCnBUOE0JMLYg-75KGD8oSPE1tAqD_6dXAOQ1v87YZUkNO-g7QvCD9kIsLhyoXJcD_Yop65A50aEiPvkYd5YWfeup1crtw2-Vltdss_vd9o")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col gap-6 items-center justify-center min-h-[560px] p-8">
        <div className="flex flex-col gap-4 text-center max-w-[800px]">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl">
            Location de véhicules au Togo
          </h1>
          <h2 className="text-white/90 text-lg font-medium leading-relaxed @[480px]:text-xl">
            Votre partenaire de confiance à Lomé pour une location simple, transparente et humaine. Explorez le Togo en toute sérénité.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all"
            onClick={() => window.location.hash = '#/fleet'}
          >
            <span>Voir nos véhicules</span>
          </button>
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white/20 backdrop-blur-md text-white border border-white/30 text-base font-bold hover:bg-white/30 transition-all">
            <span>Nous contacter</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
