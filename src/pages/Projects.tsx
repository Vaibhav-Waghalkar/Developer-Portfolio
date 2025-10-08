import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import ProjectModal from '@/components/ProjectModal';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const handleCardClick = (project: any) => { setSelectedProject(project); };

  const projects = [
    {
      id: 1,
      title: 'ARIS – Advanced Responsive Intelligent System',
      summary: 'AI assistant with voice/text automation and OS control',
      description: 'AI-powered assistant with ChatGPT-style interface and voice automation',
      fullDescription: 'An AI-powered assistant with a ChatGPT-style interface, voice/text input, system automation (open apps/files, run commands), email drafting, and support for multiple LLMs.',
      stack: ['Python', 'FastAPI', 'React', 'WebSockets', 'LLMs'],
      category: 'AI',
      github: 'https://github.com/Vaibhav-Waghalkar/ARIS-AI_Assistant',
      live: null,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'AI Creation Platform',
      summary: 'Multi-bot platform with RAG and personality-aware agents',
      description: 'Multi-bot AI platform built for Google Gen AI Hackathon',
      fullDescription: 'A multi-bot AI platform with RAG, augmentation, and personality-aware bots, built for the Google Gen AI International Hackathon.',
      stack: ['Python', 'AI/ML', 'RAG', 'FastAPI'],
      category: 'AI',
      github: 'https://github.com/manavgt54/CHATBOT-CREATOR-AND-PRODUCTIVITY-VIBE-WORKSPACE',
      live: null,
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'ByteFest2K25',
      summary: 'Tech fest site with listings, auth, and live results',
      description: 'Full-stack web platform for college tech fest',
      fullDescription: 'A full-stack web platform for a college tech fest, featuring event listings, user registration, and real-time result updates.',
      stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      category: 'Full Stack',
      github: 'https://github.com/Vaibhav-Waghalkar/ByteFest2K25',
      live: 'https://bytefest2k25.netlify.app',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      title: 'Student Evaluation Tool',
      summary: 'Admin scoring portal with dashboards and analytics',
      description: 'Admin portal for scoring events with interactive dashboards',
      fullDescription: 'An admin portal designed for scoring events and visualizing performance through interactive dashboards.',
      stack: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      category: 'Web',
      github: 'https://github.com/Vaibhav-Waghalkar',
      live: null,
      image: '/placeholder.svg'
    },
    {
      id: 5,
      title: 'House Price Prediction ML',
      summary: 'Regression model to estimate house prices from key features',
      description: 'Predictive machine learning model using regression techniques',
      fullDescription: 'A predictive machine learning model using regression techniques on a Kaggle dataset to estimate house prices.',
      stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      category: 'AI',
      github: 'https://github.com/Vaibhav-Waghalkar/House-Price-Prediction-ML',
      live: null,
      image: '/placeholder.svg'
    },
    {
      id: 6,
      title: 'DSA Practice Repository',
      summary: 'Curated DSA practice in C/C++/JS with patterns and solutions',
      description: 'Solutions and practice problems for Data Structures and Algorithms',
      fullDescription: 'A personal repository containing solutions and practice problems for Data Structures and Algorithms in C, C++, and JavaScript.',
      stack: ['C', 'C++', 'JavaScript', 'Algorithms'],
      category: 'Full Stack',
      github: 'https://github.com/Vaibhav-Waghalkar/DSA-practice',
      live: null,
      image: '/placeholder.svg'
    }
  ];

  const categories = ['All', 'AI', 'Web', 'Full Stack'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className={`min-h-screen bg-background font-plus-jakarta ${inView ? 'reveal-active' : 'reveal-init'}`} ref={ref}>
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-developer to-ai bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcase of my work in full stack development and AI engineering
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="project-card animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${0.1 * index}s` }}
                onClick={() => handleCardClick(project)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.fullDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/project/${project.id}`}>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  {project.live && (
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Projects;