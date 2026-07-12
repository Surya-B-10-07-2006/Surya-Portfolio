import { GraduationCap, Award, Briefcase, CheckCircle2, ExternalLink, CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";

const education = {
  institution: "Sri Eshwar College of Engineering",
  degree: "Bachelor of Technology",
  field: "Artificial Intelligence and Data Science",
  period: "September 2024 - Present",
  cgpa: "7.3/10",
};

const certifications = [
  { title: "Power BI for Data Analysis", issuer: "Microsoft", date: "May 2025" },
  { title: "Python for Data Analysis: Pandas & NumPy", issuer: "Coursera", date: "April 2025" },
  { title: "Excel For Beginners", issuer: "Microsoft", date: "January 2025" },
  { title: "Java for Beginners", issuer: "Coursera", date: "October 2025" },
];

const internshipSkills = ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JavaScript", "Git", "Responsive Design"];

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 scroll-mt-20 section-alt data-grid">
      <div className="container max-w-6xl">
        <div className="text-center mb-14 animate-fade-in space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Background</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gradient">Education & Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
          <div className="glass-card gradient-border p-6 space-y-5 group hover:shadow-glow transition-smooth">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-smooth">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">{education.degree}</h3>
                <p className="text-muted-foreground text-sm">{education.field}</p>
              </div>
            </div>
            <div className="space-y-2 pl-1">
              <p className="font-semibold text-foreground">{education.institution}</p>
              <p className="text-muted-foreground text-sm">{education.period}</p>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold font-mono">
                <span className="glow-dot" />
                CGPA: {education.cgpa}
              </span>
            </div>
          </div>

          <div className="glass-card gradient-border p-6 space-y-5 group hover:shadow-glow transition-smooth">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:shadow-glow-purple transition-smooth">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">Certifications</h3>
                <p className="text-muted-foreground text-sm">{certifications.length} verified credentials</p>
              </div>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm leading-tight">{cert.title}</p>
                    <div className="flex items-center justify-between mt-0.5">
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      <p className="text-xs text-primary font-medium">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 animate-slide-up">
          <div className="glass-card gradient-border p-6 md:p-8 space-y-6 group hover:shadow-glow transition-smooth">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:shadow-glow-cyan transition-smooth">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-xl">MERN Stack Intern</h3>
                  <p className="text-muted-foreground text-sm">AlgoTutor — Completed Internship</p>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild className="border-primary/30 hover:border-primary hover:shadow-glow transition-smooth self-start sm:self-auto">
                <a href="/Mern%20Intern%20Certificate.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  View Certificate
                </a>
              </Button>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Completed a MERN Stack internship at AlgoTutor, gaining practical experience in building full-stack
              web applications using MongoDB, Express.js, React.js, and Node.js. Worked on responsive UI
              development, REST API integration, backend logic, database operations, and end-to-end application flow.
            </p>

            <div>
              <p className="font-semibold text-foreground mb-3">Key Highlights</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Built and improved responsive frontend components using React.js",
                  "Integrated backend APIs with frontend features",
                  "Worked with Node.js and Express.js for server-side development",
                  "Managed database operations using MongoDB",
                  "Strengthened debugging, Git workflow, and full-stack development practices",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CircleDot className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {internshipSkills.map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs rounded-full border border-border bg-muted/50 text-muted-foreground font-medium font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
