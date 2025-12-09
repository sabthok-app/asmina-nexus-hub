import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Target, Eye, Award, Calendar } from "lucide-react";

import teamMeeting from "@/assets/team-meeting.jpg";
import heroCorporate from "@/assets/hero-corporate.jpg";

const milestones = [
  { year: "2015", title: "Company Founded", description: "Asmina Group established in Kathmandu, Nepal" },
  { year: "2016", title: "Lekali Chulo Opens", description: "Launched our flagship restaurant" },
  { year: "2018", title: "Fleet Expansion", description: "Added tourist vehicles to our service portfolio" },
  { year: "2020", title: "Tourism Services", description: "Expanded into travel and tourism guides" },
  { year: "2023", title: "Moving Services", description: "Added professional moving and cargo services" },
  { year: "2024", title: "Continued Growth", description: "Serving 5000+ happy customers across Nepal" },
];

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
              Our Story of Excellence
            </h1>
            <p className="text-muted-foreground text-lg">
              Since 2015, Asmina Group has been dedicated to providing exceptional services
              across hospitality, transportation, and tourism in Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img
                src={heroCorporate}
                alt="Asmina Group Office"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="animate-slide-in-right">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                A Trusted Name in Nepal
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Asmina Group is a diversified company headquartered in Kathmandu, Nepal. 
                Founded in 2015, we have grown from a small family business into a trusted 
                multi-service organization serving thousands of customers annually.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our portfolio includes Lekali Chulo restaurant, vehicle rental services, 
                travel and tourism guides, moving services, and hospitality solutions. 
                We pride ourselves on delivering authentic Nepali experiences with 
                international standards of quality and service.
              </p>
              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold">Since 2015</div>
                  <div className="text-muted-foreground text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-elegant animate-fade-up">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional, customer-focused services that showcase the best 
                of Nepali hospitality while maintaining the highest standards of quality, 
                reliability, and value. We strive to be the first choice for locals and 
                tourists seeking authentic experiences in Nepal.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-elegant animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become Nepal's leading multi-service company, recognized for excellence 
                in hospitality, transportation, and tourism. We envision a future where 
                every interaction with Asmina Group creates lasting memories and exceeds 
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Leadership"
            subtitle="Meet the dedicated team driving Asmina Group's success"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-up">
              <img
                src={teamMeeting}
                alt="Management Team"
                className="w-full aspect-video object-cover rounded-xl mb-6"
              />
              <h3 className="font-display text-xl font-bold text-foreground">Executive Team</h3>
              <p className="text-muted-foreground text-sm">Strategic Leadership</p>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-full aspect-video bg-gradient-primary rounded-xl mb-6 flex items-center justify-center">
                <Award className="w-16 h-16 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Core Values</h3>
              <p className="text-muted-foreground text-sm">Excellence, Integrity, Innovation</p>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <img
                src={heroCorporate}
                alt="Our Headquarters"
                className="w-full aspect-video object-cover rounded-xl mb-6"
              />
              <h3 className="font-display text-xl font-bold text-foreground">Our Headquarters</h3>
              <p className="text-muted-foreground text-sm">Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gradient-footer text-primary-foreground">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones that shaped Asmina Group"
            className="text-primary-foreground [&_p]:text-primary-foreground/70 [&_div]:bg-accent"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-accent font-display text-2xl font-bold mb-2">
                  {milestone.year}
                </div>
                <h4 className="font-semibold text-lg mb-2">{milestone.title}</h4>
                <p className="text-primary-foreground/70 text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
