import React, { useState } from 'react';
import Modal from '../../../../components/UI/Modal';
import AddDriverForm from '../../../../components/forms/AddDriverForm';

const DriversHeader: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log('Opening driver modal...');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('Closing driver modal...');
    setIsModalOpen(false);
  };

  console.log('DriversHeader rendered, isModalOpen:', isModalOpen);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#111418] dark:text-white tracking-tight">
            Répertoire des Chauffeurs
          </h1>
          <p className="text-[#617589] dark:text-gray-400 mt-1">
            Gérer et suivre vos chauffeurs professionnels au Togo.
          </p>
        </div>
        <button
          onClick={handleOpenModal}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20"
        >
          <span className="material-symbols-outlined">person_add</span>
          <span>Ajouter un Chauffeur</span>
        </button>
      </div>

      {/* Modal Ajouter un Chauffeur */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Ajouter un Nouveau Chauffeur"
        maxWidth="4xl"
      >
        <AddDriverForm onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default DriversHeader;
