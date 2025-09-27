import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const Resume = () => {
  const experiences = [
    { 
      title: "Trainee AI Full Stack Developer", 
      company: "Real IT Solutions, Pune", 
      duration: "Aug 2025 - Present", 
      description: [
        "Built and maintained full-stack applications using Angular, Spring Boot, React, Python, and FastAPI.", 
        "Developed an AI-powered IDE with intelligent code assistance and a dynamic Website Builder platform."
      ] 
    },
    { 
      title: "Event Coordinator & Website Developer", 
      company: "ByteFest 2K25", 
      duration: "May 2025 - Aug 2025", 
      description: [
        "Led the design and development of the official college tech fest website.", 
        "Coordinated key events, including a Hackathon, and managed all participant data and registrations."
      ] 
    },
    { 
      title: "Web Developer Intern", 
      company: "Curosoft Technology", 
      duration: "May 2025 - Jun 2025", 
      description: [
        "Developed fully responsive websites from scratch and authored key technical documents (SRS, Design Docs).", 
        "Gained hands-on experience in client requirements analysis, UI/UX design, and code optimization."
      ] 
    }
  ];

  const education = [
    { 
      institution: "M.B.E. Society's College of Engineering, Ambajogai", 
      degree: "B.Tech, Computer Science & Engineering", 
      duration: "2022 - 2026"
    },
    {
      institution: "MHT-CET",
      degree: "MHT-CET Percentile",
      duration: "2022",
      grade: "87.40%"
    }
  ];

  const skills = {
    "Languages": ["Python", "C++", "C", "JavaScript"], 
    "Frontend": ["React", "Next.js", "HTML", "CSS", "TailwindCSS"], 
    "Backend & APIs": ["FastAPI", "Node.js", "Express.js"], 
    "Databases & Tools": ["MongoDB", "MySQL", "Docker", "GitHub"], 
    "AI & ML": ["Artificial Intelligence", "LLMOPS", "Transformers"] 
  };

  return (
    <div className="min-h-screen bg-background font-plus-jakarta">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Header with Download Button */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-developer to-ai bg-clip-text text-transparent">
              Vaibhav Waghalkar
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              CSE Student | AI Developer | Full-Stack Web Developer | Builder of Ideas & Innovations
            </p>
            <Button size="lg" className="mb-8">
              <Download className="h-5 w-5 mr-2" />
              <a href="/VaibhavWaghalkar_InternshalaResume.pdf" download>
                Download Resume PDF
              </a>
            </Button>
          </div>

          {/* Contact Information */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href="mailto:vaibhavwaghalkar2@gmail.com" className="hover:text-primary transition-colors">
                      vaibhavwaghalkar2@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Ambajogai, Maharashtra, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-4 w-4 text-muted-foreground" />
                  <a href="https://github.com/Vaibhav-Waghalkar" className="hover:text-primary transition-colors">
                    github.com/Vaibhav-Waghalkar
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 text-muted-foreground" />
                  <a href="https://www.linkedin.com/in/vaibhav-waghalkar-848885343" className="hover:text-primary transition-colors">
                      LinkedIn Profile
                    </a>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="h-4 w-4 text-muted-foreground" />
                  <a href="https://www.instagram.com/waghalkar.vaibhav/" className="hover:text-primary transition-colors">
                    @waghalkar.vaibhav
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Computer Science Engineering student passionate about AI, ML, and scalable web systems. 
                Currently building ARIS, an advanced AI-powered assistant with chat, voice, and automation capabilities. 
                I love solving problems, building products, and optimizing systems with a dream to shape the future 
                through AI-powered and full-stack innovations.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 italic">
                "Code with purpose. Learn with passion. Deliver with pride."
              </p>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.duration}</p>
                    <ul className="space-y-2">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 border-b-2 border-gray-700 pb-2 mb-4">
              Education
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white">
                B.Tech, Computer Science & Engineering
              </h3>
              <p className="text-gray-400">
                M.B.E. Society's College of Engineering, Ambajogai
              </p>
              <p className="text-gray-500 italic">2022 - 2026</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Senior Secondary (XII), Science
              </h3>
              <p className="text-gray-400">
                Yogeshwari Mahavidhyalay Ambajogai
              </p>
              <p className="font-semibold text-gray-300 mt-1">
                MHT-CET Percentile: 87.40%
              </p>
            </div>
          </div>

              {/* Skills */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
              <div className="space-y-6">
                    {Object.entries(skills).map(([category, skillList]) => (
                      <div key={category}>
                    <h3 className="text-lg font-semibold mb-3 text-primary">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

          {/* Key Projects */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Key Projects</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-bold text-foreground">ARIS (Advanced Responsive Intelligent System)</h3>
                  <p className="text-muted-foreground">AI-powered assistant with ChatGPT-style interface, voice/text input, system automation, and support for multiple LLMs.</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">Python</Badge>
                    <Badge variant="outline" className="text-xs">FastAPI</Badge>
                    <Badge variant="outline" className="text-xs">Ollama</Badge>
                    <Badge variant="outline" className="text-xs">AI/ML</Badge>
                  </div>
            </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-bold text-foreground">AI Creation Platform (Hackathon)</h3>
                  <p className="text-muted-foreground">Multi-bot AI platform with RAG and personality-aware bots, built for Google Gen AI Hackathon.</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">Python</Badge>
                    <Badge variant="outline" className="text-xs">GenAI</Badge>
                    <Badge variant="outline" className="text-xs">RAG</Badge>
                          </div>
                        </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-bold text-foreground">ByteFest 2K25 Website</h3>
                  <p className="text-muted-foreground">Official web platform for college tech fest with event listings, user registration, and real-time updates.</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">HTML</Badge>
                    <Badge variant="outline" className="text-xs">CSS</Badge>
                    <Badge variant="outline" className="text-xs">JavaScript</Badge>
                  </div>
                        </div>
                  </div>
                </CardContent>
              </Card>

          {/* Certifications */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Certifications</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Problem Solving Certificate - HackerRank (Mar 2025)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Software Engineer Intern - HackerRank Campus Club, AUFS (Mar 2025)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Certificate of Appreciation – ByteFest 2K25 - M.B.E. Society's College of Engineering (Jun 2025)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Jr. Web Developer - CuroSoft (May 2025)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>CET Cell Internship - Server Manager - EduSpark International Pvt. Ltd. (Mar 2025)</span>
                </li>
              </ul>
                </CardContent>
              </Card>
        </div>
      </main>
    </div>
  );
};

export default Resume;