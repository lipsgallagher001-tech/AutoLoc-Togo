import React from 'react';
import StatisticsHeader from './statistics/StatisticsHeader';
import StatisticsGrid from './statistics/StatisticsGrid';

const StatisticsContent: React.FC = () => {
  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8">
      {/* Page Heading */}
      <StatisticsHeader />

      {/* Statistics Grid */}
      <StatisticsGrid />
    </div>
  );
};

export default StatisticsContent;
