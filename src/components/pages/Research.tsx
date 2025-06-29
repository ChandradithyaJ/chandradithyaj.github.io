import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Award, Github, Globe, FileText, Link as LinkIcon } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const researchProjects = [
  {
    id: 1,
    title: "Risk-Sensitive Reinforcement Learning with Stochastic Approximation (not paper title; currently under review at NeurIPS 2025) (Bachelor's Thesis)",
    description: "Reinforcement learning can be made risk-aware by replacing the standard average-reward objective with an exponential-utility criterion that explicitly rewards or penalises variability. For this setting, we derive a non-linear Bellman operator, establish its contraction and uniqueness properties, and develop risk-sensitive policy-iteration grounded in these guarantees. We then develop two fully on-policy risk-sensitive actor-critic algorithms under linear function approximation, with theoretical finite-time convergence guarantees.",
    status: "Completed",
    year: "August 2024 - May 2025",
    collaborators: ["Namboori Nandhavardhan Chowdhary", "Dr. Ajin George Joseph"],
    tags: ["Reinforcement Learning", "Stochastic Approximation", "Risk-Sensitive Control"],
    image: "src/images/beyondexp.png",
    github: "https://github.com/ChandradithyaJ/Risk-Sensitive-RL",
    // paper: "https://arxiv.org/abs/2024.climate.ml"
  },
  {
    id: 2,
    title: "Hierarchical Heterogeneous Graphs for Explainable Predictions",
    description: "We propose HierGraphs, a hierarchical, heterogenous graph representation of datasets which provide more explainable predictions, especially making use of precedents, i.e., previous similar situations.",
    status: "Ongoing",
    year: "May 2024 - July 2025",
    collaborators: ["Ambreesh Parthasarathy", "Bhaarath Karthikeyan", "Shubham Kashyapi", "Krithi Shailya", "Dr. Gokul S Krishnan", "Prof. Balaraman Ravindran"],
    tags: ["Graph Neural Networks", "Explainable AI for Graphs", "Large Language Models", "PyTorch", "PyTorch Geometric"],
    funding: "Robert Bosch Center for Data Science and Artificial Intelligence",
    image: "src/images/ExplanationGenerationMethodology.png",
    github: "https://github.com/umbreeze/LegalGraph",
    demo: "/research/demos/hiergraphs",
    // paper: "https://arxiv.org/abs/2023.quantum.opt"
  }
];

