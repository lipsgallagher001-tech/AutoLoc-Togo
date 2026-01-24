import React, { useState } from 'react';

const NotificationsSettings: React.FC = () => {
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    whatsappAlerts: true,
    weeklyReport: false,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  return (
    <section className="scroll-mt-32" id="notifications">
      <h2 className="text-[#111418] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-6">
        Notifications
      </h2>
      <div className="bg-white dark:bg-slate-800/40 rounded-xl border border-[#dbe0e6] dark:border-slate-800 divide-y divide-[#dbe0e6] dark:divide-slate-800">
        <div className="p-6 flex items-center justify-between">
          <div>
            <p className="text-[#111418] dark:text-white font-semibold">
              Alertes Email Nouvelles Réservations
            </p>
            <p className="text-sm text-[#617589] dark:text-slate-400">
              Recevez un email à chaque réservation de véhicule par un client.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.emailAlerts}
              onChange={() => toggleNotification('emailAlerts')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
        <div className="p-6 flex items-center justify-between">
          <div>
            <p className="text-[#111418] dark:text-white font-semibold">
              Alertes WhatsApp (Temps Réel)
            </p>
            <p className="text-sm text-[#617589] dark:text-slate-400">
              Envoyez une notification instantanée au numéro de réservation via WhatsApp.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.whatsappAlerts}
              onChange={() => toggleNotification('whatsappAlerts')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
        <div className="p-6 flex items-center justify-between">
          <div>
            <p className="text-[#111418] dark:text-white font-semibold">
              Résumé Analytique Hebdomadaire
            </p>
            <p className="text-sm text-[#617589] dark:text-slate-400">
              Un rapport hebdomadaire des revenus, réservations et statut de la flotte.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.weeklyReport}
              onChange={() => toggleNotification('weeklyReport')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
      </div>
    </section>
  );
};

export default NotificationsSettings;
