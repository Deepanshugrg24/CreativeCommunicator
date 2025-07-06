import { motion } from "framer-motion";
import { Code, Layers, Cloud, Database, GitBranch, TestTube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Node.js", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["Express.js", "Serverless Framework"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS Lambda", "S3", "CloudFormation", "Terraform"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "DynamoDB"],
  },
  {
    title: "Architecture",
    icon: GitBranch,
    skills: ["Microservices", "REST APIs", "Real-time systems"],
  },
  {
    title: "Testing",
    icon: TestTube,
    skills: ["Jest", "Amazon Q AI"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
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
            Technical Skills
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-secondary"
          >
            Expertise across the full technology stack
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <IconComponent className="text-primary mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
