import React from 'react';

interface SettingsTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const SettingsTabs: React.FC<SettingsTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'general', icon: 'storefront', label: 'Général' },
    { id: 'notifications', icon: 'notifications_active', label: 'Notifications' },
    { id: 'security', icon: 'security', label: 'Sécurité' },
    { id: 'rules', icon: 'gavel', label: 'Règles Commerciales' },
  ];

  return (
    <div className="mb-8 sticky top-[65px] bg-background-light dark:bg-background-dark z-40 pt-2">
      <div className="flex border-b border-[#dbe0e6] dark:border-[#3b4754] gap-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center border-b-[3px] pb-3 pt-4 transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-[#617589] dark:text-[#9dabb9] hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined mr-2">{tab.icon}</span>
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SettingsTabs;
