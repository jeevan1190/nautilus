import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const benefits = [
        { icon: Zap, title: "Accelerated Hiring", desc: "Reducing time-to-fill by 40% through our proprietary candidate pipeline." },
        { icon: ShieldCheck, title: "Verified Quality", desc: "Rigorous 5-step vetting process ensuring only top 5% talent reach your desk." },
        { icon: TrendingUp, title: "Strategic Growth", desc: "Consultative approach that aligns recruitment with your long-term roadmap." },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background overflow-hidden font-display">
            <Navbar />
            <main className="flex-grow">
                <header className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
                    <motion.div
                        initial={{ scale: 1.1, filter: "brightness(0.2)" }}
                        animate={{ scale: 1, filter: "brightness(0.4)" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070"
                            alt="Corporate Services"
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
                            Elite Expertise
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white drop-shadow-lg mb-6 tracking-tight leading-tight py-1"
                        >
                            Our <span className="text-gradient-gold italic">Services</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="text-white drop-shadow-md max-w-2xl mx-auto text-sm md:text-base font-bold leading-relaxed px-4 text-pretty"
                        >
                            Tailored recruitment strategies and strategic HR advisory designed for the modern global enterprise.
                        </motion.p>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
                </header>

                {/* Professional Recruitment Imagery Section */}
                <section className="py-16 bg-background relative z-10 w-full px-6 md:px-10 lg:px-20 xl:px-24">
                    <div className="grid md:grid-cols-3 gap-8 items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="w-full h-[300px] sm:h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_24,_43,_0.1)] relative group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                                alt="Recruitment Interview Process"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full h-[300px] sm:h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_24,_43,_0.1)] relative group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                                alt="Executive Recruitment Meeting"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="w-full h-[300px] sm:h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_24,_43,_0.1)] relative group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                                alt="Executive Search Team"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500" />
                        </motion.div>
                    </div>
                </section>

                {/* Core Expertise Section */}
                <div className="bg-background pt-4 md:pt-12">
                    <ServicesSection />
                </div>

                {/* Service Commitment / Benefits */}
                <section className="py-24 bg-surface/30 relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 items-stretch">
                            {benefits.map((b, i) => (
                                <motion.div
                                    key={b.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                    className="flex flex-col h-full relative p-8 md:p-10 rounded-3xl bg-card border border-navy/5 shadow-[0_12px_35px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12)] hover:border-gold/30 transition-all duration-500 group overflow-hidden"
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
                                    <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-8 group-hover:scale-110 shadow-[0_10px_20px_rgba(13,148,136,0.1)] transition-transform duration-500">
                                        <b.icon size={26} />
                                    </div>
                                    <h4 className="text-xl font-bold text-foreground mb-4 font-display group-hover:text-navy transition-colors">{b.title}</h4>
                                    <p className="text-foreground text-sm md:text-base leading-relaxed flex-grow">{b.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Professional Interview Imagery Section */}
                <section className="py-16 bg-background relative z-10 w-full px-6 md:px-10 lg:px-20 xl:px-24">
                    <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_24,_43,_0.1)] relative group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200"
                                alt="Employer and Candidate Consulting with Us"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_24,_43,_0.1)] relative group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200"
                                alt="Formal Interview Process"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500" />
                        </motion.div>
                    </div>
                </section>

                {/* Integration Why Us for full picture */}
                <div className="bg-background">
                    <WhyUsSection />
                </div>

                {/* Services CTA */}
                <section className="py-24 bg-surface/50">
                    <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative overflow-hidden gradient-navy rounded-[3rem] p-12 md:p-20 text-center shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-96 h-96 bg-teal/20 rounded-full blur-[120px] -mr-48 -mt-48" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px] -ml-48 -mb-48" />

                            <div className="relative z-10 max-w-4xl mx-auto">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight"
                                >
                                    Ready to Elevate Your <br />
                                    <span className="text-gradient-gold italic">Global Workforce?</span>
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-white drop-shadow-md text-lg md:text-xl mb-12 max-w-2xl mx-auto"
                                >
                                    Partner with Nautilus International and gain access to a world of exceptional talent and strategic HR intelligence.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-col sm:flex-row gap-6 justify-center"
                                >
                                    <Link
                                        to="/contact"
                                        className="bg-gold text-navy px-10 py-5 rounded-full font-bold hover:bg-gold/90 hover:scale-105 transition-all shadow-xl tracking-widest uppercase text-sm"
                                    >
                                        Start a Consultation
                                    </Link>
                                    <Link
                                        to="/recruitment-process"
                                        className="border border-white/20 text-white px-10 py-5 rounded-full font-bold hover:bg-white/5 transition-all text-sm tracking-widest uppercase"
                                    >
                                        Learn Our Process
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Services;


