import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [filter, setFilter] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'Building ARIS: My Journey Creating an AI Assistant',
      description: 'Deep dive into developing a ChatGPT-style AI assistant with voice automation and system integration.',
      content: 'In this post, I share my experience building ARIS, an advanced AI assistant that combines the power of large language models with voice recognition and system automation...',
      category: 'AI',
      date: '2024-12-15',
      readTime: '8 min read',
      tags: ['AI', 'Python', 'FastAPI', 'LLMs']
    },
    {
      id: 2,
      title: 'Deep Learning with Transformers: A Practical Guide',
      description: 'Understanding the architecture and implementation of transformer models for various AI applications.',
      content: 'Transformers have revolutionized the field of artificial intelligence. In this comprehensive guide, I explore the architecture, implementation details, and practical applications...',
      category: 'AI',
      date: '2024-12-10',
      readTime: '12 min read',
      tags: ['Deep Learning', 'Transformers', 'Neural Networks', 'AI']
    },
    {
      id: 3,
      title: 'Full-Stack Development: ByteFest2K25 Case Study',
      description: 'How I built a complete event management platform with real-time features and modern web technologies.',
      content: 'ByteFest2K25 was a challenging project that pushed me to implement real-time features, user management, and a responsive design. Here\'s how I approached it...',
      category: 'Web Development',
      date: '2024-12-05',
      readTime: '10 min read',
      tags: ['React', 'Node.js', 'MongoDB', 'Full-Stack']
    },
    {
      id: 4,
      title: 'Prompt Engineering: Tips and Best Practices',
      description: 'Essential techniques for crafting effective prompts to get better results from language models.',
      content: 'Prompt engineering is both an art and a science. In this post, I share the techniques and strategies I\'ve learned while working with various LLMs...',
      category: 'AI',
      date: '2024-11-28',
      readTime: '6 min read',
      tags: ['Prompt Engineering', 'LLMs', 'AI', 'Best Practices']
    },
    {
      id: 5,
      title: 'DevOps Essentials: Docker and CI/CD Pipeline Setup',
      description: 'Setting up modern development workflows with containerization and continuous integration.',
      content: 'Modern software development requires robust DevOps practices. This guide covers Docker containerization and setting up CI/CD pipelines for seamless deployment...',
      category: 'DevOps',
      date: '2024-11-20',
      readTime: '15 min read',
      tags: ['Docker', 'CI/CD', 'DevOps', 'GitHub Actions']
    },
    {
      id: 6,
      title: 'Machine Learning Project: House Price Prediction',
      description: 'Building and optimizing a regression model for real estate price prediction using Python and Scikit-learn.',
      content: 'In this hands-on project, I walk through the complete machine learning pipeline for predicting house prices, from data preprocessing to model deployment...',
      category: 'Machine Learning',
      date: '2024-11-15',
      readTime: '9 min read',
      tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Data Science']
    }
  ];

  const categories = ['All', 'AI', 'Web Development', 'Machine Learning', 'DevOps'];

  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  return (
    <div className="min-h-screen bg-background font-plus-jakarta">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-developer to-ai bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights on AI development, full-stack engineering, and the latest in tech innovation
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="hover:shadow-elegant transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <Badge variant="secondary" className="shrink-0">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                  <CardDescription className="text-sm">{post.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full group">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="text-center mt-16 p-8 border border-dashed border-border rounded-lg">
            <h3 className="text-2xl font-bold mb-4">More Posts Coming Soon!</h3>
            <p className="text-muted-foreground">
              I'm constantly working on new projects and learning new technologies. 
              Stay tuned for more insights on AI development, full-stack engineering, and tech innovations.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;