
import React from 'react';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const CV: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Curriculum Vitae</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive overview of my academic and professional background, research contributions, and achievements.
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

      {/* CV Content */}
      <section>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Dr. Research Scholar</CardTitle>
            <div className="text-center text-muted-foreground space-y-2">
              <p>Computational Science Researcher</p>
              <p>Email: scholar@university.edu | Phone: (555) 123-4567</p>
              <p>University Research Building, Room 305</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Ph.D. in Computer Science</h4>
                  <p className="text-muted-foreground">University of Excellence, 2020</p>
                  <p className="text-sm">Dissertation: "Advanced Computational Methods in Data Science"</p>
                </div>
                <div>
                  <h4 className="font-semibold">M.S. in Data Science</h4>
                  <p className="text-muted-foreground">Institute of Technology, 2016</p>
                </div>
                <div>
                  <h4 className="font-semibold">B.S. in Mathematics</h4>
                  <p className="text-muted-foreground">State University, 2014</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Professional Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Senior Research Scientist</h4>
                  <p className="text-muted-foreground">University Research Institute, 2020 - Present</p>
                  <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
                    <li>Lead computational research projects in machine learning and data analytics</li>
                    <li>Mentor graduate students and postdoctoral researchers</li>
                    <li>Collaborate with interdisciplinary teams on funded research projects</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Research Assistant</h4>
                  <p className="text-muted-foreground">University of Excellence, 2016 - 2020</p>
                  <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
                    <li>Developed novel algorithms for large-scale data processing</li>
                    <li>Published research findings in top-tier conferences and journals</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Publications */}
            <div>
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Selected Publications</h3>
              <div className="space-y-3 text-sm">
                <p>
                  <strong>Scholar, R.</strong>, et al. (2023). "Novel Approaches to Computational Data Analysis." 
                  <em>Journal of Advanced Computing</em>, 45(3), 123-145.
                </p>
                <p>
                  <strong>Scholar, R.</strong>, & Colleague, A. (2022). "Machine Learning Applications in Scientific Research." 
                  <em>Proceedings of International Conference on AI</em>, pp. 67-82.
                </p>
                <p>
                  Johnson, B., <strong>Scholar, R.</strong>, & Smith, C. (2021). "Distributed Computing for Large-Scale Analytics." 
                  <em>ACM Transactions on Computing Systems</em>, 39(2), 1-28.
                </p>
              </div>
            </div>

            {/* Awards */}
            <div>
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Awards & Honors</h3>
              <div className="space-y-2 text-sm">
                <p>• Outstanding Research Award, University Research Institute (2023)</p>
                <p>• Best Paper Award, International Conference on Computational Science (2022)</p>
                <p>• Graduate Fellowship, National Science Foundation (2016-2020)</p>
                <p>• Summa Cum Laude, State University (2014)</p>
              </div>
            </div>

            {/* Note about LaTeX */}
            <div className="mt-8 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <FileText className="inline h-4 w-4 mr-1" />
                This CV is generated from a LaTeX source file and rendered for web display. 
                Upload your .tex file to replace this content with your actual CV.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
