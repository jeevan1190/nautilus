import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RecruitmentProcessSection from "@/components/sections/RecruitmentProcessSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Zap, TrendingUp, Target } from "lucide-react";

const RecruitmentProcess = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const pillars = [
        { icon: Shield, title: "Uncompromising Quality", desc: "Every step is governed by rigorous quality benchmarks and multi-stage verification." },
        { icon: Zap, title: "Unmatched Speed", desc: "Our lean, agile methodology reduces time-to-hire without sacrificing candidate precision." },
        { icon: Target, title: "Strategic Alignment", desc: "We don't just fill roles; we align human capital with your long-term organizational goals." },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background overflow-hidden font-display">
            <Navbar />
            <main className="flex-grow pt-20 lg:pt-24">
                <header className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                    <motion.div
                        initial={{ scale: 1.1, filter: "brightness(0.3)" }}
                        animate={{ scale: 1, filter: "brightness(0.5)" }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1454165833767-027ffea10c4b?auto=format&fit=crop&q=80&w=2072"
                            alt="Strategic Planning"
                            className="w-full h-full object-cover"
                            fetchPriority="high"
                            loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/60 to-navy" />
                    </motion.div>

                    <div className="relative z-10 w-full px-6 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-block text-gold font-black tracking-[0.6em] uppercase text-[10px] md:text-xs mb-6 px-4 py-2 border border-gold/20 rounded-full bg-gold/5"
                        >
                            Methodology Brief
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-display font-bold text-white mb-8 tracking-tight leading-tight py-2"
                        >
                            Our <span className="text-gradient-gold italic">Process</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="text-white/60 max-w-2xl mx-auto text-base md:text-xl font-light leading-relaxed px-4 text-pretty"
                        >
                            A precision-engineered recruitment lifecycle designed to bridge the gap between world-class talent and visionary organizations.
                        </motion.p>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
                </header>

                {/* Introductory Philosophy Section */}
                <section className="py-24 bg-background relative z-10">
                    <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
                        <div className="grid lg:grid-cols-3 gap-12 xl:gap-16">
                            {pillars.map((p, i) => (
                                <motion.div
                                    key={p.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                    className="group text-center lg:text-left"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-8 mx-auto lg:mx-0 group-hover:bg-gold transition-colors duration-500">
                                        <p.icon size={28} className="text-navy group-hover:text-navy transition-colors" />
                                    </div>
                                    <h4 className="text-xl xl:text-2xl font-display font-bold text-foreground mb-4">{p.title}</h4>
                                    <p className="text-foreground/70 text-sm xl:text-base leading-relaxed">{p.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="bg-surface/30">
                    <RecruitmentProcessSection />
                </div>

                <div className="bg-background">
                    <WhyUsSection />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default RecruitmentProcess;

