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
            <main className="flex-grow pt-20 lg:pt-24">
                {/* Cinematic Header */}
                <header className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
                    <motion.div
                        initial={{ scale: 1.1, filter: "brightness(0.3)" }}
                        animate={{ scale: 1, filter: "brightness(0.5)" }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070"
                            alt="Executive Office"
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
                            className="inline-block text-gold font-black tracking-[0.6em] uppercase text-[10px] md:text-xs mb-6 px-4 py-2 border border-gold/20 rounded-full bg-gold/5"
                        >
                            Connect Excellence
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-display font-bold text-white mb-8 tracking-tight leading-tight py-2"
                        >
                            Our <span className="text-gradient-gold italic">Global Office</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="text-white/60 max-w-2xl mx-auto text-base md:text-xl font-light leading-relaxed px-4 text-pretty"
                        >
                            Ready to architect your organization's most critical transitions? Experience a new echelon of strategic engagement.
                        </motion.p>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
                </header>

                <section id="pathways" className="relative pt-12 pb-24 md:pb-32 px-6">
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
                                    className="group relative bg-white rounded-[2.5rem] p-10 xl:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-navy/5 overflow-hidden transition-all duration-500"
                                >
                                    <div className={`absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 bg-${path.color} rounded-full -mr-16 -mt-16`} />

                                    <div className="relative z-10">
                                        <span className="text-[10px] xl:text-[11px] font-black tracking-[0.4em] text-navy/30 uppercase mb-4 block">
                                            {path.label}
                                        </span>
                                        <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-navy group-hover:text-gold transition-all duration-500 shadow-sm">
                                            <path.icon size={28} />
                                        </div>
                                        <h3 className="text-2xl xl:text-3xl font-display font-bold text-navy mb-4 leading-tight">
                                            {path.title}
                                        </h3>
                                        <p className="text-navy/60 text-sm xl:text-base font-light leading-relaxed">
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

                <section id="contact-interface" className="relative pb-24 z-20">
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
                                        className="gradient-navy rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group border border-white/5"
                                    >
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-10 leading-tight">
                                            The <span className="text-gold italic">Nautilus</span> HQ
                                        </h2>

                                        <div className="space-y-10">
                                            {[
                                                {
                                                    icon: MapPin,
                                                    label: "Headquarters",
                                                    value: "Vishnu Capital, Office 214, Pune, India",
                                                    detail: "City Pride School Lane, Chikhali - Moshi, 411062"
                                                },
                                                {
                                                    icon: Phone,
                                                    label: "Secure Digital Line",
                                                    value: "+91 7410775779",
                                                    isLink: true,
                                                    href: "tel:+917410775779"
                                                },
                                                {
                                                    icon: Mail,
                                                    label: "Strategic Inquiry",
                                                    value: "hr@nautilusinternational.in",
                                                    isLink: true,
                                                    href: "mailto:hr@nautilusinternational.in"
                                                }
                                            ].map((item, id) => (
                                                <div key={id} className="flex gap-6 md:gap-8 group/item">
                                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-gold group-hover/item:text-navy transition-all duration-500 shadow-lg">
                                                        <item.icon size={24} className="group-hover/item:scale-110 transition-transform" />
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] md:text-[11px] font-black tracking-[0.3em] text-white/30 mb-2 block uppercase">{item.label}</span>
                                                        {item.isLink ? (
                                                            <a href={item.href} className="text-lg md:text-2xl font-medium text-white hover:text-gold transition-colors block">
                                                                {item.value}
                                                            </a>
                                                        ) : (
                                                            <div className="text-lg md:text-2xl font-medium text-white leading-snug">
                                                                {item.value}
                                                                {item.detail && <p className="text-sm md:text-base font-light text-white/40 mt-1 italic">"{item.detail}"</p>}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-12 pt-8 border-t border-white/5">
                                            <div className="flex items-center gap-4 text-white/30 text-xs md:text-sm font-light italic">
                                                <Clock size={16} />
                                                <span>Global Operations: 24/7 Strategic Support</span>
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
                                    <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 lg:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] relative overflow-hidden border border-navy/5 h-full">
                                        <div className="absolute top-0 right-0 w-96 h-96 bg-navy/[0.02] rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />

                                        <div className="relative z-10">
                                            <h3 className="text-4xl md:text-6xl font-display font-bold text-navy mb-4">Strategic <span className="text-gradient-gold italic">Submission</span></h3>
                                            <p className="text-navy/60 text-base md:text-xl font-light mb-12 max-w-2xl leading-relaxed">
                                                Initiate your bespoke engagement. Please provide your high-level details for a confidential executive consultation.
                                            </p>

                                            <form onSubmit={handleSubmit} className="space-y-8">
                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div className="space-y-3">
                                                        <label className="text-[11px] md:text-[12px] font-black tracking-[0.2em] text-navy/40 ml-1 uppercase">Full Name</label>
                                                        <input
                                                            type="text" name="name" required placeholder="Legal Name" value={form.name} onChange={handleChange}
                                                            className="w-full bg-surface/50 border border-navy/10 rounded-2xl py-5 px-6 text-lg md:text-xl text-navy placeholder:text-navy/20 focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/5 transition-all"
                                                        />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <label className="text-[11px] md:text-[12px] font-black tracking-[0.2em] text-navy/40 ml-1 uppercase">Digital Reach</label>
                                                        <input
                                                            type="email" name="email" required placeholder="name@organization.com" value={form.email} onChange={handleChange}
                                                            className="w-full bg-surface/50 border border-navy/10 rounded-2xl py-5 px-6 text-lg md:text-xl text-navy placeholder:text-navy/20 focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/5 transition-all"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    <label className="text-[11px] md:text-[12px] font-black tracking-[0.2em] text-navy/40 ml-1 uppercase">Direct Pipeline (Phone)</label>
                                                    <input
                                                        type="tel" name="phone" placeholder="+00 000 000 0000" value={form.phone} onChange={handleChange}
                                                        className="w-full bg-surface/50 border border-navy/10 rounded-2xl py-5 px-6 text-lg md:text-xl text-navy placeholder:text-navy/20 focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/5 transition-all"
                                                    />
                                                </div>

                                                <div className="space-y-4">
                                                    <label className="text-[11px] md:text-[12px] font-black tracking-[0.2em] text-navy/40 ml-1 uppercase">Executive Portfolio (Optional Upload)</label>
                                                    <div className="relative group/file">
                                                        <input
                                                            type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange}
                                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                        />
                                                        <div className="w-full rounded-2xl border-2 border-dashed border-navy/10 group-hover/file:border-gold/50 group-hover/file:bg-gold/5 bg-surface/30 p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-4 transition-all duration-500">
                                                            <Upload className={fileName ? "text-gold" : "text-navy/20"} size={36} />
                                                            <span className={`text-lg md:text-xl tracking-wide text-center md:text-left ${fileName ? "text-navy font-bold" : "text-navy/40 font-light"}`}>
                                                                {fileName || "Drag portfolio here or click to browse"}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    <label className="text-[11px] md:text-[12px] font-black tracking-[0.2em] text-navy/40 ml-1 uppercase">Strategic Intent</label>
                                                    <textarea
                                                        name="message" rows={4} placeholder="Briefly describe your objectives..." value={form.message} onChange={handleChange}
                                                        className="w-full bg-surface/50 border border-navy/10 rounded-2xl py-5 px-6 text-lg md:text-xl text-navy placeholder:text-navy/20 focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/5 transition-all resize-none"
                                                    />
                                                </div>

                                                <motion.button
                                                    whileHover={{ y: -5 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    type="submit"
                                                    className="w-full group relative h-20 md:h-24 rounded-2xl bg-navy text-gold font-bold tracking-[0.4em] text-base md:text-lg shadow-2xl overflow-hidden transition-all"
                                                >
                                                    <div className="relative z-10 flex items-center justify-center gap-5">
                                                        INITIATE TRANSMISSION <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                                                    </div>
                                                    <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
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
                <div className="h-24 md:h-40 bg-background" />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;

