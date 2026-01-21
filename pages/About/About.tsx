import React from 'react';
import AboutHeader from './sections/AboutHeader';
import OurStory from './sections/OurStory';
import OurValues from './sections/OurValues';
import OurTeam from './sections/OurTeam';
import Statistics from './sections/Statistics';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <AboutHeader />
      <OurStory />
      <Statistics />
      <OurValues />
      <OurTeam />
    </div>
  );
};

export default About;
