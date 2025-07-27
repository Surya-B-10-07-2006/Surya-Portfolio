import { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import suryaPhoto from '@/assets/surya-photo.jpg';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent-purple/5"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="font-heading text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">
                Surya (Updated!)
              </span>
            </h1>
            
            <div className="text-xl lg:text-2xl text-muted-foreground mb-6 space-y-2">
              <p>Student pursuing <span className="text-primary font-semibold">Artificial Intelligence & Data Science</span></p>
              <p>at <span className="text-secondary font-semibold">Sri Eshwar College of Engineering</span>, Coimbatore</p>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about AI, machine learning, and frontend development. Building intelligent solutions 
              and creating beautiful web experiences that make a difference.
            </p>
            
            {/* Remove the Contact Me and Download CV buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="#contact" 
                className="btn-gradient inline-flex items-center justify-center gap-2 group"
              >
                Contact Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border rounded-xl hover:bg-muted transition-all duration-300 hover:shadow-lg">
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div> */}
            
            {/* Remove the quick contact links */}
            {/* <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="mailto:mrsuryammp@gmail.com" 
                className="flex items-center gap-2 p-3 bg-card/50 rounded-xl hover:bg-card transition-all duration-300 hover:shadow-lg group"
              >
                <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Email</span>
              </a>
              
              <a 
                href="tel:+918189840977" 
                className="flex items-center gap-2 p-3 bg-card/50 rounded-xl hover:bg-card transition-all duration-300 hover:shadow-lg group"
              >
                <Phone className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Call</span>
              </a>
              
              <a 
                href="https://github.com/Surya-B-10-07-2006" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-card/50 rounded-xl hover:bg-card transition-all duration-300 hover:shadow-lg group"
              >
                <Github className="w-4 h-4 text-foreground group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/surya-b-499669328" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-card/50 rounded-xl hover:bg-card transition-all duration-300 hover:shadow-lg group"
              >
                <Linkedin className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div> */}
          </div>
          
          {/* Right content - Profile Image */}
          <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent-purple rounded-full p-1 animate-pulse">
                <div className="bg-background rounded-full w-full h-full"></div>
              </div>
              
              {/* Profile image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src={suryaPhoto} 
                  alt="Surya - AI & Data Science Student" 
                  className="w-full h-full object"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg animate-bounce">
                <span className="text-sm font-semibold">Front End Enthusiast</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-xl shadow-lg animate-bounce delay-1000">
                <span className="text-sm font-semibold">AI Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;