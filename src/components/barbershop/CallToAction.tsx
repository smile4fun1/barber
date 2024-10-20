import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCut, FaCalendarAlt, FaGift } from 'react-icons/fa';

const CallToAction: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: FaCut, title: 'Book Now', content: 'Reserve your spot for a premium grooming experience.' },
    { icon: FaCalendarAlt, title: 'Join Waitlist', content: 'Get notified when a slot becomes available.' },
    { icon: FaGift, title: 'Gift Card', content: 'Give the gift of style to someone special.' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ready for a Transformation?
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                className={`flex items-center px-6 py-3 rounded-full mr-4 last:mr-0 ${
                  activeTab === index ? 'bg-accent text-primary' : 'bg-white bg-opacity-20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(index)}
              >
                <tab.icon className="mr-2" />
                {tab.title}
              </motion.button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 text-center"
            >
              <p className="text-xl mb-6">{tabs[activeTab].content}</p>
              <motion.button
                className="bg-accent text-primary px-8 py-3 rounded-full text-lg font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tabs[activeTab].title}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
