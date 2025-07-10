import { motion } from "framer-motion";
import { Download, Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useToast } from "@/hooks/use-toast";

export default function Hero() {
  const { toast } = useToast();

  const handleDownloadResume = async () => {
    try {
      const response = await fetch("/api/resume/download");
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Resume Download",
          description: data.message,
        });
        // In a real app, this would trigger actual file download
        // window.open(data.downloadUrl, '_blank');
      }
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Unable to download resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-pattern min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Senior Node.js Developer
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto"
            >
              6+ Years of Experience in Backend Development, AWS, and Scalable Microservices
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
            >
              <a
                href="tel:7302512201"
                className="flex items-center text-secondary hover:text-primary transition-colors"
              >
                <Phone className="mr-2" size={18} />
                7302512201
              </a>
              <a
                href="mailto:deepanshu.garg24jan@gmail.com"
                className="flex items-center text-secondary hover:text-primary transition-colors"
              >
                <Mail className="mr-2" size={18} />
                deepanshu.garg24jan@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/deepanshugarg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-secondary hover:text-primary transition-colors"
              >
                <Linkedin className="mr-2" size={18} />
                LinkedIn Profile
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              {/* <Button
                onClick={handleDownloadResume}
                className="bg-primary text-white hover:bg-primary/90 font-medium"
                size="lg"
              >
                <Download className="mr-2" size={18} />
                Download Resume
              </Button> */}
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white font-medium"
                size="lg"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
