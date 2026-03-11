import { Link, useLocation } from "react-router-dom";
import { Linkedin, Mail, MapPin, Phone, Instagram, ArrowUpRight, Globe } from "lucide-react";
import { motion, Variants } from "framer-motion";

// reuse same logo asset from navbar
import logo from "@/assets/MainLogo.png";

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
    <footer className="relative bg-white pt-4 pb-4 overflow-hidden text-foreground">
      {/* Decorative High-End Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 mb-6 border-b border-white/5 pb-6"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-1 space-y-4 text-center sm:text-left">
            <Link to="/" className="inline-block group transition-transform hover:scale-[1.01]">
              <img
                src={logo}
                alt="Nautilus International"
                className="h-14 md:h-18 lg:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-black text-sm md:text-base font-normal leading-relaxed max-w-sm">
              "A strategic architecture of recruitment, engineered to build the world's most dynamic executive teams."
            </p>
            <div className="flex gap-4 pt-2">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Mail, href: "mailto:hr@nautilusinternational.in" }
              ].map((social, i) => (
                <motion.a
                  whileHover={{ y: -5, backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}
                  key={i} href={social.href}
                  className="w-11 h-11 rounded-xl bg-white/20 border border-white/10 flex items-center justify-center transition-all duration-500 shadow-lg text-black"
                >
                  <social.icon size={20} className="text-black" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Global Navigation */}
          <motion.div variants={fadeInUp} className="space-y-4 text-center sm:text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Process", path: "/recruitment-process" },
                { label: "Why Us", path: "/why-us" },
                { label: "Contact Us", path: "/contact" }
              ].map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm md:text-base font-normal text-foreground drop-shadow-md hover:text-gold hover:translate-x-2 transition-all flex items-center gap-2 group">
                    <ArrowUpRight size={14} className="text-gold/20 group-hover:text-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sector Expertise */}
          <motion.div variants={fadeInUp} className="space-y-4 text-center sm:text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Expertise</h4>
            <ul className="space-y-2.5 text-sm md:text-base font-normal text-black">
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
          <motion.div variants={fadeInUp} className={`space-y-4 ${isContactPage ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Global Reach</h4>
            <div className="space-y-3">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin size={18} className="text-foreground" />
                </div>
                <div className="text-sm md:text-base font-normal leading-relaxed text-black">
                  <span className="block text-black mb-1">Nautilus International</span>
                  Office No 214, Vishnu Capital, <br />
                  City Pride School Lane, <br />
                  Chikhali - Moshi, Pune, <br />
                  Maharashtra, India – 411 062
                </div>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-gold" />
                </div>
                <a href="tel:+917410775779" className="text-sm md:text-base font-normal text-black hover:text-gold transition-colors">
                  +91 7410775779
                </a>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-gold" />
                </div>
                <a href="mailto:hr@nautilusinternational.in" className="text-sm md:text-base font-normal text-black hover:text-gold transition-colors break-all">
                  hr@nautilusinternational.in
                </a>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Globe size={18} className="text-gold" />
                </div>
                <a href="https://www.nautilusinternational.in" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-normal text-black hover:text-gold transition-colors break-all">
                  www.nautilusinternational.in
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
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4 border-t border-white/5"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-normal text-white bg-primary px-4 py-2 rounded-md text-center md:text-left">
            © {new Date().getFullYear()} Nautilus International. Architecture of Success.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <a href="#" className="bg-primary text-white px-3 py-1 rounded-md text-[10px] md:text-xs uppercase tracking-[0.3em] font-normal transition-opacity hover:opacity-90">Privacy</a>
            <a href="#" className="bg-primary text-white px-3 py-1 rounded-md text-[10px] md:text-xs uppercase tracking-[0.3em] font-normal transition-opacity hover:opacity-90">Terms</a>
            <a href="#" className="bg-primary text-white px-3 py-1 rounded-md text-[10px] md:text-xs uppercase tracking-[0.3em] font-normal transition-opacity hover:opacity-90">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;


