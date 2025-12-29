import { motion } from "motion/react";
import heroImage from "figma:asset/67c2dc4663d7717c8cc25a45dada382f273b9f59.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-6 text-center">
        
        {/* Hero Image Animation */}
        <motion.div 
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="inline-flex mb-8"
        >
          <img 
            src={heroImage} 
            alt="Thilina Jeewantha"
            className="w-32 h-32 object-cover rounded-full drop-shadow-2xl border-4 border-white dark:border-gray-800"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-[1.1]"
        >
          Crafting Empathetic <br className="hidden md:block" />
          <span className="text-[#004aad]">Experiences with AI</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Hi, I'm Thilina. A Product Designer & UX Engineer crafting minimal, human-centric solutions with the power of AI.
        </motion.p>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.6 }}
           className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium uppercase tracking-widest text-gray-400 dark:text-gray-600"
        >
          <span>Market Perception</span>
          <span className="text-[#004aad]">•</span>
          <span>Product Conversion</span>
          <span className="text-[#004aad]">•</span>
          <span>Brand Love</span>
        </motion.div>

      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl -z-10 pointer-events-none">
         <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-[100px] opacity-60" />
         <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-purple-50 dark:bg-purple-900/10 rounded-full blur-[100px] opacity-60" />
      </div>
    </section>
  );
};