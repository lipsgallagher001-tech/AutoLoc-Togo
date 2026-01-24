import React, { useState } from 'react';

interface AddDriverFormProps {
  onClose: () => void;
}

const AddDriverForm: React.FC<AddDriverFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    phone: '',
    whatsapp: '',
    email: '',
    licenseNumber: '',
    licenseExpiration: '',
    yearsOfExperience: '',
    status: 'active',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Driver form submitted:', formData);
    // TODO: Ajouter la logique de soumission
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-8">
      {/* Section 1: Informations Personnelles */}
      <div className="bg-white dark:bg-[#1a242f] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-50 dark:bg-[#1a2632]">
          <h2 className="text-lg font-bold flex items-center gap-2 text-[#111418] dark:text-white">
            <span className="material-symbols-outlined text-primary">person</span>
            1. Informations Personnelles
          </h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Nom Complet
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
              placeholder="ex. Koffi Mensah"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Date de Naissance
            </label>
            <input
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
              className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Numéro de Téléphone (Togo)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#617589] font-medium">
                +228
              </span>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg pl-16 pr-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
                placeholder="90 00 00 00"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Numéro WhatsApp (Optionnel)
            </label>
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
              placeholder="+228..."
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Adresse Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
              placeholder="k.mensah@autoloc.tg"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Détails Professionnels */}
      <div className="bg-white dark:bg-[#1a242f] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-50 dark:bg-[#1a2632]">
          <h2 className="text-lg font-bold flex items-center gap-2 text-[#111418] dark:text-white">
            <span className="material-symbols-outlined text-primary">badge</span>
            2. Détails Professionnels
          </h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Numéro de Permis
            </label>
            <input
              type="text"
              value={formData.licenseNumber}
              onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
              className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
              placeholder="TG-1234-X"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Expiration du Permis
            </label>
            <input
              type="date"
              value={formData.licenseExpiration}
              onChange={(e) => setFormData({ ...formData, licenseExpiration: e.target.value })}
              className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Années d'Expérience
            </label>
            <input
              type="number"
              value={formData.yearsOfExperience}
              onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
              className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
              placeholder="0"
            />
          </div>
        </div>
      </div>

      {/* Sections 3 & 4: Documents & Profil */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonne Documents */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white dark:bg-[#1a242f] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-50 dark:bg-[#1a2632]">
              <h2 className="text-lg font-bold flex items-center gap-2 text-[#111418] dark:text-white">
                <span className="material-symbols-outlined text-primary">description</span>
                3. Documents
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="group relative border-2 border-dashed border-[#dbe0e6] dark:border-[#2d3a4b] hover:border-primary transition-colors rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer">
                <span className="material-symbols-outlined text-[#617589] dark:text-slate-400 text-4xl mb-2 group-hover:text-primary">
                  upload_file
                </span>
                <p className="text-sm font-semibold text-[#111418] dark:text-white">
                  Scan du Permis de Conduire
                </p>
                <p className="text-xs text-[#617589] dark:text-slate-500 mt-1">
                  PDF, JPG ou PNG (Max 5MB)
                </p>
              </div>
              <div className="group relative border-2 border-dashed border-[#dbe0e6] dark:border-[#2d3a4b] hover:border-primary transition-colors rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer">
                <span className="material-symbols-outlined text-[#617589] dark:text-slate-400 text-4xl mb-2 group-hover:text-primary">
                  id_card
                </span>
                <p className="text-sm font-semibold text-[#111418] dark:text-white">
                  Carte d'Identité Nationale
                </p>
                <p className="text-xs text-[#617589] dark:text-slate-500 mt-1">
                  Les deux côtés requis
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne Profil & Statut */}
        <div className="space-y-6">
          {/* Profil */}
          <div className="bg-white dark:bg-[#1a242f] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-50 dark:bg-[#1a2632]">
              <h2 className="text-lg font-bold flex items-center gap-2 text-[#111418] dark:text-white">
                <span className="material-symbols-outlined text-primary">account_circle</span>
                4. Profil
              </h2>
            </div>
            <div className="p-6 flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-full border-4 border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-100 dark:bg-[#1a2632] overflow-hidden mb-4 group">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvmHA1yhRPUdPmq5ggJDkjeSGi1UAXdMh9jmXerJuhpkO8Tu45eK5hMI5X21uiMnG3M2aBSEpPalW0TL7j77MMMG1VoigKP634L3hsuDQT1Bw-k6KZI4ceyovgLUo6U-uylj-jauxU8f9AG247CWm4lNR5yuJ8sbnHD2Js5vRcXOZ0TgUbD9Ch2vmHQORziHergWgcsSx-vsCyHG8xki0YKwbMRPnAwQbJmbewleFNkFMYkhRgD1LqJRn4IwUjxFamCeWHb3YIyG-F')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <span className="material-symbols-outlined text-white">photo_camera</span>
                </div>
              </div>
              <p className="text-xs text-[#617589] dark:text-slate-400">
                Cliquez sur l'image pour télécharger une photo de profil
              </p>
            </div>
          </div>

          {/* Statut */}
          <div className="bg-white dark:bg-[#1a242f] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-50 dark:bg-[#1a2632]">
              <h2 className="text-lg font-bold flex items-center gap-2 text-[#111418] dark:text-white">
                <span className="material-symbols-outlined text-primary">toggle_on</span>
                5. Statut
              </h2>
            </div>
            <div className="p-6 flex flex-col gap-3">
              <label
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                  formData.status === 'active'
                    ? 'border-primary bg-primary/5'
                    : 'border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-50 dark:bg-[#1a2632] hover:bg-slate-100 dark:hover:bg-[#1a2632]/70'
                }`}
              >
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={formData.status === 'active'}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="text-primary focus:ring-primary bg-slate-100 dark:bg-[#2d3a4b] border-[#dbe0e6] dark:border-[#2d3a4b]"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#111418] dark:text-white leading-tight">
                    Actif
                  </span>
                  <span className="text-[10px] text-[#617589] dark:text-slate-500">
                    Prêt pour affectation
                  </span>
                </div>
              </label>
              <label
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                  formData.status === 'probation'
                    ? 'border-primary bg-primary/5'
                    : 'border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-50 dark:bg-[#1a2632] hover:bg-slate-100 dark:hover:bg-[#1a2632]/70'
                }`}
              >
                <input
                  type="radio"
                  name="status"
                  value="probation"
                  checked={formData.status === 'probation'}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="text-primary focus:ring-primary bg-slate-100 dark:bg-[#2d3a4b] border-[#dbe0e6] dark:border-[#2d3a4b]"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#111418] dark:text-white leading-tight">
                    En Période d'Essai
                  </span>
                  <span className="text-[10px] text-[#617589] dark:text-slate-500">
                    Période d'essai de 30 jours
                  </span>
                </div>
              </label>
              <label
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                  formData.status === 'inactive'
                    ? 'border-primary bg-primary/5'
                    : 'border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-50 dark:bg-[#1a2632] hover:bg-slate-100 dark:hover:bg-[#1a2632]/70'
                }`}
              >
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={formData.status === 'inactive'}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="text-primary focus:ring-primary bg-slate-100 dark:bg-[#2d3a4b] border-[#dbe0e6] dark:border-[#2d3a4b]"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#111418] dark:text-white leading-tight">
                    Inactif
                  </span>
                  <span className="text-[10px] text-[#617589] dark:text-slate-500">
                    Actuellement indisponible
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Boutons du Formulaire */}
      <div className="flex items-center justify-end gap-4 pt-6 border-t border-[#dbe0e6] dark:border-[#2d3a4b]">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2.5 rounded-lg border border-[#dbe0e6] dark:border-[#2d3a4b] text-[#617589] dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#2d3a4b] font-bold transition-all"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-8 py-2.5 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">how_to_reg</span>
          Enregistrer le Chauffeur
        </button>
      </div>
    </form>
  );
};

export default AddDriverForm;
