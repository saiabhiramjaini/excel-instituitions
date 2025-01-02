'use client'

import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sanjay Gupta",
    role: "Parent",
    text: "Excel Institutions has transformed my child's academic performance. The faculty's dedication is commendable.",
  },
  {
    name: "Ananya Reddy",
    role: "Student",
    text: "The practical approach to learning at Excel helped me understand complex concepts easily. I'm now confident about cracking NEET.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Students and Parents Say
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <p className="italic mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">
                    {testimonial.name} - {testimonial.role}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

