import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaSearch, FaStar } from 'react-icons/fa';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Premium Beard Oil',
    description: 'Nourish and soften your beard with our specially formulated oil blend.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1655241406135-5be0dc2a65eb?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Luxury Shaving Cream',
    description: 'Experience the smoothest shave with our rich, creamy lather.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1621607505833-616916c46a25?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Precision Hair Trimmer',
    description: 'Achieve salon-quality results at home with our professional-grade trimmer.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Styling Powder and Wax',
    description: 'Get the perfect hold and shine for any hairstyle with our versatile pomade.',
    price: 17.99,
    image: 'https://images.pexels.com/photos/7518760/pexels-photo-7518760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
  },
];

const ProductShowcase: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
          Premium Grooming Products
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden group">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaSearch className="text-white text-3xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-accent">${product.price.toFixed(2)}</span>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span>{product.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex mb-6">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-1/2 h-64 object-cover rounded-lg mr-6" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-primary">{selectedProduct.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                  <div className="flex items-center mb-4">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span>{selectedProduct.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-3xl font-bold text-accent mb-4">${selectedProduct.price.toFixed(2)}</p>
                  <button className="bg-accent text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-colors duration-300 flex items-center">
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
