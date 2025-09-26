import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Resume = () => {
  const experience = [
    {
      year: '2024-Present',
      company: 'Personal Projects',
      role: 'AI Developer & Full-Stack Engineer',
      description: 'Building ARIS AI Assistant and various full-stack applications with modern technologies',
      skills: ['Python', 'FastAPI', 'React', 'AI/ML', 'LLMs']
    },
    {
      year: '2024',
      company: 'Google Gen AI Hackathon',
      role: 'AI Platform Developer',
      description: 'Developed multi-bot AI platform with RAG and personality-aware bots',
      skills: ['Python', 'AI/ML', 'RAG', 'Hackathon Winner']
    },
    {
      year: '2024',
      company: 'ByteFest2K25',
      role: 'Lead Developer',
      description: 'Full-stack web platform for college tech fest with real-time features',
      skills: ['React', 'Node.js', 'MongoDB', 'Real-time Systems']
    }
  ];

  const education = [
    {
      year: '2023-2027',
      institution: 'College/University',
      degree: 'B.Tech in Computer Science Engineering',
      description: 'Pursuing Bachelor of Technology with specialization in AI, ML, and scalable web systems'
    }
  ];

  const skills = {
    'Languages': ['Python', 'C', 'C++', 'JavaScript'],
    'Frontend': ['React', 'Next.js', 'TailwindCSS', 'HTML', 'CSS'],
    'Backend': ['FastAPI', 'Node.js', 'Express.js'],
    'AI/ML': ['LLMs', 'Deep Learning', 'Transformers', 'Neural Networks'],
    'Databases': ['MongoDB', 'MySQL'],
    'Tools': ['Docker', 'GitHub', 'Git', 'WebSockets']
  };

  const certifications = [
    'Google Gen AI International Hackathon Participant',
    'Full Stack Web Development',
    'AI and Machine Learning Fundamentals',
    'Data Structures and Algorithms'
  ];

  return (
    <div className="min-h-screen bg-background font-plus-jakarta">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-developer to-ai bg-clip-text text-transparent">
              Resume
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              CSE Student | AI Developer | Full-Stack Web Developer | Builder of Ideas & Innovations
            </p>
            <Button size="lg" className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Download className="h-5 w-5 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Contact & Skills */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card className="animate-fade-in-left">
                <CardHeader>
                  <CardTitle>Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href="mailto:vaibhavwaghalkar2@gmail.com" className="text-sm hover:text-primary transition-colors">
                      vaibhavwaghalkar2@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-4 w-4 text-muted-foreground" />
                    <a href="https://github.com/Vaibhav-Waghalkar" className="text-sm hover:text-primary transition-colors">
                      GitHub Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 text-muted-foreground" />
                    <a href="https://www.linkedin.com/in/vaibhav-waghalkar-848885343" className="text-sm hover:text-primary transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="animate-fade-in-left" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(skills).map(([category, skillList]) => (
                      <div key={category}>
                        <h4 className="font-semibold text-sm mb-2">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skillList.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {certifications.map((cert) => (
                      <div key={cert} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Experience & Education */}
            <div className="lg:col-span-2 space-y-6">
              {/* Experience */}
              <Card className="animate-fade-in-right">
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                          {index < experience.length - 1 && (
                            <div className="w-px h-16 bg-border mt-2"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-primary font-semibold">{exp.year}</div>
                          <div className="font-semibold text-lg">{exp.role}</div>
                          <div className="text-muted-foreground font-medium">{exp.company}</div>
                          <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {exp.skills.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="animate-fade-in-right" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-primary font-semibold">{edu.year}</div>
                          <div className="font-semibold text-lg">{edu.degree}</div>
                          <div className="text-muted-foreground font-medium">{edu.institution}</div>
                          <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle>Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {['English', 'Hindi', 'Marathi', 'German'].map((language) => (
                      <div key={language} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="font-medium">{language}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;