import {
  Lightbulb,
  Users,
  Telescope,
  Trophy,
  Film,
  TrendingUp,
} from "lucide-react";

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
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl text-center mb-12">
        Why Choose Excel Institutions?
      </h2>
      <div className="grid grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
