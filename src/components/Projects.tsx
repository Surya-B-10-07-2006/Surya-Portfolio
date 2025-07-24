import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code, Database, Brain, Globe, Smile } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      id: 2,
      title: "Facial Emotion-Based Song Recommendation System",
      description: "A real-time music recommendation system that uses facial emotion recognition to suggest songs that match the user's current emotional state.",
      category: "AI & Computer Vision",
      icon: Smile,
      color: "from-yellow-400 to-red-500",
      technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "Pygame"],
      features: [
        "Real-time emotion detection via webcam",
        "Facial expression classification (Happy, Sad, Angry, Surprise, Neutral)",
        "Emotion-based music recommendation",
        "Music playback using integrated media player",
        "Deep learning model for emotion recognition"
      ],
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "EduNext",
      description: "EduNext is a modern, responsive web platform designed to help students find the best colleges and scholarships based on their preferences. It features powerful search, filtering, and discovery tools, along with user authentication and a sleek, user-friendly interface..",
      category: "Web Development",
      icon: Database,
      color: "from-green-500 to-teal-600",
      technologies: ["HTML", "CSS", "MongoDB", "JavaScript", "Tailwind CSS"],
      features: [
        "User authentication",
        "College search and filtering",
        "Scholarship discovery",
        "User-friendly interface"
      ],
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects, skills, and journey in AI and web development.",
      category: "Frontend",
      icon: Globe,
      color: "from-pink-500 to-orange-500",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsive design",
        "Dark/Light theme",
        "Smooth animations",
        "Contact form"
      ],
      status: "Completed",
      github: "https://github.com/Surya-B-10-07-2006",
      demo: "#"
    },
   
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20">
            My Work
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills in AI, data science, and web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`glass-card group hover:scale-105 transition-all duration-700 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Project header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{project.category}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                    project.status === 'In Development' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                    'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Key features */}
              <div className="mb-4">
                <h4 className="font-medium text-sm text-foreground mb-2">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-medium text-sm text-foreground mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md border border-border hover:border-primary/40 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project links */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <a 
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 bg-foreground/5 hover:bg-foreground/10 rounded-lg transition-all duration-300 group/link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium">Code</span>
                </a>
                
                <a 
                  href={project.demo}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-300 group/link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium">Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-semibold mb-4">
              Interested in <span className="gradient-text">Collaboration</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on new projects and explore innovative solutions. 
              Let's build something amazing together!
            </p>
            <a 
              href="#contact" 
              className="btn-gradient inline-flex items-center gap-2"
            >
              <span>Let's Connect</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;