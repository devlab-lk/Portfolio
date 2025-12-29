import { motion } from "motion/react";
import heroImage from "figma:asset/67c2dc4663d7717c8cc25a45dada382f273b9f59.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#004aad]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#004aad]/10 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#004aad]/10 text-[#004aad] text-sm font-medium tracking-wide">
            Senior Product Designer & UX/UI Engineer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
            Designing <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004aad] to-[#0066dd]">
              Intelligent
            </span> <br/>
            Experiences.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
            Hi, I'm Thilina. A Product Designer & UX Engineer crafting minimal, human-centric solutions with the power of AI.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gray-900 text-white font-medium shadow-lg shadow-gray-900/20 hover:bg-[#004aad] transition-colors"
            >
              View Work
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white text-gray-900 font-medium border border-gray-200 shadow-sm hover:border-[#004aad] transition-colors"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] flex items-center justify-center"
        >
          {/* 3D Character with Cursor Tracking */}
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.img 
              src={heroImage} 
              alt="Thilina Jeewantha - Product Designer"
              className="w-full max-w-md h-auto object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />

            {/* Floating Cards elements for visual interest */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute top-1/4 right-10 p-4 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-white/50 max-w-[160px]"
            >
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-2 text-green-600 text-xs font-bold">98%</div>
              <div className="h-2 w-16 bg-gray-200 rounded mb-1" />
              <div className="h-2 w-10 bg-gray-200 rounded" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 0 }}
              className="absolute bottom-1/4 left-0 md:left-10 p-4 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-white/50 max-w-[160px]"
            >
              <div className="flex -space-x-2 mb-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white" />
                ))}
              </div>
              <div className="h-2 w-20 bg-gray-200 rounded" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-sm"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
      </motion.div>
    </section>
  );
};