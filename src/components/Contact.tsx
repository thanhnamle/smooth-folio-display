import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-28 sm:py-36 bg-section-alt px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I'm always open to new opportunities and collaborations.
          Feel free to reach out — I'd love to hear from you.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="mailto:johndoe@email.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors duration-200"
          >
            <Mail size={16} />
            Email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors duration-200"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors duration-200"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </motion.div>

        <motion.p
          className="mt-20 text-xs text-muted-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          © {new Date().getFullYear()} John Doe. Built with care.
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
