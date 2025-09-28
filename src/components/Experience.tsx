import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Trainee AI Full Stack Developer",
      company: "Real IT Solutions, Pune",
      duration: "August 2025 - Present",
      location: "Remote",
      description: [
        "Building and maintaining full stack applications using Angular and Spring Boot.",
        "Built an AI-powered IDE with intelligent code assistance using Python and FastAPI.",
        "Developed a Website Builder platform with React and FastAPI for dynamic page creation.",
        "Collaborating with project managers to deliver client requirements."
      ]
    },
    {
      title: "Event Coordinator & Website Developer",
      company: "ByteFest 2K25",
      duration: "May 2025 - August 2025",
      location: "Ambajogai, Maharashtra",
      description: [
        "Designed and developed the official website for the college tech fest.",
        "Coordinated major events like the Hackathon and BGMI Tournament.",
        "Managed participant data, registrations, planning, and on-site technical setup."
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Curosoft Technology",
      duration: "May 2025 - June 2025",
      location: "Sambhajinagar, India (Onsite)",
      description: [
        "Developed responsive websites from scratch using HTML, CSS, and JavaScript.",
        "Analyzed client requirements and contributed to UI/UX design and code optimization.",
        "Authored technical documentation, including SRS and Software Design Docs."
      ]
    },
    {
      title: "Server Manager (Internship)",
      company: "Eduspark International Pvt. Ltd.",
      duration: "March 2025 - May 2025",
      location: "Parbhani, India",
      description: [
        "Managed and monitored CET exam servers during live examinations.",
        "Resolved real-time technical and network issues under high-pressure conditions.",
        "Ensured uninterrupted server uptime and maintained data backups."
      ]
    }
  ];

  return (
    <motion.section 
      className="py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-developer to-ai bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building real-world solutions and gaining hands-on experience in AI, web development, and system management
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-developer via-primary to-ai hidden lg:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-background border-4 border-primary rounded-full z-10 flex-shrink-0">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                
                {/* Content */}
                <Card className="flex-1 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <Badge variant="secondary" className="w-fit">
                          {exp.duration}
                        </Badge>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
