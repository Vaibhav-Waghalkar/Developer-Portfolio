import { Navigation } from '@/components/Navigation';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { CodeWindow } from '@/components/CodeWindow';
import heroImage from '@/assets/hero-terminator-split.jpg';

const Index = () => {
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
            <div className="space-y-8 animate-fade-in-left">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-developer tracking-tight">
                  developer
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
            <div className="space-y-8 animate-fade-in-right lg:order-last order-first">
              <div className="space-y-4 lg:text-right">
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-ai tracking-tight">
                  ai engineer
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
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative group">
            <div className="w-32 h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full overflow-hidden border-4 border-background shadow-elegant">
              <img 
                src={heroImage} 
                alt="Split face - Human and Terminator"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            {/* Glowing effects */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-l from-ai/20 to-developer/20 animate-glow-pulse"></div>
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-developer/10 via-transparent to-ai/10 blur-xl animate-glow-pulse"></div>
          </div>
        </div>

        <ScrollIndicator />
      </section>

    </div>
  );
};

export default Index;
