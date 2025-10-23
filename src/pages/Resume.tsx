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
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 shadow-lg">
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Vaibhav Waghalkar</h1>
            <div className="mt-4 flex justify-center items-center flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />Maharashtra, India</span>
              <span className="flex items-center gap-2"><Phone className="h-4 w-4" />+91 9356630640</span>
              <span className="flex items-center gap-2"><Mail className="h-4 w-4" /><a href="mailto:vaibhavwaghalkar2@gmail.com" className="text-blue-600 hover:underline">vaibhavwaghalkar2@gmail.com</a></span>
              <span className="flex items-center gap-2"><Linkedin className="h-4 w-4" /><a href="https://linkedin.com/in/vaibhav-waghalkar" target="_blank" className="text-blue-600 hover:underline">linkedin.com/in/vaibhav-waghalkar</a></span>
              <span className="flex items-center gap-2"><Github className="h-4 w-4" /><a href="https://github.com/Vaibhav-Waghalkar" target="_blank" className="text-blue-600 hover:underline">github.com/Vaibhav-Waghalkar</a></span>
            </div>
          </header>

          <section>
            <h2 className="uppercase tracking-wider text-gray-900 font-semibold text-lg border-b border-gray-300 pb-2 mb-4">Professional Summary</h2>
            <p className="text-gray-700">A results-driven Full Stack & AI Developer with proven experience building end-to-end digital solutions. Skilled in creating dynamic web applications with React and Python/FastAPI, and integrating Machine Learning models and LLMs to produce intelligent, user-centric products. Eager to apply technical expertise and leadership skills to deliver innovative and impactful software.</p>
          </section>

          <hr className="my-6" />

          <section>
            <h2 className="uppercase tracking-wider text-gray-900 font-semibold text-lg border-b border-gray-300 pb-2 mb-4">Highlights & Achievements</h2>
            <ul className="list-disc text-gray-700 pl-5 space-y-2">
              <li><span className="font-semibold">Technical & Management Lead (ByteFest 2K25):</span> Spearheaded website development, data management for 15+ events, and coordination for the festival's flagship Hackathon.</li>
              <li><span className="font-semibold">AI Platform Development:</span> Architected and constructed multiple full-stack AI applications, including an intelligent IDE and a dynamic website builder, from concept to deployment.</li>
              <li><span className="font-semibold">High-Availability System Management:</span> Maintained 99.9% server uptime for 500+ concurrent users during high-stakes live examination sessions.</li>
            </ul>
          </section>

          <hr className="my-6" />

          <section>
            <h2 className="uppercase tracking-wider text-gray-900 font-semibold text-lg border-b border-gray-300 pb-2 mb-4">Experience</h2>
            <div className="space-y-6">
              <div>
                <p className="text-gray-900 font-semibold">AI Full-stack Developer (Intern)</p>
                <p className="italic text-gray-600">Real IT Solutions, Pune | Aug 2025 – Present (Virtual)</p>
                <ul className="list-disc text-gray-700 pl-5 mt-2 space-y-1">
                  <li>Constructed two AI-powered full-stack applications, building <span className="font-semibold">55+ </span>API endpoints with Python and FastAPI.</li>
                  <li>Key projects included an intelligent IDE with smart-assistance features and a dynamic Website Builder with 10+ templates.</li>
                </ul>
                <p className="mt-2 text-sm text-gray-700"><span className="font-semibold">Tech Stack:</span> Python, FastAPI, React, Next.js, Machine Learning, NLP, PostgreSQL, Redis</p>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Jr. Web Developer (Intern)</p>
                <p className="italic text-gray-600">Curosoft, Sambhajinagar | May 2025 – Jun 2025</p>
                <ul className="list-disc text-gray-700 pl-5 mt-2 space-y-1">
                  <li>Launched <span className="font-semibold">3</span> responsive client websites, improving average page load speed by <span className="font-semibold">30%</span> through code optimization.</li>
                  <li>Contributed to the full project lifecycle for <span className="font-semibold">2</span> live projects, from requirements analysis to creating <span className="font-semibold">5+</span> technical documents (SRS).</li>
                </ul>
                <p className="mt-2 text-sm text-gray-700"><span className="font-semibold">Tech Stack:</span> HTML, CSS, JavaScript, Git</p>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Server Manager</p>
                <p className="italic text-gray-600">Eduspark International Pvt. Ltd., Parbhani | Mar 2025 – May 2025</p>
                <ul className="list-disc text-gray-700 pl-5 mt-2 space-y-1">
                  <li>Oversaw live CET exam servers for <span className="font-semibold">500+</span> concurrent users, maintaining <span className="font-semibold">99.9%</span> uptime across <span className="font-semibold">35+</span> exam sessions.</li>
                  <li>Resolved all real-time technical and network issues, ensuring <span className="font-semibold">100%</span> data integrity and zero disruptions for candidates.</li>
                </ul>
                <p className="mt-2 text-sm text-gray-700"><span className="font-semibold">Tech Stack:</span> Network Monitoring Tools, Backup & Recovery Systems, Windows Server</p>
              </div>
            </div>
          </section>

          <hr className="my-6" />

          <section>
            <h2 className="uppercase tracking-wider text-gray-900 font-semibold text-lg border-b border-gray-300 pb-2 mb-4">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
              <div><span className="font-semibold">Programming Languages:</span> Python, JavaScript, C++, C</div>
              <div><span className="font-semibold">Web Development:</span> React, Next.js, FastAPI, Flask, HTML, CSS</div>
              <div><span className="font-semibold">AI / Machine Learning:</span> LLMs (Ollama), NLP, Machine Learning, Prompt Engineering, RAG</div>
              <div><span className="font-semibold">Tools & Technologies:</span> Git, GitHub, Redis, PostgreSQL, Docker, VS Code, Postman</div>
              <div><span className="font-semibold">Core Concepts:</span> Data Structures & Algorithms, Object-Oriented Programming</div>
            </div>
          </section>

          <hr className="my-6" />

          <section>
            <h2 className="uppercase tracking-wider text-gray-900 font-semibold text-lg border-b border-gray-300 pb-2 mb-4">Projects</h2>
            <div className="space-y-6">
              <div>
                <p className="font-semibold">CodeCraft - AI Website Builder Platform <a href="https://github.com/Vaibhav-Waghalkar/CodeCraft" target="_blank" className="text-blue-600 hover:underline">GitHub Link</a></p>
                <ul className="list-disc text-gray-700 pl-5 mt-2 space-y-1">
                  <li>Architected a full-stack website builder with <span className="font-semibold">40+</span> RESTful API endpoints for AI content generation and user management.</li>
                  <li>Created a responsive front-end with React and Next.js, featuring a library of <span className="font-semibold">30+</span> reusable components.</li>
                  <li>Improved average API response time by <span className="font-semibold">40%</span> by implementing Redis caching for database queries.</li>
                </ul>
                <p className="mt-2 text-sm text-gray-700"><span className="font-semibold">Tech Stack:</span> React, Next.js, Python, FastAPI, PostgreSQL, Redis, JWT Authentication</p>
              </div>
              <div>
                <p className="font-semibold">ARIS - Advanced Responsive Intelligent System <a href="https://github.com/Vaibhav-Waghalkar/ARIS-AI_Assistant" target="_blank" className="text-blue-600 hover:underline">GitHub Link</a></p>
                <ul className="list-disc text-gray-700 pl-5 mt-2 space-y-1">
                  <li>Built a Siri-like AI assistant with a web interface for real-time voice and text conversations.</li>
                  <li>Integrated <span className="font-semibold">Ollama</span> to run a local LLM, enabling offline AI capabilities like content generation and system automation.</li>
                  <li>Implemented hands-free wake-word activation for tasks like opening apps and exporting text to Word.</li>
                </ul>
                <p className="mt-2 text-sm text-gray-700"><span className="font-semibold">Tech Stack:</span> Python, FastAPI, JavaScript, HTML/CSS, Ollama, NLP</p>
              </div>
              <div>
                <p className="font-semibold">AI-Powered IDE</p>
                <ul className="list-disc text-gray-700 pl-5 mt-2 space-y-1">
                  <li>Assembled a full-stack, intelligent IDE to enhance developer productivity by integrating AI-driven features.</li>
                  <li>Constructed the backend using Python & FastAPI, creating scalable REST APIs for real-time code suggestions and error detection.</li>
                  <li>Planned a modular architecture to support multiple programming languages and ensure high performance.</li>
                </ul>
                <p className="mt-2 text-sm text-gray-700"><span className="font-semibold">Tech Stack:</span> Python, FastAPI, React, JavaScript, HTML/CSS</p>
              </div>
              <div>
                <p className="font-semibold">Vibe Workspace (Gen AI 2025 Hackathon) <a href="https://github.com/manavgt54/CHATBOT-CREATOR-AND-PRODUCTIVITY-VIBE-WORKSPACE" target="_blank" className="text-blue-600 hover:underline">GitHub Contribution</a></p>
                <ul className="list-disc text-gray-700 pl-5 mt-2 space-y-1">
                  <li>Contributed to a Gen AI hackathon project, implementing features for a multi-functional productivity workspace.</li>
                  <li>Focused on the core logic for a dynamic, no-code chatbot creator within the platform.</li>
                </ul>
                <p className="mt-2 text-sm text-gray-700"><span className="font-semibold">Tech Stack:</span> React, Node.js, Express, MongoDB</p>
              </div>
              <div>
                <p className="font-semibold">ByteFest 2K25 - Official Tech Fest Website <a href="https://bytefest2k25.netlify.app/" target="_blank" className="text-blue-600 hover:underline">Live Site</a></p>
                <ul className="list-disc text-gray-700 pl-5 mt-2 space-y-1">
                  <li>Produced the official website for the ByteFest 2K25 college tech fest.</li>
                  <li>Fashioned a visually appealing and fully responsive UI using HTML, CSS, and JavaScript.</li>
                  <li>Deployed and hosted the live website efficiently using GitHub Pages.</li>
                </ul>
                <p className="mt-2 text-sm text-gray-700"><span className="font-semibold">Tech Stack:</span> HTML, CSS, JavaScript, GitHub Pages</p>
              </div>
            </div>
          </section>

          <hr className="my-6" />

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="uppercase tracking-wider text-gray-900 font-semibold text-lg border-b border-gray-300 pb-2 mb-4">Certifications</h2>
              <ul className="text-gray-700 space-y-2">
                <li>Problem Solving (Basic) - HackerRank</li>
                <li>Software Engineer Intern - HackerRank</li>
              </ul>
            </div>
            <div>
              <h2 className="uppercase tracking-wider text-gray-900 font-semibold text-lg border-b border-gray-300 pb-2 mb-4">Languages</h2>
              <ul className="text-gray-700 space-y-2">
                <li><span className="font-semibold">English:</span> Professional Working Proficiency</li>
                <li><span className="font-semibold">Hindi:</span> Native Proficiency</li>
                <li><span className="font-semibold">Marathi:</span> Native Proficiency</li>
                <li><span className="font-semibold">German:</span> Elementary Proficiency</li>
              </ul>
            </div>
            <div>
              <h2 className="uppercase tracking-wider text-gray-900 font-semibold text-lg border-b border-gray-300 pb-2 mb-4">Education</h2>
              <div className="text-gray-700">
                <p className="font-semibold">B.Tech, Computer Science & Engineering</p>
                <p>M.B.E. Society's College Of Engineering, Ambajogai</p>
                <p className="text-sm">Expected 2026</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Resume;