import { motion } from "motion/react";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  hoverEffect = false 
}) => {
  return (
    <motion.div 
      className={`
        backdrop-blur-2xl bg-white/70 border border-white/40 
        shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
        rounded-2xl 
        ${className}
      `}
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};
