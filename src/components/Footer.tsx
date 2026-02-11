import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Code2, Trophy, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "surya.b2024aids@sece.ac.in",
    href: "mailto:surya.b2024aids@sece.ac.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8189840977",
    href: "tel:+918189840977",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Coimbatore, Tamil Nadu",
    href: null,
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/surya-b-499669328/",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Surya-B-10-07-2006",
  },
  {
    name: "LeetCode",
    icon: Code2,
    url: "https://leetcode.com/u/SURYA_B_2006/",
  },
  {
    name: "HackerRank",
    icon: Trophy,
    url: "https://www.hackerrank.com/profile/surya_b2024aids",
  },
];

export const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container max-w-6xl py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Get in Touch Form */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gradient mb-6">Get in Touch</h3>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-background resize-none"
                    />
                  </div>
                  <Button type="submit" variant="gradient" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-up space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth group">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-smooth">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={index} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-muted hover:bg-primary group transition-smooth flex items-center justify-center"
                      aria-label={link.name}
                    >
                      <Icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-smooth" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2025 Surya B. All rights reserved. Built with passion and dedication.
          </p>
        </div>
      </div>
    </footer>
  );
};
