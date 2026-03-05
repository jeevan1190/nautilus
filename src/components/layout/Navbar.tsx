import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY > 50 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled || location.pathname !== "/"
          ? "gradient-navy shadow-lg py-3 md:py-4 backdrop-blur-md bg-opacity-95"
          : "bg-transparent py-5 md:py-8"
          } ${scrolled ? 'border-b border-primary-foreground/10' : ''}`}
      >
        <div className="w-full flex items-center justify-between px-4 md:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 group transition-transform hover:scale-[1.01] z-50">
            <span className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-primary-foreground tracking-tight whitespace-nowrap">
              Nautilus <span className="text-gradient-gold">International</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`relative text-base xl:text-lg tracking-normal uppercase font-bold transition-all duration-300 py-2 px-2 group ${isActive(item.href)
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
              className="gradient-gold text-white px-8 py-4 rounded-sm text-base xl:text-lg font-bold tracking-wide hover:shadow-[0_0_25px_rgba(202,138,4,0.4)] hover:scale-105 transition-all shadow-xl"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-primary-foreground hover:text-gold transition-colors p-2 z-50 relative"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-fit max-h-screen rounded-bl-2xl w-1/2 min-w-[200px] z-50 bg-navy/98 backdrop-blur-2xl border-l border-b border-primary-foreground/10 shadow-2xl transition-transform duration-500 ease-in-out flex flex-col pt-24 px-6 pb-6 overflow-y-auto ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <ul className="flex flex-col items-start gap-4">
          {navItems.map((item) => (
            <li key={item.href} className="w-full">
              <Link
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-lg tracking-wide uppercase font-bold transition-all block py-1.5 ${isActive(item.href)
                  ? "text-gold"
                  : "text-primary-foreground hover:text-gold"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <div className="w-full h-px bg-primary-foreground/10 my-4" />
          <li className="w-full">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="gradient-gold text-white px-4 py-3 rounded-sm text-base font-bold tracking-wide shadow-xl text-center block w-full hover:scale-105 transition-all"
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
