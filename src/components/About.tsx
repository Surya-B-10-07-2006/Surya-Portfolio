import { useEffect, useRef, useState } from 'react';
import { BookOpen, Code, Database, Brain, GraduationCap, Target, Lightbulb, Users, Award, Zap } from 'lucide-react';
import InteractiveTimeline from '@/components/ui/interactive-timeline';
import StatsCard from '@/components/ui/stats-card';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Passionate about developing intelligent systems and exploring the frontiers of artificial intelligence."
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Extracting insights from complex datasets and building predictive models for real-world applications."
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating beautiful, responsive web applications with modern technologies and best practices."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always eager to learn new technologies and stay updated with the latest industry trends."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 1px, transparent 1px),
                           radial-gradient(circle at 80% 50%, hsl(var(--secondary)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20">
            About Me
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Journey</span>
          </h2>
        </div>

        {/* Stats Section */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCard 
              icon={BookOpen}
              value={3}
              suffix="+"
              label="Years of Learning"
              color="from-blue-500 to-blue-600"
              delay={0}
            />
            <StatsCard 
              icon={Code}
              value={20}
              suffix="+"
              label="Projects Built"
              color="from-green-500 to-green-600"
              delay={200}
            />
            <StatsCard 
              icon={Award}
              value={5}
              suffix="+"
              label="Technologies"
              color="from-purple-500 to-purple-600"
              delay={400}
            />
            <StatsCard 
              icon={Zap}
              value={100}
              suffix="%"
              label="Passion Level"
              color="from-orange-500 to-orange-600"
              delay={600}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-semibold">My Journey</h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate student currently pursuing my <span className="text-primary font-semibold">B.Tech in Artificial Intelligence and Data Science</span> at Sri Eshwar College of Engineering, Coimbatore. My journey in technology began with a curiosity about how intelligent systems work and has evolved into a deep passion for creating innovative solutions.
                </p>
                
                <p>
                  What excites me most about AI and Data Science is the potential to solve real-world problems through intelligent algorithms and data-driven insights. From machine learning models that can predict outcomes to web applications that enhance user experiences, I'm constantly exploring the intersection of technology and human needs.
                </p>
                
                <p>
                  Beyond academics, I'm actively involved in developing projects that showcase my skills in both frontend development and AI/ML. I believe in learning by building, and each project teaches me something new about the vast world of technology.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="skill-badge">
                  <Brain className="w-4 h-4 text-primary" />
                  AI Enthusiast
                </span>
                <span className="skill-badge">
                  <Database className="w-4 h-4 text-secondary" />
                  Data Scientist
                </span>
                <span className="skill-badge">
                  <Code className="w-4 h-4 text-accent-purple" />
                  Developer
                </span>
              </div>
            </div>
          </div>

          {/* Right content - Skills & Interests */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              {/* Core Interests */}
              <div className="glass-card">
                <h4 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Core Interests
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Machine Learning", icon: "🤖" },
                    { name: "Web Development", icon: "🌐" },
                    { name: "Data Analysis", icon: "📊" },
                    { name: "AI Research", icon: "🔬" },
                    { name: "Problem Solving", icon: "🧩" },
                    { name: "Innovation", icon: "💡" }
                  ].map((interest, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-300">
                      <span className="text-lg">{interest.icon}</span>
                      <span className="text-sm font-medium">{interest.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Values */}
              <div className="glass-card">
                <h4 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-secondary" />
                  What Drives Me
                </h4>
                <div className="space-y-3">
                  {[
                    { icon: Lightbulb, text: "Continuous learning and growth" },
                    { icon: Users, text: "Collaborative problem-solving" },
                    { icon: Code, text: "Clean, efficient code practices" },
                    { icon: Target, text: "Impact through technology" }
                  ].map((value, index) => (
                    <div key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-8 h-8 bg-gradient-to-r from-accent-purple to-accent-pink rounded-lg flex items-center justify-center">
                        <value.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm">{value.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className={`mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-semibold mb-4">
              My <span className="gradient-text">Timeline</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A visual journey of my academic and professional growth in the field of AI and technology
            </p>
          </div>
          <InteractiveTimeline />
        </div>
      </div>
    </section>
  );
};

export default About;