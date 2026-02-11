import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
export const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in space-y-6">
            <div className="space-y-2">
              <p className="text-accent text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
Surya B</h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                Data Analytics & Business Intelligence Enthusiast
              </h2>
            </div>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              Aspiring Data Analyst & Data Scientist with strong foundation in SQL, Excel, Power BI, and Python.
              Passionate about transforming raw data into actionable insights and intelligent solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Coimbatore</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>8189840977</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>surya.b2024aids@sece.ac.in</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="gradient" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/Surya_Resume.pdf" download="Surya_B_Resume.pdf">
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </div>
            
            <div className="flex gap-4 pt-2">
              <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110 transition-smooth">
                <a href="https://www.linkedin.com/in/surya-b-499669328/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110 transition-smooth">
                <a href="https://github.com/Surya-B-10-07-2006" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-up flex justify-center md:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
              <img src={profileImage} alt="Surya B - Data Analytics Professional" className="relative rounded-full w-80 h-80 object-cover border-4 border-primary/30 shadow-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};