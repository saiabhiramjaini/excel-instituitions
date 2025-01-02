'use client'

import { motion } from 'framer-motion';
import Image from "next/image";

const facultyMembers = [
  {
    name: "Md. Mohiddin",
    role: "Physics Expert",
    image: "/placeholder.svg",
  },
  {
    name: "",
    role: "Biology Specialist",
    image: "/placeholder.svg",
  },
  {
    name: "",
    role: "Mathematics Pro",
    image: "/placeholder.svg",
  },
  {
    name: "",
    role: "Chemistry Guru",
    image: "/placeholder.svg",
  },
];

export const Faculty = () => {
  return (
    <section id="faculty" className="py-2">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Faculty
        </motion.h2>
        <motion.p
          className="text-xl max-w-3xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Meet our team of exceptional educators, who are the pillars of the
          academic system at Excel Institutions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 border rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 grayscale">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl  mb-2 text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

