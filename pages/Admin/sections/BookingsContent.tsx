import React from 'react';
import BookingsHeader from './bookings/BookingsHeader';
import BookingsStats from './bookings/BookingsStats';
import BookingsFilters from './bookings/BookingsFilters';
import BookingsTable from './bookings/BookingsTable';

const BookingsContent: React.FC = () => {
  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8">
      {/* Page Heading */}
      <BookingsHeader />

      {/* Stats Overview */}
      <BookingsStats />

      {/* Search & Filters */}
      <BookingsFilters />

      {/* Bookings Table */}
      <BookingsTable />
    </div>
  );
};

export default BookingsContent;
