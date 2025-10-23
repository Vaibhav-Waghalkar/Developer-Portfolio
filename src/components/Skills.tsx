import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FadeIn from './FadeIn';

const Skills = () => {
  const skills = {
    "Languages": ["Python", "C++", "C", "JavaScript"],
    "Frontend": ["React", "Next.js", "HTML", "CSS", "TailwindCSS"],
    "Backend & APIs": ["FastAPI", "Node.js", "Express.js", "Flask"],
    "Databases": ["MongoDB", "MySQL"],
    "AI & ML": ["Artificial Intelligence", "LLMOPS", "Transformers", "Deep Learning"],
    "Tools & More": ["Docker", "GitHub", "Data Structures", "Event Management"]
  };

  const skillCategories = Object.entries(skills);

  return (
    <motion.section 
      className="py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-developer to-ai bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies and tools I work with to build innovative solutions
            </p>
          </FadeIn>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map(([category, skillList], categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center text-primary">
                    {category}
                  </h3>
                  <motion.div 
                    className="flex flex-wrap gap-2 justify-center"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {skillList.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 },
                        }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-sm px-3 py-1 hover:bg-primary/10 transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Summary */}
        <FadeIn delay={0.4}>
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-developer/5 to-ai/5 border-developer/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Core Competencies
                </h3>
                <motion.div 
                  className="flex flex-wrap gap-3 justify-center"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    "Full-Stack Development", "AI/ML Implementation", "System Architecture", 
                    "Problem Solving", "Team Collaboration", "Project Management", 
                    "Technical Documentation", "Code Optimization"
                  ].map((competency, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <Badge 
                        variant="outline" 
                        className="text-sm px-4 py-2 border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                      >
                        {competency}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </motion.section>
  );
};

export default Skills;
