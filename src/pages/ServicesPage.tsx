import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Utensils, Car, Plane, Bike, Building, Package } from "lucide-react";

import nepaliFood from "@/assets/nepali-food.jpg";
import vehicleRental from "@/assets/vehicle-rental.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";

const services = [
  {
    title: "Lekali Chulo Restaurant",
    description: "Experience authentic Nepali cuisine including traditional Thakali set meals, local delicacies, and specialty dishes prepared by expert chefs.",
    icon: Utensils,
    href: "/lekalichulo",
    image: nepaliFood,
  },
  {
    title: "Vehicle Rental",
    description: "Premium tourist vehicles including Toyota HiAce, Scorpio, and more. Perfect for group travel, airport transfers, and sightseeing tours.",
    icon: Car,
    href: "/services/rental",
    image: vehicleRental,
  },
  {
    title: "Travel & Tourism",
    description: "Expert-guided tours across Nepal. From Himalayan treks to cultural heritage sites, we create unforgettable travel experiences.",
    icon: Plane,
    href: "/services/travel",
    image: teamMeeting,
  },
  {
    title: "Bicycle & Motorbike Rental",
    description: "Explore Nepal on two wheels. Well-maintained bicycles and motorbikes available for daily, weekly, or monthly rentals.",
    icon: Bike,
    href: "/services",
  },
  {
    title: "Hotel & Hostel Services",
    description: "Comfortable accommodation options ranging from budget hostels to premium hotels. Perfect for solo travelers and groups alike.",
    icon: Building,
    href: "/services",
  },
  {
    title: "Moving & Cargo",
    description: "Professional moving services for residential and commercial relocations. Safe handling and timely delivery guaranteed.",
    icon: Package,
    href: "/services",
  },
];

export default function ServicesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              What We Offer
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
              Our Services
            </h1>
            <p className="text-muted-foreground text-lg">
              Comprehensive solutions for hospitality, transportation, and tourism needs.
              Discover how we can serve you.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Us"
            subtitle="What sets Asmina Group apart from the rest"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assurance",
                description: "Every service we provide meets international standards while preserving authentic Nepali charm.",
              },
              {
                title: "Experienced Team",
                description: "Our multilingual staff brings years of expertise in hospitality and customer service.",
              },
              {
                title: "Customer First",
                description: "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-elegant text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-accent mx-auto mb-6 flex items-center justify-center text-accent-foreground font-display font-bold text-2xl">
                  {index + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
