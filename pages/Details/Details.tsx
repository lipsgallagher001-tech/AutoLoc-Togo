
import React, { useEffect } from 'react';
import { MOCK_VEHICLES } from '../../constants';
import Breadcrumbs from './sections/Breadcrumbs';
import VehicleGallery from './sections/VehicleGallery';
import VehicleSpecs from './sections/VehicleSpecs';
import PricingOptions from './sections/PricingOptions';
import Sidebar from './sections/Sidebar';

const Details: React.FC = () => {
  const hashParts = window.location.hash.split('/');
  const id = hashParts[hashParts.length - 1] || '1';
  const vehicle = MOCK_VEHICLES.find((v) => v.id === id) || MOCK_VEHICLES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Mock images for gallery
  const vehicleImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuALXR2DnKUBH3YbZ67p4-h-f4bDS9nH76r68Gb4_VCFh4et_zZUxBY4vGzMtsI_RnrpJyNWq6xZ-sMbrJQmHM6RoZX2qo-fQ29jDh9LOShBWOT2wfSpZW_b7Z2cY873sjDPLm469tS6MbJVxK0ZEkglzv0opIbxN0bZRoZYc5tNhDEtU_esSVB2fOdJBzDSdesVNaDZ1Az-PxkTiENoDzNU5TzkG79aOrzBcrUL8zgcTNDtumRXJdL5dkqL9H93-Ac1BRxd-FeATvbN',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAEyXY3_Q4hMzyeo8vGkO1R14k6XgAXydozjs_yNwJOYIVKDa0m_KaH6Ssm2rlIg7I_vCX98Fi20hKLAW6fTUjrbC0zXNBj_3h0gi5WGpkNfTLDopRud4RabCp8DsC6-uJJu08oWFlaC0pg86EoGid1dB0vaffNPNKvBBx8AUZlsKnUNmfir_PwEMeTDzMy2x4bt4FTGpItGD9IoCDRAYUarOmrFaW4OBZhY72QVCUt2Ji3hVqwJZ7Ba5skmgVOC4rcv9Hqer-mL4wd',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCCpwaDQ7TyiMHCj3q5CEqYjd_rzJnR4mG7vgrH1objVQOPVeX2wI6puX8Y-eUsq4wlBzjkH8EoAYTvt_uYVxd6cm_7MGlppojIWEHJirJi7aNVj7vYWLcXsFdTr_VI04sFfNMS0K1X8BeITBn5iSjMoyVcEuqYwKVeimFaqZpDTBN84AsIY4PTxiyjSyjMiDKN_i6IBAo5fWKulB0I_L2nPtgQYenxIwpk-p9K7fsSG2YdCokiaSDuyIC0seAUpwdKH3ArEzpq91AB',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB7lMUT52MBsi3uk8ZEnQ5y2vnbmmxv568ChpuPIAFFSpnFyO6Eg1EwfFEUzHXEAD8eNDsMBBjPDUyeCBje2YCwOVQCYG6o_6grHuJ16OnkUBOn8XHxFW1wXqMIoCY5E8sTNLCI0wPgg-E42QcYz7I3G1z6OuR3lsaZJ5MyxpCZxv1WRu6_CjsmeIz67uvb4y9f0JxDScJJHcrt_iraEqcB2bVw8vUA0ArQsAf-msZ4tg51Y8A92M27IY0IOC3icp4xTDLcsIZ3SY8N',
  ];

  return (
    <main className="max-w-[1280px] mx-auto px-4 sm:px-10 py-6">
      <Breadcrumbs vehicleName={`${vehicle.name} 2022`} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Visuals & Details */}
        <div className="lg:col-span-2 space-y-8">
          <VehicleGallery images={vehicleImages} vehicleName={vehicle.name} />
          <VehicleSpecs
            name={`${vehicle.name} - Edition 2022`}
            description={
              vehicle.description ||
              "Le compagnon idéal pour vos trajets à Lomé et dans tout le Togo. Puissant, fiable et parfaitement adapté à nos routes, ce SUV offre un confort exceptionnel pour vos voyages d'affaires ou en famille."
            }
            specs={{
              type: 'SUV 4x4',
              seats: vehicle.seats,
              transmission: vehicle.transmission,
              climate: 'Bi-Zone',
            }}
          />
          <PricingOptions basePrice={vehicle.pricePerDay} />
        </div>

        {/* Right Column: Sidebar (Sticky) */}
        <Sidebar />
      </div>
    </main>
  );
};

export default Details;
