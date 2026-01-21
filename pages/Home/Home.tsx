
import React, { useEffect } from 'react';
import Hero from './sections/Hero';
import WhyChooseUs from './sections/WhyChooseUs';
import FeaturedVehicles from './sections/FeaturedVehicles';
import Steps from './sections/Steps';

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
