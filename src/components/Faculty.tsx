import Image from "next/image";

const facultyMembers = [
  {
    name: "DR. RAVI KUMAR",
    role: "Physics Expert",
    image: "/placeholder.svg",
  },
  {
    name: "MRS. MEENA AGARWAL",
    role: "Biology Specialist",
    image: "/placeholder.svg",
  },
  {
    name: "MR. PRAKASH MALHOTRA",
    role: "Mathematics Pro",
    image: "/placeholder.svg",
  },
  {
    name: "MRS. LATHA NAIDU",
    role: "Chemistry Guru",
    image: "/placeholder.svg",
  },
];

export default function Faculty() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl  mb-4">Our Faculty</h2>
          <p className="text-xl max-w-3xl mx-auto mb-16">
            Meet our team of exceptional educators, who are the pillars of the
            academic system at Excel Institutions.
          </p>

          <div className="grid grid-cols-2 gap-8">
            {facultyMembers.map((member, index) => (
              <div
                key={index}
                className="bg-transparent border  rounded-lg p-8"
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
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
