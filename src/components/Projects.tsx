import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart2, BarChart3, Brain, Globe, Sparkles } from "lucide-react";

const projects = [
  {
    title: "GoldPulse",
    status: "Deployed",
    icon: BarChart2,
    accentColor: "from-yellow-400 to-orange-500",
    glowColor: "hover:shadow-[0_0_30px_rgba(251,191,36,0.25)]",
    description:
      "Streamlit app for predicting precious metal prices using ARIMA forecasting with real-time data and multi-currency support. Features ARIMA time series forecasting (1-day & 7-day predictions), interactive price analysis, and responsive dashboard UI.",
    tech: ["Python", "Streamlit", "ARIMA"],
    link: "https://gold-pulse.streamlit.app/",
    isActive: false,
  },
  {
    title: "DataPulse AI",
    status: "Deployed",
    icon: Brain,
    accentColor: "from-cyan-400 to-blue-600",
    glowColor: "hover:shadow-glow-cyan",
    description:
      "DataPulse AI is an intelligent data cleaning and natural language data manipulation platform. Upload your CSV or Excel files, clean them instantly with a single click, or use simple everyday language to transform, filter, and modify your datasets.",
    tech: ["Streamlit", "Pandas", "Groq API"],
    link: "https://data-pulse-ai.streamlit.app/",
    isActive: false,
  },
 {
  title: "Streamlytics",
  status: "In Development",
  icon: BarChart3,
  accentColor: "from-cyan-400 to-blue-500",
  glowColor: "hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]",
  description:
    "Building an AI-powered entertainment analytics and recommendation platform for OTT and music streaming. Features user behaviour analytics, genre/language insights, interactive dashboards, churn detection, and personalized recommendations using KNN and content-based filtering.",
  tech: [
    "React",
    "Python",
    "Pandas",
    "Scikit-learn",
    "Plotly",
    "Machine Learning",
  ],
  link: "#",
  isActive: false,
},
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 scroll-mt-20 data-grid">
      <div className="container max-w-6xl">
        <div className="text-center mb-14 animate-fade-in space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gradient">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">Recent work and data-driven solutions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className={`group glass-card gradient-border flex flex-col overflow-hidden hover:scale-[1.02] ${project.glowColor} transition-smooth`}>
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.accentColor}`} />

                <div className="p-6 flex flex-col gap-5 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.accentColor} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground leading-tight">{project.title}</h3>
                        <p className="text-xs text-muted-foreground font-mono uppercase tracking-[0.2em]">Widget {index + 1}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 flex-shrink-0">
                      {project.status}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs rounded-full border border-border bg-muted/50 text-muted-foreground font-medium font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <Button variant="outline" size="sm" asChild className="w-full mt-auto border-primary/30 hover:border-primary hover:bg-primary/5 hover:shadow-glow transition-smooth group/btn">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <span>View Live Project</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-2 group-hover/btn:translate-x-0.5 transition-smooth" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
