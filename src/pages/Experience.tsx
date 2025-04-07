
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface ExperienceProps {
  company: string;
  role: string;
  duration: string;
  location?: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<ExperienceProps> = ({
  company,
  role,
  duration,
  location,
  responsibilities,
}) => {
  return (
    <Card className="mb-8 overflow-hidden border border-gray-200 dark:border-gray-700 card-hover">
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{company}</h3>
            <p className="text-primary font-medium">{role}</p>
            {location && <p className="text-gray-500 dark:text-gray-400 text-sm">{location}</p>}
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{duration}</p>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

const Experience = () => {
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

  const workExperiences = [
    {
      company: 'GameChange',
      role: 'Data Scientist',
      duration: 'May 2024 - July 2024 (3 months)',
      responsibilities: [
        'Executed 100+ test cases for OCR & PdfQuery modules using Pytest, reducing errors by 30%, gained experience in Docker deployment',
        'Employed & compared PyPDF2, Tika, Camelot & Tabula for extracting text & tables from 500+ PDFs, streamlining data retrieval processes',
        'Developed a LangChain and GPT-based response system, integrated into a web application to manage 1,000+ user queries monthly',
        'Incorporated Scrapy, Puppeteer and BeautifulSoup for web scraping trade license details, improving accuracy with Postman integration'
      ]
    },
    {
      company: 'Trezla',
      role: 'Product and Strategy Intern',
      duration: 'April 2024 - June 2024 (3 months)',
      responsibilities: [
        'Investigated 200+ SMEs & agencies, identifying key B2B marketing pain points to guide MVP development for a SaaS platform',
        'Conducted market research & competitive analysis to refine positioning, creating a GTM plan that boosted initial user engagement by 25%',
        'Designed high-fidelity wireframes & prototypes using Figma, addressing user pain points & optimizing UX via A/B testing with 150+ users',
        'Collaborated with the founding team to develop a compelling pitch deck, securing 6 lakh Rs in funding under the Bihar Startup Scheme'
      ]
    },
    {
      company: 'Nexus info',
      role: 'AI/ML Intern',
      duration: 'January 2024 - March 2024 (3 months)',
      responsibilities: [
        'Integrated Gmail API in Python, optimizing the email access for primarily classify the emails into Product Order, Inquiry and Irrelevant',
        'Further classified the Inquiry emails into query and quotation categories; generated SQL commands to extract data for query-type mail',
        'Utilized GPT-3.5 API, both for the classification of emails as well as for PDF-based information extraction for some of the categories',
        'Achieved an accuracy of around 95% in the classification (Primary and Secondary) and an accuracy of 88% for the PDF-info retrieval task'
      ]
    },
    {
      company: 'Indian Institute of Technology, Kharagpur',
      role: 'Research Intern',
      duration: 'May 2023 - June 2023 (2 months)',
      responsibilities: [
        'Built a web-scraper using Selenium & Chrome Driver to efficiently retrieve the PDF files & Excel files from IMD website for all 29 states',
        'Preprocessed the data extracted from the web scrapper using different libraries in Python & performed EDA to gain further insights',
        'Implemented ML models on data for outlier detection using isolation forest & extended isolation forest & achieved an accuracy of 90%'
      ]
    },
    {
      company: 'Personifiwy',
      role: 'Data Scientist',
      duration: 'May 2023 - June 2023 (2 months)',
      responsibilities: [
        'Developed an interactive rule-based chatbot using Python, skillfully utilising an efficient dictionary-based pattern-response system',
        'Demonstrated problem-solving skills by promptly addressing potential errors during user interaction, ensuring a smooth user experience',
        'Efficiently utilised Git/Github to manage and track changes to the chatbot\'s code, enabling collaboration and maintaining the code\'s integrity'
      ]
    },
    {
      company: 'Technology Adventure Society (TAdS) IIT Kharagpur',
      role: 'Member',
      duration: 'August 2022 - June 2023 (11 months)',
      location: 'Kharagpur, West Bengal, India',
      responsibilities: [
        'Managed and maintained the society\'s website, actively implementing design updates and enhancements to optimise user experience',
        'Publicized and conducted various in and off-campus 1 and 2-day events and trips, which resulted in a 20% YOY increase in participation',
        'Taught HTML, CSS, JavaScript, and React, along with the basics of Adobe Photoshop and Adobe Premiere Pro, to 32 first-year students'
      ]
    },
  ];

  const volunteerExperiences = [
    {
      company: 'KGP Gaming Society',
      role: 'Associate Member',
      duration: 'August 2022 - April 2023 (9 months)',
      location: 'Kharagpur, West Bengal, India',
      responsibilities: [
        'Managed PR and CMR portfolio, facilitating effective communication with the sponsors and gaming community',
        'Led a team of 12 associate members of the PR & CMR portfolio in the planning and execution of events successfully',
        'Organise and execute FIFA event, demonstrating strong event management capabilities with a 30% YOY increase in Participation'
      ]
    },
    {
      company: 'SIDALCEAS EduTech',
      role: 'Business Analyst Intern',
      duration: 'December 2022 - January 2023 (2 months)',
      responsibilities: [
        'Researched & formulated a pricing strategy for 3 course offerings; analyzed the coaching industry by researching over 25 institutions',
        'Conducted multiple surveys involving 400+ undergrads to critique the impact of introducing cognitive learning techniques for learners',
        'Customized Learning Management System for online teaching to accommodate 200+ learners; delivered pre-launch marketing strategy'
      ]
    },
    {
      company: 'Finlatics',
      role: 'Business Analyst',
      duration: 'December 2022 - January 2023 (2 months)',
      responsibilities: [
        'Solved case-based projects using the MECE method of problem-solving, MS Excel, and Power BI',
        'Tackled a range of business cases ranging from enhancing profitability for a multinational technology business to analyzing the feasibility of a proposed tourism project',
        'Implemented Power BI to analyze consumer behaviour'
      ]
    },
    {
      company: 'AIESEC',
      role: 'Team Leader',
      duration: 'July 2022 - January 2023 (7 months)',
      location: 'Kharagpur, West Bengal, India',
      responsibilities: [
        'Led a team of 21 members & efficiently managed marketing portfolio, executing strategies that drove substantial organizational growth',
        'Organised and skillfully led an engaging and insightful Android Development workshop, attracting the participation of over 240 students'
      ]
    },
    {
      company: 'Youth Empowerment Foundation',
      role: 'Web Development Intern',
      duration: 'October 2022 - November 2022 (2 months)',
      responsibilities: [
        'Designed and developed an engaging and user-friendly website, utilising interactive and dynamic elements to enhance user experience',
        'Implemented performance optimisations, resulting in a significant 60% reduction in website loading time for seamless user navigation',
        'Conducted research on emerging web technologies and best practices, driving improvements and incorporating cutting-edge solutions'
      ]
    },
    {
      company: 'Spring Fest',
      role: 'Associate team member',
      duration: 'January 2022 - August 2022 (8 months)',
      location: 'Kharagpur, West Bengal, India',
      responsibilities: [
        'Did publicity of events as a member of the team publicity and media head',
        'Interviewed 100+ people all over the globe for the campus ambassador post of Spring Fest'
      ]
    }
  ];

  return (
    <Layout>
      {/* Experience Hero */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800">
              My Journey
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Professional Experience
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              A detailed look at my professional journey, skills, and achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-16 section-fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
            Work Experience
          </h2>

          {workExperiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              role={exp.role}
              duration={exp.duration}
              location={exp.location}
              responsibilities={exp.responsibilities}
            />
          ))}
        </div>
      </section>

      {/* Volunteer Experience */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 section-fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
            Volunteer Experience
          </h2>

          {volunteerExperiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              role={exp.role}
              duration={exp.duration}
              location={exp.location}
              responsibilities={exp.responsibilities}
            />
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="py-16 section-fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
            Education
          </h2>

          <Card className="mb-8 overflow-hidden border border-gray-200 dark:border-gray-700 card-hover">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Indian Institute of Technology, Kharagpur</h3>
                  <p className="text-primary font-medium">Bachelor's Degree</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2021 - 2025</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Currently in my final year, focusing on data science and business analysis with a strong foundation in technology.
              </p>
            </div>
          </Card>

          <Card className="mb-8 overflow-hidden border border-gray-200 dark:border-gray-700 card-hover">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bharat Vidyalaya</h3>
                  <p className="text-primary font-medium">Secondary Education</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2013 - 2019</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Completed secondary education with focus on science and mathematics.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 card-hover">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Gandhi Primary School</h3>
                  <p className="text-primary font-medium">Primary Education</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2009 - 2013</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Early foundation in education.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
