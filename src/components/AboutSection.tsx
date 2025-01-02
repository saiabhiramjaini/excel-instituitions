'use client'

import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-5xl font-semibold text-center mb-12 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Excel Tuitions
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-16">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-lg sm:text-xl leading-relaxed">
              Excel Institutions is committed to nurturing academic excellence in
              students from classes 7th to Intermediate. We specialize in NEET,
              EAMCET, and JEE Mains preparation, with a strong focus on
              SSC/CBSE/ICSE boards.
            </p>
          </motion.div>
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-lg sm:text-xl leading-relaxed">
              Our goal is to provide comprehensive education that prepares students
              for success in their academic pursuits and beyond, fostering a love
              for learning and personal growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