const otherProjects = [
  {
    id: 3,
    title: "Lightweight Drone Foundation Model for Environment Understanding through Drone Cameras",
    description: "Designed and developed an adversarially trained lightweight Drone Foundation Model to encode drone camera images.",
    status: "Completed",
    year: "April 2025 - May 2025",
    collaborators: ["Ikshitha Janarthanan", "Aniket Johri", "Shankesh Ambaliya"],
    tags: ["Foundation Models", "Adversarial Deep Learning", "Object Detection", "Semantic Segmentation"],
    image: "src/images/DFM.png",
    github: "https://github.com/Error-404-NotFound/CS518L-Deep-Learning-Project",
    paper: "https://drive.google.com/file/d/1wE8Ezeod71sN0EN4G1tQEJrVB6heG0Gz/view?usp=sharing"
  },
  {
    id: 4,
    title: "Agentic RAG Pipeline for Privacy Policy Legal Assistance Using Multi-Agent Collaboration and Evidence Graphs [Inter IIT Tech Meet 13.0 High Prep Problem Statement - Sponsored by Pathway]",
    description: "This project presents a novel Agentic Retrieval-Augmented Generation (RAG) architecture designed to provide legal assistance on privacy policies of online services. Leveraging a modular multi-agent framework, the system decomposes user queries into subtasks, retrieves evidence from both curated databases and the web, and constructs structured evidence graphs to enhance response relevance and accuracy. The pipeline incorporates Chain-of-Thought prompting, sentiment-filtered web retrieval, graph-based context aggregation, and Responsible AI guardrails.",
    status: "Completed",
    year: "November 2024 - December 2024",
    collaborators: ["Niranjan M", "Aniket Johri", "Adithya Ananth", "Sayan Kundu", "Karthikeya Maruvada", "Umakant Sahu", "Deepak Yadav"],
    tags: ["Agentic AI", "Retrieval-Augmented Generation", "Multi-Agent Collaboration", "Large Language Models", "Web Search Augmentation", "Vector Databases", "Responsible AI", "Reinforcement Learning", "LlaMaIndex", "Pathway APIs"],
    funding: "Pathway",
    image: "src/images/pathway.png",
    github: "https://github.com/Sigma-Squad/Pathway-InterIIT-13.0",
    // demo: "https://research-viz.demo.com",
    paper: "https://drive.google.com/file/d/18Sv8mbk-sqd_uzTOMhvoigH0jMWbzEtS/view?usp=sharing"
  },
  {
    id: 5,
    title: "MiFeMoDEP - A Hybrid Mixed Feature Model for Cross Project Defect Prediction",
    description: "MiFeMoDEP is a hybrid mixed-feature model for cross-project defect prediction in Python programs, combining semantic embeddings from CodeBERT and flow representations from Code Property Graphs processed via a Relational GCN. The unified features are used for file-level classification, followed by LIME-based line ranking to identify buggy lines, achieving competitive performance against state-of-the-art models.",
    status: "Completed",
    year: "February 2024 - April 2024",
    collaborators: ["A Shree Balaji", "KE Nanda Kishore", "Karthikeya Maruvada", "Chetan Moturi"],
    tags: ["Cross-Project Defect Prediction", "CodeBERT", "Code Property Graph", "Graph Neural Network", "Relational GCN", "Line-Level Defect Prediction", "JOERN", "LIME"],
    funding: "Department of Computer Science and Engineering, IIT Tirupati",
    image: "src/images/MiFeMoDEP.png",
    github: "https://github.com/ChandradithyaJ/MiFeMoDEP",
    paper: "https://drive.google.com/file/d/1c1tyaBhTfhombSTcUyhWJxqbwlodFQYG/view?usp=sharing"
  },
  {
    id: 6,
    title: "Tool-Augmented LLM Pipeline with Dual-Head Architecture and Recursive Prompt Optimization [Inter IIT Tech Meet 12.0 High Prep Problem Statement - Sponsored by DevRev]",
    description: "This work proposes a modular pipeline to augment Large Language Models with external tools via tool prediction and argument extraction using dual LLM heads. Leveraging GPT-3.5 and GPT-4, fine-tuned through QLoRA where needed, and recursive prompt optimization, the system supports dynamic tool addition with strong performance and cost-efficiency trade-offs.",
    status: "Completed",
    year: "November 2023 - December 2023",
    collaborators: ["Ishaan Kulkarni", "Karthikeya Maruvada", "Sayan Kundu", "Aniket Johri", "Nilanjan Samaddar", "Deep Ganguly", "Adithya Ananth"],
    tags: ["LLM Tool Augmentation", "QLoRA", "Recursive Prompt Optimization", "Prompt Engineering"],
    funding: "DevRev",
    image: "src/images/devrev.png",
    github: "https://github.com/Sigma-Squad/DevRev-InterIIT-TechMeet-12.0",
    paper: "https://drive.google.com/file/d/1DO6hH3qkMhhhZsPE_A7fbg3PiQIzdMo5/view?usp=sharing"
  },
  {
    id: 7,
    title: "Sankalp",
    description: "Web app aiming to sensitize people to, and destigmatize, mental health issues, differently abled, and similar issues.",
    status: "Completed",
    year: "September 2023 - November 2023",
    collaborators: ["Karthikeya Maruvada", "Arpit Gupta", "Manurbhav Arya", "Namboori Nandhavardhan Chowdhary"],
    tags: ["React.js SPA", "Node.js", "Express.js (MVC)", "MongoDB & Mongoose", "JWT Authentication", "Cloudinary API", "Live News API", "Story Mode UX", "Sentiment Analysis", "Seamless Dark-Light Mode Switch", "Multilingual Support", "Vercel & Render Deployment", "Lottie Animations"],
    image: "src/images/Sankalp_logo.png",
    website: "https://sankalp-one.vercel.app",
    github: "https://github.com/ChandradithyaJ/Sankalp",
    demo: "https://www.youtube.com/watch?v=ZZddluzInkI"
  },
  {
    id: 8,
    title: "Anvadhi",
    description: "An app to help promote and protect endangered cultural arts and provide employment to their artists.",
    status: "Completed",
    year: "August 2023",
    collaborators: ["Karthikeya Maruvada", "Arpit Gupta", "Manurbhav Arya", "Namboori Nandhavardhan Chowdhary"],
    tags: ["Dart", "Flutter", "Firebase Auth", "Firestore", "Geocoding API", "Interactive Maps", "Media Upload", "Bookmarks & Favorites"],
    image: "src/images/anvadhi_image.jpg",
    github: "https://github.com/ChandradithyaJ/Anvadhi",
    apk: "https://drive.google.com/file/d/1mrecq0xepETjotA2RJvA73sdOCWGI8z5/view?usp=sharing",
    demo: "https://drive.google.com/file/d/1lTh1kWTyCGdwrj5AHYJNEIlHb4H3iQl0/view?usp=sharing"
  },
  {
    id: 9,
    title: "Regex-to-NFA",
    description: "Input any regular expression and an NFA for it will be generated.",
    status: "Completed",
    year: "April 2023 - June 2023",
    collaborators: ["KE Nanda Kishore"],
    tags: ["Dijkstra's Algorithm", "NetworkX", "matplotlib", "McNaughton-Yamada-Thompson Algorithm", "Python", "C++"],
    image: "src/images/regex2nfa.png",
    github: "https://github.com/ChandradithyaJ/Regex-to-NFA",
    demo: "https://drive.google.com/file/d/1ItMvhjQ2L3p-r2acy1gsdiJxg_TArrNn/view?usp=sharing"
  },
  {
    id: 10,
    title: "InterpretingRust",
    description: "A Python interpreter to interpret a subset of the Rust programming language.",
    status: "Completed",
    year: "October 2022 - November 2022",
    collaborators: ["Namboori Nandhavardhan Chowdhary", "Karthikeya Maruvada"],
    tags: ["Parser", "Interpreter", "Abstract Syntax Tree", "Lexer", "Tokenizer"],
    image: "src/images/interpretingRust.png",
    github: "https://github.com/ChandradithyaJ/InterpretingRust",
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
            className="rounded-lg object-contain w-full h-full"
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
          {project.website && (
            <Button variant="outline" size="sm" asChild>
              {project.website.startsWith('http') ? (
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  <LinkIcon className="h-4 w-4 mr-1" />
                  Website
                </a>
              ) : (
                <Link to={project.website}>
                  <LinkIcon className="h-4 w-4 mr-1" />
                  Website
                </Link>
              )}
            </Button>
          )}
          {project.apk && (
            <Button variant="outline" size="sm" asChild>
              {project.apk.startsWith('http') ? (
                <a href={project.apk} target="_blank" rel="noopener noreferrer">
                  <LinkIcon className="h-4 w-4 mr-1" />
                  APK
                </a>
              ) : (
                <Link to={project.apk}>
                  <LinkIcon className="h-4 w-4 mr-1" />
                  APK
                </Link>
              )}
            </Button>
          )}
          {project.demo && (
            <Button variant="outline" size="sm" asChild>
              {project.demo.startsWith('http') ? (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4 mr-1" />
                  Demo
                </a>
              ) : (
                <Link to={project.demo}>
                  <Globe className="h-4 w-4 mr-1" />
                  Demo
                </Link>
              )}
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