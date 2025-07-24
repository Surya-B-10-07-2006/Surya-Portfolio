import { useEffect, useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "mrsuryammp@gmail.com",
      href: "mailto:mrsuryammp@gmail.com",
      color: "from-red-500 to-orange-500",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8189840977",
      href: "tel:+918189840977",
      color: "from-green-500 to-emerald-500",
      description: "Let's have a conversation"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Surya-B-10-07-2006",
      href: "https://github.com/Surya-B-10-07-2006",
      color: "from-gray-700 to-gray-900",
      description: "Check out my code"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "surya-b-499669328",
      href: "https://linkedin.com/in/surya-b-499669328",
      color: "from-sky-500 to-blue-600",
      description: "Connect professionally"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 bg-muted/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact information */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-card h-full">
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-semibold mb-2">Contact Information</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels:
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 border border-transparent hover:border-primary/20"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {method.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                      <p className="text-sm font-mono text-primary">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional info */}
              <div className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h4 className="font-medium">Location</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Coimbatore, Tamil Nadu, India
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Available for remote work and collaborations
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass-card h-full">
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-semibold mb-2 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Send a Message
                </h3>
                <p className="text-muted-foreground">
                  I typically respond within 24 hours. Let's discuss your ideas!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    required
                    rows={6}
                    className="w-full resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Minimum 10 characters ({formData.message.length}/10)
                  </p>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting || formData.message.length < 10}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-6 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              {/* Quick response info */}
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Quick Response Guarantee</span>
                </div>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                  I respond to all messages within 24 hours, usually much sooner!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl font-semibold mb-4">
              Ready to Start a <span className="gradient-text">Project</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether it's a web application, AI project, or just a tech discussion, 
              I'm always excited to explore new opportunities and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:mrsuryammp@gmail.com?subject=Project Inquiry" 
                className="btn-gradient inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Start a Project
              </a>
              <a 
                href="https://linkedin.com/in/surya-b-499669328" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl hover:bg-muted transition-all duration-300 hover:shadow-lg"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;