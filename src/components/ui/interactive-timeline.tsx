import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Code, Brain, Trophy } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<unknown>;
  color: string;
  status: 'completed' | 'current' | 'upcoming';
}

const InteractiveTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const events: TimelineEvent[] = [
    {
      year: '2022',
      title: 'Started College Journey',
      description: 'Began pursuing B.Tech in Artificial Intelligence and Data Science at Sri Eshwar College of Engineering',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600',
      status: 'completed'
    },
    {
      year: '2023',
      title: 'Mastered Programming Fundamentals',
      description: 'Gained proficiency in C Programming, JavaScript, and web development technologies',
      icon: Code,
      color: 'from-green-500 to-green-600',
      status: 'completed'
    },
    {
      year: '2024',
      title: 'AI & Data Science Focus',
      description: 'Currently diving deep into machine learning, data analysis, and building AI-powered projects',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      status: 'current'
    },
    {
      year: '2025',
      title: 'Industry Ready',
      description: 'Goal to complete advanced projects and secure opportunities in AI/ML and full-stack development',
      icon: Trophy,
      color: 'from-orange-500 to-orange-600',
      status: 'upcoming'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => 
              prev.includes(index) ? prev : [...prev, index].sort((a, b) => a - b)
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = timelineRef.current?.querySelectorAll('[data-index]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={timelineRef} className="relative max-w-4xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent-purple"></div>
      
      <div className="space-y-12">
        {events.map((event, index) => {
          const Icon = event.icon;
          const isVisible = visibleItems.includes(index);
          const isEven = index % 2 === 0;
          
          return (
            <div
              key={index}
              data-index={index}
              className={`relative flex items-center gap-8 ${
                isEven ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute ${isEven ? 'left-6' : 'right-6'} flex items-center justify-center`}>
                <div 
                  className={`w-8 h-8 bg-gradient-to-r ${event.color} rounded-full flex items-center justify-center border-4 border-background shadow-lg transition-all duration-500 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                  } ${event.status === 'current' ? 'animate-pulse' : ''}`}
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 ${isEven ? 'ml-20' : 'mr-20'}`}>
                <div 
                  className={`glass-card transition-all duration-700 delay-${index * 200} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${
                    event.status === 'current' ? 'ring-2 ring-primary/30 bg-primary/5' : ''
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 bg-gradient-to-r ${event.color} text-white text-sm font-bold rounded-full`}>
                      {event.year}
                    </span>
                    {event.status === 'current' && (
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InteractiveTimeline;