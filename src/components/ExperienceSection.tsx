import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        company: "Odoo",
        role: "Software Developer",
        period: "January 2024 – Present",
        location: "Gandhinagar, Gujarat",
        points: [
            "Led integration of Swiggy and Zomato with Odoo 18, revolutionizing online order management for the F&B sector.",
            "Developed Hospital Management System and Real Estate module with patient management, scheduling, and property listings.",
            "Implemented seamless order synchronization, specialized pricelists, and enhanced customer service features.",
        ],
    },
    {
        company: "WeHear",
        role: "Web Development Intern",
        period: "November 2022 – April 2023",
        location: "Ahmedabad, Gujarat",
        points: [
            "Spearheaded development of inventory management and payroll systems using the MERN stack.",
            "Engineered features including product listing, inventory tracking, employee administration, and performance tracking.",
        ],
    },
];

const ExperienceSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="relative">
            <div className="section-container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
            Work <span className="glow-text">Experience</span>
                    </h2>
                    <p className="section-subtitle">My professional journey</p>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

                        <div className="space-y-8">
                            {experiences.map((exp, i) => (
                                <motion.div
                                    key={exp.company}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: i * 0.2 }}
                                    className="relative pl-12 md:pl-20"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                                    <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/20 transition-colors">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                                                    <Briefcase className="w-4 h-4 text-primary" /> {exp.company}
                                                </h3>
                                                <p className="text-primary font-medium">{exp.role}</p>
                                            </div>
                                            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {exp.period}</span>
                                                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {exp.location}</span>
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {exp.points.map((point, pi) => (
                                                <li key={pi} className="text-foreground/80 text-sm leading-relaxed flex gap-2">
                                                    <span className="text-primary mt-1.5 shrink-0">▹</span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;
