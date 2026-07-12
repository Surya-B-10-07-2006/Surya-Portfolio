import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Download, BarChart2, Database, Brain, TrendingUp } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const floatingMetrics = [
  { icon: BarChart2, label: "Power BI", value: "Dashboards", color: "text-cyan-400" },
  { icon: Database, label: "SQL", value: "Analytics", color: "text-blue-400" },
  { icon: Brain, label: "Python", value: "ML / AI", color: "text-purple-400" },
  { icon: TrendingUp, label: "Tableau", value: "Insights", color: "text-teal-400" },
];

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-24 analytics-hero data-grid relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-x-0 top-10 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="absolute left-[15%] top-[18%] w-40 h-40 rounded-full border border-cyan-400/10 animate-pulse" />
        <div className="absolute right-[18%] top-[32%] w-56 h-56 rounded-full border border-purple-400/10 animate-pulse" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="none">
          <path d="M120 620 C 240 520, 320 690, 450 560 S 690 460, 820 520 S 1020 590, 1110 420" stroke="rgba(45,212,191,0.25)" strokeWidth="2" strokeDasharray="8 10" />
          <path d="M140 200 C 260 140, 380 300, 500 220 S 760 120, 900 240 S 1040 330, 1140 180" stroke="rgba(167,139,250,0.22)" strokeWidth="2" strokeDasharray="6 10" />
          <circle cx="450" cy="560" r="5" fill="rgba(45,212,191,0.8)" />
          <circle cx="820" cy="520" r="5" fill="rgba(251,191,36,0.85)" />
          <circle cx="900" cy="240" r="5" fill="rgba(167,139,250,0.85)" />
        </svg>
      </div>

      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="container max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-in space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-sm text-cyan-400 font-medium">
              <span className="glow-dot" />
              Available for Opportunities
            </div>

            <div className="space-y-3">
              <p className="text-muted-foreground text-lg font-medium tracking-[0.2em] uppercase font-mono">Dashboard Header</p>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-gradient leading-none">Surya B</h1>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground/70">Data Analytics & Business Intelligence Enthusiast</h2>
            </div>

            <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-lg">
              Aspiring Data Analyst & Data Scientist with strong foundation in SQL, Excel, Power BI, and Python.
              Passionate about transforming raw data into actionable insights and intelligent solutions.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 text-sm text-muted-foreground max-w-2xl">
              <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-card/50 px-3 py-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Coimbatore</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-card/50 px-3 py-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>8189840977</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-card/50 px-3 py-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>surya.b2024aids@sece.ac.in</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="gradient" size="lg" className="shadow-glow-cyan font-semibold" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary/40 hover:border-primary hover:shadow-glow transition-smooth font-semibold" asChild>
                <a href="/Surya_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4" />
                  View CV
                </a>
              </Button>
            </div>

            <div className="flex gap-3 pt-1">
              <a href="https://www.linkedin.com/in/surya-b-499669328/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-glow transition-smooth">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com/Surya-B-10-07-2006" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-glow transition-smooth">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="animate-slide-up flex justify-center lg:justify-end relative">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-2xl animate-pulse-glow" />
              <div className="absolute inset-3 rounded-full border border-cyan-400/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-cyan-400/30 shadow-glow">
                <img src={profileImage} alt="Surya B - Data Analytics Professional" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full gradient-primary animate-pulse-glow" />
              <div className="absolute -bottom-3 -left-3 w-5 h-5 rounded-full bg-purple-500/70 animate-pulse" />
            </div>

            <div className="absolute -left-4 top-4 grid grid-cols-2 gap-2 w-44">
              {floatingMetrics.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div key={i} className="glass-card p-3 text-center space-y-1 animate-float hover:shadow-glow transition-smooth" style={{ animationDelay: `${i * 0.4}s` }}>
                    <Icon className={`w-5 h-5 mx-auto ${m.color}`} />
                    <p className="text-xs font-semibold text-foreground/80 font-mono">{m.label}</p>
                    <p className="text-xs text-muted-foreground">{m.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
