import React, { useState } from 'react';
import { Driver, DriverStatus } from '../../../../types';
import { MOCK_DRIVERS } from '../../../../constants';

const DriversTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const drivers: Driver[] = MOCK_DRIVERS;

  const getStatusBadge = (status: DriverStatus) => {
    switch (status) {
      case DriverStatus.AVAILABLE:
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-semibold">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            Disponible
          </span>
        );
      case DriverStatus.ON_MISSION:
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            En Mission
          </span>
        );
      case DriverStatus.OFF_DUTY:
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-semibold">
            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
            Hors Service
          </span>
        );
    }
  };

  const totalPages = Math.ceil(drivers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDrivers = drivers.slice(startIndex, endIndex);

  return (
    <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#f6f7f8] dark:bg-[#0f1a24] border-b border-[#dbe0e6] dark:border-[#2d3a4b]">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-[#617589] dark:text-gray-400 uppercase tracking-wider">
                Chauffeur
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-[#617589] dark:text-gray-400 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-[#617589] dark:text-gray-400 uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-[#617589] dark:text-gray-400 uppercase tracking-wider">
                Véhicule Actuel
              </th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-[#617589] dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#dbe0e6] dark:divide-[#2d3a4b]">
            {currentDrivers.map((driver) => (
              <tr key={driver.id} className="hover:bg-[#f6f7f8] dark:hover:bg-[#0f1a24] transition-colors">
                {/* Driver Info */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={driver.photo}
                      alt={driver.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#111418] dark:text-white">
                        {driver.name}
                      </p>
                      <p className="text-sm text-[#617589] dark:text-gray-400">
                        {driver.driverId}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Contact */}
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-[#111418] dark:text-white">
                      <span className="material-symbols-outlined text-base text-[#617589]">
                        phone
                      </span>
                      {driver.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#25D366]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                      </svg>
                      {driver.whatsapp}
                    </div>
                  </div>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  {getStatusBadge(driver.status)}
                </td>

                {/* Current Vehicle */}
                <td className="px-6 py-4">
                  {driver.currentVehicle ? (
                    <p className="text-sm text-[#111418] dark:text-white font-medium">
                      {driver.currentVehicle}
                    </p>
                  ) : (
                    <p className="text-sm text-[#617589] dark:text-gray-400 italic">
                      Aucun véhicule assigné
                    </p>
                  )}
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-xl">assignment</span>
                    </button>
                    <button className="p-2 text-[#617589] hover:bg-[#f6f7f8] dark:hover:bg-[#0f1a24] rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-xl">edit</span>
                    </button>
                    <button className="p-2 text-[#617589] hover:bg-[#f6f7f8] dark:hover:bg-[#0f1a24] rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-xl">description</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-[#dbe0e6] dark:border-[#2d3a4b] flex items-center justify-between">
        <p className="text-sm text-[#617589] dark:text-gray-400">
          Affichage de {startIndex + 1} à {Math.min(endIndex, drivers.length)} sur {drivers.length} chauffeurs
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 text-[#617589] hover:bg-[#f6f7f8] dark:hover:bg-[#0f1a24] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                currentPage === page
                  ? 'bg-primary text-white'
                  : 'text-[#617589] hover:bg-[#f6f7f8] dark:hover:bg-[#0f1a24]'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-2 text-[#617589] hover:bg-[#f6f7f8] dark:hover:bg-[#0f1a24] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DriversTable;
