import { cn } from "@/lib/utils";

interface EmployeeCardProps {
  name: string;
  role: string;
  image: string;
  skills?: string[];
  languages?: string[];
  className?: string;
}

export function EmployeeCard({
  name,
  role,
  image,
  skills = [],
  languages = [],
  className,
}: EmployeeCardProps) {
  return (
    <div
      className={cn(
        "group bg-card rounded-xl overflow-hidden shadow-elegant hover-lift border border-border",
        className
      )}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
          {name}
        </h3>
        <p className="text-primary text-sm font-medium mb-4">{role}</p>
        
        {skills.length > 0 && (
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-2">Skills</p>
            <div className="flex flex-wrap gap-1">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {languages.length > 0 && (
          <div>
            <p className="text-xs text-muted-foreground mb-2">Languages</p>
            <div className="flex flex-wrap gap-1">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs rounded-md"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
