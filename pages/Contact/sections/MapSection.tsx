import React from 'react';
import ScrollAnimation from '../../../components/ScrollAnimation';

const MapSection: React.FC = () => {
  return (
    <section className="px-6 lg:px-10 py-20 bg-white dark:bg-background-dark">
      <div className="max-w-[1280px] mx-auto">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-black mb-4">
              Trouvez-Nous
            </h2>
            <p className="text-[#617589] dark:text-slate-400 text-lg max-w-[700px] mx-auto">
              Notre agence est située au cœur de Lomé, facilement accessible depuis tous les quartiers.
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-in-up" delay={100}>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#e5e7eb] dark:border-slate-800">
            <div className="aspect-[16/9] bg-slate-200 dark:bg-slate-800 relative">
              {/* Placeholder pour la carte - vous pouvez intégrer Google Maps ici */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="material-symbols-outlined text-6xl text-primary mb-4 block">location_on</span>
                  <p className="text-[#111418] dark:text-white font-bold text-lg mb-2">
                    Boulevard du 13 Janvier, Lomé
                  </p>
                  <p className="text-[#617589] dark:text-slate-400 mb-4">Togo, Afrique de l'Ouest</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors"
                  >
                    <span className="material-symbols-outlined">directions</span>
                    Obtenir l'Itinéraire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default MapSection;
