import React from 'react';
import ScrollAnimation from '../../../components/ScrollAnimation';

const ContactInfo: React.FC = () => {
  const contactMethods = [
    {
      icon: 'call',
      title: 'Téléphone',
      value: '+228 90 00 00 00',
      description: 'Disponible 24/7 pour vos urgences',
      action: 'tel:+22890000000',
      actionLabel: 'Appeler',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: 'chat',
      title: 'WhatsApp',
      value: '+228 90 00 00 00',
      description: 'Réponse rapide en quelques minutes',
      action: 'https://wa.me/22890000000',
      actionLabel: 'Discuter',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: 'mail',
      title: 'Email',
      value: 'contact@autoloc-togo.com',
      description: 'Réponse sous 24 heures',
      action: 'mailto:contact@autoloc-togo.com',
      actionLabel: 'Envoyer',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      icon: 'location_on',
      title: 'Adresse',
      value: 'Boulevard du 13 Janvier, Lomé',
      description: 'Visitez notre agence',
      action: 'https://maps.google.com',
      actionLabel: 'Itinéraire',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
  ];

  return (
    <section className="px-6 lg:px-10 py-20 bg-white dark:bg-background-dark">
      <div className="max-w-[1280px] mx-auto">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-black mb-4">
              Moyens de Contact
            </h2>
            <p className="text-[#617589] dark:text-slate-400 text-lg max-w-[700px] mx-auto">
              Choisissez le moyen qui vous convient le mieux pour nous joindre.
            </p>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
              <div className="bg-background-light dark:bg-slate-900 p-6 rounded-xl border border-[#e5e7eb] dark:border-slate-800 hover:shadow-xl transition-all h-full">
                <div className={`w-14 h-14 ${method.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <span className={`material-symbols-outlined ${method.color} text-3xl`}>{method.icon}</span>
                </div>
                <h3 className="text-[#111418] dark:text-white text-lg font-bold mb-2">{method.title}</h3>
                <p className="text-[#111418] dark:text-white font-semibold mb-1">{method.value}</p>
                <p className="text-[#617589] dark:text-slate-400 text-sm mb-4">{method.description}</p>
                <a
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center gap-2 ${method.color} font-bold text-sm hover:underline`}
                >
                  {method.actionLabel}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
