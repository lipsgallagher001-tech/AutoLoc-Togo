import React, { useState } from 'react';
import ScrollAnimation from '../../../components/ScrollAnimation';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Demande d\'information',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    alert('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Demande d\'information',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="px-6 lg:px-10 py-20 bg-background-light dark:bg-slate-900">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <ScrollAnimation animation="slide-in-left">
            <div>
              <h2 className="text-[#111418] dark:text-white text-3xl font-black mb-4">
                Envoyez-nous un Message
              </h2>
              <p className="text-[#617589] dark:text-slate-400 mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#111418] dark:text-white mb-2">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-12 rounded-lg border border-[#d1d5db] dark:border-[#3a4550] dark:bg-[#111418] focus:border-primary focus:ring-2 focus:ring-primary/20 px-4"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#111418] dark:text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-12 rounded-lg border border-[#d1d5db] dark:border-[#3a4550] dark:bg-[#111418] focus:border-primary focus:ring-2 focus:ring-primary/20 px-4"
                      placeholder="jean@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111418] dark:text-white mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-12 rounded-lg border border-[#d1d5db] dark:border-[#3a4550] dark:bg-[#111418] focus:border-primary focus:ring-2 focus:ring-primary/20 px-4"
                      placeholder="+228 90 00 00 00"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#111418] dark:text-white mb-2">
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full h-12 rounded-lg border border-[#d1d5db] dark:border-[#3a4550] dark:bg-[#111418] focus:border-primary focus:ring-2 focus:ring-primary/20 px-4"
                  >
                    <option>Demande d'information</option>
                    <option>Réservation</option>
                    <option>Question sur un véhicule</option>
                    <option>Réclamation</option>
                    <option>Partenariat</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#111418] dark:text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-[#d1d5db] dark:border-[#3a4550] dark:bg-[#111418] focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-3"
                    placeholder="Décrivez votre demande..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">send</span>
                  Envoyer le Message
                </button>
              </form>
            </div>
          </ScrollAnimation>

          {/* Informations complémentaires */}
          <ScrollAnimation animation="slide-in-right">
            <div className="space-y-8">
              <div className="bg-white dark:bg-background-dark p-8 rounded-xl border border-[#e5e7eb] dark:border-slate-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
                  </div>
                  <div>
                    <h3 className="text-[#111418] dark:text-white text-lg font-bold">Horaires d'Ouverture</h3>
                  </div>
                </div>
                <div className="space-y-3 text-[#617589] dark:text-slate-400">
                  <div className="flex justify-between">
                    <span className="font-medium">Lundi - Vendredi</span>
                    <span className="font-bold text-[#111418] dark:text-white">8h00 - 19h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Samedi</span>
                    <span className="font-bold text-[#111418] dark:text-white">9h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Dimanche</span>
                    <span className="font-bold text-[#111418] dark:text-white">10h00 - 15h00</span>
                  </div>
                  <div className="pt-3 border-t border-[#e5e7eb] dark:border-slate-800">
                    <p className="text-sm">
                      <span className="material-symbols-outlined text-green-500 text-sm align-middle">check_circle</span>
                      {' '}Support téléphonique disponible 24/7
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl border border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">support_agent</span>
                  </div>
                  <div>
                    <h3 className="text-[#111418] dark:text-white text-lg font-bold">Besoin d'une Réponse Rapide ?</h3>
                  </div>
                </div>
                <p className="text-[#617589] dark:text-slate-400 mb-6">
                  Pour une assistance immédiate, contactez-nous directement via WhatsApp. Notre équipe vous répondra en quelques minutes.
                </p>
                <a
                  href="https://wa.me/22890000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                  Discuter sur WhatsApp
                </a>
              </div>

              <div className="bg-white dark:bg-background-dark p-8 rounded-xl border border-[#e5e7eb] dark:border-slate-800">
                <h3 className="text-[#111418] dark:text-white text-lg font-bold mb-4">Questions Fréquentes</h3>
                <ul className="space-y-3 text-[#617589] dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    <span className="text-sm">Quels documents sont nécessaires pour louer ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    <span className="text-sm">Puis-je annuler ma réservation ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    <span className="text-sm">L'assurance est-elle incluse ?</span>
                  </li>
                </ul>
                <a
                  href="#/"
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm mt-4 hover:underline"
                >
                  Voir toutes les FAQ
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
