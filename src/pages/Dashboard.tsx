
import React from 'react';
import { UserButton, useUser } from '@clerk/clerk-react';
import Navbar from '@/components/Navbar';
import PopularRoutes from '@/components/PopularRoutes';
import BookingForm from '@/components/BookingForm';

const Dashboard = () => {
  const { user } = useUser();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[40vh] bg-gradient-to-r from-brand-red to-brand-darkRed">
        <Navbar />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome back, {user?.firstName || 'Traveler'}!
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your journey continues with us. Where would you like to go today?
          </p>
        </div>
      </div>
      
      <BookingForm />
      <div className="pt-36">
        <PopularRoutes />
      </div>
    </div>
  );
};

export default Dashboard;
