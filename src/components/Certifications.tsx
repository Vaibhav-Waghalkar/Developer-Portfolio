import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, Building } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Problem Solving Certificate",
      issuer: "HackerRank",
      date: "March 2025",
      type: "skill"
    },
    {
      title: "Software Engineer Intern",
      issuer: "HackerRank Campus Club, AUFS",
      date: "March 2025",
      type: "internship"
    },
    {
      title: "Certificate of Appreciation – ByteFest 2K25",
      issuer: "M.B.E. Society's College of Engineering",
      date: "June 2025",
      type: "achievement"
    },
    {
      title: "Jr. Web Developer",
      issuer: "CuroSoft",
      date: "May 2025",
      type: "professional"
    },
    {
      title: "CET Cell Internship - Server Manager",
      issuer: "EduSpark International Pvt. Ltd.",
      date: "March 2025",
      type: "internship"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'skill':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'internship':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'achievement':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'professional':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'skill':
        return '🎯';
      case 'internship':
        return '💼';
      case 'achievement':
        return '🏆';
      case 'professional':
        return '👨‍💻';
      default:
        return '📜';
    }
  };

  return (
    <motion.section 
      className="py-16 bg-muted/30"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-developer to-ai bg-clip-text text-transparent">
            Licenses & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and achievements that validate my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">
                    {getTypeIcon(cert.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Building className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">{cert.date}</p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getTypeColor(cert.type)}`}
                    >
                      {cert.type.charAt(0).toUpperCase() + cert.type.slice(1)}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-developer/5 to-ai/5 border-developer/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
                Certification Summary
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <p className="text-muted-foreground">Total Certifications</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <p className="text-muted-foreground">Internships</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <p className="text-muted-foreground">Professional</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <p className="text-muted-foreground">Achievement</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
