import { motion } from "framer-motion";
import { Code, Server, Smartphone, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

const experiences = [
  {
    id: 1,
    company: "Xebia Architect Pvt. Ltd.",
    position: "Senior Consultant",
    period: "Jun 2024 – Present",
    icon: Code,
    achievements: [
      "Built secure, scalable REST APIs for real-time communication",
      "Implemented infrastructure-as-code using CloudFormation",
      "Ensured security with SSM and Secret Manager",
    ],
    side: "left",
  },
  {
    id: 2,
    company: "EPAM Systems Pvt. Ltd.",
    position: "Senior Node.js Developer",
    period: "Jul 2022 – May 2024",
    icon: Server,
    achievements: [
      "Built backend components using Node.js and AWS services",
      "Collaborated with product owners on feature design",
      "Led code reviews and unit testing using Jest",
    ],
    side: "right",
  },
  {
    id: 3,
    company: "Mobcoder Technologies Pvt. Ltd.",
    position: "SDE-II (SRE)",
    period: "Sep 2019 – Jul 2022",
    icon: Smartphone,
    achievements: [
      "Developed RESTful APIs with Express.js and MongoDB",
      "Integrated real-time chat and video calling features",
      "Implemented third-party services integration",
    ],
    side: "left",
  },
  {
    id: 4,
    company: "Mobiloitte Technologies Pvt. Ltd.",
    position: "Management Trainee",
    period: "Nov 2018 – Sep 2019",
    icon: GraduationCap,
    achievements: [
      "Developed RESTful APIs with Express.js and MongoDB",
      "Foundation in backend development practices",
    ],
    side: "right",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInLeft}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            variants={fadeInLeft}
            className="text-lg text-secondary"
          >
            A journey through innovative projects and technical leadership
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-primary/20 h-full" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((exp) => {
              const IconComponent = exp.icon;
              return (
                <motion.div
                  key={exp.id}
                  variants={exp.side === "left" ? fadeInLeft : fadeInRight}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <IconComponent className="text-white" size={16} />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 ${exp.side === "left" ? "md:w-1/2 md:pr-8 md:text-right" : "md:w-1/2 md:pl-8"} ${exp.side === "right" ? "md:ml-auto" : ""}`}>
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <div className="text-sm text-accent font-medium mb-2">
                          {exp.period}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg text-primary mb-3">
                          {exp.company}
                        </h4>
                        <ul className="text-secondary space-y-1">
                          {exp.achievements.map((achievement, index) => (
                            <li key={index}>• {achievement}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Empty space for alternating layout */}
                  {exp.side === "left" && <div className="hidden md:block md:w-1/2" />}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
