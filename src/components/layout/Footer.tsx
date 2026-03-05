import { Link, useLocation } from "react-router-dom";
import { Linkedin, Mail, MapPin, Phone, Instagram, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
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
        delayChildren: 0.1
      }
    }
  };

  return (
    <footer className="relative bg-navy pt-16 pb-10 overflow-hidden text-white/90">
      {/* Decorative High-End Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 border-b border-white/5 pb-10"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-1 space-y-6">
            <Link to="/" className="inline-block group transition-transform hover:scale-[1.01]">
              <h3 className="text-2xl md:text-3xl font-display font-bold leading-tight tracking-tighter">
                Nautilus <br />
                <span className="text-gold italic">International</span>
              </h3>
            </Link>
            <p className="text-white/60 text-sm md:text-base font-light leading-relaxed italic max-w-sm">
              "A strategic architecture of recruitment, engineered to build the world's most dynamic executive teams."
            </p>
            <div className="flex gap-4 pt-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Mail, href: "mailto:hr@nautilusinternational.in" }
              ].map((social, i) => (
                <motion.a
                  whileHover={{ y: -5, backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}
                  key={i} href={social.href}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 shadow-lg text-white/70"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Global Navigation */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold/80">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Process", path: "/recruitment-process" },
                { label: "Why Us", path: "/why-us" },
                { label: "Contact Us", path: "/contact" }
              ].map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm md:text-base font-light text-white/70 hover:text-gold hover:translate-x-2 transition-all flex items-center gap-2 group">
                    <ArrowUpRight size={14} className="text-gold/20 group-hover:text-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sector Expertise */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold/80">Expertise</h4>
            <ul className="space-y-4 text-sm md:text-base font-light text-white/70">
              {[
                "Strategic IT Sourcing",
                "Advanced Engineering",
                "Executive Leadership",
                "BFSI Intelligence",
                "Healthcare Markets"
              ].map((sector) => (
                <li key={sector} className="hover:text-gold transition-colors cursor-default flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-teal/30" /> {sector}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Reach Out - Adjust sizing for contact page redundancy */}
          <motion.div variants={fadeInUp} className={`space-y-6 ${isContactPage ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold/80">Global Reach</h4>
            <div className="space-y-5">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <p className="text-sm md:text-base font-light leading-relaxed text-white/70">
                  Pune, Maharashtra, <br />India – 411062
                </p>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-gold" />
                </div>
                <a href="tel:+917410775779" className="text-sm md:text-base font-light text-white/70 hover:text-gold transition-colors">
                  +91 7410775779
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-white/30 text-center md:text-left">
            © {new Date().getFullYear()} Nautilus International. Architecture of Success.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] md:text-xs uppercase tracking-[0.3em] font-black text-white/30">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;


