const services = [
  {
    icon: Briefcase,
    title: "Executive Search",
    desc: "Our Executive Search Team specializes in identifying, attracting, and recruiting middle to senior-level executives for critical leadership positions. We combine extensive research, established networks, and targeted strategies to secure candidates with the right qualifications, experience, and cultural fit.",
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
    desc: "Talent Mapping & Market Analysis: Gain insights into industry-specific talent pools, market trends, and competitor benchmarks to support informed leadership decisions. Confidential Search: Handle sensitive recruitment assignments with the highest level of discretion, ensuring complete confidentiality for both clients and candidates. Customized Assessments: Conduct tailored screenings, evaluations, and interviews to ensure candidates meet role-specific requirements before presentation.",
    features: [
      "Talent Mapping & Market Analysis",
      "Confidential Search",
      "Customized Assessments"
    ],
    color: "teal"
  },
  {
    icon: Settings,
    title: "HR Advisory Services",
    desc: "Our HR advisory services are driven by a team of seasoned HR experts, each bringing decades of rich and diverse experience in several key areas. We tailor organizational structures, cultivate strong leaders through personalized coaching programs, and clarify roles and responsibilities within your organization to ensure optimal performance and accountability.",
    features: [
      "Organization Design",
      "Leadership Development and Coaching",
      "Roles and Responsibilities",
      "Policy Formulation",
      "Compensation and Rewards Management"
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
    desc: "Client-Centric Approach: Every Executive Search project is led by a senior consultant, providing a single point of contact and ensuring accountability at the highest level. We work closely with client leadership teams to understand organizational goals and deliver talent solutions that drive long-term success. Our methodologies ensure precision, confidentiality, and alignment with your business vision.",
    features: [
      "Director-Level Oversight",
      "Strategic Partnership",
      "Trusted Process"
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

import { Briefcase, Search, Settings, ArrowRight, CheckCircle2, Globe, Users, Zap, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

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

const ServiceCard = ({ s, index }: { s: any, index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorClasses = {
    icon: s.color === 'teal'
      ? 'bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white'
      : s.color === 'gold'
        ? 'bg-gold/10 text-gold group-hover:bg-gold group-hover:text-navy'
        : 'bg-navy/10 text-navy group-hover:bg-navy group-hover:text-white',
    bar: s.color === 'teal' ? 'bg-teal' : s.color === 'gold' ? 'bg-gold' : 'bg-navy',
    check: s.color === 'teal' ? 'text-teal' : s.color === 'gold' ? 'text-gold' : 'text-navy',
    glow: s.color === 'teal'
      ? 'bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.06),transparent_70%)]'
      : s.color === 'gold'
        ? 'bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.06),transparent_70%)]'
        : 'bg-[radial-gradient(circle_at_top_right,rgba(30,41,59,0.06),transparent_70%)]',
  };

  return (
    <motion.div variants={fadeInUp} className="group">
      <div
        className={`relative bg-white border border-navy/5 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${isExpanded ? 'shadow-2xl' : 'shadow-md hover:shadow-xl hover:-translate-y-1'
          }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Colored accent bar on left */}
        <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-500 ${isExpanded ? colorClasses.bar : 'bg-navy/10 group-hover:bg-navy/30'
          }`} />

        {/* Hover glow effect */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${colorClasses.glow}`} />

        {/* Card Header — always visible */}
        <div className="relative z-10 flex items-center gap-5 px-8 py-6 pl-10">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 shadow-sm ${colorClasses.icon}`}>
            <s.icon size={24} />
          </div>

          {/* Title */}
          <div className="flex-grow min-w-0">
            <h3 className="text-lg sm:text-xl font-display font-bold text-navy leading-tight tracking-tight group-hover:text-navy/80 transition-colors">
              {s.title}
            </h3>
          </div>

          {/* Toggle Button */}
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${isExpanded ? `${colorClasses.bar} text-white` : 'bg-navy/5 text-navy group-hover:bg-navy/10'
            }`}>
            <ArrowUpRight size={16} className={`transition-transform duration-500 ${isExpanded ? 'rotate-90' : ''}`} />
          </div>
        </div>

        {/* Preview text — only when collapsed */}
        {!isExpanded && (
          <div className="relative z-10 px-8 pb-4 pl-10">
            <div className="flex gap-5">
              <div className="w-14 shrink-0" />
              <p className="text-navy/50 text-sm leading-relaxed font-medium line-clamp-2">
                {s.desc}
              </p>
            </div>
          </div>
        )}

        {/* Expandable full content */}
        <div className={`relative z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="px-8 pb-8 pl-10 border-t border-navy/5">
            <div className="flex gap-5 pt-6">
              <div className="w-14 shrink-0" />
              <div className="flex-grow">
                <p className="text-navy/75 text-sm sm:text-base leading-relaxed font-semibold mb-8">
                  {s.desc}
                </p>

                {/* Feature list */}
                <ul className="space-y-3 pt-6 border-t border-navy/5">
                  {s.features.map((feature: string, fIdx: number) => (
                    <motion.li
                      key={fIdx}
                      initial={false}
                      animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
                      transition={{ delay: fIdx * 0.06 }}
                      className="flex items-center gap-3 text-sm text-navy/80"
                    >
                      <CheckCircle2 size={16} className={`${colorClasses.check} shrink-0`} />
                      <span className="font-bold">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`relative z-10 flex items-center justify-end px-8 py-3 pl-10 border-t border-navy/5 transition-colors ${isExpanded ? 'bg-navy/3' : ''
          }`}>
          <button
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] transition-colors duration-300 focus:outline-none"
            style={{ color: isExpanded ? (s.color === 'gold' ? '#D4AF37' : s.color === 'teal' ? '#0d9488' : '#1e293b') : '#64748b' }}
            onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
          >
            {isExpanded ? 'Show less' : 'Read more'}
            <ArrowUpRight size={11} className={`transition-transform duration-500 ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
        </div>
      </div>
    </motion.div>
  );
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-[1.1]">
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
          className="grid md:grid-cols-2 gap-6 xl:gap-8 items-start"
        >
          {displayServices.map((s, i) => {
            const isLastOnHome = !isServicesPage && i === 2;
            const Icon = s.icon;

            return (
              <div key={s.title} className={isLastOnHome ? "md:col-span-2 lg:col-span-2" : ""}>
                <ServiceCard s={{ ...s, icon: Icon }} index={i} />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;


