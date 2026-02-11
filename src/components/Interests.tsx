import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Database, Brain } from "lucide-react";

const interests = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    tools: ["Tableau", "Power BI", "Excel", "Python","SQL"],
  },
  {
    icon: Database,
    title: "Business Intelligence",
    tools: ["Data Visualization", "Dashboard Development"],
  },
  {
    icon: Brain,
    title: "Data Science",
    tools: [ "Machine Learning", "Deep Learning", "Big Data Analytics"],
  },
];

export const Interests = () => {
  return (
    <section id="interests" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Areas of Interest
          </h2>
          <p className="text-muted-foreground text-lg">
            My passion and focus areas
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <Card key={index} className="group hover:scale-[1.02] transition-smooth overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 gradient-accent rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-smooth"></div>
                      <div className="relative w-16 h-16 rounded-lg gradient-accent flex items-center justify-center group-hover:scale-110 transition-smooth">
                        <Icon className="w-8 h-8 text-accent-foreground" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                        {interest.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {interest.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-smooth"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
