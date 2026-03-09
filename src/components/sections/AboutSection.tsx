import { Link, useLocation } from "react-router-dom";
import { Users, Globe, Heart, Lightbulb, Shield, Star, Target, Award, CheckCircle2, Zap, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";

const aboutMeeting = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070";
const visionSummit = "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2074";

const values = [
  { icon: Users, title: "Collaboration", desc: "We believe in the power of teamwork uniting diverse perspectives to foster innovation and achieve shared goals." },
  { icon: Shield, title: "Integrity", desc: "We operate with honesty and transparency in all interactions, ensuring trust and respect among clients and candidates alike." },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace cutting-edge technology and progressive ideas to stay ahead of the curve and offer the best solutions for our clients." },
  { icon: Heart, title: "Inclusivity", desc: "We are committed to promoting diversity in talent acquisition, creating a more equitable and varied workforce." },
  { icon: Star, title: "Excellence", desc: "We strive for the highest standards in our services, consistently delivering exceptional results and value to our partners." },
];

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

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const stats = [
  { label: "Years Experience", value: 20, suffix: "+" },
  { label: "Placements Made", value: 5000, suffix: "+" },
  { label: "Global Partners", value: 200, suffix: "+" },
  { label: "Success Rate", value: 98, suffix: "%" },
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
              <p className="text-navy/75 text-sm sm:text-base leading-relaxed font-semibold">
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
              <p className="text-navy/50 text-sm leading-relaxed font-medium line-clamp-2">
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

const AboutSection = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const isHomePage = location.pathname === "/";

  return (
    <div className="bg-background overflow-hidden">
      {/* Company Story */}
      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px] -ml-64 -mb-64" />

        <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold/30 rounded-tl-3xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-teal/30 rounded-br-3xl" />

              <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border/50 relative z-10 mx-auto max-w-lg lg:max-w-xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1 }}
                  src={aboutMeeting}
                  alt="Team Meeting"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-10 -left-10 bg-card p-8 rounded-2xl shadow-2xl border border-border hidden xl:block z-20"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 gradient-teal rounded-xl flex items-center justify-center text-accent-foreground shadow-lg">
                    <Award size={28} />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground tracking-tight">Top Rated</p>
                    <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Agency of the Year 2024</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6">
                <div className="w-12 h-[2px] bg-gold" />
                <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Our Heritage</p>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-[1.1]">
                Nautilus International <br />
                <span className="text-gradient-gold italic">Catalysts for Global Success</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-4 text-foreground text-sm md:text-base leading-relaxed font-bold">
                <p>
                  At <span className="text-foreground font-semibold">Nautilus International</span>, we understand that innovation thrives through collaboration and the collective
                  power of people. Your goal is to challenge the status quo, pioneer new solutions, and propel industries into
                  the future.
                </p>
                <p>
                  Our mission is to connect you with the exceptional talent that can make that vision a reality.
                  We harness advanced recruitment technology to enhance your hiring process, expand your outreach, and
                  create a more inclusive talent pool.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border/50">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <p className="text-2xl md:text-3xl font-bold text-navy mb-1 tracking-tight">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-navy/50 text-xs uppercase font-bold tracking-[0.2em]">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Team Imagery Section - Hidden on About page per user request */}
      {!isAboutPage && (
        <section className="py-16 bg-background relative z-10 w-full px-6 md:px-10 lg:px-20 xl:px-24">
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_24,_43,_0.1)] relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200"
                alt="Professional Business Woman Working on Laptop at Desk"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_24,_43,_0.1)] relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                alt="Team Discussing Strategies at Table"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500" />
            </motion.div>
          </div>
        </section>
      )}

      {/* Vision & Mission Sections */}
      <section className="relative py-20 overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2 }}
            src={visionSummit}
            alt="Vision"
            className="w-full h-full object-cover grayscale opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/80 to-navy" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-10 lg:px-20 xl:px-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="group bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[2rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-500">
                <Target className="text-gold group-hover:text-navy transition-colors" size={32} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary-foreground mb-6">Our Vision</h3>
              <p className="text-primary-foreground/70 text-lg leading-relaxed font-bold italic">
                "To be the leading global catalyst for transformation, empowering organizations to build world-class teams that redefine industry standards and exceed all expectations."
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="group bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[2rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-teal/20 flex items-center justify-center mb-8 group-hover:bg-teal transition-colors duration-500">
                <Award className="text-teal group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary-foreground mb-6">Our Mission</h3>
              <p className="text-primary-foreground/70 text-lg leading-relaxed font-bold">
                "To bridge the gap between ambition and achievement by identifying exceptional talent and leveraging intelligent recruitment technology to drive sustainable corporate success."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values - About page only */}
      {!isHomePage && (
        <section className="py-24 bg-surface/50 relative">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
            <SectionTitle label="The Foundation" title="Our Core Values" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8 mt-16"
            >
              {values.map((v, i) => {
                const Icon = v.icon;
                const isLastOnSm = i === 4;
                return (
                  <motion.div
                    key={v.title}
                    variants={fadeInUp}
                    whileHover={{ y: -12 }}
                    className={`relative bg-card rounded-2xl p-8 xl:p-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-navy/5 group hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-gold/20 transition-all duration-500 overflow-hidden ${isLastOnSm ? "sm:col-span-2 lg:col-span-1" : ""
                      }`}
                  >
                    {/* Glossy Overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-transparent group-hover:border-navy/20 rounded-tl-2xl transition-colors duration-500" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-transparent group-hover:border-navy/20 rounded-br-2xl transition-colors duration-500" />

                    <div className="w-16 h-16 xl:w-20 xl:h-20 mx-auto rounded-2xl gradient-teal flex items-center justify-center mb-6 xl:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl relative z-10">
                      <Icon className="text-accent-foreground" size={window.innerWidth > 1280 ? 36 : 28} />
                    </div>
                    <h4 className="font-display font-bold text-foreground text-xl xl:text-2xl mb-4 group-hover:text-navy transition-colors relative z-10">{v.title}</h4>
                    <p className="text-foreground text-sm xl:text-base leading-relaxed font-medium group-hover:text-foreground/90 transition-colors relative z-10">{v.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* Recruitment Process Sleek - About page only */}
      {!isHomePage && (
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-20 text-center"
            >
              <Link
                to="/recruitment-process"
                className="inline-flex items-center gap-3 bg-navy text-primary-foreground px-10 py-5 rounded-full font-bold hover:bg-navy/90 hover:scale-105 transition-all shadow-xl group tracking-wide"
              >
                EXAMINE OUR FULL PROCESS
                <Zap size={18} className="group-hover:rotate-12 transition-transform text-gold fill-gold" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Team Pillars - About page only */}
      {!isHomePage && (
        <section className="py-16 gradient-navy text-primary-foreground">
          <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
            <div className="text-center mb-16">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Our Strength</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">Built on Expertise</h2>
              <div className="w-16 h-1 gradient-gold mx-auto rounded-full" />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-12"
            >
              {[
                { icon: Star, title: "Quality of People", desc: "Our recruiters aren't just HR professionals; they are industry veterans with deep domain technical expertise." },
                { icon: Globe, title: "Global Network", desc: "Access to an international talent pool that transcends geographic boundaries and local limitations." },
                { icon: Zap, title: "Agile Service", desc: "A bespoke, responsive recruitment lifecycle designed to scale with your organization's immediate needs." },
              ].map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div key={p.title} variants={fadeInUp} className="text-center group">
                    <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-500">
                      <Icon className="text-gold group-hover:text-navy transition-colors" size={36} />
                    </div>
                    <h4 className="font-display font-bold text-2xl mb-4">{p.title}</h4>
                    <p className="text-primary-foreground/70 leading-relaxed font-semibold italic">{p.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* Testimonials - Hidden on About page per user request */}
      {!isAboutPage && (
        <section className="py-16">
          <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
            <SectionTitle label="Success Stories" title="Partner Feedback" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                { name: "Rajesh Kumar", role: "CEO, TechVista", text: "Nautilus International didn't just find us employees; they found us partners. Their deep understanding of our company culture was remarkable." },
                { name: "Sarah Jenkins", role: "HR head, GlobalFlow", text: "The executive search team provided a level of discretion and quality that we haven't found elsewhere in 10 years." },
                { name: "Michael Chen", role: "MD, Innovate Asia", text: "Speed and quality are often at odds. Nautilus managed to deliver both for our critical expansion project." },
              ].map((t) => (
                <motion.div
                  key={t.name}
                  variants={fadeInUp}
                  className="bg-card p-10 rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all border-b-4 border-b-teal"
                >
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center text-gold font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <h5 className="font-bold text-foreground">{t.name}</h5>
                      <p className="text-teal text-sm font-semibold">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-10 bg-surface">
        <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full gradient-navy px-10 py-8 md:py-10 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
          >
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal/20 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />

            {/* Text */}
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-foreground mb-2">
                Your Transformation Starts Here
              </h2>
              <p className="text-primary-foreground/75 text-sm sm:text-base leading-relaxed max-w-2xl">
                Whether you're a visionary company or an ambitious professional, let's create your success story together.
              </p>
            </div>

            {/* Button */}
            <div className="relative z-10 shrink-0">
              <Link
                to="/contact"
                className="gradient-teal text-accent-foreground px-8 py-3.5 rounded-full font-bold tracking-wide hover:scale-105 transition-all shadow-xl inline-block whitespace-nowrap"
              >
                Submit Your CV
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


const SectionTitle = ({ label, title }: { label: string; title: string }) => (
  <div className="text-center mb-16">
    <p className="text-teal font-semibold tracking-[0.2em] uppercase text-sm mb-3">{label}</p>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">{title}</h2>
    <div className="w-20 h-1.5 gradient-gold mx-auto mt-6 rounded-full" />
  </div>
);

export default AboutSection;
