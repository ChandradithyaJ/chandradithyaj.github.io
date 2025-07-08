import React from 'react';
import { ArrowRight, BookOpen, Microscope, PenTool, Github, GraduationCap, Linkedin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const newsItems = [
    {
      date: "June 2025",
      content: (
        <>
          I gave a <a href="https://www.linkedin.com/posts/chandradithyaj_ai-datascience-educationforall-activity-7347889900970569728-uLQp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_TzygB6Ht0Cz0hOtLnD9uu0r6kXf0OHDU" className="text-blue-600 hover:underline" target='_blank'>virtual talk titled "Introduction to Artificial Intelligence and Data Science"</a> to freshmen and sophomores from various colleges in my home state Andhra Pradesh (India)."
        </>
      )
    },
    {
      date: "May 2025",
      content: (
        <>
          Submitted my Bachelor's Thesis on Risk-Sensitive RL and Stochastic Approximation to NeurIPS 2025!
        </>
      )
    },
  ];

  return (
    <div className="space-y-12">
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 max-w-xl">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Chandradithya Jonnalagadda
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Incoming Masters in CS @ Brown University <br /> B.Tech CS Grad @ IIT Tirupati <br /> Reinforcement Learning, Multi-Agent Systems, Optimization, Deep Learning, LLMs
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/research">
                    View Research & Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {/* <Button variant="secondary" size="lg" asChild>
                  <a href="/public/assets/ChandraJonnalagaddaCV.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    CV
                  </a>
                </Button> */}

                <Button variant="secondary" size="lg" asChild>
                  <a href="/public/assets/ChandraJonnalagaddaResume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/ChandradithyaJ" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://scholar.google.com/citations?user=your-id" target="_blank" rel="noopener noreferrer">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Scholar
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://linkedin.com/in/chandradithyaj" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* Right side - Profile Photo */}
            <div className="flex justify-center md:justify-end">
              <Avatar className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 border-4 border-primary/20 shadow-2xl">
                <AvatarImage
                  src="/public/images/profilePic.jpg"
                  alt="Chandradithya Jonnalagadda"
                  className="object-cover object-bottom"
                />
                <AvatarFallback className="text-4xl font-bold">Chandra Jonnalagadda</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-4 border-y border-border/40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {/* Add logos here - they will automatically resize to fit */}
            <img
              src="public/images/Brown-University-Logo.jpg"
              alt="Brown University"
              className="h-16 md:h-20 lg:h-24 w-auto max-w-32 md:max-w-40 lg:max-w-48 object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
            <img
              src="public/images/rbcdsai.jpeg"
              alt="Robert Bosch Center for DS and AI"
              className="h-16 md:h-20 lg:h-24 w-auto max-w-32 md:max-w-40 lg:max-w-48 object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
            <img
              src="public/images/Sigma-Squad-Logo.jpg"
              alt="Sigma Squad"
              className="h-16 md:h-20 lg:h-24 w-auto max-w-32 md:max-w-40 lg:max-w-48 object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
            <img
              src="public/images/Indian-Institute-of-Technology-Tirupati-Logo-1.png"
              alt="IIT Tirupati"
              className="h-16 md:h-20 lg:h-24 w-auto max-w-32 md:max-w-40 lg:max-w-48 object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground w-full px-4 text-justify">
            I hold a Bachelor's degree in Computer Science and Engineering from the Indian Institute of Technology (IIT), Tirupati and I'm an incoming Master's in Computer Science student at Brown University. My interests lie in Reinforcement Learning, Multi-Agent Systems, Optimization, and LLMs — with a focus on building robust, scalable, and trustworthy AI for real-world impact.
            
            My Bachelor’s thesis was in Risk-Sensitive RL (under review at NeurIPS 2025). I’ve worked on Explainable AI, Graph Neural Networks, LLM reasoning with tool augmentation, adversarially trained drone models, and practical deep learning applications in healthcare and software engineering.
            
            I enjoy fast-paced prototyping and have experience with PyTorch, TensorFlow, PyG, HuggingFace, LangChain, and more. At IIT Tirupati, I led the AI/ML club Sigma Squad, mentoring projects in RL, Deep Learning for CV, and AI agents.
            
            Outside of my professional interests, I love quizzing, video editing, cricket, and learning new languages -- right now it's French & Spanish!
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">News</h3>
            <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
              {newsItems.map((item, index) => (
                <div key={index} className="flex gap-4 text-sm">
                  <div className="font-medium text-white-700 whitespace-nowrap min-w-fit">
                    {item.date}:
                  </div>
                  <div className="text-muted-foreground">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Explore My Work</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Microscope className="h-5 w-5 text-primary" />
                Projects
              </CardTitle>
              <CardDescription>
                Discover my latest research initiatives, publications and ongoing projects!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/research">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PenTool className="h-5 w-5 text-primary" />
                Blog Posts
              </CardTitle>
              <CardDescription>
                Read my thoughts on current trends in research, technology, and more!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/blog">
                  Read Blog <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};