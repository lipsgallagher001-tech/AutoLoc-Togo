
import React from 'react';
import { MOCK_VEHICLES } from '../../../constants';
import Card from '../../../components/UI/Card';
import Button from '../../../components/UI/Button';

const VehicleList: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MOCK_VEHICLES.map(vehicle => (
            <Card 
              key={vehicle.id} 
              vehicle={vehicle} 
              onViewDetails={(id) => window.location.hash = `#/details/${id}`}
            />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Button variant="secondary" className="px-12 py-4 !rounded-2xl border-2 flex items-center gap-4 group">
            Charger plus de véhicules
            <span className="group-hover:translate-y-1 transition-transform">↓</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VehicleList;
