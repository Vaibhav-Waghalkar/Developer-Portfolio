import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-developer to-ai bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I work with to build innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(([category, skillList], categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center text-primary">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillList.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-sm px-3 py-1 hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-developer/5 to-ai/5 border-developer/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "Full-Stack Development", "AI/ML Implementation", "System Architecture", 
                  "Problem Solving", "Team Collaboration", "Project Management", 
                  "Technical Documentation", "Code Optimization"
                ].map((competency, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-sm px-4 py-2 border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                  >
                    {competency}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
