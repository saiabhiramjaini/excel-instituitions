"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ContactUs = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="h-full shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Sneha Residency, Shalivahana Nagar, Dilsukhnagar, Hyderabad-36
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="space-y-2">
                      <p className="text-gray-700">+91 9030470877</p>
                      <p className="text-gray-700">+91 7997866459</p>
                      <p className="text-gray-700">+91 9490943660</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Instagram className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <a href="https://www.instagram.com/exceltuitions_official/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Instagram
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Youtube className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <a href="https://www.youtube.com/@elearningtogether796/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      YouTube
                    </a>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <Button 
                    onClick={() => window.open('https://wa.me/919030470877', '_blank')}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Schedule a Visit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-full h-[450px]"
          >
            <Card className="h-full shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.7861858500455!2d78.51959497536627!3d17.374018603189725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98f85932529f%3A0xaf38fb68815083fa!2sExcel%20Institutions%20-%20NEET%20%26%20IIT%20Academy!5e0!3m2!1sen!2sin!4v1733688729384!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

