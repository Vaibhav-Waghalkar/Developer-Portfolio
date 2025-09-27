import React from 'react';
import { Navigation } from '@/components/Navigation';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { CodeWindow } from '@/components/CodeWindow';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { EducationTimeline } from '@/components/EducationTimeline';
import Certifications from '@/components/Certifications';
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
      <section className="relative min-h-screen overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-split opacity-50"></div>
        
        {/* Main responsive container */}
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-4 md:gap-8 lg:gap-12 px-4 pt-24 relative z-10">
          
          {/* Left Column - Full Stack Developer */}
          <div className="flex flex-col items-start w-full lg:w-1/3 max-w-lg gap-4 md:gap-6 animate-fade-in-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-cyan-400 tracking-tight leading-tight">
                <span className="block">Full-Stack Web</span>
                <span className="block">Developer</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-lg">
                Building scalable web applications with React, FastAPI, and modern technologies.
              </p>
            </div>
            
            {/* Floating Code Window */}
            <div className="relative animate-float w-full">
              <CodeWindow 
                title="index.html" 
                className="w-full max-w-md shadow-developer border-developer/20"
              >
                <div className="space-y-1">
                  <div className="text-gray-500">&lt;html&gt;</div>
                  <div className="text-gray-500 ml-2">&lt;body&gt;</div>
                  <div className="text-cyan-400 ml-4">&lt;h1&gt;Building the Web 🚀&lt;/h1&gt;</div>
                  <div className="text-cyan-400 ml-4">&lt;p&gt;Let's create something amazing together.&lt;/p&gt;</div>
                  <div className="text-gray-500 ml-2">&lt;/body&gt;</div>
                  <div className="text-gray-500">&lt;/html&gt;</div>
                </div>
              </CodeWindow>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-developer rounded-full animate-glow-pulse"></div>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex-shrink-0 relative group">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden border-4 border-background shadow-elegant">
              <img 
                src={profileMiddle} 
                alt="Profile photo"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 cursor-zoom-in pointer-events-auto"
                onClick={() => setIsLightboxOpen(true)}
              />
            </div>
          </div>

          {/* Right Column - AI Developer */}
          <div className="flex flex-col items-start w-full lg:w-1/3 max-w-lg gap-4 md:gap-6 animate-fade-in-right">
            <div className="space-y-4 text-left lg:text-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-purple-400 tracking-tight">
                <span className="block">AI</span>
                <span className="block">Developer</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-lg lg:ml-auto">
                Creating intelligent systems with neural networks, LLMs, and advanced automation.
              </p>
            </div>
            
            {/* Floating Code Window */}
            <div className="relative animate-float w-full lg:ml-auto" style={{ animationDelay: '1s' }}>
              <CodeWindow 
                title="ai_model.py" 
                className="w-full max-w-md shadow-ai border-ai/20"
              >
                <div className="space-y-1">
                  <div><span className="text-purple-400">from</span> <span className="text-white">transformers</span> <span className="text-purple-400">import</span> <span className="text-white">pipeline</span></div>
                  <div><span className="text-white">model</span> <span className="text-cyan-400">=</span> <span className="text-yellow-400">pipeline</span>(<span className="text-green-400">"text-generation"</span>, <span className="text-white">model</span><span className="text-cyan-400">=</span><span className="text-green-400">"gpt2"</span>)</div>
                  <div><span className="text-yellow-400">print</span>(<span className="text-white">model</span>(<span className="text-green-400">"Mission: Engineer intelligent solutions for a smarter future."</span>))</div>
                </div>
              </CodeWindow>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-ai rounded-full animate-glow-pulse"></div>
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

      {/* Main Content Sections */}
      <main className="pt-24">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <EducationTimeline />
        <Certifications />
      </main>

    </div>
  );
};

export default Index;
