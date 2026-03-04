import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection";
import { useEffect } from "react";

const Differentiators = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-grow">
                <header className="gradient-navy pt-40 pb-24 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[30deg] translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gold/5 -skew-x-[30deg] -translate-x-1/2" />

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <p className="text-gold font-semibold tracking-[0.4em] uppercase text-xs mb-4">Our Advantage</p>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6">What Differentiates Us</h1>
                        <div className="w-24 h-1.5 gradient-gold mx-auto rounded-full mb-8" />
                        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                            Discover the unique features and commitment to quality that set Nautilus International apart in the recruitment industry.
                        </p>
                    </div>
                </header>
                <DifferentiatorsSection />
            </main>
            <Footer />
        </div>
    );
};

export default Differentiators;
