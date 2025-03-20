
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-gray-900 text-white pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-red to-brand-darkRed flex items-center justify-center">
                <span className="text-white font-bold text-xl">RB</span>
              </div>
              <span className="font-bold text-2xl text-white">RideBus</span>
            </div>
            <p className="text-brand-gray-300 mb-6">
              Experience comfortable and reliable bus travel services across the country. Book your journey with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Services", "Popular Routes", "Blog", "Contact Us", "FAQs"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-brand-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                    <ArrowRight size={14} className="mr-2 text-brand-red" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-brand-red mt-1 flex-shrink-0" />
                <span className="text-brand-gray-300">
                  Veppanapalli , Krishnagiri-District
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-brand-red flex-shrink-0" />
                <span className="text-brand-gray-300">+91 98765434210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-brand-red flex-shrink-0" />
                <span className="text-brand-gray-300">support@ridebus.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-brand-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full py-3 px-4 rounded-lg bg-white/10 text-white placeholder-brand-gray-400 border border-white/20 focus:outline-none focus:border-brand-red"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-brand-red hover:bg-brand-darkRed text-white font-medium rounded-lg transition-colors duration-300"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-gray-400 text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} RideBus. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-brand-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-brand-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-brand-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
