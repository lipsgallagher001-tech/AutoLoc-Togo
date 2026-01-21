
import React, { useEffect } from 'react';
import FleetHeader from './sections/FleetHeader';
import FleetFilters from './sections/FleetFilters';
import VehicleGrid from './sections/VehicleGrid';

const Fleet: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-[1280px] mx-auto pb-20">
      <FleetHeader />
      <FleetFilters />
      <VehicleGrid />
    </main>
  );
};

export default Fleet;
