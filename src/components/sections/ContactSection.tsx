import { useState } from "react";
import { MapPin, Phone, Mail, Send, Upload, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [fileName, setFileName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! Your inquiry ${fileName ? "with CV" : ""} has been received. We will get back to you shortly.`);
    setForm({ name: "", email: "", phone: "", message: "" });
    setFileName("");
  };

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

  return (
    <section id="contact" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="flex flex-col justify-center"
            >
              <motion.p variants={fadeInUp} className="text-teal font-semibold tracking-widest uppercase text-sm mb-3">Connect With Us</motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
                Ready to Start Your <br />
                <span className="text-gradient-gold italic">Success Story?</span>
              </motion.h2>

              <div className="space-y-8 mt-4">
                {[
                  { icon: MapPin, title: "Our Headquarters", content: "Office No 214, Vishnu Capital, City Pride School Lane, Chikhali - Moshi, Pune, Maharashtra, India – 411062", color: "text-rose-500", bgColor: "bg-rose-50" },
                  { icon: Phone, title: "Direct Line", content: "+91 7410775779", link: "tel:+917410775779", color: "text-emerald-500", bgColor: "bg-emerald-50" },
                  { icon: Mail, title: "Email Support", content: "hr@nautilusinternational.in", link: "mailto:hr@nautilusinternational.in", color: "text-indigo-500", bgColor: "bg-indigo-50" }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-start gap-5 group">
                    <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center shrink-0 border border-border group-hover:bg-navy transition-colors`}>
                      <item.icon className={`${item.color} group-hover:text-white transition-colors`} size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-1">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-muted-foreground hover:text-teal transition-colors font-medium">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground leading-relaxed">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-full blur-2xl -mr-16 -mt-16" />

              <h3 className="text-2xl font-display font-bold text-foreground mb-2">Inquiry Form</h3>
              <p className="text-muted-foreground text-sm mb-8">
                Complete the form below and our consultants will reach out to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-bold text-muted-foreground ml-1">Full Name</label>
                    <input
                      type="text" name="name" required placeholder="John Doe" value={form.name} onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-surface px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-bold text-muted-foreground ml-1">Email Address</label>
                    <input
                      type="email" name="email" required placeholder="john@example.com" value={form.email} onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-surface px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold text-muted-foreground ml-1">Phone Number</label>
                  <input
                    type="tel" name="phone" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-surface px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold text-muted-foreground ml-1">Upload CV (PDF/DOC)</label>
                  <div className="relative group">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="w-full rounded-xl border border-dashed border-border group-hover:border-emerald-500/50 bg-surface px-5 py-4 flex items-center justify-between transition-all">
                      <div className="flex items-center gap-3">
                        <Upload className={fileName ? "text-emerald-500" : "text-muted-foreground"} size={20} />
                        <span className={`text-sm ${fileName ? "text-foreground font-medium" : "text-muted-foreground/50"}`}>
                          {fileName || "Click to upload your CV"}
                        </span>
                      </div>
                      {fileName && <CheckCircle2 className="text-emerald-500" size={18} />}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold text-muted-foreground ml-1">Your Message</label>
                  <textarea
                    name="message" rows={4} placeholder="How can we help you?" value={form.message} onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-surface px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full h-14 gradient-teal text-accent-foreground rounded-xl font-bold tracking-widest hover:shadow-xl hover:shadow-teal/20 transition-all flex items-center justify-center gap-3 group"
                >
                  SEND MESSAGE <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

