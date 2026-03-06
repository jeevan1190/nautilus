import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhyUsSection from "@/components/sections/WhyUsSection";
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { useEffect } from "react";
import { motion } from "framer-motion";

const WhyUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background overflow-hidden font-display">
            <Navbar />
            <main className="flex-grow">
                <header className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
                    <motion.div
                        initial={{ scale: 1.1, filter: "brightness(0.3)" }}
                        animate={{ scale: 1, filter: "brightness(0.5)" }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070"
                            alt="Executive Team"
                            className="w-full h-full object-cover"
                            fetchPriority="high"
                            loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/70 to-navy" />
                    </motion.div>

                    <div className="relative z-10 w-full px-6 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-block text-white font-black tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.6em] uppercase text-[10px] sm:text-xs md:text-sm mb-6 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full gradient-gold shadow-lg border border-white/20 backdrop-blur-sm"
                        >
                            Strategic Advantage
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white drop-shadow-lg mb-6 tracking-tight leading-tight py-1"
                        >
                            Why <span className="text-gradient-gold italic">Nautilus? </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="text-white drop-shadow-md max-w-2xl mx-auto text-sm md:text-base font-bold leading-relaxed px-4 text-pretty"
                        >
                            The preferred partner for organizations that demand precision, reliability, and world-class talent architecture.
                        </motion.p>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
                </header>

                <div>
                    <WhyUsSection />
                </div>

                <div className="bg-surface/30">
                    <DifferentiatorsSection />
                </div>

                <div className="bg-background">
                    <ServicesSection />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default WhyUs;

