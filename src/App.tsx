import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { DesignProcess } from "./components/DesignProcess";
import { RecentWork } from "./components/RecentWork";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] selection:bg-[#004aad]/10 selection:text-[#004aad] font-sans">
      <Navbar />
      <main>
        <Hero />
        <DesignProcess />
        <RecentWork />
      </main>
      <Footer />
    </div>
  );
}