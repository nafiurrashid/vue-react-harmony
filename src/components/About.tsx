
import { Card, CardContent } from "@/components/ui/card";
import { Code, Computer, Settings } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Computer className="h-8 w-8 text-primary" />,
      title: "Infrastructure as Code",
      description: "Expert in Terraform, CloudFormation, and Ansible for scalable infrastructure management"
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "CI/CD Pipelines",
      description: "Building robust deployment pipelines with Jenkins, GitLab CI, and GitHub Actions"
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Container Orchestration",
      description: "Kubernetes and Docker expertise for microservices architecture and deployment"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With over 8 years of experience in DevOps and cloud infrastructure, I specialize in 
              building scalable, automated systems that bridge the gap between development and operations. 
              My passion lies in creating efficient workflows that enable teams to deliver high-quality 
              software faster and more reliably.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
