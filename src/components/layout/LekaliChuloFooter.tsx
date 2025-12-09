import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

const footerLinks = [
  { name: "Menu", href: "/lekalichulo/menu" },
  { name: "Gallery", href: "/lekalichulo/gallery" },
  { name: "Book a Table", href: "/lekalichulo/booking" },
  { name: "Contact", href: "/lekalichulo/contact" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "TripAdvisor", icon: MapPin, href: "https://tripadvisor.com" },
];

export function LekaliChuloFooter() {
  return (
    <div className="bg-gradient-to-b from-amber-900 to-amber-950 text-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/lekalichulo" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center font-display font-bold text-2xl text-amber-950">
                L
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight">
                  Lekali Chulo
                </span>
                <span className="text-xs text-amber-200/70 tracking-wider">
                  Authentic Nepali Cuisine
                </span>
              </div>
            </Link>
            <p className="text-amber-200/80 text-sm leading-relaxed">
              Experience the authentic taste of Nepal with our traditional recipes 
              passed down through generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-amber-200/70 hover:text-amber-50 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span className="text-amber-200/70">Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+9771234567890" className="text-amber-200/70 hover:text-amber-50">
                  +977 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:lekalichulo@asminagroup.com" className="text-amber-200/70 hover:text-amber-50">
                  lekalichulo@asminagroup.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Clock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span className="text-amber-200/70">Open Daily: 10AM - 10PM</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
