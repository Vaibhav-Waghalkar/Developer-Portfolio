import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  // Mock project data - in a real app, this would be fetched from an API
  const project = {
    id: projectId,
    title: 'Project Details',
    description: 'Detailed information about this project',
    fullDescription: 'This is where you would display comprehensive information about the project, including detailed descriptions, screenshots, technical specifications, challenges faced, and lessons learned.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'Web Development',
    github: 'https://github.com/Vaibhav-Waghalkar',
    live: null,
    image: '/placeholder.svg'
  };

  return (
    <div className="min-h-screen bg-background font-plus-jakarta">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="outline" asChild>
              <Link to="/projects">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
          </div>

          {/* Project Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-developer to-ai bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Displaying details for project ID: {projectId}
            </p>
          </div>

          {/* Project Content */}
          <Card className="animate-fade-in-up">
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-lg">{project.description}</CardDescription>
                </div>
                <Badge variant="secondary" className="shrink-0">
                  {project.category}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
                <p className="text-muted-foreground">{project.fullDescription}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
                {project.live && (
                  <Button asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPage;
