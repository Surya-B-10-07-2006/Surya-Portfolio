import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, BarChart3, Code2, FileSpreadsheet, Code } from "lucide-react";

const skills = [
  {
    icon: Database,
    title: "SQL",
    description: "Proficient in writing queries to extract, filter, and analyze data from relational databases.",
    tags: ["Queries", "Data Analysis", "Database Management"],
  },
  {
    icon: BarChart3,
    title: "Power BI",
    description: "Hands-on experience in building interactive dashboards and reports to visualize key business trends.",
    tags: ["Dashboards", "Visualization", "Reports"],
  },
  {
    icon: Code2,
    title: "Python (Data Analytics)",
    description: "Skilled in using libraries like Pandas, NumPy, Matplotlib, Seaborn for data manipulation, EDA, and visualization.",
    tags: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    icon: FileSpreadsheet,
    title: "Excel",
    description: "Advanced formulas, pivot tables, and automation for reporting.",
    tags: ["Formulas", "Pivot Tables", "Automation"],
  },
  {
    icon: Code,
    title: "Java",
    description: "Skilled in using Java for building desktop applications and web applications.",
    tags: ["Java", "Spring Boot", "Hibernate", "JPA", "JDBC"],
  },
  {
    icon: BarChart3,
    title: "Tableau",
    description: "Skilled in using Tableau for building data visualizations and dashboards.",
    tags: ["Tableau", "Data Visualization", "Dashboard Development"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 scroll-mt-20">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={index} className="group hover:scale-[1.02] transition-smooth">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{skill.title}</CardTitle>
                  <CardDescription>{skill.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
