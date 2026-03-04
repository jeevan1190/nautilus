import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/recruitment-process" },
  { label: "Why Us", href: "/why-us" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || location.pathname !== "/"
        ? "gradient-navy shadow-lg py-3 md:py-4 backdrop-blur-md bg-opacity-95"
        : "bg-transparent py-5 md:py-8"
        } ${scrolled ? 'border-b border-primary-foreground/10' : ''}`}
    >
      <div className="w-full flex items-center justify-between px-2 md:px-4 lg:px-6">
        <Link to="/" className="flex items-center gap-3 group transition-transform hover:scale-[1.01]">
          <span className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-primary-foreground tracking-tight whitespace-nowrap">
            Nautilus <span className="text-gradient-gold">International</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-20">
          <ul className="flex items-center gap-16">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`relative text-base xl:text-lg tracking-normal uppercase font-bold transition-all duration-300 py-2 px-4 group ${isActive(item.href)
                    ? "text-gold"
                    : "text-primary-foreground hover:text-gold"
                    }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold transform origin-left transition-transform duration-300 ${isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="gradient-gold text-white px-10 py-4 rounded-sm text-base xl:text-lg font-bold tracking-wide hover:shadow-[0_0_25px_rgba(202,138,4,0.4)] hover:scale-105 transition-all shadow-xl"
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary-foreground hover:text-gold transition-colors p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-in-out ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="bg-navy/98 backdrop-blur-2xl border-t border-primary-foreground/5 shadow-2xl px-8 py-12">
          <ul className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href} className="w-full text-center">
                <Link
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg tracking-wide uppercase font-bold transition-all block py-5 ${isActive(item.href)
                    ? "text-gold underline underline-offset-8"
                    : "text-primary-foreground hover:text-gold"
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <div className="w-16 h-px bg-primary-foreground/10 my-4" />
            <li className="w-full">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="gradient-gold text-white px-12 py-6 rounded-sm text-lg font-bold tracking-wide shadow-xl text-center block max-w-[340px] mx-auto hover:scale-105 transition-all"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
