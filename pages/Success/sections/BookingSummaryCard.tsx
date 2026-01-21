import React from 'react';

const BookingSummaryCard: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[#111418] dark:text-white text-lg font-bold">Résumé de Réservation</h3>
      <div className="rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDClDwmsZ-Xbfq483J0qMo0dj13220AzJQ_fHZOgz0N6-CEnCcdmbMdzglLvapT6fBhXt87wSereOARCH4ew6QXJjFXNQjvUpLh0XrucOJyp5Cdc49sc602b4qsFuhSlRS8axCDY3bxQg1euGn0Ywdo_eBkw1nl4IbjJGJ_pyRnoR8SP6xHDo4me1DDlAvw7e0l5X_5PxK4s6Wtj5dcuHNMfNr41GjERvD_xWEmoEZ63xLEkJfgEvnhtYeGt3-NVU9wmXOsSm1_O0v8")',
          }}
        ></div>
        <div className="p-4 flex flex-col gap-3">
          <div className="flex flex-col gap-0.5">
            <p className="text-[#111418] dark:text-white text-lg font-bold">Toyota Hilux 4x4</p>
            <p className="text-[#617589] dark:text-slate-400 text-sm">Retrait : 20 Jan 2025</p>
            <p className="text-[#617589] dark:text-slate-400 text-sm">Retour : 25 Jan 2025</p>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 mt-1">
            <span className="text-[#617589] dark:text-slate-400 text-sm">Total Payé</span>
            <span className="text-primary font-bold text-lg">250,000 CFA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummaryCard;
