import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from 'react-icons/fa';

interface Barber {
  name: string;
  specialty: string;
  experience: string;
  image: string;
  availability: string[];
}

const barbers: Barber[] = [
  {
    name: "James Thompson",
    specialty: "Classic Cuts & Beard Styling",
    experience: "15 years",
    image: "https://images.unsplash.com/photo-1582893561942-d61adcb2e534?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    availability: ["Mon", "Wed", "Fri"]
  },
  {
    name: "Sophia Rodriguez",
    specialty: "Modern Styles & Color Treatments",
    experience: "10 years",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    availability: ["Tue", "Thu", "Sat"]
  },
  {
    name: "Michael Chen",
    specialty: "Precision Fades & Asian Hair Techniques",
    experience: "8 years",
    image: "https://images.unsplash.com/photo-1592647420148-bfcc177e2117?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    availability: ["Wed", "Fri", "Sun"]
  },
  {
    name: "Emily Watson",
    specialty: "Vintage Styles & Hot Towel Shaves",
    experience: "12 years",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    availability: ["Mon", "Thu", "Sat"]
  },
];

const MeetOurBarbers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextBarber();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextBarber = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % barbers.length);
  };

  const prevBarber = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + barbers.length) % barbers.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction < 0 ? 45 : -45,
      transition: {
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-20 bg-secondary text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Meet Our Expert Barbers
        </motion.h2>
        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <div className="flex flex-col md:flex-row items-center justify-center">
                <img 
                  src={barbers[currentIndex].image} 
                  alt={barbers[currentIndex].name} 
                  className="w-64 h-64 object-cover rounded-full mb-8 md:mb-0 md:mr-12 shadow-lg"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-heading font-bold mb-2">{barbers[currentIndex].name}</h3>
                  <p className="text-xl mb-4">{barbers[currentIndex].specialty}</p>
                  <p className="mb-4">Experience: {barbers[currentIndex].experience}</p>
                  <div className="flex items-center justify-center md:justify-start mb-6">
                    <FaCalendarAlt className="mr-2" />
                    <p>Available: {barbers[currentIndex].availability.join(", ")}</p>
                  </div>
                  <button className="bg-accent text-primary px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-smooth">
                    Book with {barbers[currentIndex].name.split(" ")[0]}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button 
            onClick={prevBarber} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-accent text-primary p-2 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button 
            onClick={nextBarber} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-accent text-primary p-2 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {barbers.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-accent' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurBarbers;
