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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-4 border-b border-white/5 pb-4"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-1 space-y-3 text-center sm:text-left">
            <Link to="/" className="inline-block group transition-transform hover:scale-[1.01]">
              <img
                src={logo}
                alt="Nautilus International"
                loading="lazy"
                className="h-12 md:h-16 lg:h-18 w-auto object-contain"
              />
            </Link>
            <p className="text-black text-xs md:text-sm font-normal leading-relaxed max-w-sm">
              "A strategic architecture of recruitment, engineered to build the world's most dynamic executive teams."
            </p>
            <div className="flex gap-4 pt-2">
              {[
                {
                  href: "#",
                  color: "#FFFFFF",
                  customIcon: <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" className="w-[20px] h-[20px] object-contain" />
                },
                {
                  href: "#",
                  color: "#FFFFFF",
                  customIcon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" className="w-[20px] h-[20px] object-contain" />
                },
                {
                  href: "mailto:hr@nautilusinternational.in",
                  color: "#FFFFFF",
                  customIcon: <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" className="w-[20px] h-[20px] object-contain" />
                }
              ].map((social, i) => (
                <motion.a
                  whileHover={{ y: -5, backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}
                  key={i} href={social.href}
                  className="w-11 h-11 rounded-xl border-2 border-white flex items-center justify-center transition-all duration-500 shadow-lg"
                  style={{ backgroundColor: social.color }}
                >
                  {social.customIcon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Global Navigation */}
          <motion.div variants={fadeInUp} className="space-y-3 text-center sm:text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Navigation</h4>
            <ul className="space-y-1.5">
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
          <motion.div variants={fadeInUp} className="space-y-3 text-center sm:text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Expertise</h4>
            <ul className="space-y-2 text-sm md:text-base font-normal text-black">
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

          {/* Reach Out */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Global Reach</h4>
            <div className="space-y-2.5">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white border-2 border-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" alt="Location" className="w-[20px] h-[20px] object-contain" />
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
                <div className="w-10 h-10 rounded-xl bg-white border-2 border-white flex items-center justify-center shrink-0 shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Phone" className="w-[22px] h-[22px] object-contain" />
                </div>
                <a href="tel:+917410775779" className="text-sm md:text-base font-normal text-black hover:text-gold transition-colors">
                  +91 7410775779
                </a>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-xl bg-white border-2 border-white flex items-center justify-center shrink-0 shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Mail" className="w-[20px] h-[20px] object-contain" />
                </div>
                <a href="mailto:hr@nautilusinternational.in" className="text-sm md:text-base font-normal text-black hover:text-gold transition-colors break-all">
                  hr@nautilusinternational.in
                </a>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-xl bg-white border-2 border-white flex items-center justify-center shrink-0 shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg" alt="Website" className="w-[20px] h-[20px] object-contain" />
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
          className="relative flex flex-col items-center gap-4 pt-4 pb-2 border-t border-white/5"
        >
          <div className="static md:absolute md:top-4 md:right-0 flex flex-wrap justify-center md:justify-end gap-3 md:gap-4 w-full md:w-auto">
            <a href="#" className="text-primary px-3 py-1 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold transition-colors hover:text-gold">Privacy</a>
            <a href="#" className="text-primary px-3 py-1 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold transition-colors hover:text-gold">Terms</a>
            <a href="#" className="text-primary px-3 py-1 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold transition-colors hover:text-gold">Cookies</a>
          </div>

          <div className="text-center space-y-2">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-normal text-black">
              © {new Date().getFullYear()} NAUTILUS INTERNATIONAL. ARCHITECTURE OF SUCCESS.
            </p>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-normal text-black">
              ALL RIGHTS RESERVED.
            </p>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-primary pt-2">
              DEVELOPED BY
            </p>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-orange-500">
              INFOYASHONAND TECHNOLOGY PVT.LTD
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;


