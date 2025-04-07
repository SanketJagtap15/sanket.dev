
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';

const About = () => {
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
      {/* About Hero */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800">
              About Me
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Get to Know Me Better
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Driven by curiosity and passion for technology, I strive to make an impact through data-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 section-fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <img
                src="/lovable-uploads/22c52ed4-cec3-4e2b-83bf-6f711cf27628.png"
                alt="Sanket Jagtap"
                className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Who I Am</h2>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Hello there! I'm Sanket Jagtap, a final year undergraduate student at the Indian Institute of Technology Kharagpur, 
                  with a deep passion for Data Science and Business Analytics.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I'm currently working as an Incoming Manager at ICICI Bank while completing my studies. My academic journey has been 
                  complemented by hands-on experience in various roles where I've applied my technical knowledge to solve real-world problems.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I have a keen interest in technology and love to explore new technologies such as Artificial Intelligence, LLMs, and other 
                  emerging tools. I'm driven by the opportunity to leverage these technologies to create impactful solutions.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Outside of my professional interests, I enjoy collaborating with teams, participating in events, and constantly learning 
                  new skills. I believe in the power of community and knowledge sharing to drive innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Details */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 section-fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white text-center">My Skill Set</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Technical Skills</h3>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-gray-900 dark:text-white">Machine Learning & Data Science</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-pill">Python</span>
                  <span className="tech-pill">TensorFlow</span>
                  <span className="tech-pill">Scikit-Learn</span>
                  <span className="tech-pill">Pandas</span>
                  <span className="tech-pill">NumPy</span>
                  <span className="tech-pill">LangChain</span>
                  <span className="tech-pill">GPT</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-gray-900 dark:text-white">Web Development</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-pill">HTML</span>
                  <span className="tech-pill">CSS</span>
                  <span className="tech-pill">JavaScript</span>
                  <span className="tech-pill">React</span>
                  <span className="tech-pill">Flask</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-gray-900 dark:text-white">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-pill">Git</span>
                  <span className="tech-pill">Docker</span>
                  <span className="tech-pill">SQL</span>
                  <span className="tech-pill">Pytest</span>
                  <span className="tech-pill">Figma</span>
                  <span className="tech-pill">Selenium</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Business & Soft Skills</h3>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-gray-900 dark:text-white">Business Analysis</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-pill">Market Research</span>
                  <span className="tech-pill">Competitive Analysis</span>
                  <span className="tech-pill">Product Strategy</span>
                  <span className="tech-pill">Power BI</span>
                  <span className="tech-pill">Excel</span>
                  <span className="tech-pill">GTM Planning</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-gray-900 dark:text-white">Leadership & Management</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-pill">Team Leadership</span>
                  <span className="tech-pill">Event Management</span>
                  <span className="tech-pill">Project Management</span>
                  <span className="tech-pill">Public Relations</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-gray-900 dark:text-white">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-pill">English (Professional)</span>
                  <span className="tech-pill">Hindi (Full Professional)</span>
                  <span className="tech-pill">Marathi (Native)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 section-fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white text-center">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover">
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Comprehensive certification in machine learning algorithms and applications.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover">
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Microsoft Azure AI Fundamentals</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Microsoft certification for AI services and solutions on Azure.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover">
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Google Certifications</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Google-certified expertise in various technical domains.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover">
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Generative AI</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Specialized certification in generative AI models and applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
