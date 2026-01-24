import React from 'react';

const SettingsFooter: React.FC = () => {
  const handleSave = () => {
    console.log('Saving all changes...');
    // TODO: Implement save logic
  };

  const handleDiscard = () => {
    console.log('Discarding changes...');
    // TODO: Implement discard logic
  };

  return (
    <footer className="fixed bottom-0 left-72 right-0 w-auto bg-white dark:bg-background-dark border-t border-[#dbe0e6] dark:border-slate-800 p-4 shadow-2xl z-50">
      <div className="max-w-[1100px] mx-auto flex justify-end gap-4">
        <button
          onClick={handleDiscard}
          className="px-6 py-2.5 text-sm font-bold text-[#617589] dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          Annuler les Modifications
        </button>
        <button
          onClick={handleSave}
          className="px-8 py-2.5 bg-primary text-white text-sm font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center"
        >
          <span className="material-symbols-outlined mr-2 text-lg">save</span>
          Enregistrer Toutes les Modifications
        </button>
      </div>
    </footer>
  );
};

export default SettingsFooter;
