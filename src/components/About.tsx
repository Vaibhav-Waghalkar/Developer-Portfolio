import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { aboutMe } from '@/data';
import FadeIn from './FadeIn';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.section 
      id="about" 
      className={`py-16 bg-muted/30 ${inView ? 'reveal-active' : 'reveal-init'}`}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <FadeIn>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-developer to-ai bg-clip-text text-transparent">
                Who I Am
              </h1>
            </FadeIn>
            
            {/* Headline */}
            <FadeIn delay={0.2}>
              <div className="mb-6">
                <Badge variant="outline" className="text-lg px-6 py-2 border-primary/30 text-primary">
                  CSE Student | AI Developer | Full-Stack Web Developer | AI-Powered Web Applications
                </Badge>
              </div>
            </FadeIn>
            
            {/* Summary */}
            <FadeIn delay={0.4}>
              <p className="text-lg text-gray-300 max-w-4xl text-center whoami-paragraph">
                {aboutMe.description}
              </p>
            </FadeIn>
            
            {/* Motto */}
            <FadeIn delay={0.6}>
              <Card className="max-w-2xl mx-auto bg-gradient-to-r from-developer/5 to-ai/5 border-developer/20 my-8 quote-card">
                <CardContent className="p-6">
                  <blockquote className="text-lg font-medium text-foreground italic text-center">
                    "Code with purpose. Learn with passion. Deliver with pride."
                  </blockquote>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* Key Highlights */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
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
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-developer/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">CSE Student</h3>
                  <p className="text-sm text-muted-foreground">
                    Pursuing B.Tech in Computer Science with focus on AI and Full-Stack Development
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-ai/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">AI Developer</h3>
                  <p className="text-sm text-muted-foreground">
                    Building intelligent systems with LLMs, neural networks, and automation
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Full-Stack Developer</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating end-to-end solutions with modern web technologies
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Currently Working On Section */}
          <section id="working-on" className="py-20">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">
                Currently <span className="text-cyan-400">Working On</span>
              </h2>
            </FadeIn>
            <motion.div 
              className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "AI-Integrated IDE",
                  description: [
                    "Building a browser-based IDE with features like code editing, execution, and file management.",
                    "Backend uses FastAPI for secure code execution, with a React.js frontend for a real-time interface.",
                    "Includes syntax highlighting, multi-language support, and project storage.",
                  ],
                  tags: ["React.js", "FastAPI", "Python", "AI Integration"],
                },
                {
                  title: "Website Builder Platform",
                  description: [
                    "Developing a drag-and-drop builder for creating responsive websites without code.",
                    "FastAPI backend for dynamic content management, authentication, and database handling.",
                    "React.js frontend with reusable components and a live preview feature.",
                  ],
                  tags: ["React.js", "FastAPI", "Python", "Drag-and-Drop"],
                },
              ].map((project, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-900 border border-gray-700 rounded-lg p-6"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
