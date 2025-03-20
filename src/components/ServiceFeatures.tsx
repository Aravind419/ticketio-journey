
import React from 'react';
import { motion } from 'framer-motion';
import { Bus, Map, Clock, Wifi, CreditCard, Shield } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Bus,
    title: 'Modern Fleet',
    description: 'Travel in comfort with our modern, well-maintained fleet of buses equipped with the latest amenities.'
  },
  {
    id: 2,
    icon: Map,
    title: 'Extensive Network',
    description: 'Our extensive route network connects over 850 cities, making it easy to reach your destination.'
  },
  {
    id: 3,
    icon: Clock,
    title: 'Punctual Service',
    description: 'We pride ourselves on our punctuality. Our buses depart and arrive according to schedule.'
  },
  {
    id: 4,
    icon: Wifi,
    title: 'Onboard Amenities',
    description: 'Enjoy free Wi-Fi, charging ports, and entertainment options during your journey.'
  },
  {
    id: 5,
    icon: CreditCard,
    title: 'Flexible Booking',
    description: 'Easy online booking with multiple payment options and the ability to modify your reservation.'
  },
  {
    id: 6,
    icon: Shield,
    title: 'Safe Travel',
    description: 'Your safety is our priority with experienced drivers and regular vehicle maintenance.'
  }
];

const ServiceFeatures = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Exceptional Services for Your Journey
          </h2>
          <p className="text-brand-gray-600 max-w-2xl mx-auto">
            We are committed to providing you with a comfortable, reliable, and enjoyable 
            travel experience from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card rounded-xl p-6 h-full"
            >
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-brand-red/10 text-brand-red mb-5">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-brand-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="text-4xl font-bold mb-2">850+</div>
              <div className="font-medium opacity-90">Cities Covered</div>
            </div>
            <div className="text-center p-4 border-y md:border-y-0 md:border-x border-white/20 my-4 md:my-0">
              <div className="text-4xl font-bold mb-2">2M+</div>
              <div className="font-medium opacity-90">Happy Customers</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="font-medium opacity-90">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
