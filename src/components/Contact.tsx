
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "hello@devopsexpert.com",
      href: "mailto:hello@devopsexpert.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "#"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Ready to optimize your infrastructure and streamline your operations? 
              Let's discuss how I can help your team achieve DevOps excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-black font-bold">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-black">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 font-medium">{info.label}</div>
                        <div className="text-black font-bold">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-black font-bold">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-6 font-medium">
                    Follow my journey and connect with me on social platforms. 
                    I regularly share insights about DevOps practices, cloud technologies, 
                    and automation strategies.
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        asChild
                        className="flex items-center gap-2 font-bold"
                      >
                        <a href={link.href}>
                          {link.icon}
                          {link.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button size="lg" className="w-full font-bold">
                      Download Resume
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
