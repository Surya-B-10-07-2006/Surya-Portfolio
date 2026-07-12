import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BarChart2 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg" : "bg-transparent"}`}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shadow-glow-cyan group-hover:shadow-glow transition-smooth">
              <BarChart2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-gradient">Surya B</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a key={item.href} href={item.href} className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-smooth ${isActive ? "text-primary" : "text-foreground/60 hover:text-foreground hover:bg-muted/50"}`}>
                  {item.label}
                  {isActive && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-glow-cyan" />}
                </a>
              );
            })}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu" className="hover:bg-primary/10">
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-1 animate-fade-in border-t border-border/30 bg-background/95 backdrop-blur-xl rounded-b-xl">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a key={item.href} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${isActive ? "text-primary bg-primary/10 border-l-2 border-primary" : "text-foreground/70 hover:text-foreground hover:bg-muted/50"}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};
