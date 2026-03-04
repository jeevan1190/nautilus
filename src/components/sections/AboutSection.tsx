import { Link } from "react-router-dom";
import { Users, Globe, Heart, Lightbulb, Shield, Star, Target, Award, CheckCircle2, TrendingUp, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";

const aboutMeeting = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070";
const visionSummit = "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2074";

const values = [
  { icon: Users, title: "Collaboration", desc: "We believe in the power of teamwork uniting diverse perspectives to foster innovation and achieve shared goals." },
  { icon: Shield, title: "Integrity", desc: "We operate with honesty and transparency in all interactions, ensuring trust and respect among clients and candidates alike." },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace cutting-edge technology and progressive ideas to stay ahead of the curve and offer the best solutions for our clients." },
  { icon: Heart, title: "Inclusivity", desc: "We are committed to promoting diversity in talent acquisition, creating a more equitable and varied workforce." },
  { icon: Star, title: "Excellence", desc: "We strive for the highest standards in our services, consistently delivering exceptional results and value to our partners." },
];

const processSteps = [
  { title: "Understanding Requirements", desc: "In-depth consultation to align with your culture and goals." },
  { title: "Role Analysis", desc: "Detailed breakdown of technical skills and soft competencies." },
  { title: "Talent Sourcing", desc: "Omnichannel approach targeting both active and passive talent." },
  { title: "Screening & Assessment", desc: "Rigorous vetting process ensuring only the best qualify." },
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

const AboutSection = () => {
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

              <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border/50 relative z-10 mx-auto max-w-lg lg:max-w-none">
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
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8 leading-[1.1]">
                Nautilus International <br />
                <span className="text-gradient-gold italic">Catalysts for Global Success</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-6 text-foreground/70 text-xl leading-relaxed font-normal">
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
                    <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-1 tracking-tight">
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
              <p className="text-primary-foreground/70 text-lg leading-relaxed font-light italic">
                "To be the leading global catalyst for transformation, empowering organizations to build world-class teams that redefine industry standards and exceed all expectations."
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="group bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[2rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-teal/20 flex items-center justify-center mb-8 group-hover:bg-teal transition-colors duration-500">
                <Award className="text-teal group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary-foreground mb-6">Our Mission</h3>
              <p className="text-primary-foreground/70 text-lg leading-relaxed font-light">
                "To bridge the gap between ambition and achievement by identifying exceptional talent and leveraging intelligent recruitment technology to drive sustainable corporate success."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
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
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeInUp}
                whileHover={{ y: -12 }}
                className="relative bg-card rounded-2xl p-8 xl:p-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-navy/5 group hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-gold/20 transition-all duration-500 overflow-hidden"
              >
                {/* Glossy Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-transparent group-hover:border-navy/20 rounded-tl-2xl transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-transparent group-hover:border-navy/20 rounded-br-2xl transition-colors duration-500" />

                <div className="w-16 h-16 xl:w-20 xl:h-20 mx-auto rounded-2xl gradient-teal flex items-center justify-center mb-6 xl:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl relative z-10">
                  <v.icon className="text-accent-foreground" size={window.innerWidth > 1280 ? 36 : 28} />
                </div>
                <h4 className="font-display font-bold text-foreground text-xl xl:text-2xl mb-4 group-hover:text-navy transition-colors relative z-10">{v.title}</h4>
                <p className="text-foreground/70 text-sm xl:text-base leading-relaxed font-medium group-hover:text-foreground/90 transition-colors relative z-10">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recruitment Process Sleek */}
      <section className="py-24 bg-background">
        <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
          <SectionTitle label="The Roadmap" title="Recruitment Intelligence" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 max-w-7xl mx-auto"
          >
            {processSteps.map((step, i) => (
              <motion.div key={step.title} variants={fadeInUp} className="relative group h-full">
                <div className="gradient-navy p-[1px] rounded-3xl h-full shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                  <div className="bg-card rounded-[1.7rem] p-8 xl:p-10 h-full border border-border/10 flex flex-col justify-start relative z-10 overflow-hidden">
                    {/* Circle background pattern */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors" />

                    <span className="block text-5xl xl:text-6xl font-display font-bold text-gold/10 mb-6 group-hover:text-gold/30 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-lg xl:text-xl font-bold text-foreground mb-4 leading-tight uppercase tracking-wider relative z-10">{step.title}</h4>
                    <p className="text-foreground/70 text-sm xl:text-base leading-relaxed font-normal relative z-10">{step.desc}</p>
                  </div>
                </div>
                {i < 3 && (
                  <div className="absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 hidden lg:block text-gold/20 z-0 group-hover:text-gold/40 transition-colors">
                    <Zap size={24} />
                  </div>
                )}
              </motion.div>
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


      {/* Team Pillars */}
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
            ].map((p) => (
              <motion.div key={p.title} variants={fadeInUp} className="text-center group">
                <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-500">
                  <p.icon className="text-gold group-hover:text-navy transition-colors" size={36} />
                </div>
                <h4 className="font-display font-bold text-2xl mb-4">{p.title}</h4>
                <p className="text-primary-foreground/70 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto gradient-navy p-12 rounded-[2rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal/20 rounded-full blur-[100px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-[100px] -ml-32 -mb-32" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">Your Transformation Starts Here</h2>
              <p className="text-primary-foreground/80 text-lg mb-10">
                Whether you're a visionary company or an ambitious professional, let's create your success story together.
              </p>
              <Link
                to="/contact"
                className="gradient-teal text-accent-foreground px-10 py-4 rounded-full font-bold tracking-wide hover:scale-105 transition-all shadow-xl inline-block"
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
