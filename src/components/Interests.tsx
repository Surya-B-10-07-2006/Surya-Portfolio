import { Card, CardContent } from "@/components/ui/card";

const interests = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    title: "Data Analytics",
    tools: ["Tableau", "Power BI", "Excel", "Python", "SQL"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    title: "Business Intelligence",
    tools: ["Data Visualization", "Dashboard Development"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    title: "Data Science",
    tools: ["Machine Learning", "Deep Learning", "Big Data Analytics"],
    gradient: "from-orange-500 to-red-500",
  },
];

export const Interests = () => {
  return (
    <section id="interests" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Areas of Interest
          </h2>
          <p className="text-muted-foreground text-lg">
            My passion and focus areas
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
          {interests.map((interest, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/50"
            >
              <CardContent className="p-6 space-y-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-all duration-300`}></div>
                    <div className={`relative w-20 h-20 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center group-hover:rotate-6 transition-all duration-300 shadow-lg p-3`}>
                      <img src={interest.icon} alt={interest.title} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {interest.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {interest.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/30 hover:border-primary hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
