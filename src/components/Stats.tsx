import { Award, BookOpen, Code, Target, Sparkles } from "lucide-react";

const stats = [
  { icon: Award, value: "10+", label: "Certifications", color: "from-cyan-500 to-blue-500", glow: "shadow-glow-cyan" },
  { icon: Code, value: "3+", label: "Projects", color: "from-blue-500 to-purple-500", glow: "shadow-glow-purple" },
  { icon: BookOpen, value: "7.3", label: "CGPA", color: "from-purple-500 to-pink-500", glow: "shadow-glow-purple" },
  { icon: Target, value: "6+", label: "Key Skills", color: "from-teal-500 to-cyan-500", glow: "shadow-glow-cyan" },
];

const barHeights = [
  [40, 65, 50, 80, 60, 90, 70],
  [55, 75, 45, 85, 65, 55, 80],
  [70, 50, 80, 45, 75, 60, 85],
  [45, 80, 60, 70, 50, 90, 65],
];

export const Stats = () => {
  return (
    <section className="py-16 px-4 data-grid">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={`group relative glass-card gradient-border p-6 text-center space-y-4 hover:scale-105 hover:${stat.glow} transition-smooth cursor-default overflow-hidden`}>
                <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-smooth">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-0.5 px-3 h-10 opacity-15 group-hover:opacity-25 transition-smooth">
                  {barHeights[index].map((h, i) => (
                    <div key={i} className="chart-bar flex-1" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto group-hover:shadow-glow transition-smooth`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="relative">
                  <div className="text-3xl font-extrabold text-gradient font-mono">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium mt-1 font-mono tracking-wide">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
