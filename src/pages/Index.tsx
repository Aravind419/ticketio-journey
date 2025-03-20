
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookingForm from '@/components/BookingForm';
import PopularRoutes from '@/components/PopularRoutes';
import ServiceFeatures from '@/components/ServiceFeatures';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main>
          <Hero />
          
          <BookingForm />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PopularRoutes />
            
            <ServiceFeatures />
            
            {/* App Download Section */}
            <section className="py-20 px-6 md:px-10">
              <div className="max-w-7xl mx-auto">
                <div className="rounded-2xl overflow-hidden relative bg-brand-gray-900">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486452618673-321b9db07a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
                  
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-10 md:p-16">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Download Our Mobile App for Seamless Booking
                      </h2>
                      <p className="text-brand-gray-300 mb-8">
                        Get exclusive app-only deals, real-time trip updates, and manage your bookings on the go. Experience bus travel like never before with our intuitive mobile app.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <a href="#" className="flex items-center bg-black hover:bg-brand-gray-800 text-white rounded-lg px-5 py-3 transition-colors duration-300">
                          <svg className="h-8 w-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.707,9.293c-0.391-0.391-1.023-0.391-1.414,0l-5,5C11.098,14.488,11,14.744,11,15s0.098,0.512,0.293,0.707  C11.488,15.902,11.744,16,12,16s0.512-0.098,0.707-0.293l5-5C18.098,10.316,18.098,9.684,17.707,9.293z"/>
                            <path d="M8.707,13.293l-5,5c-0.391,0.391-0.391,1.023,0,1.414C3.902,19.902,4.158,20,4.414,20s0.512-0.098,0.707-0.293l5-5  c0.391-0.391,0.391-1.023,0-1.414S9.098,12.902,8.707,13.293z"/>
                            <path d="M19.707,2.293c-0.391-0.391-1.023-0.391-1.414,0l-16,16c-0.391,0.391-0.391,1.023,0,1.414  C2.488,19.902,2.744,20,3,20s0.512-0.098,0.707-0.293l16-16C20.098,3.316,20.098,2.684,19.707,2.293z"/>
                          </svg>
                          <div>
                            <div className="text-xs">Download on the</div>
                            <div className="text-lg font-semibold">App Store</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center bg-black hover:bg-brand-gray-800 text-white rounded-lg px-5 py-3 transition-colors duration-300">
                          <svg className="h-8 w-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3,20.5C3,21.33 3.67,22 4.5,22H19.5C20.33,22 21,21.33 21,20.5V3.5C21,2.67 20.33,2 19.5,2H4.5C3.67,2 3,2.67 3,3.5V20.5M16.71,11.29L12.71,7.29C12.32,6.9 11.68,6.9 11.29,7.29C10.9,7.68 10.9,8.32 11.29,8.71L14.59,12L11.29,15.29C10.9,15.68 10.9,16.32 11.29,16.71C11.68,17.1 12.32,17.1 12.71,16.71L16.71,12.71C17.1,12.32 17.1,11.68 16.71,11.29Z"/>
                          </svg>
                          <div>
                            <div className="text-xs">GET IT ON</div>
                            <div className="text-lg font-semibold">Google Play</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=926&q=80" 
                        alt="Mobile App" 
                        className="max-w-full h-auto rounded-xl shadow-2xl transform rotate-6 animate-float"
                        style={{ maxHeight: '600px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Testimonials Section */}
            <section className="py-20 px-6 md:px-10 bg-brand-gray-50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-medium mb-4">
                    Testimonials
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    What Our Customers Say
                  </h2>
                  <p className="text-brand-gray-600 max-w-2xl mx-auto">
                    Read what travelers have to say about their experience with our services
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Sarah Johnson",
                      location: "New York",
                      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                      comment: "The booking process was incredibly easy and the journey was comfortable. The bus was clean, the staff was helpful, and we arrived on time. Highly recommended!"
                    },
                    {
                      name: "Michael Brown",
                      location: "Chicago",
                      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                      comment: "I was impressed with the punctuality and comfort of the journey. The online booking system is user-friendly, and the prices are very reasonable compared to other options."
                    },
                    {
                      name: "Jennifer Lee",
                      location: "Los Angeles",
                      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                      comment: "As a frequent traveler, I appreciate the consistency in service quality. The buses are modern with great amenities, and the customer service is exceptional."
                    }
                  ].map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="glass-card rounded-xl p-6"
                    >
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-brand-gray-500 text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                      <p className="text-brand-gray-600 italic">"{testimonial.comment}"</p>
                      <div className="mt-4 flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        </main>
        
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Index;
