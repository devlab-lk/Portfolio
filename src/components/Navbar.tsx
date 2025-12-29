import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", path: "/" },
    { name: "Process", path: "/about" },
    { name: "About", path: "/about" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`mx-auto max-w-6xl px-6`}>
        <div className={`
          relative flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300
          ${isScrolled ? "bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-sm border border-white/20 dark:border-white/10" : "bg-transparent"}
        `}>
          <Link to="/" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Thilina<span className="text-[#004aad]">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path 
                    ? "text-[#004aad]" 
                    : "text-gray-600 dark:text-gray-300 hover:text-[#004aad] dark:hover:text-[#004aad]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Contact is special as it links to Footer */}
            <a
              href="#contact"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#004aad] dark:hover:text-[#004aad] transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a 
              href="#contact"
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-[#004aad] dark:hover:bg-[#004aad] dark:hover:text-white transition-colors"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              className="p-2 text-gray-600 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-6 right-6 p-6 bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-white/10 md:hidden"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-lg font-medium text-gray-800 dark:text-gray-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="text-lg font-medium text-gray-800 dark:text-gray-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};