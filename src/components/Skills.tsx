const skills = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    title: "SQL",
    description: "Proficient in writing queries to extract, filter, and analyze data from relational databases.",
    tags: ["Queries", "Data Analysis", "Database Management"],
    color: "from-blue-500 to-cyan-400",
    level: 85,
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    title: "Power BI",
    description: "Hands-on experience building interactive dashboards and reports to visualize key business trends.",
    tags: ["Dashboards", "Visualization", "Reports"],
    color: "from-yellow-400 to-orange-500",
    level: 80,
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    title: "Python (Data Analytics)",
    description: "Skilled in Pandas, NumPy, Matplotlib, Seaborn for data manipulation, EDA, and visualization.",
    tags: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    color: "from-cyan-500 to-blue-600",
    level: 82,
  },
  {
    icon: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Excel_Logo_128px.png",
    title: "Excel",
    description: "Advanced formulas, pivot tables, and automation for reporting.",
    tags: ["Formulas", "Pivot Tables", "Automation"],
    color: "from-green-400 to-emerald-600",
    level: 88,
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    title: "Java",
    description: "Skilled in Java for building desktop applications and web applications.",
    tags: ["Java", "Spring Boot", "Hibernate", "JDBC"],
    color: "from-orange-400 to-red-500",
    level: 70,
  },
  {
    icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
    title: "Tableau",
    description: "Skilled in building data visualizations and interactive dashboards.",
    tags: ["Data Visualization", "Dashboard Development"],
    color: "from-blue-400 to-indigo-500",
    level: 75,
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 scroll-mt-20 section-alt data-grid">
      <div className="container max-w-6xl">
        <div className="text-center mb-14 animate-fade-in space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Tech Stack</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gradient">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">Analytics tools and technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 animate-slide-up">
          {skills.map((skill, index) => (
            <div key={index} className="group glass-card gradient-border p-6 space-y-5 hover:scale-[1.03] hover:shadow-glow transition-smooth">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 flex-shrink-0 shadow-lg group-hover:shadow-glow transition-smooth`}>
                  <div className="w-full h-full rounded-[10px] bg-card flex items-center justify-center p-2">
                    <img src={skill.icon} alt={skill.title} className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base leading-tight">{skill.title}</h3>
                  <p className="text-xs text-primary/70 font-mono">Proficiency {skill.level}%</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-muted-foreground font-mono">
                  <span>Proficiency</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-700`} style={{ width: `${skill.level}%` }} />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs rounded-full border border-primary/20 bg-primary/5 text-primary font-medium font-mono">
                    {tag}
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
