import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';

const awards = [
  {
    icon: FaTrophy,
    title: "Best Barbershop",
    description: "Voted #1 in London for exceptional service and style",
    year: "2023",
  },
  {
    icon: FaMedal,
    title: "Master Barber of the Year",
    description: "Awarded to our lead stylist, James Thompson",
    year: "2022",
  },
  {
    icon: FaAward,
    title: "Innovation in Grooming",
    description: "Recognized for our unique blend of traditional and modern techniques",
    year: "2021",
  },
  {
    icon: FaCertificate,
    title: "Sustainability Champion",
    description: "Certified for our eco-friendly practices and products",
    year: "2020",
  },
];

const AwardsRecognition: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-primary text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Awards & Recognition
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <award.icon className="text-4xl text-accent mr-4" />
                <h3 className="text-2xl font-bold">{award.title}</h3>
              </div>
              <p className="text-lg mb-4">{award.description}</p>
              <span className="text-accent font-bold">{award.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;
