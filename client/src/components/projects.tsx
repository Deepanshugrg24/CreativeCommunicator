import { motion } from "framer-motion";
import { Plane, GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const projects = [
  {
    title: "Flight Family Communicator",
    client: "Delta Airlines",
    period: "Jun 2024 – Present",
    icon: Plane,
    description: "Modernized Delta's internal chat application from Azure to AWS tech stack for operational efficiency.",
    technologies: ["Node.js", "AWS DocumentDB", "Lambda", "CloudFormation"],
    achievements: [
      "Accelerated unit test development by 30-40%",
      "Integrated Amazon Q AI for Jest test cases",
    ],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  },
  {
    title: "BrightSpace",
    client: "D2L",
    period: "Jul 2022 – Dec 2024",
    icon: GraduationCap,
    description: "Delivered scalable features across autonomous teams using AWS and microservices architecture.",
    technologies: ["AWS Lambda", "S3", "DynamoDB", "Terraform"],
    achievements: [
      "Scalable microservices architecture",
      "Bug resolution and system optimization",
    ],
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  },
  {
    title: "Professional Beauty World",
    client: "Virtual Events Platform",
    period: "Jan 2021 – Jul 2024",
    icon: Calendar,
    description: "Built a virtual event platform for brand/product showcases with comprehensive event management features.",
    technologies: ["Node.js", "Express.js", "MongoDB", "AWS"],
    achievements: [
      "Virtual event platform development",
      "Brand showcase and product management",
    ],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-secondary"
          >
            Showcasing innovative solutions and technical excellence
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full overflow-hidden card-hover">
                  <div className="relative">
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} project background`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <IconComponent className="text-primary mr-3" size={20} />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-accent mb-2">
                      Client: {project.client} | {project.period}
                    </p>
                    <p className="text-secondary mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <ul className="text-sm text-secondary space-y-1">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>• {achievement}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
