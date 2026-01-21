import React from 'react';
import ContactHeader from './sections/ContactHeader';
import ContactInfo from './sections/ContactInfo';
import ContactForm from './sections/ContactForm';
import MapSection from './sections/MapSection';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <ContactHeader />
      <ContactInfo />
      <ContactForm />
      <MapSection />
    </div>
  );
};

export default Contact;
