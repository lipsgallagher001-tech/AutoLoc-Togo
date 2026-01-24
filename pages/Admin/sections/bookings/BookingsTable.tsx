import React from 'react';

const BookingsTable: React.FC = () => {
  const bookings = [
    {
      refId: '#BK-9021',
      customer: {
        name: 'Koffi Mensah',
        email: 'koffi.m@email.tg',
      },
      whatsapp: '+228 90 12 34 56',
      vehicle: {
        name: 'Toyota RAV4',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAyoR-QyysoxSAWtjQXuKy_LOUWzIE7V63hT8FZrIdN2q5castXh5yyeKHuP_0kMxapgQ95bWc3KrZ9xmzE2VaKPZs3vRg4q-gAPT8rX3gyT_TkF_kxzqavGaiUwdj9EHgk-wMjwyQ7ey_MuO3HBp5_RBoTjzLzoEar839BYyGbu6lt9dt6aWjEgGMhKksdjvMXE16GGA4eUQ_pDTBF4EjAHCkuDEsxyKsuFkVzMYbNO6lBk1ax9-WoGW7N_D84aHyYqVkpKk7ok9py',
      },
      duration: {
        days: '3 Jours',
        dates: '12 Oct - 15 Oct',
      },
      totalPrice: '105,000 FCFA',
      status: 'pending',
      statusLabel: 'En Attente',
    },
    {
      refId: '#BK-8944',
      customer: {
        name: 'Amivi Adjoa',
        email: 'amivi.a@domain.com',
      },
      whatsapp: '+228 92 44 88 11',
      vehicle: {
        name: 'Hyundai Tucson',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDvJfJ8JSgbe-6FlFkpLXaVdThVGVPloY-sZqjQetWtoAeAKQex138zVQ0W5D5DA8uoOdHGeV73v5RQT2QPiAbahmpg01lv-30czDSY9O_Z-Jo44al1Ocin9optYz36WFFh0tGjQWzKju9F4kNXjm47nohKHluOa5bDt32krEtyBDGa3W8vcM0qOajJIU6vk46iVRZScayjjUOjnOqZ0H5UhMC3OmhOG7V-1s3DRO8mSiQyQc4FS_wGKlvOGLBAte8k60hqdBnipsBM',
      },
      duration: {
        days: '5 Jours',
        dates: '14 Oct - 19 Oct',
      },
      totalPrice: '225,000 FCFA',
      status: 'confirmed',
      statusLabel: 'Confirmé',
    },
    {
      refId: '#BK-8832',
      customer: {
        name: 'Yawovi T.',
        email: 'yawovi@service.tg',
      },
      whatsapp: '+228 99 00 22 44',
      vehicle: {
        name: 'Kia Sportage',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAqpmo0q6molUGBWWgLV6onXm6YT1IKIJYB6fdaBa2jjIP8r-kqKzOjbDiV_Rv63bdw5jpvroSgKfNQWyG0ORlhc-or9RsAERqtjekVKUxiL_WOjXn0mBrdx1U_zxjYqr8BX8fMDu1Q0VsiP1Fc42FJwpCJegyZRqVlDj12xLK4lLO6Lhf1kPtjmRLgDpowev_R-jujTVqKcKaeoPmvPxqA196m49S7QKVhk603SkaD1wG4QVDAtgV3Juo1XP347xja9zjfheERC5z7',
      },
      duration: {
        days: '1 Jour',
        dates: '10 Oct - 11 Oct',
      },
      totalPrice: '35,000 FCFA',
      status: 'cancelled',
      statusLabel: 'Annulé',
    },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500';
      case 'confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8fafc] dark:bg-background-dark/50 border-b border-[#dbe0e6] dark:border-[#2d3a4b]">
              <th className="px-6 py-4 text-sm font-semibold text-[#111418] dark:text-white">
                Réf ID
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-[#111418] dark:text-white">
                Client
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-[#111418] dark:text-white">
                WhatsApp
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-[#111418] dark:text-white">
                Véhicule
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-[#111418] dark:text-white">
                Durée
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-[#111418] dark:text-white">
                Prix Total
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-[#111418] dark:text-white">
                Statut
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-[#111418] dark:text-white text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#dbe0e6] dark:divide-[#2d3a4b]">
            {bookings.map((booking) => (
              <tr
                key={booking.refId}
                className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
              >
                <td className="px-6 py-4 font-mono text-xs text-[#617589]">
                  {booking.refId}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#111418] dark:text-white">
                      {booking.customer.name}
                    </span>
                    <span className="text-xs text-[#617589]">
                      {booking.customer.email}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a
                    className="inline-flex items-center text-primary hover:underline text-sm font-medium gap-1"
                    href={`https://wa.me/${booking.whatsapp.replace(/\s/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    {booking.whatsapp}
                  </a>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="size-10 rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: `url('${booking.vehicle.image}')` }}
                    ></div>
                    <span className="text-sm font-medium">{booking.vehicle.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-[#111418] dark:text-white">
                      {booking.duration.days}
                    </span>
                    <span className="text-xs text-[#617589]">
                      {booking.duration.dates}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-bold">{booking.totalPrice}</span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${getStatusStyles(
                      booking.status
                    )}`}
                  >
                    {booking.statusLabel}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    {booking.status === 'pending' && (
                      <button
                        className="p-1.5 rounded text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
                        title="Confirmer"
                      >
                        <span className="material-symbols-outlined">check_circle</span>
                      </button>
                    )}
                    {booking.status !== 'cancelled' && (
                      <button
                        className="p-1.5 rounded text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        title="Modifier"
                      >
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                    )}
                    {booking.status === 'pending' && (
                      <button
                        className="p-1.5 rounded text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                        title="Annuler"
                      >
                        <span className="material-symbols-outlined">cancel</span>
                      </button>
                    )}
                    {booking.status === 'cancelled' && (
                      <button
                        className="p-1.5 rounded text-primary hover:bg-primary/10"
                        title="Re-réserver"
                      >
                        <span className="material-symbols-outlined">restart_alt</span>
                      </button>
                    )}
                    {booking.status === 'confirmed' && (
                      <button
                        className="p-1.5 rounded text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                        title="Plus"
                      >
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-[#dbe0e6] dark:border-[#2d3a4b]">
        <p className="text-sm text-[#617589] dark:text-gray-400">
          Affichage de 1 à 3 sur 1,284 réservations
        </p>
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center size-8 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500">
            <span className="material-symbols-outlined text-base">chevron_left</span>
          </button>
          <button className="flex items-center justify-center size-8 rounded bg-primary text-white text-sm font-bold">
            1
          </button>
          <button className="flex items-center justify-center size-8 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium">
            2
          </button>
          <button className="flex items-center justify-center size-8 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium">
            3
          </button>
          <button className="flex items-center justify-center size-8 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500">
            <span className="material-symbols-outlined text-base">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingsTable;
