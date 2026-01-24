import React from 'react';

const RecentBookings: React.FC = () => {
  const bookings = [
    {
      reference: '#AL-2934',
      client: 'Ablam Amouzou',
      vehicle: 'Toyota Hilux 2023',
      dates: '12 Oct - 15 Oct',
      status: 'pending',
      statusLabel: 'En Attente',
    },
    {
      reference: '#AL-2935',
      client: 'Fafa Gbeblewu',
      vehicle: 'Suzuki Vitara',
      dates: '10 Oct - 12 Oct',
      status: 'confirmed',
      statusLabel: 'Confirmé',
    },
    {
      reference: '#AL-2936',
      client: 'Yao Kouma',
      vehicle: 'Hyundai Santa Fe',
      dates: '05 Oct - 08 Oct',
      status: 'completed',
      statusLabel: 'Terminé',
    },
    {
      reference: '#AL-2937',
      client: 'Essi Mensah',
      vehicle: 'Renault Logan',
      dates: '03 Oct - 05 Oct',
      status: 'confirmed',
      statusLabel: 'Confirmé',
    },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400';
      case 'confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getStatusDotColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-amber-600';
      case 'confirmed':
        return 'bg-green-600';
      case 'completed':
        return 'bg-blue-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="xl:col-span-2 bg-white dark:bg-[#1a2632] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-[#2d3a4b] flex justify-between items-center">
        <h2 className="text-[#111418] dark:text-white text-lg font-bold">
          Réservations Récentes
        </h2>
        <button className="text-primary text-sm font-semibold hover:underline">
          Voir Tout
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-background-light dark:bg-background-dark/50">
            <tr>
              <th className="px-6 py-3 text-[#617589] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                Référence
              </th>
              <th className="px-6 py-3 text-[#617589] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 text-[#617589] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                Véhicule
              </th>
              <th className="px-6 py-3 text-[#617589] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                Dates
              </th>
              <th className="px-6 py-3 text-[#617589] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                Statut
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f0f2f4] dark:divide-[#2d3a4b]">
            {bookings.map((booking) => (
              <tr
                key={booking.reference}
                className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-primary">
                  {booking.reference}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-[#111418] dark:text-white">
                  {booking.client}
                </td>
                <td className="px-6 py-4 text-sm text-[#617589] dark:text-gray-400">
                  {booking.vehicle}
                </td>
                <td className="px-6 py-4 text-sm text-[#617589] dark:text-gray-400">
                  {booking.dates}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${getStatusStyles(
                      booking.status
                    )}`}
                  >
                    <span
                      className={`size-1.5 rounded-full ${getStatusDotColor(
                        booking.status
                      )}`}
                    ></span>
                    {booking.statusLabel}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentBookings;
