import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden" id="hero">
            {/* Gradient orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

            <div className="section-container text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary font-mono text-sm md:text-base mb-4 tracking-wider"
                    >
            Hello, I'm
                    </motion.p>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 leading-tight">
                        <span className="glow-text">Meet Jivani</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl md:text-2xl text-muted-foreground mb-3"
                    >
            Full Stack Developer
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
                    >
            MERN Stack &bull; Odoo Framework &bull; Building robust, scalable applications
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a
                            href="/Meet_Jivani_Resume.pdf"
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                        >
                            <Download className="w-4 h-4" /> Download Resume
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
                        >
                            <Mail className="w-4 h-4" /> Contact Me
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <a href="#about" aria-label="Scroll down">
                        <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
