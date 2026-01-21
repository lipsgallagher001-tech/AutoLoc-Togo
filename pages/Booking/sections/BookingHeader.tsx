import React from 'react';

const BookingHeader: React.FC = () => {
  return (
    <div className="mb-10">
      <h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
        Finalisez Votre Réservation
      </h1>
      <p className="text-[#617589] dark:text-[#97a9b9] text-lg mt-2 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">chat_bubble</span>
        Complétez le formulaire ci-dessous. Un agent confirmera via WhatsApp sous 2 heures.
      </p>
    </div>
  );
};

export default BookingHeader;
