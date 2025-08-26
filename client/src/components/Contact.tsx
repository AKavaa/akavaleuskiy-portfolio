


Contact
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("zQkBsr5sx1EqHN_0D");
  }, []);

  const sendEmail = async (data: ContactFormData) => {
    try {
      setIsSending(true);

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject || 'New message from portfolio contact form',
        message: data.message,
        to_email: 'alex.kavaleuskiy98@gmail.com'
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_33htayo', // Replace with your EmailJS service ID
        'template_r50tivk', // Replace with your EmailJS template ID
        templateParams,
        'zQkBsr5sx1EqHN_0D' // Replace with your EmailJS public key
      );

      // Show success message with toast
      toast({
        title: "✅ Message Sent Successfully!",
        description: "Thank you for reaching out! I'll get back to you as soon as possible.",
        duration: 5000,
        className: "bg-green-50 text-green-800 border border-green-200"
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSuccess(true);

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    sendEmail(formData);
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const services = [
    "Web Development & Frontend Design",
    "Backend Development & Database Management",
    "Game Development & Interactive Applications",
    "Algorithm Implementation & Problem Solving",
  ];

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white relative overflow-hidden scroll-mt-24">
      {/* Abstract tech background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-emerald-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm always interested in discussing new
            opportunities and innovative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a
                      href="mailto:alex.kavaleuskiy98@gmail.com"
                      className="text-white font-medium hover:text-blue-400 transition-colors duration-200"
                    >
                      alex.kavaleuskiy98@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <i className="fab fa-linkedin text-xl"></i>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/aleksander-kavaleuskiy-8b2682349/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-blue-400 transition-colors duration-200"
                    >
                      https://www.linkedin.com/in/aleksander-kavaleuskiy-8b2682349/
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-white font-medium">Larnaca, Cyprus</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">What I Can Help With</h4>
              <ul className="space-y-3 text-slate-300">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fas fa-check text-emerald-400 mr-3"></i>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Project discussion"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSending}
                className={`w-full px-6 py-3 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform ${isSuccess ? 'scale-[1.02]' : ''} disabled:opacity-50 ${
                  isSuccess 
                    ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500 shadow-lg shadow-green-500/30' 
                    : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 hover:shadow-lg hover:shadow-blue-500/20'
                }`}
              >
                {isSending ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : isSuccess ? (
                  <>
                    <i className="fas fa-check-circle mr-2 text-xl"></i>
                    <span className="font-semibold">Message Sent Successfully!</span>
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
              {isSuccess && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center animate-fade-in">
                  <p className="font-medium">✅ Thank you for your message!</p>
                  <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
