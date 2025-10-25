import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Code, Target } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "10+",
    label: "Certifications",
  },
  {
    icon: Code,
    value: "2+",
    label: "Projects",
  },
  {
    icon: BookOpen,
    value: "7.3",
    label: "CGPA",
  },
  {
    icon: Target,
    value: "4+",
    label: "Key Skills",
  },
];

export const Stats = () => {
  return (
    <section className="py-16 px-4">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="group hover:scale-105 transition-smooth text-center">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto group-hover:shadow-glow transition-smooth">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
