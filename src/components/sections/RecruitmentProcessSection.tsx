import { ClipboardList, Search, Globe, Filter, UserCheck, Calendar, Handshake, Rocket } from "lucide-react";
import { motion, Variants } from "framer-motion";

const processSteps = [
    {
        title: "Strategic Discovery",
        icon: ClipboardList,
        desc: "In-depth consultation to align with your unique corporate culture and long-term growth objectives."
    },
    {
        title: "Precision Analysis",
        icon: Search,
        desc: "Defining critical success factors and technical competencies for each unique role."
    },
    {
        title: "Intelligence Sourcing",
        icon: Globe,
        desc: "Leveraging global networks and AI-powered identifiers to locate high-impact talent."
    },
    {
        title: "Rigorous Vetting",
        icon: Filter,
        desc: "Multi-layered screening ensures candidates exceed both technical and cultural standards."
    },
    {
        title: "Expert Assessment",
        icon: UserCheck,
        desc: "Industry-specific evaluations of leadership potential and interpersonal synergy."
    },
    {
        title: "Seamless Logistics",
        icon: Calendar,
        desc: "White-glove coordination of the entire interview and evaluation lifecycle."
    },
    {
        title: "Offer Engineering",
        icon: Handshake,
        desc: "Strategic negotiation management to ensure a mutually beneficial and sustainable partnership."
    },
    {
        title: "Strategic Onboarding",
        icon: Rocket,
        desc: "Ensuring a fluid transition and rapid integration of new leadership into your ecosystem."
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

const RecruitmentProcessSection = () => {
    return (
        <section className="py-24 bg-surface/50 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
                >
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            variants={fadeInUp}
                            whileHover={{ y: -10 }}
                            className="group relative bg-card p-8 xl:p-10 rounded-3xl border border-navy/5 shadow-[0_10px_35px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12)] hover:border-gold/30 transition-all duration-500 h-full flex flex-col"
                        >
                            {/* Sequential Progress Line (Visual only) */}
                            {index % 4 !== 3 && (
                                <div className="absolute top-1/2 -right-4 w-8 h-[1px] bg-gold/10 hidden lg:block" />
                            )}

                            {/* Decorative Corners */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-gold rounded-tl-3xl transition-colors duration-500" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-navy rounded-br-3xl transition-colors duration-500" />

                            <div className="flex justify-between items-start mb-6 xl:mb-8">
                                <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-2xl bg-navy/5 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-gold transition-all duration-500 shadow-sm relative z-10">
                                    <step.icon size={window.innerWidth > 1280 ? 30 : 24} />
                                </div>
                                <span className="text-4xl xl:text-5xl font-display font-bold text-navy/5 group-hover:text-gold/10 transition-colors duration-500 select-none">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <h3 className="text-lg xl:text-xl font-display font-bold text-foreground mb-4 leading-tight group-hover:text-navy transition-colors relative z-10">
                                {step.title}
                            </h3>

                            <p className="text-foreground text-xs xl:text-sm leading-relaxed font-bold group-hover:text-foreground/90 transition-colors relative z-10 flex-grow">
                                {step.desc}
                            </p>

                            {/* Hover accent */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal/20 via-gold/20 to-navy/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default RecruitmentProcessSection;

