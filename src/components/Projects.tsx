import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ARIS (Advanced Responsive Intelligent System)",
      description: "An AI-powered assistant with a ChatGPT-style interface, voice/text input, system automation, and support for multiple LLMs.",
      tags: ["Python", "FastAPI", "Ollama", "JavaScript", "AI/ML"],
      repoLink: "https://github.com/Vaibhav-Waghalkar/ARIS-AI_Assistant"
    },
    {
      title: "AI Creation Platform (Hackathon)",
      description: "A multi-bot AI platform with RAG and personality-aware bots, built for a Google Gen AI Hackathon.",
      tags: ["Python", "GenAI", "RAG"],
      repoLink: "https://github.com/manavgt54/CHATBOT-CREATOR-AND-PRODUCTIVITY-VIBE-WORKSPACE"
    },
    {
      title: "ByteFest 2K25 Website",
      description: "The official web platform for a college tech fest, featuring event listings, user registration, and real-time result updates.",
      tags: ["HTML", "CSS", "JavaScript"],
      repoLink: "https://github.com/Vaibhav-Waghalkar/ByteFest2K25",
      liveLink: "https://bytefest2k25.netlify.app"
    },
    {
      title: "Developer Portfolio",
      description: "My personal portfolio website built with Next.js and Tailwind CSS to showcase my skills and projects.",
      tags: ["Next.js", "React", "TailwindCSS"],
      repoLink: "https://github.com/Vaibhav-Waghalkar/Developer-Portfolio"
    },
    {
      title: "House Price Prediction ML",
      description: "A predictive machine learning model using regression techniques on a Kaggle dataset to estimate house prices.",
      tags: ["Python", "Machine Learning", "Regression"],
      repoLink: "https://github.com/Vaibhav-Waghalkar/House-Price-Prediction-ML"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-developer to-ai bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in AI, web development, and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
