import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Upload, CheckCircle2, Send, Globe, Clock, Rocket } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [fileName, setFileName] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName("");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your inquiry! Our strategic consultants will reach out to you within 24 hours.");
        setForm({ name: "", email: "", phone: "", message: "" });
        setFileName("");
    };

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

    return (
        <div className="min-h-screen flex flex-col bg-background overflow-hidden font-display">
            <Navbar />
            <main className="flex-grow">
                {/* Cinematic Header */}
                <header className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                    <motion.div
                        initial={{ scale: 1.1, filter: "brightness(0.3)" }}
                        animate={{ scale: 1, filter: "brightness(0.5)" }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src="/assets/images/office_landscape.png"
                            alt="Executive Office"
                            className="w-full h-full object-cover"
                            fetchPriority="low"
                            loading="lazy"
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
                            Connect Excellence
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white drop-shadow-lg mb-6 tracking-tight leading-tight py-1"
                        >
                            Our <span className="text-gradient-gold italic">Global Office</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="text-white drop-shadow-md max-w-2xl mx-auto text-sm md:text-base font-bold leading-relaxed px-4 text-pretty"
                        >
                            Ready to architect your organization's most critical transitions? Experience a new echelon of strategic engagement.
                        </motion.p>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
                </header>

                <section id="pathways" className="relative pt-8 pb-8 px-6">
                    <div className="max-w-[1400px] mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-3 gap-6 xl:gap-8"
                        >
                            {[
                                {
                                    title: "Organizational Growth",
                                    label: "For Partners",
                                    icon: Globe,
                                    desc: "Initiate a search for executive leadership that will architect your company's future.",
                                    color: "gold"
                                },
                                {
                                    title: "Executive Advancement",
                                    label: "For Talent",
                                    icon: Rocket,
                                    desc: "Explore high-impact transitions and enter our exclusive global talent ecosystem.",
                                    color: "teal"
                                },
                                {
                                    title: "Strategic Advisory",
                                    label: "For Consulting",
                                    icon: CheckCircle2,
                                    desc: "Request a bespoke consultation for HR architecture and specialized strategic insights.",
                                    color: "navy"
                                }
                            ].map((path, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeInUp}
                                    whileHover={{ y: -10 }}
                                    className="group relative bg-white rounded-2xl p-6 xl:p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.07)] border border-navy/5 overflow-hidden transition-all duration-500"
                                >
                                    <div className={`absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 bg-${path.color} rounded-full -mr-16 -mt-16`} />

                                    <div className="relative z-10">
                                        <span className="text-[10px] xl:text-[11px] font-black tracking-[0.4em] text-navy/30 uppercase mb-4 block">
                                            {path.label}
                                        </span>
                                        <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-navy group-hover:text-gold transition-all duration-500 shadow-sm">
                                            <path.icon size={28} />
                                        </div>
                                        <h3 className="text-xl xl:text-2xl font-display font-bold text-navy mb-2 leading-tight">
                                            {path.title}
                                        </h3>
                                        <p className="text-navy drop-shadow-md text-sm xl:text-base font-bold leading-relaxed">
                                            {path.desc}
                                        </p>
                                    </div>

                                    {/* Subtle highlight line */}
                                    <div className={`absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-${path.color}/80 via-transparent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section id="contact-interface" className="relative pb-10 z-20">
                    <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
                        <div className="max-w-[1400px] mx-auto">
                            <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 items-start">

                                {/* Sidebar: Professional Identity & Info */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={staggerContainer}
                                    className="lg:col-span-5 space-y-6 md:space-y-8"
                                >
                                    <motion.div
                                        variants={fadeInUp}
                                        className="bg-navy rounded-[2.5rem] p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] relative overflow-hidden group border border-white/10"
                                    >
                                        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none group-hover:bg-gold/30 transition-all duration-700" />
                                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/10 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none" />

                                        <div className="relative z-10">
                                            <span className="inline-block text-[10px] font-black tracking-[0.4em] text-gold/80 uppercase mb-5 px-5 py-2 rounded-full bg-gold/10 border border-gold/30 shadow-sm backdrop-blur-md">
                                                Elite Presence
                                            </span>
                                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-10 leading-tight">
                                                The <span className="text-gradient-gold italic">Nautilus</span> HQ
                                            </h2>

                                            <div className="space-y-10">
                                                {[
                                                    {
                                                        icon: MapPin,
                                                        label: "Headquarters",
                                                        value: "Vishnu Capital, Office 214, Pune, India",
                                                        detail: "City Pride School Lane, Chikhali - Moshi, 411062",
                                                        color: "text-rose-400",
                                                        bg: "bg-gradient-to-br from-rose-500/20 to-rose-600/5",
                                                        border: "border-rose-500/30"
                                                    },
                                                    {
                                                        icon: Phone,
                                                        label: "Secure Digital Line",
                                                        value: "+91 7410775779",
                                                        isLink: true,
                                                        href: "tel:+917410775779",
                                                        color: "text-emerald-400",
                                                        bg: "bg-gradient-to-br from-emerald-500/20 to-emerald-600/5",
                                                        border: "border-emerald-500/30"
                                                    },
                                                    {
                                                        icon: Mail,
                                                        label: "Strategic Inquiry",
                                                        value: "hr@nautilusinternational.in",
                                                        isLink: true,
                                                        href: "mailto:hr@nautilusinternational.in",
                                                        color: "text-sky-400",
                                                        bg: "bg-gradient-to-br from-sky-500/20 to-sky-600/5",
                                                        border: "border-sky-500/30"
                                                    }
                                                ].map((item, id) => (
                                                    <div key={id} className="flex gap-6 md:gap-8 group/item">
                                                        <div className={`w-16 h-16 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-white group-hover/item:text-navy transition-all duration-500 shadow-2xl overflow-hidden relative`}>
                                                            <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 bg-gradient-to-br from-white to-white/50 transition-opacity" />
                                                            <item.icon size={32} className={`${item.color} relative z-10 group-hover/item:text-navy transition-colors`} />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <span className="text-[12px] md:text-sm font-black tracking-[0.2em] text-gold/60 mb-2 block uppercase font-display">{item.label}</span>
                                                            {item.isLink ? (
                                                                <a href={item.href} className="text-xl md:text-2xl font-bold text-white hover:text-gold transition-all block tracking-tight font-display">
                                                                    {item.value}
                                                                </a>
                                                            ) : (
                                                                <div className="text-xl md:text-2xl font-bold text-white leading-tight tracking-tight font-display">
                                                                    {item.value}
                                                                    {item.detail && <p className="text-sm md:text-base font-semibold text-white/50 mt-2 italic tracking-normal font-display">"{item.detail}"</p>}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-14 pt-10 border-t border-white/10">
                                                <div className="flex items-center gap-6 text-white/60 text-base md:text-lg font-bold italic">
                                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shadow-inner border border-white/10">
                                                        <Clock size={24} className="text-gold" />
                                                    </div>
                                                    <span>Global Operations: 24/7 Strategic Support</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Secondary Info Cards */}
                                    <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                                        <div className="bg-surface/50 backdrop-blur-md border border-navy/5 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group hover:border-gold/30 transition-all duration-500">
                                            <Globe size={24} className="text-teal mb-4 group-hover:rotate-12 transition-transform" />
                                            <div>
                                                <p className="text-[10px] font-black tracking-widest text-navy/30 uppercase mb-1">Coverage</p>
                                                <h4 className="text-xl font-bold text-navy">Global Network</h4>
                                            </div>
                                        </div>
                                        <div className="bg-surface/50 backdrop-blur-md border border-navy/5 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group hover:border-gold/30 transition-all duration-500">
                                            <CheckCircle2 size={24} className="text-gold mb-4 group-hover:scale-110 transition-transform" />
                                            <div>
                                                <p className="text-[10px] font-black tracking-widest text-navy/30 uppercase mb-1">Standard</p>
                                                <h4 className="text-xl font-bold text-navy">ISO Certified</h4>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Main Form: The Strategic Interface */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="lg:col-span-7"
                                >
                                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)] relative overflow-hidden border border-navy/5">
                                        <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-gold via-teal to-navy" />
                                        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
                                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/[0.03] rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

                                        <div className="relative z-10">
                                            <div className="mb-10">
                                                <h3 className="text-3xl md:text-4xl font-display font-bold text-navy mb-3">Strategic <span className="text-gradient-gold italic">Submission</span></h3>
                                                <p className="text-navy/60 text-sm md:text-base font-bold leading-relaxed max-w-xl">
                                                    Provide your details for a confidential executive consultation. Our experts will process your inquiry with the highest priority.
                                                </p>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-xs md:text-sm font-black tracking-[0.1em] text-navy/60 ml-2 uppercase font-display">Full Name</label>
                                                        <div className="relative group">
                                                            <input
                                                                type="text" name="name" required placeholder="Legal Name" value={form.name} onChange={handleChange}
                                                                className="w-full bg-surface border-2 border-transparent rounded-2xl py-4 px-5 text-base text-navy placeholder:text-navy/20 focus:outline-none focus:border-gold/30 focus:bg-white focus:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.2)] transition-all shadow-inner font-display"
                                                            />
                                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/10 to-teal/10 opacity-0 group-focus-within:opacity-100 -z-10 blur-sm transition-opacity" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-xs md:text-sm font-black tracking-[0.1em] text-navy/60 ml-2 uppercase font-display">Email Address</label>
                                                        <div className="relative group">
                                                            <input
                                                                type="email" name="email" required placeholder="name@organization.com" value={form.email} onChange={handleChange}
                                                                className="w-full bg-surface border-2 border-transparent rounded-2xl py-4 px-5 text-base text-navy placeholder:text-navy/20 focus:outline-none focus:border-gold/30 focus:bg-white focus:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.2)] transition-all shadow-inner font-display"
                                                            />
                                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/10 to-teal/10 opacity-0 group-focus-within:opacity-100 -z-10 blur-sm transition-opacity" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-xs md:text-sm font-black tracking-[0.1em] text-navy/60 ml-2 uppercase font-display">Phone Number</label>
                                                    <div className="relative group">
                                                        <input
                                                            type="tel" name="phone" placeholder="+00 000 000 0000" value={form.phone} onChange={handleChange}
                                                            className="w-full bg-surface border-2 border-transparent rounded-2xl py-4 px-5 text-base text-navy placeholder:text-navy/20 focus:outline-none focus:border-gold/30 focus:bg-white focus:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.2)] transition-all shadow-inner font-display"
                                                        />
                                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/10 to-teal/10 opacity-0 group-focus-within:opacity-100 -z-10 blur-sm transition-opacity" />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-xs md:text-sm font-black tracking-[0.1em] text-navy/60 ml-2 uppercase font-display">Upload CV / Portfolio (Optional)</label>
                                                    <div className="relative group/file">
                                                        <input
                                                            type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange}
                                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                        />
                                                        <div className="w-full rounded-2xl border-2 border-dashed border-navy/10 group-hover/file:border-gold/50 group-hover/file:bg-gold/5 bg-surface/30 p-5 flex flex-row items-center justify-center gap-4 transition-all duration-500 shadow-inner">
                                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${fileName ? "bg-gold text-white" : "bg-navy/5 text-navy/20"}`}>
                                                                <Upload size={24} />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className={`text-base tracking-wide font-display ${fileName ? "text-navy font-bold" : "text-navy/40 font-bold"}`}>
                                                                    {fileName || "Click to browse or drag & drop"}
                                                                </span>
                                                                {!fileName && <span className="text-[10px] text-navy/30 uppercase font-black tracking-widest mt-0.5 font-sans">PDF, DOCX up to 10MB</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-xs md:text-sm font-black tracking-[0.1em] text-navy/60 ml-2 uppercase font-display">Message</label>
                                                    <div className="relative group">
                                                        <textarea
                                                            name="message" rows={3} placeholder="Briefly describe your objectives or specific search requirements..." value={form.message} onChange={handleChange}
                                                            className="w-full bg-surface border-2 border-transparent rounded-2xl py-4 px-5 text-base text-navy placeholder:text-navy/20 focus:outline-none focus:border-gold/30 focus:bg-white focus:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.1)] transition-all shadow-inner resize-none font-display"
                                                        />
                                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/10 to-teal/10 opacity-0 group-focus-within:opacity-100 -z-10 blur-sm transition-opacity" />
                                                    </div>
                                                </div>

                                                <motion.button
                                                    whileHover={{ y: -4, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)" }}
                                                    whileTap={{ scale: 0.98 }}
                                                    type="submit"
                                                    className="w-full group relative h-16 rounded-2xl gradient-gold text-white font-bold tracking-[0.4em] text-sm md:text-base shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] overflow-hidden transition-all"
                                                >
                                                    <div className="relative z-10 flex items-center justify-center gap-3">
                                                        SEND MESSAGE <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                                    </div>
                                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                                                </motion.button>
                                            </form>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Spacer Section for Footer Transition */}
                <div className="h-10 md:h-16 bg-background" />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;

