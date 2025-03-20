
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const popularRoutes = [
  {
    id: 1,
    from: 'New York',
    to: 'Boston',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    time: '4h 30m',
    price: 45,
  },
  {
    id: 2,
    from: 'Chicago',
    to: 'Detroit',
    image: 'https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    time: '5h 15m',
    price: 38,
  },
  {
    id: 3,
    from: 'Los Angeles',
    to: 'San Francisco',
    image: 'https://images.unsplash.com/photo-1591025810539-a321000c6615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    time: '7h 45m',
    price: 55,
  },
  {
    id: 4,
    from: 'Miami',
    to: 'Orlando',
    image: 'https://images.unsplash.com/photo-1611161356639-ad833f167a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    time: '3h 45m',
    price: 35,
  },
];

const RouteCard = ({ route, index }: { route: typeof popularRoutes[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="glass-card rounded-xl overflow-hidden h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={route.image}
          alt={`${route.from} to ${route.to}`}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="flex items-center text-white">
            <span className="font-medium">{route.from}</span>
            <ArrowRight size={16} className="mx-2" />
            <span className="font-medium">{route.to}</span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-brand-gray-600">
            <Clock size={16} className="mr-1.5" />
            <span>{route.time}</span>
          </div>
          <div className="text-brand-red font-bold text-lg">
            ${route.price}
          </div>
        </div>
        <button className="w-full py-2.5 bg-white text-brand-red font-medium border border-brand-red rounded-lg hover:bg-brand-red hover:text-white transition-colors duration-300">
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

const PopularRoutes = () => {
  return (
    <section id="popular-routes" className="py-20 px-6 md:px-10 bg-brand-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Routes</h2>
          <p className="text-brand-gray-600 max-w-2xl mx-auto">
            Discover our most traveled routes with comfortable buses and competitive prices
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularRoutes.map((route, index) => (
            <RouteCard key={route.id} route={route} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-white text-brand-red font-medium border border-brand-red rounded-lg hover:bg-brand-red hover:text-white transition-colors duration-300">
            View All Routes
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
