
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Learn more about my background, skills, and passion for data science.
            </p>
          </div>

          <div className="grid gap-8">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Background</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I'm a final year undergraduate student at IIT Kharagpur with a passion for Data Science 
                  and Business Analysis. Currently working as an Incoming Manager at ICICI Bank, I bring 
                  a unique blend of technical expertise and business acumen to every project.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  My journey in technology began with a curiosity about how data can drive meaningful 
                  insights and business decisions. This led me to specialize in machine learning, 
                  statistical modeling, and product analysis.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">What I Do</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Data Science</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Leveraging Python, machine learning algorithms, and statistical analysis 
                      to extract insights from complex datasets.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Business Analysis</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Translating business requirements into technical solutions and providing 
                      strategic insights for product development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
