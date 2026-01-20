
import React, { useEffect } from 'react';
import Confirmation from './sections/Confirmation';

const Success: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Confirmation />
    </main>
  );
};

export default Success;
