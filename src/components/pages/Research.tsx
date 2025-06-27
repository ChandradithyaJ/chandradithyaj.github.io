import React from 'react';
import { ExternalLink, Calendar, Users, Award, Github, Globe, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const researchProjects = [
  {
    id: 1,
    title: "Risk-Sensitive Reinforcement Learning with Stochastic Approximation (not paper title; currently under review at NeurIPS 2025)",
    description: "Reinforcement learning can be made risk-aware by replacing the standard average-reward objective with an exponential-utility criterion that explicitly rewards or penalises variability. For this setting, we derive a non-linear Bellman operator, establish its contraction and uniqueness properties, and develop risk-sensitive policy-iteration grounded in these guarantees. We then develop two fully on-policy risk-sensitive actor-critic algorithms under linear function approximation, with theoretical finite-time convergence guarantees.",
    status: "Completed",
    year: "August 2024 - May 2025",
    collaborators: ["Namboori Nandhavardhan Chowdhary", "Dr. Ajin George Joseph"],
    tags: ["Reinforcement Learning", "Stochastic Approximation", "Risk-Sensitive Control"],
    // funding: "NSF Grant #1234567",
    image: "src/images/beyondexp.png",
    github: "https://github.com/ChandradithyaJ/Risk-Sensitive-RL",
    // demo: "https://climate-predictor.demo.com",
    // paper: "https://arxiv.org/abs/2024.climate.ml"
  },
  {
    id: 2,
    title: "Hierarchical Heterogeneous Graphs for Explainable Predictions",
    description: "We propose HierGraphs, a hierarchical, heterogenous graph representation of datasets which provide more explainable predictions, especially making use of precedents, i.e., previous similar situations.",
    status: "Ongoing",
    year: "May 2024 - July 2025",
    collaborators: ["Ambreesh Parthasarathy", "Bhaarath Karthikeyan", "Shubham Kashyapi", "Krithi Shailya", "Dr. Gokul S Krishnan", "Prof. Balaraman Ravindran"],
    tags: ["Graph Neural Networks", "Explainable AI for Graphs", "Large Language Models"],
    funding: "Robert Bosch Center for Data Science and Artificial Intelligence",
    image: "src/images/ExplanationGenerationMethodology.png",
    github: "https://github.com/umbreeze/LegalGraph",
    // paper: "https://arxiv.org/abs/2023.quantum.opt"
  }
];

const otherProjects = [
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
    demo: "https://academic-collab.com",
    paper: "https://docs.academic-collab.com/whitepaper"
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
    demo: "https://research-viz.demo.com",
    paper: "https://research-viz.demo.com/methodology"
  }
];

const ProjectCard = ({ project }: { project: any }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {/* Project Image */}
      <div className="md:col-span-1">
        <AspectRatio ratio={4 / 3}>
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
          {project.funding && (
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-muted-foreground" />
              <span>Funding: {project.funding}</span>
            </div>
          )}
        </div>

        <div className="flex gap-2 flex-wrap">
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
          {project.paper && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.paper} target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 mr-1" />
                Paper
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
        <h1 className="text-4xl font-bold">Research & Other Projects</h1>
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
    </div>
  );
};