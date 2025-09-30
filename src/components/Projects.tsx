import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import FadeIn from './FadeIn';

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const projects = [
    {
      title: "ARIS (Advanced Responsive Intelligent System)",
      summary: "Intelligent assistant blending Siri-like system control with ChatGPT-style conversation.",
      description: "Engineered ARIS, an intelligent assistant designed to streamline daily productivity. Leveraging LLMs, this application provides a seamless voice and text interface for automating tasks like email drafting, executing system commands, and real-time information retrieval. The backend is powered by Python and FastAPI with WebSockets for instant, two-way communication with the React frontend. This project combines the capabilities of a system controller like Siri with a conversational AI like ChatGPT, allowing you to both command your operating system and chat with an intelligent assistant.",
      tags: ["Python", "FastAPI", "Ollama", "JavaScript", "AI/ML"],
      repoLink: "https://github.com/Vaibhav-Waghalkar/ARIS-AI_Assistant"
    },
    {
      title: "AI Creation Platform (Hackathon)",
      summary: "Multi-bot AI platform with RAG, rapid prototyping for hackathon delivery.",
      description: "Developed a versatile, multi-bot AI platform as a key contributor during the Google Gen AI International Hackathon. This project utilizes Retrieval-Augmented Generation (RAG) to allow users to build and deploy multiple, personality-aware AI bots with custom knowledge bases. The platform, built with FastAPI and AI/ML libraries, showcases my ability to rapidly prototype and deliver complex AI-driven solutions under pressure.",
      tags: ["Python", "GenAI", "RAG"],
      repoLink: "https://github.com/manavgt54/CHATBOT-CREATOR-AND-PRODUCTIVITY-VIBE-WORKSPACE"
    },
    {
      title: "ByteFest 2K25 Website",
      summary: "Official tech fest website with listings, registrations, and real-time updates.",
      description: "The official web platform for a college tech fest, featuring event listings, user registration, and real-time result updates.",
      tags: ["HTML", "CSS", "JavaScript"],
      repoLink: "https://github.com/Vaibhav-Waghalkar/ByteFest2K25",
      liveLink: "https://bytefest2k25.netlify.app"
    },
    {
      title: "Developer Portfolio",
      summary: "Personal portfolio showcasing projects and skills with modern UI.",
      description: "My personal portfolio website built with Next.js and Tailwind CSS to showcase my skills and projects.",
      tags: ["Next.js", "React", "TailwindCSS"],
      repoLink: "https://github.com/Vaibhav-Waghalkar/Developer-Portfolio"
    },
    {
      title: "House Price Prediction ML",
      summary: "Regression-based price predictor trained on Kaggle housing dataset.",
      description: "A predictive machine learning model using regression techniques on a Kaggle dataset to estimate house prices.",
      tags: ["Python", "Machine Learning", "Regression"],
      repoLink: "https://github.com/Vaibhav-Waghalkar/House-Price-Prediction-ML"
    }
  ];

  return (
    <motion.section 
      className={`py-16 bg-muted/30 ${inView ? 'reveal-active' : 'reveal-init'}`}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-developer to-ai bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work in AI, web development, and machine learning
            </p>
          </FadeIn>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="group project-card uniform-project-card cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground text-sm leading-relaxed project-summary">
                    {project.summary}
                  </p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 },
                        }}
                      >
                        <Badge variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <div className="flex gap-2 pt-2">
                    {project.repoLink && project.repoLink !== "#" && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(project.repoLink, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(project.liveLink, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
