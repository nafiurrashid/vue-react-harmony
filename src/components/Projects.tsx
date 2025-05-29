
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Multi-Cloud Kubernetes Platform",
      description: "Built a unified Kubernetes platform spanning AWS, Azure, and GCP with automated provisioning, monitoring, and disaster recovery capabilities.",
      technologies: ["Kubernetes", "Terraform", "Helm", "Istio", "Prometheus"],
      github: "#",
      demo: "#"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Designed and implemented a GitOps-based CI/CD pipeline that reduced deployment time by 75% and improved reliability across 50+ microservices.",
      technologies: ["GitLab CI", "ArgoCD", "Docker", "Kubernetes", "Vault"],
      github: "#",
      demo: "#"
    },
    {
      title: "Infrastructure Cost Optimization",
      description: "Developed automated cost optimization tools that analyze cloud resource usage patterns and provide recommendations, saving $2M annually.",
      technologies: ["Python", "AWS APIs", "Terraform", "Lambda", "CloudWatch"],
      github: "#",
      demo: "#"
    },
    {
      title: "Observability Stack",
      description: "Implemented comprehensive monitoring and logging solution providing real-time insights into system performance and application health.",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "Jaeger", "AlertManager"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing innovative DevOps solutions that drive efficiency and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
