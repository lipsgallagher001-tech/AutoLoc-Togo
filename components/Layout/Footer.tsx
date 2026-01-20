
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111418] text-white py-16 px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="text-primary size-8">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold">AutoLoc</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Le spécialiste de la location de voitures à Lomé. Confort, sécurité et service client irréprochable au cœur de notre métier.
          </p>
          <div className="flex gap-4">
            <a className="text-white hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">social_leaderboard</span></a>
            <a className="text-white hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold">Liens Rapides</h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li><a className="hover:text-white transition-colors" href="#/fleet">Notre Flotte</a></li>
            <li><a className="hover:text-white transition-colors" href="#steps">Comment ça marche</a></li>
            <li><a className="hover:text-white transition-colors" href="#">Conditions de location</a></li>
            <li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold">Contactez-nous</h3>
          <ul className="flex flex-col gap-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">phone</span>
              +228 00 00 00 00
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">mail</span>
              contact@autoloc.tg
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">location_on</span>
              Rue de l'Océan, Lomé, Togo
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold">Newsletter</h3>
          <p className="text-gray-400 text-sm">Recevez nos offres spéciales.</p>
          <div className="flex gap-2">
            <input className="bg-white/10 border-none rounded-lg px-4 py-2 w-full text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="Email" type="email" />
            <button className="bg-primary px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-xs">
        © 2024 AutoLoc Togo. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
