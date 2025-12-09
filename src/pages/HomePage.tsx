import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/MainLayout";
import { PhotoSlider } from "@/components/shared/PhotoSlider";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Utensils,
  Car,
  Plane,
  Bike,
  Building,
  Package,
  ArrowRight,
  Calendar,
  Users,
  Award,
  MapPin,
} from "lucide-react";

import heroCorporate from "@/assets/hero-corporate.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import nepaliFood from "@/assets/nepali-food.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import vehicleRental from "@/assets/vehicle-rental.jpg";

const heroSlides = [
  {
    image: heroCorporate,
    title: "Building Excellence Since 2015",
    description: "A trusted multi-service company dedicated to hospitality, transportation, and tourism.",
  },
  {
    image: restaurantInterior,
    title: "Authentic Nepali Hospitality",
    description: "Experience the warmth of Nepal through our world-class services.",
  },
  {
    image: teamMeeting,
    title: "Our Expert Team",
    description: "Dedicated professionals committed to delivering exceptional experiences.",
  },
];

const services = [
  {
    title: "Lekali Chulo",
    description: "Authentic Nepali restaurant serving traditional Thakali cuisine and local delicacies.",
    icon: Utensils,
    href: "/lekalichulo",
    image: nepaliFood,
  },
  {
    title: "Vehicle Rental",
    description: "Premium tourist vehicles including HiAce, Scorpio for comfortable travel across Nepal.",
    icon: Car,
    href: "/services/rental",
    image: vehicleRental,
  },
  {
    title: "Travel & Tourism",
    description: "Expert guided tours and travel packages to explore the beauty of Nepal.",
    icon: Plane,
    href: "/services/travel",
    image: teamMeeting,
  },
  {
    title: "Bicycle & Motorbike Rental",
    description: "Explore Nepal on two wheels with our well-maintained rental fleet.",
    icon: Bike,
    href: "/services",
  },
  {
    title: "Hotel & Hostel",
    description: "Comfortable accommodation options for travelers and tourists.",
    icon: Building,
    href: "/services",
  },
  {
    title: "Moving Services",
    description: "Professional moving and cargo services for hassle-free relocations.",
    icon: Package,
    href: "/services",
  },
];

const stats = [
  { icon: Calendar, value: "2015", label: "Established" },
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Award, value: "5000+", label: "Happy Customers" },
  { icon: MapPin, value: "10+", label: "Service Locations" },
];

const sisterCompanies = [
  {
    name: "Lekali Chulo",
    description: "Authentic Nepali Restaurant",
    href: "/lekalichulo",
    image: nepaliFood,
  },
  {
    name: "Travel & Tours",
    description: "Expert Tourism Guides",
    href: "/services/travel",
    image: teamMeeting,
  },
  {
    name: "Vehicle Rental",
    description: "Premium Transportation",
    href: "/services/rental",
    image: vehicleRental,
  },
];

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-20">
        <PhotoSlider slides={heroSlides} className="h-[70vh] md:h-[80vh]" />
        <div className="container mx-auto px-4 -mt-32 relative z-10">
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto animate-fade-up">
            <div className="text-center">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Welcome to
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-4">
                Asmina Group
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                A trusted multi-service company offering excellence in hospitality,
                transportation, and tourism services across Nepal since 2015.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="Discover our comprehensive range of services designed to meet all your needs"
          />
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

      {/* Sister Companies */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Companies"
            subtitle="Explore our family of businesses delivering excellence across multiple sectors"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sisterCompanies.map((company, index) => (
              <Link
                key={index}
                to={company.href}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="font-display text-2xl font-bold mb-1">
                    {company.name}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    {company.description}
                  </p>
                  <div className="flex items-center text-accent mt-3 font-medium text-sm group-hover:gap-2 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Experience Excellence?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Whether you're looking for authentic dining, reliable transportation, or unforgettable travel experiences, we're here to serve you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
