import { MainLayout } from "@/components/layout/MainLayout";
import { ContactForm } from "@/components/shared/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Address",
    details: ["Kathmandu, Nepal", "Main Office Location"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+977 123 456 7890", "+977 987 654 3210"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@asminagroup.com", "support@asminagroup.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
];

export default function ContactPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Get In Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg">
              Have questions or need assistance? We'd love to hear from you.
              Reach out and our team will get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-elegant animate-slide-in-left">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="animate-slide-in-right">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-secondary rounded-xl"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden h-64 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.63145146057!2d85.25564780000001!3d27.708956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Asmina Group Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
