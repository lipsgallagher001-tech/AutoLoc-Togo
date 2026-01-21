import React, { useState } from 'react';

const MessageSubmit: React.FC = () => {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    // Redirection directe vers la page de succès
    window.location.hash = '#/success';
  };

  return (
    <section>
      <div className="bg-white dark:bg-[#1a252f] p-6 rounded-xl shadow-sm border border-[#e5e7eb] dark:border-[#2a3038] space-y-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#111418] dark:text-white">
            Message Optionnel (Demandes Spéciales)
          </label>
          <textarea
            className="w-full rounded-lg border-[#d1d5db] dark:border-[#3a4550] dark:bg-[#111418] focus:border-primary focus:ring-1 focus:ring-primary px-4 py-3"
            placeholder="J'aurai besoin d'un siège enfant..."
            rows={3}
          ></textarea>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3 text-sm text-[#617589]">
            <input
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 rounded border-[#d1d5db] text-primary focus:ring-primary"
              type="checkbox"
            />
            <span>
              J'accepte les Conditions Générales de Service et la Politique de Confidentialité d'AutoLoc. Je comprends qu'une réservation n'est définitive qu'après confirmation par un agent.
            </span>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98]"
          >
            Confirmer la Demande de Réservation
          </button>
        </div>
      </div>
    </section>
  );
};

export default MessageSubmit;
