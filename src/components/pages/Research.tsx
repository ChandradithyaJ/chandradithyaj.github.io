import React from 'react';
import { ExternalLink, Calendar, Users, Award, Github, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const researchProjects = [
  {
    id: 1,
    title: "Advanced Machine Learning Applications in Climate Modeling",
    description: "Developed novel algorithms for predicting climate patterns using deep learning techniques. This research focuses on improving accuracy of long-term weather forecasting and understanding climate change impacts through advanced neural network architectures.",
    status: "Ongoing",
    year: "2024",
    collaborators: ["Dr. Jane Smith", "Prof. John Doe"],
    tags: ["Machine Learning", "Climate Science", "Python"],
    funding: "NSF Grant #1234567",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    github: "https://github.com/research/climate-ml",
    demo: "https://climate-predictor.demo.com"
  },
  {
    id: 2,
    title: "Quantum Computing Algorithms for Optimization Problems",
    description: "Research focused on developing quantum algorithms for complex optimization challenges. Exploring quantum advantage in solving NP-hard problems and implementing novel quantum circuit designs for practical applications.",
    status: "Completed",
    year: "2023",
    collaborators: ["Dr. Alice Johnson"],
    tags: ["Quantum Computing", "Optimization", "Algorithms"],
    funding: "University Research Grant",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    github: "https://github.com/research/quantum-opt"
  }
];

const fullStackProjects = [
  {
    id: 3,
    title: "Academic Collaboration Platform",
    description: "Full-stack web application for researchers to collaborate on projects, share resources, and manage publications. Built with React, Node.js, and PostgreSQL with real-time collaboration features.",
    status: "Completed",
    year: "2024",
    collaborators: ["Dev Team Alpha"],
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    funding: "Self-funded",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    github: "https://github.com/projects/academic-collab",
    demo: "https://academic-collab.com"
  },
  {
    id: 4,
    title: "Research Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex research datasets. Features dynamic charts, real-time data updates, and collaborative annotation tools for research teams.",
    status: "Ongoing",
    year: "2024",
    collaborators: ["UX Designer", "Data Scientist"],
    tags: ["D3.js", "React", "Python", "FastAPI"],
    funding: "University Grant",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
    github: "https://github.com/projects/data-viz",
    demo: "https://research-viz.demo.com"
  }
];

const otherProjects = [
  {
    id: 5,
    title: "Blockchain Applications in Academic Publishing",
    description: "Exploring decentralized systems for peer review and publication verification. Developing smart contracts for transparent academic publishing and citation tracking.",
    status: "Proposal Stage",
    year: "2024",
    collaborators: ["Prof. Bob Wilson", "Dr. Carol Brown"],
    tags: ["Blockchain", "Academic Publishing", "Solidity"],
    funding: "Pending",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    github: "https://github.com/research/blockchain-pub"
  },
  {
    id: 6,
    title: "Open Source Educational Tools",
    description: "Collection of open-source tools for educators and students. Includes interactive learning modules, assessment platforms, and collaboration tools for online education.",
    status: "Ongoing",
    year: "2023",
    collaborators: ["Education Team"],
    tags: ["Education", "Open Source", "React", "Python"],
    funding: "Community Supported",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    github: "https://github.com/projects/edu-tools",
    demo: "https://edu-tools.org"
  }
];

const publications = [
  {
    title: "Novel Deep Learning Approaches for Weather Prediction",
    journal: "Journal of Computational Science",
    year: "2023",
    authors: "Your Name, Dr. Jane Smith, Prof. John Doe",
    doi: "10.1000/journal.2023.123456"
  },
  {
    title: "Quantum Algorithm Optimization: A Comprehensive Review",
    journal: "Nature Quantum Information",
    year: "2022",
    authors: "Your Name, Dr. Alice Johnson",
    doi: "10.1000/nature.2022.654321"
  }
];

const ProjectCard = ({ project }: { project: any }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {/* Project Image */}
      <div className="md:col-span-1">
        <AspectRatio ratio={4/3}>
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg object-cover w-full h-full"
            loading="lazy"
          />
        </AspectRatio>
      </div>
      
      {/* Project Details */}
      <div className="md:col-span-2 space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <Badge variant={project.status === 'Ongoing' ? 'default' : project.status === 'Completed' ? 'secondary' : 'outline'}>
              {project.status}
            </Badge>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {project.year}
            </span>
          </div>
        </div>
        
        <CardDescription className="text-base">
          {project.description}
        </CardDescription>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>Collaborators: {project.collaborators.join(', ')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-muted-foreground" />
            <span>Funding: {project.funding}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          {project.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" />
                Code
              </a>
            </Button>
          )}
          {project.demo && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4 mr-1" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  </Card>
);

export const Research: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Research & Projects</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Exploring the frontiers of computational science, machine learning, and innovative technologies 
          to solve complex real-world problems and advance human knowledge.
        </p>
      </section>

      {/* Research Projects */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Research Projects</h2>
        <div className="space-y-6">
          {researchProjects
            .sort((a, b) => parseInt(b.year) - parseInt(a.year))
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </section>

      {/* Full-Stack Development */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Full-Stack Development</h2>
        <div className="space-y-6">
          {fullStackProjects
            .sort((a, b) => parseInt(b.year) - parseInt(a.year))
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </section>

      {/* Other Projects */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Other Projects</h2>
        <div className="space-y-6">
          {otherProjects
            .sort((a, b) => parseInt(b.year) - parseInt(a.year))
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </section>

      {/* Publications */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Recent Publications</h2>
        <div className="grid gap-4">
          {publications.map((pub, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground">{pub.authors}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm">
                      <span className="font-medium text-primary">{pub.journal}</span> • {pub.year}
                    </p>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      DOI: {pub.doi}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
