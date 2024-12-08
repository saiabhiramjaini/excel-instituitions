import { Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border border-t-2 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/exceltuitions_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@elearningtogether796/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Excel Institutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
