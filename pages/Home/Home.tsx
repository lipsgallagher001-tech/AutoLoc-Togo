
import React, { useEffect } from 'react';
import Hero from './sections/Hero.tsx';
import WhyChooseUs from './sections/WhyChooseUs.tsx';
import FeaturedVehicles from './sections/FeaturedVehicles.tsx';
import Steps from './sections/Steps.tsx';

const Home: React.FC = () => {
  useEffect(() => {
    // Si on arrive sur Home avec une ancre dans l'URL (ex: #steps)
    if (window.location.hash && !window.location.hash.startsWith('#/')) {
        const id = window.location.hash.substring(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <main className="animate-in fade-in duration-500">
      <Hero />
      <WhyChooseUs />
      <FeaturedVehicles />
      <Steps />
    </main>
  );
};

export default Home;
