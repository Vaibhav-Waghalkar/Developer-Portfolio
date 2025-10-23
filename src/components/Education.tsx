import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology - B.Tech",
      field: "Computer Science",
      institution: "M.B.E. Society's College of Engineering, Ambajogai",
      duration: "2022 - 2026 (Expected)",
      grade: "7.67 CGPA",
      status: "current"
    },
    {
      degree: "Senior Secondary (XII)",
      field: "Science",
      institution: "Yogeshwari Mahavidhyalay, Ambajogai",
      duration: "2022",
      grade: "75.00%",
      status: "completed"
    },
    {
      degree: "Secondary (X)",
      field: "General",
      institution: "Yogeshwari Nutan Vidhyalay, Ambajogai",
      duration: "2020",
      grade: "87.00%",
      status: "completed"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-developer to-ai bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey in Computer Science and Engineering
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-developer to-ai hidden lg:block"></div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-background border-4 border-primary rounded-full z-10 flex-shrink-0">
                  <div className={`w-3 h-3 rounded-full ${
                    edu.status === 'current' ? 'bg-ai animate-pulse' : 'bg-primary'
                  }`}></div>
                </div>
                
                {/* Content */}
                <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                        <p className="text-lg text-primary font-semibold">{edu.field}</p>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <Badge 
                          variant={edu.status === 'current' ? 'default' : 'secondary'} 
                          className="w-fit"
                        >
                          {edu.duration}
                        </Badge>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-foreground">{edu.grade}</p>
                          {edu.status === 'current' && (
                            <p className="text-xs text-ai">Currently Pursuing</p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional info for current degree */}
                    {edu.status === 'current' && (
                      <div className="mt-4 p-4 bg-gradient-to-r from-developer/5 to-ai/5 rounded-lg border border-primary/20">
                        <h4 className="font-semibold text-foreground mb-2">Focus Areas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {["Artificial Intelligence", "Machine Learning", "Full-Stack Development", "Data Structures", "Algorithms"].map((focus, focusIndex) => (
                            <Badge key={focusIndex} variant="outline" className="text-xs">
                              {focus}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-developer/5 to-ai/5 border-developer/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
                Academic Highlights
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">7.67</div>
                  <p className="text-muted-foreground">Current CGPA</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2026</div>
                  <p className="text-muted-foreground">Expected Graduation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
