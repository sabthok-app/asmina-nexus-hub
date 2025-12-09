import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GalleryGrid } from "@/components/shared/GalleryGrid";

import heroCorporate from "@/assets/hero-corporate.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import nepaliFood from "@/assets/nepali-food.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import vehicleRental from "@/assets/vehicle-rental.jpg";

const galleryImages = [
  { src: heroCorporate, alt: "Asmina Group Office", category: "Company" },
  { src: restaurantInterior, alt: "Lekali Chulo Restaurant Interior", category: "Restaurant" },
  { src: nepaliFood, alt: "Traditional Nepali Cuisine", category: "Restaurant" },
  { src: teamMeeting, alt: "Team Meeting", category: "Company" },
  { src: vehicleRental, alt: "Tourist Vehicle", category: "Services" },
  { src: restaurantInterior, alt: "Dining Experience", category: "Restaurant" },
  { src: heroCorporate, alt: "Corporate Building", category: "Company" },
  { src: nepaliFood, alt: "Thakali Set Meal", category: "Restaurant" },
];

const categories = ["Company", "Restaurant", "Services"];

export default function GalleryPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Our Gallery
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
              Visual Stories
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our collection of photos showcasing our services, events, and
              memorable moments across Asmina Group.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <GalleryGrid images={galleryImages} categories={categories} />
        </div>
      </section>
    </MainLayout>
  );
}
