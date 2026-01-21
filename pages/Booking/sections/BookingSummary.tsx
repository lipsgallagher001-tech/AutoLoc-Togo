
import React from 'react';

const BookingSummary: React.FC = () => {
  return (
    <div className="lg:col-span-4">
      <div className="sticky top-24 space-y-6">
        {/* Vehicle Summary Card */}
        <div className="bg-white dark:bg-[#1a252f] rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-[#e5e7eb] dark:border-[#2a3038] overflow-hidden">
          <div
            className="aspect-video bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJQIuK9PyAirKB1YDEri_qhaCifkizqX7g4n89dr52_lS6byn_Q_Hv4DojWNclxdkMxxXgUsT2bdRsukXc6MMZhOpYlFhzhPjSWRmmxngTUetFONx0ZqBFMtqLBjzsvqzP718PHIqyie53fmEgdXv2eR3DTxbgQGqplxl-z8YiTZem5EwogBpdoNn_Fco3QfPche8N3tILGC7RvgL3ZMzFHYeyybzwsvX_USc4rns9BWph1KBk6VywHfHlyDa-dEbggkHnbe5Tz5zb")',
            }}
          ></div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                Résumé du Véhicule
              </span>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                Disponible
              </span>
            </div>
            <h3 className="text-xl font-black text-[#111418] dark:text-white">Toyota RAV4 2022</h3>
            <div className="flex gap-3 mt-2 text-[#617589] text-xs">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">settings</span> Auto
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">ac_unit</span> Clim
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">person</span> 5 Places
              </span>
            </div>
            <hr className="my-6 border-[#f0f2f4] dark:border-[#2a3038]" />
            <div className="space-y-3">
              <div className="flex justify-between text-sm text-[#617589]">
                <span>Tarif Journalier</span>
                <span>35.000 FCFA</span>
              </div>
              <div className="flex justify-between text-sm text-[#617589]">
                <span>Durée</span>
                <span className="font-bold text-[#111418] dark:text-white">3 Jours</span>
              </div>
              <div className="flex justify-between text-sm text-[#617589]">
                <span>Frais de Service</span>
                <span>0 FCFA</span>
              </div>
              <div className="pt-4 flex justify-between items-center border-t border-[#f0f2f4] dark:border-[#2a3038]">
                <span className="text-lg font-bold text-[#111418] dark:text-white">
                  Total Estimé
                </span>
                <div className="text-right">
                  <div className="text-2xl font-black text-primary">105.000 FCFA</div>
                  <div className="text-[10px] text-[#617589] uppercase font-medium">TVA Incluse</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Help Widget */}
        <div className="bg-primary/10 dark:bg-primary/5 rounded-xl p-6 border border-primary/20">
          <div className="flex items-center gap-4">
            <div className="bg-primary rounded-full p-2 text-white">
              <span className="material-symbols-outlined">help</span>
            </div>
            <div>
              <h4 className="font-bold text-sm">Besoin d'aide ?</h4>
              <p className="text-xs text-[#617589]">Discutez avec nous instantanément</p>
            </div>
          </div>
          <button className="w-full mt-4 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2 rounded-lg transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
            </svg>
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
