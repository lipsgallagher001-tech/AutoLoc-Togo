import React from 'react';

const FleetGrid: React.FC = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Toyota Corolla 2022',
      plate: 'TG-4532-AG',
      price: '25k',
      status: 'available',
      statusLabel: 'Disponible',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB-wxyi8Y796qo3wxZNEcuIYrY4vKCRvwFmCrGy7WJ68SsNdOJ0JA1DhlCGUJy7mHQ38YuKTiXDL9oIjQoxZS5G4MkE3dgcCDkzZvgJmsI5CDUHiE0uIVQrK8NM0qePPc5FqV0TG_DemTwaYjTmAAche1EpEMbUYa4R3-Y6_YoxCwGxzuMOCTbu6KGoPq6jH4XPxL3ShiQSU5Z5C188rtZFIRHvzBGgdPxyQnyPXnNEEQOXgg6ShTB1XXmfPJMeYzDp3vFcgHfap1-F',
    },
    {
      id: 2,
      name: 'Hyundai Tucson',
      plate: 'TG-8812-BF',
      price: '45k',
      status: 'rented',
      statusLabel: 'Loué',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA0oL7-oz2J4QphXELA35d84OZSoEFudCARK3TiNAq4SEbWnDRJD1pqobv9VN9K9wYkxsjMaaGfbhRygDzqsAbVTIHCt4jd5y1ySzBfBBXVokKIUwpqAOQyEXcKYZpDi4wloXDbrXV5Q2NXt6UqfGDPTKwqVZ7yEB8r7AKSxbnumcS9a_HQClBo56_AtLDoB08rS9_AvDCGA-QO_a_TC-fS9OHfb8FlWVft2MkAkqOxKrnBGsuan6gY5Tf9tru-LVm266BAGra3USjQ',
    },
    {
      id: 3,
      name: 'Suzuki Swift',
      plate: 'TG-1029-AA',
      price: '15k',
      status: 'available',
      statusLabel: 'Disponible',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCkHiGbhpYg9mmEBrb5vd2SCECmj5CPT4rYoxEr2bcmY_LrkOd0jRVXrpy_-5PhFLwj6WhINQ4yFR6Cz4BnwvFioQCsIuzVZz9iDDtbacxk7ApliCUxy2p1ajNbzvnP7chBjzf19ru3yVo0Iz63zqQCzY3Dz_jIlk2C3CbaAs2q1s4oHK-mjGTWD86s8rI7hLrkNcKJF9u9nFz-akrwClBWfvY0re3wihgEgfQkxT_IyTm_vZuOy1Q8HXvd3a1tEWck2UVv1Hg6XNQ-',
    },
    {
      id: 4,
      name: 'Toyota Hilux 4x4',
      plate: 'TG-5567-CH',
      price: '60k',
      status: 'maintenance',
      statusLabel: 'Maintenance',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC-0eAz1DFbGWF6kxBZPcjvmuyVX8KaJkMXpAU1Fne516tc0nvje8--FMoLiY0-EgUpmXRFYrvYOT1_mz0EsUlDP7qW3wb_btFEMhKJNtyF8ryMN4KhEwSqAfYnJKDE9iCR1CVJE33NevIE_3lG73TZJa5DgadwJAcLh76P63M32pHkDhxUNZbnH2RftAa6nMxUCAOCNxHNZJ_oufQi_98geV4Z-UWweZj2RtgriUTKc778DeGsryds7AmUdz2d0CGhc6bBT0c7bq_-',
    },
    {
      id: 5,
      name: 'Kia Rio 2021',
      plate: 'TG-9011-LM',
      price: '22k',
      status: 'available',
      statusLabel: 'Disponible',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBJwJmWhIhLtdlG-pZmKKVe18mdLUHqHm__nO2uJbhF7GJ3AMV6X_7cnSS3bMWBKtuO5UmBmgoCTyGzQ88-QXxBcepp5ZSzsJXbDdkABrYOmxErKIEVSENi4l5c1SmurDV8NwYT6CZBlmXzA-15MC4Q_J4ULbNbarBOZ9iFS_rWGYirFVOKh6xTshtfwSp8uN41YW8cMVP5J84hAiz5s2gAlp2fGty5wmEQcNQ0ekbnjY0EJacvZL21VVatDAZ9Y2dQJDpmzKZcdTWh',
    },
    {
      id: 6,
      name: 'Lexus RX350',
      plate: 'TG-2234-ZY',
      price: '85k',
      status: 'rented',
      statusLabel: 'Loué',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDC8ls2PG-0VJjYVZhpWEOeqjCVyZnwk0Ndt-TwbjgQ_Te_Vk_D0m8t3UNOaWCQMg4MYrw-fr5WhspGUdfV2vhZoyNXKRkOVYpIpLpgwSQMDtpBYb0FoxIIHlM3w9T6oGk1lxi0sJ1KfW76juVCCiBp1DDSCXIKsEXpoxHDrWbCv8jkCM77K3q-WNQMM8S4gj0AjOrxMsOJppdsWVaX1D5sYCZLXDmUVZHdwVALRkNHkCEcU3d5q9gbKrdb7Ky-fCeCDp0jVNDbPDNE',
    },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-emerald-500 text-white';
      case 'rented':
        return 'bg-primary text-white';
      case 'maintenance':
        return 'bg-rose-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-white dark:bg-[#1a2632] rounded-xl overflow-hidden border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm hover:shadow-md transition-shadow group"
          >
            {/* Image */}
            <div className="relative aspect-video">
              <div
                className="w-full h-full bg-slate-200 bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url('${vehicle.image}')` }}
              ></div>
              <div className="absolute top-3 right-3">
                <span
                  className={`${getStatusStyles(
                    vehicle.status
                  )} text-[10px] uppercase font-black px-2 py-1 rounded-full shadow-sm`}
                >
                  {vehicle.statusLabel}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-[#111418] dark:text-white leading-tight">
                    {vehicle.name}
                  </h4>
                  <p className="text-xs font-mono text-[#617589] mt-1">
                    PLAQUE: {vehicle.plate}
                  </p>
                </div>
                <p className="text-right">
                  <span className="text-lg font-black text-primary">{vehicle.price}</span>
                  <span className="text-[10px] text-[#617589] block uppercase font-bold">
                    FCFA / Jour
                  </span>
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-6">
                <button className="flex-1 text-sm font-bold py-2.5 rounded-lg border border-[#dbe0e6] dark:border-[#2d3a4b] hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors">
                  Modifier
                </button>
                <button className="flex-1 text-sm font-bold py-2.5 rounded-lg bg-[#f0f2f4] dark:bg-background-dark hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors">
                  Changer Statut
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Placeholder Card */}
        <button className="border-2 border-dashed border-[#dbe0e6] dark:border-[#2d3a4b] rounded-xl flex flex-col items-center justify-center p-8 hover:bg-slate-100 dark:hover:bg-gray-800/50 transition-colors group">
          <span className="material-symbols-outlined text-4xl text-[#617589] group-hover:text-primary transition-colors">
            add_circle
          </span>
          <span className="mt-4 font-bold text-[#617589] dark:text-gray-400 group-hover:text-primary">
            Ajouter un Véhicule
          </span>
        </button>
      </div>

      {/* Pagination */}
      <div className="mt-12 flex items-center justify-center gap-4">
        <button
          className="p-2 rounded-lg border border-[#dbe0e6] dark:border-[#2d3a4b] hover:bg-slate-100 dark:hover:bg-gray-800 disabled:opacity-50"
          disabled
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-lg bg-primary text-white font-bold">1</button>
          <button className="w-10 h-10 rounded-lg text-[#617589] dark:text-gray-400 font-bold hover:bg-slate-100 dark:hover:bg-gray-800">
            2
          </button>
          <button className="w-10 h-10 rounded-lg text-[#617589] dark:text-gray-400 font-bold hover:bg-slate-100 dark:hover:bg-gray-800">
            3
          </button>
          <span className="text-[#617589] mx-1">...</span>
          <button className="w-10 h-10 rounded-lg text-[#617589] dark:text-gray-400 font-bold hover:bg-slate-100 dark:hover:bg-gray-800">
            12
          </button>
        </div>
        <button className="p-2 rounded-lg border border-[#dbe0e6] dark:border-[#2d3a4b] hover:bg-slate-100 dark:hover:bg-gray-800">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </>
  );
};

export default FleetGrid;
