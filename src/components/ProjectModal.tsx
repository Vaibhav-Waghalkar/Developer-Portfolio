import React from 'react';
import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Project = {
  id?: number;
  title: string;
  summary?: string;
  description?: string;
  fullDescription?: string;
  tags?: string[];
  stack?: string[];
  repoLink?: string;
  github?: string;
  liveLink?: string;
  live?: string | null;
  image?: string | null;
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const description = project.fullDescription || project.description || '';
  const tags = project.tags || project.stack || [];
  const github = project.repoLink || project.github || '';
  const live = project.liveLink || project.live || '';

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <Card className="max-w-3xl w-full relative">
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg border border-border"
              />
            )}
            <p className="text-muted-foreground leading-relaxed">{description}</p>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((t, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">{t}</Badge>
                ))}
              </div>
            )}
            <div className="flex gap-2 pt-2">
              {github && (
                <Button variant="outline" size="sm" asChild>
                  <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              )}
              {live && (
                <Button size="sm" asChild>
                  <a href={live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectModal;


