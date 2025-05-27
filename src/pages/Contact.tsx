
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Let's connect and discuss opportunities for collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a 
                      href="mailto:sanketjagtap.iitkgp@gmail.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                    >
                      sanketjagtap.iitkgp@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-gray-700 dark:text-gray-300">
                      IIT Kharagpur, India
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href="https://www.linkedin.com/in/sanket-iitkgp/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href="https://github.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">What I'm Looking For</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    I'm open to opportunities in:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Data Science and Machine Learning roles</li>
                    <li>Business Analysis and Strategy positions</li>
                    <li>Product Management opportunities</li>
                    <li>Collaborative technical projects</li>
                    <li>Research and development initiatives</li>
                  </ul>
                  <p className="mt-4">
                    Feel free to reach out if you'd like to discuss potential collaborations 
                    or if you have any questions about my work and experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
