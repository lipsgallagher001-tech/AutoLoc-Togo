
import React, { useEffect } from 'react';
import FleetHeader from './sections/FleetHeader.tsx';
import VehicleList from './sections/VehicleList.tsx';

const Fleet: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="animate-in fade-in duration-500">
      <FleetHeader />
      <VehicleList />
    </main>
  );
};

export default Fleet;
