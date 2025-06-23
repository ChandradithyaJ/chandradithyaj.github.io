
import React from 'react';
import { Mail, Instagram, Linkedin, Twitter, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    url: "mailto:your.email@university.edu",
    description: "Send me a direct message",
    handle: "your.email@university.edu"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourprofile",
    description: "Professional networking",
    handle: "@yourprofile"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/yourhandle",
    description: "Behind the scenes",
    handle: "@yourhandle"
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    url: "https://x.com/yourhandle",
    description: "Thoughts and updates",
    handle: "@yourhandle"
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

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Let's Connect</h2>
            <p className="text-muted-foreground">
              Choose your preferred way to get in touch. I typically respond within 24-48 hours.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="grid gap-4">
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
                      <Button variant="outline" size="sm" asChild>
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          Connect
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Office Information</CardTitle>
              <CardDescription>
                You can also find me at my university office
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">University Research Building</p>
                  <p className="text-sm text-muted-foreground">Room 305, 123 Academic Way</p>
                  <p className="text-sm text-muted-foreground">University City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Office hours: Mon-Fri, 9AM-5PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Form */}
        <section className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Send a Message</h2>
            <p className="text-muted-foreground">
              Have a specific question or proposal? Send me a message and I'll get back to you as soon as possible.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Research collaboration opportunity" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, research interests, or how we might collaborate..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Response Info */}
          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond to messages within 24-48 hours. For urgent matters, 
                  please feel free to reach out via phone or connect with me on LinkedIn.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};
