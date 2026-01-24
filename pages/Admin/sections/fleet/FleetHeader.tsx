import React, { useState } from 'react';
import Modal from '../../../../components/UI/Modal';
import AddVehicleForm from '../../../../components/forms/AddVehicleForm';

const FleetHeader: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#111418] dark:text-white tracking-tight">
            Inventaire de la Flotte
          </h1>
          <p className="text-[#617589] dark:text-gray-400 mt-1">
            Gérer et suivre vos 124 véhicules au Togo.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20"
        >
          <span className="material-symbols-outlined">add_circle</span>
          <span>Ajouter un Véhicule</span>
        </button>
      </div>

      {/* Modal Ajouter un Véhicule */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Ajouter un Nouveau Véhicule"
        maxWidth="4xl"
      >
        <AddVehicleForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default FleetHeader;
