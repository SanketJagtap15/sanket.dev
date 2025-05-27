
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      company: "ICICI Bank",
      position: "Incoming Manager",
      duration: "2025 - Present",
      description: "Upcoming role focusing on strategic business initiatives and data-driven decision making."
    },
    {
      company: "GameChange",
      position: "Data Scientist",
      duration: "May 2024 - July 2024",
      description: [
        "Executed 100+ test cases for OCR & PdfQuery modules using Pytest, reducing errors by 30%",
        "Developed a LangChain and GPT-based response system for managing 1,000+ user queries"
      ]
    },
    {
      company: "Trezla",
      position: "Product and Strategy Intern",
      duration: "April 2024 - June 2024",
      description: [
        "Investigated 200+ SMEs & agencies, identifying key B2B marketing pain points",
        "Conducted market research & competitive analysis to refine positioning"
      ]
    },
    {
      company: "Nexus info",
      position: "AI/ML Intern",
      duration: "January 2024 - March 2024",
      description: [
        "Integrated Gmail API in Python, optimizing email access and classification",
        "Utilized GPT-3.5 API for email classification with 95% accuracy"
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Experience</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              My professional journey and key achievements.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                      <p className="text-primary font-medium">{exp.position}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{exp.duration}</p>
                  </div>
                  {Array.isArray(exp.description) ? (
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
