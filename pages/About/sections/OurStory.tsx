import React from 'react';
import ScrollAnimation from '../../../components/ScrollAnimation';

const OurStory: React.FC = () => {
  return (
    <section className="px-6 lg:px-10 py-20 bg-white dark:bg-background-dark">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animation="slide-in-left">
            <div>
              <h2 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-black mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-[#617589] dark:text-slate-400 text-lg leading-relaxed">
                <p>
                  AutoLoc est née d'une vision simple : rendre la location de véhicules au Togo accessible, transparente et sans complications. Nous avons constaté que les voyageurs et les résidents avaient besoin d'un service fiable, avec des prix clairs et un accompagnement humain.
                </p>
                <p>
                  Basés à Lomé, nous connaissons parfaitement les routes togolaises, les besoins spécifiques de nos clients et les défis de la mobilité dans notre région. Notre équipe locale est disponible 24/7 pour vous accompagner dans tous vos déplacements.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers d'être le partenaire de confiance de centaines de clients satisfaits, qu'ils soient touristes, professionnels en mission ou résidents locaux.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="slide-in-right">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop"
                  alt="AutoLoc Togo - Notre équipe"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-black">5+</div>
                <div className="text-sm font-medium">Années d'Expérience</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
