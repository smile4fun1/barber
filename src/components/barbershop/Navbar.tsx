import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaCut } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', target: 'hero' },
    { name: 'Services', target: 'services' },
    { name: 'Experience', target: 'barber-experience' },
    { name: 'Barbers', target: 'meet-our-barbers' },
    { name: 'Gallery', target: 'gallery' },
    { name: 'Products', target: 'products' },
    { name: 'Contact', target: 'contact' },
  ];

  const navVariants = {
    hidden: { y: '-100%' },
    visible: { y: 0 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate={isVisible || isMobile ? 'visible' : 'hidden'}
      variants={navVariants}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 bg-primary bg-opacity-95 text-white z-50 shadow-lg ${
        isMobile ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer flex items-center">
            <FaCut className="text-3xl text-accent mr-2" />
            <span className="font-bold text-xl">Elegant Barber</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.target}
                smooth={true}
                duration={500}
                className="hover:text-accent transition-colors cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-secondary"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.target}
                smooth={true}
                duration={500}
                className="block py-2 px-4 hover:bg-accent hover:text-primary transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
