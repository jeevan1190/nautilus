import { TrendingUp, Users, Shield, Zap, Heart, Target, Layers, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion, Variants } from "framer-motion";

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

const partnerReasons = [
  { icon: Target, title: "Expert Strategy", desc: "Deep industry intelligence to find not just candidates, but future leaders.", color: "text-rose-500", bgColor: "bg-rose-50" },
  { icon: Layers, title: "Bespoke Solutions", desc: "Recruitment frameworks custom-built for your specific organizational goals.", color: "text-indigo-500", bgColor: "bg-indigo-50" },
  { icon: Users, title: "Diversity First", desc: "Inclusive practices that enrich your culture and drive innovation.", color: "text-emerald-500", bgColor: "bg-emerald-50" },
  { icon: Zap, title: "Agile Execution", desc: "Streamlined processes that minimize time-to-hire without compromising quality.", color: "text-amber-500", bgColor: "bg-amber-50" },
];

const differentiators = [
  { val: 88, suffix: "%", label: "Placement Success" },
  { val: 10, suffix: "+", label: "Years of Trust" },
  { val: 100, suffix: "+", label: "Global Clients" },
  { val: 15, suffix: "+", label: "Sector Verticals" },
];

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
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const WhyUsSection = () => (
  <section id="why-us" className="py-16 bg-background relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none" />

    <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeInUp} className="text-gold font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6">The Nautilus Difference</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8 leading-[1.1]">
            Why Visionaries <br />
            <span className="text-gradient-gold italic">Choose Our Expertise</span>
          </motion.h2>

          <div className="grid gap-6">
            {partnerReasons.map((r, i) => (
              <motion.div
                key={r.title}
                variants={fadeInUp}
                className="flex gap-6 md:gap-8 group"
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${r.bgColor} border border-navy/5 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-navy transition-all duration-500 group-hover:scale-110 shadow-navy/5`}>
                  <r.icon size={28} className={`${r.color} group-hover:text-white transition-colors`} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2 group-hover:text-navy transition-colors">{r.title}</h4>
                  <p className="text-foreground/60 leading-relaxed text-sm md:text-base font-bold italic group-hover:text-foreground transition-colors">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative mt-12 lg:mt-0"
        >
          <div className="absolute -inset-4 bg-navy/5 rounded-[3rem] rotate-2 hidden md:block" />
          <motion.div
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="relative gradient-navy rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 shadow-2xl overflow-hidden border border-white/10 group"
          >
            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-transparent group-hover:border-gold rounded-tl-[3rem] transition-all duration-500" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-transparent group-hover:border-teal rounded-br-[3rem] transition-all duration-500" />

            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-40 -mt-40" />

            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 border-b border-white/10 pb-6 tracking-wide">
              Global Scale Impact
            </h3>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {differentiators.map((d) => (
                <div key={d.label} className="group/stat">
                  <p className="text-4xl md:text-5xl font-bold text-gold mb-2 transition-transform group-hover/stat:scale-110 duration-500">
                    <Counter value={d.val} suffix={d.suffix} />
                  </p>
                  <p className="text-white/50 text-[10px] md:text-xs uppercase tracking-[0.2em] font-black">{d.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 space-y-5">
              {[
                "Strategic Intelligence Advantage",
                "Advanced Market Mapping",
                "Elite Executive Benchmarking"
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex items-center gap-4 text-white/80 group/item"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center group-hover/item:bg-emerald-500 transition-colors">
                    <CheckCircle2 size={12} className="text-emerald-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-medium text-base md:text-lg tracking-wide">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyUsSection;

