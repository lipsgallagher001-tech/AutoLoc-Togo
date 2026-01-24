import React from 'react';
import DriversHeader from './drivers/DriversHeader';
import DriversStats from './drivers/DriversStats';
import DriversFilters from './drivers/DriversFilters';
import DriversTable from './drivers/DriversTable';

const DriversContent: React.FC = () => {
  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8">
      {/* Page Heading */}
      <DriversHeader />

      {/* Stats Overview */}
      <DriversStats />

      {/* Filters */}
      <DriversFilters />

      {/* Drivers Table */}
      <DriversTable />
    </div>
  );
};

export default DriversContent;
