import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:johndoe@email.com",
    icon: Mail,
    detail: "johndoe@email.com",
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
    detail: "github.com/johndoe",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    detail: "linkedin.com/in/johndoe",
    external: true,
  },
];

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
          Let's Build Something Together
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-12 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I'm always open to new opportunities and collaborations.
          Feel free to reach out — I'd love to hear from you.
        </motion.p>

        <motion.div
          className="rounded-2xl border border-border bg-card p-8 sm:p-10 shadow-[var(--card-shadow)] max-w-lg mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-200 hover:bg-muted"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                  <link.icon size={18} />
                </div>
                <div className="flex-1 text-left">
                  <span className="text-sm font-semibold text-foreground block leading-tight">
                    {link.label}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {link.detail}
                  </span>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </a>
            ))}
          </div>
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
