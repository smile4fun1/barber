import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Stylish barbershop interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-heading font-bold mb-4 text-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Elegant Barbershop
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting Confidence, One Cut at a Time
        </motion.p>
        <motion.button
          className="bg-accent text-primary px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-90 transition-smooth"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Book Now
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
