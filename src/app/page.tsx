import { AboutSection } from "@/components/AboutSection";
import Achievements from "@/components/Achievements";
import ContactUs from "@/components/ContactUs";
import { Courses } from "@/components/Courses";
import Faculty from "@/components/Faculty";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <WhyChooseUs/>
    <Courses/>
    <Achievements/>
    <Testimonials/>
    <Faculty/>
    <ContactUs/>
    <Footer/>
    </>
  );
}
