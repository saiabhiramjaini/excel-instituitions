import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const courses = [
  {
    title: 'Foundation Program (7th to 10th)',
    description: 'Offline classes with an IIT foundation.',
    details: 'Comprehensive preparation for SSC/CBSE/ICSE boards with a focus on building a strong foundation for competitive exams.'
  },
  {
    title: 'Intermediate Programs (MPC & BiPC)',
    description: 'Long-term NEET and JEE preparation with guaranteed results.',
    details: 'Intensive coaching for NEET, EAMCET, and JEE Mains with personalized attention and regular assessments.'
  }
]

export const Courses = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">Our Courses</h2>
        <div className="grid grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{course.details}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Class Schedules</h3>
          <p>Morning: 5:00 AM - 7:00 AM</p>
          <p>Evening: 6:00 PM - 8:00 PM</p>
        </div>
      </div>
    </section>
  )
}

