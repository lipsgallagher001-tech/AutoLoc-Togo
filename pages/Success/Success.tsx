
import React, { useEffect } from 'react';
import SuccessStatus from './sections/SuccessStatus';
import BookingSummaryCard from './sections/BookingSummaryCard';
import NextSteps from './sections/NextSteps';
import ActionButtons from './sections/ActionButtons';
import TrustFooter from './sections/TrustFooter';

const Success: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-[800px] w-full bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-8 md:p-12">
        <SuccessStatus />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BookingSummaryCard />
          <NextSteps />
        </div>

        <ActionButtons />
        <TrustFooter />
      </div>
    </main>
  );
};

export default Success;
