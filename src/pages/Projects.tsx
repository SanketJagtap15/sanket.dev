
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  image,
  github,
  demo,
}) => {
  return (
    <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 card-hover">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>
        <div className="flex space-x-3">
          {github && (
            <Button variant="outline" size="sm" asChild>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {demo && (
            <Button size="sm" asChild>
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
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

  const projects = [
    {
      title: "LangChain GPT Response System",
      description: "A web application that uses LangChain and GPT to manage user queries, integrated with a database to handle 1,000+ monthly interactions.",
      technologies: ["Python", "LangChain", "GPT", "Flask", "MongoDB"],
      image: "/lovable-uploads/8cfcbba6-5818-4833-9c80-4cc9823130d2.png",
      github: "#",
      demo: "#"
    },
    {
      title: "PDF Data Extraction Tool",
      description: "Comparison of multiple PDF parsing libraries (PyPDF2, Tika, Camelot, Tabula) for optimal text and table extraction from complex documents.",
      technologies: ["Python", "PyPDF2", "Tika", "Camelot", "Tabula", "Data Processing"],
      image: "/lovable-uploads/7cea67db-b954-47c6-bdbe-1e57d11ba2a7.png",
      github: "#"
    },
    {
      title: "B2B SaaS Platform Design & Prototyping",
      description: "Market research and high-fidelity wireframes for a B2B marketing platform, with user testing and GTM strategy development.",
      technologies: ["Figma", "UI/UX", "Market Research", "A/B Testing", "Product Design"],
      image: "/lovable-uploads/6b6f569d-adee-4830-ab54-93549ec75d55.png",
      demo: "#"
    },
    {
      title: "ML-Based Email Classification System",
      description: "System that integrates with Gmail API to automatically classify emails into categories and extract relevant data using GPT-3.5.",
      technologies: ["Python", "ML", "Gmail API", "GPT-3.5", "NLP", "SQL"],
      github: "#"
    },
    {
      title: "Weather Data Analysis & Outlier Detection",
      description: "Web scraping tool and ML model for analyzing weather data from IMD website, using isolation forest for anomaly detection.",
      technologies: ["Python", "Selenium", "ML", "Isolation Forest", "Data Analysis"],
      github: "#"
    },
    {
      title: "Rule-Based Interactive Chatbot",
      description: "Python-based chatbot utilizing a dictionary-based pattern-response system with error handling for smooth user experience.",
      technologies: ["Python", "NLP", "Pattern Matching", "Git"],
      github: "#"
    },
    {
      title: "Responsive Society Website",
      description: "Designed and maintained a responsive website for Technology Adventure Society with enhanced user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
      demo: "#"
    },
    {
      title: "Performance-Optimized Website",
      description: "Developed a website for Youth Empowerment Foundation with 60% faster loading time through advanced optimization techniques.",
      technologies: ["HTML", "CSS", "JavaScript", "Performance Optimization"],
      demo: "#"
    }
  ];

  return (
    <Layout>
      {/* Projects Hero */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800">
              My Work
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Projects & Case Studies
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my technical projects, designs, and problem-solving abilities.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 section-fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                github={project.github}
                demo={project.demo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* More Projects Coming Soon */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 text-center section-fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            More Projects Coming Soon
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I'm continuously working on new projects and improving existing ones. Check back soon for more updates!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
