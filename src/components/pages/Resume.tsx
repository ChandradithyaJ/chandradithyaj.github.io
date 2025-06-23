
import React from 'react';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Resume: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Resume</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A concise summary of my professional experience, skills, and qualifications.
        </p>
      </section>

      {/* Download Options */}
      <section className="flex justify-center gap-4">
        <Button size="lg">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
        <Button variant="outline" size="lg">
          <FileText className="mr-2 h-4 w-4" />
          View LaTeX Source
        </Button>
      </section>

      {/* Resume Content */}
      <section>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Dr. Research Scholar</CardTitle>
            <div className="text-center text-muted-foreground">
              <p>Computational Science Researcher & Data Analytics Expert</p>
              <p>scholar@university.edu | (555) 123-4567 | LinkedIn: @scholarprofile</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Professional Summary */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-primary">Professional Summary</h3>
              <p className="text-sm leading-relaxed">
                Accomplished researcher with 7+ years of experience in computational science and data analytics. 
                Proven track record of leading innovative research projects, publishing in top-tier journals, 
                and developing cutting-edge algorithms for large-scale data processing. Strong background in 
                machine learning, statistical analysis, and interdisciplinary collaboration.
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-primary">Core Competencies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                <div>• Machine Learning</div>
                <div>• Data Analytics</div>
                <div>• Python/R Programming</div>
                <div>• Statistical Modeling</div>
                <div>• Research Methodology</div>
                <div>• Algorithm Development</div>
                <div>• Team Leadership</div>
                <div>• Scientific Writing</div>
                <div>• Project Management</div>
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-primary">Professional Experience</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">Senior Research Scientist</h4>
                      <p className="text-muted-foreground">University Research Institute</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2020 - Present</span>
                  </div>
                  <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
                    <li>Lead research team of 8 members on $2M+ funded projects</li>
                    <li>Developed novel ML algorithms improving processing efficiency by 40%</li>
                    <li>Published 15+ peer-reviewed papers in high-impact journals</li>
                    <li>Mentored 6 graduate students and 3 postdoctoral researchers</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">Research Assistant</h4>
                      <p className="text-muted-foreground">University of Excellence</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2016 - 2020</span>
                  </div>
                  <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
                    <li>Designed and implemented distributed computing solutions</li>
                    <li>Collaborated on interdisciplinary projects with biology and chemistry departments</li>
                    <li>Received NSF Graduate Fellowship for outstanding research potential</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-primary">Education</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-semibold">Ph.D. in Computer Science</h4>
                    <p className="text-sm text-muted-foreground">University of Excellence</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2020</span>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-semibold">M.S. in Data Science</h4>
                    <p className="text-sm text-muted-foreground">Institute of Technology</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2016</span>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-primary">Key Achievements</h3>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Outstanding Research Award, University Research Institute (2023)</li>
                <li>Best Paper Award, International Conference on Computational Science (2022)</li>
                <li>30+ publications with 500+ citations (h-index: 12)</li>
                <li>Principal Investigator on 5 successful grant proposals totaling $3.5M</li>
              </ul>
            </div>

            {/* Note about LaTeX */}
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <FileText className="inline h-4 w-4 mr-1" />
                This resume is generated from a LaTeX source file and rendered for web display. 
                Upload your .tex file to replace this content with your actual resume.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
