import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, Code2, Trophy } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/surya-b-499669328/",
    color: "text-[#0077B5]",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Surya-B-10-07-2006",
    color: "text-foreground",
  },
  {
    name: "LeetCode",
    icon: Code2,
    url: "https://leetcode.com/u/SURYA_B_2006/",
    color: "text-[#FFA116]",
  },
  {
    name: "HackerRank",
    icon: Trophy,
    url: "https://www.hackerrank.com/profile/surya_b2024aids",
    color: "text-[#2EC866]",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30 scroll-mt-20">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            Find me on these platforms
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 animate-slide-up">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Card key={index} className="group hover:scale-[1.05] transition-smooth">
                <CardContent className="p-6">
                  <Button
                    variant="ghost"
                    className="w-full h-auto flex flex-col items-center gap-4 py-8 hover:bg-transparent"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <div className="relative">
                        <div className="absolute inset-0 gradient-primary rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-smooth"></div>
                        <div className="relative w-16 h-16 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-smooth">
                          <Icon className={`w-8 h-8 ${link.color} group-hover:scale-110 transition-smooth`} />
                        </div>
                      </div>
                      <span className="text-lg font-medium text-foreground group-hover:text-primary transition-smooth">
                        {link.name}
                      </span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
