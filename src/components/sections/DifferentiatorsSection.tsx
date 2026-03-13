import { TrendingUp, ShieldCheck, Heart, MessageCircle, Zap, Briefcase, Handshake, Infinity as InfinityIcon, Settings2, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

const differentiators = [
    {
        title: "80% Joining Ratio",
        icon: TrendingUp,
        desc: "Our commitment to quality candidates is reflected in our impressive joining ratio of over 80%. We ensure candidates are truly ready.",
        size: "large",
        color: "text-emerald-500",
        bgColor: "bg-emerald-50"
    },
    {
        title: "Robust Vetting",
        icon: ShieldCheck,
        desc: "Thorough vetting processes that significantly reduce last-minute dropouts, ensuring reliability and commitment.",
        size: "small",
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
    {
        title: "Personalized Service",
        icon: Heart,
        desc: "Dedicated support from experts who understand both technical requirements and cultural alignment.",
        size: "small",
        color: "text-rose-500",
        bgColor: "bg-rose-50"
    },
    {
        title: "Continuous Engagement",
        icon: MessageCircle,
        desc: "Post-offer engagement that keeps candidates valued and informed, securing their successful onboarding.",
        size: "small",
        color: "text-sky-500",
        bgColor: "bg-sky-50"
    },
    {
        title: "Streamlined Process",
        icon: Zap,
        desc: "End-to-end solutions that take the hassle out of hiring, from initial sourcing to final placement.",
        size: "large",
        color: "text-amber-500",
        bgColor: "bg-amber-50"
    },
    {
        title: "Industry Expertise",
        icon: Briefcase,
        desc: "Specialists with deep knowledge across diverse sectors, providing unique insights and tailored approaches.",
        size: "small",
        color: "text-indigo-500",
        bgColor: "bg-indigo-50"
    },
    {
        title: "Trustworthy Partnership",
        icon: Handshake,
        desc: "Consistent delivery of quality results, prioritizing long-term value and transparency in every operation.",
        size: "small",
        color: "text-orange-500",
        bgColor: "bg-orange-50"
    },
    {
        title: "Long-Term Focus",
        icon: InfinityIcon,
        desc: "Invested in the sustainable success of both clients and candidates, building teams that contribute meaningfully.",
        size: "small",
        color: "text-violet-500",
        bgColor: "bg-violet-50"
    },
    {
        title: "Tailored Strategies",
        icon: Settings2,
        desc: "Customized recruitment strategies that align perfectly with your specific organizational goals and needs.",
        size: "small",
        color: "text-slate-500",
        bgColor: "bg-slate-50"
    }
];

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const DifferentiatorsSection = () => {
    return (
        <section className="py-32 bg-surface/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

            <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-20 text-center"
                >
                    <p className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4">The Competitive Edge</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-8 leading-[1.1]">
                        What <span className="text-gradient-gold italic">Differentiates</span> Us?
                    </h2>
                    <p className="text-navy/60 text-base md:text-xl font-medium max-w-3xl mx-auto leading-relaxed italic border-l-4 md:border-l-0 md:border-y border-navy/10 py-4 md:py-6 pl-8 md:pl-0">
                        "Nautilus International stands out through a strategic architecture of unique benefits engineered for your organizational success."
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
                >
                    {differentiators.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                className="group relative bg-white border border-navy/5 rounded-[2rem] p-8 shadow-[0_15px_45px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_45px_80px_-20px_rgba(15,23,42,0.1)] transition-all duration-700 flex flex-col"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center ${item.color} group-hover:bg-navy group-hover:text-white transition-all duration-500 shadow-sm border border-navy/5`}>
                                        <Icon size={28} />
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <CheckCircle2 size={24} className="text-emerald-500" />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="font-display font-bold text-navy mb-4 group-hover:text-gold transition-colors text-xl">
                                        {item.title}
                                    </h3>

                                    <p className="text-navy/60 leading-relaxed font-semibold italic text-sm">
                                        "{item.desc}"
                                    </p>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <div className="w-8 h-1 bg-navy/5 rounded-full group-hover:bg-gold group-hover:w-full transition-all duration-700" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-32 relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-gold via-navy to-gold rounded-[4rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />
                    <div className="relative bg-navy rounded-[3rem] p-10 md:p-14 overflow-hidden shadow-2xl">
                        {/* Abstract Background Detail */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full -mr-32 -mt-32 blur-3xl" />

                        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-20 h-20 bg-gold/10 rounded-3xl flex items-center justify-center text-gold mb-12"
                            >
                                <Handshake size={48} />
                            </motion.div>

                            <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-10 tracking-tight leading-[1.1]">
                                Commitment to <span className="text-gold italic underline decoration-gold/20 underline-offset-8">Excellence</span>
                            </h3>

                            <p className="text-white/80 text-lg md:text-2xl font-medium italic leading-relaxed md:leading-loose">
                                "Partnering with Nautilus International means engaging a consultant that genuinely prioritizes your trajectory. Our commitment to excellence is the bridge between potential and achievement."
                            </p>

                            <div className="mt-16 flex items-center gap-8 justify-center">
                                <div className="w-16 md:w-24 h-px bg-white/20" />
                                <div className="text-gold font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                                    The Nautilus Standard
                                </div>
                                <div className="w-16 md:w-24 h-px bg-white/20" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DifferentiatorsSection;

