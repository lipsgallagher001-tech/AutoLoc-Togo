import React, { useState } from 'react';

const SecuritySettings: React.FC = () => {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const handlePasswordChange = () => {
    console.log('Changing password...', passwords);
    // TODO: Implement password change logic
  };

  return (
    <section className="scroll-mt-32" id="security">
      <h2 className="text-[#111418] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-6">
        Sécurité
      </h2>
      <div className="bg-white dark:bg-slate-800/40 rounded-xl border border-[#dbe0e6] dark:border-slate-800 p-6">
        <div className="max-w-md space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-300">
              Mot de Passe Actuel
            </label>
            <input
              type="password"
              value={passwords.current}
              onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
              placeholder="••••••••"
              className="w-full bg-slate-50 dark:bg-slate-900/50 border border-[#dbe0e6] dark:border-slate-700 rounded-lg px-4 py-2.5 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-300">
              Nouveau Mot de Passe
            </label>
            <input
              type="password"
              value={passwords.new}
              onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
              placeholder="••••••••"
              className="w-full bg-slate-50 dark:bg-slate-900/50 border border-[#dbe0e6] dark:border-slate-700 rounded-lg px-4 py-2.5 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#617589] dark:text-slate-300">
              Confirmer le Nouveau Mot de Passe
            </label>
            <input
              type="password"
              value={passwords.confirm}
              onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
              placeholder="••••••••"
              className="w-full bg-slate-50 dark:bg-slate-900/50 border border-[#dbe0e6] dark:border-slate-700 rounded-lg px-4 py-2.5 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>
          <button
            onClick={handlePasswordChange}
            className="bg-slate-100 dark:bg-slate-700 text-[#111418] dark:text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
          >
            Changer le Mot de Passe
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecuritySettings;
