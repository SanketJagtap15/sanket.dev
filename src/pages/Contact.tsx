
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real app, you would send this data to a backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Message failed to send",
        description: "Please try again later or use one of the alternative contact methods.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Contact Hero */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800">
              Get In Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Contact Me
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3 space-y-6 animate-slide-in">
              <Card>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mt-1 text-primary mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">Address</h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Azad Hall, IIT Kharagpur, 721302
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 mt-1 text-primary mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                        <a 
                          href="mailto:sanketjagtap.iitkgp@gmail.com" 
                          className="text-gray-600 dark:text-gray-400 mt-1 hover:text-primary dark:hover:text-primary transition-colors"
                        >
                          sanketjagtap.iitkgp@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 mt-1 text-primary mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Available upon request
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Linkedin className="w-5 h-5 mt-1 text-primary mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">LinkedIn</h3>
                        <a 
                          href="https://www.linkedin.com/in/sanket-iitkgp" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-600 dark:text-gray-400 mt-1 hover:text-primary dark:hover:text-primary transition-colors"
                        >
                          linkedin.com/in/sanket-iitkgp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Portfolio
                  </h2>
                  <a 
                    href="https://sanketjagtap.in" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    sanketjagtap.in/
                  </a>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 section-fade">
              <Card>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Send Me a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...register("name", { required: "Name is required" })}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={6}
                        {...register("message", { required: "Message is required" })}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 section-fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Open to New Opportunities
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              I'm currently looking for opportunities in Data Science, Product Management, and Business Analysis. 
              Feel free to reach out if you think I'd be a good fit for your team!
            </p>
            <Button asChild>
              <a href="/lovable-uploads/22c52ed4-cec3-4e2b-83bf-6f711cf27628.png" download="sanket_jagtap_profile.jpg">
                Download Profile Photo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
