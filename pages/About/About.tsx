import React from 'react';
import AboutHeader from './sections/AboutHeader';
import OurStory from './sections/OurStory';
import OurValues from './sections/OurValues';
import OurTeam from './sections/OurTeam';
import StatisticsGrid from '../Admin/sections/statistics/StatisticsGrid';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <AboutHeader />
      <OurStory />
      <section className="px-6 lg:px-10 py-16 bg-primary/5 dark:bg-primary/10">
        <div className="max-w-[1280px] mx-auto">
          <StatisticsGrid />
        </div>
      </section>
      <OurValues />
      <OurTeam />
    </div>
  );
};

export default About;
