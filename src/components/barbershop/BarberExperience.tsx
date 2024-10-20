import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCheck, FaCut, FaSprayCan, FaMagic } from 'react-icons/fa';

const steps = [
  { icon: FaUserCheck, title: 'Consultation', description: 'Personalized style assessment with our expert barbers' },
  { icon: FaCut, title: 'Precision Cut', description: 'Skillful cutting techniques tailored to your unique features' },
  { icon: FaSprayCan, title: 'Refined Grooming', description: 'Premium products for a polished, distinguished look' },
  { icon: FaMagic, title: 'Final Flourish', description: 'Meticulous styling to perfect your signature look' },
];

const BarberExperience: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          The Elegant Barber Experience
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mb-6">
                <step.icon className="text-4xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-lg text-gray-300">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block w-full h-1 bg-accent mt-8 relative">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="bg-accent text-primary px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-90 transition-smooth">
            Book Your Experience
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BarberExperience;
