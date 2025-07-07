
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const blogPosts = [
  // {
  //   id: 1,
  //   title: "The Future of Machine Learning in Climate Research",
  //   excerpt: "Exploring how advanced ML techniques are revolutionizing our understanding of climate patterns and helping us make more accurate predictions. This comprehensive analysis covers the latest developments in neural networks, deep learning architectures, and their applications in environmental science.",
  //   date: "2024-01-15",
  //   readTime: "8 min read",
  //   tags: ["Machine Learning", "Climate Science", "Research"],
  //   category: "Research",
  //   image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
  //   filename: "Classical_RSRL"
  // },
  // {
  //   id: 2,
  //   title: "Getting Started with Quantum Computing: A Researcher's Perspective",
  //   excerpt: "A comprehensive guide to understanding quantum computing principles and their practical applications in research. Learn about quantum algorithms, circuit design, and the potential for quantum advantage in solving complex computational problems.",
  //   date: "2024-01-08",
  //   readTime: "12 min read",
  //   tags: ["Quantum Computing", "Technology", "Tutorial"],
  //   category: "Technology",
  //   image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
  // },
  // {
  //   id: 3,
  //   title: "Academic Life Balance: Productivity Tips for Researchers",
  //   excerpt: "Practical strategies for maintaining work-life balance while pursuing ambitious research goals. Discover time management techniques, stress reduction methods, and ways to stay motivated throughout your academic journey.",
  //   date: "2024-01-02",
  //   readTime: "6 min read",
  //   tags: ["Productivity", "Academic Life", "Tips"],
  //   category: "Academic Life",
  //   image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
  // },
  // {
  //   id: 4,
  //   title: "Open Science and Reproducible Research: Best Practices",
  //   excerpt: "Guidelines and tools for making your research more transparent and reproducible. Learn about version control, data management, documentation practices, and collaborative research methodologies that benefit the entire scientific community.",
  //   date: "2023-12-28",
  //   readTime: "10 min read",
  //   tags: ["Open Science", "Research Methods", "Best Practices"],
  //   category: "Research",
  //   image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
  // },
  // {
  //   id: 5,
  //   title: "Blockchain Applications Beyond Cryptocurrency",
  //   excerpt: "Exploring innovative uses of blockchain technology in academic publishing, data verification, and collaborative research. Understand how decentralized systems can transform scholarly communication and research integrity.",
  //   date: "2023-12-20",
  //   readTime: "9 min read",
  //   tags: ["Blockchain", "Innovation", "Academic Publishing"],
  //   category: "Technology",
  //   image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
  // },
  // {
  //   id: 6,
  //   title: "Conference Networking: Making Meaningful Connections",
  //   excerpt: "Tips and strategies for effective networking at academic conferences and research events. Learn how to build lasting professional relationships, present your work effectively, and make the most of conference opportunities.",
  //   date: "2023-12-15",
  //   readTime: "7 min read",
  //   tags: ["Networking", "Conferences", "Career"],
  //   category: "Academic Life",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  // }
];

const categories = ["All", "Research", "Technology", "Academic Life"];

const BlogPostCard = ({ post }: { post: any }) => (
  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {/* Blog Post Image */}
      <div className="md:col-span-1">
        <AspectRatio ratio={4/3}>
          <img
            src={post.image}
            alt={post.title}
            className="rounded-lg object-cover w-full h-full"
            loading="lazy"
          />
        </AspectRatio>
      </div>
      
      {/* Blog Post Content */}
      <div className="md:col-span-2 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold hover:text-primary transition-colors">
            {post.title}
          </h3>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
            <Badge variant="outline">{post.category}</Badge>
          </div>
        </div>
        
        <p className="text-muted-foreground">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-2">
          <Tag className="h-4 w-4 text-muted-foreground" />
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Card>
);

export const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Thoughts, insights, and discussions on research, technology, and academic life!
        </p>
      </section>

      {/* Search and Filter */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="space-y-6">
        {blogPosts.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-muted-foreground">I don't have any blog posts right now, but they're in the works. Stay tuned!</p>
            </CardContent>
          </Card>
        ) : filteredPosts.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-muted-foreground">No posts found matching your criteria.</p>
            </CardContent>
          </Card>
        ) : (
          filteredPosts.map((post) => (
            <Link to={`/blog/${post.filename}`} key={post.id}>
              <BlogPostCard key={post.id} post={post} />
            </Link>
          ))
        )}
      </section>

      {/* Newsletter Signup */}
      {/* <section className="mt-16">
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Stay Updated</h3>
              <p className="text-muted-foreground">
                Subscribe to get notified about new blog posts and research updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input placeholder="Enter your email" type="email" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section> */}
    </div>
  );
};
