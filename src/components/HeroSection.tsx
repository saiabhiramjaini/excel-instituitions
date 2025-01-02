'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png'

export const HeroSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-5 gap-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
       
      >
        <Image src={logo} alt="Excel Institutions Logo" width={200} height={200} className="rounded-full shadow-lg bg-white" />
      </motion.div>
      <motion.h1
        className="text-4xl md:text-6xl text-center font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        EXCEL TUITIONS
      </motion.h1>
      <motion.p
        className='text-center max-w-2xl'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Empowering the next gen. Pioneering the journey towards excellence and
        academic dominance.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Button size="lg">
          Know more
        </Button>
      </motion.div>
    </div>
  );
};

