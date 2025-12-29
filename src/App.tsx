import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { useEffect } from "react";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-gray-950 text-[#111827] dark:text-gray-50 selection:bg-[#004aad]/10 selection:text-[#004aad] font-sans transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}