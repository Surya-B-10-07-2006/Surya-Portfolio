import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AI Startup Success Predictor",
    status: "Deployed",
    description: "A smart web app that evaluates startup ideas and delivers clear, AI-generated business insights. AI-Powered Evaluation using Groq API (Llama 3.1). Success Probability Score with reasoning. SWOT Analysis (strengths, weaknesses, opportunities, threats). 4-Week Execution Roadmap. Team & Hiring Guidance (8 essential roles). Funding & Legal Tips (5 each). Market Intelligence with competitor insights & name suggestions. Social Media Strategy (5 beginner-friendly tips). Monthly Trend Predictions. Downloadable Reports in text/markdown.",
    tech: ["Python", "Streamlit", "Groq API"],
    link: "https://startuppro-7.streamlit.app/",
    isActive: false,
  },
  {
    title: "Personal Portfolio",
    status: "Deployed",
    description: "Built and deployed a responsive personal portfolio website with light/dark mode, theme switcher, animated UI, and integrated social links. Optimized for accessibility, mobile responsiveness, and deployed via GitHub Pages.",
    tech: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    link: "https://surya-b.netlify.app/",
    isActive: false,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30 scroll-mt-20">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Recent work and ongoing developments
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:scale-[1.02] transition-smooth">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  {project.isActive && (
                    <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                  )}
                </div>
                <Badge variant={project.isActive ? "default" : "secondary"}>
                  {project.status}
                </Badge>
                <CardDescription className="mt-4">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground border border-secondary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
