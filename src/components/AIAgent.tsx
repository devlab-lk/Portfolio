import { motion } from "motion/react";

interface AIAgentProps {
  className?: string;
  state?: "idle" | "thinking" | "moving" | "happy";
}

export const AIAgent = ({ className = "", state = "idle" }: AIAgentProps) => {
  // Simple abstract geometric "AI" representation
  // A glowing central orb with orbiting rings
  
  const variants = {
    idle: {
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    },
    thinking: {
      scale: [1, 1.1, 1],
      rotate: [0, 180, 360],
      transition: { duration: 2, repeat: Infinity, ease: "linear" }
    },
    moving: {
      x: [0, 5, 0],
      transition: { duration: 1, repeat: Infinity }
    }
  };

  return (
    <motion.div 
      className={`relative flex items-center justify-center w-16 h-16 ${className}`}
      variants={variants}
      animate={state === "moving" ? "idle" : state} // Base idle float + specific state overrides if complex
    >
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full" />
      
      {/* Main Orb */}
      <div className="relative w-12 h-12 bg-gradient-to-tr from-blue-500 to-indigo-300 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5),inset_-4px_-4px_8px_rgba(0,0,0,0.1),inset_4px_4px_8px_rgba(255,255,255,0.4)] flex items-center justify-center overflow-hidden">
        <div className="absolute top-2 right-2 w-4 h-4 bg-white/40 rounded-full blur-[2px]" />
        
        {/* "Face" or Interface elements */}
        <div className="flex gap-1">
            <motion.div 
              className="w-1.5 h-3 bg-white rounded-full" 
              animate={{ height: state === "thinking" ? [4, 12, 4] : 8 }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <motion.div 
              className="w-1.5 h-3 bg-white rounded-full" 
              animate={{ height: state === "thinking" ? [12, 4, 12] : 8 }} 
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
            />
        </div>
      </div>

      {/* Orbiting Ring */}
      <motion.div 
        className="absolute w-16 h-16 border border-indigo-200/50 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ rotate: { duration: 8, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
      />
    </motion.div>
  );
};
