import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const achievements = [
  { name: "Rahul Sharma", accomplishment: "IIT Hyderabad - Computer Science" },
  { name: "Priya Patel", accomplishment: "NEET All India Rank 156" },
  { name: "Amit Kumar", accomplishment: "9.8 CGPA in SSC Board Exams" },
];

export default function Achievements() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <div key={index}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{achievement.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{achievement.accomplishment}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
