import React from 'react';
import { Mail, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    url: "cjonnala@cs.brown.edu",
    description: "Send me a direct message",
    handle: "cjonnala@cs.brown.edu"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/chandradithyaj",
    description: "Professional Networking",
    handle: "@Chandradithya Jonnalagadda"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/chad_enigma",
    description: "Behind the scenes",
    handle: "@chad_enigma"
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    url: "https://x.com/enigmatic_chad",
    description: "Thoughts and updates",
    handle: "@enigmatic_chad"
  }
];

export const Contact: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          I'm always interested in discussing research collaborations, new opportunities,
          and connecting with fellow researchers and developers. Feel free to reach out!
        </p>
      </section>

      {/* Contact Information - Full Width */}
      <section className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred way to get in touch. I typically respond within 24-48 hours.
          </p>
        </div>

        {/* Social Media Links - Full Width Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <Card key={social.name} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{social.name}</h3>
                      <p className="text-sm text-muted-foreground">{social.description}</p>
                      <p className="text-sm font-medium">{social.handle}</p>
                    </div>
                    {social.name != "Email" && <Button variant="outline" size="sm" asChild>
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        Connect
                      </a>
                    </Button>}
                    {social.name == "Email" && <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${social.url}`} target="_blank" rel="noopener noreferrer">
                        Connect
                      </a>
                    </Button>}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};