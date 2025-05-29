
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Kubernetes"]
    },
    {
      title: "Infrastructure as Code",
      skills: ["Terraform", "CloudFormation", "Ansible", "Pulumi", "ARM Templates"]
    },
    {
      title: "CI/CD Tools",
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "Azure DevOps", "CircleCI"]
    },
    {
      title: "Containerization",
      skills: ["Docker", "Kubernetes", "OpenShift", "Helm", "Istio"]
    },
    {
      title: "Monitoring & Logging",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"]
    },
    {
      title: "Programming & Scripting",
      skills: ["Python", "Bash", "PowerShell", "Go", "YAML/JSON"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              A comprehensive toolkit for modern DevOps practices and cloud-native solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl text-black font-bold">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-900 text-white text-sm px-3 py-1 rounded font-medium"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;
