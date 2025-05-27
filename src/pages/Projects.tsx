
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Email Classification System",
      description: "Developed an intelligent email classification system using GPT-3.5 API with 95% accuracy. Integrated Gmail API for seamless email processing.",
      technologies: ["Python", "GPT-3.5", "Gmail API", "Machine Learning"],
      github: "#",
      demo: "#"
    },
    {
      title: "LangChain Query Response System",
      description: "Built a sophisticated query response system using LangChain and GPT for handling 1,000+ user queries efficiently.",
      technologies: ["LangChain", "GPT", "Python", "NLP"],
      github: "#",
      demo: "#"
    },
    {
      title: "OCR & PDF Query Module",
      description: "Developed and tested OCR and PDF query modules with comprehensive test coverage using Pytest, achieving 30% error reduction.",
      technologies: ["Python", "OCR", "Pytest", "PDF Processing"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A collection of my recent work and technical projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
