import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl text-center mb-8">
            What Our Students and Parents Say
          </h3>
          <div className="grid grid-cols-1 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <Card>
                  <CardContent className="pt-6">
                    <p className="italic mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold">
                      {testimonial.name} - {testimonial.role}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
