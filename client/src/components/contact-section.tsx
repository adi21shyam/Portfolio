import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Code, Trophy, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import portfolioData from "@/data/portfolio.json";

export default function ContactSection() {
  const { personal, social } = portfolioData;
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="flex items-center space-x-4 cursor-pointer"
              >
                <motion.div 
                  className="bg-primary/10 p-3 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Mail className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-slate-600 dark:text-slate-400">{personal.email}</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="flex items-center space-x-4 cursor-pointer"
              >
                <motion.div 
                  className="bg-primary/10 p-3 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Phone className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-slate-600 dark:text-slate-400">{personal.phone}</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="flex items-center space-x-4 cursor-pointer"
              >
                <motion.div 
                  className="bg-primary/10 p-3 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <MapPin className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-slate-600 dark:text-slate-400">{personal.location}</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <h4 className="font-semibold mb-4">Find me on</h4>
              <div className="flex space-x-4">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-200 dark:bg-slate-800 p-3 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-200 dark:bg-slate-800 p-3 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-200 dark:bg-slate-800 p-3 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  <Code className="w-5 h-5" />
                </a>
                <a
                  href={social.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-200 dark:bg-slate-800 p-3 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  <Trophy className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
            whileHover={{ 
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 }
            }}
            className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-transparent hover:border-primary/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-2 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-primary hover:bg-blue-700 text-white flex items-center justify-center gap-2"
              >
                {contactMutation.isPending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
