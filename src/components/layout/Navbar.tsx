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
            ? "gradient-navy shadow-lg py-2 md:py-3 backdrop-blur-md bg-opacity-95 border-b border-white/10"
            : "bg-transparent py-4 md:py-5"
          }`}
      >
        <div className="w-full flex items-center justify-between px-4 md:px-8 lg:px-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group transition-transform hover:scale-[1.01] z-50 shrink-0">
            <span className="text-lg md:text-xl lg:text-2xl font-display font-bold text-primary-foreground tracking-tight whitespace-nowrap">
              Nautilus <span className="text-gradient-gold">International</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`relative text-sm xl:text-[15px] tracking-wide uppercase font-semibold transition-all duration-200 py-1.5 px-3 rounded-md group ${isActive(item.href)
                        ? "text-gold bg-white/10"
                        : "text-primary-foreground/90 hover:text-gold hover:bg-white/8"
                      }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gold rounded-full transition-all duration-300 ${isActive(item.href) ? "w-4/5" : "w-0 group-hover:w-4/5"
                        }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="w-px h-6 bg-white/20 mx-2" />

            {/* Contact Button */}
            <Link
              to="/contact"
              className={`gradient-gold text-white px-5 py-2 rounded-md text-sm xl:text-[15px] font-bold tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 whitespace-nowrap ${isActive("/contact") ? "opacity-80" : ""
                }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-primary-foreground hover:text-gold transition-colors p-2 z-50 relative"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-fit max-h-screen rounded-bl-2xl w-[60%] min-w-[220px] z-50 bg-navy backdrop-blur-2xl border-l border-b border-white/10 shadow-2xl transition-transform duration-500 ease-in-out flex flex-col pt-20 px-6 pb-6 overflow-y-auto ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <ul className="flex flex-col items-start gap-1">
          {navItems.map((item) => (
            <li key={item.href} className="w-full">
              <Link
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-base tracking-wide uppercase font-semibold transition-all block py-2 px-3 rounded-md ${isActive(item.href)
                    ? "text-gold bg-white/10"
                    : "text-primary-foreground/90 hover:text-gold hover:bg-white/8"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <div className="w-full h-px bg-white/10 my-3" />
          <li className="w-full">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="gradient-gold text-white px-4 py-2.5 rounded-md text-sm font-bold tracking-widest uppercase shadow-lg text-center block w-full hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
