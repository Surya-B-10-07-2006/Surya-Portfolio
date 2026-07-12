const interests = [
  {
    emoji: "📊",
    title: "Data Analytics",
    description: "Uncovering patterns and trends from raw data to drive business decisions.",
    tools: ["Tableau", "Power BI", "Excel", "Python", "SQL"],
    color: "from-cyan-500 to-blue-600",
    glow: "hover:shadow-glow-cyan",
    borderColor: "hover:border-cyan-500/40",
  },
  {
    emoji: "🧠",
    title: "Business Intelligence",
    description: "Transforming data into interactive dashboards and strategic insights.",
    tools: ["Data Visualization", "Dashboard Development", "KPI Tracking"],
    color: "from-purple-500 to-pink-500",
    glow: "hover:shadow-glow-purple",
    borderColor: "hover:border-purple-500/40",
  },
  {
    emoji: "🤖",
    title: "Data Science",
    description: "Building intelligent models and predictive analytics solutions.",
    tools: ["Machine Learning", "Deep Learning", "Big Data Analytics"],
    color: "from-teal-500 to-cyan-400",
    glow: "hover:shadow-glow-cyan",
    borderColor: "hover:border-teal-500/40",
  },
];

export const Interests = () => {
  return (
    <section id="interests" className="py-20 px-4 scroll-mt-20 data-grid">
      <div className="container max-w-6xl">
        <div className="text-center mb-14 animate-fade-in space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Focus Areas</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gradient">Areas of Interest</h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">My passion and core specialization domains</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
          {interests.map((interest, index) => (
            <div key={index} className={`group glass-card gradient-border p-8 space-y-6 text-center hover:scale-105 ${interest.glow} ${interest.borderColor} transition-smooth`}>
              <div className="relative mx-auto w-20 h-20">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${interest.color} blur-xl opacity-40 group-hover:opacity-70 transition-smooth`} />
                <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${interest.color} p-0.5`}>
                  <div className="w-full h-full rounded-[14px] bg-card flex items-center justify-center text-3xl">{interest.emoji}</div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">{interest.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{interest.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {interest.tools.map((tool, i) => (
                  <span key={i} className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/8 border border-primary/20 text-primary hover:border-primary hover:bg-primary/15 hover:scale-105 transition-smooth font-mono">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
