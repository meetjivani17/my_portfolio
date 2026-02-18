import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Swiggy-Zomato Integration",
    tech: ["Odoo 18", "Python", "UrbanPiper", "PostgreSQL"],
    description:
      "Integrated UrbanPiper with Odoo 18 to streamline online order management for the F&B sector. Enabled seamless synchronization of orders from Swiggy and Zomato directly into Odoo with specialized pricelists and POS integration.",
    highlights: [
      "Order sync from Swiggy & Zomato",
      "Product sync to UrbanPiper",
      "POS-based order management",
      "Custom pricelists per channel",
    ],
  },
  {
    title: "Expense Tracker",
    tech: ["MongoDB", "Node.js", "React.js", "Express.js", "Material UI"],
    description:
      "Full-stack expense tracking application with JWT authentication, expense categorization, and data visualization through charts and graphs for financial analysis.",
    highlights: [
      "JWT authentication & authorization",
      "CRUD expense management",
      "Category-based tracking",
      "Chart-based spending analytics",
    ],
  },
];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [transform, setTransform] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => setTransform("");

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transform, transition: "transform 0.15s ease-out" }}
    >
      {children}
    </div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="section-subtitle">Things I've built</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2 }}
              >
                <TiltCard className="glass-card rounded-2xl p-6 md:p-8 h-full hover:border-primary/20 transition-colors">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-4">{project.description}</p>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h) => (
                      <li key={h} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
