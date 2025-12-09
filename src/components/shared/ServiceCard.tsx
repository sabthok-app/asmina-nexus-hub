import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image?: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  image,
  className,
}: ServiceCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group relative bg-card rounded-xl overflow-hidden shadow-elegant hover-lift border border-border",
        className
      )}
    >
      {image && (
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
