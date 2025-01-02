'use client'

import { motion } from 'framer-motion';
import { Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <motion.div
            className="w-full md:w-1/3 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/exceltuitions_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@elearningtogether796/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Excel Institutions. All rights reserved.
            </p>
          </motion.div>
          
        </div>
      </div>
    </footer>
  );
}

