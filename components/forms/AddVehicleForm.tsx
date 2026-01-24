import React, { useState } from 'react';

interface AddVehicleFormProps {
  onClose: () => void;
}

const AddVehicleForm: React.FC<AddVehicleFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    modelName: '',
    licensePlate: '',
    year: '2024',
    category: 'SUV / 4x4',
    dailyRateSelfDrive: '',
    dailyRateWithDriver: '',
    hasAC: true,
    transmission: 'automatic',
    fuelType: 'petrol',
    seats: 5,
    isActive: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Ajouter la logique de soumission
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-8">
      {/* Informations de Base */}
      <div className="bg-white dark:bg-[#1a242f] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] overflow-hidden">
        <h2 className="text-[#111418] dark:text-white text-lg font-bold border-b border-[#dbe0e6] dark:border-[#2d3a4b] px-6 py-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">info</span>
          Informations de Base
        </h2>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#617589] dark:text-slate-300">
              Nom du Modèle
            </label>
            <input
              type="text"
              value={formData.modelName}
              onChange={(e) => setFormData({ ...formData, modelName: e.target.value })}
              className="w-full rounded-lg bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] text-[#111418] dark:text-white focus:ring-primary focus:border-primary px-4 py-2.5"
              placeholder="ex. Toyota Prado TXL"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#617589] dark:text-slate-300">
              Plaque d'Immatriculation
            </label>
            <input
              type="text"
              value={formData.licensePlate}
              onChange={(e) => setFormData({ ...formData, licensePlate: e.target.value })}
              className="w-full rounded-lg bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] text-[#111418] dark:text-white focus:ring-primary focus:border-primary px-4 py-2.5"
              placeholder="TG-1234-AB"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#617589] dark:text-slate-300">
              Année de Fabrication
            </label>
            <select
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              className="w-full rounded-lg bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] text-[#111418] dark:text-white focus:ring-primary focus:border-primary px-4 py-2.5"
            >
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#617589] dark:text-slate-300">
              Catégorie
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full rounded-lg bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] text-[#111418] dark:text-white focus:ring-primary focus:border-primary px-4 py-2.5"
            >
              <option>SUV / 4x4</option>
              <option>Berline / Sedan</option>
              <option>Luxe</option>
              <option>Compact</option>
              <option>Van / Minibus</option>
            </select>
          </div>
        </div>
      </div>

      {/* Upload de Médias */}
      <div className="bg-white dark:bg-[#1a242f] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] overflow-hidden">
        <h2 className="text-[#111418] dark:text-white text-lg font-bold border-b border-[#dbe0e6] dark:border-[#2d3a4b] px-6 py-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">photo_library</span>
          Médias du Véhicule
        </h2>
        <div className="p-6">
          <div className="border-2 border-dashed border-[#dbe0e6] dark:border-[#3a4552] rounded-xl p-10 flex flex-col items-center justify-center bg-slate-50 dark:bg-[#101922]/50 hover:bg-slate-100 dark:hover:bg-[#101922] transition-colors cursor-pointer group">
            <div className="bg-primary/10 text-primary p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[40px]">cloud_upload</span>
            </div>
            <p className="text-[#111418] dark:text-white font-bold mb-1">
              Cliquez ou glissez des photos ici
            </p>
            <p className="text-[#617589] dark:text-[#9dabb9] text-sm">
              SVG, PNG, JPG ou GIF (max. 800x400px)
            </p>
            <button
              type="button"
              className="mt-6 px-4 py-2 bg-slate-200 dark:bg-[#2d3a4b] text-[#111418] dark:text-white text-sm font-bold rounded-lg hover:bg-slate-300 dark:hover:bg-[#343e4b]"
            >
              Parcourir les Fichiers
            </button>
          </div>
        </div>
      </div>

      {/* Configuration des Prix */}
      <div className="bg-white dark:bg-[#1a242f] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] overflow-hidden">
        <h2 className="text-[#111418] dark:text-white text-lg font-bold border-b border-[#dbe0e6] dark:border-[#2d3a4b] px-6 py-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">payments</span>
          Configuration des Prix
        </h2>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#617589] dark:text-slate-300">
              Tarif Journalier (Sans Chauffeur)
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.dailyRateSelfDrive}
                onChange={(e) => setFormData({ ...formData, dailyRateSelfDrive: e.target.value })}
                className="w-full rounded-lg bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] text-[#111418] dark:text-white focus:ring-primary focus:border-primary pl-4 pr-16 py-2.5"
                placeholder="45,000"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#617589] font-bold text-sm">
                FCFA
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#617589] dark:text-slate-300">
              Tarif Journalier (Avec Chauffeur)
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.dailyRateWithDriver}
                onChange={(e) =>
                  setFormData({ ...formData, dailyRateWithDriver: e.target.value })
                }
                className="w-full rounded-lg bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] text-[#111418] dark:text-white focus:ring-primary focus:border-primary pl-4 pr-16 py-2.5"
                placeholder="60,000"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#617589] font-bold text-sm">
                FCFA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Caractéristiques & Spécifications */}
      <div className="bg-white dark:bg-[#1a242f] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] overflow-hidden">
        <h2 className="text-[#111418] dark:text-white text-lg font-bold border-b border-[#dbe0e6] dark:border-[#2d3a4b] px-6 py-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">checklist</span>
          Caractéristiques &amp; Spécifications
        </h2>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {/* AC & Transmission */}
          <div className="space-y-4">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-50 dark:bg-[#101922] cursor-pointer hover:border-primary transition-colors">
              <input
                type="checkbox"
                checked={formData.hasAC}
                onChange={(e) => setFormData({ ...formData, hasAC: e.target.checked })}
                className="w-5 h-5 rounded border-[#dbe0e6] text-primary focus:ring-primary bg-white dark:bg-[#2d3a4b]"
              />
              <span className="text-sm font-medium">Climatisation (AC)</span>
            </label>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#617589] dark:text-slate-300">
                Transmission
              </label>
              <div className="flex gap-4">
                <label
                  className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border cursor-pointer ${
                    formData.transmission === 'automatic'
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-[#dbe0e6] dark:border-[#2d3a4b] text-[#617589]'
                  }`}
                >
                  <input
                    type="radio"
                    name="transmission"
                    value="automatic"
                    checked={formData.transmission === 'automatic'}
                    onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
                    className="hidden"
                  />
                  <span className="text-sm font-bold">Automatique</span>
                </label>
                <label
                  className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border cursor-pointer ${
                    formData.transmission === 'manual'
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-[#dbe0e6] dark:border-[#2d3a4b] text-[#617589]'
                  }`}
                >
                  <input
                    type="radio"
                    name="transmission"
                    value="manual"
                    checked={formData.transmission === 'manual'}
                    onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
                    className="hidden"
                  />
                  <span className="text-sm font-bold">Manuelle</span>
                </label>
              </div>
            </div>
          </div>

          {/* Fuel & Seats */}
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#617589] dark:text-slate-300">
                Type de Carburant
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['diesel', 'petrol', 'hybrid', 'electric'].map((fuel) => (
                  <label key={fuel} className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="fuel"
                      value={fuel}
                      checked={formData.fuelType === fuel}
                      onChange={(e) => setFormData({ ...formData, fuelType: e.target.value })}
                      className="text-primary focus:ring-primary bg-slate-100 dark:bg-[#2d3a4b]"
                    />
                    {fuel === 'diesel' && 'Diesel'}
                    {fuel === 'petrol' && 'Essence'}
                    {fuel === 'hybrid' && 'Hybride'}
                    {fuel === 'electric' && 'Électrique'}
                  </label>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#617589] dark:text-slate-300">
                Nombre de Sièges
              </label>
              <div className="flex gap-2">
                {[2, 5, 7, 9].map((seatCount) => (
                  <button
                    key={seatCount}
                    type="button"
                    onClick={() => setFormData({ ...formData, seats: seatCount })}
                    className={`w-10 h-10 rounded-lg border flex items-center justify-center text-sm font-bold ${
                      formData.seats === seatCount
                        ? 'border-primary bg-primary text-white'
                        : 'border-[#dbe0e6] dark:border-[#2d3a4b]'
                    }`}
                  >
                    {seatCount === 9 ? '9+' : seatCount}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statut de la Flotte */}
      <div className="bg-white dark:bg-[#1a242f] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] overflow-hidden">
        <div className="p-6 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] dark:text-white text-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">toggle_on</span>
              Statut de la Flotte
            </h2>
            <p className="text-sm text-[#617589] dark:text-[#9dabb9]">
              Définir le véhicule comme actif pour le rendre immédiatement disponible à la
              réservation.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-14 h-7 bg-slate-200 peer-focus:outline-none dark:bg-[#2d3a4b] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
            <span className="ml-3 text-sm font-bold text-primary">
              {formData.isActive ? 'ACTIF' : 'INACTIF'}
            </span>
          </label>
        </div>
      </div>

      {/* Actions du Formulaire */}
      <div className="flex items-center justify-end gap-4 pt-4 border-t border-[#dbe0e6] dark:border-[#2d3a4b]">
        <button
          type="button"
          onClick={onClose}
          className="px-8 py-3 rounded-lg border border-[#dbe0e6] dark:border-[#2d3a4b] text-[#617589] dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-[#2d3a4b] transition-colors"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-8 py-3 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-base">save</span>
          Enregistrer le Véhicule
        </button>
      </div>
    </form>
  );
};

export default AddVehicleForm;
