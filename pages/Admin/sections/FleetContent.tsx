import React from 'react';
import FleetHeader from './fleet/FleetHeader';
import FleetStats from './fleet/FleetStats';
import FleetFilters from './fleet/FleetFilters';
import FleetGrid from './fleet/FleetGrid';

const FleetContent: React.FC = () => {
  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8">
      {/* Page Heading */}
      <FleetHeader />

      {/* Stats Overview */}
      <FleetStats />

      {/* Filters */}
      <FleetFilters />

      {/* Vehicle Grid */}
      <FleetGrid />
    </div>
  );
};

export default FleetContent;
