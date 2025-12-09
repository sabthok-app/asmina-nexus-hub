import { useState } from "react";
import { CompanyLayout } from "@/components/layout/CompanyLayout";
import { LekaliChuloFooter } from "@/components/layout/LekaliChuloFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Calendar, Users, Clock, PartyPopper, Loader2 } from "lucide-react";

const navigation = [
  { name: "Home", href: "/lekalichulo" },
  { name: "Menu", href: "/lekalichulo/menu" },
  { name: "Gallery", href: "/lekalichulo/gallery" },
  { name: "Location", href: "/lekalichulo/location" },
  { name: "Booking", href: "/lekalichulo/booking" },
  { name: "Contact", href: "/lekalichulo/contact" },
];

const bookingTypes = [
  {
    icon: Users,
    title: "Table Reservation",
    description: "Book a table for your group",
  },
  {
    icon: PartyPopper,
    title: "Party Booking",
    description: "Celebrate special occasions",
  },
  {
    icon: Calendar,
    title: "Event Catering",
    description: "Let us cater your event",
  },
];

export default function LekaliChuloBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Reservation request sent! We'll confirm shortly.");
    setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "", occasion: "", message: "" });
    setIsSubmitting(false);
  };

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
            Reservations
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Book a Table
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reserve your spot for an unforgettable dining experience.
          </p>
        </div>
      </section>

      {/* Booking Types */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {bookingTypes.map((type, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-elegant"
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {type.title}
                </h3>
                <p className="text-muted-foreground text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-elegant">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              Make a Reservation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+977 123 456 7890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Guests</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    placeholder="2"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="occasion">Occasion (Optional)</Label>
                <Input
                  id="occasion"
                  placeholder="Birthday, Anniversary, etc."
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Special Requests</Label>
                <Textarea
                  id="message"
                  placeholder="Any dietary requirements or special requests..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    Reserve Table
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </CompanyLayout>
  );
}
