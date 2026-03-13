import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const processSteps = [
    { title: "Understanding Your Requirements", desc: "We take the time to deeply understand your business goals, culture, and growth plans. This insight allows us to shape a targeted hiring strategy that aligns talent acquisition with your long-term objectives." },
    { title: "Role and Requirement Analysis", desc: "A successful hiring strategy begins with clarity. We work closely with your team to define the responsibilities, experience, and must-have skills for each role, ensuring that every candidate is evaluated against the right criteria." },
    { title: "Talent Sourcing Strategy", desc: "We proactively identify and engage top talent through multiple channels, including online job portals, professional social media platforms, and trusted industry networks. By leveraging these diverse sources, we ensure access to a wide pool of qualified candidates, strengthen our employer brand visibility, and build long-term relationships with potential hires." },
    { title: "Screening and Shortlisting", desc: "We carefully evaluate candidates based on their skills, experience, and cultural alignment. Our process ensures that shortlisted individuals not only meet the technical requirements of the role but also fit seamlessly into the organizational values and work environment. This balanced approach helps us identify talent that is both capable and committed, setting the stage for long-term success." },
    { title: "Recruiter Assessment", desc: "Our recruiters conduct initial assessments to evaluate both technical expertise and interpersonal capabilities. This dual focus ensures that candidates not only possess the required knowledge and skills but also demonstrate strong communication, collaboration, and adaptability. By balancing technical proficiency with interpersonal strengths, we identify individuals who are well-rounded and prepared to thrive within the organization." },
    { title: "Interview Coordination", desc: "We oversee the entire interview scheduling process, ensuring seamless communication between candidates and hiring teams. By managing logistics, aligning availability, and providing timely updates, we create a smooth and professional experience that reflects positively on our organization and keeps the recruitment journey efficient and transparent." },
    { title: "Offer Management", desc: "We support both the organization and the candidate throughout the negotiation process, ensuring transparency and fairness. By facilitating open communication and aligning expectations, we help both parties reach a mutually beneficial agreement. This approach strengthens trust, enhances candidate experience, and secures successful offer acceptance." },
    { title: "On boarding Support", desc: "We provide comprehensive on boarding assistance to ensure a smooth transition for new hires. From managing documentation and compliance requirements to facilitating introductions and orientation, we create a seamless joining experience. This structured support helps employees feel welcomed, informed, and ready to contribute from day one." },
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
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

  const ProcessCard = ({ step, index }: { step: { title: string, desc: string }, index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <motion.div variants={fadeInUp} className="group">
        <div
          className={`relative bg-white border border-navy/5 rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${isExpanded
            ? 'shadow-2xl'
            : 'shadow-md hover:shadow-xl hover:-translate-y-1'
            }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Colored left accent bar */}
          <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-500 ${isExpanded ? 'bg-gold' : 'bg-navy/10 group-hover:bg-gold/50'
            }`} />
  
          {/* Card Header - always visible */}
          <div className="flex items-center gap-6 px-8 py-6 pl-10">
            <span className="text-4xl font-display font-black text-gold/20 group-hover:text-gold/40 transition-colors leading-none select-none shrink-0 w-12 text-center">
              {String(index + 1).padStart(2, "0")}
            </span>
  
            <div className="flex-grow">
              <h4 className="text-lg sm:text-xl font-display font-bold text-navy leading-tight tracking-tight">
                {step.title}
              </h4>
            </div>
  
            {/* Expand toggle icon */}
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${isExpanded ? 'bg-gold text-navy' : 'bg-navy/5 text-navy group-hover:bg-navy/10'
              }`}>
              <ArrowUpRight size={16} className={`transition-transform duration-500 ${isExpanded ? 'rotate-90' : ''}`} />
            </div>
          </div>
  
          {/* Expandable Content */}
          <div
            className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="px-8 pb-8 pl-10 border-t border-navy/5">
              <div className="flex gap-6 pt-6">
                <div className="w-12 shrink-0" />{/* spacer to align with title */}
                <p 
                  className="text-navy/75 text-sm sm:text-base leading-relaxed font-semibold"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  {step.desc}
                </p>
              </div>
  
              <div className="flex items-center gap-2 mt-6 pl-18">
                <div className="flex gap-1.5">
                  {[1, 2, 3].map(d => <div key={d} className="w-1.5 h-1.5 rounded-full bg-gold" />)}
                </div>
              </div>
            </div>
          </div>
  
          {/* Collapsed preview — shows first line of text */}
          {!isExpanded && (
            <div className="px-8 pb-6 pl-10">
              <div className="flex gap-6">
                <div className="w-12 shrink-0" />
                <p 
                  className="text-navy/50 text-sm leading-relaxed font-medium line-clamp-2"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          )}
  
          {/* Footer row */}
          <div className={`flex items-center justify-end px-8 py-3 pl-10 border-t border-navy/5 ${isExpanded ? 'bg-gold/5' : 'bg-transparent'
            }`}>
            <button
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] transition-colors duration-300 focus:outline-none"
              style={{ color: isExpanded ? '#D4AF37' : '#1e293b' }}
              onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
            >
              {isExpanded ? "Show less" : "Read more"}
              <ArrowUpRight size={12} className={`transition-transform duration-500 ${isExpanded ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

const RecruitmentProcessCards = () => (
    <section className="py-24 bg-background">
    <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
      <SectionTitle label="The Roadmap" title="Recruitment Intelligence" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 gap-4 xl:gap-6"
      >
        {processSteps.map((step, i) => (
          <ProcessCard key={step.title} step={step} index={i} />
        ))}
      </motion.div>
    </div>
  </section>
);

const SectionTitle = ({ label, title }: { label: string; title: string }) => (
    <div className="text-center mb-16">
      <p className="text-teal font-semibold tracking-[0.2em] uppercase text-sm mb-3">{label}</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">{title}</h2>
      <div className="w-20 h-1.5 gradient-gold mx-auto mt-6 rounded-full" />
    </div>
  );

export default RecruitmentProcessCards;