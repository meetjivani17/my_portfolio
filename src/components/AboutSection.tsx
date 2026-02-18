import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="relative">
            <div className="section-container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
            About <span className="glow-text">Me</span>
                    </h2>
                    <p className="section-subtitle">Get to know me better</p>

                    <div className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl">
                        <p className="text-foreground/90 leading-relaxed text-base md:text-lg mb-6">
              I possess expertise in the <span className="text-primary font-semibold">MERN</span> (MongoDB, Express.js, React, Node.js) stack and{" "}
                            <span className="text-primary font-semibold">Odoo</span> technology, including the Odoo framework, Python, and OWL.js.
                        </p>
                        <p className="text-foreground/90 leading-relaxed text-base md:text-lg mb-6">
              My proficiency in these areas enables me to build robust applications, while my solid foundation in{" "}
                            <span className="text-primary font-semibold">Data Structures & Algorithms</span> ensures efficient problem-solving and code optimization.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-8">
                            {["B.E. in Information Technology", "CGPA: 8.44", "L.D College of Engineering", "2020 – 2024"].map((tag) => (
                                <span key={tag} className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary font-mono">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
