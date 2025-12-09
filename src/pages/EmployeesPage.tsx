import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { EmployeeCard } from "@/components/shared/EmployeeCard";

import employee1 from "@/assets/employee-1.jpg";
import employee2 from "@/assets/employee-2.jpg";
import employeeChef from "@/assets/employee-chef.jpg";
import employeeGuide from "@/assets/employee-guide.jpg";
import employeeMoving from "@/assets/employee-moving.jpg";

const employees = [
  {
    name: "Sudhansu Thapa",
    role: "Manager",
    image: employee1,
    skills: ["Management", "Customer Relations", "Operations"],
    languages: ["Nepali", "English", "Japanese"],
  },
  {
    name: "Sanj Khadwal",
    role: "Operations Coordinator",
    image: employee2,
    skills: ["Logistics", "Team Management", "Planning"],
    languages: ["Nepali", "English", "Hindi"],
  },
  {
    name: "Omkar S",
    role: "Head Chef - Lekali Chulo",
    image: employeeChef,
    skills: ["Nepali Cuisine", "Thakali Specialist", "Kitchen Management"],
    languages: ["Nepali", "Hindi"],
  },
  {
    name: "Omkar Vishma",
    role: "Tourist Guide",
    image: employeeGuide,
    skills: ["Tour Guiding", "Trekking", "Cultural Knowledge"],
    languages: ["Nepali", "English", "Chinese"],
  },
  {
    name: "Angesh Bhandari",
    role: "Moving & Cargo Specialist",
    image: employeeMoving,
    skills: ["Logistics", "Heavy Lifting", "Packing"],
    languages: ["Nepali", "Hindi"],
  },
];

export default function EmployeesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Meet Our Team
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
              Employee Credentials
            </h1>
            <p className="text-muted-foreground text-lg">
              Our dedicated professionals bring expertise, passion, and multilingual
              capabilities to serve you better.
            </p>
          </div>
        </div>
      </section>

      {/* Employee Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {employees.map((employee, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <EmployeeCard {...employee} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Join Our Team
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who share our passion for excellence.
            If you're interested in joining Asmina Group, reach out to us.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
