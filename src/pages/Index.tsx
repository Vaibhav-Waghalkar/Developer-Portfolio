import React from 'react';
import { Navigation } from '@/components/Navigation';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { CodeWindow } from '@/components/CodeWindow';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import profileMiddle from '@/assets/Profile 5.png';

const Index = () => {
  // Smooth scroll to #about when user scrolls down from the very top
  // and ensure it only triggers once per interaction
  React.useEffect(() => {
    let isAnimating = false;
    let wheelTimeout: number | undefined;

    const handleWheel = (event: WheelEvent) => {
      if (isAnimating) return;
      if (window.scrollY !== 0) return;
      if (event.deltaY <= 0) return;

      event.preventDefault();

      const aboutEl = document.getElementById('about');
      if (!aboutEl) return;

      isAnimating = true;
      aboutEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Reset the flag after the animation roughly completes
      window.clearTimeout(wheelTimeout);
      wheelTimeout = window.setTimeout(() => {
        isAnimating = false;
      }, 900);
    };

    // Use passive: false so we can call preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel as EventListener);
      window.clearTimeout(wheelTimeout);
    };
  }, []);

  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background font-plus-jakarta">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-split opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20">
            
            {/* Left Side - Developer */}
            <div className="space-y-8 animate-fade-in-left pr-16 md:pr-24 lg:pr-32 xl:pr-40 2xl:pr-48 relative z-30">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-developer tracking-tight leading-tight">
                  <span className="block">Full Stack</span>
                  <span className="block">Web - Developer</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-lg">
                  Full stack developer with expertise in React, Node.js, and modern web technologies.
                </p>
              </div>
              
              {/* Floating Code Window */}
              <div className="relative animate-float">
                <CodeWindow 
                  title="index.html" 
                  className="w-full max-w-md shadow-developer border-developer/20"
                >
                  <div className="space-y-1">
                    <div className="text-blue-400">&lt;html&gt;</div>
                    <div className="text-blue-400 ml-2">&lt;body&gt;</div>
                    <div className="text-blue-400 ml-4">&lt;h1&gt;<span className="text-green-400">Hello World</span>&lt;/h1&gt;</div>
                    <div className="text-blue-400 ml-2">&lt;/body&gt;</div>
                    <div className="text-blue-400">&lt;/html&gt;</div>
                  </div>
                </CodeWindow>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-developer rounded-full animate-glow-pulse"></div>
              </div>
            </div>

            {/* Right Side - AI Engineer */}
            <div className="space-y-8 animate-fade-in-right lg:order-last order-first pl-16 md:pl-24 lg:pl-32 xl:pl-40 2xl:pl-48 relative z-30">
              <div className="space-y-4 lg:text-right">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-ai tracking-tight whitespace-nowrap">
                  AI - Developer
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-lg lg:ml-auto">
                  Builds intelligent systems using LLMs, neural networks, and prompt engineering.
                </p>
              </div>
              
              {/* Floating Code Window */}
              <div className="relative animate-float lg:ml-auto" style={{ animationDelay: '1s' }}>
                <CodeWindow 
                  title="ai_model.py" 
                  className="w-full max-w-md shadow-ai border-ai/20"
                >
                  <div className="space-y-1">
                    <div><span className="text-purple-400">from</span> <span className="text-blue-400">transformers</span> <span className="text-purple-400">import</span> <span className="text-green-400">GPT</span></div>
                    <div><span className="text-green-400">model</span> <span className="text-white">=</span> <span className="text-green-400">GPT</span><span className="text-white">.</span><span className="text-blue-400">from_pretrained</span><span className="text-white">()</span></div>
                    <div><span className="text-green-400">model</span><span className="text-white">.</span><span className="text-blue-400">generate</span><span className="text-white">(</span><span className="text-yellow-400">"Hello AI"</span><span className="text-white">)</span></div>
                  </div>
                </CodeWindow>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-ai rounded-full animate-glow-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Central Hero Image */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="relative group">
            <div className="w-32 h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full overflow-hidden border-4 border-background shadow-elegant">
              <img 
                src={profileMiddle} 
                alt="Profile photo"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 cursor-zoom-in pointer-events-auto"
                onClick={() => setIsLightboxOpen(true)}
              />
            </div>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Lightbox for profile image */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center transition-opacity duration-200"
          onClick={() => setIsLightboxOpen(false)}
          aria-label="Close image lightbox"
        >
          <img
            src={profileMiddle}
            alt="Profile large"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* About Section (formerly separate page) */}
      <main id="about" className="container mx-auto px-4 pt-24 pb-12">
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
                {[
                  'Python', 'C', 'C++', 'JavaScript', 'React', 'Next.js', 'TailwindCSS',
                  'FastAPI', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Docker', 
                  'GitHub', 'LLMs', 'Deep Learning', 'Transformers', 'DSA'
                ].map((skill) => (
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
                  {[
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
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        {index < 3 && (
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
                  {['English', 'Hindi', 'Marathi', 'German'].map((language) => (
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

export default Index;
