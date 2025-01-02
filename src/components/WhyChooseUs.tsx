'use client'

import { motion } from 'framer-motion';
import { Lightbulb, Users, Telescope, Trophy, Film, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: "Practical Learning",
    description: "Hands-on experiments and practical learning approaches",
  },
  {
    icon: Users,
    title: "All-Round Growth",
    description: "Focus on academic, extracurricular, and personal development",
  },
  {
    icon: Telescope,
    title: "Industrial Expertise",
    description: "Guest lectures by industrial faculties",
  },
  {
    icon: Trophy,
    title: "Frequent Competitions",
    description: "Focus on both study and sports competitions",
  },
  {
    icon: Film,
    title: "Interactive Resources",
    description: "Animated videos and English language activities",
  },
  {
    icon: TrendingUp,
    title: "Results-Oriented",
    description: "Guaranteed improvements and rank assurances",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Excel Institutions?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

