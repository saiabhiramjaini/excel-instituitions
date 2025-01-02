'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Navbar } from "@/components/Navbar"
import { AboutSection } from "@/components/AboutSection"
import { Achievements } from "@/components/Achievements"
import { ContactUs } from "@/components/ContactUs"
import { Courses } from "@/components/Courses"
import { Faculty } from "@/components/Faculty"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { Testimonials } from "@/components/Testimonials"
import { WhyChooseUs } from "@/components/WhyChooseUs"

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection>
          <WhyChooseUs />
        </AnimatedSection>
        <AnimatedSection>
          <Courses />
        </AnimatedSection>
        <AnimatedSection>
          <Achievements />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <Faculty />
        </AnimatedSection>
        <AnimatedSection>
          <ContactUs />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}

