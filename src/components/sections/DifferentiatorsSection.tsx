import { TrendingUp, ShieldCheck, Heart, MessageCircle, Zap, Briefcase, Handshake, Infinity, Settings2, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

const differentiators = [
    {
        title: "High Joining Ratio",
        icon: TrendingUp,
        desc: "Our commitment to quality candidates is reflected in our impressive joining ratio of over 80%. We ensure candidates are truly ready."
    },
    {
        title: "Robust Vetting",
        icon: ShieldCheck,
        desc: "Thorough vetting processes that significantly reduce last-minute dropouts, ensuring reliability and commitment."
    },
    {
        title: "Personalized Service",
        icon: Heart,
        desc: "Dedicated support from experts who understand both technical requirements and cultural alignment."
    },
    {
        title: "Continuous Engagement",
        icon: MessageCircle,
        desc: "Post-offer engagement that keeps candidates valued and informed, securing their successful onboarding."
    },
    {
        title: "Streamlined Process",
        icon: Zap,
        desc: "End-to-end solutions that take the hassle out of hiring, from initial sourcing to final placement."
    },
    {
        title: "Industry Expertise",
        icon: Briefcase,
        desc: "Specialists with deep knowledge across diverse sectors, providing unique insights and tailored approaches."
    },
    {
        title: "Trustworthy Partnership",
        icon: Handshake,
        desc: "Consistent delivery of quality results, prioritizing long-term value and transparency in every operation."
    },
    {
        title: "Long-Term Focus",
        icon: Infinity,
        desc: "Invested in the sustainable success of both clients and candidates, building teams that contribute meaningfully."
    },
    {
        title: "Tailored Strategies",
        icon: Settings2,
        desc: "Customized recruitment strategies that align perfectly with your specific organizational goals and needs."
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
        <section className="py-24 bg-surface/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] -ml-48 pointer-events-none" />

            <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4">The Competitive Edge</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8 leading-[1.1]">
                        What <span className="text-gradient-gold italic">Differentiates</span> Us?
                    </h2>
                    <p className="text-foreground/60 text-base md:text-xl leading-relaxed font-bold px-4">
                        Nautilus International stands out through a strategic architecture of unique benefits engineered for your organizational success.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
                >
                    {differentiators.map((item, i) => (
                        <motion.div
                            key={item.title}
                            variants={fadeInUp}
                            whileHover={{ y: -8 }}
                            className="group relative bg-card p-8 xl:p-10 rounded-3xl border border-navy/5 shadow-[0_10px_35px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12)] hover:border-gold/30 transition-all duration-500 h-full flex flex-col"
                        >
                            {/* Decorative Corners */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-gold rounded-tl-3xl transition-colors duration-500" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-navy rounded-br-3xl transition-colors duration-500" />

                            <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-8 text-navy group-hover:rotate-[10deg] group-hover:bg-navy group-hover:text-gold transition-all duration-500 shadow-sm relative z-10">
                                <item.icon size={26} />
                            </div>

                            <h3 className="text-xl xl:text-2xl font-display font-bold text-foreground mb-4 group-hover:text-navy transition-colors relative z-10">
                                {item.title}
                            </h3>

                            <p className="text-foreground leading-relaxed text-sm xl:text-base font-bold italic relative z-10">
                                "{item.desc}"
                            </p>

                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal/20 via-gold/20 to-navy/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-24 p-10 md:p-16 lg:p-24 gradient-navy rounded-[3rem] text-center relative overflow-hidden shadow-2xl border border-white/10 group"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -mr-64 -mt-64 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[80px] -ml-48 -mb-48 pointer-events-none" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, rotate: -20 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="flex justify-center mb-10"
                        >
                            <div className="p-6 rounded-3xl bg-gold/10 text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-navy transition-all duration-700 shadow-lg">
                                <CheckCircle2 size={56} />
                            </div>
                        </motion.div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 tracking-wide leading-tight"
                        >
                            Commitment to <span className="text-gold italic">Excellence</span>
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-white drop-shadow-md text-lg md:text-2xl font-bold italic leading-relaxed md:leading-loose"
                        >
                            "Partnering with Nautilus International means engaging a consultant that genuinely prioritizes your trajectory. Our commitment to excellence is the bridge between potential and achievement."
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DifferentiatorsSection;

