
import React, { useEffect } from 'react';
import BookingBreadcrumbs from './sections/BookingBreadcrumbs';
import BookingHeader from './sections/BookingHeader';
import ClientInformation from './sections/ClientInformation';
import RentalDetails from './sections/RentalDetails';
import PaymentMethod from './sections/PaymentMethod';
import MessageSubmit from './sections/MessageSubmit';
import ReassuranceBadges from './sections/ReassuranceBadges';
import BookingSummary from './sections/BookingSummary';

const Booking: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8">
      <BookingBreadcrumbs />
      <BookingHeader />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Form Section */}
        <div className="lg:col-span-8 space-y-12">
          <ClientInformation />
          <RentalDetails />
          <PaymentMethod />
          <MessageSubmit />
          <ReassuranceBadges />
        </div>

        {/* Sidebar Section */}
        <BookingSummary />
      </div>
    </main>
  );
};

export default Booking;
