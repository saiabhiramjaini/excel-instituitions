'use client'

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const achievements = [
  { name: "Rahul Sharma", accomplishment: "IIT Hyderabad - Computer Science" },
  { name: "Priya Patel", accomplishment: "NEET All India Rank 156" },
  { name: "Amit Kumar", accomplishment: "9.8 CGPA in SSC Board Exams" },
];

export const Achievements = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{achievement.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{achievement.accomplishment}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

