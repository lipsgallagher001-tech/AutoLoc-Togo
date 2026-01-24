import React, { useState } from 'react';
import SettingsHeader from './settings/SettingsHeader';
import SettingsTabs from './settings/SettingsTabs';
import GeneralSettings from './settings/GeneralSettings';
import NotificationsSettings from './settings/NotificationsSettings';
import SecuritySettings from './settings/SecuritySettings';
import BusinessRulesSettings from './settings/BusinessRulesSettings';
import SettingsFooter from './settings/SettingsFooter';

const SettingsContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="relative pb-24">
      <div className="max-w-[1100px] mx-auto px-6 py-8">
        {/* Page Heading */}
        <SettingsHeader />

        {/* Tabs */}
        <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content Sections */}
        <div className="flex flex-col gap-12 mt-8">
          {activeTab === 'general' && <GeneralSettings />}
          {activeTab === 'notifications' && <NotificationsSettings />}
          {activeTab === 'security' && <SecuritySettings />}
          {activeTab === 'rules' && <BusinessRulesSettings />}
        </div>
      </div>

      {/* Sticky Footer */}
      <SettingsFooter />
    </div>
  );
};

export default SettingsContent;
