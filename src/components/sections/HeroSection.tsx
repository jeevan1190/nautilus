import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";

const HeroSection = () => {
  const heroImage = "/assets/images/office_landscape.png";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Professional Corporate Background"
          className="w-full h-full object-cover"
          fetchPriority="low"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold font-semibold tracking-widest uppercase text-xs">
              Excellence in Global Recruitment
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-8 leading-[1.1]">
            Nautilus <br />
            <span className="text-gradient-gold italic">International</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-primary-foreground/70 text-base md:text-lg lg:text-xl leading-relaxed mb-12 font-bold px-4">
            We bridge the gap between world-class talent and visionary organizations.
            Experience a new standard in specialized executive search and HR advisory.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link
              to="/services"
              className="gradient-teal text-white px-8 md:px-10 py-3.5 md:py-4 rounded-md font-bold tracking-wider hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all transform hover:-translate-y-1 text-center text-sm w-full sm:w-auto"
            >
              OUR SERVICES
            </Link>
            <Link
              to="/contact"
              className="group relative overflow-hidden px-8 md:px-10 py-3.5 md:py-4 rounded-md font-bold tracking-wider text-primary-foreground border border-primary-foreground/30 text-center text-sm w-full sm:w-auto"
            >
              <div className="absolute inset-0 w-0 bg-primary-foreground transition-all duration-300 group-hover:w-full" />
              <span className="relative z-10 group-hover:text-navy transition-colors">SUBMIT YOUR CV</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] text-primary-foreground/40 uppercase tracking-[0.5em]">Scroll</span>
        <motion.div
          animate={{ height: [48, 24, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>

      {/* Side Decorative line */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 opacity-20">
        <div className="w-px h-32 bg-primary-foreground" />
        <span className="rotate-90 text-xs tracking-[1em] uppercase text-primary-foreground flex-shrink-0">Nautilus</span>
        <div className="w-px h-32 bg-primary-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;

