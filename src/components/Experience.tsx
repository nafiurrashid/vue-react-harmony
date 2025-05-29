
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2021 - Present",
      description: [
        "Led cloud migration initiative, reducing infrastructure costs by 40%",
        "Implemented GitOps workflows using ArgoCD and Flux",
        "Designed and maintained Kubernetes clusters serving 10M+ requests daily",
        "Mentored junior engineers and established DevOps best practices"
      ]
    },
    {
      title: "DevOps Engineer",
      company: "InnovateTech",
      location: "Austin, TX",
      duration: "2019 - 2021",
      description: [
        "Built CI/CD pipelines reducing deployment time from hours to minutes",
        "Automated infrastructure provisioning using Terraform and Ansible",
        "Implemented monitoring solutions improving system reliability to 99.9%",
        "Collaborated with development teams to optimize application performance"
      ]
    },
    {
      title: "Cloud Infrastructure Specialist",
      company: "DataFlow Systems",
      location: "Seattle, WA",
      duration: "2017 - 2019",
      description: [
        "Managed multi-cloud environments across AWS, Azure, and GCP",
        "Designed disaster recovery strategies and backup solutions",
        "Optimized cloud spending through resource right-sizing and automation",
        "Implemented security best practices and compliance frameworks"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-700 font-medium">
              Building robust infrastructure and streamlining operations across various industries
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-black font-bold">
                    {exp.title}
                  </CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-700">
                    <div className="font-bold text-gray-900 text-lg">
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-4 text-sm font-medium">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {exp.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-black mr-2 font-bold">•</span>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
