import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Elegant Barbershop</h3>
            <p>123 Main Street, Croxley Green</p>
            <p>London, UK</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Hours</h4>
            <p>Monday - Friday: 9am - 8pm</p>
            <p>Saturday: 10am - 6pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white border-opacity-20 text-center">
          <p>&copy; 2024 Elegant Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
