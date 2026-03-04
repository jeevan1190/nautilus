const services = [
  {
    icon: Briefcase,
    title: "Executive Search",
    desc: "Targeted search for senior leadership roles with absolute confidentiality and precision.",
    features: [
      "Discreet Global Networking",
      "Leadership Capability Assessment",
      "Psychometric Evaluation",
      "Transition & Success Coaching"
    ],
    color: "gold"
  },
  {
    icon: Search,
    title: "Recruitment & Talent acquisition",
    desc: "Comprehensive solutions covering the full lifecycle — from sourcing to onboarding top-tier talent.",
    features: [
      "AI-Powered Talent Sourcing",
      "Rigorous Multi-Stage Vetting",
      "Cultural Integration Mapping",
      "End-to-End Onboarding Support"
    ],
    color: "teal"
  },
  {
    icon: Settings,
    title: "HR Advisory Services",
    desc: "Strategic HR consulting to optimize your organization's people practices and internal policies.",
    features: [
      "Strategic Workforce Planning",
      "Policy & Compliance Auditing",
      "Performance Management Design",
      "HR Transformation Strategy"
    ],
    color: "navy"
  },
  {
    icon: Globe,
    title: "Global Mobility Support",
    desc: "Navigating the complexities of international relocation and visa compliance for your global team.",
    features: [
      "Visa & Work Permit Guidance",
      "Relocation Management",
      "Global Compliance Audits",
      "Expat Tax & Policy Advisory"
    ],
    color: "teal"
  },
  {
    icon: Users,
    title: "Strategic Talent Advisory",
    desc: "Data-driven insights to help you build a resilient, future-ready workforce through the right talent.",
    features: [
      "Workforce Data Analytics",
      "Skills Gap Identification",
      "Succession Planning",
      "Employer Branding Strategy"
    ],
    color: "gold"
  },
  {
    icon: Zap,
    title: "Remote Workforce Solutions",
    desc: "Enabling seamless transition to remote or hybrid models with the right digital talent and culture.",
    features: [
      "Hybrid Model Consulting",
      "Distributed Team Management",
      "Remote-First Culture Design",
      "Digital Tooling Strategy"
    ],
    color: "navy"
  }
];

import { Briefcase, Search, Settings, ArrowRight, CheckCircle2, Globe, Users, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, Variants } from "framer-motion";

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

const ServicesSection = () => {
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';
  const displayServices = isServicesPage ? services : services.slice(0, 3);

  return (
    <section id="services" className={`py-24 ${isServicesPage ? 'pt-12' : 'bg-background'} relative overflow-hidden`}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-10"
        >
          <div className="max-w-4xl text-center md:text-left">
            <p className="text-teal font-bold tracking-[0.3em] uppercase text-xs mb-3">Our Expertise</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1]">
              Specialized Solutions for <br />
              <span className="text-gradient-gold italic">Global Growth</span>
            </h2>
          </div>
          {!isServicesPage && (
            <Link
              to="/services"
              className="group flex items-center justify-center md:justify-start gap-3 text-navy font-bold hover:text-teal transition-all text-base tracking-widest uppercase"
            >
              Explore All Expertise <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
        >
          {displayServices.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group relative bg-card rounded-2xl border border-navy/5 p-8 xl:p-10 shadow-[0_12px_35px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12)] hover:border-gold/30 transition-all duration-500 flex flex-col h-full"
            >
              {/* Subtle card background pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />

              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-gold rounded-tl-2xl transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-navy rounded-br-2xl transition-colors duration-500" />

              <div className={`w-14 h-14 xl:w-16 xl:h-16 rounded-2xl flex items-center justify-center mb-6 xl:mb-8 transition-all group-hover:scale-110 duration-500 ${s.color === 'teal' ? 'bg-teal/10 text-teal shadow-[0_10px_20px_rgba(13,148,136,0.1)]' :
                s.color === 'gold' ? 'bg-gold/10 text-gold shadow-[0_10px_20px_rgba(202,138,4,0.1)]' :
                  'bg-navy/10 text-navy shadow-[0_10px_20px_rgba(30,41,59,0.1)]'
                }`}>
                <s.icon size={28} />
              </div>

              <h3 className="text-xl xl:text-2xl font-display font-bold text-foreground mb-4 group-hover:text-navy transition-colors">{s.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm xl:text-base font-normal mb-8 flex-grow">
                {s.desc}
              </p>

              <ul className="space-y-3 xl:space-y-4 pt-6 mt-auto border-t border-navy/5">
                {s.features.map((feature, fIdx) => (
                  <motion.li
                    key={fIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (fIdx * 0.1) }}
                    className="flex items-center gap-3 text-xs xl:text-sm text-foreground/80 group-hover:text-foreground transition-colors"
                  >
                    <CheckCircle2 size={16} className="text-teal shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;


