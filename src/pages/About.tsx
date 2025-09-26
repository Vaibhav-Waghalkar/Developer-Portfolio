import { Navigation } from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    'Python', 'C', 'C++', 'JavaScript', 'React', 'Next.js', 'TailwindCSS',
    'FastAPI', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Docker', 
    'GitHub', 'LLMs', 'Deep Learning', 'Transformers', 'DSA'
  ];

  const timeline = [
    {
      year: '2024-Present',
      role: 'CSE Student',
      description: 'Pursuing B.Tech in Computer Science with focus on AI and Full-Stack Development',
      type: 'education'
    },
    {
      year: '2024',
      role: 'AI Assistant Developer',
      description: 'Building ARIS - Advanced Responsive Intelligent System with voice and automation features',
      type: 'project'
    },
    {
      year: '2024',
      role: 'Google Gen AI Hackathon',
      description: 'Developed multi-bot AI platform with RAG and personality-aware bots',
      type: 'achievement'
    },
    {
      year: '2024',
      role: 'ByteFest2K25 Developer',
      description: 'Full-stack web platform for college tech fest with real-time updates',
      type: 'project'
    }
  ];

  const languages = ['English', 'Hindi', 'Marathi', 'German'];

  return (
    <div className="min-h-screen bg-background font-plus-jakarta">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-developer to-ai bg-clip-text text-transparent">
              Who I Am
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              CSE Student passionate about AI, ML, and scalable web systems. Currently building ARIS – an advanced 
              AI-powered assistant with chat, voice, and automation capabilities. Love solving problems, building products, 
              and optimizing systems with a dream to shape the future through AI-powered innovations.
            </p>
          </div>

          {/* Skills Section */}
          <Card className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Technical Skills</h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="text-sm px-4 py-2 hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Timeline */}
            <Card className="animate-fade-in-left">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Experience</h2>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        {index < timeline.length - 1 && (
                          <div className="w-px h-16 bg-border mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-primary font-semibold">{item.year}</div>
                        <div className="font-semibold text-foreground">{item.role}</div>
                        <div className="text-muted-foreground">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="animate-fade-in-right">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Languages</h2>
                <div className="space-y-4">
                  {languages.map((language) => (
                    <div key={language} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">{language}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;