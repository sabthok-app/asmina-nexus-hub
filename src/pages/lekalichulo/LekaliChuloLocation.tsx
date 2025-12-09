import { CompanyLayout } from "@/components/layout/CompanyLayout";
import { LekaliChuloFooter } from "@/components/layout/LekaliChuloFooter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Car, Clock, Navigation } from "lucide-react";

const navigation = [
  { name: "Home", href: "/lekalichulo" },
  { name: "Menu", href: "/lekalichulo/menu" },
  { name: "Gallery", href: "/lekalichulo/gallery" },
  { name: "Location", href: "/lekalichulo/location" },
  { name: "Booking", href: "/lekalichulo/booking" },
  { name: "Contact", href: "/lekalichulo/contact" },
];

export default function LekaliChuloLocation() {
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
            Find Us
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Our Location
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conveniently located in the heart of Kathmandu, we're easy to find and reach.
          </p>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4554476674895!2d85.31424721506156!3d27.70169698279473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a74aa1f23%3A0x74ebef82ad0e5c15!2sThamel%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lekali Chulo Location"
              />
            </div>

            {/* Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                How to Reach Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Thamel, Kathmandu<br />
                      Nepal 44600
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Opening Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Sunday: 10:00 AM - 10:00 PM<br />
                      Kitchen closes at 9:30 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <Car className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Parking</h3>
                    <p className="text-muted-foreground">
                      Free parking available for customers<br />
                      Street parking also available nearby
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <Navigation className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Directions</h3>
                    <p className="text-muted-foreground">
                      Located in the Thamel tourist district<br />
                      5 minutes walk from Thamel Chowk
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <a
                    href="https://www.google.com/maps/dir//Thamel,+Kathmandu+44600,+Nepal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                    <Navigation className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CompanyLayout>
  );
}
