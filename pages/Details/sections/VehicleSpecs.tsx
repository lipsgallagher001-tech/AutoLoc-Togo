import React from 'react';

interface VehicleSpecsProps {
  name: string;
  description: string;
  specs: {
    type: string;
    seats: number;
    transmission: string;
    climate: string;
  };
}

const VehicleSpecs: React.FC<VehicleSpecsProps> = ({ name, description, specs }) => {
  return (
    <section className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <p className="text-[#617589] dark:text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center p-3 bg-background-light dark:bg-background-dark rounded-lg">
          <span className="material-symbols-outlined text-primary mb-1">directions_car</span>
          <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Type</span>
          <span className="text-sm font-semibold">{specs.type}</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-background-light dark:bg-background-dark rounded-lg">
          <span className="material-symbols-outlined text-primary mb-1">
            airline_seat_recline_extra
          </span>
          <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Places</span>
          <span className="text-sm font-semibold">{specs.seats} Personnes</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-background-light dark:bg-background-dark rounded-lg">
          <span className="material-symbols-outlined text-primary mb-1">
            settings_input_component
          </span>
          <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">
            Transmission
          </span>
          <span className="text-sm font-semibold">{specs.transmission}</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-background-light dark:bg-background-dark rounded-lg">
          <span className="material-symbols-outlined text-primary mb-1">ac_unit</span>
          <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Clim</span>
          <span className="text-sm font-semibold">{specs.climate}</span>
        </div>
      </div>
    </section>
  );
};

export default VehicleSpecs;
