import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 gap-8">
          <div>
            <div className="space-y-4">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Sneha Residency, Shalivahana Nagar, Dilsukhnagar, Hyderabad-36
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +91 9030470877, +91 7997866459, +91 9490943660
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                info@excelinstitutions.com
              </p>
            </div>
            <div className="mt-6 space-x-4">
              <a
                href="https://www.youtube.com/@elearningtogether796/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/exceltuitions_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Instagram
              </a>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.7861858500455!2d78.51959497536627!3d17.374018603189725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98f85932529f%3A0xaf38fb68815083fa!2sExcel%20Institutions%20-%20NEET%20%26%20IIT%20Academy!5e0!3m2!1sen!2sin!4v1733688729384!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
