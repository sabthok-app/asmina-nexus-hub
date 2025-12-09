import { CompanyLayout } from "@/components/layout/CompanyLayout";
import { LekaliChuloFooter } from "@/components/layout/LekaliChuloFooter";
import { GalleryGrid } from "@/components/shared/GalleryGrid";

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

const galleryImages = [
  { src: restaurantInterior, alt: "Restaurant Interior", category: "Interior" },
  { src: nepaliFood, alt: "Thakali Set Meal", category: "Food" },
  { src: restaurantInterior, alt: "Dining Area", category: "Interior" },
  { src: nepaliFood, alt: "Traditional Dishes", category: "Food" },
  { src: restaurantInterior, alt: "Ambiance", category: "Interior" },
  { src: nepaliFood, alt: "Nepali Cuisine", category: "Food" },
];

const categories = ["Interior", "Food", "Events"];

export default function LekaliChuloGallery() {
  return (
    <CompanyLayout
      companyName="Lekali Chulo"
      basePath="/lekalichulo"
      navigation={navigation}
      companyFooter={<LekaliChuloFooter />}
    >
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Gallery
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Our Visual Story
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a peek at our restaurant, delicious food, and memorable moments.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <GalleryGrid images={galleryImages} categories={categories} />
        </div>
      </section>
    </CompanyLayout>
  );
}
