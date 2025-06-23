
import React from 'react';
import { ArrowRight, BookOpen, Microscope, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Name, Bio, Buttons */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Dr. Research Scholar
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Advancing knowledge through innovative research in computational science and data analytics
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/research">
                  View Research <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/cv">
                  View CV
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/resume">
                  View Resume
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side - Profile Photo */}
          <div className="flex justify-center md:justify-end">
            <Avatar className="h-64 w-64 md:h-80 md:w-80 border-4 border-primary/20">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face" 
                alt="Dr. Research Scholar"
              />
              <AvatarFallback className="text-4xl font-bold">DR</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Background</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
              Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• PhD in Computer Science, University of Excellence</li>
              <li>• MS in Data Science, Institute of Technology</li>
              <li>• BS in Mathematics, State University</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 h-64 flex items-center justify-center">
            <div className="text-center">
              <Microscope className="h-16 w-16 mx-auto mb-4 text-primary" />
              <p className="text-sm text-muted-foreground">Research Focus Areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Explore My Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Microscope className="h-5 w-5 text-primary" />
                Research Projects
              </CardTitle>
              <CardDescription>
                Discover my latest research initiatives and ongoing projects in computational science.
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
                Read my thoughts on current trends in research, technology, and academic life.
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

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Publications
              </CardTitle>
              <CardDescription>
                Access my published papers, conference presentations, and academic contributions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/research">
                  View Publications <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
