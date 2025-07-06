import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <p className="text-gray-400">
            © 2025 Deepanshu Garg. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Senior Node.js Developer | AWS Expert | Microservices Architect
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
