
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Bus, User, CalendarIcon, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

const cities = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", 
  "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", 
  "Fort Worth", "Columbus", "Charlotte", "San Francisco", "Indianapolis"
];

const BookingForm = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [date, setDate] = useState<Date>();
  const [passengers, setPassengers] = useState("1");

  const handleSwapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      fromCity,
      toCity,
      date: date ? format(date, 'PP') : '',
      passengers
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 -mt-28 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-card rounded-2xl p-6 md:p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Your Perfect Bus</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4 md:gap-6">
            {/* From Location */}
            <div className="lg:col-span-2">
              <Label htmlFor="from" className="text-brand-gray-700 font-medium mb-1.5 block">
                From
              </Label>
              <div className="relative">
                <Select value={fromCity} onValueChange={setFromCity}>
                  <SelectTrigger id="from" className="w-full h-12 bg-white border-brand-gray-200 pl-10">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {cities.map(city => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray-500">
                  <MapPin size={18} />
                </div>
              </div>
            </div>
            
            {/* Swap Button (Mobile Layout: Hidden on small, visible on md) */}
            <div className="hidden md:flex lg:col-span-1 items-end justify-center pb-2">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-brand-gray-100 hover:bg-brand-gray-200 rotate-90 md:rotate-0"
                onClick={handleSwapCities}
              >
                <ArrowRight size={18} />
              </Button>
            </div>
            
            {/* To Location */}
            <div className="lg:col-span-2">
              <Label htmlFor="to" className="text-brand-gray-700 font-medium mb-1.5 block">
                To
              </Label>
              <div className="relative">
                <Select value={toCity} onValueChange={setToCity}>
                  <SelectTrigger id="to" className="w-full h-12 bg-white border-brand-gray-200 pl-10">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {cities.map(city => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray-500">
                  <MapPin size={18} />
                </div>
              </div>
            </div>
            
            {/* Swap Button (Mobile Layout: Visible on small, hidden on md) */}
            <div className="flex md:hidden justify-center my-2">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-brand-gray-100 hover:bg-brand-gray-200"
                onClick={handleSwapCities}
              >
                <ArrowRight size={18} className="rotate-90" />
              </Button>
            </div>
            
            {/* Date Picker */}
            <div className="lg:col-span-2">
              <Label htmlFor="date" className="text-brand-gray-700 font-medium mb-1.5 block">
                Date of Journey
              </Label>
              <div className="relative">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="date"
                      className={cn(
                        "w-full h-12 justify-start bg-white border-brand-gray-200 pl-10 font-normal",
                        !date && "text-brand-gray-500"
                      )}
                    >
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 z-50 pointer-events-auto">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray-500">
                  <CalendarIcon size={18} />
                </div>
              </div>
            </div>
            
            {/* Passengers */}
            <div className="lg:col-span-1">
              <Label htmlFor="passengers" className="text-brand-gray-700 font-medium mb-1.5 block">
                Passengers
              </Label>
              <div className="relative">
                <Select value={passengers} onValueChange={setPassengers}>
                  <SelectTrigger id="passengers" className="w-full h-12 bg-white border-brand-gray-200 pl-10">
                    <SelectValue placeholder="Passengers" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray-500">
                  <User size={18} />
                </div>
              </div>
            </div>
            
            {/* Search Button */}
            <div className="lg:col-span-1 flex">
              <Button
                type="submit"
                className="w-full h-12 mt-auto bg-brand-red hover:bg-brand-darkRed transition-colors duration-300"
              >
                <Search size={18} className="mr-2" />
                Search
              </Button>
            </div>
          </div>
        </form>

        <div className="flex flex-wrap gap-3 mt-6">
          <div className="flex items-center px-3 py-1.5 rounded-full bg-brand-gray-100 text-brand-gray-700 text-sm">
            <Bus size={16} className="mr-1.5 text-brand-red" />
            <span>850+ Cities</span>
          </div>
          <div className="flex items-center px-3 py-1.5 rounded-full bg-brand-gray-100 text-brand-gray-700 text-sm">
            <Calendar size={16} className="mr-1.5 text-brand-red" />
            <span>Same Day Booking</span>
          </div>
          <div className="flex items-center px-3 py-1.5 rounded-full bg-brand-gray-100 text-brand-gray-700 text-sm">
            <User size={16} className="mr-1.5 text-brand-red" />
            <span>2M+ Happy Travelers</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingForm;
