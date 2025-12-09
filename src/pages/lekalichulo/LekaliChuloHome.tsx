import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CompanyLayout } from "@/components/layout/CompanyLayout";
import { LekaliChuloFooter } from "@/components/layout/LekaliChuloFooter";
import { PhotoSlider } from "@/components/shared/PhotoSlider";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight, UtensilsCrossed, Clock, MapPin, Star } from "lucide-react";

import restaurantInterior from "@/assets/restaurant-interior.jpg";
import nepaliFood from "@/assets/nepali-food.jpg";

const navigation = [
  { name: "Home", href: "/lekalichulo" },
  { name: "Menu", href: "/lekalichulo/menu" },
  { name: "Gallery", href: "/lekalichulo/gallery" },
  { name: "Location", href: "/lekalichulo/location" },
  { name: "Booking", href: "/lekalichulo/booking" },
  { name: "Contact", href: "/lekalichulo/contact" },
];

const heroSlides = [
  {
    image: restaurantInterior,
    title: "Authentic Nepali Flavors",
    description: "Experience traditional cuisine in a warm, welcoming atmosphere.",
  },
  {
    image: nepaliFood,
    title: "Traditional Thakali Cuisine",
    description: "Savor the rich tastes of Nepal's most beloved dishes.",
  },
];

const features = [
  {
    icon: UtensilsCrossed,
    title: "Traditional Recipes",
    description: "Authentic dishes passed down through generations",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Fresh, locally-sourced ingredients every day",
  },
  {
    icon: Clock,
    title: "Open Daily",
    description: "Serving from 10 AM to 10 PM",
  },
  {
    icon: MapPin,
    title: "Central Location",
    description: "Easy to find in the heart of Kathmandu",
  },
];

const specialties = [
  { name: "Thakali Set", price: "Rs. 450", description: "Complete traditional meal" },
  { name: "Dal Bhat", price: "Rs. 350", description: "Classic Nepali staple" },
  { name: "Momo", price: "Rs. 200", description: "Steamed dumplings" },
  { name: "Sekuwa", price: "Rs. 400", description: "Grilled meat specialty" },
];

export default function LekaliChuloHome() {
  return (
    <CompanyLayout
      companyName="Lekali Chulo"
      basePath="/lekalichulo"
      navigation={navigation}
      companyFooter={<LekaliChuloFooter />}
    >
      {/* Hero Section */}
      <section className="pt-4">
        <PhotoSlider slides={heroSlides} className="h-[60vh] md:h-[70vh]" />
        <div className="container mx-auto px-4 -mt-24 relative z-10">
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto animate-fade-up">
            <div className="text-center">
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                Authentic Nepali Restaurant
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
                Lekali Chulo
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Discover the authentic flavors of Nepal at Lekali Chulo. Our traditional
                recipes and warm hospitality create an unforgettable dining experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/lekalichulo/menu">
                    View Menu
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/lekalichulo/booking">Book a Table</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-secondary rounded-xl animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img
                src={restaurantInterior}
                alt="Lekali Chulo Interior"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="animate-slide-in-right">
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                A Taste of Nepal's Heritage
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Established as part of the Asmina Group, Lekali Chulo brings the authentic 
                flavors of Nepal to your table. Our name, meaning "Mountain Stove," reflects 
                our commitment to traditional cooking methods and recipes.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our chefs specialize in Thakali cuisine, known for its balanced flavors 
                and nutritious ingredients. Every dish is prepared with love and served 
                with genuine Nepali hospitality.
              </p>
              <Button variant="default" asChild>
                <Link to="/lekalichulo/menu">Explore Our Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Popular Dishes"
            subtitle="Discover our most beloved specialties"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-elegant border border-border hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 mb-4 flex items-center justify-center">
                  <UtensilsCrossed className="w-12 h-12 text-amber-600" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                <p className="text-accent font-bold">{item.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="hero" size="lg" asChild>
              <Link to="/lekalichulo/menu">
                View Full Menu
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-800 text-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Reserve Your Table Today
          </h2>
          <p className="text-amber-100 text-lg max-w-2xl mx-auto mb-8">
            Whether it's a family dinner, special celebration, or casual meal with friends,
            we're ready to serve you an authentic Nepali experience.
          </p>
          <Button
            size="xl"
            className="bg-amber-950 text-amber-50 hover:bg-amber-900"
            asChild
          >
            <Link to="/lekalichulo/booking">
              Book Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </CompanyLayout>
  );
}
