import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCut, FaUserTie, FaHotTub, FaWineGlassAlt } from 'react-icons/fa';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  price: string;
  duration: string;
}

const services: Service[] = [
  {
    icon: FaCut,
    title: 'Signature Haircut',
    description: 'Precision cut and style, tailored to enhance your unique features and personal style.',
    price: '£45',
    duration: '45 mins',
  },
  {
    icon: FaUserTie,
    title: 'Luxury Beard Grooming',
    description: 'Expert shaping and conditioning treatment for a distinguished, polished look.',
    price: '£35',
    duration: '30 mins',
  },
  {
    icon: FaHotTub,
    title: 'Royal Hot Towel Shave',
    description: 'Indulgent traditional wet shave with premium products for the smoothest finish.',
    price: '£50',
    duration: '45 mins',
  },
  {
    icon: FaWineGlassAlt,
    title: 'Gentleman\'s Package',
    description: 'Complete grooming experience including haircut, beard trim, and complimentary beverage.',
    price: '£85',
    duration: '90 mins',
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Premium Services
        </motion.h2>
        <motion.p
          className="text-xl text-center mb-12 text-secondary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Indulge in luxury grooming experiences at Croxley Green's finest barbershop
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="p-6">
                <service.icon className="text-5xl text-accent mb-4 mx-auto" />
                <h3 className="text-2xl font-heading font-bold mb-2 text-primary">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <motion.div
                  className="flex justify-between items-center text-lg font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-accent">{service.price}</span>
                  <span className="text-secondary">{service.duration}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-12"
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

export default Services;
