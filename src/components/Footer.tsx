import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Code2, Trophy, Send, BarChart2, BadgeCheck, CalendarDays } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "surya.b2024aids@sece.ac.in", href: "mailto:surya.b2024aids@sece.ac.in" },
  { icon: Phone, label: "Phone", value: "+91 8189840977", href: "tel:+918189840977" },
  { icon: MapPin, label: "Location", value: "Coimbatore, Tamil Nadu", href: null },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/surya-b-499669328/" },
  { name: "GitHub", icon: Github, url: "https://github.com/Surya-B-10-07-2006" },
  { name: "LeetCode", icon: Code2, url: "https://leetcode.com/u/SURYA_B_2006/" },
  { name: "HackerRank", icon: Trophy, url: "https://www.hackerrank.com/profile/surya_b2024aids" },
];

export const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-xl">
      <div className="container max-w-6xl py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="animate-fade-in space-y-5">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-1">Get in Touch</h3>
              <p className="text-muted-foreground text-sm">Send me a message and I'll respond promptly.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <BadgeCheck className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="pl-9 bg-background/50 border-border focus:border-primary transition-smooth" />
              </div>
              <div className="relative">
                <CalendarDays className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                <Input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="pl-9 bg-background/50 border-border focus:border-primary transition-smooth" />
              </div>
              <Textarea placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={4} className="bg-background/50 border-border focus:border-primary resize-none transition-smooth" />
              <Button type="submit" variant="gradient" className="w-full shadow-glow-cyan font-semibold">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="animate-slide-up space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-5">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const inner = (
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-primary/30 transition-smooth group">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-smooth">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium text-sm">{info.value}</p>
                      </div>
                    </div>
                  );
                  return info.href ? <a key={index} href={info.href} className="block">{inner}</a> : <div key={index}>{inner}</div>;
                })}
              </div>
            </div>

            <div>
              <h4 className="text-base font-semibold text-foreground mb-4">Connect With Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="w-11 h-11 rounded-xl bg-muted/50 border border-border hover:bg-primary hover:border-primary hover:shadow-glow transition-smooth flex items-center justify-center group">
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-white transition-smooth" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg gradient-primary flex items-center justify-center">
              <BarChart2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-gradient text-sm">Surya B</span>
          </div>
          <p className="text-muted-foreground text-sm text-center">© 2025 Surya B. All rights reserved. Built with passion and dedication.</p>
          <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="glow-dot w-1.5 h-1.5" />
            Data Analyst & Developer
          </div>
        </div>
      </div>
    </footer>
  );
};
