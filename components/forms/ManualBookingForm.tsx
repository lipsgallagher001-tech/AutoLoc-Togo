import React, { useState } from 'react';

interface ManualBookingFormProps {
  onClose: () => void;
}

const ManualBookingForm: React.FC<ManualBookingFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    vehicleId: '',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    clientIdCard: '',
    startDate: '',
    startTime: '09:00',
    endDate: '',
    endTime: '18:00',
    pickupLocation: 'Lomé - Siège',
    returnLocation: 'Lomé - Siège',
    withDriver: 'no',
    dailyRate: '',
    numberOfDays: '',
    totalAmount: '',
    paymentMethod: 'cash',
    paymentStatus: 'pending',
    bookingStatus: 'confirmed',
    internalNotes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Réservation manuelle créée:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="px-8 py-6 space-y-8">
      {/* Section 1: Sélection du Véhicule */}
      <div className="bg-white dark:bg-[#1a242f] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-50 dark:bg-[#1a2632]">
          <h2 className="text-lg font-bold flex items-center gap-2 text-[#111418] dark:text-white">
            <span className="material-symbols-outlined text-primary">directions_car</span>
            1. Sélection du Véhicule
          </h2>
        </div>
        <div className="p-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Véhicule <span className="text-red-500">*</span>
            </label>
            <select
              name="vehicleId"
              value={formData.vehicleId}
              onChange={handleChange}
              required
              className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
            >
              <option value="">Sélectionner un véhicule</option>
              <option value="1">Toyota Camry 2023 - Berline (Disponible)</option>
              <option value="2">Range Rover Sport - SUV (Disponible)</option>
              <option value="3">Toyota Land Cruiser - 4x4 (Disponible)</option>
              <option value="4">Mercedes Sprinter - Minibus (Disponible)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section 2: Informations Client */}
      <div className="bg-white dark:bg-[#1a242f] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-50 dark:bg-[#1a2632]">
          <h2 className="text-lg font-bold flex items-center gap-2 text-[#111418] dark:text-white">
            <span className="material-symbols-outlined text-primary">person</span>
            2. Informations Client
          </h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Nom complet <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              required
              placeholder="Ex: Jean Dupont"
              className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="clientEmail"
              value={formData.clientEmail}
              onChange={handleChange}
              required
              placeholder="client@example.com"
              className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Téléphone (Togo) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#617589] font-medium">
                +228
              </span>
              <input
                type="tel"
                name="clientPhone"
                value={formData.clientPhone}
                onChange={handleChange}
                required
                placeholder="90 00 00 00"
                className="w-full bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg pl-16 pr-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Numéro pièce d'identité <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="clientIdCard"
              value={formData.clientIdCard}
              onChange={handleChange}
              required
              placeholder="Ex: CNI123456789"
              className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Détails de la Location */}
      <div className="bg-white dark:bg-[#1a242f] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-50 dark:bg-[#1a2632]">
          <h2 className="text-lg font-bold flex items-center gap-2 text-[#111418] dark:text-white">
            <span className="material-symbols-outlined text-primary">event</span>
            3. Détails de la Location
          </h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Date de début <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Heure de début
            </label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Date de fin <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Heure de fin
            </label>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Lieu de prise en charge
            </label>
            <select
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
            >
              <option value="Lomé - Siège">Lomé - Siège</option>
              <option value="Lomé - Aéroport">Lomé - Aéroport</option>
              <option value="Kara - Agence">Kara - Agence</option>
              <option value="Autre">Autre (à préciser)</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Lieu de restitution
            </label>
            <select
              name="returnLocation"
              value={formData.returnLocation}
              onChange={handleChange}
              className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
            >
              <option value="Lomé - Siège">Lomé - Siège</option>
              <option value="Lomé - Aéroport">Lomé - Aéroport</option>
              <option value="Kara - Agence">Kara - Agence</option>
              <option value="Autre">Autre (à préciser)</option>
            </select>
          </div>
          <div className="md:col-span-2 flex flex-col gap-3">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
              Option chauffeur
            </label>
            <div className="flex gap-4">
              <label
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors flex-1 ${
                  formData.withDriver === 'no'
                    ? 'border-primary bg-primary/5'
                    : 'border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-50 dark:bg-[#1a2632] hover:bg-slate-100 dark:hover:bg-[#1a2632]/70'
                }`}
              >
                <input
                  type="radio"
                  name="withDriver"
                  value="no"
                  checked={formData.withDriver === 'no'}
                  onChange={handleChange}
                  className="text-primary focus:ring-primary"
                />
                <span className="text-sm font-semibold text-[#111418] dark:text-white">Sans chauffeur</span>
              </label>
              <label
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors flex-1 ${
                  formData.withDriver === 'yes'
                    ? 'border-primary bg-primary/5'
                    : 'border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-50 dark:bg-[#1a2632] hover:bg-slate-100 dark:hover:bg-[#1a2632]/70'
                }`}
              >
                <input
                  type="radio"
                  name="withDriver"
                  value="yes"
                  checked={formData.withDriver === 'yes'}
                  onChange={handleChange}
                  className="text-primary focus:ring-primary"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#111418] dark:text-white leading-tight">
                    Avec chauffeur
                  </span>
                  <span className="text-[10px] text-[#617589] dark:text-slate-500">
                    +15,000 FCFA/jour
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Sections 4 & 5: Tarification et Paiement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tarification */}
        <div className="bg-white dark:bg-[#1a242f] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-50 dark:bg-[#1a2632]">
            <h2 className="text-lg font-bold flex items-center gap-2 text-[#111418] dark:text-white">
              <span className="material-symbols-outlined text-primary">payments</span>
              4. Tarification
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
                Tarif journalier (FCFA) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="dailyRate"
                value={formData.dailyRate}
                onChange={handleChange}
                required
                placeholder="25000"
                className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
                Nombre de jours
              </label>
              <input
                type="number"
                name="numberOfDays"
                value={formData.numberOfDays}
                onChange={handleChange}
                placeholder="Auto-calculé"
                className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
                Montant total (FCFA) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="totalAmount"
                value={formData.totalAmount}
                onChange={handleChange}
                required
                placeholder="150000"
                className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Paiement & Statut */}
        <div className="bg-white dark:bg-[#1a242f] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-50 dark:bg-[#1a2632]">
            <h2 className="text-lg font-bold flex items-center gap-2 text-[#111418] dark:text-white">
              <span className="material-symbols-outlined text-primary">credit_card</span>
              5. Paiement & Statut
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
                Mode de paiement
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
              >
                <option value="cash">Espèces</option>
                <option value="card">Carte bancaire</option>
                <option value="mobile">Mobile Money</option>
                <option value="transfer">Virement bancaire</option>
                <option value="invoice">Facturation (entreprise)</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
                Statut paiement
              </label>
              <select
                name="paymentStatus"
                value={formData.paymentStatus}
                onChange={handleChange}
                className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
              >
                <option value="pending">En attente</option>
                <option value="partial">Acompte versé</option>
                <option value="paid">Payé</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#617589] dark:text-slate-400">
                Statut réservation
              </label>
              <select
                name="bookingStatus"
                value={formData.bookingStatus}
                onChange={handleChange}
                className="bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white"
              >
                <option value="confirmed">Confirmée</option>
                <option value="pending">En attente</option>
                <option value="cancelled">Annulée</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: Notes internes */}
      <div className="bg-white dark:bg-[#1a242f] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#dbe0e6] dark:border-[#2d3a4b] bg-slate-50 dark:bg-[#1a2632]">
          <h2 className="text-lg font-bold flex items-center gap-2 text-[#111418] dark:text-white">
            <span className="material-symbols-outlined text-primary">notes</span>
            6. Notes Internes
          </h2>
        </div>
        <div className="p-6">
          <textarea
            name="internalNotes"
            value={formData.internalNotes}
            onChange={handleChange}
            rows={4}
            placeholder="Commentaires, instructions spéciales, informations complémentaires..."
            className="w-full bg-slate-50 dark:bg-[#101922] border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg px-4 py-2.5 focus:ring-primary focus:border-primary text-[#111418] dark:text-white resize-none"
          />
        </div>
      </div>

      {/* Boutons d'action */}
      <div className="flex items-center justify-end gap-4 pt-6 border-t border-[#dbe0e6] dark:border-[#2d3a4b] pr-2">
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
          <span className="material-symbols-outlined text-lg">check_circle</span>
          Créer la Réservation
        </button>
      </div>
    </form>
  );
};

export default ManualBookingForm;
