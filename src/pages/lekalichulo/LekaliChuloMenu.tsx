import { CompanyLayout } from "@/components/layout/CompanyLayout";
import { LekaliChuloFooter } from "@/components/layout/LekaliChuloFooter";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Flame, Leaf, Star } from "lucide-react";

const navigation = [
  { name: "Home", href: "/lekalichulo" },
  { name: "Menu", href: "/lekalichulo/menu" },
  { name: "Gallery", href: "/lekalichulo/gallery" },
  { name: "Location", href: "/lekalichulo/location" },
  { name: "Booking", href: "/lekalichulo/booking" },
  { name: "Contact", href: "/lekalichulo/contact" },
];

const menuCategories = [
  {
    name: "Thakali Specials",
    icon: Star,
    items: [
      { name: "Thakali Set (Veg)", price: "Rs. 400", description: "Complete vegetarian Thakali meal with rice, dal, 4 curries, pickle, and papad" },
      { name: "Thakali Set (Non-Veg)", price: "Rs. 500", description: "Full Thakali meal with chicken curry, rice, dal, vegetables, and sides" },
      { name: "Thakali Special Platter", price: "Rs. 650", description: "Premium platter with mutton curry, unlimited rice and dal" },
    ],
  },
  {
    name: "Main Course",
    icon: UtensilsCrossed,
    items: [
      { name: "Dal Bhat (Veg)", price: "Rs. 300", description: "Traditional rice with lentil soup and seasonal vegetables" },
      { name: "Dal Bhat (Chicken)", price: "Rs. 400", description: "Classic meal with chicken curry and sides" },
      { name: "Khasi Ko Masu", price: "Rs. 450", description: "Traditional goat meat curry, rich and flavorful" },
      { name: "Chicken Sekuwa", price: "Rs. 380", description: "Grilled marinated chicken, Nepali style" },
    ],
  },
  {
    name: "Momos & Snacks",
    icon: Flame,
    items: [
      { name: "Steam Momo (Chicken)", price: "Rs. 200", description: "10 pieces of steamed chicken dumplings" },
      { name: "Steam Momo (Buff)", price: "Rs. 180", description: "10 pieces of steamed buffalo meat dumplings" },
      { name: "Fried Momo", price: "Rs. 220", description: "Crispy fried dumplings with chutney" },
      { name: "Jhol Momo", price: "Rs. 250", description: "Momos in spicy soupy gravy" },
      { name: "Choila", price: "Rs. 300", description: "Spiced grilled meat, Newari specialty" },
    ],
  },
  {
    name: "Vegetarian",
    icon: Leaf,
    items: [
      { name: "Paneer Curry", price: "Rs. 280", description: "Cottage cheese in rich gravy" },
      { name: "Mixed Vegetable", price: "Rs. 200", description: "Seasonal vegetables stir-fried" },
      { name: "Alu Tama", price: "Rs. 180", description: "Potato and bamboo shoot curry" },
      { name: "Gundruk Ko Jhol", price: "Rs. 150", description: "Fermented leafy greens soup" },
    ],
  },
];

export default function LekaliChuloMenu() {
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
            Our Menu
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Authentic Nepali Cuisine
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our selection of traditional Nepali dishes, prepared with fresh 
            ingredients and time-honored recipes.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {menuCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {category.name}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-card rounded-xl p-6 shadow-elegant border border-border hover-lift animate-fade-up"
                    style={{ animationDelay: `${itemIndex * 0.05}s` }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {item.name}
                      </h3>
                      <span className="text-accent font-bold text-lg">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Special Offers"
            subtitle="Don't miss our daily specials and seasonal promotions"
          />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 text-amber-50">
              <h3 className="font-display text-2xl font-bold mb-2">Lunch Special</h3>
              <p className="text-amber-100 mb-4">20% off on Thakali Sets, 11 AM - 2 PM</p>
              <p className="text-3xl font-bold">20% OFF</p>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-display text-2xl font-bold mb-2">Family Pack</h3>
              <p className="text-primary-foreground/80 mb-4">Order for 4+, get dessert free</p>
              <p className="text-3xl font-bold">FREE DESSERT</p>
            </div>
            <div className="bg-gradient-to-br from-amber-700 to-amber-800 rounded-2xl p-8 text-amber-50">
              <h3 className="font-display text-2xl font-bold mb-2">Weekend Brunch</h3>
              <p className="text-amber-100 mb-4">Special brunch menu on Sat & Sun</p>
              <p className="text-3xl font-bold">9 AM - 12 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Ready to Dine With Us?
          </h2>
          <p className="text-muted-foreground mb-8">
            Reserve your table now for the best experience
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/lekalichulo/booking">Book a Table</Link>
          </Button>
        </div>
      </section>
    </CompanyLayout>
  );
}
