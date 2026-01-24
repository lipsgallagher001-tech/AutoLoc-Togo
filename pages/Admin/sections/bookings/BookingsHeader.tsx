import React, { useState } from 'react';
import Modal from '../../../../components/UI/Modal';
import ManualBookingForm from '../../../../components/forms/ManualBookingForm';

const BookingsHeader: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-wrap justify-between items-end gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-[#111418] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
            Gestion des Réservations
          </h1>
          <p className="text-[#617589] dark:text-gray-400 text-base font-normal">
            Gérer et suivre toutes les réservations de véhicules à Lomé, Togo
          </p>
        </div>
        <button
          onClick={handleOpenModal}
          className="flex items-center justify-center rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-sm"
        >
          <span className="material-symbols-outlined mr-2">add</span>
          <span>Nouvelle Réservation Manuelle</span>
        </button>
      </div>

      {/* Modal Nouvelle Réservation Manuelle */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Nouvelle Réservation Manuelle"
        maxWidth="4xl"
      >
        <ManualBookingForm onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default BookingsHeader;
