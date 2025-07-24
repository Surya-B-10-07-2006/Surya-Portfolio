import { useEffect, useRef, useState } from 'react';
import { Code, Database, GitBranch, Terminal, Globe, Cpu } from 'lucide-react';
import ProgressRing from '@/components/ui/progress-ring';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "JavaScript", level: 85, icon: "🔥" },
        { name: "C Programming", level: 90, icon: "⚡" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "TypeScript", level: 70, icon: "💎" }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "from-green-500 to-green-600",
      skills: [
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "React", level: 80, icon: "⚛️" },
        { name: "Tailwind CSS", level: 85, icon: "💨" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Terminal,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Git", level: 80, icon: "🔧" },
        { name: "GitHub", level: 85, icon: "🐙" },
        { name: "npm", level: 75, icon: "📦" }
      ]
    },
    {
      title: "AI & Data Science",
      icon: Cpu,
      color: "from-pink-500 to-pink-600",
      skills: [
        { name: "Machine Learning", level: 70, icon: "🤖" },
        { name: "Data Analysis", level: 75, icon: "📊" },
        { name: "NumPy", level: 65, icon: "🔢" },
        { name: "Pandas", level: 70, icon: "🐼" }
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 bg-muted/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent-purple/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20">
            My Skills
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels in various technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`glass-card transition-all duration-1000 delay-${categoryIndex * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`absolute left-0 top-0 h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Rings Section */}
        <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-heading text-2xl font-semibold text-center mb-8">
            Proficiency <span className="gradient-text">Overview</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { skill: "Frontend", percentage: 85, color: 'hsl(202 92% 55%)', delay: 0 },
              { skill: "Programming", percentage: 70, color: 'hsl(173 80% 50%)', delay: 200 },
              { skill: "AI/ML", percentage: 70, color: 'hsl(280 100% 70%)', delay: 400 },
              { skill: "Tools", percentage: 70, color: 'hsl(25 100% 65%)', delay: 600 }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <ProgressRing 
                  percentage={item.percentage}
                  color={item.color}
                  delay={item.delay}
                  className="mb-3"
                >
                  <div className="text-center">
                    <div className="text-sm font-bold text-foreground">
                      {item.percentage}%
                    </div>
                  </div>
                </ProgressRing>
                <h4 className="font-medium text-foreground">{item.skill}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Additional skills badges */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-heading text-2xl font-semibold text-center mb-8">
            Other <span className="gradient-text">Technologies</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "REST APIs", icon: "🔗" },
              { name: "Responsive Design", icon: "📱" },
              { name: "Data Structures", icon: "🧩" },
              { name: "Problem Solving", icon: "🧩" },
              { name: "Team Collaboration", icon: "👥" },
              { name: "Continuous Learning", icon: "📚" },
              { name: "Project Management", icon: "⚡" }
            ].map((tech, index) => (
              <div 
                key={index}
                className="skill-badge bg-card hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 group"
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </span>
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning philosophy */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Database className="w-6 h-6 text-primary" />
              <h4 className="font-heading text-xl font-semibold">Continuous Learning Philosophy</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Technology evolves rapidly, and I believe in staying current with the latest trends and best practices. 
              I'm always exploring new frameworks, tools, and methodologies to enhance my development skills and 
              deliver better solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;