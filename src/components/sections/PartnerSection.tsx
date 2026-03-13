import { Award, Settings2, Users, Zap, Handshake, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

const partnerFeatures = [
    {
        title: "Expert Talent Acquisition",
        desc: "Our specialized team combines industry knowledge with advanced recruitment technology to attract and identify top-tier talent that aligns with your organization’s values and objectives.",
        icon: Award,
        colorClass: "text-amber-500",
        bgColor: "bg-amber-50",
        accentColor: "bg-amber-500"
    },
    {
        title: "Customized Solutions",
        desc: "We understand that every organization is unique. We tailor our recruitment strategies to meet your specific needs, ensuring that we find the right individuals who can contribute to your vision.",
        icon: Settings2,
        colorClass: "text-slate-500",
        bgColor: "bg-slate-50",
        accentColor: "bg-slate-500"
    },
    {
        title: "Enhanced Diversity",
        desc: "Our commitment to inclusivity means you will benefit from a diverse talent pool, offering a range of perspectives, ideas, and experiences that can drive innovation and creativity within your organization.",
        icon: Users,
        colorClass: "text-emerald-500",
        bgColor: "bg-emerald-50",
        accentColor: "bg-emerald-500"
    },
    {
        title: "Streamlined Hiring Process",
        desc: "By merging technology with human expertise, we optimize and simplify your hiring process, saving you time and resources while increasing the quality of candidates presented.",
        icon: Zap,
        colorClass: "text-cyan-500",
        bgColor: "bg-cyan-50",
        accentColor: "bg-cyan-500"
    },
    {
        title: "Long-Term Relationships",
        desc: "We believe in building lasting partnerships with our clients, providing ongoing support and guidance as your organization evolves and your talent needs change.",
        icon: Handshake,
        colorClass: "text-orange-500",
        bgColor: "bg-orange-50",
        accentColor: "bg-orange-500"
    },
    {
        title: "Future-Focused Growth",
        desc: "Together, we will assemble dynamic teams that not only meet today’s challenges but are also equipped to tackle future opportunities, positioning your organization as a leader in your industry.",
        icon: TrendingUp,
        colorClass: "text-indigo-500",
        bgColor: "bg-indigo-50",
        accentColor: "bg-indigo-500"
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

const PartnerSection = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -mr-64 pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px] -ml-64 pointer-events-none" />

            <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4">Strategic Alliance</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-navy mb-8 leading-[1.1]">
                        Why <span className="text-gradient-gold italic">Partner</span> with Us?
                    </h2>
                    <p className="text-navy/60 text-lg md:text-2xl font-bold italic leading-relaxed px-4">
                        Partnering with Nautilus International goes beyond traditional recruitment; it is about building a strategic alliance that transforms potential into achievement.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 items-start"
                >
                    {partnerFeatures.map((item, i) => (
                        <motion.div
                            key={item.title}
                            variants={fadeInUp}
                            className="group relative h-full flex flex-col"
                        >
                            {/* Premium Card Design */}
                            <div className="relative z-10 p-8 sm:p-10 bg-white border border-navy/5 rounded-[2.5rem] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col overflow-hidden">
                                {/* Visual Accent */}
                                <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full blur-3xl -mr-16 -mt-16 transition-colors duration-500 ${item.accentColor}`} />
                                
                                {/* Icon Container */}
                                <div className={`w-16 h-16 rounded-2xl ${item.bgColor} ${item.colorClass} flex items-center justify-center mb-8 transition-all duration-500 shadow-sm border border-navy/5 group-hover:bg-navy group-hover:text-white`}>
                                    <item.icon size={30} />
                                </div>

                                <div className="flex-grow">
                                    <h4 className="text-xl sm:text-2xl font-display font-bold text-navy mb-5 leading-tight tracking-tight group-hover:text-gold transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-navy/70 text-sm sm:text-base leading-relaxed font-semibold italic">
                                        "{item.desc}"
                                    </p>
                                </div>

                                {/* Decorative Footer Detail */}
                                <div className="mt-8 pt-6 border-t border-navy/5 flex items-center justify-between">
                                    <div className="w-10 h-1 rounded-full bg-navy/5 overflow-hidden">
                                        <div className={`h-full w-0 group-hover:w-full transition-all duration-700 ${item.accentColor}`} />
                                    </div>
                                    <CheckCircle2 size={18} className="text-emerald-500/30 group-hover:text-emerald-500 transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PartnerSection;
