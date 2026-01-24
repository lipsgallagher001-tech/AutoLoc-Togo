import React from 'react';

const ServiceMap: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm relative overflow-hidden group">
      <h2 className="text-[#111418] dark:text-white text-lg font-bold mb-2">
        Carte de Service
      </h2>
      <p className="text-xs text-[#617589] dark:text-gray-400 mb-4">
        Suivi en direct de 42 unités actives au Togo.
      </p>
      <div
        className="aspect-video w-full rounded-lg bg-gray-100 dark:bg-gray-800 relative bg-cover bg-center group-hover:scale-[1.02] transition-transform duration-500"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2l7fYgGFvTTrDPMI2aM0DmMdbGVkUd0fa5dNAUxUjWFvUN_MBb9gKZpadr9bQX-eWHA9aqjy10yjkF2WeQKFdcjEzgpZdHu5EQDgl4h0LE-2ZipqXZmLqfZwAlDOJlhrltPDHkg-iu0-x4t5D9qHZr_Eise6BuIe7VgJyMKBas3avUEgl0NHeR18civjMcyU-Ow_nrJhzyNuWg2zqu2eN1Odb3J1ZWkPUaw_I4Az2c7fyP6J-ZKtMArc1r080zypnhygzIo_NEQE_')",
        }}
      >
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="size-3 bg-primary rounded-full animate-ping"></div>
          <div className="size-3 bg-primary rounded-full absolute"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceMap;
