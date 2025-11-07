import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Code, FileText, Lightbulb, ExternalLink, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container py-6">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Software Documentation Guide</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            A comprehensive, professional-grade resource for creating exceptional software documentation
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="best-practices">Best Practices</TabsTrigger>
            <TabsTrigger value="types">Documentation Types</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-accent" />
                  About This Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-card-foreground">
                <p>
                  Software documentation serves as the foundational pillar for any successful software project, providing a clear and comprehensive understanding of its architecture, functionality, and usage. It is the primary means of communication between developers, users, and stakeholders, ensuring that knowledge is shared effectively and the software can be used, maintained, and evolved over time.
                </p>
                <p>
                  High-quality documentation not only reduces the learning curve for new users and developers but also minimizes the burden on support teams and fosters a collaborative and efficient development environment. This guide provides a professional-grade, open resource for software documentation, offering a curated collection of best practices, real-world examples, and valuable resources to help you create exceptional documentation for your own projects.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge variant="secondary">Free & Open</Badge>
                  <Badge variant="secondary">Best Practices</Badge>
                  <Badge variant="secondary">Real Examples</Badge>
                  <Badge variant="secondary">Templates Included</Badge>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">9 Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Essential practices from industry leaders like Atlassian, Google, and the Write the Docs community.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">15+ Doc Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Detailed breakdown of product, process, and sales/marketing documentation types.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Real Examples</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Curated list of excellent documentation from Stripe, Twilio, GitHub, and more.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Best Practices Tab */}
          <TabsContent value="best-practices" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Documentation Best Practices</CardTitle>
                <CardDescription>
                  Creating effective software documentation requires a strategic approach that prioritizes clarity, usability, and accuracy.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    title: "Know Your Target Audience",
                    description: "Tailor the language, tone, and technical depth of your documentation to the specific needs and expertise of your intended audience. End-user documentation should be written in simple, non-technical language, while developer documentation can include more technical details and code examples."
                  },
                  {
                    title: "Keep It User-Friendly",
                    description: "Organize your documentation with a clear and intuitive structure, including a table of contents, headings, and a search function. This makes it easy for users to find the information they need quickly and efficiently."
                  },
                  {
                    title: "Use Version Control",
                    description: "For software that is under active development, use a version control system like Git to manage your documentation. This ensures that your documentation always reflects the latest version of the software and that a history of changes is maintained."
                  },
                  {
                    title: "Incorporate Visuals",
                    description: "Use screenshots, diagrams, and videos to supplement your text and help users understand complex concepts and workflows more easily. Visual aids can significantly improve the clarity and engagement of your documentation."
                  },
                  {
                    title: "Adopt a Documentation Style Guide",
                    description: "A style guide ensures consistency in tone, terminology, and formatting across all of your documentation. This creates a more professional and cohesive experience for your users. The Google Developer Documentation Style Guide is an excellent example."
                  },
                  {
                    title: "Update Regularly",
                    description: "Software is constantly evolving, and so should your documentation. Establish a regular review process to ensure that your documentation remains accurate and up-to-date with the latest changes and features."
                  },
                  {
                    title: "Encourage Collaborative Documentation",
                    description: "Treat your documentation as a collaborative effort, encouraging contributions from developers, technical writers, and even users. This helps to ensure that your documentation is comprehensive, accurate, and reflects a variety of perspectives."
                  },
                  {
                    title: "Provide Troubleshooting and FAQs",
                    description: "A dedicated section for frequently asked questions (FAQs) and troubleshooting guides can empower users to solve common problems on their own, reducing the workload on your support team."
                  },
                  {
                    title: "Use Documentation Templates",
                    description: "Templates can help to streamline the documentation process and ensure consistency across different types of documents. They provide a starting point and structure for your documentation efforts."
                  }
                ].map((practice, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{practice.title}</h3>
                    <p className="text-muted-foreground">{practice.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documentation Types Tab */}
          <TabsContent value="types" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Documentation</CardTitle>
                <CardDescription>
                  External-facing documentation that helps users understand and use your product effectively.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "Product Manuals", desc: "Comprehensive guides explaining features and functionality" },
                    { name: "User Guides", desc: "Step-by-step instructions for specific tasks and workflows" },
                    { name: "API Documentation", desc: "Technical docs explaining how to use your API" },
                    { name: "SDK Documentation", desc: "Tools and resources for developing on your platform" },
                    { name: "Release Notes", desc: "Information about new features and bug fixes" },
                    { name: "Troubleshooting Guides", desc: "Solutions to common problems and issues" },
                    { name: "Knowledge Base", desc: "Searchable collection of articles and FAQs" },
                    { name: "Onboarding Docs", desc: "Getting started guides for new users" }
                  ].map((type, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg bg-card">
                      <h4 className="font-semibold text-foreground mb-1">{type.name}</h4>
                      <p className="text-sm text-muted-foreground">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Process Documentation</CardTitle>
                <CardDescription>
                  Internal documentation for development teams and workflows.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "Project Plans", desc: "Goals, scope, and timeline of software projects" },
                    { name: "Business Standards", desc: "Guidelines ensuring consistency and quality" },
                    { name: "Reports & Metrics", desc: "Data tracking project performance and progress" },
                    { name: "Internal Wiki", desc: "Collaborative knowledge base for the team" }
                  ].map((type, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg bg-card">
                      <h4 className="font-semibold text-foreground mb-1">{type.name}</h4>
                      <p className="text-sm text-muted-foreground">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sales & Marketing Documentation</CardTitle>
                <CardDescription>
                  Documentation to promote your product and attract customers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "White Papers", desc: "In-depth reports on topics related to your product" },
                    { name: "Case Studies", desc: "Success stories from your customers" },
                    { name: "RFPs & Proposals", desc: "Documents for bidding on projects" },
                    { name: "Marketing Docs", desc: "Market requirements and business plans" }
                  ].map((type, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg bg-card">
                      <h4 className="font-semibold text-foreground mb-1">{type.name}</h4>
                      <p className="text-sm text-muted-foreground">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  API Documentation Examples
                </CardTitle>
                <CardDescription>
                  Learn from the best API documentation in the industry
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Stripe", url: "https://stripe.com/docs/api", features: "Clean design, multiple languages, interactive examples" },
                    { name: "Twilio", url: "https://www.twilio.com/docs/usage/api", features: "Comprehensive, accessible, excellent code samples" },
                    { name: "GitHub", url: "https://docs.github.com/en/rest", features: "Engaging tone, well-organized, exhaustive menu" },
                    { name: "Google Maps", url: "https://developers.google.com/maps/documentation", features: "Three-column layout, excellent navigation" }
                  ].map((example, index) => (
                    <div key={index} className="flex items-start justify-between p-4 border border-border rounded-lg bg-card hover:bg-accent/10 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{example.name}</h4>
                        <p className="text-sm text-muted-foreground">{example.features}</p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={example.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Framework & Library Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { name: "Django", url: "https://docs.djangoproject.com/", desc: "Well-structured and comprehensive" },
                    { name: "Ruby on Rails", url: "https://guides.rubyonrails.org/", desc: "Excellent guides, easy to follow" },
                    { name: "Laravel", url: "https://laravel.com/docs", desc: "Clean, modern, well-organized" },
                    { name: "React", url: "https://react.dev/", desc: "Interactive examples, clear explanations" }
                  ].map((example, index) => (
                    <div key={index} className="p-3 border border-border rounded-lg bg-card hover:bg-accent/10 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-foreground">{example.name}</h4>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={example.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">{example.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Language Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { name: "Go by Example", url: "https://gobyexample.com/", desc: "Hands-on approach with clear examples" },
                    { name: "Rust Book", url: "https://doc.rust-lang.org/book/", desc: "Conversational and accessible style" },
                    { name: "Python Docs", url: "https://docs.python.org/3/", desc: "Comprehensive with excellent tutorials" },
                    { name: "MDN Web Docs", url: "https://developer.mozilla.org/", desc: "Gold standard for web technologies" }
                  ].map((example, index) => (
                    <div key={index} className="p-3 border border-border rounded-lg bg-card hover:bg-accent/10 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-foreground">{example.name}</h4>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={example.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">{example.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Documentation Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Documentation Generators</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        { name: "Sphinx", desc: "Powerful generator for Python projects" },
                        { name: "MkDocs", desc: "Fast, simple static site generator" },
                        { name: "Docusaurus", desc: "Optimized for documentation websites" },
                        { name: "VitePress", desc: "Vite-powered static site generator" }
                      ].map((tool, index) => (
                        <div key={index} className="p-3 border border-border rounded-lg bg-card">
                          <h5 className="font-medium text-foreground">{tool.name}</h5>
                          <p className="text-sm text-muted-foreground">{tool.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Style Guides</h4>
                    <div className="space-y-2">
                      {[
                        { name: "Google Developer Documentation Style Guide", url: "https://developers.google.com/style" },
                        { name: "Microsoft Writing Style Guide", url: "https://learn.microsoft.com/en-us/style-guide/welcome/" }
                      ].map((guide, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg bg-card">
                          <span className="font-medium text-foreground">{guide.name}</span>
                          <Button variant="ghost" size="sm" asChild>
                            <a href={guide.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="h-5 w-5 text-primary" />
                  Open Source Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { 
                      name: "Write the Docs", 
                      url: "https://www.writethedocs.org/",
                      desc: "Global community with conferences, meetups, and resources"
                    },
                    { 
                      name: "Awesome Open Source Documents", 
                      url: "https://github.com/44bits/awesome-opensource-documents",
                      desc: "Curated list of open source documents and guides"
                    },
                    { 
                      name: "Beautiful Docs", 
                      url: "https://github.com/matheusfelipeog/beautiful-docs",
                      desc: "Collection of beautiful documentation examples"
                    }
                  ].map((resource, index) => (
                    <div key={index} className="flex items-start justify-between p-4 border border-border rounded-lg bg-card hover:bg-accent/10 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{resource.name}</h4>
                        <p className="text-sm text-muted-foreground">{resource.desc}</p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Templates & Starting Points</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-border rounded-lg bg-muted/50">
                  <h4 className="font-semibold text-foreground mb-2">Technical Documentation Template</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Introduction - Overview and purpose</li>
                    <li>• Getting Started - Quick start guide</li>
                    <li>• Guides - In-depth tutorials</li>
                    <li>• Reference - Detailed feature documentation</li>
                    <li>• Troubleshooting - Common problems and solutions</li>
                    <li>• FAQs - Frequently asked questions</li>
                  </ul>
                </div>

                <div className="p-4 border border-border rounded-lg bg-muted/50">
                  <h4 className="font-semibold text-foreground mb-2">API Documentation Template</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Endpoint URL and HTTP method</li>
                    <li>• Parameters (name, type, description)</li>
                    <li>• Request example with code</li>
                    <li>• Response example with status codes</li>
                    <li>• Error handling and edge cases</li>
                  </ul>
                </div>

                <div className="p-4 border border-border rounded-lg bg-muted/50">
                  <h4 className="font-semibold text-foreground mb-2">README Template</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Project title and description</li>
                    <li>• Installation instructions</li>
                    <li>• Usage examples</li>
                    <li>• Contributing guidelines</li>
                    <li>• License information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8 bg-card">
        <div className="container text-center text-muted-foreground">
          <p className="mb-2">
            Created as a free, open resource for the software development community
          </p>
          <p className="text-sm">
            Feel free to use, share, and adapt this guide for your projects
          </p>
        </div>
      </footer>
    </div>
  );
}
