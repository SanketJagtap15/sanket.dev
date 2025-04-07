
import React, { useEffect } from 'react';
import { ArrowRight, Download, Briefcase, Code, Database, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  useEffect(() => {
    // Animation for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section-fade').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.section-fade').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2 animate-fade-in">
              <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800">
                Data Scientist & Product Enthusiast
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                Hello, I'm <span className="text-primary">Sanket Jagtap</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
                A Final Year UG Student at IIT Kharagpur specializing in Data Science and Product/Business Analysis.
                Currently working as an Incoming Manager at ICICI Bank.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <a href="/resume.pdf" download>
                    Download CV <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-blue-400 opacity-75 blur"></div>
                <div className="relative">
                  <img
                    src="/lovable-uploads/22c52ed4-cec3-4e2b-83bf-6f711cf27628.png"
                    alt="Sanket Jagtap"
                    className="rounded-full w-64 h-64 object-cover border-4 border-white dark:border-gray-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 section-fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I specialize in Data Science, Machine Learning, and Business Analysis with expertise in various technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Data Science</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Expertise in data analysis, machine learning, and statistical modeling
                  </p>
                  <div className="flex flex-wrap justify-center">
                    <span className="tech-pill">Python</span>
                    <span className="tech-pill">Machine Learning</span>
                    <span className="tech-pill">Data Analysis</span>
                    <span className="tech-pill">SQL</span>
                    <span className="tech-pill">LangChain</span>
                    <span className="tech-pill">GPT</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Business Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Strategic thinking with focus on business insights and product development
                  </p>
                  <div className="flex flex-wrap justify-center">
                    <span className="tech-pill">Business Intelligence</span>
                    <span className="tech-pill">Market Research</span>
                    <span className="tech-pill">Power BI</span>
                    <span className="tech-pill">Excel</span>
                    <span className="tech-pill">Strategy</span>
                    <span className="tech-pill">Product Design</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Web Development</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Creating responsive and interactive web applications
                  </p>
                  <div className="flex flex-wrap justify-center">
                    <span className="tech-pill">HTML</span>
                    <span className="tech-pill">CSS</span>
                    <span className="tech-pill">JavaScript</span>
                    <span className="tech-pill">React</span>
                    <span className="tech-pill">Flask</span>
                    <span className="tech-pill">Git</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 section-fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Experience Highlights</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A glimpse of my professional journey and achievements.
            </p>
          </div>
          <div className="space-y-10">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden card-hover">
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">GameChange</h3>
                    <p className="text-primary font-medium">Data Scientist</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">May 2024 - July 2024</p>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Executed 100+ test cases for OCR & PdfQuery modules using Pytest, reducing errors by 30%</li>
                  <li>Developed a LangChain and GPT-based response system for managing 1,000+ user queries</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden card-hover">
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Trezla</h3>
                    <p className="text-primary font-medium">Product and Strategy Intern</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">April 2024 - June 2024</p>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Investigated 200+ SMEs & agencies, identifying key B2B marketing pain points</li>
                  <li>Conducted market research & competitive analysis to refine positioning</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden card-hover">
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Nexus info</h3>
                    <p className="text-primary font-medium">AI/ML Intern</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">January 2024 - March 2024</p>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Integrated Gmail API in Python, optimizing email access and classification</li>
                  <li>Utilized GPT-3.5 API for email classification with 95% accuracy</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/experience">
                  View Full Experience <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 section-fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic journey and educational background.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8 card-hover">
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Indian Institute of Technology, Kharagpur</h3>
                    <p className="text-primary font-medium">Bachelor's Degree</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">2021 - 2025</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Final year undergraduate student with a focus on Data Science and Machine Learning.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden card-hover">
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bharat Vidyalaya</h3>
                    <p className="text-primary font-medium">Secondary Education</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">2013 - 2019</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Completed secondary education with distinction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white section-fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              I'm open to any opportunity to collaborate on technical projects to improve my knowledge further and gain hands-on experience.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
