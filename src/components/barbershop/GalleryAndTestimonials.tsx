import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface GalleryItem {
  before: string;
  after: string;
  description: string;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    before: 'https://images.pexels.com/photos/2040189/pexels-photo-2040189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    after: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Classic Gentleman\'s Cut',
  },
  {
    before: 'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    after: 'https://images.pexels.com/photos/2521978/pexels-photo-2521978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Modern Fade with Beard Trim',
  },
  {
    before: 'https://images.unsplash.com/photo-1590540179852-2110a54f813a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    after: 'https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Textured Crop Transformation',
  },
];

const testimonials: Testimonial[] = [
  {
    text: "The attention to detail and skill of the barbers here is unmatched. I've never felt more confident with my appearance.",
    author: "James Wilson",
    role: "Marketing Executive",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "From the moment I walked in, I knew I was in for a premium experience. The result exceeded all my expectations.",
    author: "Michael Thompson",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "The barbers here don't just cut hair, they craft an experience. It's more than a haircut, it's a transformation.",
    author: "Robert Chen",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];

const GalleryAndTestimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Transformations & Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={item.before} alt="Before" className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <img src={item.after} alt="After" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-lg font-bold">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-secondary text-white p-12 rounded-lg relative overflow-hidden shadow-xl">
          <FaQuoteLeft className="text-8xl text-accent opacity-10 absolute top-4 left-4" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-2xl mb-8 italic">{testimonials[currentTestimonial].text}</p>
                <div className="flex items-center justify-center">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].author} 
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-accent"
                  />
                  <div>
                    <p className="font-bold text-xl">{testimonials[currentTestimonial].author}</p>
                    <p className="text-accent">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-accent text-primary p-3 rounded-full hover:bg-opacity-80 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-accent text-primary p-3 rounded-full hover:bg-opacity-80 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryAndTestimonials;
