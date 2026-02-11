import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const education = {
  institution: "Sri Eshwar College of Engineering",
  degree: "Bachelor of Technology",
  field: "Artificial Intelligence and Data Science",
  period: "September 2024 - Present",
  cgpa: "7.3/10",
};


const certifications = [
  {
    title: "Power BI for Data Analysis",
    issuer: "Microsoft",
    date: "May 2025",
  },
  {
    title: "Python for Data Analysis: Pandas & NumPy",
    issuer: "Coursera",
    date: "April 2025",
  },
  {
    title: "Excel For Beginners",
    issuer: "Microsoft",
    date: "January 2025",
  },
  {
    title: "Java for Beginners",
    issuer: "Coursera",
    date: "October 2025",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 scroll-mt-20">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Education & Certifications
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
          <Card className="group hover:scale-[1.02] transition-smooth">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>{education.degree}</CardTitle>
              <CardDescription>{education.field}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-foreground font-medium">{education.institution}</p>
              <p className="text-muted-foreground text-sm">{education.period}</p>
              <div className="pt-2">
                <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
                  CGPA: {education.cgpa}
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="group hover:scale-[1.02] transition-smooth">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                <Award className="w-6 h-6 text-accent-foreground" />
              </div>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-4 space-y-1">
                  <p className="font-medium text-foreground">{cert.title}</p>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-accent">{cert.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
