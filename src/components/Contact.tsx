import { Linkedin, Github, Code2, Trophy, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/surya-b-499669328/",
    handle: "surya-b-499669328",
    color: "from-blue-600 to-blue-500",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]",
    desc: "Professional Network",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Surya-B-10-07-2006",
    handle: "Surya-B-10-07-2006",
    color: "from-gray-700 to-gray-600",
    glow: "hover:shadow-[0_0_30px_rgba(100,100,100,0.4)]",
    desc: "Open Source Projects",
  },
  {
    name: "LeetCode",
    icon: Code2,
    url: "https://leetcode.com/u/SURYA_B_2006/",
    handle: "SURYA_B_2006",
    color: "from-orange-500 to-yellow-500",
    glow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]",
    desc: "Problem Solving",
  },
  {
    name: "HackerRank",
    icon: Trophy,
    url: "https://www.hackerrank.com/profile/surya_b2024aids",
    handle: "surya_b2024aids",
    color: "from-green-500 to-emerald-500",
    glow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]",
    desc: "Coding Challenges",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 scroll-mt-20 section-alt data-grid">
      <div className="container max-w-5xl">
        {/* CTA Header */}
        <div className="text-center mb-14 animate-fade-in space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gradient">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            I'm actively looking for opportunities in Data Analytics and Business Intelligence.
            Let's build something data-driven together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button variant="gradient" size="lg" className="shadow-glow-cyan font-semibold w-full sm:w-auto" asChild>
              <a href="mailto:surya.b2024aids@sece.ac.in">
                <Mail className="w-4 h-4" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary/40 hover:border-primary hover:shadow-glow transition-smooth font-semibold w-full sm:w-auto" asChild>
              <a href="/Surya%20Resume%20Updated.pdf" download="Surya_B_Resume.pdf">
                View Resume
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Social Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group glass-card gradient-border p-6 flex flex-col items-center text-center gap-4 hover:scale-105 ${link.glow} transition-smooth`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg group-hover:shadow-glow transition-smooth`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-foreground group-hover:text-primary transition-smooth">{link.name}</p>
                  <p className="text-xs text-muted-foreground">{link.desc}</p>
                </div>
                <span className="text-xs text-primary/70 truncate w-full text-center font-mono">
                  @{link.handle}
                </span>
              </a>
            );
          })}
        </div>

        {/* Availability badge */}
        <div className="mt-12 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-foreground/70">
            <span className="glow-dot" />
            <span>Open to <span className="text-primary font-semibold">full-time</span> and <span className="text-primary font-semibold">internship</span> opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};
